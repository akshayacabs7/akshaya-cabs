// Akshaya Cabs — Request a Quote / Trip Planner Page (TASK-18)
// /[lang]/request-a-quote — locale-aware, bilingual EN+TE
// Server Component. No SVTT identity. No .svtt-* class names.
//
// Sections:
//  1. Page hero (compact, bilingual)
//  2. Body: TripPlannerForm (left) + Sidebar (right)
//     Sidebar: Why request a quote, Quick Contact, 24/7 badge, quick links

import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/data/business";
import { primaryWhatsAppUrl, secondaryWhatsAppUrl } from "@/lib/whatsapp";
import TripPlannerForm from "@/components/ui/TripPlannerForm";
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
    ? "ట్రిప్ ప్లాన్ చేయండి & కోటేషన్ పొందండి | అక్షయ క్యాబ్స్ తిరుపతి"
    : "Plan Your Trip & Request a Quote | Akshaya Cabs Tirupati";

  const description = isTe
    ? "అక్షయ క్యాబ్స్ తిరుపతి నుండి క్యాబ్ లేదా టూర్ కోటేషన్ అభ్యర్థించండి. మీ ప్రయాణ వివరాలు నమోదు చేయండి — విమానాశ్రయ బదిలీ, తిరుమల దర్శన్, అవుట్‌స్టేషన్ క్యాబ్, లేదా ఏ దక్షిణ భారత టూర్. మేము WhatsApp ద్వారా స్పందిస్తాం."
    : "Request a cab or tour quote from Akshaya Cabs Tirupati. Fill in your trip details — airport transfer, Tirumala darshan, outstation cab, or any South India tour. We will respond via WhatsApp.";

  return {
    title,
    description,
    alternates: {
      canonical: `https://akshayacabs.com/${locale}/request-a-quote`,
      languages: {
        "en-IN": "https://akshayacabs.com/en/request-a-quote",
        "te-IN": "https://akshayacabs.com/te/request-a-quote",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://akshayacabs.com/${locale}/request-a-quote`,
      images: [{ url: "/images/akshaya/brand/og-cover.webp", width: 1200, height: 630 }],
    },
  };
}

// ── Page ──────────────────────────────────────────────────────────

export default async function RequestAQuotePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (LOCALES.includes(lang as Locale) ? lang : "en") as Locale;
  const isEn = locale === "en";

  const primaryWaUrl   = primaryWhatsAppUrl();
  const secondaryWaUrl = secondaryWhatsAppUrl();

  const whyItems = isEn ? [
    { icon: "💸", text: "We share transparent pricing — no hidden charges or surprises after booking." },
    { icon: "🚗", text: "Your quote will include the best-fit vehicle from our fleet for your group size." },
    { icon: "📅", text: "Confirm vehicle availability for your exact date before you commit." },
    { icon: "🛕", text: "For temple trips, tell us your destinations and we'll plan the best route." },
    { icon: "💬", text: "Your details open directly in WhatsApp — fast, no waiting for email replies." },
  ] : [
    { icon: "💸", text: "మేము పారదర్శక ధరలు పంచుతాం — బుకింగ్ తర్వాత దాచిన చార్జీలు లేదా ఆశ్చర్యాలు ఉండవు." },
    { icon: "🚗", text: "మీ కోటేషన్‌లో మీ గ్రూప్ సైజ్‌కు అనుకూలమైన మా ఫ్లీట్ నుండి అత్యుత్తమ వాహనం చేర్చబడుతుంది." },
    { icon: "📅", text: "మీరు నిర్ధారించే ముందు మీ ఖచ్చితమైన తేదీకి వాహన లభ్యత ధృవీకరించండి." },
    { icon: "🛕", text: "ఆలయ ప్రయాణాలకు, మీ గమ్యాలు చెప్పండి, మేము అత్యుత్తమ మార్గాన్ని ప్లాన్ చేస్తాం." },
    { icon: "💬", text: "మీ వివరాలు నేరుగా WhatsApp లో తెరవబడతాయి — వేగంగా, ఇమెయిల్ జవాబుల కోసం వేచి ఉండకుండా." },
  ];

  return (
    <>
      {/* ── 1. Page Hero ── */}
      <header className="akc-quote-hero" role="banner">
        <div className="akc-container akc-quote-hero__content">
          <p className="akc-quote-hero__label">
            {isEn ? "💸 Get a Quote" : "💸 కోటేషన్ పొందండి"}
          </p>
          <h1 className={`akc-quote-hero__h1${locale === "te" ? " lang-te" : ""}`}>
            {isEn ? (
              <>Plan Your Trip —<br /><span className="akc-quote-hero__h1-accent">Request a Personalised Quote</span></>
            ) : (
              <>మీ ప్రయాణం ప్లాన్ చేయండి —<br /><span className="akc-quote-hero__h1-accent">వ్యక్తిగత కోటేషన్ అభ్యర్థించండి</span></>
            )}
          </h1>
          <p className={`akc-quote-hero__desc${locale === "te" ? " lang-te" : ""}`}>
            {isEn
              ? "Use our guided trip planner to share your journey details. We'll reply via WhatsApp with transparent pricing and availability — no hidden charges."
              : "మీ ప్రయాణ వివరాలు పంచుకోవడానికి మా గైడెడ్ ట్రిప్ ప్లానర్ వాడండి. మేము పారదర్శక ధరలు మరియు లభ్యతతో WhatsApp ద్వారా సమాధానిస్తాం."}
          </p>
        </div>
      </header>

      {/* ── 2. Body: Form + Sidebar ── */}
      <section className="akc-quote-body" aria-labelledby="quote-form-heading">
        <div className="akc-container">
          <div className="akc-quote-grid">

            {/* ── Left: Trip Planner Form ── */}
            <div className="akc-quote-form-card">
              <h2
                id="quote-form-heading"
                className={`akc-quote-form-card__title${locale === "te" ? " lang-te" : ""}`}
              >
                {isEn ? "Your Trip Planner" : "మీ ట్రిప్ ప్లానర్"}
              </h2>
              <p className={`akc-quote-form-card__sub${locale === "te" ? " lang-te" : ""}`}>
                {isEn
                  ? "Complete each step to build your trip request. We'll confirm pricing and availability by WhatsApp."
                  : "మీ ట్రిప్ అభ్యర్థన నిర్మించడానికి ప్రతి దశను పూర్తి చేయండి. మేము WhatsApp ద్వారా ధర మరియు లభ్యత నిర్ధారిస్తాం."}
              </p>
              <TripPlannerForm locale={locale} />
            </div>

            {/* ── Right: Sidebar ── */}
            <aside aria-label={isEn ? "Why request a quote and quick contact" : "కోటేషన్ ఎందుకు అభ్యర్థించాలి మరియు సత్వర సంప్రదింపు"}>
              <div className="akc-quote-sidebar">

                {/* Why get a quote */}
                <div className="akc-quote-sidebar__card">
                  <h3 className={`akc-quote-sidebar__title${locale === "te" ? " lang-te" : ""}`}>
                    {isEn ? "Why Request a Quote?" : "కోటేషన్ ఎందుకు అభ్యర్థించాలి?"}
                  </h3>
                  <ul className="akc-quote-why-list" role="list">
                    {whyItems.map((item, i) => (
                      <li key={i} className="akc-quote-why-item">
                        <span className="akc-quote-why-icon" aria-hidden="true">{item.icon}</span>
                        <span className={locale === "te" ? "lang-te" : ""}>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Contact */}
                <div className="akc-quote-sidebar__card">
                  <h3 className={`akc-quote-sidebar__title${locale === "te" ? " lang-te" : ""}`}>
                    {isEn ? "Prefer to Call or Chat?" : "కాల్ లేదా చాట్ చేయాలనుకుంటున్నారా?"}
                  </h3>
                  <div className="akc-quote-contacts">
                    <a
                      href={primaryWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="akc-quote-contact-item"
                      aria-label={`WhatsApp ${BUSINESS.phone.primaryDisplay}`}
                    >
                      <span className="akc-quote-contact-icon" aria-hidden="true">💬</span>
                      <span>
                        <span className="akc-quote-contact-number">{BUSINESS.phone.primaryDisplay}</span>
                        <span className="akc-quote-contact-label">WhatsApp — {isEn ? "Primary" : "ప్రాథమిక"}</span>
                      </span>
                    </a>

                    <a
                      href={BUSINESS.phone.primaryTel}
                      className="akc-quote-contact-item"
                      aria-label={`Call Akshaya Cabs at ${BUSINESS.phone.primaryDisplay}`}
                    >
                      <span className="akc-quote-contact-icon" aria-hidden="true">📞</span>
                      <span>
                        <span className="akc-quote-contact-number">{BUSINESS.phone.primaryDisplay}</span>
                        <span className="akc-quote-contact-label">
                          {isEn ? `Call — ${BUSINESS.availability}` : `కాల్ — ${BUSINESS.availability}`}
                        </span>
                      </span>
                    </a>

                    <a
                      href={secondaryWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="akc-quote-contact-item"
                      aria-label={`WhatsApp alternate ${BUSINESS.phone.secondaryDisplay}`}
                    >
                      <span className="akc-quote-contact-icon" aria-hidden="true">📱</span>
                      <span>
                        <span className="akc-quote-contact-number">{BUSINESS.phone.secondaryDisplay}</span>
                        <span className="akc-quote-contact-label">
                          WhatsApp — {BUSINESS.phone.secondaryLabel}
                        </span>
                      </span>
                    </a>

                    <a
                      href={BUSINESS.emailHref}
                      className="akc-quote-contact-item"
                      aria-label={`Email Akshaya Cabs at ${BUSINESS.email}`}
                    >
                      <span className="akc-quote-contact-icon" aria-hidden="true">✉️</span>
                      <span>
                        <span className="akc-quote-contact-number">{BUSINESS.email}</span>
                        <span className="akc-quote-contact-label">{isEn ? "Email" : "ఇమెయిల్"}</span>
                      </span>
                    </a>
                  </div>
                </div>

                {/* 24/7 badge */}
                <div className="akc-quote-sidebar__card akc-quote-availability" aria-label={isEn ? "Availability" : "అందుబాటు"}>
                  <div className="akc-quote-availability__val">24/7</div>
                  <div className="akc-quote-availability__icon" aria-hidden="true">🕐</div>
                  <p className={`akc-quote-availability__label${locale === "te" ? " lang-te" : ""}`}>
                    {isEn ? "Available Always" : "ఎల్లప్పుడూ అందుబాటులో"}
                  </p>
                  <a
                    href={BUSINESS.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="akc-btn akc-btn--ghost"
                    style={{ marginTop: "0.75rem", fontSize: "0.8125rem" }}
                    aria-label={isEn ? "Find Akshaya Cabs on Google Maps" : "Google Maps లో అక్షయ క్యాబ్స్ వెతకండి"}
                  >
                    {isEn ? "Find Us on Maps" : "Maps లో వెతకండి"}
                  </a>
                </div>

                {/* Quick links */}
                <div className="akc-quote-quicklinks">
                  <Link href={`/${locale}/tour-packages`} className="akc-btn akc-btn--ghost" style={{ textAlign: "center" }}>
                    {isEn ? "Browse Tour Packages" : "టూర్ ప్యాకేజీలు చూడండి"}
                  </Link>
                  <Link href={`/${locale}/fleet`} className="akc-btn akc-btn--ghost" style={{ textAlign: "center" }}>
                    {isEn ? "View Our Fleet" : "మా ఫ్లీట్ చూడండి"}
                  </Link>
                  <Link href={`/${locale}/services`} className="akc-btn akc-btn--ghost" style={{ textAlign: "center" }}>
                    {isEn ? "All Services" : "అన్ని సేవలు"}
                  </Link>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  );
}