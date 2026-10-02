// FeaturedPackagesSection — Homepage Section 2
// Sri Vinayaka Tours & Travels — svtttirupati.com

import Image from "next/image";
import Link from "next/link";
import { PACKAGES } from "@/data/packages";
import { primaryWhatsAppUrl } from "@/lib/whatsapp";

// Show top 3 featured packages on homepage
const FEATURED_IDS = ["svtt0001", "svtt0003", "svtt0004"];

function formatPrice(startingPrice: number) {
  return `₹${startingPrice.toLocaleString("en-IN")}`;
}

export default function FeaturedPackagesSection() {
  const featured = PACKAGES.filter((p) => FEATURED_IDS.includes(p.id));

  return (
    <section className="svtt-section svtt-featured-pkg" aria-labelledby="packages-heading">
      <div className="svtt-container">
        {/* Header */}
        <div className="svtt-section-header">
          <p className="section-label">Temple Tour Packages</p>
          <h2 id="packages-heading" className="section-title">
            Popular Pilgrimage Packages
          </h2>
          <p className="section-subtitle">
            Carefully curated routes covering Tirumala, Kanipakam, Sri Kalahasti, Padmavathi
            and more — with multiple vehicle options to suit every group size.
          </p>
        </div>

        {/* Cards grid */}
        <ul role="list" className="svtt-pkg__grid">
          {featured.map((pkg) => {
            const waMsg = `Hello SVTT! I am interested in the "${pkg.title}" package. Please share availability and pricing. Thank you!`;
            const waUrl = primaryWhatsAppUrl(waMsg);
            const startingFrom = formatPrice(pkg.startingPrice);

            return (
              <li key={pkg.id} className="svtt-pkg__card card">
                {/* Image */}
                <div className="svtt-pkg__img-wrap">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="svtt-pkg__img"
                  />
                  {/* Duration badge */}
                  <span className="svtt-pkg__duration-badge">
                    🕐 {pkg.duration}
                  </span>
                </div>

                {/* Card body */}
                <div className="card-body svtt-pkg__body">
                  {/* Destinations chips */}
                  <div className="svtt-pkg__chips" aria-label="Destinations covered">
                    {pkg.destinations.slice(0, 3).map((d) => (
                      <span key={d} className="svtt-pkg__chip">{d}</span>
                    ))}
                    {pkg.destinations.length > 3 && (
                      <span className="svtt-pkg__chip svtt-pkg__chip--more">
                        +{pkg.destinations.length - 3} more
                      </span>
                    )}
                  </div>

                  <h3 className="svtt-pkg__title">{pkg.title}</h3>
                  <p className="svtt-pkg__desc">{pkg.description}</p>

                  {/* Price + CTA */}
                  <div className="svtt-pkg__footer">
                    <div className="svtt-pkg__price">
                      <span className="svtt-pkg__price-from">Starting from</span>
                      <strong className="svtt-pkg__price-value">{startingFrom}</strong>
                      <span className="svtt-pkg__price-note">+ toll & parking</span>
                    </div>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-sm"
                      aria-label={`Book ${pkg.title} on WhatsApp`}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* View all CTA */}
        <div className="svtt-featured-pkg__cta">
          <Link href="/tour-packages" className="btn btn-secondary">
            View All 10 Packages
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}