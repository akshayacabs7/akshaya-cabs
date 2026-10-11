/**
 * Akshaya Cabs — AkcWhyChooseSection (TASK-12)
 * 6 factual trust pillars — no fake ratings, no invented numbers.
 * Server Component. Original design. Locale-aware.
 * No .svtt-* class names.
 */

import type { Locale } from "@/i18n/config";

interface Pillar {
  id: string;
  icon: React.ReactNode;
  titleEn: string;
  titleTe: string;
  bodyEn: string;
  bodyTe: string;
}

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const DriverIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);
const CarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
    <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
);
const RupeeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
  </svg>
);
const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
  </svg>
);

const PILLARS: Pillar[] = [
  {
    id: "availability",
    icon: <ClockIcon />,
    titleEn: "Available 24 / 7",
    titleTe: "24 / 7 అందుబాటులో",
    bodyEn: "Round-the-clock service — early morning Tirumala runs, late-night airport pickups, or last-minute pilgrimage plans. We are always ready.",
    bodyTe: "రౌండ్-ది-క్లాక్ సేవ — తెల్లవారు జామున తిరుమల ప్రయాణాలు, రాత్రిపూట విమానాశ్రయ పికప్‌లు, లేదా అత్యవసర యాత్ర ప్రణాళికలు. మేము ఎల్లప్పుడూ సిద్ధంగా ఉన్నాం.",
  },
  {
    id: "drivers",
    icon: <DriverIcon />,
    titleEn: "Local Expert Drivers",
    titleTe: "స్థానిక నిపుణ డ్రైవర్లు",
    bodyEn: "Professional drivers who know every temple route, every ghat road section, and every shortcut — ensuring a safe and comfortable journey.",
    bodyTe: "ప్రతి దేవాలయ మార్గం, ప్రతి ఘాట్ రోడ్ సెక్షన్ మరియు ప్రతి షార్ట్‌కట్ తెలిసిన నిపుణ డ్రైవర్లు.",
  },
  {
    id: "fleet",
    icon: <CarIcon />,
    titleEn: "Well-Maintained Fleet",
    titleTe: "చక్కగా నిర్వహించిన వాహనాలు",
    bodyEn: "7 vehicle classes from economy Dzire to spacious Tempo Traveller — all regularly serviced, air-conditioned, Wi‑Fi equipped, and thoroughly cleaned before every trip.",
    bodyTe: "ఎకానమీ Dzire నుండి విశాలమైన Tempo Traveller వరకు 7 వాహన తరగతులు — అన్నీ క్రమం తప్పకుండా సర్వీస్ చేయబడతాయి, AC, Wi‑Fi సౌకర్యంతో ఉంటాయి.",
  },
  {
    id: "pricing",
    icon: <RupeeIcon />,
    titleEn: "Transparent Pricing",
    titleTe: "పారదర్శక ధరలు",
    bodyEn: "No hidden charges. Fixed rates for Tirumala tours, packages, and outstation trips. Tolls and parking are extra — always disclosed upfront.",
    bodyTe: "దాచిన ఛార్జీలు లేవు. తిరుమల టూర్లు, ప్యాకేజీలు మరియు అవుట్‌స్టేషన్ ట్రిప్పులకు స్థిర ధరలు. టోల్స్ మరియు పార్కింగ్ అదనంగా ఉంటాయి.",
  },
  {
    id: "local",
    icon: <PinIcon />,
    titleEn: "Tirupati-Based",
    titleTe: "తిరుపతిలో ఉన్నాం",
    bodyEn: "Based in Tirupati with deep knowledge of Tirumala darshan timings, temple queues, and the best routes across Andhra Pradesh.",
    bodyTe: "తిరుమల దర్శన సమయాలు, ఆలయ క్యూలు మరియు ఆంధ్రప్రదేశ్ అంతటా అత్యుత్తమ మార్గాల గురించి లోతైన జ్ఞానంతో తిరుపతిలో ఉన్నాం.",
  },
  {
    id: "whatsapp",
    icon: <WhatsAppIcon />,
    titleEn: "WhatsApp-First Booking",
    titleTe: "WhatsApp ద్వారా బుకింగ్",
    bodyEn: "No complicated apps or forms. Just WhatsApp us your trip details and we confirm within minutes — simple, fast, and personal.",
    bodyTe: "సంక్లిష్టమైన యాప్‌లు లేదా ఫారాలు అవసరం లేదు. మీ ట్రిప్ వివరాలను WhatsApp చేయండి — మేము నిమిషాలలో నిర్ధారిస్తాం.",
  },
];

interface Props { locale: Locale; }

export default function AkcWhyChooseSection({ locale }: Props) {
  const isEn = locale === "en";

  return (
    <section className="akc-section akc-why" aria-labelledby="why-heading">
      <div className="akc-container">

        {/* ── Header ── */}
        <div className="akc-section-header">
          <p className="akc-section-label">{isEn ? "Why Travel With Us" : "మమ్మల్ని ఎందుకు ఎంచుకోవాలి"}</p>
          <h2 id="why-heading" className="akc-section-title">
            {isEn ? "Tirupati's Trusted Cab Service" : "తిరుపతి నమ్మకమైన క్యాబ్ సేవ"}
          </h2>
          <p className="akc-section-subtitle">
            {isEn
              ? "From Tirumala to South India — we have driven pilgrims and travellers safely, comfortably, and on time across Andhra Pradesh."
              : "తిరుమల నుండి దక్షిణ భారతం వరకు — మేము యాత్రికులను మరియు ప్రయాణికులను సురక్షితంగా, సౌకర్యంగా మరియు సమయానికి తీసుకెళ్ళాం."}
          </p>
        </div>

        {/* ── 6-pillar grid ── */}
        <ul role="list" className="akc-why__grid">
          {PILLARS.map((p) => (
            <li key={p.id} className="akc-why__card">
              <div className="akc-why__icon" aria-hidden="true">{p.icon}</div>
              <h3 className={`akc-why__title${locale === "te" ? " lang-te" : ""}`}>
                {isEn ? p.titleEn : p.titleTe}
              </h3>
              <p className={`akc-why__body${locale === "te" ? " lang-te" : ""}`}>
                {isEn ? p.bodyEn : p.bodyTe}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
