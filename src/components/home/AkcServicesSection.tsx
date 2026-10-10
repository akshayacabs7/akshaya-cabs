/**
 * Akshaya Cabs — AkcServicesSection (TASK-12)
 * All 9 service categories — original design, locale-aware.
 * Server Component — no client JS needed.
 * No .svtt-* class names. No SVTT identity.
 */

import Link from "next/link";
import { SERVICES } from "@/data/services";
import type { Locale } from "@/i18n/config";

// Icon map — maps data icon strings to inline SVGs
const ICON_MAP: Record<string, React.ReactNode> = {
  MapPin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Mountain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="3 17 12 3 21 17 3 17"/>
    </svg>
  ),
  Landmark: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7 12 2"/>
    </svg>
  ),
  Navigation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="3 11 22 2 13 21 11 13 3 11"/>
    </svg>
  ),
  Plane: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 20 3c-1-1-3-1-4.5.5L12 7 4.8 8.2l-2.7 2.7 7.9 2.1 2.1 7.9 2.7-2.7z"/>
    </svg>
  ),
  Train: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="3" width="16" height="13" rx="2"/><polyline points="4 16 2 20"/><polyline points="20 16 22 20"/><line x1="9" y1="11" x2="9" y2="8"/><line x1="15" y1="11" x2="15" y2="8"/>
    </svg>
  ),
  Users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
    </svg>
  ),
  Globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
    </svg>
  ),
  Star: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
};

// Telugu service labels
const TE_LABELS: Record<string, string> = {
  "local-cab":         "స్థానిక క్యాబ్స్",
  "tirumala-taxi":     "తిరుమల టాక్సీ",
  "temple-tours":      "దేవాలయ టూర్స్",
  "outstation-cab":    "అవుట్‌స్టేషన్ క్యాబ్",
  "airport-transfer":  "విమానాశ్రయ బదిలీ",
  "railway-transfer":  "రైల్వే స్టేషన్ బదిలీ",
  "tempo-traveller":   "టెంపో ట్రావెల్లర్",
  "south-india-tours": "దక్షిణ భారత పర్యటన",
  "custom-tours":      "కస్టమ్ టూర్స్",
};

interface Props { locale: Locale; }

export default function AkcServicesSection({ locale }: Props) {
  const isEn = locale === "en";

  return (
    <section className="akc-section akc-section--alt akc-services" aria-labelledby="services-heading">
      <div className="akc-container">

        {/* ── Header ── */}
        <div className="akc-section-header akc-section-header--center">
          <p className="akc-section-label">{isEn ? "What We Offer" : "మా సేవలు"}</p>
          <h2 id="services-heading" className="akc-section-title">
            {isEn ? "Cab & Travel Services" : "క్యాబ్ & ట్రావెల్ సేవలు"}
          </h2>
          <p className="akc-section-subtitle">
            {isEn
              ? "From Tirumala temple runs to South India pilgrimages — one trusted partner for every journey."
              : "తిరుమల టెంపుల్ రన్స్ నుండి దక్షిణ భారత యాత్రల వరకు — ప్రతి ప్రయాణానికి ఒక నమ్మకమైన భాగస్వామి."}
          </p>
        </div>

        {/* ── 9-service grid ── */}
        <ul role="list" className="akc-services__grid">
          {SERVICES.map((svc) => (
            <li key={svc.id}>
              <Link
                href={`/${locale}/services#${svc.slug}`}
                className="akc-services__card"
                aria-label={isEn ? svc.title : (TE_LABELS[svc.id] ?? svc.shortTitle)}
              >
                <span className="akc-services__icon-wrap" aria-hidden="true">
                  {ICON_MAP[svc.icon] ?? ICON_MAP.Star}
                </span>
                <span className={`akc-services__name${locale === "te" ? " lang-te" : ""}`}>
                  {isEn ? svc.shortTitle : (TE_LABELS[svc.id] ?? svc.shortTitle)}
                </span>
                <span className="akc-services__arrow" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* ── CTA ── */}
        <div className="akc-section-cta akc-section-cta--center">
          <Link href={`/${locale}/services`} className="akc-btn akc-btn--secondary">
            {isEn ? "Explore All Services" : "అన్ని సేవలు చూడండి"}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
