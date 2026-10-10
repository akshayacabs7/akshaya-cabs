// Akshaya Cabs — Netlify Forms Submission Utility (TASK-20)
// src/lib/netlify-form.ts
//
// HOW NETLIFY FORMS WORKS WITH NEXT.JS:
// ──────────────────────────────────────────────────────────────────────────────
// Netlify's form bot scans the BUILD OUTPUT for <form data-netlify="true"> tags.
// Because Next.js renders pages dynamically, Netlify cannot find these tags in
// the React tree. Solution: place a plain HTML file (public/__forms.html) with
// all form definitions in the PUBLIC folder so it appears verbatim in the build.
//
// Submission is done via AJAX:
//   POST /  (or any static page path)
//   Content-Type: application/x-www-form-urlencoded
//   Body: form-name=<name>&field1=value1&...
//
// Netlify's CDN intercepts the POST and:
//   - Stores the lead in Netlify Forms dashboard
//   - Sends email notification (if configured by site owner)
//   - Returns HTTP 200 on success
//
// On LOCALHOST: Netlify Forms cannot intercept; the POST goes to Next.js dev
// server which returns 405. This is EXPECTED BEHAVIOR. A "pending production
// test" warning is shown in the UI when running locally.
//
// RULES:
//   - Never claim success until HTTP 200 is received.
//   - Show pending/error states honestly.
//   - No API keys or tracking in submission body.
//   - Honeypot field "bot-field" must be in every form + always sent as empty.
// ──────────────────────────────────────────────────────────────────────────────

export type NetlifyFormName =
  | "akshaya-enquiry"
  | "akshaya-quote"
  | "akshaya-trip";

export type SubmitState = "idle" | "pending" | "success" | "error" | "offline";

export interface NetlifySubmitResult {
  ok: boolean;
  status: number;
  state: SubmitState;
  /** Human-readable error message for display */
  errorMessage?: string;
  /** True when we detect we are on localhost (Netlify cannot receive) */
  isLocalhost?: boolean;
}

/**
 * Encode a plain object to URL-encoded form data.
 * Handles: strings, numbers, booleans, undefined/null (omitted).
 */
export function encodeFormData(data: Record<string, unknown>): string {
  return Object.entries(data)
    .filter(([, v]) => v !== undefined && v !== null && v !== "")
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
    .join("&");
}

/**
 * Detect if we are running on localhost (Netlify Forms won't work).
 * This is purely for UX — we still attempt the POST so dev can observe the request.
 */
function isLocalhost(): boolean {
  if (typeof window === "undefined") return false;
  const host = window.location.hostname;
  return host === "localhost" || host === "127.0.0.1" || host.startsWith("192.168.");
}

/**
 * Submit a form to Netlify Forms via AJAX.
 *
 * @param formName   - Must match one of the form `name` attrs in public/__forms.html
 * @param fields     - All form fields as plain object (strings, numbers, booleans)
 * @param locale     - Current locale ("en" | "te") — stored as metadata
 *
 * @returns NetlifySubmitResult with ok: true only on HTTP 200
 *
 * Usage:
 * ```ts
 * const result = await submitToNetlify("akshaya-enquiry", { name, phone, ... }, "en");
 * if (result.ok) { showSuccess(); } else { showError(result.errorMessage); }
 * ```
 */
export async function submitToNetlify(
  formName: NetlifyFormName,
  fields: Record<string, unknown>,
  locale: "en" | "te" = "en"
): Promise<NetlifySubmitResult> {
  const onLocalhost = isLocalhost();

  const body = encodeFormData({
    "form-name":   formName,
    "bot-field":   "",          // honeypot — always empty (bots fill this)
    locale,
    submittedAt:   new Date().toISOString(),
    ...fields,
  });

  try {
    const response = await fetch("/", {
      method:  "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    if (response.ok) {
      return { ok: true, status: response.status, state: "success", isLocalhost: onLocalhost };
    }

    // Netlify returns 404 on localhost (no form registration). We surface this
    // specifically so the UI can show a "works on production" warning.
    if ((response.status === 404 || response.status === 405) && onLocalhost) {
      return {
        ok: false,
        status: response.status,
        state: "error",
        isLocalhost: true,
        errorMessage:
          "Netlify Forms cannot receive submissions on localhost. " +
          "Deploy to Netlify to test live form submissions. " +
          "Your WhatsApp enquiry was still sent successfully.",
      };
    }

    return {
      ok: false,
      status: response.status,
      state: "error",
      isLocalhost: onLocalhost,
      errorMessage: `Submission failed (HTTP ${response.status}). Please try WhatsApp or call us directly.`,
    };
  } catch {
    // Network error (offline, DNS failure, etc.)
    return {
      ok: false,
      status: 0,
      state: "offline",
      isLocalhost: onLocalhost,
      errorMessage:
        "Network error — please check your connection. " +
        "You can still reach us via WhatsApp or phone.",
    };
  }
}
