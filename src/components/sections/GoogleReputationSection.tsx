// GoogleReputationSection — Homepage Section 8
// Sri Vinayaka Tours & Travels — svtttirupati.com
// Blueprint rule: Display 5.0 ★ Google rating, View Google Reviews CTA.
// Do NOT label customer testimonials as Google reviews.

import Link from "next/link";
import { BUSINESS } from "@/data/business";
import { TESTIMONIALS } from "@/data/testimonials";
import { primaryWhatsAppUrl } from "@/lib/whatsapp";

// Show 3 testimonials in the homepage strip
const HOMEPAGE_TESTIMONIALS = TESTIMONIALS.slice(0, 3);

const waUrl = primaryWhatsAppUrl();

export default function GoogleReputationSection() {
  return (
    <section className="svtt-section svtt-reputation" aria-labelledby="reputation-heading">
      <div className="svtt-container">

        {/* Rating header */}
        <div className="svtt-reputation__header">
          <div className="svtt-reputation__score-block">
            <div className="svtt-reputation__score" aria-label={`${BUSINESS.google.rating} out of 5 stars on Google`}>
              <span className="svtt-reputation__score-num">{BUSINESS.google.rating}</span>
              <div>
                <span className="svtt-reputation__stars" aria-hidden="true">★★★★★</span>
                <p className="svtt-reputation__google-label">Rated on Google</p>
              </div>
            </div>
          </div>

          <div className="svtt-reputation__text">
            <p className="section-label">Customer Trust</p>
            <h2 id="reputation-heading" className="section-title" style={{ marginBottom: "0.75rem" }}>
              Trusted by Pilgrims &amp; Travellers Across India
            </h2>
            <p className="section-subtitle" style={{ marginBottom: "1.25rem" }}>
              Sri Vinayaka Tours &amp; Travels is rated{" "}
              <strong>{BUSINESS.google.rating} ★★★★★</strong> on Google.
              From Tirumala darshan to South India pilgrimages — our customers
              trust us with every journey.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a
                href={BUSINESS.google.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                aria-label="View Google Reviews for Sri Vinayaka Tours & Travels"
              >
                ⭐ View Google Reviews
              </a>
              <Link href="/reviews" className="btn btn-ghost">
                All Customer Feedback
              </Link>
            </div>
          </div>
        </div>

        {/* Testimonial cards — NOT labelled as Google reviews */}
        <div className="svtt-reputation__note" role="note" aria-label="Note about testimonials">
          <span aria-hidden="true">ℹ️</span>
          Customer feedback — not Google reviews
        </div>

        <ul role="list" className="svtt-reputation__cards">
          {HOMEPAGE_TESTIMONIALS.map((t) => (
            <li key={t.id} className="svtt-reputation__card">
              {/* Stars */}
              <div className="svtt-reputation__card-stars" aria-label={`${t.rating} out of 5`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} aria-hidden="true">★</span>
                ))}
              </div>
              {/* Quote */}
              <p className="svtt-reputation__card-quote">
                &ldquo;{t.text}&rdquo;
              </p>
              {/* Reviewer */}
              <div className="svtt-reputation__card-reviewer">
                <span className="svtt-reputation__card-avatar" aria-hidden="true">
                  {t.name.charAt(0).toUpperCase()}
                </span>
                <div>
                  <span className="svtt-reputation__card-name">{t.name}</span>
                  <span className="svtt-reputation__card-loc">📍 {t.location}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg"
            aria-label="Book a cab or tour on WhatsApp"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Book Your Trip on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
