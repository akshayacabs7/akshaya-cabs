// Akshaya Cabs — Why Choose Us / What to Expect (TASK-23)
// /src/app/[lang]/why-choose-us/page.tsx
//
// RULES (strictly enforced):
//  - NO fake reviews, star ratings, aggregate scores, testimonial avatars, "5.0 stars",
//    "Google rating", review schema JSON-LD, or borrowed SVTT ratings.
//  - NO .svtt-* class names.
//  - No fabricated social proof of any kind.
//  - All content is factual: booking process, what is included, pricing transparency,
//    "How enquiries work" steps, and genuine FAQ.
//  - Bilingual EN + TE via params.lang.
//  - Genuinely invites customers to leave a real Google review AFTER travelling.

import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { BUSINESS } from "@/data/business";
import { SERVICES } from "@/data/services";
import { VEHICLES } from "@/data/vehicles";
import { PACKAGES } from "@/data/packages";
import { primaryWhatsAppUrl } from "@/lib/whatsapp";
import JsonLd from "@/components/seo/JsonLd";
import { buildFaqSchema } from "@/lib/schema";

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
      ? `Why Choose Akshaya Cabs | What to Expect | Tirupati`
      : `అక్షయ క్యాబ్స్ ఎందుకు ఎంచుకోవాలి | ఏమి ఆశించాలి | తిరుపతి`,
    description: isEn
      ? `Find out how Akshaya Cabs works — our booking process, what is included in every trip, how we handle special requests, and why Tirupati travellers choose us.`
      : `అక్షయ క్యాబ్స్ ఎలా పని చేస్తుందో తెలుసుకోండి — మా బుకింగ్ ప్రక్రియ, ప్రతి ట్రిప్‌లో ఏమి చేర్చబడిందో, మేము ప్రత్యేక అభ్యర్థనలను ఎలా నిర్వహిస్తామో.`,
    alternates: {
      canonical: `https://akshayacabs.com/${lang}/why-choose-us`,
      languages: {
        "en-IN": "https://akshayacabs.com/en/why-choose-us",
        "te-IN": "https://akshayacabs.com/te/why-choose-us",
        "x-default": "https://akshayacabs.com/en/why-choose-us",
      },
    },
    openGraph: {
      title: isEn ? "Why Choose Akshaya Cabs Tirupati" : "అక్షయ క్యాబ్స్ తిరుపతి ఎందుకు ఎంచుకోవాలి",
      description: isEn
        ? "Honest service, transparent pricing, experienced local drivers. No surprise charges."
        : "నిజాయితీ సేవ, పారదర్శక ధరలు, అనుభవజ్ఞులైన స్థానిక డ్రైవర్లు. ఆశ్చర్యకరమైన ఛార్జీలు లేవు.",
      url: `https://akshayacabs.com/${lang}/why-choose-us`,
    },
  };
}

// ── Data ──────────────────────────────────────────────────────────────────────

interface BilingualItem {
  en: string;
  te: string;
}

interface BookingStep {
  step: number;
  icon: string;
  title: BilingualItem;
  desc: BilingualItem;
}

const BOOKING_STEPS: BookingStep[] = [
  {
    step: 1,
    icon: "💬",
    title: { en: "Send a WhatsApp Message or Call", te: "WhatsApp మెసేజ్ పంపండి లేదా కాల్ చేయండి" },
    desc: {
      en: `Send us a WhatsApp message to ${BUSINESS.phone.primaryDisplay} with your trip details — pickup location, drop location, date, time, and number of passengers.`,
      te: `మీ ట్రిప్ వివరాలతో ${BUSINESS.phone.primaryDisplay} కు WhatsApp మెసేజ్ పంపండి — పికప్ స్థానం, డ్రాప్ స్థానం, తేదీ, సమయం మరియు ప్రయాణికుల సంఖ్య.`,
    },
  },
  {
    step: 2,
    icon: "🤙",
    title: { en: "We Confirm Availability & Fare", te: "మేము లభ్యత & ఫేర్ నిర్ధారిస్తాము" },
    desc: {
      en: "Our team checks availability for your date and vehicle type, then sends you the confirmed fare — including driver allowance. No hidden charges.",
      te: "మా బృందం మీ తేదీ మరియు వాహన రకానికి లభ్యతను తనిఖీ చేసి, డ్రైవర్ అలవెన్స్ సహా నిర్ధారించబడిన ఫేర్ పంపుతుంది. దాచిన ఛార్జీలు లేవు.",
    },
  },
  {
    step: 3,
    icon: "✅",
    title: { en: "Confirm Your Booking", te: "మీ బుకింగ్ నిర్ధారించండి" },
    desc: {
      en: "Once you agree to the fare, your booking is confirmed. No advance payment is required — cash is paid directly to the driver at the end of the trip.",
      te: "మీరు ఫేర్‌కు అంగీకరించిన తర్వాత, మీ బుకింగ్ నిర్ధారించబడుతుంది. అడ్వాన్స్ చెల్లింపు అవసరం లేదు — ట్రిప్ చివరలో నగదు నేరుగా డ్రైవర్‌కు చెల్లించబడుతుంది.",
    },
  },
  {
    step: 4,
    icon: "🚗",
    title: { en: "Driver Arrives at Your Pickup Point", te: "డ్రైవర్ మీ పికప్ పాయింట్‌కు వస్తాడు" },
    desc: {
      en: "Your driver arrives on time at the agreed pickup location. You will receive the driver's contact details before the trip so you can coordinate easily.",
      te: "మీ డ్రైవర్ అంగీకరించిన పికప్ స్థానంలో సమయానికి వస్తాడు. ట్రిప్‌కు ముందు మీరు సులభంగా సమన్వయం చేసుకోవడానికి డ్రైవర్ సంప్రదింపు వివరాలు అందుకుంటారు.",
    },
  },
  {
    step: 5,
    icon: "🙏",
    title: { en: "Enjoy Your Journey", te: "మీ ప్రయాణాన్ని ఆనందించండి" },
    desc: {
      en: "Travel comfortably in a clean, AC vehicle. If you have questions during the trip, our team is reachable on WhatsApp.",
      te: "శుభ్రమైన, AC వాహనంలో సౌకర్యంగా ప్రయాణించండి. ట్రిప్ సమయంలో మీకు ప్రశ్నలు ఉంటే, మా బృందం WhatsApp లో అందుబాటులో ఉంటుంది.",
    },
  },
];

interface ExpectItem {
  icon: string;
  title: BilingualItem;
  body: BilingualItem;
}

const EXPECT_ITEMS: ExpectItem[] = [
  {
    icon: "🚗",
    title: { en: "Clean, AC Vehicles", te: "శుభ్రమైన, AC వాహనాలు" },
    body: {
      en: `A fleet of ${VEHICLES.length} AC vehicle categories — from 4-seater sedans to 12-seater Force Urbania and Tempo Travellers. Your vehicle will be clean and ready at the agreed pickup time.`,
      te: `4-సీటర్ సెడాన్‌ల నుండి 12-సీటర్ ఫోర్స్ అర్బానియా మరియు టెంపో ట్రావెలర్‌ల వరకు ${VEHICLES.length} AC వాహన వర్గాల ఫ్లీట్. మీ వాహనం అంగీకరించిన పికప్ సమయంలో శుభ్రంగా మరియు సిద్ధంగా ఉంటుంది.`,
    },
  },
  {
    icon: "🧭",
    title: { en: "Experienced Local Drivers", te: "అనుభవజ్ఞులైన స్థానిక డ్రైవర్లు" },
    body: {
      en: "Our drivers know Tirupati, the Tirumala ghat road, and pilgrimage routes thoroughly. You can trust them with your family and your schedule.",
      te: "మా డ్రైవర్లకు తిరుపతి, తిరుమల ఘాట్ రోడ్ మరియు యాత్రా మార్గాల పూర్తి అవగాహన ఉంది. మీరు మీ కుటుంబం మరియు షెడ్యూల్‌ను వారికి నమ్మకంగా అప్పగించవచ్చు.",
    },
  },
  {
    icon: "📋",
    title: { en: "What Is Included in Every Trip", te: "ప్రతి ట్రిప్‌లో ఏమి చేర్చబడింది" },
    body: {
      en: "All displayed fares include driver allowance and fuel costs. Tolls, parking, and state permits are paid separately by the customer at actuals. Temple darshan tickets are never included.",
      te: "అన్ని ప్రదర్శించబడిన ఫేర్‌లు డ్రైవర్ అలవెన్స్ మరియు ఇంధన ఖర్చులు చేర్చబడి ఉంటాయి. టోల్లు, పార్కింగ్ మరియు రాష్ట్ర పర్మిట్లు కస్టమర్ అసలు వ్యయంలో వేర్వేరుగా చెల్లించబడతాయి. ఆలయ దర్శన టికెట్లు ఎప్పుడూ చేర్చబడవు.",
    },
  },
  {
    icon: "💰",
    title: { en: "No Surprise Charges", te: "ఆశ్చర్యకరమైన ఛార్జీలు లేవు" },
    body: {
      en: "The fare confirmed over WhatsApp is the fare you pay. We do not add fuel surcharges, night charges, or waiting charges without agreeing on them first.",
      te: "WhatsApp లో నిర్ధారించబడిన ఫేర్ మీరు చెల్లించే ఫేర్. మేము ముందు అంగీకరించకుండా ఇంధన సర్‌చార్జీలు, రాత్రి ఛార్జీలు లేదా వేచి ఉండే ఛార్జీలు జోడించము.",
    },
  },
  {
    icon: "🕐",
    title: { en: "Available 24 Hours a Day", te: "రోజుకు 24 గంటలు అందుబాటులో" },
    body: {
      en: `We operate ${BUSINESS.availability} — including early morning Tirumala departures, late-night airport pickups, and all public holidays.`,
      te: `మేము ${BUSINESS.availability} పని చేస్తాము — తెల్లవారుజామున తిరుమల బయలుదేరడాలు, అర్ధరాత్రి విమానాశ్రయ పికప్‌లు మరియు అన్ని సార్వజనిక సెలవులు సహా.`,
    },
  },
  {
    icon: "🚫",
    title: { en: "No App, No Login, No Online Payment", te: "యాప్ లేదు, లాగిన్ లేదు, ఆన్‌లైన్ చెల్లింపు లేదు" },
    body: {
      en: "We keep it simple. WhatsApp or call us, confirm your fare, travel, and pay cash to the driver. No downloads, no accounts, no online payment required.",
      te: "మేము సరళంగా ఉంచుతాము. WhatsApp చేయండి లేదా కాల్ చేయండి, మీ ఫేర్ నిర్ధారించండి, ప్రయాణించండి మరియు డ్రైవర్‌కు నగదు చెల్లించండి. డౌన్‌లోడ్‌లు, అకౌంట్‌లు, ఆన్‌లైన్ చెల్లింపు అవసరం లేదు.",
    },
  },
];

interface FAQ {
  q: BilingualItem;
  a: BilingualItem;
}

const FAQS: FAQ[] = [
  {
    q: { en: "Can I cancel or change my booking?", te: "నేను నా బుకింగ్ రద్దు చేయవచ్చా లేదా మార్చవచ్చా?" },
    a: {
      en: "Yes. Contact us on WhatsApp as early as possible. Since no advance payment is taken, cancellation is straightforward — just inform us before the driver departs.",
      te: "అవును. వీలైనంత త్వరగా WhatsApp లో మమ్మల్ని సంప్రదించండి. అడ్వాన్స్ చెల్లింపు తీసుకోనందున, రద్దు చేయడం సరళమైనది — డ్రైవర్ బయలుదేరే ముందు మాకు తెలియజేయండి.",
    },
  },
  {
    q: { en: "Do you guarantee darshan slots or queue passes?", te: "మీరు దర్శన స్లాట్‌లు లేదా క్యూ పాస్‌లకు హామీ ఇస్తారా?" },
    a: {
      en: "No. Darshan tickets, seeghra seva, and prasadam services are managed entirely by TTD (Tirumala Tirupati Devasthanams). We provide the transportation; darshan arrangements are always the traveller's responsibility.",
      te: "లేదు. దర్శన టికెట్లు, సీఘ్ర సేవ మరియు ప్రసాదం సేవలు పూర్తిగా TTD (తిరుమల తిరుపతి దేవస్థానం) ద్వారా నిర్వహించబడతాయి. మేము రవాణా అందిస్తాము; దర్శన ఏర్పాట్లు ఎల్లప్పుడూ ప్రయాణికుని బాధ్యత.",
    },
  },
  {
    q: { en: "Are tolls and parking included in the fare?", te: "టోల్లు మరియు పార్కింగ్ ఫేర్‌లో చేర్చబడ్డాయా?" },
    a: {
      en: "No. Tolls, state border permits, and parking charges are paid by the customer at actuals during the journey. We always mention this when confirming your booking.",
      te: "లేదు. టోల్లు, రాష్ట్ర సరిహద్దు పర్మిట్లు మరియు పార్కింగ్ ఛార్జీలు ప్రయాణ సమయంలో కస్టమర్ అసలు వ్యయంలో చెల్లించబడతాయి. మేము మీ బుకింగ్ నిర్ధారించేటప్పుడు ఇది ఎల్లప్పుడూ పేర్కొంటాము.",
    },
  },
  {
    q: { en: "What if my flight or train is delayed?", te: "నా విమానం లేదా రైలు ఆలస్యమైతే ఏమి జరుగుతుంది?" },
    a: {
      en: "Please inform us on WhatsApp as soon as you know about a delay. We will adjust the driver accordingly where possible. We do not charge for delays caused by flight or train schedules.",
      te: "మీకు ఆలస్యం గురించి తెలిసిన వెంటనే WhatsApp లో తెలియజేయండి. సాధ్యమైనంత వరకు మేము డ్రైవర్‌ను తదనుగుణంగా సర్దుబాటు చేస్తాము. విమానం లేదా రైలు షెడ్యూల్‌ల వల్ల కలిగిన ఆలస్యానికి మేము ఛార్జ్ చేయము.",
    },
  },
  {
    q: { en: "Can you arrange travel for large groups?", te: "మీరు పెద్ద గ్రూప్‌లకు ప్రయాణ ఏర్పాటు చేయగలరా?" },
    a: {
      en: `Yes. We have Tempo Travellers and Force Urbania luxury vans that seat up to 12 passengers, and we can coordinate multiple vehicles for larger groups. Share your group size on WhatsApp and we will advise the best option.`,
      te: `అవును. మాకు 12 మంది ప్రయాణికులు కూర్చోగలిగే టెంపో ట్రావెలర్‌లు మరియు ఫోర్స్ అర్బానియా వ్యాన్లు ఉన్నాయి, అలాగే పెద్ద గ్రూప్‌లకు బహుళ వాహనాలను సమన్వయం చేయగలము. WhatsApp లో మీ గ్రూప్ పరిమాణాన్ని పంచుకోండి, మేము ఉత్తమ ఎంపికను సూచిస్తాము.`,
    },
  },
  {
    q: { en: "How do I know the fare before I travel?", te: "ప్రయాణించే ముందు నేను ఫేర్ ఎలా తెలుసుకుంటాను?" },
    a: {
      en: `All indicative fares are published on our services and packages pages. Your exact fare is confirmed in writing on WhatsApp before you travel — we never demand a final amount different from what was confirmed.`,
      te: `అన్ని సూచనాత్మక ఫేర్‌లు మా సేవలు మరియు ప్యాకేజీల పేజీలలో ప్రచురించబడ్డాయి. మీరు ప్రయాణించే ముందు మీ ఖచ్చితమైన ఫేర్ WhatsApp లో లిఖితపూర్వకంగా నిర్ధారించబడుతుంది — నిర్ధారించబడిన దానికంటే భిన్నమైన తుది మొత్తాన్ని మేము ఎప్పుడూ డిమాండ్ చేయము.`,
    },
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function WhyChooseUsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (lang === "te" ? "te" : "en") as Locale;
  const isEn = locale === "en";
  const waUrl = primaryWhatsAppUrl();

  const faqSchemaData = FAQS.map((faq) => ({
    question: isEn ? faq.q.en : faq.q.te,
    answer: isEn ? faq.a.en : faq.a.te,
  }));

  return (
    <>
      <JsonLd data={buildFaqSchema(faqSchemaData)} />
      {/* ══════════════════════════════════════════
          HERO
          ══════════════════════════════════════════ */}
      <header className="akc-trust-hero">
        <div className="akc-container akc-trust-hero__inner">
          <span className="akc-trust-hero__label">
            ✅ {isEn ? "Travel with Confidence" : "విశ్వాసంతో ప్రయాణించండి"}
          </span>
          <h1 className={`akc-trust-hero__h1${isEn ? "" : " lang-te"}`}>
            {isEn ? (
              <>
                What to Expect When You Travel with{" "}
                <span className="akc-trust-hero__h1-accent">Akshaya Cabs</span>
              </>
            ) : (
              <>
                <span className="akc-trust-hero__h1-accent">అక్షయ క్యాబ్స్</span>తో ప్రయాణించేటప్పుడు ఏమి ఆశించాలి
              </>
            )}
          </h1>
          <p className={`akc-trust-hero__desc${isEn ? "" : " lang-te"}`}>
            {isEn
              ? "Honest service, transparent pricing, and experienced local drivers — no surprise charges, no fake promises. Here is exactly how we work."
              : "నిజాయితీ సేవ, పారదర్శక ధరలు మరియు అనుభవజ్ఞులైన స్థానిక డ్రైవర్లు — ఆశ్చర్యకరమైన ఛార్జీలు లేవు, నకిలీ వాగ్దానాలు లేవు. మేము ఎలా పని చేస్తామో ఇక్కడ ఉంది."}
          </p>
          <div className="akc-trust-hero__ctas">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="akc-btn akc-btn--wa akc-btn--lg"
              aria-label={isEn ? "Book on WhatsApp" : "WhatsApp లో బుక్ చేయండి"}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className={isEn ? "" : "lang-te"}>
                {isEn ? "Book on WhatsApp" : "WhatsApp లో బుక్ చేయండి"}
              </span>
            </a>
            <Link
              href={`/${locale}/tour-packages`}
              className="akc-btn akc-btn--outline-light akc-btn--lg"
            >
              <span className={isEn ? "" : "lang-te"}>
                {isEn ? "View Tour Packages" : "టూర్ ప్యాకేజీలు చూడండి"}
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════
          KEY FACTS STRIP — factual only
          ══════════════════════════════════════════ */}
      <div className="akc-trust-facts" aria-label={isEn ? "Key facts" : "ముఖ్య వాస్తవాలు"}>
        <div className="akc-container">
          <ul className="akc-trust-facts__grid" role="list">
            {[
              { val: String(PACKAGES.length), label: { en: "Tour Packages", te: "టూర్ ప్యాకేజీలు" } },
              { val: String(VEHICLES.length), label: { en: "Vehicle Types", te: "వాహన రకాలు" } },
              { val: String(SERVICES.length), label: { en: "Services", te: "సేవలు" } },
              { val: "24/7", label: { en: "Availability", te: "అందుబాటు" } },
            ].map((s) => (
              <li key={s.val + s.label.en} className="akc-trust-facts__item" role="listitem">
                <span className="akc-trust-facts__val">{s.val}</span>
                <span className={`akc-trust-facts__label${isEn ? "" : " lang-te"}`}>
                  {s.label[locale]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          HOW BOOKING WORKS — 5-step flow
          ══════════════════════════════════════════ */}
      <section className="akc-trust-flow" aria-labelledby="flow-heading">
        <div className="akc-container">
          <div className="akc-section-header">
            <p className="akc-section-label">
              {isEn ? "How It Works" : "ఇది ఎలా పని చేస్తుంది"}
            </p>
            <h2 id="flow-heading" className={`akc-section-title${isEn ? "" : " lang-te"}`}>
              {isEn ? "How to Book — 5 Simple Steps" : "ఎలా బుక్ చేయాలి — 5 సరళ దశలు"}
            </h2>
            <p className={`akc-section-subtitle${isEn ? "" : " lang-te"}`}>
              {isEn
                ? "No app, no online payment, no account required. Just WhatsApp or call."
                : "యాప్, ఆన్‌లైన్ చెల్లింపు, అకౌంట్ అవసరం లేదు. WhatsApp లేదా కాల్ మాత్రమే."}
            </p>
          </div>

          <ol className="akc-trust-flow__steps" aria-label={isEn ? "Booking steps" : "బుకింగ్ దశలు"}>
            {BOOKING_STEPS.map((s) => (
              <li key={s.step} className="akc-trust-flow__step">
                <div className="akc-trust-flow__step-num" aria-hidden="true">{s.step}</div>
                <div className="akc-trust-flow__step-body">
                  <span className="akc-trust-flow__step-icon" aria-hidden="true">{s.icon}</span>
                  <h3 className={`akc-trust-flow__step-title${isEn ? "" : " lang-te"}`}>
                    {s.title[locale]}
                  </h3>
                  <p className={`akc-trust-flow__step-desc${isEn ? "" : " lang-te"}`}>
                    {s.desc[locale]}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHAT TO EXPECT GRID
          ══════════════════════════════════════════ */}
      <section className="akc-trust-expect" aria-labelledby="expect-heading">
        <div className="akc-container">
          <div className="akc-section-header akc-section-header--center">
            <p className="akc-section-label">
              {isEn ? "Our Commitment" : "మా నిబద్ధత"}
            </p>
            <h2 id="expect-heading" className={`akc-section-title${isEn ? "" : " lang-te"}`}>
              {isEn ? "What Every Trip Includes" : "ప్రతి ట్రిప్‌లో ఏమి ఉంటుంది"}
            </h2>
          </div>

          <ul
            className="akc-trust-expect__grid"
            role="list"
            aria-label={isEn ? "What to expect when travelling with Akshaya Cabs" : "అక్షయ క్యాబ్స్‌తో ప్రయాణించేటప్పుడు ఏమి ఆశించాలి"}
          >
            {EXPECT_ITEMS.map((item) => (
              <li key={item.title.en} className="akc-trust-expect-card">
                <span className="akc-trust-expect-card__icon" aria-hidden="true">{item.icon}</span>
                <h3 className={`akc-trust-expect-card__title${isEn ? "" : " lang-te"}`}>
                  {item.title[locale]}
                </h3>
                <p className={`akc-trust-expect-card__desc${isEn ? "" : " lang-te"}`}>
                  {item.body[locale]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PRICING TRANSPARENCY CALLOUT
          ══════════════════════════════════════════ */}
      <section className="akc-trust-pricing" aria-labelledby="pricing-heading">
        <div className="akc-container">
          <div className="akc-trust-pricing__card">
            <div className="akc-trust-pricing__icon" aria-hidden="true">💰</div>
            <div className="akc-trust-pricing__body">
              <h2 id="pricing-heading" className={`akc-trust-pricing__title${isEn ? "" : " lang-te"}`}>
                {isEn ? "Pricing Transparency" : "ధర పారదర్శకత"}
              </h2>
              <p className={`akc-trust-pricing__desc${isEn ? "" : " lang-te"}`}>
                {isEn ? (
                  <>
                    All indicative fares are published on our{" "}
                    <Link href={`/${locale}/services`} className="akc-link">Services</Link> and{" "}
                    <Link href={`/${locale}/tour-packages`} className="akc-link">Tour Packages</Link> pages.
                    Your exact fare is confirmed in writing on WhatsApp before you travel.
                  </>
                ) : (
                  <>
                    అన్ని సూచనాత్మక ఫేర్‌లు మా{" "}
                    <Link href={`/${locale}/services`} className="akc-link">సేవలు</Link> మరియు{" "}
                    <Link href={`/${locale}/tour-packages`} className="akc-link">టూర్ ప్యాకేజీలు</Link> పేజీలలో ప్రచురించబడ్డాయి.
                    మీరు ప్రయాణించే ముందు మీ ఖచ్చితమైన ఫేర్ WhatsApp లో లిఖితపూర్వకంగా నిర్ధారించబడుతుంది.
                  </>
                )}
              </p>

              <ul className="akc-trust-pricing__includes" aria-label={isEn ? "Fare includes" : "ఫేర్‌లో చేర్చబడింది"}>
                {[
                  { en: "✅ Driver allowance — included", te: "✅ డ్రైవర్ అలవెన్స్ — చేర్చబడింది" },
                  { en: "✅ Fuel — included", te: "✅ ఇంధనం — చేర్చబడింది" },
                  { en: "⚠ Tolls & parking — paid at actuals by customer", te: "⚠ టోల్లు & పార్కింగ్ — కస్టమర్ అసలు వ్యయంలో చెల్లిస్తారు" },
                  { en: "⚠ State permits — paid at actuals by customer", te: "⚠ రాష్ట్ర పర్మిట్లు — కస్టమర్ అసలు వ్యయంలో చెల్లిస్తారు" },
                  { en: "🚫 Darshan tickets — not included, managed by TTD", te: "🚫 దర్శన టికెట్లు — చేర్చబడలేదు, TTD ద్వారా నిర్వహించబడుతుంది" },
                ].map((item) => (
                  <li key={item.en} className={`akc-trust-pricing__item${isEn ? "" : " lang-te"}`}>
                    {item[locale]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
          ══════════════════════════════════════════ */}
      <section className="akc-trust-faq" aria-labelledby="trust-faq-heading">
        <div className="akc-container akc-trust-faq__inner">
          <div className="akc-section-header">
            <p className="akc-section-label">
              {isEn ? "Common Questions" : "సాధారణ ప్రశ్నలు"}
            </p>
            <h2 id="trust-faq-heading" className={`akc-section-title${isEn ? "" : " lang-te"}`}>
              {isEn ? "Frequently Asked Questions" : "తరచుగా అడిగే ప్రశ్నలు"}
            </h2>
          </div>

          <dl className="akc-trust-faq__list">
            {FAQS.map((faq, i) => (
              <div key={i} className="akc-trust-faq__item">
                <dt className={`akc-trust-faq__q${isEn ? "" : " lang-te"}`}>
                  {faq.q[locale]}
                </dt>
                <dd className={`akc-trust-faq__a${isEn ? "" : " lang-te"}`}>
                  {faq.a[locale]}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GOOGLE MAPS — invite real reviews
          (no fabricated ratings displayed)
          ══════════════════════════════════════════ */}
      <section className="akc-trust-maps-cta" aria-labelledby="maps-cta-heading">
        <div className="akc-container">
          <div className="akc-trust-maps-cta__card">
            <div className="akc-trust-maps-cta__icon" aria-hidden="true">📍</div>
            <div className="akc-trust-maps-cta__body">
              <h2 id="maps-cta-heading" className={`akc-trust-maps-cta__title${isEn ? "" : " lang-te"}`}>
                {isEn ? "Find Us on Google Maps" : "Google Maps లో మాను కనుగొనండి"}
              </h2>
              <p className={`akc-trust-maps-cta__desc${isEn ? "" : " lang-te"}`}>
                {isEn
                  ? "Have you travelled with Akshaya Cabs? We would love to hear from you. Find us on Google Maps and leave a genuine review — it helps other pilgrims choose a trusted service."
                  : "మీరు అక్షయ క్యాబ్స్‌తో ప్రయాణించారా? మీ అభిప్రాయాన్ని వినాలని ఉంది. Google Maps లో మాను కనుగొని నిజమైన రివ్యూ వదలండి — ఇది ఇతర యాత్రికులకు విశ్వసనీయ సేవను ఎంచుకోవడంలో సహాయపడుతుంది."}
              </p>
              <a
                href={BUSINESS.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="akc-btn akc-btn--primary"
                aria-label={isEn ? "Find Akshaya Cabs on Google Maps" : "Google Maps లో అక్షయ క్యాబ్స్ కనుగొనండి"}
              >
                {isEn ? "Open on Google Maps ↗" : "Google Maps లో తెరవండి ↗"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BOTTOM CTA
          ══════════════════════════════════════════ */}
      <section className="akc-trust-cta" aria-labelledby="trust-cta-heading">
        <div className="akc-container">
          <h2 id="trust-cta-heading" className={`akc-trust-cta__heading${isEn ? "" : " lang-te"}`}>
            {isEn ? "Ready to Plan Your Journey?" : "మీ ప్రయాణాన్ని ప్లాన్ చేయడానికి సిద్ధంగా ఉన్నారా?"}
          </h2>
          <p className={`akc-trust-cta__sub${isEn ? "" : " lang-te"}`}>
            {isEn
              ? `Call or WhatsApp us anytime — available ${BUSINESS.availability} for cab bookings, temple tours, and airport or station transfers.`
              : `ఎప్పుడైనా కాల్ చేయండి లేదా WhatsApp చేయండి — క్యాబ్ బుకింగ్‌లు, ఆలయ పర్యటనలు మరియు విమానాశ్రయం లేదా స్టేషన్ బదిలీలకు ${BUSINESS.availability} అందుబాటులో ఉంది.`}
          </p>
          <div className="akc-trust-cta__btns">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="akc-btn akc-btn--wa akc-btn--lg"
              aria-label={isEn ? "Book a trip on WhatsApp" : "WhatsApp లో ట్రిప్ బుక్ చేయండి"}
            >
              <span className={isEn ? "" : "lang-te"}>
                {isEn ? "Book on WhatsApp" : "WhatsApp లో బుక్ చేయండి"}
              </span>
            </a>
            <a
              href={BUSINESS.phone.primaryTel}
              className="akc-btn akc-btn--outline-light akc-btn--lg"
              aria-label={`Call ${BUSINESS.phone.primaryDisplay}`}
            >
              📞 {BUSINESS.phone.primaryDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
