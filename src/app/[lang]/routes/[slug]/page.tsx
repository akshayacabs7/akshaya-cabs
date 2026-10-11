// Akshaya Cabs — Route Detail Landing Page (TASK-27)
// /[lang]/routes/[slug] — locale-aware, bilingual EN+TE
// Static site generation (SSG) with generateStaticParams.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CAB_ROUTES, getCabRouteBySlug } from "@/data/routes";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { primaryWhatsAppUrl } from "@/lib/whatsapp";
import { BUSINESS } from "@/data/business";
import type { Locale } from "@/i18n/config";
import { LOCALES } from "@/i18n/config";
import JsonLd from "@/components/seo/JsonLd";
import { buildRouteServiceSchema, buildFaqSchema } from "@/lib/schema";

// ── Static Params ──────────────────────────────────────────────────

export async function generateStaticParams() {
  const params: Array<{ lang: string; slug: string }> = [];

  for (const locale of LOCALES) {
    for (const route of CAB_ROUTES) {
      params.push({ lang: locale, slug: route.slug });
    }
  }

  return params;
}

// ── Metadata ──────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = (LOCALES.includes(lang as Locale) ? lang : "en") as Locale;
  const isTe = locale === "te";

  const route = getCabRouteBySlug(slug);
  if (!route) {
    return { title: "Route Not Found | Akshaya Cabs" };
  }

  const title = isTe ? route.metaTitleTe : route.metaTitle;
  const description = isTe ? route.metaDescriptionTe : route.metaDescription;

  return {
    title,
    description,
    alternates: {
      canonical: `https://akshayacabs.com/${locale}/routes/${route.slug}`,
      languages: {
        "en-IN": `https://akshayacabs.com/en/routes/${route.slug}`,
        "te-IN": `https://akshayacabs.com/te/routes/${route.slug}`,
        "x-default": `https://akshayacabs.com/en/routes/${route.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://akshayacabs.com/${locale}/routes/${route.slug}`,
      images: [{ url: route.image, width: 1200, height: 800, alt: title }],
    },
  };
}

export default async function RouteDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = (LOCALES.includes(lang as Locale) ? lang : "en") as Locale;
  const isEn = locale === "en";

  const route = getCabRouteBySlug(slug);
  if (!route) {
    notFound();
  }

  const title = isEn ? route.title : route.titleTe;
  const overview = isEn ? route.overview : route.overviewTe;
  const duration = isEn ? route.durationApprox : route.durationApproxTe;
  const highway = isEn ? route.highway : route.highwayTe;
  const priceNote = isEn ? route.priceNote : route.priceNoteTe;
  const features = isEn ? route.keyFeatures : route.keyFeaturesTe;
  const notes = isEn ? route.importantNotes : route.importantNotesTe;

  const waEnquiryUrl = primaryWhatsAppUrl(
    isEn
      ? `Hello Akshaya Cabs! I would like to book or enquire about the ${route.title} (${route.distanceKm} km). Please share the quote.`
      : `నమస్కారం అక్షయ క్యాబ్స్! ${route.titleTe} (${route.distanceKm} km) బుకింగ్ లేదా విచారణ కోసం వివరాలు మరియు ధర పంపగలరా? ధన్యవాదాలు!`
  );
  const routeUrl = `https://akshayacabs.com/${locale}/routes/${route.slug}`;
  const routeServiceSchema = buildRouteServiceSchema(route, locale, routeUrl);
  const routeFaqSchema =
    route.faqs && route.faqs.length > 0
      ? buildFaqSchema(
          route.faqs.map((faq) => ({
            question: isEn ? faq.q : faq.qTe,
            answer: isEn ? faq.a : faq.aTe,
          }))
        )
      : null;

  return (
    <main className="akc-route-detail-page">
      <JsonLd data={routeServiceSchema} />
      {routeFaqSchema && <JsonLd data={routeFaqSchema} />}
      {/* ── Breadcrumb ── */}
      <div className="akc-container akc-routes-breadcrumb-wrap">
        <Breadcrumb
          items={[
            {
              label: isEn ? "Cab Routes" : "క్యాబ్ మార్గాలు",
              href: `/${locale}/routes`,
            },
            { label: title },
          ]}
          locale={locale}
        />
      </div>

      {/* ── Route Hero ── */}
      <section className="akc-route-detail-hero">
        <div className="akc-container akc-route-detail-hero__grid">
          <div className="akc-route-detail-hero__content">
            <span className="akc-route-detail-hero__badge">
              {route.tripType === "ghat" && (isEn ? "Hill Ghat Road Service" : "కొండ ఘాట్ రోడ్ సర్వీస్")}
              {route.tripType === "airport" && (isEn ? "Airport Transfer" : "విమానాశ్రయ బదిలీ")}
              {route.tripType === "outstation" && (isEn ? "Intercity Highway Route" : "ఇంటర్‌సిటీ హైవే మార్గం")}
              {route.tripType === "local" && (isEn ? "Sacred Temple Circuit" : "పుణ్యక్షేత్రాల సర్క్యూట్")}
            </span>

            <h1 className={`akc-route-detail-hero__title${!isEn ? " lang-te" : ""}`}>
              {title}
            </h1>

            <p className={`akc-route-detail-hero__overview${!isEn ? " lang-te" : ""}`}>
              {overview}
            </p>

            {/* Quick Metrics */}
            <div className="akc-route-metrics">
              <div className="akc-route-metric">
                <span className="akc-route-metric__label">
                  {isEn ? "Distance" : "దూరం"}
                </span>
                <strong className="akc-route-metric__val">~{route.distanceKm} km</strong>
              </div>
              <div className="akc-route-metric">
                <span className="akc-route-metric__label">
                  {isEn ? "Travel Time" : "ప్రయాణ సమయం"}
                </span>
                <strong className="akc-route-metric__val">{duration}</strong>
              </div>
              <div className="akc-route-metric">
                <span className="akc-route-metric__label">
                  {isEn ? "Starting Fare" : "ప్రారంభ ధర"}
                </span>
                <strong className="akc-route-metric__val akc-route-metric__val--price">
                  ₹{route.startingPrice.toLocaleString("en-IN")}
                </strong>
              </div>
            </div>

            <p className="akc-route-detail-hero__price-note">
              ℹ {priceNote}
            </p>

            {/* CTAs */}
            <div className="akc-route-detail-hero__ctas">
              <a
                href={waEnquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="akc-btn akc-btn--whatsapp akc-btn--lg"
              >
                {isEn ? "Book via WhatsApp" : "వాట్సాప్‌లో బుక్ చేయండి"}
              </a>
              <a
                href={BUSINESS.phone.primaryTel}
                className="akc-btn akc-btn--secondary akc-btn--lg"
              >
                📞 {isEn ? `Call ${BUSINESS.phone.primaryDisplay}` : "కాల్ చేయండి"}
              </a>
            </div>
          </div>

          <div className="akc-route-detail-hero__image-wrap">
            <Image
              src={route.image}
              alt={title}
              fill
              priority
              sizes="(max-width: 992px) 100vw, 50vw"
              className="akc-route-detail-hero__img"
            />
            <div className="akc-route-detail-hero__img-tag">
              🛣 {highway}
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content Grid ── */}
      <section className="akc-section akc-route-detail-body">
        <div className="akc-container akc-route-detail-body__grid">
          {/* Left Column */}
          <div className="akc-route-detail-main">
            {/* Highlights */}
            <section className="akc-route-card-box">
              <h2 className="akc-route-box-title">
                {isEn ? "Why Choose Akshaya Cabs for This Route?" : "ఈ మార్గానికి అక్షయ క్యాబ్స్ ఎందుకు?"}
              </h2>
              <ul className="akc-route-highlights-list">
                {features.map((feat, idx) => (
                  <li key={idx} className="akc-route-highlight-item">
                    <span className="akc-route-highlight-check" aria-hidden="true">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Fleet Options */}
            <section className="akc-route-card-box">
              <h2 className="akc-route-box-title">
                {isEn ? "Recommended Fleet & Fare Estimates" : "సిఫారసు చేయబడిన వాహనాలు & రేట్లు"}
              </h2>
              <p className="akc-route-box-sub">
                {isEn
                  ? "All displayed vehicle fares include professional driver allowances and clean AC vehicles with Wi‑Fi. Tolls, state permits, and parking are payable at actuals."
                  : "అన్ని వాహన ఛార్జీలలో ప్రొఫెషనల్ డ్రైవర్ భత్యం మరియు Wi‑Fi సౌకర్యంతో కూడిన శుభ్రమైన AC వాహనాలు చేర్చబడ్డాయి. టోల్ గేట్లు, రాష్ట్ర పర్మిట్లు మరియు పార్కింగ్ అసలు ఖర్చు ప్రకారం ఉంటాయి."}
              </p>

              <div className="akc-route-fleet-grid">
                {route.fleetOptions.map((fleet, idx) => (
                  <div key={idx} className="akc-route-fleet-card">
                    <div className="akc-route-fleet-card__header">
                      <h3 className="akc-route-fleet-card__name">
                        {isEn ? fleet.name : fleet.nameTe}
                      </h3>
                      <div className="akc-route-fleet-card__meta">
                        <span className="akc-route-fleet-card__pax">
                          👥 {isEn ? fleet.capacity : fleet.capacityTe}
                        </span>
                        <span className="akc-route-fleet-card__wifi">
                          📶 {isEn ? "Wi‑Fi" : "వై-ఫై"}
                        </span>
                      </div>
                    </div>
                    <p className="akc-route-fleet-card__rate">
                      {isEn ? fleet.rateDescription : fleet.rateDescriptionTe}
                    </p>
                    <a
                      href={primaryWhatsAppUrl(
                        `Quote request for ${fleet.name} on ${route.title}`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="akc-route-fleet-card__cta"
                    >
                      {isEn ? "Select & Enquire →" : "ఎంపిక & విచారణ →"}
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Important Notes */}
            <section className="akc-route-card-box akc-route-card-box--notice">
              <h2 className="akc-route-box-title">
                ⚠️ {isEn ? "Important Travel & Route Advisories" : "ముఖ్యమైన ప్రయాణ సూచనలు"}
              </h2>
              <ul className="akc-route-notes-list">
                {notes.map((note, idx) => (
                  <li key={idx} className="akc-route-note-item">
                    {note}
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQs */}
            {route.faqs && route.faqs.length > 0 && (
              <section className="akc-route-card-box">
                <h2 className="akc-route-box-title">
                  {isEn ? "Frequently Asked Questions" : "తరచుగా అడిగే ప్రశ్నలు"}
                </h2>
                <div className="akc-route-faq-list">
                  {route.faqs.map((faq, idx) => (
                    <div key={idx} className="akc-route-faq-item">
                      <h3 className="akc-route-faq-q">
                        Q: {isEn ? faq.q : faq.qTe}
                      </h3>
                      <p className="akc-route-faq-a">
                        {isEn ? faq.a : faq.aTe}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column / Sticky Sidebar */}
          <aside className="akc-route-detail-sidebar">
            <div className="akc-route-sidebar-card">
              <h3 className="akc-route-sidebar-title">
                {isEn ? "Instant Fare Confirmation" : "తక్షణ ధర నిర్ధారణ"}
              </h3>
              <p className="akc-route-sidebar-desc">
                {isEn
                  ? "Share your travel date, pickup time, and passenger count for an immediate guaranteed fare."
                  : "మీ ప్రయాణ తేదీ, పికప్ సమయం మరియు ప్రయాణికుల సంఖ్యను తెలపడం ద్వారా స్పష్టమైన ధరను పొందండి."}
              </p>

              <div className="akc-route-sidebar-phones">
                <a
                  href={waEnquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="akc-btn akc-btn--whatsapp akc-btn--full"
                >
                  💬 {isEn ? "WhatsApp Booking" : "వాట్సాప్ బుకింగ్"}
                </a>
                <a
                  href={BUSINESS.phone.primaryTel}
                  className="akc-btn akc-btn--primary akc-btn--full"
                >
                  📞 {BUSINESS.phone.primaryDisplay}
                </a>
                <a
                  href={BUSINESS.phone.secondaryTel}
                  className="akc-btn akc-btn--ghost akc-btn--full"
                >
                  📞 {BUSINESS.phone.secondaryDisplay}
                </a>
              </div>

              <div className="akc-route-sidebar-trust">
                <p>📍 {isEn ? "Local Tirupati Operator" : "స్థానిక తిరుపతి ఆపరేటర్"}</p>
                <p>⏰ {isEn ? "Available 24 Hours, 7 Days" : "24 గంటలు అందుబాటులో"}</p>
                <p>🛡 {isEn ? "Verified Experienced Drivers" : "అనుభవజ్ఞులైన డ్రైవర్లు"}</p>
              </div>
            </div>

            {/* Related Connections */}
            <div className="akc-route-sidebar-links-card">
              <h4 className="akc-route-sidebar-links-title">
                {isEn ? "Related Information" : "సంబంధిత సమాచారం"}
              </h4>
              <ul className="akc-route-sidebar-links">
                {route.relatedPackageSlug && (
                  <li>
                    <Link
                      href={`/${locale}/tour-packages/${route.relatedPackageSlug}`}
                      className="akc-route-sidebar-link"
                    >
                      🎯 {isEn ? "View Complete Tour Package →" : "పూర్తి టూర్ ప్యాకేజీ చూడండి →"}
                    </Link>
                  </li>
                )}
                {route.relatedBlogSlug && (
                  <li>
                    <Link
                      href={`/${locale}/blog/${route.relatedBlogSlug}`}
                      className="akc-route-sidebar-link"
                    >
                      📖 {isEn ? "Read In-Depth Travel Guide →" : "వివరణాత్మక ట్రావెల్ గైడ్ చదవండి →"}
                    </Link>
                  </li>
                )}
                <li>
                  <Link
                    href={`/${locale}/routes`}
                    className="akc-route-sidebar-link"
                  >
                    🗺 {isEn ? "All Popular Cab Routes →" : "అన్ని క్యాబ్ మార్గాలు →"}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/fleet`}
                    className="akc-route-sidebar-link"
                  >
                    🚗 {isEn ? "Explore Fleet & Vehicle Options →" : "వాహనాల వివరాలు చూడండి →"}
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
