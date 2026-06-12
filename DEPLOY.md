# Deploying to Cloudflare Pages

This site is a **static Next.js export** plus one **Cloudflare Pages Function**
(`functions/api/contact.ts`) that handles the Request Pricing form:

```
Browser form (Turnstile widget)
  → POST /api/contact  (Pages Function)
      → honeypot check
      → Turnstile siteverify (server-side)
      → field validation
      → Resend API  →  Mark.Cheverton1@gmail.com
```

`npm run build` outputs the static site to `out/`. Cloudflare serves `out/` and
runs `functions/` as Workers automatically.

---

## 1. Create the Turnstile widget

1. Cloudflare dashboard → **Turnstile** → **Add widget**.
2. Add your domain (and `localhost` for testing).
3. Copy the **Site Key** (public) and **Secret Key** (private).

## 2. Create a Resend account

1. Sign up at [resend.com](https://resend.com) and create an **API key**.
2. **Verify a sending domain** (Resend → Domains → add DNS records).
   - Until you do, Resend's test sender `onboarding@resend.dev` only delivers to
     your own Resend account email — fine for a first test, not for production.
3. Once verified, your `CONTACT_FROM` becomes something like
   `Author Visits <visits@markcheverton.com>`.

## 3. Connect the repo to Cloudflare Pages

Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → connect Git.

Build settings:

| Setting | Value |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |

## 4. Set environment variables

In **Pages → Settings → Environment variables** (add to **Production** and
**Preview**):

| Name | Type | Value |
| --- | --- | --- |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Plaintext | Turnstile **site** key |
| `TURNSTILE_SECRET_KEY` | Secret | Turnstile **secret** key |
| `RESEND_API_KEY` | Secret | Resend API key |
| `CONTACT_TO` | Plaintext | `Mark.Cheverton1@gmail.com` |
| `CONTACT_FROM` | Plaintext | Verified sender, e.g. `Author Visits <visits@yourdomain.com>` |

`NEXT_PUBLIC_TURNSTILE_SITE_KEY` is read at **build time**, so redeploy after
changing it. The others are read at **request time** by the function.

## 5. Deploy

Push to your default branch (or click **Retry deployment**). Done.

---

## Testing locally

**The site (no form delivery):**

```bash
npm run dev          # http://localhost:3000
```

`npm run dev` uses Cloudflare's always-pass Turnstile TEST key automatically, but
the `/api/contact` function does **not** run under `next dev`.

**The full flow including the function:**

```bash
cp .dev.vars.example .dev.vars   # then add a real RESEND_API_KEY
npm run build
npx wrangler pages dev out
```

`wrangler pages dev` serves `out/` and runs `functions/`, reading secrets from
`.dev.vars` (gitignored). With the test Turnstile secret, verification always
passes, so you can confirm the email actually sends through Resend.

---

## Spam protection summary

- **Turnstile**, verified server-side in the function (client widget alone is not
  protection).
- **Honeypot** `company` field — bots fill it, real users never see it.
- **Server-side validation** of all required fields + email format.
- Optional next step: add a **Cloudflare WAF rate-limiting rule** on
  `/api/contact` (e.g. 5 requests / minute / IP) for an extra layer.
