// Pickup & Drop Page — /pickup-drop
// Sri Vinayaka Tours & Travels — svtttirupati.com
// Task 11: 6 pickup/drop service types, how-it-works, bottom CTA

import type { Metadata } from "next";
import Link from "next/link";
import { serviceWhatsAppUrl, primaryWhatsAppUrl } from "@/lib/whatsapp";
import { BUSINESS } from "@/data/business";

export const metadata: Metadata = {
  title: "Pickup & Drop Services | Sri Vinayaka Tours & Travels — Tirupati",
  description:
    "Airport pickup & drop, railway station transfers, Tirumala taxi, hotel transfers & local pickup/drop in Tirupati. Available 24/7. Book instantly on WhatsApp.",
  alternates: { canonical: "https://svtttirupati.com/pickup-drop" },
  openGraph: {
    title: "Pickup & Drop Services | Sri Vinayaka Tours & Travels",
    description:
      "Airport, Railway Station, Tirumala, Hotel & local pickup/drop in Tirupati. 24/7 cab service. WhatsApp: +91 96522 40674.",
    url: "https://svtttirupati.com/pickup-drop",
    images: [{ url: "/images/logo/og-image.jpg", width: 1200, height: 630 }],
  },
};

// ── Data ─────────────────────────────────────────────────────────────────────

const PD_SERVICES = [
  {
    id: "airport",
    emoji: "✈️",
    accentClass: "svtt-pd-card__accent--blue",
    title: "Airport Pickup & Drop",
    subtitle: "Tirupati Airport",
    desc: "Punctual and professional airport transfer service. We track your flight and ensure on-time pickup, whether you are arriving for a Tirumala pilgrimage or departing after your visit. Available for all flight timings including early morning and late night.",
    from: "Tirupati City / Hotels",
    to: "Tirupati Airport",
    steps: [
      "Share your flight number and arrival/departure time on WhatsApp",
      "We confirm vehicle and driver details before your journey",
      "Driver arrives 15 min early and assists with luggage",
      "Comfortable ride to your destination",
    ],
    ctaLabel: "Book Airport Transfer",
    waService: "Airport Pickup & Drop",
    waPickup: "Tirupati City",
    waDrop: "Tirupati Airport",
  },
  {
    id: "railway",
    emoji: "🚆",
    accentClass: "svtt-pd-card__accent--orange",
    title: "Railway Station Transfer",
    subtitle: "Tirupati Railway Station",
    desc: "Hassle-free cab service to and from Tirupati Railway Station. Whether you are arriving for a Tirumala darshan or departing after your pilgrimage, our drivers will be waiting for you with a clean, comfortable vehicle.",
    from: "Tirupati Railway Station",
    to: "Hotels / Temples / City",
    steps: [
      "Share your train number and arrival time on WhatsApp",
      "We track your train for accurate pickup time",
      "Driver meets you at the station exit with name board",
      "Direct transfer to your hotel, temple, or destination",
    ],
    ctaLabel: "Book Station Transfer",
    waService: "Railway Station Transfer",
    waPickup: "Tirupati Railway Station",
    waDrop: "Hotels / Temples in Tirupati",
  },
  {
    id: "tirumala",
    emoji: "🏔️",
    accentClass: "",  // default maroon
    title: "Tirumala Taxi",
    subtitle: "Tirupati ↔ Tirumala Ghat Road",
    desc: "Dedicated Tirupati to Tirumala taxi service by experienced local drivers who know the ghat roads perfectly. We ensure a safe, comfortable, and timely journey for your Tirumala darshan, available at any hour of the day or night.",
    from: "Tirupati City",
    to: "Tirumala (Sri Venkateswara Temple)",
    steps: [
      "Book on WhatsApp with your preferred pickup time and location",
      "Driver confirmed within minutes — available round the clock",
      "Safe ghat road journey with experienced local driver",
      "Return trip arranged as needed — just WhatsApp us",
    ],
    ctaLabel: "Book Tirumala Taxi",
    waService: "Tirumala Taxi — Tirupati to Tirumala",
    waPickup: "Tirupati City",
    waDrop: "Tirumala",
  },
  {
    id: "hotel",
    emoji: "🏨",
    accentClass: "svtt-pd-card__accent--gold",
    title: "Hotel Transfer",
    subtitle: "All Tirupati Hotels",
    desc: "Convenient hotel pickup and drop service anywhere in Tirupati and Tirumala. We cater to all hotels, lodges, and dharmashalas across the city — from budget stays to premium hotels — ensuring a smooth transfer at any time.",
    from: "Your Hotel in Tirupati",
    to: "Airport / Station / Temples / City",
    steps: [
      "Share your hotel name and destination on WhatsApp",
      "Driver confirmed with vehicle details and ETA",
      "On-time pickup at your hotel lobby",
      "Comfortable transfer to your destination",
    ],
    ctaLabel: "Book Hotel Transfer",
    waService: "Hotel Transfer in Tirupati",
    waPickup: "Hotel in Tirupati",
    waDrop: "Airport / Station / Temples",
  },
  {
    id: "local",
    emoji: "📍",
    accentClass: "svtt-pd-card__accent--green",
    title: "Local Pickup & Drop",
    subtitle: "Anywhere in Tirupati City",
    desc: "Point-to-point cab service anywhere within Tirupati city. Hospital runs, market trips, temple visits, school drops, and everything in between — our reliable local cabs are available 24/7 for all your everyday travel needs.",
    from: "Any location in Tirupati",
    to: "Any location in Tirupati",
    steps: [
      "Share your pickup address and destination on WhatsApp",
      "Driver assigned immediately, available round the clock",
      "Pickup within the city in AC comfort",
      "Reach your destination safely and on time",
    ],
    ctaLabel: "Book Local Cab",
    waService: "Local Pickup & Drop in Tirupati",
    waPickup: "Your location in Tirupati",
    waDrop: "Your destination in Tirupati",
  },
  {
    id: "custom",
    emoji: "🗺️",
    accentClass: "svtt-pd-card__accent--purple",
    title: "Custom Pickup & Drop",
    subtitle: "Your Route, Your Terms",
    desc: "Have a special or unusual travel requirement? We handle custom pick-up and drop arrangements for multi-stop routes, inter-city transfers, corporate trips, group travel, and any destination across South India.",
    from: "Any location",
    to: "Any destination in South India",
    steps: [
      "Describe your route and requirements on WhatsApp",
      "We suggest the best vehicle and price for your trip",
      "Confirm booking with driver details shared in advance",
      "Travel comfortably anywhere in South India",
    ],
    ctaLabel: "Request Custom Transfer",
    waService: "Custom Pickup & Drop",
    waPickup: "Custom location",
    waDrop: "Custom destination",
  },
];

const PROCESS_STEPS = [
  {
    emoji: "📱",
    title: "WhatsApp Us",
    desc: "Send your pickup location, drop destination, date & time on WhatsApp.",
  },
  {
    emoji: "✅",
    title: "We Confirm",
    desc: "We confirm your booking instantly with driver name & vehicle details.",
  },
  {
    emoji: "🚗",
    title: "Driver Arrives",
    desc: "Your driver arrives on time — 15 minutes early for airport & station pickups.",
  },
  {
    emoji: "😊",
    title: "Travel Comfortably",
    desc: "Reach your destination safely in a clean, AC cab with a professional driver.",
  },
];

// Quick-jump nav items
const QUICKNAV = [
  { id: "airport",  emoji: "✈️",  label: "Airport" },
  { id: "railway",  emoji: "🚆",  label: "Railway Station" },
  { id: "tirumala", emoji: "🏔️", label: "Tirumala" },
  { id: "hotel",    emoji: "🏨",  label: "Hotel" },
  { id: "local",    emoji: "📍",  label: "Local" },
  { id: "custom",   emoji: "🗺️", label: "Custom" },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function PickupDropPage() {
  const heroWaUrl = primaryWhatsAppUrl(
    "Hello SVTT! I need a pickup & drop service in Tirupati. Could you please share availability and confirm my booking? Thank you!"
  );

  return (
    <>
      {/* ── Page Hero ── */}
      <header className="svtt-pd-hero" role="banner">
        <div className="svtt-container svtt-pd-hero__content">
          <span className="svtt-pd-hero__label">🚗 Pickup &amp; Drop Services</span>
          <h1 className="svtt-pd-hero__h1">
            On-Time Every Time —<br />
            <span style={{ color: "var(--svtt-accent)" }}>Airport, Railway &amp; Beyond</span>
          </h1>
          <p className="svtt-pd-hero__desc">
            Reliable pickup &amp; drop service across Tirupati — from Tirupati Airport
            and Railway Station to Tirumala, hotels, and anywhere in the city.
            Book in seconds on WhatsApp, available {BUSINESS.availability}.
          </p>
          <div className="svtt-pd-hero__ctas">
            <a
              href={heroWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              aria-label="Book a pickup or drop on WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Book Pickup / Drop
            </a>
            <a
              href={BUSINESS.phone.primaryTel}
              className="btn btn-ghost btn-lg"
              aria-label={`Call ${BUSINESS.phone.primaryDisplay}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.93 19.79 19.79 0 01.01 .28 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Call {BUSINESS.phone.primaryDisplay}
            </a>
          </div>
        </div>
      </header>

      {/* ── Quick-Jump Nav ── */}
      <nav className="svtt-pd-quicknav" aria-label="Jump to pickup/drop type">
        <div className="svtt-container">
          <div className="svtt-pd-quicknav__inner">
            {QUICKNAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="svtt-pd-quicknav__btn"
                aria-label={`Jump to ${item.label} section`}
              >
                <span aria-hidden="true">{item.emoji}</span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Service Cards ── */}
      <section className="svtt-pd-services" aria-labelledby="pd-services-heading">
        <div className="svtt-container">
          <div className="svtt-section-header" style={{ marginBottom: "2.5rem" }}>
            <p className="section-label">All Pickup &amp; Drop Services</p>
            <h2 id="pd-services-heading" className="section-title">
              {PD_SERVICES.length} Transfer Services Available
            </h2>
            <p className="section-subtitle">
              From Tirupati Airport to Tirumala ghat road — we handle every kind of
              transfer with professional drivers, clean vehicles &amp; on-time service.
            </p>
          </div>

          <ul className="svtt-pd-services__grid" role="list">
            {PD_SERVICES.map((svc) => {
              const waUrl = serviceWhatsAppUrl({
                service: svc.waService,
                pickupLocation: svc.waPickup,
                dropLocation: svc.waDrop,
              });
              return (
                <li key={svc.id} id={svc.id} className="svtt-pd-card" aria-label={svc.title}>
                  {/* Coloured accent bar */}
                  <div
                    className={`svtt-pd-card__accent${svc.accentClass ? ` ${svc.accentClass}` : ""}`}
                    aria-hidden="true"
                  />

                  <div className="svtt-pd-card__body">
                    {/* Icon */}
                    <div className="svtt-pd-card__icon" aria-hidden="true">
                      {svc.emoji}
                    </div>

                    {/* Title */}
                    <div>
                      <h2 className="svtt-pd-card__title">{svc.title}</h2>
                      <p className="svtt-pd-card__subtitle">{svc.subtitle}</p>
                    </div>

                    {/* Description */}
                    <p className="svtt-pd-card__desc">{svc.desc}</p>

                    {/* Route row */}
                    <div className="svtt-pd-card__route" aria-label="Route">
                      <span>📍 {svc.from}</span>
                      <span className="svtt-pd-card__route-arrow" aria-hidden="true">→</span>
                      <span>🏁 {svc.to}</span>
                    </div>

                    {/* Booking steps */}
                    <div>
                      <p
                        style={{
                          fontSize: "0.6875rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: "var(--svtt-text-subtle)",
                          marginBottom: "0.5rem",
                          margin: "0 0 0.5rem 0",
                        }}
                      >
                        How to Book
                      </p>
                      <ol className="svtt-pd-card__steps" aria-label="Booking steps">
                        {svc.steps.map((step, i) => (
                          <li key={i} className="svtt-pd-card__step">
                            <span className="svtt-pd-card__step-num" aria-hidden="true">
                              {i + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* CTA */}
                    <div className="svtt-pd-card__cta">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp"
                        aria-label={`${svc.ctaLabel} on WhatsApp`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        {svc.ctaLabel}
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── How Booking Works ── */}
      <section className="svtt-pd-process" aria-labelledby="process-heading">
        <div className="svtt-container">
          <div className="svtt-section-header svtt-section-header--center" style={{ marginBottom: "2.5rem" }}>
            <p className="section-label">Simple Process</p>
            <h2 id="process-heading" className="section-title">
              How Booking Works
            </h2>
          </div>

          <ol className="svtt-pd-process__steps" role="list" aria-label="Booking process steps">
            {PROCESS_STEPS.map((step, idx) => (
              <li key={idx} className="svtt-pd-process__step">
                <div className="svtt-pd-process__num" aria-label={`Step ${idx + 1}`}>
                  <span className="svtt-pd-process__emoji" aria-hidden="true">
                    {step.emoji}
                  </span>
                </div>
                <h3 className="svtt-pd-process__step-title">{step.title}</h3>
                <p className="svtt-pd-process__step-desc">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Bottom CTA Strip ── */}
      <section className="svtt-pd-cta" aria-labelledby="pd-cta-heading">
        <div className="svtt-container">
          <h2 id="pd-cta-heading" className="svtt-pd-cta__heading">
            Need a Pickup or Drop Right Now?
          </h2>
          <p className="svtt-pd-cta__sub">
            We respond instantly on WhatsApp — day or night. Share your pickup
            location and destination and we&apos;ll confirm your booking in minutes.
          </p>
          <div className="svtt-pd-cta__btns">
            <a
              href={heroWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              aria-label="Book pickup or drop on WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Book on WhatsApp
            </a>
            <a
              href={BUSINESS.phone.primaryTel}
              className="btn btn-ghost btn-lg"
              aria-label={`Call ${BUSINESS.phone.primaryDisplay}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.93 19.79 19.79 0 01.01 .28 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Call {BUSINESS.phone.primaryDisplay}
            </a>
            <Link href="/request-a-quote" className="btn btn-ghost btn-lg">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}