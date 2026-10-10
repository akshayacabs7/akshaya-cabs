// PackageFilterTabs — client component for /tour-packages category filtering
// Sri Vinayaka Tours & Travels — svtttirupati.com

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PACKAGES } from "@/data/packages";
import { primaryWhatsAppUrl } from "@/lib/whatsapp";
import type { Package } from "@/types";

type Category = "all" | Package["category"];

const FILTERS: { id: Category; label: string; emoji: string }[] = [
  { id: "all",       label: "All Packages",  emoji: "🛕" },
  { id: "local",     label: "Tirupati / Tirumala", emoji: "🏔️" },
  { id: "nearby",    label: "Nearby Temples",       emoji: "🕌" },
  { id: "outstation",label: "Outstation",            emoji: "🗺️" },
  { id: "multi-day", label: "Multi-Day Tours",       emoji: "📅" },
];

const CAT_LABELS: Record<Package["category"], string> = {
  local:      "Local",
  nearby:     "Nearby",
  outstation: "Outstation",
  "multi-day":"Multi-Day",
};

function formatPrice(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}

function catBadgeClass(cat: Package["category"]) {
  switch (cat) {
    case "local":      return "svtt-pkgi__cat-badge--local";
    case "nearby":     return "svtt-pkgi__cat-badge--nearby";
    case "outstation": return "svtt-pkgi__cat-badge--outstation";
    case "multi-day":  return "svtt-pkgi__cat-badge--multi-day";
  }
}

export default function PackageFilterTabs() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filteredPackages =
    activeFilter === "all"
      ? PACKAGES
      : PACKAGES.filter((p) => p.category === activeFilter);

  const countForFilter = (id: Category) =>
    id === "all"
      ? PACKAGES.length
      : PACKAGES.filter((p) => p.category === id).length;

  return (
    <>
      {/* ── Filter Tabs ── */}
      <nav
        className="svtt-pkg-filters"
        aria-label="Filter packages by category"
      >
        <div className="svtt-container">
          <div className="svtt-pkg-filters__inner" role="list">
            {FILTERS.map((f) => (
              <div key={f.id} role="listitem">
              <button
                className={`svtt-pkg-filter-btn${activeFilter === f.id ? " is-active" : ""}`}
                onClick={() => setActiveFilter(f.id)}
                aria-pressed={activeFilter === f.id}
                aria-label={`Show ${f.label} (${countForFilter(f.id)} packages)`}
              >
                <span aria-hidden="true">{f.emoji}</span>
                {f.label}
                <span className="svtt-pkg-filter-count">
                  {countForFilter(f.id)}
                </span>
              </button>
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Package Grid ── */}
      <section
        className="svtt-packages-section"
        aria-label={`${activeFilter === "all" ? "All" : FILTERS.find((f) => f.id === activeFilter)?.label} packages`}
      >
        <div className="svtt-container">
          <p className="svtt-packages-section__count">
            Showing{" "}
            <strong>{filteredPackages.length}</strong> of{" "}
            {PACKAGES.length} packages
          </p>

          {filteredPackages.length === 0 ? (
            <div className="svtt-packages-empty" role="status">
              <h3>No packages found</h3>
              <p>Try selecting a different category.</p>
            </div>
          ) : (
            <ul className="svtt-packages-grid" role="list">
              {filteredPackages.map((pkg) => {
                const waUrl = primaryWhatsAppUrl(
                  `Hello SVTT! I am interested in the "${pkg.title}" (${pkg.code}) package.\n\nPlease share availability and pricing. Thank you!`
                );
                return (
                  <li key={pkg.id} className="svtt-pkgi__card">
                    {/* Image */}
                    <div className="svtt-pkgi__img-wrap">
                      <Image
                        src={pkg.image}
                        alt={`${pkg.title} — Sri Vinayaka Tours & Travels`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="svtt-pkgi__img"
                        loading="lazy"
                      />
                      <div className="svtt-pkgi__overlay-badges" aria-hidden="true">
                        <span
                          className={`svtt-pkgi__cat-badge ${catBadgeClass(pkg.category)}`}
                        >
                          {CAT_LABELS[pkg.category]}
                        </span>
                        {pkg.duration && (
                          <span className="svtt-pkgi__dur-badge">
                            🕐 {pkg.duration}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="svtt-pkgi__body">
                      <span className="svtt-pkgi__code">{pkg.code}</span>
                      <h2 className="svtt-pkgi__title">{pkg.title}</h2>

                      {/* Destination chips */}
                      <div className="svtt-pkgi__destinations" aria-label="Destinations covered">
                        {pkg.destinations.map((d) => (
                          <span key={d} className="svtt-pkgi__dest-chip">
                            📍 {d}
                          </span>
                        ))}
                      </div>

                      <p className="svtt-pkgi__desc">{pkg.description}</p>

                      {pkg.distance?.allowanceKm && (
                        <span className="svtt-pkgi__km" aria-label={`Included km: ${pkg.distance.allowanceKm}`}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                          </svg>
                          {pkg.distance.allowanceKm} included
                        </span>
                      )}
                    </div>

                    {/* Card footer: price + CTAs */}
                    <div className="svtt-pkgi__footer">
                      <div className="svtt-pkgi__price-block">
                        <span className="svtt-pkgi__from-label">Starting from</span>
                        <span className="svtt-pkgi__price">
                          {formatPrice(pkg.startingPrice)}
                        </span>
                        <span className="svtt-pkgi__price-note">+ toll &amp; parking</span>
                      </div>

                      <div className="svtt-pkgi__ctas">
                        <Link
                          href={`/tour-packages/${pkg.slug}`}
                          className="btn btn-primary btn-sm"
                          aria-label={`View full details for ${pkg.title}`}
                        >
                          View Package
                        </Link>
                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-whatsapp btn-sm"
                          aria-label={`Enquire about ${pkg.title} on WhatsApp`}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                          Enquire
                        </a>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
