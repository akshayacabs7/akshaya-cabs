// Reviews & Testimonials Page — /reviews
// Sri Vinayaka Tours & Travels — svtttirupati.com
// Task 12: Google 5.0 rating hero + customer feedback grid + leave-a-review CTA
// RULE: Do NOT label customer feedback as Google Reviews. Only display the Google
//       rating score (5.0 ★★★★★) separately. Testimonials are customer-submitted feedback.

import type { Metadata } from "next";
import Link from "next/link";
import { TESTIMONIALS } from "@/data/testimonials";
import { primaryWhatsAppUrl } from "@/lib/whatsapp";
import { BUSINESS } from "@/data/business";

export const metadata: Metadata = {
  title: "Reviews & Testimonials | Sri Vinayaka Tours & Travels — Tirupati",
  description:
    "Sri Vinayaka Tours & Travels is rated 5.0 ★★★★★ on Google. Read customer feedback from pilgrim families, corporate travellers, and group tours across Tirupati and South India.",
  alternates: { canonical: "https://svtttirupati.com/reviews" },
  openGraph: {
    title: "5.0 ★ Reviews | Sri Vinayaka Tours & Travels",
    description:
      "Rated 5.0 on Google. Trusted by thousands of pilgrims for Tirumala darshan, temple tours & outstation cabs from Tirupati.",
    url: "https://svtttirupati.com/reviews",
    images: [{ url: "/images/logo/og-image.jpg", width: 1200, height: 630 }],
  },
};

// Star rating display helper
function Stars({ count }: { count: number }) {
  return (
    <div className="svtt-rv-card__stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden="true">
          {i < count ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

// Trust stats (no invented numbers — only verifiable claims)
const TRUST_STATS = [
  { val: "5.0★", label: "Google Rating" },
  { val: "10+",  label: "Curated Tour Packages" },
  { val: "7",    label: "Vehicle Options" },
  { val: "24/7", label: "Availability" },
];

const generalWaUrl = primaryWhatsAppUrl();

export default function ReviewsPage() {
  return (
    <>
      {/* ── Page Hero: Google Rating ── */}
      <header className="svtt-rv-hero" role="banner">
        <div className="svtt-container svtt-rv-hero__content">
          <span className="svtt-rv-hero__label">⭐ Reviews &amp; Ratings</span>
          <h1 className="svtt-rv-hero__h1">
            Trusted by Pilgrims &amp; Travellers<br />
            <span style={{ color: "var(--svtt-accent)" }}>Across India</span>
          </h1>

          {/* Google Rating Block */}
          <div className="svtt-rv-hero__rating-block" aria-label="Google rating: 5.0 out of 5 stars">
            <span className="svtt-rv-hero__score" aria-hidden="true">
              {BUSINESS.google.rating}
            </span>
            <div className="svtt-rv-hero__stars" aria-hidden="true">
              {"★★★★★"}
            </div>
            <span className="svtt-rv-hero__google-label">
              Rated on Google
            </span>
          </div>

          <p className="svtt-rv-hero__desc">
            Sri Vinayaka Tours &amp; Travels is proud to be rated{" "}
            <strong style={{ color: "#ffffff" }}>
              {BUSINESS.google.rating} ★★★★★ on Google
            </strong>{" "}
            by our customers. From Tirumala darshan to South India pilgrimages,
            we take every journey personally.
          </p>

          <div className="svtt-rv-hero__ctas">
            <a
              href={BUSINESS.google.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold btn-lg"
              aria-label="View Google Reviews for Sri Vinayaka Tours & Travels"
            >
              ⭐ View Google Reviews
            </a>
            <a
              href={generalWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-lg"
              aria-label="Book a cab or tour on WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Book Your Trip
            </a>
          </div>
        </div>
      </header>

      {/* ── Trust Stats Strip ── */}
      <section className="svtt-rv-stats" aria-label="Why choose SVTT — key facts">
        <div className="svtt-container">
          <ul className="svtt-rv-stats__grid" role="list">
            {TRUST_STATS.map((s) => (
              <li key={s.label} className="svtt-rv-stats__item" role="listitem">
                <span className="svtt-rv-stats__val">{s.val}</span>
                <span className="svtt-rv-stats__label">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Customer Feedback Grid ── */}
      <section className="svtt-rv-section" aria-labelledby="testimonials-heading">
        <div className="svtt-container">
          <div className="svtt-section-header" style={{ marginBottom: "1.5rem" }}>
            <p className="section-label">What Our Customers Say</p>
            <h2 id="testimonials-heading" className="section-title">
              Customer Feedback
            </h2>
          </div>

          {/* Transparency disclaimer — blueprint rule: don't mislabel */}
          <div className="svtt-rv-disclaimer" role="note" aria-label="Disclaimer about feedback source">
            <span className="svtt-rv-disclaimer__icon" aria-hidden="true">ℹ️</span>
            <span>
              The feedback below is from customers who have travelled with Sri Vinayaka Tours &amp; Travels.
              These are <strong>customer-submitted testimonials</strong> and are not scraped from Google.
              To read our verified Google Reviews, use the link above or below.
            </span>
          </div>

          <ul className="svtt-rv-grid" role="list" aria-label="Customer testimonials">
            {TESTIMONIALS.map((t) => {
              // First initial for avatar
              const initial = t.name.charAt(0).toUpperCase();
              return (
                <li key={t.id} className="svtt-rv-card" aria-label={`Review by ${t.name}`}>
                  {/* Decorative quote mark */}
                  <span className="svtt-rv-card__quote-mark" aria-hidden="true">&ldquo;</span>

                  {/* Stars */}
                  <Stars count={t.rating} />

                  {/* Service badge */}
                  <span className="svtt-rv-card__service">
                    🚗 {t.service}
                  </span>

                  {/* Review text */}
                  <p className="svtt-rv-card__text">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Reviewer */}
                  <div className="svtt-rv-card__footer">
                    <div className="svtt-rv-card__avatar" aria-hidden="true">
                      {initial}
                    </div>
                    <div className="svtt-rv-card__reviewer">
                      <span className="svtt-rv-card__name">{t.name}</span>
                      <span className="svtt-rv-card__location">📍 {t.location}</span>
                    </div>
                    <time className="svtt-rv-card__date" dateTime={t.date}>
                      {t.date}
                    </time>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Google CTA block */}
          <div className="svtt-rv-google-cta" aria-labelledby="google-cta-title">
            <div className="svtt-rv-google-cta__icon" aria-hidden="true">⭐</div>
            <div className="svtt-rv-google-cta__text">
              <h3 id="google-cta-title" className="svtt-rv-google-cta__title">
                See Our Verified Google Reviews
              </h3>
              <p className="svtt-rv-google-cta__desc">
                Read what our customers are saying on Google. Sri Vinayaka Tours &amp; Travels
                maintains a{" "}
                <strong>{BUSINESS.google.rating} ★★★★★</strong> rating on Google.
              </p>
            </div>
            <div className="svtt-rv-google-cta__actions">
              <a
                href={BUSINESS.google.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                aria-label="View Google Reviews for Sri Vinayaka Tours & Travels"
              >
                View Google Reviews
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Leave a Review CTA ── */}
      <section className="svtt-rv-cta" aria-labelledby="rv-cta-heading">
        <div className="svtt-container svtt-rv-cta__content">
          <h2 id="rv-cta-heading" className="svtt-rv-cta__heading">
            Travelled with Us? Share Your Experience
          </h2>
          <p className="svtt-rv-cta__sub">
            Your feedback helps other pilgrims and travellers choose a trustworthy
            cab service. Leave us a review on Google — it means the world to us!
          </p>
          <div className="svtt-rv-cta__btns">
            <a
              href={BUSINESS.google.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold btn-lg"
              aria-label="Leave a review on Google for Sri Vinayaka Tours & Travels"
            >
              ⭐ Leave a Google Review
            </a>
            <a
              href={generalWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              aria-label="Book a trip on WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Book Your Trip
            </a>
            <Link href="/tour-packages" className="btn btn-ghost btn-lg">
              View Tour Packages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
