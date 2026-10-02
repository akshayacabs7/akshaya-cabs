// Services Page — /services
// Sri Vinayaka Tours & Travels — svtttirupati.com
// Task 09: Visually rich service directory — all 9 services with alternating image layout

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import { VEHICLES } from "@/data/vehicles";
import { serviceWhatsAppUrl, primaryWhatsAppUrl } from "@/lib/whatsapp";
import { BUSINESS } from "@/data/business";

export const metadata: Metadata = {
  title: "Cab Services | Sri Vinayaka Tours & Travels — Tirupati",
  description:
    "9 professional cab & tour services from Tirupati — Local cabs, Tirumala taxi, temple tour packages, outstation, airport transfers, railway station, Tempo Traveller, customized tours & South India pilgrimage. Available 24/7.",
  alternates: { canonical: "https://svtttirupati.com/services" },
  openGraph: {
    title: "Cab & Tour Services | Sri Vinayaka Tours & Travels",
    description:
      "From Tirumala darshan to South India pilgrimages — 9 trusted cab & tour services from Tirupati. WhatsApp: +91 9652240674.",
    url: "https://svtttirupati.com/services",
    images: [{ url: "/images/logo/og-image.jpg", width: 1200, height: 630 }],
  },
};

// Icon emoji map matching data/services.ts icon strings
const ICON_MAP: Record<string, string> = {
  MapPin:     "📍",
  Mountain:   "⛰️",
  Landmark:   "🛕",
  Navigation: "🚗",
  Plane:      "✈️",
  Train:      "🚆",
  Bus:        "🚌",
  Route:      "🗺️",
  Compass:    "🧭",
};

// Build a vehicle name lookup from vehicles data (no Weganor — already excluded in data)
const VEHICLE_NAME_MAP: Record<string, string> = Object.fromEntries(
  VEHICLES.map((v) => [v.id, v.name])
);

const TRUST_ITEMS = [
  { icon: "⭐", text: "5.0 Google Rating" },
  { icon: "🕐", text: "24/7 Available" },
  { icon: "🚗", text: "7 Vehicle Options" },
  { icon: "🛕", text: "10 Temple Tour Packages" },
  { icon: "📞", text: "Instant WhatsApp Response" },
  { icon: "✅", text: "Experienced Local Drivers" },
];

export default function ServicesPage() {
  const generalWaUrl = primaryWhatsAppUrl(
    "Hello SVTT! I would like to enquire about your cab and tour services. Could you please share availability and pricing? Thank you!"
  );

  return (
    <>
      {/* ── Page Hero ── */}
      <header className="svtt-svcpage-hero" role="banner">
        <div className="svtt-container svtt-svcpage-hero__content">
          <span className="svtt-svcpage-hero__label">🚗 Cab & Tour Services</span>
          <h1 className="svtt-svcpage-hero__h1">
            Every Journey, Every Need —<br />
            <span style={{ color: "var(--svtt-accent)" }}>We&apos;ve Got You Covered</span>
          </h1>
          <p className="svtt-svcpage-hero__desc">
            From your doorstep to Tirumala, from local temple visits to multi-state
            South India pilgrimages — Sri Vinayaka Tours &amp; Travels offers 9 trusted
            cab &amp; tour services, available 24 hours a day, 7 days a week.
          </p>

          {/* Stats */}
          <div className="svtt-svcpage-hero__stats" aria-label="Service highlights">
            {[
              { val: "9",    label: "Services" },
              { val: "7",    label: "Vehicles" },
              { val: "10",   label: "Tour Packages" },
              { val: "24/7", label: "Availability" },
            ].map((s) => (
              <div key={s.label} className="svtt-svcpage-hero__stat">
                <span className="svtt-svcpage-hero__stat-val">{s.val}</span>
                <span className="svtt-svcpage-hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── Trust strip (dark) ── */}
      <div className="svtt-svcpage-trust" aria-label="Why choose SVTT">
        <div className="svtt-container">
          <ul className="svtt-svcpage-trust__grid" role="list">
            {TRUST_ITEMS.map((item) => (
              <li key={item.text} className="svtt-svcpage-trust__item" role="listitem">
                <span className="svtt-svcpage-trust__icon" aria-hidden="true">{item.icon}</span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Services List ── */}
      <section className="svtt-svc-list" aria-labelledby="services-list-heading">
        <div className="svtt-container">
          <div className="svtt-section-header" style={{ marginBottom: "2.5rem" }}>
            <p className="section-label">What We Offer</p>
            <h2 id="services-list-heading" className="section-title">
              Our Complete Service Range
            </h2>
            <p className="section-subtitle">
              Each service is designed around the needs of Tirupati&apos;s pilgrims,
              tourists &amp; local residents — with transparent pricing and professional drivers.
            </p>
          </div>

          <ul className="svtt-svc-list__grid" role="list">
            {SERVICES.map((svc, idx) => {
              const emoji = ICON_MAP[svc.icon] ?? "🚕";
              const waUrl = serviceWhatsAppUrl({ service: svc.title });

              return (
                <li
                  key={svc.id}
                  id={svc.slug}
                  className="svtt-svc-card"
                  aria-label={svc.title}
                >
                  {/* Image column */}
                  <div className="svtt-svc-card__img-wrap">
                    {svc.image && (
                      <Image
                        src={svc.image}
                        alt={`${svc.title} — Sri Vinayaka Tours & Travels`}
                        fill
                        sizes="(max-width: 768px) 100vw, 420px"
                        className="svtt-svc-card__img"
                        loading={idx < 2 ? "eager" : "lazy"}
                      />
                    )}
                    <div className="svtt-svc-card__img-overlay" aria-hidden="true" />
                    <div className="svtt-svc-card__icon-badge" aria-hidden="true">
                      {emoji}
                    </div>
                  </div>

                  {/* Body column */}
                  <div className="svtt-svc-card__body">
                    <span className="svtt-svc-card__number">
                      Service {String(idx + 1).padStart(2, "0")}
                    </span>

                    <h2 className="svtt-svc-card__title">{svc.title}</h2>
                    <p className="svtt-svc-card__desc">{svc.description}</p>

                    {/* Features */}
                    {svc.features && svc.features.length > 0 && (
                      <ul
                        className="svtt-svc-card__features"
                        aria-label={`Features of ${svc.title}`}
                      >
                        {svc.features.map((feat) => (
                          <li key={feat} className="svtt-svc-card__feature">
                            <span className="svtt-svc-card__feature-dot" aria-hidden="true" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Vehicles */}
                    {svc.vehicles && svc.vehicles.length > 0 && (
                      <div>
                        <p className="svtt-svc-card__vehicles-label">Suitable Vehicles</p>
                        <div className="svtt-svc-card__vehicles" role="list" aria-label={`Vehicles for ${svc.title}`}>
                          {svc.vehicles.map((vid) => (
                            <span key={vid} className="svtt-svc-card__vehicle-chip" role="listitem">
                              🚗 {VEHICLE_NAME_MAP[vid] ?? vid}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTAs */}
                    <div className="svtt-svc-card__ctas">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp"
                        aria-label={`Book ${svc.title} on WhatsApp`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        {svc.cta ?? "Book Now"}
                      </a>

                      {/* Special CTA for Temple Tours — link to packages page */}
                      {svc.id === "temple-tours" ? (
                        <Link href="/tour-packages" className="btn btn-secondary">
                          View All Packages
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                          </svg>
                        </Link>
                      ) : (
                        <Link href="/request-a-quote" className="btn btn-secondary">
                          Get a Quote
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── Bottom CTA Strip ── */}
      <section className="svtt-svcpage-cta" aria-labelledby="svc-cta-heading">
        <div className="svtt-container">
          <h2 id="svc-cta-heading" className="svtt-svcpage-cta__heading">
            Ready to Travel with Sri Vinayaka Tours &amp; Travels?
          </h2>
          <p className="svtt-svcpage-cta__sub">
            Book instantly on WhatsApp or call us directly. Available{" "}
            {BUSINESS.availability} for all your travel needs.
          </p>
          <div className="svtt-svcpage-cta__btns">
            <a
              href={generalWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              aria-label="Book a cab or tour on WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Book on WhatsApp
            </a>
            <a
              href={BUSINESS.phone.primaryTel}
              className="btn btn-ghost btn-lg"
              aria-label={`Call Sri Vinayaka Tours & Travels at ${BUSINESS.phone.primaryDisplay}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.93 19.79 19.79 0 01.01 .28 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Call {BUSINESS.phone.primaryDisplay}
            </a>
            <Link href="/request-a-quote" className="btn btn-ghost btn-lg">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
