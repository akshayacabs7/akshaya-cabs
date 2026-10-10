/**
 * Akshaya Cabs – Dictionary loader with missing-key safety
 * src/i18n/dictionaries.ts
 *
 * Usage (Server Components):
 *   const dict = await getDictionary(locale);          // uses next/root-params
 *   const dict = await getDictionaryForLocale("en");   // explicit locale
 *
 * All dictionary access should go through the typed Dictionary type below.
 * Missing-key checks are performed in dev and logged — never throw in production.
 */

import "server-only";
import { lang as getRootLang } from "next/root-params";
import { LOCALES, DEFAULT_LOCALE } from "./config";
import type { Locale } from "./config";

// ─── Lazy loaders ─────────────────────────────────────────────────────────────

const LOADERS: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.json").then((m) => m.default as Dictionary),
  te: () => import("./dictionaries/te.json").then((m) => m.default as Dictionary),
};

// ─── Dictionary type (derived from English shape) ─────────────────────────────

import type en from "./dictionaries/en.json";
export type Dictionary = typeof en;

// ─── Missing-key checker (dev-only, safe in prod) ─────────────────────────────

function checkMissingKeys(
  locale: Locale,
  base: Record<string, unknown>,
  candidate: Record<string, unknown>,
  path = ""
): void {
  if (process.env.NODE_ENV !== "development") return;
  for (const key of Object.keys(base)) {
    const fullPath = path ? `${path}.${key}` : key;
    if (!(key in candidate)) {
      console.warn(
        `[i18n] Missing key in "${locale}" dictionary: "${fullPath}"`
      );
    } else if (
      typeof base[key] === "object" &&
      base[key] !== null &&
      typeof candidate[key] === "object" &&
      candidate[key] !== null
    ) {
      checkMissingKeys(
        locale,
        base[key] as Record<string, unknown>,
        candidate[key] as Record<string, unknown>,
        fullPath
      );
    }
  }
}

// ─── Cache (module-level, server-side only) ───────────────────────────────────

const cache: Partial<Record<Locale, Dictionary>> = {};
let enBase: Dictionary | null = null;

async function loadDict(locale: Locale): Promise<Dictionary> {
  if (cache[locale]) return cache[locale]!;

  const dict = await LOADERS[locale]();

  // Only check non-English locales against the English base
  if (locale !== DEFAULT_LOCALE && process.env.NODE_ENV === "development") {
    if (!enBase) {
      enBase = await LOADERS[DEFAULT_LOCALE]();
    }
    checkMissingKeys(
      locale,
      enBase as unknown as Record<string, unknown>,
      dict as unknown as Record<string, unknown>
    );
  }

  cache[locale] = dict;
  return dict;
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * getDictionary()
 * Server Component use: automatically reads locale from next/root-params.
 * MUST only be called in Server Components (enforced by "server-only").
 */
export async function getDictionary(): Promise<Dictionary> {
  const locale = await getRootLang().catch(() => DEFAULT_LOCALE);
  const safeLocale = LOCALES.includes(locale as Locale)
    ? (locale as Locale)
    : DEFAULT_LOCALE;
  return loadDict(safeLocale);
}

/**
 * getDictionaryForLocale(locale)
 * Explicit locale override — useful in generateMetadata(), generateStaticParams(),
 * and other build-time contexts where root-params may not be available.
 */
export async function getDictionaryForLocale(locale: Locale): Promise<Dictionary> {
  return loadDict(locale);
}
