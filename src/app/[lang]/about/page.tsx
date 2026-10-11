// Akshaya Cabs — About Page (TASK-22)
// /src/app/[lang]/about/page.tsx
//
// RULES (strictly enforced):
//  - No SVTT / Sri Vinayaka identity. No "Ravilla Hemanth Naidu".
//  - Do NOT invent years of experience, awards, licences, fleet size, or personal quotes.
//  - Founder photo: genuine supplied image from public/images/akshaya/founder/sr-kumar.jpg
//    (confirmed present — LG-04 can be updated once owner reviews).
//  - Bio is factual and neutral — no fabricated achievements.
//  - Bilingual EN + TE via params.lang.
//  - No .svtt-* class names.

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { BUSINESS } from "@/data/business";
import { VEHICLES } from "@/data/vehicles";
import { SERVICES } from "@/data/services";
import { primaryWhatsAppUrl } from "@/lib/whatsapp";

// ── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang !== "te";
  return {
    title: isEn
      ? `About Us | Akshaya Cabs Tirupati — Cab & Tour Service`
      : `మా గురించి | అక్షయ క్యాబ్స్ తిరుపతి — క్యాబ్ & టూర్ సేవ`,
    description: isEn
      ? `Akshaya Cabs is a Tirupati-based cab and tour service founded by S.R. Kumar. We specialise in Tirumala taxi, temple tours, airport transfers, outstation cabs and South India pilgrimages. Available 24/7.`
      : `అక్షయ క్యాబ్స్ S.R. కుమార్ స్థాపించిన తిరుపతి కేంద్రంగా ఉన్న క్యాబ్ మరియు టూర్ సేవ. తిరుమల టాక్సీ, ఆలయ పర్యటనలు, విమానాశ్రయ బదిలీలు, అవుట్‌స్టేషన్ క్యాబ్‌లు మరియు దక్షిణ భారత యాత్రలలో నిపుణులు. 24/7 అందుబాటులో ఉంది.`,
    alternates: {
      canonical: `https://akshayacabs.com/${lang}/about`,
      languages: {
        "en-IN": "https://akshayacabs.com/en/about",
        "te-IN": "https://akshayacabs.com/te/about",
        "x-default": "https://akshayacabs.com/en/about",
      },
    },
    openGraph: {
      title: isEn ? "About Akshaya Cabs Tirupati" : "అక్షయ క్యాబ్స్ తిరుపతి గురించి",
      description: isEn
        ? "Tirupati-based cab & tour service by S.R. Kumar. Tirumala taxi, temple tours, outstation & South India pilgrimages. Available 24/7."
        : "S.R. కుమార్ చే తిరుపతి కేంద్రంగా క్యాబ్ & టూర్ సేవ. తిరుమల టాక్సీ, ఆలయ పర్యటనలు, అవుట్‌స్టేషన్ & దక్షిణ భారత యాత్రలు. 24/7 అందుబాటులో.",
      url: `https://akshayacabs.com/${lang}/about`,
    },
  };
}

// ── Values data ───────────────────────────────────────────────────────────────

interface Value {
  icon: string;
  title: Record<"en" | "te", string>;
  desc: Record<"en" | "te", string>;
}

const VALUES: Value[] = [
  {
    icon: "🛕",
    title: {
      en: "Pilgrimage-First",
      te: "యాత్ర ప్రాధాన్యత",
    },
    desc: {
      en: "We understand the importance of every Tirumala darshan and temple visit. We plan every journey to honour its spiritual significance.",
      te: "మేము ప్రతి తిరుమల దర్శనం మరియు ఆలయ సందర్శన యొక్క ప్రాముఖ్యతను అర్థం చేసుకుంటాము. మేము దాని ఆధ్యాత్మిక ప్రాముఖ్యతను గౌరవించే విధంగా ప్రతి ప్రయాణాన్ని ప్లాన్ చేస్తాము.",
    },
  },
  {
    icon: "🕐",
    title: {
      en: "Always Available",
      te: "ఎల్లప్పుడూ అందుబాటులో",
    },
    desc: {
      en: "Available 24 hours a day, 7 days a week — whether it's an early morning darshan or a late-night airport pickup, we are here.",
      te: "రోజుకు 24 గంటలు, వారానికి 7 రోజులు అందుబాటులో — తెల్లవారుజామున దర్శనం అయినా లేదా అర్ధరాత్రి విమానాశ్రయ పికప్ అయినా, మేము ఇక్కడ ఉంటాము.",
    },
  },
  {
    icon: "🤝",
    title: {
      en: "Customer-First",
      te: "కస్టమర్ ప్రాధాన్యత",
    },
    desc: {
      en: "We listen, we adapt, and we go the extra mile. Your comfort and trust matter more than any transaction.",
      te: "మేము వింటాము, మేము అనుకూలంగా మారతాము మరియు అదనపు మైలు వెళతాము. మీ సౌకర్యం మరియు నమ్మకం ఏ వ్యాపారం కంటే ముఖ్యమైనవి.",
    },
  },
  {
    icon: "📍",
    title: {
      en: "Local Expertise",
      te: "స్థానిక నైపుణ్యం",
    },
    desc: {
      en: "Our drivers know Tirupati and surrounding regions inside out — the ghat roads, the temple routes, the timings that matter for your darshan.",
      te: "మా డ్రైవర్లకు తిరుపతి మరియు చుట్టుపక్కల ప్రాంతాల పూర్తి అవగాహన ఉంది — ఘాట్ రోడ్లు, ఆలయ మార్గాలు, మీ దర్శనానికి ముఖ్యమైన సమయాలు.",
    },
  },
  {
    icon: "💰",
    title: {
      en: "Transparent Pricing",
      te: "పారదర్శక ధరలు",
    },
    desc: {
      en: "No hidden charges. Fares are confirmed before your trip and include driver allowance. Tolls and permits are disclosed upfront.",
      te: "దాచిన చార్జీలు లేవు. ఫేర్లు మీ ప్రయాణానికి ముందు నిర్ధారించబడతాయి మరియు డ్రైవర్ అలవెన్స్ చేర్చబడింది. టోల్లు మరియు పర్మిట్లు ముందుగా తెలియజేయబడతాయి.",
    },
  },
  {
    icon: "🚗",
    title: {
      en: "AC Fleet",
      te: "AC ఫ్లీట్",
    },
    desc: {
      en: "From compact sedans to 12-seater Force Urbania and Tempo Travellers — all fully air-conditioned and maintained for long-distance comfort.",
      te: "కాంపాక్ట్ సెడాన్‌ల నుండి 12-సీటర్ ఫోర్స్ అర్బానియా మరియు టెంపో ట్రావెలర్‌ల వరకు — అన్నీ పూర్తిగా ఎయిర్-కండిషన్డ్ మరియు దీర్ఘ-దూర సౌకర్యం కోసం నిర్వహించబడతాయి.",
    },
  },
];

// ── Coverage areas ────────────────────────────────────────────────────────────

const COVERAGE: Record<"en" | "te", string[]> = {
  en: [
    "Tirupati City", "Tirumala Hill", "Tirupati Airport (TIR)",
    "Tirupati Railway Station", "Renigunta Junction",
    "Kanipakam", "Sri Padmavathi Temple", "Sri Kalahasti",
    "Arunachalam", "Golden Temple (Vellore)",
    "Srinivasam", "Kodanda Rama Swamy Temple",
    "South India Outstation",
  ],
  te: [
    "తిరుపతి నగరం", "తిరుమల కొండ", "తిరుపతి విమానాశ్రయం (TIR)",
    "తిరుపతి రైల్వే స్టేషన్", "రేణిగుంట జంక్షన్",
    "కాణిపాకం", "శ్రీ పద్మావతి ఆలయం", "శ్రీకాళహస్తి",
    "అరుణాచలం", "గోల్డెన్ టెంపుల్ (వెల్లూరు)",
    "శ్రీనివాసం", "కొడందరామస్వామి ఆలయం",
    "దక్షిణ భారత అవుట్‌స్టేషన్",
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (lang === "te" ? "te" : "en") as Locale;
  const isEn = locale === "en";
  const waUrl = primaryWhatsAppUrl();

  return (
    <>
      {/* ══════════════════════════════════════════
          HERO
          ══════════════════════════════════════════ */}
      <header className="akc-about-hero">
        <div className="akc-container akc-about-hero__inner">
          <span className="akc-about-hero__label">
            🏢 {isEn ? "About Us" : "మా గురించి"}
          </span>
          <h1 className={`akc-about-hero__h1${isEn ? "" : " lang-te"}`}>
            {isEn ? (
              <>
                <span className="akc-about-hero__h1-accent">Akshaya Cabs</span>
                {" "}— Your Trusted Tirupati Cab Partner
              </>
            ) : (
              <>
                <span className="akc-about-hero__h1-accent">అక్షయ క్యాబ్స్</span>
                {" "}— మీ విశ్వసనీయ తిరుపతి క్యాబ్ భాగస్వామి
              </>
            )}
          </h1>
          <p className={`akc-about-hero__desc${isEn ? "" : " lang-te"}`}>
            {isEn
              ? `A Tirupati-based cab and tour service dedicated to making every pilgrimage, temple visit, and journey as comfortable, safe, and meaningful as possible. Available ${BUSINESS.availability} for all your travel needs.`
              : `ప్రతి యాత్ర, ఆలయ సందర్శన మరియు ప్రయాణాన్ని సాధ్యమైనంత సౌకర్యంగా, సురక్షితంగా మరియు అర్థవంతంగా చేయడానికి అంకితమైన తిరుపతి కేంద్రంగా ఉన్న క్యాబ్ మరియు టూర్ సేవ. మీ అన్ని ప్రయాణ అవసరాలకు ${BUSINESS.availability} అందుబాటులో ఉంది.`}
          </p>
          <div className="akc-about-hero__ctas">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="akc-btn akc-btn--wa akc-btn--lg"
              aria-label={`Contact Akshaya Cabs on WhatsApp — ${BUSINESS.phone.primaryDisplay}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className={isEn ? "" : "lang-te"}>
                {isEn ? "Get in Touch" : "సంప్రదించండి"}
              </span>
            </a>
            <Link
              href={`/${locale}/tour-packages`}
              className="akc-btn akc-btn--outline-light akc-btn--lg"
            >
              <span className={isEn ? "" : "lang-te"}>
                {isEn ? "View Packages" : "ప్యాకేజీలు చూడండి"}
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════
          STORY + FOUNDER
          ══════════════════════════════════════════ */}
      <section className="akc-about-story" aria-labelledby="about-story-heading">
        <div className="akc-container">
          <div className="akc-about-story__grid">

            {/* Text column */}
            <div className="akc-about-story__text">
              <span className="akc-about-story__eyebrow">
                {isEn ? "Our Story" : "మా కథ"}
              </span>
              <h2
                id="about-story-heading"
                className={`akc-about-story__h2${isEn ? "" : " lang-te"}`}
              >
                {isEn
                  ? "Pilgrimage & Travel from the Heart of Tirupati"
                  : "తిరుపతి హృదయం నుండి యాత్ర & ప్రయాణం"}
              </h2>

              <p className={`akc-about-story__body${isEn ? "" : " lang-te"}`}>
                {isEn ? (
                  <>
                    <strong>{BUSINESS.name}</strong> is a Tirupati-based cab and tour service
                    founded by <strong>{BUSINESS.owner.name}</strong>. We are based in{" "}
                    <strong>Madura Nagar, Tirupati</strong> — one of the most spiritually
                    significant cities in South India and home to the revered Sri Venkateswara
                    Temple at Tirumala.
                  </>
                ) : (
                  <>
                    <strong>{BUSINESS.name}</strong> అనేది{" "}
                    <strong>{BUSINESS.owner.name}</strong> చే స్థాపించబడిన తిరుపతి కేంద్రంగా ఉన్న
                    క్యాబ్ మరియు టూర్ సేవ. మేము <strong>మదుర నగర్, తిరుపతి</strong>లో
                    ఉన్నాము — దక్షిణ భారతంలో అత్యంత ఆధ్యాత్మికంగా ముఖ్యమైన నగరాలలో ఒకటి మరియు
                    తిరుమలలో పూజనీయ శ్రీ వేంకటేశ్వర ఆలయానికి నిలయం.
                  </>
                )}
              </p>

              <p className={`akc-about-story__body${isEn ? "" : " lang-te"}`}>
                {isEn ? (
                  <>
                    Our focus is simple: to provide safe, comfortable, and reliable
                    transportation to pilgrims, tourists, and local residents across
                    Tirupati and South India. Whether you are arriving for a Tirumala
                    darshan, exploring nearby temples like Kanipakam, Sri Kalahasti, or
                    Golden Temple, or travelling outstation, we treat every journey with
                    the care it deserves.
                  </>
                ) : (
                  <>
                    మా దృష్టి సరళమైనది: తిరుపతి మరియు దక్షిణ భారతం అంతటా యాత్రికులు,
                    పర్యాటకులు మరియు స్థానిక నివాసులకు సురక్షితమైన, సౌకర్యవంతమైన మరియు
                    విశ్వసనీయ రవాణా అందించడం. మీరు తిరుమల దర్శనం కోసం వస్తున్నా, కాణిపాకం,
                    శ్రీకాళహస్తి లేదా గోల్డెన్ టెంపుల్ వంటి సమీప ఆలయాలను అన్వేషిస్తున్నా,
                    లేదా అవుట్‌స్టేషన్ ప్రయాణం చేస్తున్నా, మేము ప్రతి ప్రయాణాన్ని అర్హమైన
                    శ్రద్ధతో చేస్తాము.
                  </>
                )}
              </p>

              <p className={`akc-about-story__body${isEn ? "" : " lang-te"}`}>
                {isEn ? (
                  <>
                    We offer <strong>{SERVICES.length} cab &amp; tour services</strong> with a
                    fleet of <strong>{VEHICLES.length} fully air-conditioned vehicles</strong> —
                    from compact sedans to 12-seater Force Urbania and Tempo Travellers — catering to solo
                    pilgrims, families, and large groups alike. We are available{" "}
                    <strong>{BUSINESS.availability}</strong>, including early morning Tirumala
                    departures and late-night airport pickups.
                  </>
                ) : (
                  <>
                    మేము <strong>{SERVICES.length} క్యాబ్ &amp; టూర్ సేవలు</strong> అందిస్తాము{" "}
                    మరియు కాంపాక్ట్ సెడాన్‌ల నుండి 12-సీటర్ ఫోర్స్ అర్బానియా మరియు టెంపో ట్రావెలర్‌ల వరకు{" "}
                    <strong>{VEHICLES.length} పూర్తిగా ఎయిర్-కండిషన్డ్ వాహనాల</strong> ఫ్లీట్
                    కలిగి ఉన్నాము — ఒంటరి యాత్రికులు, కుటుంబాలు మరియు పెద్ద గ్రూప్‌లందరికీ
                    సేవలు అందిస్తాము. తిరుమల తెల్లవారుజామున బయలుదేరడం మరియు అర్ధరాత్రి
                    విమానాశ్రయ పికప్‌లతో సహా{" "}
                    <strong>{BUSINESS.availability}</strong> అందుబాటులో ఉంది.
                  </>
                )}
              </p>

              {/* Snapshot chips */}
              <div className="akc-about-story__chips" aria-label={isEn ? "Key facts" : "ముఖ్య వాస్తవాలు"}>
                {[
                  { en: `${SERVICES.length} Services`, te: `${SERVICES.length} సేవలు` },
                  { en: `${VEHICLES.length} AC Vehicles`, te: `${VEHICLES.length} AC వాహనాలు` },
                  { en: `${BUSINESS.availability} Available`, te: `${BUSINESS.availability} అందుబాటులో` },
                  { en: "Tirumala Experts", te: "తిరుమల నిపుణులు" },
                  { en: "Local Drivers", te: "స్థానిక డ్రైవర్లు" },
                  { en: "Transparent Pricing", te: "పారదర్శక ధరలు" },
                ].map((chip) => (
                  <span key={chip.en} className="akc-about-story__chip">
                    {isEn ? chip.en : chip.te}
                  </span>
                ))}
              </div>
            </div>

            {/* Founder card */}
            <aside
              className="akc-about-owner"
              aria-label={isEn
                ? `Founder: ${BUSINESS.owner.name}`
                : `స్థాపకుడు: ${BUSINESS.owner.name}`}
            >
              <div className="akc-about-owner__img-wrap">
                <Image
                  src={BUSINESS.owner.photo}
                  alt={isEn
                    ? `${BUSINESS.owner.name} — ${BUSINESS.owner.role}, ${BUSINESS.name}`
                    : `${BUSINESS.owner.name} — ${BUSINESS.name} వ్యవస్థాపకుడు & యజమాని`}
                  fill
                  sizes="(max-width: 900px) 100vw, 380px"
                  className="akc-about-owner__img"
                  priority
                />
              </div>
              <div className="akc-about-owner__body">
                <h3 className="akc-about-owner__name">{BUSINESS.owner.name}</h3>
                <p className="akc-about-owner__role">
                  {isEn ? BUSINESS.owner.role : "వ్యవస్థాపకుడు & యజమాని"}
                </p>
                <p className={`akc-about-owner__bio${isEn ? "" : " lang-te"}`}>
                  {isEn ? (
                    <>
                      {BUSINESS.owner.name} founded {BUSINESS.name} with a clear vision:
                      to make pilgrimage travel from Tirupati safe, comfortable, and
                      stress-free for every visitor — whether they travel alone or in
                      large groups. His deep knowledge of Tirupati, Tirumala, and the
                      surrounding temple regions is at the heart of every service we offer.
                    </>
                  ) : (
                    <>
                      {BUSINESS.owner.name} {BUSINESS.name}ని స్పష్టమైన దృష్టితో స్థాపించారు:
                      తిరుపతి నుండి యాత్రా ప్రయాణాన్ని ప్రతి సందర్శకునికి — వారు ఒంటరిగా
                      లేదా పెద్ద గ్రూప్‌లలో ప్రయాణించినా — సురక్షితంగా, సౌకర్యంగా మరియు
                      ఒత్తిడి లేకుండా చేయడం. తిరుపతి, తిరుమల మరియు చుట్టుపక్కల ఆలయ
                      ప్రాంతాలపై ఆయనకున్న లోతైన జ్ఞానం మేము అందించే ప్రతి సేవకు హృదయమై
                      ఉంది.
                    </>
                  )}
                </p>
                {/* Contact quick-links under founder card */}
                <div className="akc-about-owner__links">
                  <a
                    href={BUSINESS.phone.primaryTel}
                    className="akc-about-owner__link"
                    aria-label={`Call ${BUSINESS.phone.primaryDisplay}`}
                  >
                    📞 {BUSINESS.phone.primaryDisplay}
                  </a>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="akc-about-owner__link akc-about-owner__link--wa"
                    aria-label={`WhatsApp ${BUSINESS.phone.primaryDisplay}`}
                  >
                    💬 {isEn ? "WhatsApp Us" : "WhatsApp చేయండి"}
                  </a>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          VALUES
          ══════════════════════════════════════════ */}
      <section className="akc-about-values" aria-labelledby="values-heading">
        <div className="akc-container">
          <div className="akc-section-header akc-section-header--center">
            <p className="akc-section-label">
              {isEn ? "What We Stand For" : "మేము దేని కోసం నిలబడతాము"}
            </p>
            <h2 id="values-heading" className={`akc-section-title${isEn ? "" : " lang-te"}`}>
              {isEn ? "Our Approach" : "మా విధానం"}
            </h2>
          </div>
          <ul className="akc-about-values__grid" role="list">
            {VALUES.map((v) => (
              <li key={v.title.en} className="akc-about-value-card">
                <span className="akc-about-value-card__icon" aria-hidden="true">{v.icon}</span>
                <h3 className={`akc-about-value-card__title${isEn ? "" : " lang-te"}`}>
                  {v.title[locale]}
                </h3>
                <p className={`akc-about-value-card__desc${isEn ? "" : " lang-te"}`}>
                  {v.desc[locale]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COVERAGE
          ══════════════════════════════════════════ */}
      <section className="akc-about-coverage" aria-labelledby="coverage-heading">
        <div className="akc-container">
          <div className="akc-section-header">
            <p className="akc-section-label">
              {isEn ? "Where We Operate" : "మేము ఎక్కడ పని చేస్తాము"}
            </p>
            <h2 id="coverage-heading" className={`akc-section-title${isEn ? "" : " lang-te"}`}>
              {isEn ? "Service Coverage" : "సేవా కవరేజ్"}
            </h2>
            <p className={`akc-section-subtitle${isEn ? "" : " lang-te"}`}>
              {isEn
                ? `${BUSINESS.name} serves Tirupati and covers temple destinations across Andhra Pradesh and South India.`
                : `${BUSINESS.name} తిరుపతికి సేవలు అందించి, ఆంధ్రప్రదేశ్ మరియు దక్షిణ భారతం అంతటా ఆలయ గమ్యస్థానాలను కవర్ చేస్తుంది.`}
            </p>
          </div>
          <ul
            className="akc-about-coverage__grid"
            role="list"
            aria-label={isEn ? "Service coverage areas" : "సేవా కవరేజ్ ప్రాంతాలు"}
          >
            {COVERAGE[locale].map((area) => (
              <li key={area} className="akc-about-coverage__item" role="listitem">
                <span className="akc-about-coverage__dot" aria-hidden="true" />
                <span className={isEn ? "" : "lang-te"}>{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BOTTOM CTA
          ══════════════════════════════════════════ */}
      <section className="akc-about-cta" aria-labelledby="about-cta-heading">
        <div className="akc-container">
          <h2
            id="about-cta-heading"
            className={`akc-about-cta__heading${isEn ? "" : " lang-te"}`}
          >
            {isEn ? "Ready to Travel with Us?" : "మాతో ప్రయాణించడానికి సిద్ధంగా ఉన్నారా?"}
          </h2>
          <p className={`akc-about-cta__sub${isEn ? "" : " lang-te"}`}>
            {isEn
              ? `Book a cab or tour package instantly on WhatsApp — we respond quickly and are available ${BUSINESS.availability} for all your Tirupati travel needs.`
              : `WhatsApp లో వెంటనే క్యాబ్ లేదా టూర్ ప్యాకేజీ బుక్ చేయండి — మేము త్వరగా స్పందిస్తాము మరియు మీ అన్ని తిరుపతి ప్రయాణ అవసరాలకు ${BUSINESS.availability} అందుబాటులో ఉంటాము.`}
          </p>
          <div className="akc-about-cta__btns">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="akc-btn akc-btn--wa akc-btn--lg"
              aria-label={isEn ? "Book a trip on WhatsApp" : "WhatsApp లో ట్రిప్ బుక్ చేయండి"}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className={isEn ? "" : "lang-te"}>
                {isEn ? "Book on WhatsApp" : "WhatsApp లో బుక్ చేయండి"}
              </span>
            </a>
            <Link
              href={`/${locale}/services`}
              className="akc-btn akc-btn--outline"
              aria-label={isEn ? "View all services" : "అన్ని సేవలు చూడండి"}
            >
              <span className={isEn ? "" : "lang-te"}>
                {isEn ? "View All Services" : "అన్ని సేవలు చూడండి"}
              </span>
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="akc-btn akc-btn--outline"
              aria-label={isEn ? "Contact us" : "మమ్మల్ని సంప్రదించండి"}
            >
              <span className={isEn ? "" : "lang-te"}>
                {isEn ? "Contact Us" : "సంప్రదించండి"}
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
