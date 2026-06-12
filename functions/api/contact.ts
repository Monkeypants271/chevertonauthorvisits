// Cloudflare Pages Function — POST /api/contact
//
// Pipeline: honeypot → Turnstile siteverify → field validation → send via Resend.
// Configure these in the Cloudflare Pages dashboard (Settings → Environment variables):
//   TURNSTILE_SECRET_KEY  (secret)  — from the Turnstile widget you create
//   RESEND_API_KEY        (secret)  — from resend.com
//   CONTACT_TO            (plain)   — where leads go (default: Mark.Cheverton1@gmail.com)
//   CONTACT_FROM          (plain)   — verified Resend sender, e.g. "Author Visits <visits@yourdomain.com>"

interface Env {
  TURNSTILE_SECRET_KEY: string;
  RESEND_API_KEY: string;
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
}

interface PagesContext {
  request: Request;
  env: Env;
}

const REQUIRED_FIELDS = [
  "name",
  "email",
  "organization",
  "role",
  "city",
  "state",
  "grades",
  "students",
  "preferredDate",
  "visitType",
  "message",
] as const;

const FIELD_LABELS: Record<string, string> = {
  name: "Contact name",
  email: "Email",
  phone: "Phone",
  organization: "School or organization",
  role: "Role",
  city: "City",
  state: "State",
  grades: "Grade levels",
  students: "Approx. number of students",
  preferredDate: "Preferred date or month",
  visitType: "Visit type",
  bookOrders: "Interested in book orders/signing",
  boces: "Using BOCES Arts-in-Education",
  message: "Message",
};

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const onRequestPost = async (context: PagesContext): Promise<Response> => {
  const { request, env } = context;

  let payload: Record<string, string>;
  try {
    payload = (await request.json()) as Record<string, string>;
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  const get = (k: string) => (payload[k] ?? "").toString().trim();

  // 1. Honeypot — bots fill this; humans never see it. Pretend success.
  if (get("company")) {
    return json({ ok: true });
  }

  // 2. Turnstile verification (must happen server-side).
  const token = get("cf-turnstile-response");
  if (!token) {
    return json({ error: "Verification missing. Please complete the check and try again." }, 400);
  }
  if (!env.TURNSTILE_SECRET_KEY) {
    return json({ error: "Server is not configured to verify submissions yet." }, 500);
  }

  const verifyBody = new URLSearchParams({
    secret: env.TURNSTILE_SECRET_KEY,
    response: token,
  });
  const ip = request.headers.get("CF-Connecting-IP");
  if (ip) verifyBody.append("remoteip", ip);

  const verifyRes = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    { method: "POST", body: verifyBody },
  );
  const verify = (await verifyRes.json()) as { success: boolean };
  if (!verify.success) {
    return json({ error: "Verification failed. Please try the check again." }, 400);
  }

  // 3. Field validation.
  const missing = REQUIRED_FIELDS.filter((f) => !get(f));
  if (missing.length > 0) {
    return json({ error: "Please fill in all required fields." }, 400);
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(get("email"))) {
    return json({ error: "Please enter a valid email address." }, 400);
  }

  // 4. Send via Resend.
  if (!env.RESEND_API_KEY) {
    return json({ error: "Email service is not configured yet." }, 500);
  }

  const to = env.CONTACT_TO || "Mark.Cheverton1@gmail.com";
  const from = env.CONTACT_FROM || "Author Visits <onboarding@resend.dev>";

  const rows = Object.keys(FIELD_LABELS)
    .filter((k) => get(k))
    .map((k) => ({ label: FIELD_LABELS[k], value: get(k) }));

  const text =
    `New author-visit request\n\n` +
    rows.map((r) => `${r.label}: ${r.value}`).join("\n");

  const html =
    `<h2 style="font-family:sans-serif;color:#0e2140">New author-visit request</h2>` +
    `<table style="font-family:sans-serif;border-collapse:collapse">` +
    rows
      .map(
        (r) =>
          `<tr><td style="padding:4px 12px 4px 0;vertical-align:top;color:#4a5468"><strong>${escapeHtml(
            r.label,
          )}</strong></td><td style="padding:4px 0;color:#1c2433">${escapeHtml(
            r.value,
          ).replace(/\n/g, "<br>")}</td></tr>`,
      )
      .join("") +
    `</table>`;

  const sendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: get("email"),
      subject: `Author Visit Request — ${get("organization") || get("name")}`,
      text,
      html,
    }),
  });

  if (!sendRes.ok) {
    return json({ error: "We couldn't send your request just now. Please email Mark directly." }, 502);
  }

  return json({ ok: true });
};
