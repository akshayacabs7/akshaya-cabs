// Contact Page — /contact
// Sri Vinayaka Tours & Travels — svtttirupati.com
// Task 14: Primary phone, secondary phone, email, address, WhatsApp, Google Maps, enquiry form, social links

import type { Metadata } from "next";
import { BUSINESS } from "@/data/business";
import { SOCIAL_LINKS } from "@/data/social";
import { primaryWhatsAppUrl, secondaryWhatsAppUrl } from "@/lib/whatsapp";
import ContactEnquiryForm from "@/components/ui/ContactEnquiryForm";

export const metadata: Metadata = {
  title: "Contact Us | Sri Vinayaka Tours & Travels — Tirupati",
  description:
    "Contact Sri Vinayaka Tours & Travels — Tirupati's trusted cab service. Call +91 96522 40674, WhatsApp us, or send an enquiry. Office: D.No.9-130/5-9, L.S Nagar, Thiruchanur, Tirupati.",
  alternates: { canonical: "https://svtttirupati.com/contact" },
  openGraph: {
    title: "Contact | Sri Vinayaka Tours & Travels",
    description:
      "Call, WhatsApp or email SVTT Tirupati. Available 24/7 for cab bookings, tour packages & enquiries.",
    url: "https://svtttirupati.com/contact",
    images: [{ url: "/images/logo/og-image.jpg", width: 1200, height: 630 }],
  },
};

// Social icon mapping
const SOCIAL_EMOJIS: Record<string, string> = {
  instagram: "📷",
  facebook:  "📘",
  twitter:   "🐦",
};

export default function ContactPage() {
  const primaryWaUrl   = primaryWhatsAppUrl();
  const secondaryWaUrl = secondaryWhatsAppUrl();

  return (
    <>
      {/* ── Page Hero ── */}
      <header className="svtt-contact-hero" role="banner">
        <div className="svtt-container svtt-contact-hero__content">
          <span className="svtt-contact-hero__label">📞 Contact Us</span>
          <h1 className="svtt-contact-hero__h1">
            Get in Touch with<br />{BUSINESS.name}
          </h1>
          <p className="svtt-contact-hero__desc">
            We are available {BUSINESS.availability} for bookings, enquiries &amp; support.
            Call, WhatsApp, or use the enquiry form below — we will get back to you.
          </p>
        </div>
      </header>

      {/* ── Contact Body ── */}
      <section className="svtt-contact-body" aria-labelledby="contact-details-heading">
        <div className="svtt-container">
          <div className="svtt-contact-grid">

            {/* ── Left: Contact Details ── */}
            <aside aria-label="Contact details">
              <h2
                id="contact-details-heading"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "var(--svtt-text)",
                  marginBottom: "1rem",
                }}
              >
                Contact Details
              </h2>

              <div className="svtt-contact-details">

                {/* Primary Phone — WhatsApp + Call */}
                <a
                  href={primaryWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="svtt-contact-card"
                  aria-label={`WhatsApp primary number ${BUSINESS.phone.primaryDisplay}`}
                >
                  <span className="svtt-contact-card__icon" aria-hidden="true">💬</span>
                  <div className="svtt-contact-card__content">
                    <span className="svtt-contact-card__label">WhatsApp / Primary Phone</span>
                    <span className="svtt-contact-card__value">{BUSINESS.phone.primaryDisplay}</span>
                    <span className="svtt-contact-card__sub">Tap to open WhatsApp</span>
                  </div>
                </a>

                {/* Primary call link */}
                <a
                  href={BUSINESS.phone.primaryTel}
                  className="svtt-contact-card"
                  aria-label={`Call ${BUSINESS.phone.primaryDisplay}`}
                >
                  <span className="svtt-contact-card__icon" aria-hidden="true">📞</span>
                  <div className="svtt-contact-card__content">
                    <span className="svtt-contact-card__label">Call — Primary</span>
                    <span className="svtt-contact-card__value">{BUSINESS.phone.primaryDisplay}</span>
                    <span className="svtt-contact-card__sub">Available {BUSINESS.availability}</span>
                  </div>
                </a>

                {/* Secondary / alternate phone */}
                <a
                  href={BUSINESS.phone.secondaryTel}
                  className="svtt-contact-card"
                  aria-label={`Call alternate number ${BUSINESS.phone.secondaryDisplay}`}
                >
                  <span className="svtt-contact-card__icon" aria-hidden="true">📱</span>
                  <div className="svtt-contact-card__content">
                    <span className="svtt-contact-card__label">Alternate / {BUSINESS.phone.secondaryLabel}</span>
                    <span className="svtt-contact-card__value">{BUSINESS.phone.secondaryDisplay}</span>
                    <span className="svtt-contact-card__sub">WhatsApp also available</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={BUSINESS.emailHref}
                  className="svtt-contact-card"
                  aria-label={`Email ${BUSINESS.email}`}
                >
                  <span className="svtt-contact-card__icon" aria-hidden="true">✉️</span>
                  <div className="svtt-contact-card__content">
                    <span className="svtt-contact-card__label">Email</span>
                    <span className="svtt-contact-card__value">{BUSINESS.email}</span>
                    <span className="svtt-contact-card__sub">For detailed enquiries</span>
                  </div>
                </a>

                {/* Address */}
                <a
                  href={BUSINESS.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="svtt-contact-card"
                  aria-label="View office address on Google Maps"
                >
                  <span className="svtt-contact-card__icon" aria-hidden="true">📍</span>
                  <div className="svtt-contact-card__content">
                    <span className="svtt-contact-card__label">Office Address</span>
                    <span className="svtt-contact-card__value">
                      {BUSINESS.address.line1},<br />
                      {BUSINESS.address.line2},<br />
                      {BUSINESS.address.city}, {BUSINESS.address.stateCode} {BUSINESS.address.pincode}
                    </span>
                    <span className="svtt-contact-card__sub">View on Google Maps ↗</span>
                  </div>
                </a>

                {/* Secondary WhatsApp */}
                <a
                  href={secondaryWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="svtt-contact-card"
                  aria-label={`WhatsApp alternate number ${BUSINESS.phone.secondaryDisplay}`}
                >
                  <span className="svtt-contact-card__icon" aria-hidden="true">💬</span>
                  <div className="svtt-contact-card__content">
                    <span className="svtt-contact-card__label">WhatsApp — Alternate</span>
                    <span className="svtt-contact-card__value">{BUSINESS.phone.secondaryDisplay}</span>
                    <span className="svtt-contact-card__sub">Tap to open WhatsApp</span>
                  </div>
                </a>

                {/* Social Links */}
                <div className="svtt-contact-social">
                  <p className="svtt-contact-social__label">Follow Us</p>
                  <div className="svtt-contact-social__links">
                    {SOCIAL_LINKS.map((s) => (
                      <a
                        key={s.id}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="svtt-contact-social__link"
                        aria-label={`Follow us on ${s.name} (${s.handle})`}
                      >
                        <span className="svtt-contact-social__icon" aria-hidden="true">
                          {SOCIAL_EMOJIS[s.icon] ?? "🔗"}
                        </span>
                        <span>
                          <span style={{ display: "block" }}>{s.name}</span>
                          <span className="svtt-contact-social__handle">{s.handle}</span>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </aside>

            {/* ── Right: Enquiry Form ── */}
            <div className="svtt-contact-form-wrap" aria-label="Enquiry form">
              <h2 className="svtt-contact-form-wrap__title">Send an Enquiry</h2>
              <p className="svtt-contact-form-wrap__sub">
                Fill in the form below and your enquiry will be sent directly to us
                via WhatsApp with all your details pre-filled. Fields marked{" "}
                <span style={{ color: "var(--svtt-primary)" }}>*</span> are required.
              </p>
              <ContactEnquiryForm />
            </div>

          </div>
        </div>
      </section>

      {/* ── Google Maps Section ── */}
      <section className="svtt-contact-map" aria-labelledby="map-heading">
        <div className="svtt-container">
          <div className="svtt-section-header" style={{ marginBottom: "1.5rem" }}>
            <p className="section-label">Find Us</p>
            <h2 id="map-heading" className="section-title">Our Location</h2>
            <p className="section-subtitle">
              {BUSINESS.address.full}
            </p>
          </div>

          <div className="svtt-contact-map__frame">
            {/* Google Maps embedded iframe — Tirupati, Thiruchanur area */}
            <iframe
              title="Sri Vinayaka Tours & Travels — Location in Tirupati"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61548.16263534485!2d79.38167677431642!3d13.629005000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b5b5b5b5b5b%3A0x0!2sTirupati%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1696000000000!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google Maps showing Tirupati, Andhra Pradesh"
            />
          </div>

          <div style={{ textAlign: "center", marginTop: "1.25rem" }}>
            <a
              href={BUSINESS.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              aria-label="Open in Google Maps"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
