// Akshaya Cabs — Package Detail Page (TASK-15)
// /[lang]/tour-packages/[slug]
// Server Component. No SVTT identity. No .svtt-* class names.
// Bilingual EN+TE. All 10 slugs share this single template.

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PACKAGES, getPackageBySlug } from "@/data/packages";
import { VEHICLES } from "@/data/vehicles";
import { packageWhatsAppUrl, primaryWhatsAppUrl } from "@/lib/whatsapp";
import { BUSINESS } from "@/data/business";
import type { Locale } from "@/i18n/config";
import { LOCALES } from "@/i18n/config";
import JsonLd from "@/components/seo/JsonLd";
import { buildTouristTripSchema } from "@/lib/schema";

const VEHICLE_TE_NAME_MAP: Record<string, string> = Object.fromEntries(
  VEHICLES.map((v) => [v.id, v.nameTe ?? v.name])
);

// ── Static params (pre-generate all 20 locale×slug pages at build time) ───────
export async function generateStaticParams() {
  return LOCALES.flatMap((lang) =>
    PACKAGES.map((pkg) => ({ lang, slug: pkg.slug }))
  );
}

// ── Metadata ──────────────────────────────────────────────────────

type Props = { params: Promise<{ lang: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = (LOCALES.includes(lang as Locale) ? lang : "en") as Locale;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return {};

  const isTe = locale === "te";
  const pkgTitle = isTe && pkg.titleTe ? pkg.titleTe : pkg.title;
  const pkgDesc = isTe && pkg.descriptionTe ? pkg.descriptionTe : pkg.description;

  const title = isTe
    ? `${pkgTitle} | ఆలయ టూర్ | అక్షయ క్యాబ్స్ తిరుపతి`
    : `${pkg.title} | Temple Tour | Akshaya Cabs Tirupati`;
  const description = isTe
    ? `${pkgDesc.slice(0, 155)}… ప్రారంభ ధర ₹${pkg.startingPrice.toLocaleString("en-IN")}. డ్రైవర్ & ఇంధనం చేర్చబడింది. WhatsApp లో బుక్ చేయండి.`
    : `${pkg.description.slice(0, 155)}… Starting from ₹${pkg.startingPrice.toLocaleString("en-IN")}. Driver & fuel included. Book on WhatsApp.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://akshayacabs.com/${locale}/tour-packages/${pkg.slug}`,
      languages: {
        "en-IN": `https://akshayacabs.com/en/tour-packages/${pkg.slug}`,
        "te-IN": `https://akshayacabs.com/te/tour-packages/${pkg.slug}`,
        "x-default": `https://akshayacabs.com/en/tour-packages/${pkg.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://akshayacabs.com/${locale}/tour-packages/${pkg.slug}`,
      images: [{ url: pkg.image, width: 1600, height: 900 }],
    },
  };
}

// ── Helpers ───────────────────────────────────────────────────────

const CAT_LABEL_EN: Record<string, string> = {
  local:        "Tirupati / Tirumala Local",
  nearby:       "Nearby Temples",
  outstation:   "Outstation Tour",
  "multi-day":  "Multi-Day Tour",
};

const CAT_LABEL_TE: Record<string, string> = {
  local:        "తిరుపతి / తిరుమల స్థానిక",
  nearby:       "సమీప ఆలయాలు",
  outstation:   "అవుట్‌స్టేషన్ టూర్",
  "multi-day":  "బహు-రోజు టూర్",
};

function formatPrice(n: number | null, isEn: boolean): string {
  if (n === null) return isEn ? "Ask for quote" : "కోటేషన్ అడగండి";
  return `₹${n.toLocaleString("en-IN")}`;
}

// Capacity: "4+1" → "4 passengers" — the +1 is always the driver
function displayCapacity(cap: string, isEn: boolean): string {
  const match = cap.match(/^(\d+)\+1$/);
  if (match) {
    const pax = parseInt(match[1], 10);
    return isEn ? `${pax} passengers` : `${pax} ప్రయాణికులు`;
  }
  return cap;
}

// Shared WA icon
function WaIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

// ── Page ──────────────────────────────────────────────────────────

export default async function PackageDetailPage({ params }: Props) {
  const { lang, slug } = await params;
  const locale = (LOCALES.includes(lang as Locale) ? lang : "en") as Locale;
  const isEn = locale === "en";

  const pkg = getPackageBySlug(slug);
  if (!pkg) notFound();

  const pkgTitle = !isEn && pkg.titleTe ? pkg.titleTe : pkg.title;
  const pkgShortTitle = !isEn && pkg.shortTitleTe ? pkg.shortTitleTe : pkg.shortTitle;
  const pkgDesc = !isEn && pkg.descriptionTe ? pkg.descriptionTe : pkg.description;
  const pkgDuration = !isEn && pkg.durationTe ? pkg.durationTe : pkg.duration;
  const pkgDestinations = !isEn && pkg.destinationsTe && pkg.destinationsTe.length > 0 ? pkg.destinationsTe : pkg.destinations;
  const pkgTemples = !isEn && pkg.templesTe && pkg.templesTe.length > 0 ? pkg.templesTe : pkg.temples;
  const pkgDistNote = !isEn && pkg.distance?.distanceNoteTe ? pkg.distance.distanceNoteTe : pkg.distance?.distanceNote;

  // WhatsApp URLs
  const waBookUrl = packageWhatsAppUrl({
    packageCode:  pkg.code,
    packageTitle: pkg.title,
  });

  const waHelpUrl = primaryWhatsAppUrl(
    isEn
      ? `Hello Akshaya Cabs Tirupati! I have a question about the "${pkg.title}" (${pkg.code}) package. Could you please help me?`
      : `నమస్కారం అక్షయ క్యాబ్స్! "${pkgTitle}" (${pkg.code}) ప్యాకేజీ గురించి నాకు ఒక ప్రశ్న ఉంది. సహాయం చేయగలరా?`
  );

  // Related: same category first, then featured; max 3; no self
  const sameCat = PACKAGES.filter(
    (p) => p.slug !== pkg.slug && p.category === pkg.category
  ).slice(0, 3);
  const related =
    sameCat.length >= 3
      ? sameCat
      : [
          ...sameCat,
          ...PACKAGES.filter(
            (p) =>
              p.slug !== pkg.slug &&
              p.featured &&
              !sameCat.find((r) => r.id === p.id)
          ).slice(0, 3 - sameCat.length),
        ];

  return (
    <>
      <JsonLd
        data={buildTouristTripSchema(
          pkg,
          locale,
          `https://akshayacabs.com/${locale}/tour-packages/${pkg.slug}`
        )}
      />
      {/* ── 1. Hero ── */}
      <div className="akc-pkgd-hero" aria-label={`${pkgTitle} — hero image`}>
        <Image
          src={pkg.image}
          alt={`${pkgTitle} — Akshaya Cabs Tirupati`}
          fill
          priority
          quality={85}
          sizes="100vw"
          className="akc-pkgd-hero__img"
        />
        <div className="akc-pkgd-hero__overlay" aria-hidden="true" />

        <div className="akc-pkgd-hero__content">
          {/* Breadcrumb */}
          <nav className="akc-pkgd-breadcrumb" aria-label={isEn ? "Breadcrumb" : "బ్రెడ్‌క్రంబ్"}>
            <Link href={`/${locale}`}>{isEn ? "Home" : "హోమ్"}</Link>
            <span aria-hidden="true">›</span>
            <Link href={`/${locale}/tour-packages`}>{isEn ? "Tour Packages" : "టూర్ ప్యాకేజీలు"}</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page" className={locale === "te" ? "lang-te" : ""}>{pkgShortTitle}</span>
          </nav>

          {/* Badges */}
          <div className="akc-pkgd-hero__badges">
            <span className="akc-pkgd-hero__badge akc-pkgd-hero__badge--code">{pkg.code}</span>
            <span className="akc-pkgd-hero__badge akc-pkgd-hero__badge--cat">
              {isEn
                ? (CAT_LABEL_EN[pkg.category] ?? pkg.category)
                : (CAT_LABEL_TE[pkg.category] ?? pkg.category)}
            </span>
            {pkgDuration && (
              <span className="akc-pkgd-hero__badge akc-pkgd-hero__badge--dur">
                🕐 {pkgDuration}
              </span>
            )}
            {pkg.distance?.exceedsAllowance && (
              <span className="akc-pkgd-hero__badge akc-pkgd-hero__badge--warn">
                ⚠ {isEn ? "Long circuit — read advisory" : "దీర్ఘ సర్క్యూట్ — నోటీసు చదవండి"}
              </span>
            )}
          </div>

          <h1 className={`akc-pkgd-hero__h1${locale === "te" ? " lang-te" : ""}`}>{pkgTitle}</h1>
        </div>
      </div>

      {/* ── 2. Main layout ── */}
      <div className="akc-container">
        <div className="akc-pkgd-layout">

          {/* ── Left: Main Content ── */}
          <main className="akc-pkgd-main" id="main-content">

            {/* Overview */}
            <article className="akc-pkgd-card" aria-labelledby="pkg-overview-heading">
              <h2 id="pkg-overview-heading" className="akc-pkgd-card__heading">
                <span aria-hidden="true">📋</span>
                {isEn ? "Package Overview" : "ప్యాకేజీ సారాంశం"}
              </h2>
              <p className={`akc-pkgd-desc${locale === "te" ? " lang-te" : ""}`}>{pkgDesc}</p>

              {/* Meta pills */}
              <div className="akc-pkgd-meta" aria-label={isEn ? "Key details" : "ముఖ్య వివరాలు"}>
                {pkgDuration && (
                  <span className="akc-pkgd-meta__item">
                    <span aria-hidden="true">🕐</span>
                    {pkgDuration}
                  </span>
                )}
                {pkg.distance?.allowanceKm && (
                  <span className="akc-pkgd-meta__item">
                    <span aria-hidden="true">🛣️</span>
                    {isEn
                      ? `Includes ${pkg.distance.allowanceKm}`
                      : `${pkg.distance.allowanceKm} చేర్చబడింది`}
                  </span>
                )}
                <span className="akc-pkgd-meta__item">
                  <span aria-hidden="true">🚗</span>
                  {isEn
                    ? `${pkg.prices.length} vehicle options`
                    : `${pkg.prices.length} వాహన ఎంపికలు`}
                </span>
                <span className="akc-pkgd-meta__item">
                  <span aria-hidden="true">✅</span>
                  {isEn ? "Driver & fuel included" : "డ్రైవర్ & ఇంధనం చేర్చబడింది"}
                </span>
              </div>

              {/* Distance advisory (only for circuits that exceed allowance) */}
              {pkg.distance?.exceedsAllowance && (
                <div className="akc-pkgd-advisory" role="alert">
                  <strong>⚠ {isEn ? "Distance Advisory" : "దూర నోటీసు"}</strong>
                  <p className={locale === "te" ? "lang-te" : ""}>{pkgDistNote}</p>
                  {pkg.enquiryNote && (
                    <p className="akc-pkgd-advisory__note">{pkg.enquiryNote}</p>
                  )}
                </div>
              )}

              {/* Normal distance note */}
              {!pkg.distance?.exceedsAllowance && pkgDistNote && (
                <p className={`akc-pkgd-dist-note${locale === "te" ? " lang-te" : ""}`}>📍 {pkgDistNote}</p>
              )}
            </article>

            {/* Destinations */}
            <div className="akc-pkgd-card" aria-labelledby="pkg-dest-heading">
              <h2 id="pkg-dest-heading" className="akc-pkgd-card__heading">
                <span aria-hidden="true">📍</span>
                {isEn ? "Destinations Covered" : "కవర్ చేసిన గమ్యాలు"}
              </h2>
              <div className="akc-pkgd-dests" role="list">
                {pkgDestinations.map((d) => (
                  <span key={d} className={`akc-pkgd-dest-chip${locale === "te" ? " lang-te" : ""}`} role="listitem">
                    📍 {d}
                  </span>
                ))}
              </div>
            </div>

            {/* Temples & stops */}
            <div className="akc-pkgd-card" aria-labelledby="pkg-temples-heading">
              <h2 id="pkg-temples-heading" className="akc-pkgd-card__heading">
                <span aria-hidden="true">🛕</span>
                {isEn ? "Temples & Attractions Visited" : "సందర్శించే ఆలయాలు & ఆకర్షణలు"}
              </h2>
              <p className="akc-pkgd-temples__note">
                {isEn
                  ? "All stops below are part of this package. Sequence may vary based on darshan timings and road conditions."
                  : "దిగువ అన్ని ఆగే ప్రదేశాలు ఈ ప్యాకేజీలో భాగం. వరుస క్రమం దర్శన్ సమయాలు మరియు రహదారి పరిస్థితుల ఆధారంగా మారవచ్చు."}
              </p>
              <ol className="akc-pkgd-temples" aria-label={isEn ? "Temples and attractions" : "ఆలయాలు"}>
                {pkgTemples.map((temple, i) => (
                  <li key={temple} className={`akc-pkgd-temples__item${locale === "te" ? " lang-te" : ""}`}>
                    <span className="akc-pkgd-temples__num" aria-hidden="true">{i + 1}</span>
                    <span>{temple}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Vehicle-wise Pricing */}
            <div className="akc-pkgd-card" aria-labelledby="pkg-pricing-heading">
              <h2 id="pkg-pricing-heading" className="akc-pkgd-card__heading">
                <span aria-hidden="true">💰</span>
                {isEn ? "Vehicle-wise Pricing" : "వాహన-వారీ ధర"}
              </h2>
              <p className="akc-pkgd-pricing__note">
                {isEn
                  ? "All vehicles equipped with AC & Wi‑Fi. All prices include driver & fuel. Toll, parking & state permits are extra (paid by customer)."
                  : "అన్ని వాహనాలు AC & Wi‑Fi సౌకర్యంతో ఉంటాయి. అన్ని ధరలు డ్రైవర్ & ఇంధనాన్ని చేర్చుతాయి. టోల్, పార్కింగ్ & రాష్ట్ర పర్మిట్లు అదనం (కస్టమర్ చెల్లిస్తారు)."}
              </p>

              <div className="akc-pkgd-pricing-table-wrap">
                <table
                  className="akc-pkgd-pricing-table"
                  aria-label={isEn ? `Pricing for ${pkgTitle}` : `${pkgTitle} ధర పట్టిక`}
                >
                  <thead>
                    <tr>
                      <th scope="col">{isEn ? "Vehicle" : "వాహనం"}</th>
                      <th scope="col">{isEn ? "Passengers" : "ప్రయాణికులు"}</th>
                      <th scope="col">{isEn ? "Package Price" : "ప్యాకేజీ ధర"}</th>
                      <th scope="col">{isEn ? "Wi‑Fi" : "వై-ఫై"}</th>
                      <th scope="col">{isEn ? "Enquire" : "విచారించండి"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pkg.prices.map((row) => {
                      const vehDisplayName = !isEn
                        ? (VEHICLE_TE_NAME_MAP[row.vehicleId] ?? row.vehicleName)
                        : row.vehicleName;
                      const waVehicleUrl = packageWhatsAppUrl({
                        packageCode:     pkg.code,
                        packageTitle:    pkg.title,
                        vehicleName:     row.vehicleName,
                        vehicleCapacity: row.capacity,
                        price:           row.price ?? undefined,
                      });
                      return (
                        <tr key={row.vehicleId}>
                          <td>
                            <span className={`akc-pkgd-vehicle-name${locale === "te" ? " lang-te" : ""}`}>{vehDisplayName}</span>
                          </td>
                          <td>
                            <span className="akc-pkgd-vehicle-cap">
                              {displayCapacity(row.capacity, isEn)}
                            </span>
                          </td>
                          <td>
                            {row.customQuote ? (
                              <span className="akc-pkgd-price-quote">
                                {isEn ? "Ask for quote" : "కోటేషన్ అడగండి"}
                              </span>
                            ) : (
                              <span className="akc-pkgd-price-val">
                                {formatPrice(row.price, isEn)}
                              </span>
                            )}
                          </td>
                          <td>
                            <span className="akc-pkgd-vehicle-wifi">📶 {isEn ? "Available" : "అందుబాటులో ఉంది"}</span>
                          </td>
                          <td>
                            <a
                              href={waVehicleUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="akc-btn akc-btn--wa akc-btn--sm"
                              aria-label={isEn
                                ? `Enquire about ${row.vehicleName} for ${pkgTitle}`
                                : `${vehDisplayName} గురించి విచారించండి`}
                            >
                              <WaIcon />
                              {isEn ? "Enquire" : "విచారించండి"}
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Normal km note */}
              {pkg.enquiryNote && !pkg.distance?.exceedsAllowance && (
                <p className="akc-pkgd-pricing__extra-note">ℹ️ {pkg.enquiryNote}</p>
              )}
            </div>

            {/* Inclusions / Exclusions (from package data — not hardcoded) */}
            <div className="akc-pkgd-card" aria-labelledby="pkg-incexc-heading">
              <h2 id="pkg-incexc-heading" className="akc-pkgd-card__heading">
                <span aria-hidden="true">📦</span>
                {isEn ? "What's Included / Excluded" : "ఏమి చేర్చబడింది / మినహాయించబడింది"}
              </h2>
              <div className="akc-pkgd-incexc">
                <div>
                  <h3 className="akc-pkgd-incexc__col-title akc-pkgd-incexc__col-title--inc">
                    ✅ {isEn ? "Included" : "చేర్చబడింది"}
                  </h3>
                  <ul className="akc-pkgd-incexc__list" aria-label={isEn ? "Inclusions" : "చేర్చినవి"}>
                    {(pkg.inclusions ?? []).map((item) => (
                      <li key={item} className="akc-pkgd-incexc__item">
                        <span className="akc-pkgd-incexc__icon--inc" aria-hidden="true">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="akc-pkgd-incexc__col-title akc-pkgd-incexc__col-title--exc">
                    ❌ {isEn ? "Not Included" : "చేర్చబడలేదు"}
                  </h3>
                  <ul className="akc-pkgd-incexc__list" aria-label={isEn ? "Exclusions" : "మినహాయించినవి"}>
                    {(pkg.exclusions ?? []).map((item) => (
                      <li key={item} className="akc-pkgd-incexc__item">
                        <span className="akc-pkgd-incexc__icon--exc" aria-hidden="true">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </main>

          {/* ── Right: Sticky Sidebar ── */}
          <aside
            className="akc-pkgd-sidebar"
            aria-label={isEn ? "Booking and quick info" : "బుకింగ్ మరియు సత్వర సమాచారం"}
          >
            {/* Booking card */}
            <div className="akc-pkgd-book">
              <p className="akc-pkgd-book__label">
                {isEn ? "Ready to book?" : "బుక్ చేయడానికి సిద్ధంగా ఉన్నారా?"}
              </p>
              <div className="akc-pkgd-book__price-wrap">
                <p className="akc-pkgd-book__from">{isEn ? "Starting from" : "ప్రారంభ ధర"}</p>
                <p className="akc-pkgd-book__price">{formatPrice(pkg.startingPrice, isEn)}</p>
                <p className="akc-pkgd-book__price-note">
                  {isEn ? "driver & fuel included" : "డ్రైవర్ & ఇంధనం చేర్చబడింది"}
                </p>
                <p className="akc-pkgd-book__price-note">
                  {isEn ? "+ toll & parking extra" : "+ టోల్ & పార్కింగ్ అదనం"}
                </p>
              </div>
              <div className="akc-pkgd-book__ctas">
                <a
                  href={waBookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="akc-btn akc-btn--wa akc-btn--lg"
                  style={{ width: "100%", justifyContent: "center" }}
                  aria-label={isEn
                    ? `Book ${pkg.title} on WhatsApp`
                    : `WhatsApp లో ${pkg.title} బుక్ చేయండి`}
                >
                  <WaIcon size={18} />
                  {isEn ? "Enquire on WhatsApp" : "WhatsApp లో విచారించండి"}
                </a>
                <Link
                  href={`/${locale}/request-a-quote`}
                  className="akc-btn akc-btn--secondary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  {isEn ? "Request a Quote" : "కోటేషన్ అభ్యర్థించండి"}
                </Link>
                <a
                  href={BUSINESS.phone.primaryTel}
                  className="akc-btn akc-btn--ghost"
                  style={{ width: "100%", justifyContent: "center" }}
                  aria-label={isEn
                    ? `Call Akshaya Cabs at ${BUSINESS.phone.primaryDisplay}`
                    : `అక్షయ క్యాబ్స్‌కు కాల్ చేయండి`}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.93 19.79 19.79 0 01.01 .28 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  {isEn
                    ? `Call ${BUSINESS.phone.primaryDisplay}`
                    : BUSINESS.phone.primaryDisplay}
                </a>
              </div>
              <p className="akc-pkgd-book__info">
                {isEn
                  ? `Available ${BUSINESS.availability}`
                  : `${BUSINESS.availability} అందుబాటులో`}
              </p>
            </div>

            {/* Quick info */}
            <div className="akc-pkgd-qinfo" aria-labelledby="qinfo-heading">
              <h3 id="qinfo-heading" className="akc-pkgd-qinfo__title">
                {isEn ? "Quick Info" : "సత్వర సమాచారం"}
              </h3>
              <ul className="akc-pkgd-qinfo__list">
                <li className="akc-pkgd-qinfo__item">
                  <span className="akc-pkgd-qinfo__key">
                    {isEn ? "Package Code" : "కోడ్"}
                  </span>
                  <span className="akc-pkgd-qinfo__val akc-pkgd-qinfo__val--code">{pkg.code}</span>
                </li>
                {pkgDuration && (
                  <li className="akc-pkgd-qinfo__item">
                    <span className="akc-pkgd-qinfo__key">{isEn ? "Duration" : "వ్యవధి"}</span>
                    <span className="akc-pkgd-qinfo__val">{pkgDuration}</span>
                  </li>
                )}
                {pkg.distance?.allowanceKm && (
                  <li className="akc-pkgd-qinfo__item">
                    <span className="akc-pkgd-qinfo__key">
                      {isEn ? "KM Allowance" : "కి.మీ. అలవెన్స్"}
                    </span>
                    <span className="akc-pkgd-qinfo__val">{pkg.distance.allowanceKm}</span>
                  </li>
                )}
                <li className="akc-pkgd-qinfo__item">
                  <span className="akc-pkgd-qinfo__key">{isEn ? "Category" : "తరగతి"}</span>
                  <span className="akc-pkgd-qinfo__val">
                    {isEn
                      ? (CAT_LABEL_EN[pkg.category] ?? pkg.category)
                      : (CAT_LABEL_TE[pkg.category] ?? pkg.category)}
                  </span>
                </li>
                <li className="akc-pkgd-qinfo__item">
                  <span className="akc-pkgd-qinfo__key">{isEn ? "Temples" : "ఆలయాలు"}</span>
                  <span className="akc-pkgd-qinfo__val">
                    {pkg.temples.length} {isEn ? "stops" : "ఆగే ప్రదేశాలు"}
                  </span>
                </li>
                <li className="akc-pkgd-qinfo__item">
                  <span className="akc-pkgd-qinfo__key">{isEn ? "Vehicles" : "వాహనాలు"}</span>
                  <span className="akc-pkgd-qinfo__val">
                    {pkg.prices.length} {isEn ? "options" : "ఎంపికలు"}
                  </span>
                </li>
                <li className="akc-pkgd-qinfo__item">
                  <span className="akc-pkgd-qinfo__key">
                    {isEn ? "Starting Price" : "ప్రారంభ ధర"}
                  </span>
                  <span className="akc-pkgd-qinfo__val akc-pkgd-qinfo__val--price">
                    {formatPrice(pkg.startingPrice, isEn)}
                  </span>
                </li>
              </ul>
            </div>

            {/* Need Help */}
            <div
              className="akc-pkgd-qinfo akc-pkgd-qinfo--help"
              aria-labelledby="help-heading"
            >
              <h3 id="help-heading" className="akc-pkgd-qinfo__title">
                💬 {isEn ? "Need Help?" : "సహాయం కావాలా?"}
              </h3>
              <p className="akc-pkgd-help__text">
                {isEn
                  ? "Questions about darshan timings, vehicle selection, or route planning? Our team is available 24/7."
                  : "దర్శన్ సమయాలు, వాహన ఎంపిక, లేదా మార్గ ప్రణాళిక గురించి ప్రశ్నలు ఉన్నాయా? మా బృందం 24/7 అందుబాటులో ఉంటుంది."}
              </p>
              <a
                href={waHelpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="akc-btn akc-btn--wa"
                style={{ width: "100%", justifyContent: "center" }}
                aria-label={isEn
                  ? "Chat with Akshaya Cabs on WhatsApp"
                  : "WhatsApp లో అక్షయ క్యాబ్స్‌తో చాట్ చేయండి"}
              >
                <WaIcon />
                {isEn ? "Chat With Us" : "మాతో చాట్ చేయండి"}
              </a>
            </div>
          </aside>
        </div>
      </div>

      {/* ── 3. Related Packages ── */}
      {related.length > 0 && (
        <section className="akc-pkgd-related" aria-labelledby="related-heading">
          <div className="akc-container">
            <div
              className="akc-section-header akc-section-header--center"
              style={{ marginBottom: "2rem" }}
            >
              <p className="akc-section-label">
                {isEn ? "Other Packages" : "ఇతర ప్యాకేజీలు"}
              </p>
              <h2 id="related-heading" className="akc-section-title">
                {isEn ? "You Might Also Like" : "మీకు ఇవి కూడా నచ్చవచ్చు"}
              </h2>
            </div>

            <ul className="akc-pkgd-related__grid" role="list">
              {related.map((p) => {
                const relTitle = !isEn && p.titleTe ? p.titleTe : p.title;
                const relDesc = !isEn && p.descriptionTe ? p.descriptionTe : p.description;
                const relDuration = !isEn && p.durationTe ? p.durationTe : p.duration;

                const relWaUrl = primaryWhatsAppUrl(
                  isEn
                    ? `Hello Akshaya Cabs Tirupati! I am interested in the "${p.title}" (${p.code}) package. Please share availability and pricing. Thank you!`
                    : `నమస్కారం అక్షయ క్యాబ్స్! "${relTitle}" (${p.code}) ప్యాకేజీ గురించి తెలుసుకోవాలనుకుంటున్నాను. ధన్యవాదాలు!`
                );
                return (
                  <li key={p.id} className="akc-pkgd-rel-card">
                    <div className="akc-pkgd-rel-card__img-wrap">
                      <Image
                        src={p.image}
                        alt={`${relTitle} — Akshaya Cabs Tirupati`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="akc-pkgd-rel-card__img"
                        loading="lazy"
                      />
                      {relDuration && (
                        <span className="akc-pkgd-rel-card__dur">🕐 {relDuration}</span>
                      )}
                    </div>
                    <div className="akc-pkgd-rel-card__body">
                      <span className="akc-pkgd-rel-card__code">{p.code}</span>
                      <h3 className={`akc-pkgd-rel-card__title${locale === "te" ? " lang-te" : ""}`}>{relTitle}</h3>
                      <p className={`akc-pkgd-rel-card__desc${locale === "te" ? " lang-te" : ""}`}>{relDesc}</p>
                    </div>
                    <div className="akc-pkgd-rel-card__footer">
                      <div className="akc-pkgd-rel-card__price-block">
                        <span className="akc-pkgd-rel-card__from">
                          {isEn ? "From" : "నుండి"}
                        </span>
                        <span className="akc-pkgd-rel-card__price">
                          {formatPrice(p.startingPrice, isEn)}
                        </span>
                      </div>
                      <div className="akc-pkgd-rel-card__ctas">
                        <Link
                          href={`/${locale}/tour-packages/${p.slug}`}
                          className="akc-btn akc-btn--secondary akc-btn--sm"
                        >
                          {isEn ? "View" : "చూడండి"}
                        </Link>
                        <a
                          href={relWaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="akc-btn akc-btn--wa akc-btn--sm"
                          aria-label={isEn
                            ? `Enquire about ${p.title}`
                            : `${p.title} గురించి విచారించండి`}
                        >
                          <WaIcon />
                          {isEn ? "Enquire" : "విచారించండి"}
                        </a>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <Link
                href={`/${locale}/tour-packages`}
                className="akc-btn akc-btn--secondary akc-btn--lg"
              >
                {isEn
                  ? `View All ${PACKAGES.length} Packages`
                  : `అన్ని ${PACKAGES.length} ప్యాకేజీలు చూడండి`}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}