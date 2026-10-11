// Akshaya Cabs — Popular Cab Routes Directory Page (TASK-27)
// /[lang]/routes — locale-aware, bilingual EN+TE
// Server Component. High-intent SEO landing directory.

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CAB_ROUTES } from "@/data/routes";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { primaryWhatsAppUrl } from "@/lib/whatsapp";
import { BUSINESS } from "@/data/business";
import type { Locale } from "@/i18n/config";
import { LOCALES } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = (LOCALES.includes(lang as Locale) ? lang : "en") as Locale;
  const isTe = locale === "te";

  const title = isTe
    ? "ప్రసిద్ధ క్యాబ్ మార్గాలు & స్థానిక ప్రయాణాలు | అక్షయ క్యాబ్స్ తిరుపతి"
    : "Popular Cab Routes & Taxi Rates | Akshaya Cabs Tirupati";

  const description = isTe
    ? "తిరుమల, విమానాశ్రయం, చెన్నై, బెంగళూరు, శ్రీకాళహస్తి, కాణిపాకం మరియు వెల్లూరు మార్గాలకు 24/7 నమ్మకమైన క్యాబ్ సేవలు. స్పష్టమైన ధరలు & డ్రైవర్ భత్యం చేర్చబడింది."
    : "24/7 reliable cab services for Tirumala, Tirupati Airport, Chennai, Bangalore, Srikalahasti, Kanipakam & Vellore. Transparent fares with driver allowance included.";

  return {
    title,
    description,
    alternates: {
      canonical: `https://akshayacabs.com/${locale}/routes`,
      languages: {
        "en-IN": "https://akshayacabs.com/en/routes",
        "te-IN": "https://akshayacabs.com/te/routes",
        "x-default": "https://akshayacabs.com/en/routes",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://akshayacabs.com/${locale}/routes`,
      images: [{ url: "/images/akshaya/brand/og-cover.webp", width: 1200, height: 630 }],
    },
  };
}

export default async function RoutesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (LOCALES.includes(lang as Locale) ? lang : "en") as Locale;
  const isEn = locale === "en";

  return (
    <main className="akc-routes-page">
      {/* ── Breadcrumb ── */}
      <div className="akc-container akc-routes-breadcrumb-wrap">
        <Breadcrumb
          items={[{ label: isEn ? "Cab Routes" : "క్యాబ్ మార్గాలు" }]}
          locale={locale}
        />
      </div>

      {/* ── Hero ── */}
      <section className="akc-routes-hero">
        <div className="akc-container">
          <p className="akc-routes-hero__eyebrow">
            {isEn ? "Verified Routes & Transparent Rates" : "ధృవీకరించబడిన మార్గాలు & స్పష్టమైన ధరలు"}
          </p>
          <h1 className="akc-routes-hero__title">
            {isEn
              ? "Popular Cab Routes from Tirupati"
              : "తిరుపతి నుండి ప్రసిద్ధ క్యాబ్ మార్గాలు"}
          </h1>
          <p className="akc-routes-hero__subtitle">
            {isEn
              ? "Dedicated taxis for Tirumala ghat road, Tirupati Airport (TIR), intercity travel to Chennai & Bengaluru, and sacred temple circuits across Andhra Pradesh and Tamil Nadu."
              : "తిరుమల ఘాట్ రోడ్, తిరుపతి ఎయిర్‌పోర్ట్ (TIR), చెన్నై & బెంగళూరు ఇంటర్‌సిటీ ప్రయాణాలు మరియు ఆంధ్రప్రదేశ్, తమిళనాడు దేవాలయాల యాత్రకు ప్రత్యేక క్యాబ్‌లు."}
          </p>

          <div className="akc-routes-hero__trust-strip">
            <span className="akc-routes-trust-badge">
              ✓ {isEn ? "Driver Allowance Included" : "డ్రైవర్ భత్యం చేర్చబడింది"}
            </span>
            <span className="akc-routes-trust-badge">
              ✓ {isEn ? "24/7 Available" : "24/7 అందుబాటులో"}
            </span>
            <span className="akc-routes-trust-badge">
              ✓ {isEn ? "Clean AC Fleet" : "పరిశుభ్రమైన ఏసీ వాహనాలు"}
            </span>
            <span className="akc-routes-trust-badge">
              ✓ {isEn ? "Zero Spot Surge" : "ఎలాంటి సర్జ్ ఛార్జీలు లేవు"}
            </span>
          </div>
        </div>
      </section>

      {/* ── Routes Grid ── */}
      <section className="akc-section akc-routes-list-section">
        <div className="akc-container">
          <div className="akc-routes-grid">
            {CAB_ROUTES.map((route) => {
              const waUrl = primaryWhatsAppUrl(
                isEn
                  ? `Hello Akshaya Cabs, I would like to enquire about the ${route.title} (${route.distanceKm} km).`
                  : `నమస్కారం అక్షయ క్యాబ్స్, ${route.titleTe} (${route.distanceKm} km) గురించి విచారించాలనుకుంటున్నాను.`
              );

              return (
                <article key={route.id} className="akc-route-card">
                  <div className="akc-route-card__img-wrap">
                    <Image
                      src={route.image}
                      alt={isEn ? route.title : route.titleTe}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="akc-route-card__img"
                    />
                    <span className="akc-route-card__type-pill">
                      {route.tripType === "ghat" && (isEn ? "Ghat Road" : "ఘాట్ రోడ్")}
                      {route.tripType === "airport" && (isEn ? "Airport Transfer" : "ఎయిర్‌పోర్ట్ బదిలీ")}
                      {route.tripType === "outstation" && (isEn ? "Intercity / Outstation" : "ఇంటర్‌సిటీ / అవుట్‌స్టేషన్")}
                      {route.tripType === "local" && (isEn ? "Temple Circuit" : "ఆలయ యాత్ర")}
                    </span>
                  </div>

                  <div className="akc-route-card__body">
                    <div className="akc-route-card__stats">
                      <span className="akc-route-card__stat">
                        📍 {route.distanceKm} km
                      </span>
                      <span className="akc-route-card__stat">
                        ⏱ {isEn ? route.durationApprox : route.durationApproxTe}
                      </span>
                    </div>

                    <h2 className={`akc-route-card__title${!isEn ? " lang-te" : ""}`}>
                      <Link href={`/${locale}/routes/${route.slug}`}>
                        {isEn ? route.title : route.titleTe}
                      </Link>
                    </h2>

                    <p className="akc-route-card__highway">
                      🛣 {isEn ? route.highway : route.highwayTe}
                    </p>

                    <p className={`akc-route-card__desc${!isEn ? " lang-te" : ""}`}>
                      {isEn ? route.overview : route.overviewTe}
                    </p>

                    <div className="akc-route-card__price-box">
                      <span className="akc-route-card__price-label">
                        {isEn ? "Starting from" : "ప్రారంభ ధర"}
                      </span>
                      <span className="akc-route-card__price-val">
                        ₹{route.startingPrice.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <div className="akc-route-card__actions">
                      <Link
                        href={`/${locale}/routes/${route.slug}`}
                        className="akc-btn akc-btn--primary akc-route-card__btn-view"
                      >
                        {isEn ? "View Route Details →" : "వివరాలు చూడండి →"}
                      </Link>
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="akc-btn akc-btn--whatsapp akc-route-card__btn-wa"
                        aria-label={`WhatsApp enquiry for ${route.title}`}
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="akc-routes-cta-strip">
        <div className="akc-container akc-routes-cta-content">
          <div>
            <h2 className="akc-routes-cta-title">
              {isEn
                ? "Need a Custom Route or Long-Distance Package?"
                : "కస్టమ్ మార్గం లేదా సుదూర ప్రయాణ ప్యాకేజీ కావాలా?"}
            </h2>
            <p className="akc-routes-cta-desc">
              {isEn
                ? "We customize one-way drops, multi-day pilgrimage circuits, and outstation taxi hire across South India."
                : "దక్షిణ భారతదేశమంతటా వన్-వే డ్రాప్‌లు, బహుళ-రోజుల తీర్థయాత్రలు మరియు అవుట్‌స్టేషన్ క్యాబ్ సేవలను మీ అవసరాలకు తగినట్లు రూపొందిస్తాము."}
            </p>
          </div>
          <div className="akc-routes-cta-actions">
            <a
              href={primaryWhatsAppUrl("Hello Akshaya Cabs! I would like to request an instant quote for a cab route.")}
              target="_blank"
              rel="noopener noreferrer"
              className="akc-btn akc-btn--whatsapp"
            >
              {isEn ? "WhatsApp Instant Quote" : "వాట్సాప్ ఇన్‌స్టంట్ కోటేషన్"}
            </a>
            <a
              href={BUSINESS.phone.primaryTel}
              className="akc-btn akc-btn--ghost-white"
            >
              📞 {BUSINESS.phone.primaryDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
