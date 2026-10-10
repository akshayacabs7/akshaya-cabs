/**
 * Akshaya Cabs — AkcFeaturedPackagesSection (TASK-12)
 * 3 featured tour packages with real images, factual prices, locale-aware.
 * Server Component.
 * No .svtt-* class names. No SVTT identity. No fake booking.
 */

import Image from "next/image";
import Link from "next/link";
import { PACKAGES } from "@/data/packages";
import { packageWhatsAppUrl } from "@/lib/whatsapp";
import type { Locale } from "@/i18n/config";

// Featured package IDs (AKC IDs)
const FEATURED_IDS = ["akc0001", "akc0003", "akc0004"];

function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

interface Props { locale: Locale; }

export default function AkcFeaturedPackagesSection({ locale }: Props) {
  const isEn = locale === "en";
  const featured = PACKAGES.filter((p) => FEATURED_IDS.includes(p.id));

  return (
    <section className="akc-section akc-featured-packages" aria-labelledby="featured-packages-heading">
      <div className="akc-container">

        {/* ── Header ── */}
        <div className="akc-section-header">
          <p className="akc-section-label">{isEn ? "Temple Tour Packages" : "దేవాలయ టూర్ ప్యాకేజీలు"}</p>
          <h2 id="featured-packages-heading" className="akc-section-title">
            {isEn ? "Popular Pilgrimage Packages" : "ప్రసిద్ధ యాత్రా ప్యాకేజీలు"}
          </h2>
          <p className="akc-section-subtitle">
            {isEn
              ? "Carefully planned routes covering Tirumala, Kanipakam, Sri Kalahasti, Padmavathi and more — with multiple vehicle options for every group."
              : "తిరుమల, కాణిపాకం, శ్రీకాళహస్తి, పద్మావతి మరియు ఇంకా చాలా ఆలయాలను కవర్ చేసే జాగ్రత్తగా ప్లాన్ చేసిన మార్గాలు."}
          </p>
        </div>

        {/* ── Package cards ── */}
        <ul role="list" className="akc-pkg__grid">
          {featured.map((pkg) => {
            const waUrl = packageWhatsAppUrl({
              packageCode: pkg.id.toUpperCase(),
              packageTitle: pkg.title,
            });

            return (
              <li key={pkg.id} className="akc-pkg__card">
                {/* Image */}
                <div className="akc-pkg__img-wrap">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="akc-pkg__img"
                  />
                  <span className="akc-pkg__duration-badge">
                    🕐 {pkg.duration}
                  </span>
                </div>

                {/* Body */}
                <div className="akc-pkg__body">
                  {/* Destination chips */}
                  <div className="akc-pkg__chips" aria-label={isEn ? "Destinations covered" : "కవర్ చేసిన గమ్యాలు"}>
                    {pkg.destinations.slice(0, 3).map((d) => (
                      <span key={d} className="akc-pkg__chip">{d}</span>
                    ))}
                    {pkg.destinations.length > 3 && (
                      <span className="akc-pkg__chip akc-pkg__chip--more">
                        +{pkg.destinations.length - 3}
                      </span>
                    )}
                  </div>

                  <h3 className="akc-pkg__title">{pkg.title}</h3>
                  <p className="akc-pkg__desc">{pkg.description}</p>

                  {/* Price + CTAs */}
                  <div className="akc-pkg__footer">
                    <div className="akc-pkg__price">
                      <span className="akc-pkg__price-from">{isEn ? "Starting from" : "నుండి"}</span>
                      <strong className="akc-pkg__price-value">{formatPrice(pkg.startingPrice)}</strong>
                      <span className="akc-pkg__price-note">{isEn ? "+ toll & parking" : "+ టోల్ & పార్కింగ్"}</span>
                    </div>
                    <div className="akc-pkg__actions">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="akc-btn akc-btn--wa akc-btn--sm"
                        aria-label={isEn ? `Enquire about ${pkg.title} on WhatsApp` : `${pkg.title} గురించి WhatsApp లో విచారించండి`}
                      >
                        {isEn ? "Get a Quote" : "కోటేషన్ పొందండి"}
                      </a>
                      <Link
                        href={`/${locale}/tour-packages/${pkg.slug}`}
                        className="akc-btn akc-btn--ghost akc-btn--sm"
                      >
                        {isEn ? "View Details" : "వివరాలు చూడండి"}
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* ── View all CTA ── */}
        <div className="akc-section-cta akc-section-cta--center">
          <Link href={`/${locale}/tour-packages`} className="akc-btn akc-btn--secondary">
            {isEn ? "View All 10 Packages" : "అన్ని 10 ప్యాకేజీలు చూడండి"}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
