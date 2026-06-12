"use client";

import Script from "next/script";
import { useRef, useState, type FormEvent } from "react";
import { site, turnstileSiteKey } from "@/lib/site";

const fieldClass =
  "mt-1 block w-full rounded-lg border border-navy-200 bg-white px-3 py-2.5 text-ink shadow-sm focus:border-cyan-accent focus:outline-none focus:ring-2 focus:ring-cyan-bright/40";
const labelClass = "block text-sm font-semibold text-navy-900";

const gradeOptions = [
  "Pre-K / Kindergarten",
  "Grades 1–2",
  "Grades 3–5",
  "Grades 6–8",
  "High school",
  "Mixed / multiple grades",
];

type Status = "idle" | "submitting" | "success" | "error";

// Minimal typing for the Turnstile global we load via <Script>.
declare global {
  interface Window {
    turnstile?: { reset: (widget?: string) => void };
  }
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    // Turnstile injects this hidden field once the widget solves.
    const token = (data.get("cf-turnstile-response") as string) || "";
    if (!token) {
      setStatus("error");
      setErrorMsg(
        "Please complete the verification check above before sending. If it hasn't appeared, refresh the page and try again.",
      );
      return;
    }

    const payload: Record<string, string> = {};
    data.forEach((value, key) => {
      payload[key] = typeof value === "string" ? value : "";
    });

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        return;
      }

      const body = (await res.json().catch(() => null)) as
        | { error?: string }
        | null;
      throw new Error(body?.error || "Something went wrong sending your request.");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong sending your request.",
      );
      // Reset the Turnstile widget so the user can get a fresh token.
      window.turnstile?.reset();
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-growth/30 bg-growth/5 p-8 text-center"
      >
        <h2 className="text-2xl font-bold text-navy-900">Thank you.</h2>
        <p className="mt-3 text-lg text-ink-soft">
          Mark will follow up soon with availability, pricing, and next steps.
        </p>
      </div>
    );
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      />
      <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Honeypot — hidden from humans, tempting to bots. Leave it empty. */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>
              Contact name <span className="text-cyan-accent">*</span>
            </label>
            <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>
              Email <span className="text-cyan-accent">*</span>
            </label>
            <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone <span className="text-ink-soft font-normal">(optional)</span>
            </label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="organization" className={labelClass}>
              School or organization <span className="text-cyan-accent">*</span>
            </label>
            <input id="organization" name="organization" type="text" required className={fieldClass} />
          </div>
          <div>
            <label htmlFor="role" className={labelClass}>
              Role <span className="text-cyan-accent">*</span>
            </label>
            <input
              id="role"
              name="role"
              type="text"
              required
              placeholder="Librarian, Principal, Teacher…"
              className={fieldClass}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className={labelClass}>
                City <span className="text-cyan-accent">*</span>
              </label>
              <input id="city" name="city" type="text" required autoComplete="address-level2" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="state" className={labelClass}>
                State <span className="text-cyan-accent">*</span>
              </label>
              <input id="state" name="state" type="text" required autoComplete="address-level1" className={fieldClass} />
            </div>
          </div>
          <div>
            <label htmlFor="grades" className={labelClass}>
              Grade levels <span className="text-cyan-accent">*</span>
            </label>
            <select id="grades" name="grades" required defaultValue="" className={fieldClass}>
              <option value="" disabled>
                Select grade levels
              </option>
              {gradeOptions.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="students" className={labelClass}>
              Approximate number of students <span className="text-cyan-accent">*</span>
            </label>
            <input id="students" name="students" type="text" inputMode="numeric" required className={fieldClass} />
          </div>
          <div>
            <label htmlFor="preferredDate" className={labelClass}>
              Preferred date or month <span className="text-cyan-accent">*</span>
            </label>
            <input id="preferredDate" name="preferredDate" type="text" required className={fieldClass} />
          </div>
          <div>
            <label htmlFor="visitType" className={labelClass}>
              Visit type <span className="text-cyan-accent">*</span>
            </label>
            <select id="visitType" name="visitType" required defaultValue="" className={fieldClass}>
              <option value="" disabled>
                Select a visit type
              </option>
              <option value="In-person">In-person</option>
              <option value="Virtual">Virtual</option>
              <option value="Not sure">Not sure</option>
            </select>
          </div>
          <div>
            <label htmlFor="bookOrders" className={labelClass}>
              Interested in book orders / signing?{" "}
              <span className="text-ink-soft font-normal">(optional)</span>
            </label>
            <select id="bookOrders" name="bookOrders" defaultValue="" className={fieldClass}>
              <option value="">No preference</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Not sure">Not sure</option>
            </select>
          </div>
          <div>
            <label htmlFor="boces" className={labelClass}>
              Using BOCES Arts-in-Education?{" "}
              <span className="text-ink-soft font-normal">(optional)</span>
            </label>
            <select id="boces" name="boces" defaultValue="" className={fieldClass}>
              <option value="">No preference</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Not sure">Not sure</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Message <span className="text-cyan-accent">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell Mark a little about your event and what you're hoping for."
            className={fieldClass}
          />
        </div>

        {/* Cloudflare Turnstile widget — renders into this div and injects the token. */}
        <div className="cf-turnstile" data-sitekey={turnstileSiteKey} data-theme="light" />

        {status === "error" && (
          <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {errorMsg}{" "}
            You can also email Mark directly at{" "}
            <a href={`mailto:${site.email}`} className="underline">
              {site.email}
            </a>
            .
          </p>
        )}

        <div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex w-full items-center justify-center rounded-lg bg-cyan-accent px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#107aa0] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-bright focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "submitting" ? "Sending…" : "Send Request"}
          </button>
        </div>

        <p className="text-sm text-ink-soft">
          Prefer email? Contact Mark directly at{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-cyan-accent underline-offset-4 hover:underline"
          >
            {site.email}
          </a>
          .
        </p>
      </form>
    </>
  );
}
