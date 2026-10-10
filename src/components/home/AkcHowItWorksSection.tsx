/**
 * Akshaya Cabs — AkcHowItWorksSection (TASK-12)
 * 4-step WhatsApp booking process. Server Component.
 * No .svtt-* class names. Locale-aware.
 */

import Link from "next/link";
import { primaryWhatsAppUrl } from "@/lib/whatsapp";
import type { Locale } from "@/i18n/config";

interface Step {
  num: string;
  icon: string;
  titleEn: string;
  titleTe: string;
  descEn: string;
  descTe: string;
}

const STEPS: Step[] = [
  {
    num: "01",
    icon: "🛕",
    titleEn: "Pick Your Service",
    titleTe: "మీ సేవను ఎంచుకోండి",
    descEn: "Browse our packages, vehicle classes, or trip types — temple tour, outstation, local, airport, or custom.",
    descTe: "మా ప్యాకేజీలు, వాహన తరగతులు లేదా ట్రిప్ రకాలు — దేవాలయ టూర్, అవుట్‌స్టేషన్, స్థానిక, విమానాశ్రయం లేదా కస్టమ్ — బ్రౌజ్ చేయండి.",
  },
  {
    num: "02",
    icon: "💬",
    titleEn: "WhatsApp Your Details",
    titleTe: "WhatsApp చేయండి",
    descEn: "Send your pickup location, destination, date, and group size on WhatsApp — no app or registration needed.",
    descTe: "మీ పికప్ స్థానం, గమ్యం, తేదీ మరియు సమూహ పరిమాణాన్ని WhatsApp లో పంపండి — యాప్ లేదా నమోదు అవసరం లేదు.",
  },
  {
    num: "03",
    icon: "✅",
    titleEn: "Confirm Vehicle & Fare",
    titleTe: "వాహనం & ధర నిర్ధారించండి",
    descEn: "We confirm your vehicle, driver details, and final fare — transparent pricing with no hidden charges.",
    descTe: "మేము మీ వాహనం, డ్రైవర్ వివరాలు మరియు తుది ధరను నిర్ధారిస్తాం — దాచిన ఛార్జీలు లేకుండా పారదర్శక ధర.",
  },
  {
    num: "04",
    icon: "🚗",
    titleEn: "Travel Comfortably",
    titleTe: "సుఖంగా ప్రయాణించండి",
    descEn: "Your driver arrives on time. Sit back, relax, and travel safely to your destination — darshan included.",
    descTe: "మీ డ్రైవర్ సమయానికి వస్తాడు. ఆరామంగా వెనక్కి కూర్చుని మీ గమ్యానికి సురక్షితంగా ప్రయాణించండి.",
  },
];

const WA_URL = primaryWhatsAppUrl();

interface Props { locale: Locale; }

export default function AkcHowItWorksSection({ locale }: Props) {
  const isEn = locale === "en";

  return (
    <section className="akc-section akc-section--alt akc-how-it-works" aria-labelledby="how-it-works-heading">
      <div className="akc-container">

        {/* ── Header ── */}
        <div className="akc-section-header akc-section-header--center">
          <p className="akc-section-label">{isEn ? "Simple Process" : "సులభమైన ప్రక్రియ"}</p>
          <h2 id="how-it-works-heading" className="akc-section-title">
            {isEn ? "How Booking Works" : "బుకింగ్ ఎలా చేయాలి"}
          </h2>
          <p className="akc-section-subtitle">
            {isEn
              ? "Book your Tirupati cab or tour package in 4 simple steps — no app required, just WhatsApp."
              : "4 సులభమైన దశల్లో మీ తిరుపతి క్యాబ్ లేదా టూర్ ప్యాకేజీని బుక్ చేసుకోండి — యాప్ అవసరం లేదు, కేవలం WhatsApp."}
          </p>
        </div>

        {/* ── Steps ── */}
        <ol className="akc-hiw__steps" aria-label={isEn ? "How to book a cab with Akshaya Cabs" : "అక్షయ క్యాబ్స్‌తో క్యాబ్ ఎలా బుక్ చేయాలి"}>
          {STEPS.map((step, idx) => (
            <li key={step.num} className="akc-hiw__step">
              {/* Connector (not last) */}
              {idx < STEPS.length - 1 && (
                <span className="akc-hiw__connector" aria-hidden="true" />
              )}
              {/* Circle */}
              <div className="akc-hiw__circle" aria-hidden="true">
                <span className="akc-hiw__emoji">{step.icon}</span>
                <span className="akc-hiw__num">{step.num}</span>
              </div>
              <h3 className={`akc-hiw__title${locale === "te" ? " lang-te" : ""}`}>
                {isEn ? step.titleEn : step.titleTe}
              </h3>
              <p className={`akc-hiw__desc${locale === "te" ? " lang-te" : ""}`}>
                {isEn ? step.descEn : step.descTe}
              </p>
            </li>
          ))}
        </ol>

        {/* ── CTAs ── */}
        <div className="akc-hiw__ctas">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="akc-btn akc-btn--wa akc-btn--lg"
            aria-label={isEn ? "Start booking on WhatsApp" : "WhatsApp లో బుకింగ్ ప్రారంభించండి"}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            {isEn ? "Book on WhatsApp" : "WhatsApp లో బుక్ చేయండి"}
          </a>
          <Link href={`/${locale}/request-a-quote`} className="akc-btn akc-btn--secondary">
            {isEn ? "Request a Quote" : "కోటేషన్ అభ్యర్థించండి"}
          </Link>
        </div>
      </div>
    </section>
  );
}
