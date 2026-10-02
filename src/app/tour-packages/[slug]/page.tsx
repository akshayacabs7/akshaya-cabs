// Package Detail Page — /tour-packages/[slug]
// Sri Vinayaka Tours & Travels — svtttirupati.com
// Task 08: Full package detail with hero, pricing table, temples, inclusions/exclusions, sidebar booking card

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PACKAGES, getPackageBySlug } from "@/data/packages";
import { packageWhatsAppUrl, primaryWhatsAppUrl } from "@/lib/whatsapp";
import { BUSINESS } from "@/data/business";

// ── Static params (pre-generate all 10 package pages at build time) ───────────
export async function generateStaticParams() {
  return PACKAGES.map((pkg) => ({ slug: pkg.slug }));
}

// ── Metadata ─────────────────────────────────────────────────────────────────
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return {};

  const title = `${pkg.title} (${pkg.code}) | Sri Vinayaka Tours & Travels`;
  const description = `${pkg.description.slice(0, 150)}… Starting from ₹${pkg.startingPrice.toLocaleString("en-IN")}. Multiple vehicles. Book on WhatsApp.`;

  return {
    title,
    description,
    alternates: { canonical: `https://svtttirupati.com/tour-packages/${pkg.slug}` },
    openGraph: {
      title,
      description,
      url: `https://svtttirupati.com/tour-packages/${pkg.slug}`,
      images: [{ url: pkg.image, width: 1600, height: 900 }],
    },
  };
}

// ── Category display helpers ─────────────────────────────────────────────────
const CAT_LABELS: Record<string, string> = {
  local:       "Tirupati / Tirumala Local",
  nearby:      "Nearby Temples",
  outstation:  "Outstation Tour",
  "multi-day": "Multi-Day Tour",
};

function formatPrice(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}

// Standard inclusions / exclusions (same for all packages)
const INCLUSIONS = [
  "AC cab with experienced driver",
  "All fuel charges included",
  "Driver allowance included",
  "24/7 driver availability",
  "Multiple vehicle options",
  "WhatsApp contact for coordination",
];

const EXCLUSIONS = [
  "Toll charges (customer pays)",
  "Parking charges (customer pays)",
  "State permit charges if applicable",
  "Guide / priest charges",
  "Entry tickets to temples",
  "Meals & accommodation",
];

// ── Page Component ───────────────────────────────────────────────────────────
export default async function PackageDetailPage({ params }: Props) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) notFound();

  // WhatsApp URLs
  const waBookUrl = packageWhatsAppUrl({
    packageCode:  pkg.code,
    packageTitle: pkg.title,
  });

  const waGeneralUrl = primaryWhatsAppUrl(
    `Hello SVTT! I have a question about the "${pkg.title}" (${pkg.code}) package. Could you please help me?`
  );

  // Related packages (same category, excluding current; max 3)
  const related = PACKAGES.filter(
    (p) => p.slug !== pkg.slug && p.category === pkg.category
  ).slice(0, 3);

  // If fewer than 3 in same category, pad with featured packages
  const relatedFinal =
    related.length >= 3
      ? related
      : [
          ...related,
          ...PACKAGES.filter(
            (p) =>
              p.slug !== pkg.slug &&
              p.featured &&
              !related.find((r) => r.id === p.id)
          ).slice(0, 3 - related.length),
        ];

  return (
    <>
      {/* ── Hero Image ── */}
      <div className="svtt-pkgd-hero" aria-label={`${pkg.title} — package hero image`}>
        <Image
          src={pkg.image}
          alt={`${pkg.title} — Sri Vinayaka Tours & Travels`}
          fill
          priority
          quality={85}
          sizes="100vw"
          className="svtt-pkgd-hero__img"
        />
        <div className="svtt-pkgd-hero__overlay" aria-hidden="true" />

        {/* Overlaid content */}
        <div className="svtt-pkgd-hero__content">
          {/* Breadcrumb */}
          <nav className="svtt-pkgd-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="svtt-pkgd-hero__breadcrumb-sep" aria-hidden="true">›</span>
            <Link href="/tour-packages">Tour Packages</Link>
            <span className="svtt-pkgd-hero__breadcrumb-sep" aria-hidden="true">›</span>
            <span aria-current="page">{pkg.shortTitle}</span>
          </nav>

          {/* Badges */}
          <div className="svtt-pkgd-hero__badges" aria-label="Package details">
            <span className="svtt-pkgd-hero__badge svtt-pkgd-hero__badge--code">
              {pkg.code}
            </span>
            <span className="svtt-pkgd-hero__badge svtt-pkgd-hero__badge--cat">
              {CAT_LABELS[pkg.category] ?? pkg.category}
            </span>
            {pkg.duration && (
              <span className="svtt-pkgd-hero__badge svtt-pkgd-hero__badge--dur">
                🕐 {pkg.duration}
              </span>
            )}
          </div>

          <h1 className="svtt-pkgd-hero__h1">{pkg.title}</h1>
        </div>
      </div>

      {/* ── Main Layout ── */}
      <div className="svtt-container">
        <div className="svtt-pkgd-layout">

          {/* ── Left: Main Content Column ── */}
          <main className="svtt-pkgd-main" id="main-content">

            {/* Overview card */}
            <article className="svtt-pkgd-card" aria-labelledby="pkg-overview-heading">
              <h2 id="pkg-overview-heading" className="svtt-pkgd-card__heading">
                <span className="svtt-pkgd-card__heading-icon" aria-hidden="true">📋</span>
                Package Overview
              </h2>
              <p className="svtt-pkgd-desc">{pkg.description}</p>

              {/* Meta pills */}
              <div className="svtt-pkgd-meta" aria-label="Key package details">
                {pkg.duration && (
                  <span className="svtt-pkgd-meta__item">
                    <span className="svtt-pkgd-meta__icon" aria-hidden="true">🕐</span>
                    {pkg.duration}
                  </span>
                )}
                {pkg.kmLimit && (
                  <span className="svtt-pkgd-meta__item">
                    <span className="svtt-pkgd-meta__icon" aria-hidden="true">🛣️</span>
                    Up to {pkg.kmLimit}
                  </span>
                )}
                <span className="svtt-pkgd-meta__item">
                  <span className="svtt-pkgd-meta__icon" aria-hidden="true">🚗</span>
                  {pkg.prices.length} vehicle options
                </span>
                <span className="svtt-pkgd-meta__item">
                  <span className="svtt-pkgd-meta__icon" aria-hidden="true">✅</span>
                  Driver included
                </span>
              </div>
            </article>

            {/* Destinations */}
            <div className="svtt-pkgd-card" aria-labelledby="pkg-dest-heading">
              <h2 id="pkg-dest-heading" className="svtt-pkgd-card__heading">
                <span className="svtt-pkgd-card__heading-icon" aria-hidden="true">📍</span>
                Destinations Covered
              </h2>
              <div className="svtt-pkgd-dests" role="list" aria-label="Destinations">
                {pkg.destinations.map((d) => (
                  <span key={d} className="svtt-pkgd-dest-chip" role="listitem">
                    📍 {d}
                  </span>
                ))}
              </div>
            </div>

            {/* Temples */}
            <div className="svtt-pkgd-card" aria-labelledby="pkg-temples-heading">
              <h2 id="pkg-temples-heading" className="svtt-pkgd-card__heading">
                <span className="svtt-pkgd-card__heading-icon" aria-hidden="true">🛕</span>
                Temples &amp; Attractions Visited
              </h2>
              <ul className="svtt-pkgd-temples" aria-label="Temples and attractions included in this package">
                {pkg.temples.map((temple) => (
                  <li key={temple} className="svtt-pkgd-temples__item">
                    <span className="svtt-pkgd-temples__dot" aria-hidden="true" />
                    {temple}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing Table */}
            <div className="svtt-pkgd-card" aria-labelledby="pkg-pricing-heading">
              <h2 id="pkg-pricing-heading" className="svtt-pkgd-card__heading">
                <span className="svtt-pkgd-card__heading-icon" aria-hidden="true">💰</span>
                Vehicle-wise Pricing
              </h2>
              <p className="svtt-pkgd-pricing__note">
                Prices include driver &amp; fuel. Toll, parking &amp; state permits are extra (paid by customer).
              </p>

              <div className="svtt-pkgd-pricing-table-wrap">
                <table className="svtt-pkgd-pricing-table" aria-label={`Pricing table for ${pkg.title}`}>
                  <thead>
                    <tr>
                      <th scope="col">Vehicle</th>
                      <th scope="col">Capacity</th>
                      <th scope="col">Package Price</th>
                      <th scope="col">Book</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pkg.prices.map((row) => {
                      const waVehicleUrl = packageWhatsAppUrl({
                        packageCode:      pkg.code,
                        packageTitle:     pkg.title,
                        vehicleName:      row.vehicleName,
                        vehicleCapacity:  row.capacity,
                        price:            row.price,
                      });
                      return (
                        <tr key={row.vehicleId}>
                          <td>
                            <div className="svtt-pkgd-vehicle-name">{row.vehicleName}</div>
                          </td>
                          <td>
                            <div className="svtt-pkgd-vehicle-cap">{row.capacity} seater</div>
                          </td>
                          <td>
                            <span className="svtt-pkgd-price-val">{formatPrice(row.price)}</span>
                          </td>
                          <td>
                            <div className="svtt-pkgd-pricing-table__cta-col">
                              <a
                                href={waVehicleUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-whatsapp btn-sm"
                                aria-label={`Book ${row.vehicleName} for ${pkg.title} on WhatsApp`}
                              >
                                Book
                              </a>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Inclusions / Exclusions */}
            <div className="svtt-pkgd-card" aria-labelledby="pkg-incexc-heading">
              <h2 id="pkg-incexc-heading" className="svtt-pkgd-card__heading">
                <span className="svtt-pkgd-card__heading-icon" aria-hidden="true">📦</span>
                What&apos;s Included / Excluded
              </h2>
              <div className="svtt-pkgd-incexc">
                {/* Inclusions */}
                <div>
                  <h3 className="svtt-pkgd-incexc__col-title svtt-pkgd-incexc__col-title--inc">
                    ✅ Included
                  </h3>
                  <ul className="svtt-pkgd-incexc__list" aria-label="What is included">
                    {INCLUSIONS.map((item) => (
                      <li key={item} className="svtt-pkgd-incexc__item">
                        <span className="svtt-pkgd-incexc__icon--inc" aria-hidden="true">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions */}
                <div>
                  <h3 className="svtt-pkgd-incexc__col-title svtt-pkgd-incexc__col-title--exc">
                    ❌ Not Included
                  </h3>
                  <ul className="svtt-pkgd-incexc__list" aria-label="What is not included">
                    {EXCLUSIONS.map((item) => (
                      <li key={item} className="svtt-pkgd-incexc__item">
                        <span className="svtt-pkgd-incexc__icon--exc" aria-hidden="true">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </main>

          {/* ── Right: Sticky Sidebar ── */}
          <aside className="svtt-pkgd-sidebar" aria-label="Booking and quick info">

            {/* Booking card */}
            <div className="svtt-pkgd-book">
              <p className="svtt-pkgd-book__label">Ready to Book?</p>
              <div className="svtt-pkgd-book__price-wrap">
                <p className="svtt-pkgd-book__from">Starting from</p>
                <p className="svtt-pkgd-book__price">{formatPrice(pkg.startingPrice)}</p>
                <p className="svtt-pkgd-book__price-note">+ toll &amp; parking extra</p>
              </div>
              <div className="svtt-pkgd-book__ctas">
                <a
                  href={waBookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                  aria-label={`Book ${pkg.title} on WhatsApp`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Book on WhatsApp
                </a>
                <Link
                  href="/request-a-quote"
                  className="btn btn-secondary"
                  style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}
                  aria-label="Request a detailed quote for this package"
                >
                  Request a Quote
                </Link>
                <a
                  href={BUSINESS.phone.primaryTel}
                  className="btn"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    color: "#fff",
                    border: "1.5px solid rgba(255,255,255,0.25)",
                  }}
                  aria-label={`Call Sri Vinayaka Tours & Travels at ${BUSINESS.phone.primaryDisplay}`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.93 19.79 19.79 0 01.01 .28 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  Call {BUSINESS.phone.primaryDisplay}
                </a>
              </div>
              <p className="svtt-pkgd-book__info">
                Available 24/7 · Instant WhatsApp response
              </p>
            </div>

            {/* Quick info */}
            <div className="svtt-pkgd-qinfo" aria-labelledby="qinfo-heading">
              <h3 id="qinfo-heading" className="svtt-pkgd-qinfo__title">Quick Info</h3>
              <ul className="svtt-pkgd-qinfo__list">
                <li className="svtt-pkgd-qinfo__item">
                  <span className="svtt-pkgd-qinfo__key">Package Code</span>
                  <span className="svtt-pkgd-qinfo__val">{pkg.code}</span>
                </li>
                {pkg.duration && (
                  <li className="svtt-pkgd-qinfo__item">
                    <span className="svtt-pkgd-qinfo__key">Duration</span>
                    <span className="svtt-pkgd-qinfo__val">{pkg.duration}</span>
                  </li>
                )}
                {pkg.kmLimit && (
                  <li className="svtt-pkgd-qinfo__item">
                    <span className="svtt-pkgd-qinfo__key">KM Limit</span>
                    <span className="svtt-pkgd-qinfo__val">{pkg.kmLimit}</span>
                  </li>
                )}
                <li className="svtt-pkgd-qinfo__item">
                  <span className="svtt-pkgd-qinfo__key">Category</span>
                  <span className="svtt-pkgd-qinfo__val">
                    {CAT_LABELS[pkg.category] ?? pkg.category}
                  </span>
                </li>
                <li className="svtt-pkgd-qinfo__item">
                  <span className="svtt-pkgd-qinfo__key">Temples</span>
                  <span className="svtt-pkgd-qinfo__val">{pkg.temples.length} stops</span>
                </li>
                <li className="svtt-pkgd-qinfo__item">
                  <span className="svtt-pkgd-qinfo__key">Vehicles</span>
                  <span className="svtt-pkgd-qinfo__val">{pkg.prices.length} options</span>
                </li>
                <li className="svtt-pkgd-qinfo__item">
                  <span className="svtt-pkgd-qinfo__key">Starting Price</span>
                  <span className="svtt-pkgd-qinfo__val">{formatPrice(pkg.startingPrice)}</span>
                </li>
              </ul>
            </div>

            {/* Help card */}
            <div
              className="svtt-pkgd-qinfo"
              style={{ background: "#fffbeb", borderColor: "#fde68a" }}
              aria-labelledby="help-heading"
            >
              <h3
                id="help-heading"
                className="svtt-pkgd-qinfo__title"
                style={{ color: "#92400e" }}
              >
                💬 Need Help?
              </h3>
              <p style={{ fontSize: "0.875rem", color: "#92400e", marginBottom: "1rem", lineHeight: 1.55 }}>
                Have questions about darshan timings, best time to visit, or vehicle
                selection? Our team is available 24/7.
              </p>
              <a
                href={waGeneralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: "100%", justifyContent: "center" }}
                aria-label="Chat with Sri Vinayaka Tours & Travels on WhatsApp"
              >
                Chat With Us
              </a>
            </div>

          </aside>
        </div>
      </div>

      {/* ── Related Packages ── */}
      {relatedFinal.length > 0 && (
        <section className="svtt-pkgd-related" aria-labelledby="related-heading">
          <div className="svtt-container">
            <div className="svtt-section-header" style={{ marginBottom: "2rem" }}>
              <p className="section-label">Other Packages</p>
              <h2 id="related-heading" className="section-title">
                You Might Also Like
              </h2>
            </div>

            <ul className="svtt-pkgd-related__grid" role="list">
              {relatedFinal.map((p) => {
                const waUrl = primaryWhatsAppUrl(
                  `Hello SVTT! I am interested in the "${p.title}" (${p.code}) package. Please share availability.`
                );
                return (
                  <li key={p.id} className="svtt-pkgi__card">
                    <div className="svtt-pkgi__img-wrap">
                      <Image
                        src={p.image}
                        alt={`${p.title} — Sri Vinayaka Tours & Travels`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="svtt-pkgi__img"
                        loading="lazy"
                      />
                      <div className="svtt-pkgi__overlay-badges" aria-hidden="true">
                        <span className="svtt-pkgi__dur-badge">🕐 {p.duration}</span>
                      </div>
                    </div>
                    <div className="svtt-pkgi__body">
                      <span className="svtt-pkgi__code">{p.code}</span>
                      <h3 className="svtt-pkgi__title">{p.title}</h3>
                      <p className="svtt-pkgi__desc">{p.description}</p>
                    </div>
                    <div className="svtt-pkgi__footer">
                      <div className="svtt-pkgi__price-block">
                        <span className="svtt-pkgi__from-label">From</span>
                        <span className="svtt-pkgi__price">{formatPrice(p.startingPrice)}</span>
                      </div>
                      <div className="svtt-pkgi__ctas">
                        <Link
                          href={`/tour-packages/${p.slug}`}
                          className="btn btn-primary btn-sm"
                        >
                          View
                        </Link>
                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-whatsapp btn-sm"
                        >
                          Book
                        </a>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <Link href="/tour-packages" className="btn btn-secondary">
                View All {PACKAGES.length} Packages
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}