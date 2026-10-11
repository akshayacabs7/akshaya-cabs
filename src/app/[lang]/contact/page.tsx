// Akshaya Cabs — Contact Page (TASK-21)
// /src/app/[lang]/contact/page.tsx
//
// RULES:
//  - No SVTT / Sri Vinayaka identity anywhere.
//  - All contacts pulled from BUSINESS data (single source of truth).
//  - No fabricated social handles or follower counts.
//  - Map iframe lazy-loaded (loading="lazy") — does NOT delay hero.
//  - Map replaced by directions link when consent requirements are a concern:
//    we use both (iframe + directions link) so users can choose.
//  - ContactEnquiryForm receives locale prop.
//  - Bilingual EN + TE via params.lang.

import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { BUSINESS } from "@/data/business";
import { SOCIAL_LINKS } from "@/data/social";
import { primaryWhatsAppUrl, secondaryWhatsAppUrl } from "@/lib/whatsapp";
import ContactEnquiryForm from "@/components/ui/ContactEnquiryForm";
import JsonLd from "@/components/seo/JsonLd";
import { buildFaqSchema } from "@/lib/schema";

// ── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang !== "te";

  return {
    title: isEn
      ? `Contact Us | Akshaya Cabs Tirupati — 24/7 Cab & Tour Service`
      : `మమ్మల్ని సంప్రదించండి | అక్షయ క్యాబ్స్ తిరుపతి — 24/7 క్యాబ్ & టూర్ సేవ`,
    description: isEn
      ? `Contact Akshaya Cabs Tirupati — call +91 72888 76667, WhatsApp, or email akshayacabs7@gmail.com. Available 24/7 for Tirumala taxi, airport transfers, outstation cabs and South India tours.`
      : `అక్షయ క్యాబ్స్ తిరుపతిని సంప్రదించండి — +91 72888 76667 కు కాల్ చేయండి, WhatsApp పంపండి, లేదా akshayacabs7@gmail.com కు ఇమెయిల్ చేయండి. తిరుమల టాక్సీ, విమానాశ్రయ బదిలీ, అవుట్‌స్టేషన్ క్యాబ్ మరియు దక్షిణ భారత పర్యటనలకు 24/7 అందుబాటులో ఉంది.`,
    alternates: {
      canonical: `https://akshayacabs.com/${lang}/contact`,
      languages: {
        "en-IN": "https://akshayacabs.com/en/contact",
        "te-IN": "https://akshayacabs.com/te/contact",
        "x-default": "https://akshayacabs.com/en/contact",
      },
    },
    openGraph: {
      title: isEn ? "Contact Akshaya Cabs Tirupati" : "అక్షయ క్యాబ్స్ తిరుపతిని సంప్రదించండి",
      description: isEn
        ? "Call, WhatsApp or email Akshaya Cabs. Available 24/7."
        : "అక్షయ క్యాబ్స్ ను కాల్ చేయండి, WhatsApp పంపండి లేదా ఇమెయిల్ చేయండి. 24/7 అందుబాటులో ఉంది.",
      url: `https://akshayacabs.com/${lang}/contact`,
    },
  };
}

// ── Social icon SVGs ─────────────────────────────────────────────────────────

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

// ── Social icon resolver ─────────────────────────────────────────────────────

function SocialIcon({ icon }: { icon: string }) {
  if (icon === "instagram") return <InstagramIcon />;
  if (icon === "facebook")  return <FacebookIcon />;
  if (icon === "twitter")   return <XIcon />;
  return <span aria-hidden="true">🔗</span>;
}

// ── FAQ data ─────────────────────────────────────────────────────────────────

interface FAQ { q: Record<"en" | "te", string>; a: Record<"en" | "te", string>; }

const CONTACT_FAQS: FAQ[] = [
  {
    q: {
      en: "What is the fastest way to book a cab?",
      te: "క్యాబ్ బుక్ చేసుకోవడానికి వేగవంతమైన మార్గం ఏమిటి?",
    },
    a: {
      en: "WhatsApp is the fastest — tap the WhatsApp button above to send your trip details instantly. We typically respond within minutes.",
      te: "WhatsApp వేగవంతమైన మార్గం — మీ ప్రయాణ వివరాలు వెంటనే పంపడానికి పైన ఉన్న WhatsApp బటన్ నొక్కండి. మేము సాధారణంగా కొద్ది నిమిషాల్లో స్పందిస్తాము.",
    },
  },
  {
    q: {
      en: "Are you available on public holidays and late nights?",
      te: "మీరు పబ్లిక్ హాలిడేలు మరియు అర్ధరాత్రి సమయాల్లో అందుబాటులో ఉంటారా?",
    },
    a: {
      en: "Yes — Akshaya Cabs operates 24 hours a day, 7 days a week, including all festivals and public holidays.",
      te: "అవును — అక్షయ క్యాబ్స్ అన్ని పండుగలు మరియు సార్వజనిక సెలవులతో సహా రోజుకు 24 గంటలు, వారానికి 7 రోజులు పని చేస్తుంది.",
    },
  },
  {
    q: {
      en: "Do you serve Tirumala and Tirupati railway station?",
      te: "మీరు తిరుమల మరియు తిరుపతి రైల్వే స్టేషన్ కు సేవలు అందిస్తారా?",
    },
    a: {
      en: "Yes. We cover Tirumala hill (Alipiri and Srivari Mettu routes), Tirupati Railway Station, Tirupati Airport (TIR), Renigunta Junction and all surrounding areas.",
      te: "అవును. మేము తిరుమల కొండ (అలిపిరి మరియు శ్రీవారి మెట్టు మార్గాలు), తిరుపతి రైల్వే స్టేషన్, తిరుపతి విమానాశ్రయం (TIR), రేణిగుంట జంక్షన్ మరియు చుట్టుపక్కల ప్రాంతాలన్నింటిలో సేవలు అందిస్తాము.",
    },
  },
  {
    q: {
      en: "Is online payment required?",
      te: "ఆన్‌లైన్ చెల్లింపు అవసరమా?",
    },
    a: {
      en: "No. We accept cash payment directly to the driver. No app download, no login, no online payment required.",
      te: "లేదు. మేము నేరుగా డ్రైవర్‌కు నగదు చెల్లింపు అంగీకరిస్తాము. యాప్ డౌన్‌లోడ్, లాగిన్, ఆన్‌లైన్ చెల్లింపు అవసరం లేదు.",
    },
  },
  {
    q: {
      en: "How is the final fare decided?",
      te: "చివరి ఫేర్ ఎలా నిర్ణయించబడుతుంది?",
    },
    a: {
      en: "After you send your WhatsApp enquiry, our team will confirm the exact fare based on your route, vehicle, and travel date. Tolls and state permits are paid separately.",
      te: "మీరు WhatsApp విచారణ పంపిన తర్వాత, మా బృందం మీ మార్గం, వాహనం మరియు ప్రయాణ తేదీ ఆధారంగా ఖచ్చితమైన ఫేర్ నిర్ధారిస్తుంది. టోల్లు మరియు రాష్ట్ర పర్మిట్లు వేర్వేరుగా చెల్లించబడతాయి.",
    },
  },
];

// ── Page Component ───────────────────────────────────────────────────────────

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (lang === "te" ? "te" : "en") as Locale;
  const isEn = locale === "en";

  const primaryWaUrl   = primaryWhatsAppUrl();
  const secondaryWaUrl = secondaryWhatsAppUrl();

  // Google Maps Directions link — no embed tracking
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(BUSINESS.address.full)}`;

  const faqSchemaData = CONTACT_FAQS.map((faq) => ({
    question: isEn ? faq.q.en : faq.q.te,
    answer: isEn ? faq.a.en : faq.a.te,
  }));

  return (
    <>
      <JsonLd data={buildFaqSchema(faqSchemaData)} />
      {/* ══════════════════════════════════════════
          HERO
          ══════════════════════════════════════════ */}
      <header className="akc-contact-hero">
        <div className="akc-container akc-contact-hero__inner">
          <div className="akc-contact-hero__content">
            <span className="akc-contact-hero__label">
              📞 {isEn ? "Contact Us" : "మమ్మల్ని సంప్రదించండి"}
            </span>
            <h1 className={`akc-contact-hero__h1${isEn ? "" : " lang-te"}`}>
              {isEn ? (
                <>Get in Touch with <span className="akc-contact-hero__h1-accent">Akshaya Cabs</span></>
              ) : (
                <>అక్షయ క్యాబ్స్ తో <span className="akc-contact-hero__h1-accent">సంప్రదించండి</span></>
              )}
            </h1>
            <p className={`akc-contact-hero__desc${isEn ? "" : " lang-te"}`}>
              {isEn
                ? `Available ${BUSINESS.availability} for bookings, enquiries and support. Call, WhatsApp, or fill the form below.`
                : `బుకింగ్‌లు, విచారణలు మరియు మద్దతు కోసం ${BUSINESS.availability} అందుబాటులో ఉంది. కాల్ చేయండి, WhatsApp చేయండి, లేదా దిగువ ఫారం నింపండి.`}
            </p>

            {/* Quick action buttons */}
            <div className="akc-contact-hero__ctas">
              <a
                href={primaryWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="akc-btn akc-btn--wa akc-btn--lg"
                aria-label={`WhatsApp ${BUSINESS.phone.primaryDisplay}`}
              >
                <WhatsAppIcon />
                <span className={isEn ? "" : "lang-te"}>
                  {isEn ? "WhatsApp Us" : "WhatsApp చేయండి"}
                </span>
              </a>
              <a
                href={BUSINESS.phone.primaryTel}
                className="akc-btn akc-btn--outline-light akc-btn--lg"
                aria-label={`Call ${BUSINESS.phone.primaryDisplay}`}
              >
                📞 <span>{BUSINESS.phone.primaryDisplay}</span>
              </a>
            </div>
          </div>

          {/* Availability pill */}
          <div className="akc-contact-hero__avail" aria-label="Availability">
            <span className="akc-contact-hero__avail-num">24/7</span>
            <span className="akc-contact-hero__avail-icon">🕐</span>
            <span className={`akc-contact-hero__avail-label${isEn ? "" : " lang-te"}`}>
              {isEn ? "Always Available" : "ఎల్లప్పుడూ అందుబాటులో"}
            </span>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════
          CONTACT CARDS + FORM GRID
          ══════════════════════════════════════════ */}
      <section className="akc-contact-body" aria-labelledby="contact-details-heading">
        <div className="akc-container">
          <div className="akc-contact-grid">

            {/* ── Left: Contact Details ── */}
            <aside aria-label={isEn ? "Contact details" : "సంప్రదింపు వివరాలు"}>
              <h2
                id="contact-details-heading"
                className={`akc-contact-aside__title${isEn ? "" : " lang-te"}`}
              >
                {isEn ? "Contact Details" : "సంప్రదింపు వివరాలు"}
              </h2>

              <div className="akc-contact-cards">

                {/* WhatsApp primary */}
                <a
                  href={primaryWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="akc-contact-card akc-contact-card--wa"
                  aria-label={`WhatsApp primary number ${BUSINESS.phone.primaryDisplay}`}
                >
                  <span className="akc-contact-card__icon"><WhatsAppIcon /></span>
                  <div className="akc-contact-card__body">
                    <span className="akc-contact-card__label">
                      {isEn ? "WhatsApp / Primary" : "WhatsApp / ప్రాథమిక"}
                    </span>
                    <span className="akc-contact-card__value">{BUSINESS.phone.primaryDisplay}</span>
                    <span className={`akc-contact-card__hint${isEn ? "" : " lang-te"}`}>
                      {isEn ? "Tap to open WhatsApp ↗" : "WhatsApp తెరవడానికి నొక్కండి ↗"}
                    </span>
                  </div>
                </a>

                {/* Call primary */}
                <a
                  href={BUSINESS.phone.primaryTel}
                  className="akc-contact-card"
                  aria-label={`Call primary number ${BUSINESS.phone.primaryDisplay}`}
                >
                  <span className="akc-contact-card__icon">📞</span>
                  <div className="akc-contact-card__body">
                    <span className="akc-contact-card__label">
                      {isEn ? "Call — Primary" : "కాల్ — ప్రాథమిక"}
                    </span>
                    <span className="akc-contact-card__value">{BUSINESS.phone.primaryDisplay}</span>
                    <span className={`akc-contact-card__hint${isEn ? "" : " lang-te"}`}>
                      {isEn ? `Available ${BUSINESS.availability}` : `${BUSINESS.availability} అందుబాటులో`}
                    </span>
                  </div>
                </a>

                {/* WhatsApp secondary */}
                <a
                  href={secondaryWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="akc-contact-card"
                  aria-label={`WhatsApp alternate number ${BUSINESS.phone.secondaryDisplay}`}
                >
                  <span className="akc-contact-card__icon"><WhatsAppIcon /></span>
                  <div className="akc-contact-card__body">
                    <span className="akc-contact-card__label">
                      {isEn ? "WhatsApp — Alternate" : "WhatsApp — ప్రత్యామ్నాయ"}
                    </span>
                    <span className="akc-contact-card__value">{BUSINESS.phone.secondaryDisplay}</span>
                    <span className={`akc-contact-card__hint${isEn ? "" : " lang-te"}`}>
                      {isEn ? "Tap to open WhatsApp ↗" : "WhatsApp తెరవడానికి నొక్కండి ↗"}
                    </span>
                  </div>
                </a>

                {/* Call secondary */}
                <a
                  href={BUSINESS.phone.secondaryTel}
                  className="akc-contact-card"
                  aria-label={`Call alternate number ${BUSINESS.phone.secondaryDisplay}`}
                >
                  <span className="akc-contact-card__icon">📱</span>
                  <div className="akc-contact-card__body">
                    <span className="akc-contact-card__label">
                      {isEn ? `Call — ${BUSINESS.phone.secondaryLabel}` : `కాల్ — ప్రత్యామ్నాయ`}
                    </span>
                    <span className="akc-contact-card__value">{BUSINESS.phone.secondaryDisplay}</span>
                    <span className={`akc-contact-card__hint${isEn ? "" : " lang-te"}`}>
                      {isEn ? "Alternate contact" : "ప్రత్యామ్నాయ సంప్రదింపు"}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={BUSINESS.emailHref}
                  className="akc-contact-card"
                  aria-label={`Email ${BUSINESS.email}`}
                >
                  <span className="akc-contact-card__icon">✉️</span>
                  <div className="akc-contact-card__body">
                    <span className="akc-contact-card__label">
                      {isEn ? "Email" : "ఇమెయిల్"}
                    </span>
                    <span className="akc-contact-card__value akc-contact-card__value--sm">
                      {BUSINESS.email}
                    </span>
                    <span className={`akc-contact-card__hint${isEn ? "" : " lang-te"}`}>
                      {isEn ? "For detailed enquiries" : "వివరణాత్మక విచారణల కోసం"}
                    </span>
                  </div>
                </a>

                {/* Address */}
                <a
                  href={BUSINESS.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="akc-contact-card"
                  aria-label={`View address on Google Maps: ${BUSINESS.address.full}`}
                >
                  <span className="akc-contact-card__icon">📍</span>
                  <div className="akc-contact-card__body">
                    <span className="akc-contact-card__label">
                      {isEn ? "Office Address" : "కార్యాలయ చిరునామా"}
                    </span>
                    <address className="akc-contact-card__address not-italic">
                      {BUSINESS.address.line1},<br />
                      {BUSINESS.address.line2},<br />
                      {BUSINESS.address.city}, {BUSINESS.address.stateCode} {BUSINESS.address.pincode}
                    </address>
                    <span className={`akc-contact-card__hint${isEn ? "" : " lang-te"}`}>
                      {isEn ? "View on Google Maps ↗" : "Google Maps లో చూడండి ↗"}
                    </span>
                  </div>
                </a>

              </div>

              {/* Social links */}
              <div className="akc-contact-social" aria-label={isEn ? "Follow us on social media" : "సోషల్ మీడియాలో ఫాలో చేయండి"}>
                <p className={`akc-contact-social__heading${isEn ? "" : " lang-te"}`}>
                  {isEn ? "Follow Us" : "ఫాలో చేయండి"}
                </p>
                <div className="akc-contact-social__links">
                  {SOCIAL_LINKS.map((s) => (
                    <a
                      key={s.id}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`akc-contact-social__link akc-contact-social__link--${s.icon}`}
                      aria-label={`Follow Akshaya Cabs on ${s.name} (${s.handle})`}
                    >
                      <SocialIcon icon={s.icon} />
                      <span>
                        <span className="akc-contact-social__name">{s.name}</span>
                        <span className="akc-contact-social__handle">{s.handle}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </aside>

            {/* ── Right: Enquiry Form ── */}
            <div className="akc-contact-form-wrap">
              <h2 className={`akc-contact-form-wrap__title${isEn ? "" : " lang-te"}`}>
                {isEn ? "Send an Enquiry" : "విచారణ పంపండి"}
              </h2>
              <p className={`akc-contact-form-wrap__sub${isEn ? "" : " lang-te"}`}>
                {isEn
                  ? "Fill in your trip details and your enquiry will open WhatsApp with everything pre-filled — just tap Send."
                  : "మీ ప్రయాణ వివరాలు నింపండి, మీ విచారణ అన్నీ ముందే నింపబడిన WhatsApp తెరవబడుతుంది — Send నొక్కండి."}
              </p>
              <ContactEnquiryForm locale={locale} />
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MAP SECTION
          ══════════════════════════════════════════ */}
      <section className="akc-contact-map" aria-labelledby="map-heading">
        <div className="akc-container">
          <div className="akc-section-header">
            <p className="akc-section-label">
              {isEn ? "Find Us" : "మాను కనుగొనండి"}
            </p>
            <h2 id="map-heading" className={`akc-section-title${isEn ? "" : " lang-te"}`}>
              {isEn ? "Our Location" : "మా స్థానం"}
            </h2>
            <p className="akc-section-subtitle">
              {BUSINESS.address.full}
            </p>
          </div>

          {/* Lazy-loaded iframe — does not block hero paint */}
          <div className="akc-contact-map__frame">
            <iframe
              title={isEn
                ? "Akshaya Cabs location in Tirupati, Andhra Pradesh"
                : "తిరుపతి, ఆంధ్రప్రదేశ్‌లో అక్షయ క్యాబ్స్ స్థానం"}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.5!2d79.41200!3d13.62780!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b4b4b4b4b4b%3A0x0!2sMadura+Nagar%2C+Tirupati%2C+Andhra+Pradesh+517501!5e0!3m2!1sen!2sin!4v1696000000000!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              aria-label={isEn
                ? "Google Maps — Madura Nagar, Tirupati, Andhra Pradesh"
                : "Google Maps — మదుర నగర్, తిరుపతి, ఆంధ్రప్రదేశ్"}
            />
          </div>

          {/* Directions link — no tracking */}
          <div className="akc-contact-map__actions">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="akc-btn akc-btn--primary"
              aria-label={isEn ? "Get directions to Akshaya Cabs office" : "అక్షయ క్యాబ్స్ కార్యాలయానికి దిశలు పొందండి"}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span className={isEn ? "" : "lang-te"}>
                {isEn ? "Get Directions" : "దిశలు పొందండి"}
              </span>
            </a>
            <a
              href={BUSINESS.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="akc-btn akc-btn--outline"
              aria-label={isEn ? "View on Google Maps" : "Google Maps లో చూడండి"}
            >
              <span className={isEn ? "" : "lang-te"}>
                {isEn ? "View on Google Maps ↗" : "Google Maps లో చూడండి ↗"}
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ SECTION
          ══════════════════════════════════════════ */}
      <section className="akc-contact-faq" aria-labelledby="faq-heading">
        <div className="akc-container akc-contact-faq__inner">
          <div className="akc-section-header">
            <p className="akc-section-label">
              {isEn ? "Common Questions" : "సాధారణ ప్రశ్నలు"}
            </p>
            <h2 id="faq-heading" className={`akc-section-title${isEn ? "" : " lang-te"}`}>
              {isEn ? "Frequently Asked Questions" : "తరచుగా అడిగే ప్రశ్నలు"}
            </h2>
          </div>

          <dl className="akc-contact-faq__list">
            {CONTACT_FAQS.map((faq, i) => (
              <div key={i} className="akc-contact-faq__item">
                <dt className={`akc-contact-faq__q${isEn ? "" : " lang-te"}`}>
                  {faq.q[locale]}
                </dt>
                <dd className={`akc-contact-faq__a${isEn ? "" : " lang-te"}`}>
                  {faq.a[locale]}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
