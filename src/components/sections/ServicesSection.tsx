// ServicesSection — Homepage Section 3
// Sri Vinayaka Tours & Travels — svtttirupati.com

import Link from "next/link";
import { SERVICES } from "@/data/services";

// Map icon string → emoji for the homepage strip
const ICON_MAP: Record<string, string> = {
  MapPin:       "📍",
  Mountain:     "⛰️",
  Landmark:     "🛕",
  Navigation:   "🚗",
  Plane:        "✈️",
  Users:        "👥",
  Globe:        "🌏",
  Clock:        "🕐",
  Star:         "⭐",
};

export default function ServicesSection() {
  return (
    <section className="svtt-section-sm svtt-services-strip" aria-labelledby="services-heading">
      <div className="svtt-container">
        <div className="svtt-section-header svtt-section-header--center">
          <p className="section-label">What We Offer</p>
          <h2 id="services-heading" className="section-title">
            Our Cab &amp; Tour Services
          </h2>
        </div>

        <ul role="list" className="svtt-services__grid">
          {SERVICES.map((svc) => (
            <li key={svc.id}>
              <Link href={`/services/${svc.slug}`} className="svtt-services__card">
                <span className="svtt-services__icon" aria-hidden="true">
                  {ICON_MAP[svc.icon] ?? "🚕"}
                </span>
                <span className="svtt-services__name">{svc.shortTitle}</span>
                <span className="svtt-services__arrow" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="svtt-services__cta">
          <Link href="/services" className="btn btn-secondary">
            Explore All Services
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}