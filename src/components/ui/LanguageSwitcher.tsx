"use client";
/**
 * Akshaya Cabs – Language Switcher
 * src/components/ui/LanguageSwitcher.tsx
 *
 * Pill-style EN / TE toggle.
 * Switches locale by swapping the locale prefix in the current pathname.
 * Uses next/navigation usePathname — Client Component only.
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { swapLocale, LOCALES } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  /** Additional class on the wrapper */
  className?: string;
  /** Accessible label for the nav element */
  ariaLabel?: string;
}

const LABELS: Record<Locale, { short: string; long: string }> = {
  en: { short: "EN", long: "English" },
  te: { short: "తెలుగు", long: "తెలుగు" },
};

export default function LanguageSwitcher({
  currentLocale,
  className = "",
  ariaLabel,
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label={ariaLabel ?? "Language switcher"}
      className={`akc-lang-switcher ${className}`}
    >
      {LOCALES.map((locale) => {
        const isActive = locale === currentLocale;
        const href = swapLocale(pathname, locale);
        const label = LABELS[locale];

        return (
          <Link
            key={locale}
            href={href}
            aria-label={`Switch to ${label.long}`}
            aria-current={isActive ? "true" : undefined}
            className={`akc-lang-switcher__btn${isActive ? " akc-lang-switcher__btn--active" : ""}`}
            lang={locale === "te" ? "te-IN" : "en-IN"}
          >
            {label.short}
          </Link>
        );
      })}
    </nav>
  );
}
