/**
 * Akshaya Cabs – i18n Configuration
 * Supported locales: English (en-IN) and Telugu (te-IN)
 * Default locale: en (English)
 *
 * Route structure: /en/... and /te/...
 * Root / is redirected to /en/ by proxy.ts
 */

/** Short locale code used in URLs: /en/ or /te/ */
export type Locale = "en" | "te";

/** All supported locales */
export const LOCALES: Locale[] = ["en", "te"];

/** Default locale (English) */
export const DEFAULT_LOCALE: Locale = "en";

/** Full BCP 47 locale tags for html[lang] and hreflang */
export const LOCALE_LANG_TAGS: Record<Locale, string> = {
  en: "en-IN",
  te: "te-IN",
};

/** Human-readable locale labels (used in switcher) */
export const LOCALE_LABELS: Record<Locale, { native: string; english: string }> = {
  en: { native: "English", english: "English" },
  te: { native: "తెలుగు", english: "Telugu" },
};

/** Maps Accept-Language header prefixes to our locales */
export const ACCEPT_LANGUAGE_MAP: Record<string, Locale> = {
  te: "te",
  "te-in": "te",
  "te-IN": "te",
};

/**
 * Given a pathname like /te/about returns /en/about (locale swap).
 * Given a non-locale path like /about returns /en/about.
 */
export function swapLocale(pathname: string, targetLocale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && LOCALES.includes(segments[0] as Locale)) {
    segments[0] = targetLocale;
  } else {
    segments.unshift(targetLocale);
  }
  return "/" + segments.join("/");
}

/**
 * Strip the locale prefix from a pathname.
 * /en/about → /about; /about → /about
 */
export function stripLocale(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && LOCALES.includes(segments[0] as Locale)) {
    return "/" + segments.slice(1).join("/") || "/";
  }
  return pathname;
}

/**
 * Detect locale from Accept-Language header value.
 * Falls back to DEFAULT_LOCALE.
 */
export function detectLocale(acceptLanguage: string): Locale {
  const parts = acceptLanguage
    .split(",")
    .map((p) => p.split(";")[0].trim().toLowerCase());

  for (const part of parts) {
    if (ACCEPT_LANGUAGE_MAP[part]) return ACCEPT_LANGUAGE_MAP[part];
    // Check prefix match (e.g. "te-IN" → "te")
    const prefix = part.split("-")[0];
    if (ACCEPT_LANGUAGE_MAP[prefix]) return ACCEPT_LANGUAGE_MAP[prefix];
  }
  return DEFAULT_LOCALE;
}

// ─── Currency formatting ────────────────────────────────────────────────────

/**
 * Format a number as Indian Rupees in en-IN or te-IN locale.
 * Always renders as: ₹1,00,000 (Indian numbering system)
 * Car model names in Telugu UI: kept in Roman script (Innova, Dzire, Ertiga)
 *
 * @example
 *   formatCurrency(12000, "en") → "₹12,000"
 *   formatCurrency(12000, "te") → "₹12,000"
 */
export function formatCurrency(amount: number, locale: Locale = DEFAULT_LOCALE): string {
  const bcp47 = LOCALE_LANG_TAGS[locale]; // en-IN or te-IN
  return new Intl.NumberFormat(bcp47, {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format a number with Indian number grouping (1,00,000 pattern).
 * Used for displaying km distances and passenger counts.
 */
export function formatNumber(n: number, locale: Locale = DEFAULT_LOCALE): string {
  const bcp47 = LOCALE_LANG_TAGS[locale];
  return new Intl.NumberFormat(bcp47).format(n);
}

/**
 * Format a date in the locale-appropriate short format.
 *   en-IN → 09/10/2026
 *   te-IN → 09/10/2026  (same numerals in te-IN; avoid Devanagari numerals)
 */
export function formatDate(date: Date): string {
  // Always use en-IN to keep numerals in ASCII — Intl te-IN sometimes
  // switches to Telugu numeral system which most users cannot read easily.
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

// ─── String interpolation ───────────────────────────────────────────────────

/**
 * Interpolate a dictionary string with named parameters.
 * Replaces {key} tokens with provided values.
 *
 * @example
 *   t("Fare from ₹{n}", { n: "2,000" }) → "Fare from ₹2,000"
 *   t("{n} passengers", { n: 4 })       → "4 passengers"
 */
export function t(template: string, params?: Record<string, string | number>): string {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, key) =>
    key in params ? String(params[key]) : `{${key}}`
  );
}

// ─── Telugu typography helpers ──────────────────────────────────────────────

/**
 * CSS class names to apply for Telugu locale.
 *
 * Telugu text requires:
 *   - Increased line height (1.8–2.0 vs 1.5 in English)
 *   - Noto Sans Telugu font loaded
 *   - Slightly larger minimum font size for readability
 *   - overflow-wrap: break-word — Telugu conjuncts are long
 *
 * Usage: <div className={cx("base-class", teluguTextClass(locale))}>
 */
export function teluguTextClass(locale: Locale): string {
  return locale === "te" ? "lang-te" : "";
}

/**
 * Returns the Noto Sans Telugu font variable class when locale is "te".
 * Applied on the <html> element in [lang]/layout.tsx already.
 * Useful for specific blocks that need explicit font override.
 */
export function telugFontClass(locale: Locale): string {
  return locale === "te" ? "font-noto-telugu" : "";
}

// ─── Car model name handling ───────────────────────────────────────────────

/**
 * Car model names (Innova, Dzire, Ertiga, Crysta, Tavera, Tempo Traveller)
 * MUST remain in Roman/English script in all locales — including Telugu.
 * These are proper nouns / brand names not translatable.
 *
 * This function is a no-op on the string but serves as a documentation marker
 * for future developers: do NOT translate the value passed to it.
 */
export function vehicleName(name: string): string {
  return name; // always kept in Roman script regardless of locale
}
