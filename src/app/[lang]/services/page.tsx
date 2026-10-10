// Akshaya Cabs — Services Page (TASK-16)
// /[lang]/services — locale-aware, bilingual EN+TE
// Server Component. No SVTT identity. No .svtt-* class names.
//
// Sections:
//  1. Page hero (navy gradient + stats)
//  2. Trust strip
//  3. All 9 service cards (alternating image-left / image-right layout)
//  4. Bottom CTA strip

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import { VEHICLES } from "@/data/vehicles";
import { serviceWhatsAppUrl, primaryWhatsAppUrl } from "@/lib/whatsapp";
import { BUSINESS } from "@/data/business";
import type { Locale } from "@/i18n/config";
import { LOCALES } from "@/i18n/config";

// ── Metadata ──────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = (LOCALES.includes(lang as Locale) ? lang : "en") as Locale;
  const isTe = locale === "te";

  const title = isTe
    ? "క్యాబ్ సేవలు | అక్షయ క్యాబ్స్ — తిరుపతి క్యాబ్ సేవలు"
    : "Cab Services | Akshaya Cabs — Tirupati Cab & Tour Services";

  const description = isTe
    ? "తిరుపతి నుండి 9 నమ్మకమైన క్యాబ్ & టూర్ సేవలు — స్థానిక క్యాబ్లు, తిరుమల టాక్సీ, ఆలయ టూర్ ప్యాకేజీలు, అవుట్‌స్టేషన్, విమానాశ్రయ బదిలీలు, రైల్వే స్టేషన్, టెంపో ట్రావెలర్, కస్టమైజ్డ్ టూర్లు & దక్షిణ భారత యాత్ర. 24/7 అందుబాటులో."
    : "9 trusted cab & tour services from Tirupati — Local cabs, Tirumala taxi, temple tour packages, outstation, airport transfers, railway station, Tempo Traveller, customized tours & South India pilgrimage. Available 24/7.";

  return {
    title,
    description,
    alternates: {
      canonical: `https://akshayacabs.com/${locale}/services`,
      languages: {
        "en-IN": "https://akshayacabs.com/en/services",
        "te-IN": "https://akshayacabs.com/te/services",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://akshayacabs.com/${locale}/services`,
      images: [{ url: "/images/akshaya/brand/og-cover.webp", width: 1200, height: 630 }],
    },
  };
}

// ── Icon map ──────────────────────────────────────────────────────

const ICON_MAP: Record<string, string> = {
  MapPin:     "📍",
  Mountain:   "⛰️",
  Landmark:   "🛕",
  Navigation: "🚗",
  Plane:      "✈️",
  Train:      "🚆",
  Bus:        "🚌",
  Route:      "🗺️",
  Compass:    "🧭",
};

// Vehicle lookup (Weganor already excluded in data)
const VEHICLE_NAME_MAP: Record<string, string> = Object.fromEntries(
  VEHICLES.map((v) => [v.id, v.name])
);

// ── Bilingual content ──────────────────────────────────────────────

const T = {
  heroLabel:      { en: "🚗 Cab & Tour Services", te: "🚗 క్యాబ్ & టూర్ సేవలు" },
  heroH1a:        { en: "Every Journey, Every Need —", te: "ప్రతి ప్రయాణం, ప్రతి అవసరం —" },
  heroH1b:        { en: "We've Got You Covered", te: "మేము సిద్ధంగా ఉన్నాం" },
  heroDesc:       {
    en: "From your doorstep to Tirumala, from local temple visits to multi-state South India pilgrimages — Akshaya Cabs offers 9 trusted cab & tour services from Tirupati, available 24 hours a day, 7 days a week.",
    te: "మీ ఇంటి ముంగిట నుండి తిరుమలకు, స్థానిక ఆలయ సందర్శనల నుండి బహు-రాష్ట్ర దక్షిణ భారత యాత్రల వరకు — అక్షయ క్యాబ్స్ తిరుపతి నుండి 9 నమ్మకమైన క్యాబ్ & టూర్ సేవలు అందిస్తుంది, రోజూ 24 గంటలు, వారానికి 7 రోజులు.",
  },
  stats: {
    en: [
      { val: "9",    label: "Services" },
      { val: "7",    label: "Vehicles" },
      { val: "10",   label: "Tour Packages" },
      { val: "24/7", label: "Availability" },
    ],
    te: [
      { val: "9",    label: "సేవలు" },
      { val: "7",    label: "వాహనాలు" },
      { val: "10",   label: "టూర్ ప్యాకేజీలు" },
      { val: "24/7", label: "అందుబాటు" },
    ],
  },
  trustItems: {
    en: [
      { icon: "🕐", text: "24/7 Availability" },
      { icon: "🚗", text: "7 Vehicle Options" },
      { icon: "🛕", text: "10 Temple Tour Packages" },
      { icon: "📞", text: "Instant WhatsApp Response" },
      { icon: "✅", text: "Experienced Local Drivers" },
      { icon: "💰", text: "Transparent Pricing" },
    ],
    te: [
      { icon: "🕐", text: "24/7 అందుబాటు" },
      { icon: "🚗", text: "7 వాహన ఎంపికలు" },
      { icon: "🛕", text: "10 ఆలయ టూర్ ప్యాకేజీలు" },
      { icon: "📞", text: "WhatsApp తక్షణ స్పందన" },
      { icon: "✅", text: "అనుభవజ్ఞులైన స్థానిక డ్రైవర్లు" },
      { icon: "💰", text: "పారదర్శక ధరలు" },
    ],
  },
  sectionLabel:   { en: "What We Offer", te: "మేము అందించేవి" },
  sectionTitle:   { en: "Our Complete Service Range", te: "మా సంపూర్ణ సేవా శ్రేణి" },
  sectionSub:     {
    en: "Each service is designed around the needs of Tirupati's pilgrims, tourists and local residents — with transparent pricing and professional drivers.",
    te: "ప్రతి సేవా తిరుపతి యాత్రికులు, పర్యాటకులు మరియు స్థానిక నివాసుల అవసరాల చుట్టూ రూపొందించబడింది — పారదర్శక ధరలు మరియు వృత్తిపర డ్రైవర్లతో.",
  },
  serviceLabel:   { en: "Service", te: "సేవ" },
  suitableVeh:    { en: "Suitable Vehicles", te: "అనుకూల వాహనాలు" },
  getQuote:       { en: "Get a Quote", te: "కోటేషన్ పొందండి" },
  viewPackages:   { en: "View All Packages", te: "అన్ని ప్యాకేజీలు చూడండి" },
  ctaHeading:     { en: "Ready to Travel with Akshaya Cabs?", te: "అక్షయ క్యాబ్స్‌తో ప్రయాణించడానికి సిద్ధంగా ఉన్నారా?" },
  ctaSub:         {
    en: `Book instantly on WhatsApp or call us directly. Available ${BUSINESS.availability} for all your travel needs.`,
    te: `WhatsApp లో వెంటనే బుక్ చేయండి లేదా నేరుగా కాల్ చేయండి. ${BUSINESS.availability} అందుబాటులో ఉన్నాం.`,
  },
  bookWa:         { en: "Book on WhatsApp", te: "WhatsApp లో బుక్ చేయండి" },
  callUs:         { en: "Call Us", te: "కాల్ చేయండి" },
  requestQuote:   { en: "Request a Quote", te: "కోటేషన్ అభ్యర్థించండి" },
};

const WA_SVG = (size = 16) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const ARROW_SVG = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

// ── Page ──────────────────────────────────────────────────────────

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (LOCALES.includes(lang as Locale) ? lang : "en") as Locale;
  const isEn = locale === "en";
  const L = <K extends keyof typeof T>(key: K) =>
    isEn ? (T[key] as { en: string; te: string }).en : (T[key] as { en: string; te: string }).te;

  const generalWaUrl = primaryWhatsAppUrl(
    isEn
      ? "Hello Akshaya Cabs Tirupati! I would like to enquire about your cab and tour services. Could you please share availability and pricing? Thank you!"
      : "నమస్కారం అక్షయ క్యాబ్స్ తిరుపతి! మీ క్యాబ్ & టూర్ సేవల గురించి విచారించాలనుకుంటున్నాను. అందుబాటు మరియు ధరలు పంచగలరా? ధన్యవాదాలు!"
  );

  const stats = isEn ? T.stats.en : T.stats.te;
  const trustItems = isEn ? T.trustItems.en : T.trustItems.te;

  return (
    <>
      {/* ── 1. Page Hero ── */}
      <header className="akc-svcpage-hero" role="banner">
        <div className="akc-container akc-svcpage-hero__content">
          <p className="akc-svcpage-hero__label">{L("heroLabel")}</p>
          <h1 className={`akc-svcpage-hero__h1${locale === "te" ? " lang-te" : ""}`}>
            {L("heroH1a")}<br />
            <span className="akc-svcpage-hero__h1-accent">{L("heroH1b")}</span>
          </h1>
          <p className={`akc-svcpage-hero__desc${locale === "te" ? " lang-te" : ""}`}>
            {L("heroDesc")}
          </p>
          <div className="akc-svcpage-hero__stats" aria-label={isEn ? "Service highlights" : "సేవా ముఖ్యాంశాలు"}>
            {stats.map((s) => (
              <div key={s.label} className="akc-svcpage-hero__stat">
                <span className="akc-svcpage-hero__stat-val">{s.val}</span>
                <span className="akc-svcpage-hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── 2. Trust strip ── */}
      <div className="akc-svcpage-trust" aria-label={isEn ? "Why choose Akshaya Cabs" : "అక్షయ క్యాబ్స్ ఎందుకు ఎంచుకోవాలి"}>
        <div className="akc-container">
          <ul className="akc-svcpage-trust__grid" role="list">
            {trustItems.map((item) => (
              <li key={item.text} className="akc-svcpage-trust__item" role="listitem">
                <span className="akc-svcpage-trust__icon" aria-hidden="true">{item.icon}</span>
                <span className={locale === "te" ? "lang-te" : ""}>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── 3. Service cards ── */}
      <section className="akc-svc-list" aria-labelledby="services-list-heading">
        <div className="akc-container">
          <div className="akc-section-header akc-section-header--center" style={{ marginBottom: "2.5rem" }}>
            <p className="akc-section-label">{L("sectionLabel")}</p>
            <h2 id="services-list-heading" className="akc-section-title">{L("sectionTitle")}</h2>
            <p className={`akc-section-subtitle${locale === "te" ? " lang-te" : ""}`}>{L("sectionSub")}</p>
          </div>

          <ul className="akc-svc-list__grid" role="list">
            {SERVICES.map((svc, idx) => {
              const emoji = ICON_MAP[svc.icon] ?? "🚕";
              const isEven = idx % 2 === 0;
              const waUrl = serviceWhatsAppUrl({ service: svc.title });

              // Determine second CTA — temple-tours links to packages page
              const secondCta =
                svc.id === "temple-tours" ? (
                  <Link href={`/${locale}/tour-packages`} className="akc-btn akc-btn--secondary">
                    {L("viewPackages")} {ARROW_SVG}
                  </Link>
                ) : (
                  <Link href={`/${locale}/request-a-quote`} className="akc-btn akc-btn--secondary">
                    {L("getQuote")} {ARROW_SVG}
                  </Link>
                );

              return (
                <li
                  key={svc.id}
                  id={svc.slug}
                  className={`akc-svc-card${isEven ? "" : " akc-svc-card--reverse"}`}
                  aria-label={svc.title}
                >
                  {/* Image column */}
                  <div className="akc-svc-card__img-wrap">
                    {svc.image && (
                    <Image
                      src={svc.image}
                      alt={`${svc.title} — Akshaya Cabs Tirupati`}
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="akc-svc-card__img"
                      loading={idx < 2 ? "eager" : "lazy"}
                    />
                    )}
                    <div className="akc-svc-card__img-overlay" aria-hidden="true" />
                    <div className="akc-svc-card__icon-badge" aria-hidden="true">{emoji}</div>
                    {/* Service number overlay */}
                    <div className="akc-svc-card__num-overlay" aria-hidden="true">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Body column */}
                  <div className="akc-svc-card__body">
                    <span className="akc-svc-card__number">
                      {L("serviceLabel")} {String(idx + 1).padStart(2, "0")}
                    </span>

                    <h2 className={`akc-svc-card__title${locale === "te" ? " lang-te" : ""}`}>
                      {svc.title}
                    </h2>
                    <p className={`akc-svc-card__desc${locale === "te" ? " lang-te" : ""}`}>
                      {svc.description}
                    </p>

                    {/* Features */}
                    {svc.features && svc.features.length > 0 && (
                      <ul className="akc-svc-card__features" aria-label={`Features of ${svc.title}`}>
                        {svc.features.map((feat) => (
                          <li key={feat} className="akc-svc-card__feature">
                            <span className="akc-svc-card__feature-dot" aria-hidden="true" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Vehicles */}
                    {svc.vehicles && svc.vehicles.length > 0 && (
                      <div>
                        <p className={`akc-svc-card__vehicles-label${locale === "te" ? " lang-te" : ""}`}>
                          {L("suitableVeh")}
                        </p>
                        <div
                          className="akc-svc-card__vehicles"
                          role="list"
                          aria-label={`Vehicles for ${svc.title}`}
                        >
                          {svc.vehicles.map((vid) => (
                            <span key={vid} className="akc-svc-card__vehicle-chip" role="listitem">
                              🚗 {VEHICLE_NAME_MAP[vid] ?? vid}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTAs */}
                    <div className="akc-svc-card__ctas">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="akc-btn akc-btn--wa"
                        aria-label={`${isEn ? "Book" : "బుక్ చేయండి"} ${svc.title} on WhatsApp`}
                      >
                        {WA_SVG()}
                        {svc.cta ?? (isEn ? "Book Now" : "ఇప్పుడే బుక్ చేయండి")}
                      </a>
                      {secondCta}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── 4. Bottom CTA strip ── */}
      <section className="akc-svcpage-cta" aria-labelledby="svc-cta-heading">
        <div className="akc-container">
          <h2
            id="svc-cta-heading"
            className={`akc-svcpage-cta__heading${locale === "te" ? " lang-te" : ""}`}
          >
            {L("ctaHeading")}
          </h2>
          <p className={`akc-svcpage-cta__sub${locale === "te" ? " lang-te" : ""}`}>
            {L("ctaSub")}
          </p>
          <div className="akc-svcpage-cta__btns">
            <a
              href={generalWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="akc-btn akc-btn--wa akc-btn--lg"
              aria-label={isEn ? "Book a cab or tour on WhatsApp" : "WhatsApp లో క్యాబ్ లేదా టూర్ బుక్ చేయండి"}
            >
              {WA_SVG(20)}
              {L("bookWa")}
            </a>
            <a
              href={BUSINESS.phone.primaryTel}
              className="akc-btn akc-btn--ghost akc-btn--lg"
              aria-label={isEn
                ? `Call Akshaya Cabs at ${BUSINESS.phone.primaryDisplay}`
                : `అక్షయ క్యాబ్స్‌కు కాల్ చేయండి`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.93 19.79 19.79 0 01.01 .28 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              {isEn ? `Call ${BUSINESS.phone.primaryDisplay}` : BUSINESS.phone.primaryDisplay}
            </a>
            <Link
              href={`/${locale}/request-a-quote`}
              className="akc-btn akc-btn--secondary akc-btn--lg"
            >
              {L("requestQuote")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
