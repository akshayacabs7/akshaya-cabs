/**
 * Akshaya Cabs – AkcHeroSection (TASK-11)
 * Server Component — full-screen cinematic hero with real hero image
 * and the TripSearchPanel client island embedded below.
 *
 * Image used: /images/akshaya/hero/hero-desktop-tirumala.webp (delivered in TASK-10)
 * Mobile variant: /images/akshaya/hero/hero-mobile-tirumala.webp
 *
 * - Priority preload on LCP image (fetchpriority="high")
 * - Distinct from SVTT hero: new layout, new tagline, new typeface, new search panel
 * - No fake ratings, no SVTT class names, no SVTT identity
 * - TripSearchPanel handles all interactivity (client island)
 */

import Image from "next/image";
import type { Locale } from "@/i18n/config";
import { BUSINESS } from "@/data/business";
import TripSearchPanel from "@/components/home/TripSearchPanel";

interface Props {
  locale: Locale;
}

// ── Trust pills (factual, no fake counts or ratings) ─────────────────────────

const TRUST_EN = [
  { icon: "🛕", label: "Temple Circuit Specialists" },
  { icon: "🕐", label: "Available 24 / 7" },
  { icon: "🚗", label: "7 Vehicle Classes" },
  { icon: "🤝", label: "Driver Allowance Included" },
];

const TRUST_TE = [
  { icon: "🛕", label: "దేవాలయ టూర్ నిపుణులు" },
  { icon: "🕐", label: "24 / 7 అందుబాటులో" },
  { icon: "🚗", label: "7 వాహన రకాలు" },
  { icon: "🤝", label: "డ్రైవర్ అలవెన్స్ చేర్చబడింది" },
];

export default function AkcHeroSection({ locale }: Props) {
  const isEn = locale === "en";
  const trust = isEn ? TRUST_EN : TRUST_TE;

  const headingLine1 = isEn
    ? "Every Journey,"
    : "ప్రతి ప్రయాణం,";
  const headingAccent = isEn
    ? "Beautifully Planned."
    : "అందంగా ప్లాన్ చేయబడింది.";
  const subheading = isEn
    ? `Cab services & temple tour packages from Tirupati — Tirumala darshan, South India pilgrimages, airport transfers & outstation trips. ${BUSINESS.availability}.`
    : `తిరుపతి నుండి క్యాబ్ సేవలు & దేవాలయ టూర్ ప్యాకేజీలు — తిరుమల దర్శనం, దక్షిణ భారత యాత్రలు, విమానాశ్రయ బదిలీలు & అవుట్‌స్టేషన్ ట్రిప్పులు. ${BUSINESS.availability}.`;
  const eyebrow = isEn
    ? "Tirupati's Trusted Cab Partner"
    : "తిరుపతి నమ్మకమైన క్యాబ్ పార్ట్‌నర్";

  return (
    <section
      className="akc-hero"
      aria-label={isEn ? "Akshaya Cabs — Book a Cab" : "అక్షయ క్యాబ్స్ — క్యాబ్ బుక్ చేయండి"}
      id="hero"
    >
      {/* ── Background images ── */}
      <div className="akc-hero__bg" aria-hidden="true">
        {/* Desktop — Tirumala hills vista */}
        <Image
          src="/images/akshaya/hero/hero-desktop-tirumala.webp"
          alt="Tirumala hills at dawn — Akshaya Cabs Tirupati"
          fill
          priority
          quality={90}
          className="akc-hero__bg-img akc-hero__bg-img--desktop"
          sizes="100vw"
        />
        {/* Mobile — portrait Tirumala */}
        <Image
          src="/images/akshaya/hero/hero-mobile-tirumala.webp"
          alt="Tirumala temple gopuram — Akshaya Cabs Tirupati"
          fill
          priority
          quality={85}
          className="akc-hero__bg-img akc-hero__bg-img--mobile"
          sizes="100vw"
        />
        {/* Gradient overlay for legibility */}
        <div className="akc-hero__overlay" aria-hidden="true" />
      </div>

      {/* ── Content wrapper ── */}
      <div className="akc-container akc-hero__content">

        {/* Eyebrow label */}
        <div className="akc-hero__eyebrow">
          <span className="akc-hero__eyebrow-dot" aria-hidden="true" />
          <span className={locale === "te" ? "lang-te" : ""}>{eyebrow}</span>
        </div>

        {/* H1 — the LCP text element */}
        <h1 className="akc-hero__heading">
          <span className={locale === "te" ? "lang-te" : ""}>
            {headingLine1}
          </span>{" "}
          <span
            className={`akc-hero__heading-accent${locale === "te" ? " lang-te" : ""}`}
          >
            {headingAccent}
          </span>
        </h1>

        {/* Sub-heading */}
        <p
          className={`akc-hero__subheading${locale === "te" ? " lang-te" : ""}`}
        >
          {subheading}
        </p>

        {/* ── Trip Search Panel (client island) ── */}
        <div className="akc-hero__search-island">
          <TripSearchPanel locale={locale} />
        </div>

        {/* ── Trust pills ── */}
        <ul className="akc-hero__trust" aria-label={isEn ? "Service highlights" : "సేవా విశేషాలు"}>
          {trust.map((pill) => (
            <li key={pill.label} className="akc-hero__trust-pill">
              <span className="akc-hero__trust-icon" aria-hidden="true">
                {pill.icon}
              </span>
              <span className={locale === "te" ? "lang-te" : ""}>{pill.label}</span>
            </li>
          ))}
        </ul>

        {/* ── Quick-dial phone ── */}
        <div className="akc-hero__phone">
          <a
            href={BUSINESS.phone.primaryTel}
            className="akc-hero__phone-link"
            aria-label={`Call Akshaya Cabs at ${BUSINESS.phone.primaryDisplay}`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.93 19.79 19.79 0 01.01 .28 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            <span>
              {isEn ? "Call" : "కాల్"}{" "}
              <strong>{BUSINESS.phone.primaryDisplay}</strong>
            </span>
          </a>
          <span className="akc-hero__phone-sep" aria-hidden="true">·</span>
          <a
            href={BUSINESS.phone.secondaryTel}
            className="akc-hero__phone-link"
            aria-label={`Call Akshaya Cabs at ${BUSINESS.phone.secondaryDisplay}`}
          >
            <strong>{BUSINESS.phone.secondaryDisplay}</strong>
          </a>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="akc-hero__scroll" aria-hidden="true">
        <span className="akc-hero__scroll-line" />
        <span className="akc-hero__scroll-dot" />
      </div>
    </section>
  );
}
