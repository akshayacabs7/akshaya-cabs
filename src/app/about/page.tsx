// About Page — /about
// Sri Vinayaka Tours & Travels — svtttirupati.com
// Task 13: Authentic brand story + owner + values + coverage
// RULES (blueprint):
//   - Do NOT invent years of experience, fleet size, employee count, or awards
//   - Owner photo: use real photo path from BUSINESS data — no AI face
//   - Tell a concise, authentic story only

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { primaryWhatsAppUrl } from "@/lib/whatsapp";
import { BUSINESS } from "@/data/business";
import { VEHICLES } from "@/data/vehicles";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "About Us | Sri Vinayaka Tours & Travels — Tirupati",
  description:
    "Sri Vinayaka Tours & Travels is a Tirupati-based cab service founded by Ravilla Hemanth Naidu. We specialise in Tirumala darshan, temple tours, outstation cabs, airport transfers & South India pilgrimages. Available 24/7.",
  alternates: { canonical: "https://svtttirupati.com/about" },
  openGraph: {
    title: "About Sri Vinayaka Tours & Travels | Tirupati Cab Service",
    description:
      "Tirupati-based cab & tour service by Ravilla Hemanth Naidu — Tirumala taxi, temple tours, outstation & South India pilgrimages. Available 24/7.",
    url: "https://svtttirupati.com/about",
    images: [{ url: "/images/logo/og-image.jpg", width: 1200, height: 630 }],
  },
};

// Our values — authentic and verifiable
const VALUES = [
  {
    icon: "🛕",
    title: "Pilgrimage-First",
    desc: "We understand the importance of every Tirumala darshan and temple visit. We plan every journey to honour its spiritual significance.",
  },
  {
    icon: "🕐",
    title: "Always Available",
    desc: "Available 24 hours a day, 7 days a week — whether it's an early morning darshan or a late-night airport pickup, we are here.",
  },
  {
    icon: "🤝",
    title: "Customer-First",
    desc: "We listen, we adapt, and we go the extra mile. Your comfort and trust matter more than any transaction.",
  },
  {
    icon: "📍",
    title: "Local Expertise",
    desc: "Our drivers know Tirupati and the surrounding regions inside out — the ghat roads, the temple routes, the shortcuts that save you time.",
  },
];

// Service coverage locations — only verifiable destinations from services.ts + packages.ts
const COVERAGE_AREAS = [
  "Tirupati City",
  "Tirumala",
  "Tirupati Airport",
  "Tirupati Railway Station",
  "Kanipakam",
  "Sri Padmavathi Temple",
  "Sri Kalahasti",
  "Srikalahasti",
  "Arunachalam",
  "Golden Temple (Vellore)",
  "Srinivasam",
  "Kodanda Rama Swamy Temple",
  "South India Destinations",
];

const heroWaUrl = primaryWhatsAppUrl();

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <header className="svtt-about-hero" role="banner">
        <div className="svtt-container svtt-about-hero__content">
          <span className="svtt-about-hero__label">🏢 About Us</span>
          <h1 className="svtt-about-hero__h1">
            Sri Vinayaka Tours &amp; Travels —<br />
            <span style={{ color: "var(--svtt-accent)" }}>Your Trusted Tirupati Cab Partner</span>
          </h1>
          <p className="svtt-about-hero__desc">
            A Tirupati-based cab &amp; tour company dedicated to making every pilgrimage,
            temple visit, and journey as comfortable, safe, and meaningful as possible.
            Available {BUSINESS.availability} for all your travel needs.
          </p>
          <div className="svtt-about-hero__ctas">
            <a
              href={heroWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              aria-label="Contact us on WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Get in Touch
            </a>
            <Link href="/tour-packages" className="btn btn-ghost btn-lg">
              View Packages
            </Link>
          </div>
        </div>
      </header>

      {/* ── Story + Owner ── */}
      <section className="svtt-about-story" aria-labelledby="about-story-heading">
        <div className="svtt-container">
          <div className="svtt-about-story__grid">

            {/* Text column */}
            <div className="svtt-about-story__text">
              <span className="svtt-about-story__eyebrow">Our Story</span>
              <h2 id="about-story-heading" className="svtt-about-story__h2">
                Pilgrimage &amp; Travel from the Heart of Tirupati
              </h2>

              <p className="svtt-about-story__body">
                Sri Vinayaka Tours &amp; Travels is a Tirupati-based cab and tour service
                founded by <strong>{BUSINESS.owner.name}</strong>. We are based in
                Thiruchanur, Tirupati — one of the most spiritually significant cities in
                South India and home to the revered Sri Venkateswara Temple at Tirumala.
              </p>

              <blockquote className="svtt-about-story__quote" cite="https://svtttirupati.com/about">
                &ldquo;{BUSINESS.tagline}&rdquo;
              </blockquote>

              <p className="svtt-about-story__body">
                Our focus is simple: to provide safe, comfortable, and reliable
                transportation to pilgrims, tourists, and local residents across Tirupati
                and South India. Whether you are arriving for a Tirumala darshan, exploring
                nearby temples like Kanipakam, Sri Kalahasti, or Golden Temple, or
                travelling outstation, we treat every journey with the care it deserves.
              </p>

              <p className="svtt-about-story__body">
                We offer <strong>{SERVICES.length} cab &amp; tour services</strong> with a
                fleet of <strong>{VEHICLES.length} fully air-conditioned vehicles</strong> —
                from compact sedans to 17-seater Tempo Travellers — catering to solo
                pilgrims, families, and large groups alike. We are available{" "}
                <strong>{BUSINESS.availability}</strong>, including early morning Tirumala
                departures and late-night airport pickups.
              </p>

              <p className="svtt-about-story__body">
                At Sri Vinayaka Tours &amp; Travels, transparency matters. Our pricing is
                straightforward, our drivers are experienced local professionals, and we
                believe in building long-term trust with every passenger who travels with us.
              </p>

              {/* Service snapshot chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", paddingTop: "0.5rem" }}>
                {[
                  `${SERVICES.length} Services`,
                  `${VEHICLES.length} AC Vehicles`,
                  `${BUSINESS.availability} Available`,
                  "Tirumala Experts",
                  "Local Drivers",
                  "Transparent Pricing",
                ].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      background: "rgba(141,28,34,0.07)",
                      border: "1px solid rgba(141,28,34,0.15)",
                      color: "var(--svtt-primary)",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "9999px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Owner card */}
            <aside className="svtt-about-owner" aria-label={`Owner: ${BUSINESS.owner.name}`}>
              <div className="svtt-about-owner__img-wrap">
                <Image
                  src={BUSINESS.owner.photo}
                  alt={`${BUSINESS.owner.name} — Founder & Owner, Sri Vinayaka Tours & Travels`}
                  fill
                  sizes="(max-width: 900px) 100vw, 380px"
                  className="svtt-about-owner__img"
                  priority
                />
              </div>
              <div className="svtt-about-owner__body">
                <h3 className="svtt-about-owner__name">{BUSINESS.owner.name}</h3>
                <p className="svtt-about-owner__role">{BUSINESS.owner.role}</p>
                <p className="svtt-about-owner__bio">
                  {BUSINESS.owner.name} founded Sri Vinayaka Tours &amp; Travels with a
                  clear vision: to make pilgrimage travel from Tirupati safe, comfortable,
                  and stress-free for every visitor — whether they travel alone or in large
                  groups. His deep knowledge of Tirupati, Tirumala, and the surrounding
                  temple regions is at the heart of every service we offer.
                </p>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="svtt-about-values" aria-labelledby="values-heading">
        <div className="svtt-container">
          <div className="svtt-section-header svtt-section-header--center" style={{ marginBottom: "2rem" }}>
            <p className="section-label">What We Stand For</p>
            <h2 id="values-heading" className="section-title">
              Our Approach
            </h2>
          </div>
          <ul className="svtt-about-values__grid" role="list">
            {VALUES.map((v) => (
              <li key={v.title} className="svtt-about-value-card">
                <span className="svtt-about-value-card__icon" aria-hidden="true">{v.icon}</span>
                <h3 className="svtt-about-value-card__title">{v.title}</h3>
                <p className="svtt-about-value-card__desc">{v.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Service Coverage ── */}
      <section className="svtt-about-coverage" aria-labelledby="coverage-heading">
        <div className="svtt-container">
          <div className="svtt-section-header" style={{ marginBottom: "1.5rem" }}>
            <p className="section-label">Where We Operate</p>
            <h2 id="coverage-heading" className="section-title">
              Service Coverage
            </h2>
            <p className="section-subtitle">
              Sri Vinayaka Tours &amp; Travels serves Tirupati and covers temple
              destinations across Andhra Pradesh and South India.
            </p>
          </div>
          <ul className="svtt-about-coverage__grid" role="list" aria-label="Service coverage areas">
            {COVERAGE_AREAS.map((area) => (
              <li key={area} className="svtt-about-coverage__item" role="listitem">
                <span className="svtt-about-coverage__dot" aria-hidden="true" />
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="svtt-about-cta" aria-labelledby="about-cta-heading">
        <div className="svtt-container">
          <h2 id="about-cta-heading" className="svtt-about-cta__heading">
            Ready to Travel with Us?
          </h2>
          <p className="svtt-about-cta__sub">
            Book a cab or tour package instantly on WhatsApp — we respond quickly
            and are available {BUSINESS.availability} for all your Tirupati travel needs.
          </p>
          <div className="svtt-about-cta__btns">
            <a
              href={heroWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              aria-label="Book a trip on WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Book on WhatsApp
            </a>
            <Link href="/services" className="btn btn-ghost btn-lg">
              View All Services
            </Link>
            <Link href="/contact" className="btn btn-ghost btn-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
