// Request a Quote Page — /request-a-quote
// Sri Vinayaka Tours & Travels — svtttirupati.com
// Task 15: Extended quote form (12 fields) + trust sidebar + quick contact links

import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/data/business";
import { primaryWhatsAppUrl, secondaryWhatsAppUrl } from "@/lib/whatsapp";
import RequestQuoteForm from "@/components/ui/RequestQuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote | Sri Vinayaka Tours & Travels — Tirupati",
  description:
    "Request a cab or tour quote from Sri Vinayaka Tours & Travels in Tirupati. Fill in your trip details — airport transfer, Tirumala darshan, outstation cab, or any South India tour. We will respond via WhatsApp.",
  alternates: { canonical: "https://svtttirupati.com/request-a-quote" },
  openGraph: {
    title: "Request a Quote | Sri Vinayaka Tours & Travels",
    description:
      "Get a personalised cab or tour quote from SVTT Tirupati — airport, railway, Tirumala, outstation & South India tours. Available 24/7.",
    url: "https://svtttirupati.com/request-a-quote",
    images: [{ url: "/images/logo/og-image.jpg", width: 1200, height: 630 }],
  },
};

// Why get a quote — trust-building sidebar content
const WHY_QUOTE = [
  {
    icon: "💸",
    text: "We share accurate, transparent pricing — no hidden charges or surprises after booking.",
  },
  {
    icon: "🚗",
    text: "Your quote will include the best-fit vehicle from our fleet of 7 AC vehicles for your group size.",
  },
  {
    icon: "📅",
    text: "Confirm availability for your exact travel date before you commit.",
  },
  {
    icon: "🛕",
    text: "Tell us your temple destinations and we will plan the best route for your pilgrimage.",
  },
  {
    icon: "💬",
    text: "Your details open directly in WhatsApp — fast, convenient, no form submissions to wait for.",
  },
];

export default function RequestAQuotePage() {
  const primaryWaUrl   = primaryWhatsAppUrl();
  const secondaryWaUrl = secondaryWhatsAppUrl();

  return (
    <>
      {/* ── Page Hero ── */}
      <header className="svtt-quote-hero" role="banner">
        <div className="svtt-container svtt-quote-hero__content">
          <span className="svtt-quote-hero__label">💸 Get a Quote</span>
          <h1 className="svtt-quote-hero__h1">
            Request a Personalised Quote —<br />
            <span style={{ color: "var(--svtt-accent)" }}>Cab or Tour Package</span>
          </h1>
          <p className="svtt-quote-hero__desc">
            Fill in your trip details below. Your request will be sent directly to Sri
            Vinayaka Tours &amp; Travels via WhatsApp with all your details pre-filled.
            We will respond with transparent pricing and availability.
          </p>
        </div>
      </header>

      {/* ── Body: Form + Sidebar ── */}
      <section className="svtt-quote-body" aria-labelledby="quote-form-heading">
        <div className="svtt-container">
          <div className="svtt-quote-grid">

            {/* ── Left: Quote Form ── */}
            <div className="svtt-quote-form-card">
              <h2 id="quote-form-heading" className="svtt-quote-form-card__title">
                Your Trip Details
              </h2>
              <p className="svtt-quote-form-card__sub">
                Fields marked <span style={{ color: "var(--svtt-primary)" }}>*</span> are required.
                The more details you provide, the more accurate your quote will be.
              </p>
              <RequestQuoteForm />
            </div>

            {/* ── Right: Sidebar ── */}
            <aside aria-label="Why request a quote and quick contact">
              <div className="svtt-quote-sidebar">

                {/* Why get a quote card */}
                <div className="svtt-quote-sidebar__card">
                  <h3 className="svtt-quote-sidebar__title">Why Request a Quote?</h3>
                  <ul className="svtt-quote-why-list" role="list">
                    {WHY_QUOTE.map((item, i) => (
                      <li key={i} className="svtt-quote-why-item">
                        <span className="svtt-quote-why-icon" aria-hidden="true">
                          {item.icon}
                        </span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Contact card */}
                <div className="svtt-quote-sidebar__card">
                  <h3 className="svtt-quote-sidebar__title">Prefer to Call?</h3>
                  <div>
                    <a
                      href={primaryWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="svtt-quote-contact-item"
                      aria-label={`WhatsApp ${BUSINESS.phone.primaryDisplay}`}
                    >
                      <span className="svtt-quote-contact-icon" aria-hidden="true">💬</span>
                      <span>
                        <span style={{ display: "block", fontWeight: 700, color: "var(--svtt-text)" }}>
                          {BUSINESS.phone.primaryDisplay}
                        </span>
                        <span style={{ fontSize: "0.75rem", color: "var(--svtt-text-subtle)" }}>
                          WhatsApp — Primary
                        </span>
                      </span>
                    </a>

                    <a
                      href={BUSINESS.phone.primaryTel}
                      className="svtt-quote-contact-item"
                      aria-label={`Call ${BUSINESS.phone.primaryDisplay}`}
                    >
                      <span className="svtt-quote-contact-icon" aria-hidden="true">📞</span>
                      <span>
                        <span style={{ display: "block", fontWeight: 700, color: "var(--svtt-text)" }}>
                          {BUSINESS.phone.primaryDisplay}
                        </span>
                        <span style={{ fontSize: "0.75rem", color: "var(--svtt-text-subtle)" }}>
                          Call — {BUSINESS.availability}
                        </span>
                      </span>
                    </a>

                    <a
                      href={secondaryWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="svtt-quote-contact-item"
                      aria-label={`WhatsApp alternate ${BUSINESS.phone.secondaryDisplay}`}
                    >
                      <span className="svtt-quote-contact-icon" aria-hidden="true">📱</span>
                      <span>
                        <span style={{ display: "block", fontWeight: 700, color: "var(--svtt-text)" }}>
                          {BUSINESS.phone.secondaryDisplay}
                        </span>
                        <span style={{ fontSize: "0.75rem", color: "var(--svtt-text-subtle)" }}>
                          WhatsApp — {BUSINESS.phone.secondaryLabel}
                        </span>
                      </span>
                    </a>

                    <a
                      href={BUSINESS.emailHref}
                      className="svtt-quote-contact-item"
                      aria-label={`Email ${BUSINESS.email}`}
                    >
                      <span className="svtt-quote-contact-icon" aria-hidden="true">✉️</span>
                      <span>
                        <span style={{ display: "block", fontWeight: 700, color: "var(--svtt-text)" }}>
                          {BUSINESS.email}
                        </span>
                        <span style={{ fontSize: "0.75rem", color: "var(--svtt-text-subtle)" }}>
                          Email
                        </span>
                      </span>
                    </a>
                  </div>
                </div>

                {/* Google rating trust badge */}
                <div
                  className="svtt-quote-sidebar__card"
                  style={{ textAlign: "center" }}
                  aria-label="Google rating"
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: 800,
                      fontFamily: "var(--font-display)",
                      color: "var(--svtt-primary)",
                      lineHeight: 1,
                    }}
                  >
                    {BUSINESS.google.rating}
                  </div>
                  <div style={{ fontSize: "1.25rem", color: "#f59e0b", letterSpacing: "-0.05em" }}>
                    ★★★★★
                  </div>
                  <p style={{ fontSize: "0.8rem", color: "var(--svtt-text-subtle)", marginTop: "0.5rem" }}>
                    Rated on Google
                  </p>
                  <a
                    href={BUSINESS.google.reviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                    style={{ marginTop: "0.75rem", fontSize: "0.8125rem" }}
                    aria-label="View Google Reviews for Sri Vinayaka Tours & Travels"
                  >
                    View Reviews
                  </a>
                </div>

                {/* Quick links */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    fontSize: "0.8125rem",
                  }}
                >
                  <Link href="/tour-packages" className="btn btn-ghost" style={{ textAlign: "center" }}>
                    Browse Tour Packages
                  </Link>
                  <Link href="/fleet" className="btn btn-ghost" style={{ textAlign: "center" }}>
                    View Our Fleet
                  </Link>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  );
}