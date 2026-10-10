// Akshaya Cabs — Pickup & Drop Page (TASK-17)
// /[lang]/pickup-drop — locale-aware, bilingual EN+TE
// Server Component. No SVTT identity. No .svtt-* class names.
//
// Sections:
//  1. Page hero (dark gradient + 2 CTAs)
//  2. Quick-jump navigation strip
//  3. Trip context selector context (airport/railway/tirumala/local/outstation/custom)
//  4. 6 transfer service cards (icon + route + steps + WA CTA)
//  5. Important notes (outstation, driver allowance, date/time note)
//  6. How booking works (4 steps)
//  7. Bottom CTA strip

import type { Metadata } from "next";
import Link from "next/link";
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
    ? "పికప్ & డ్రాప్ సేవలు | అక్షయ క్యాబ్స్ — తిరుపతి బదిలీ సేవలు"
    : "Pickup & Drop Services | Akshaya Cabs — Tirupati Transfer Services";

  const description = isTe
    ? "తిరుపతిలో విమానాశ్రయ పికప్ & డ్రాప్, రైల్వే స్టేషన్ బదిలీలు, తిరుమల టాక్సీ, హోటల్ బదిలీలు & స్థానిక పికప్/డ్రాప్. 24/7 అందుబాటులో. WhatsApp లో వెంటనే బుక్ చేయండి."
    : "Airport pickup & drop, railway station transfers, Tirumala taxi, hotel transfers & local pickup/drop in Tirupati. One-way & roundtrip. Available 24/7. Book on WhatsApp.";

  return {
    title,
    description,
    alternates: {
      canonical: `https://akshayacabs.com/${locale}/pickup-drop`,
      languages: {
        "en-IN": "https://akshayacabs.com/en/pickup-drop",
        "te-IN": "https://akshayacabs.com/te/pickup-drop",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://akshayacabs.com/${locale}/pickup-drop`,
      images: [{ url: "/images/akshaya/brand/og-cover.webp", width: 1200, height: 630 }],
    },
  };
}

// ── Shared SVGs ───────────────────────────────────────────────────

function WaIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.93 19.79 19.79 0 01.01 .28 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}

// ── Data — bilingual service cards ────────────────────────────────

interface PdService {
  id: string;
  emoji: string;
  accentColor: string;
  title: { en: string; te: string };
  subtitle: { en: string; te: string };
  desc: { en: string; te: string };
  tripTypes: { en: string[]; te: string[] }; // one-way / roundtrip / both
  from: { en: string; te: string };
  to: { en: string; te: string };
  steps: { en: string[]; te: string[] };
  ctaLabel: { en: string; te: string };
  waService: string; // EN always — WA message body
  waPickup: string;
  waDrop: string;
  outstation?: boolean;
}

const PD_SERVICES: PdService[] = [
  {
    id: "airport",
    emoji: "✈️",
    accentColor: "var(--akc-accent)",
    title: {
      en: "Airport Pickup & Drop",
      te: "విమానాశ్రయ పికప్ & డ్రాప్",
    },
    subtitle: {
      en: "Tirupati Airport (IATA: TIR) — All Flight Timings",
      te: "తిరుపతి విమానాశ్రయం — అన్ని ఫ్లైట్ సమయాలు",
    },
    desc: {
      en: "Professional airport transfer service to and from Tirupati Airport. Our drivers arrive on time for departures and are ready to receive you on arrival — for early morning, daytime, and late-night flights alike. Luggage assistance included.",
      te: "తిరుపతి విమానాశ్రయం నుండి మరియు వరకు వృత్తిపర విమానాశ్రయ బదిలీ సేవ. మా డ్రైవర్లు బయలుదేరే ముందు సమయానికి వస్తారు మరియు మీ రాకకు సిద్ధంగా ఉంటారు — తెల్లవారుజామున, పగటి, మరియు రాత్రి ఫ్లైట్లకు.",
    },
    tripTypes: {
      en: ["One-way", "Roundtrip"],
      te: ["వన్-వే", "రౌండ్‌ట్రిప్"],
    },
    from: { en: "Tirupati City / Hotels", te: "తిరుపతి నగరం / హోటళ్లు" },
    to: { en: "Tirupati Airport (TIR)", te: "తిరుపతి విమానాశ్రయం (TIR)" },
    steps: {
      en: [
        "Share your flight time & pickup address on WhatsApp",
        "We confirm vehicle type, driver name & estimated fare",
        "Driver arrives 15 min early — luggage assistance included",
        "Comfortable ride to the airport or your destination",
      ],
      te: [
        "WhatsApp లో మీ ఫ్లైట్ సమయం & పికప్ చిరునామా పంచుకోండి",
        "మేము వాహన రకం, డ్రైవర్ పేరు & అంచనా చార్జీ నిర్ధారిస్తాం",
        "డ్రైవర్ 15 నిమిషాల ముందుగా వస్తాడు — లగేజ్ సహాయం చేర్చబడింది",
        "విమానాశ్రయానికి లేదా మీ గమ్యానికి సౌకర్యవంతమైన ప్రయాణం",
      ],
    },
    ctaLabel: { en: "Book Airport Transfer", te: "విమానాశ్రయ బదిలీ బుక్ చేయండి" },
    waService: "Airport Pickup & Drop",
    waPickup: "Tirupati City",
    waDrop: "Tirupati Airport (TIR)",
  },
  {
    id: "railway",
    emoji: "🚆",
    accentColor: "#f59e0b",
    title: {
      en: "Railway Station Transfer",
      te: "రైల్వే స్టేషన్ బదిలీ",
    },
    subtitle: {
      en: "Tirupati Railway Station — 24/7 Pickup & Drop",
      te: "తిరుపతి రైల్వే స్టేషన్ — 24/7 పికప్ & డ్రాప్",
    },
    desc: {
      en: "Hassle-free cab service to and from Tirupati Railway Station. Whether you are arriving for a Tirumala darshan or departing after your pilgrimage, our driver will be waiting with a clean vehicle. Luggage handling assistance provided.",
      te: "తిరుపతి రైల్వే స్టేషన్ నుండి మరియు వరకు నిరంతరాయమైన క్యాబ్ సేవ. మీరు తిరుమల దర్శన్ కోసం వస్తున్నా లేదా యాత్ర తర్వాత వెళ్తున్నా, మా డ్రైవర్ శుభ్రమైన వాహనంతో వేచి ఉంటాడు.",
    },
    tripTypes: {
      en: ["One-way", "Roundtrip"],
      te: ["వన్-వే", "రౌండ్‌ట్రిప్"],
    },
    from: { en: "Tirupati Railway Station", te: "తిరుపతి రైల్వే స్టేషన్" },
    to: { en: "Hotels / Temples / City", te: "హోటళ్లు / ఆలయాలు / నగరం" },
    steps: {
      en: [
        "Share your train number and arrival time on WhatsApp",
        "Driver confirmed with name board at station exit",
        "Direct transfer to your hotel, temple, or destination",
        "Return trip available — just message us before you leave",
      ],
      te: [
        "WhatsApp లో మీ రైలు నంబర్ మరియు రాక సమయం పంచుకోండి",
        "స్టేషన్ ఎగ్జిట్ వద్ద నేమ్ బోర్డ్‌తో డ్రైవర్ నిర్ధారించబడ్డాడు",
        "మీ హోటల్, ఆలయం, లేదా గమ్యానికి నేరుగా బదిలీ",
        "రిటర్న్ ట్రిప్ అందుబాటులో — వెళ్లే ముందు మాకు మెసేజ్ పంపండి",
      ],
    },
    ctaLabel: { en: "Book Station Transfer", te: "స్టేషన్ బదిలీ బుక్ చేయండి" },
    waService: "Railway Station Transfer",
    waPickup: "Tirupati Railway Station",
    waDrop: "Hotels / Temples in Tirupati",
  },
  {
    id: "tirumala",
    emoji: "🛕",
    accentColor: "#0FAF9D",
    title: {
      en: "Tirumala Taxi",
      te: "తిరుమల టాక్సీ",
    },
    subtitle: {
      en: "Tirupati ↔ Tirumala — Ghat Road, 24/7",
      te: "తిరుపతి ↔ తిరుమల — ఘాట్ రోడ్డు, 24/7",
    },
    desc: {
      en: "Dedicated Tirupati to Tirumala taxi service by experienced local drivers who know the ghat roads perfectly. Safe, comfortable, and timely journeys for Tirumala darshan — one-way or roundtrip, available any hour of the day or night.",
      te: "ఘాట్ రోడ్లను పరిపూర్ణంగా తెలిసిన అనుభవజ్ఞులైన స్థానిక డ్రైవర్లతో తిరుపతి నుండి తిరుమల టాక్సీ సేవ. తిరుమల దర్శన్ కోసం సురక్షితమైన, సౌకర్యవంతమైన మరియు సమయానుకూలమైన ప్రయాణాలు.",
    },
    tripTypes: {
      en: ["One-way", "Roundtrip — wait & return"],
      te: ["వన్-వే", "రౌండ్‌ట్రిప్ — వేచి & తిరిగి రండి"],
    },
    from: { en: "Tirupati City", te: "తిరుపతి నగరం" },
    to: { en: "Tirumala (Sri Venkateswara Temple)", te: "తిరుమల (శ్రీ వేంకటేశ్వర ఆలయం)" },
    steps: {
      en: [
        "Book on WhatsApp with your pickup time & city location",
        "Driver confirmed within minutes — round the clock",
        "Safe ghat road journey with experienced local driver",
        "Return included if roundtrip booked — or arrange separately",
      ],
      te: [
        "WhatsApp లో మీ పికప్ సమయం & నగర స్థానంతో బుక్ చేయండి",
        "నిమిషాల్లో డ్రైవర్ నిర్ధారించబడ్డాడు — 24 గంటలు",
        "అనుభవజ్ఞులైన స్థానిక డ్రైవర్‌తో సురక్షితమైన ఘాట్ రోడ్ ప్రయాణం",
        "రౌండ్‌ట్రిప్ బుక్ చేస్తే రిటర్న్ చేర్చబడింది",
      ],
    },
    ctaLabel: { en: "Book Tirumala Taxi", te: "తిరుమల టాక్సీ బుక్ చేయండి" },
    waService: "Tirumala Taxi — Tirupati to Tirumala",
    waPickup: "Tirupati City",
    waDrop: "Tirumala",
  },
  {
    id: "hotel",
    emoji: "🏨",
    accentColor: "#8B5CF6",
    title: {
      en: "Hotel Transfer",
      te: "హోటల్ బదిలీ",
    },
    subtitle: {
      en: "All Hotels, Lodges & Dharmashalas — Tirupati & Tirumala",
      te: "అన్ని హోటళ్లు, లాడ్జ్‌లు & ధర్మశాలలు — తిరుపతి & తిరుమల",
    },
    desc: {
      en: "Convenient pickup and drop from any hotel, lodge, or dharmashaala in Tirupati and Tirumala. Budget stays to premium hotels — our reliable drivers are on time for every transfer, day or night.",
      te: "తిరుపతి మరియు తిరుమలలోని ఏ హోటల్, లాడ్జ్, లేదా ధర్మశాల నుండి సౌకర్యవంతమైన పికప్ మరియు డ్రాప్. బడ్జెట్ నుండి ప్రీమియం హోటళ్ల వరకు — మా నమ్మకమైన డ్రైవర్లు ప్రతి బదిలీకి సమయానికి ఉంటారు.",
    },
    tripTypes: {
      en: ["One-way", "Roundtrip"],
      te: ["వన్-వే", "రౌండ్‌ట్రిప్"],
    },
    from: { en: "Your Hotel in Tirupati / Tirumala", te: "తిరుపతి / తిరుమలలో మీ హోటల్" },
    to: { en: "Airport / Station / Temples / City", te: "విమానాశ్రయం / స్టేషన్ / ఆలయాలు / నగరం" },
    steps: {
      en: [
        "Share your hotel name and destination on WhatsApp",
        "Driver confirmed with vehicle details and ETA",
        "On-time pickup at your hotel lobby",
        "Comfortable transfer to your destination",
      ],
      te: [
        "WhatsApp లో మీ హోటల్ పేరు మరియు గమ్యం పంచుకోండి",
        "వాహన వివరాలు మరియు ETA తో డ్రైవర్ నిర్ధారించబడ్డాడు",
        "మీ హోటల్ లాబీలో సమయానికి పికప్",
        "మీ గమ్యానికి సౌకర్యవంతమైన బదిలీ",
      ],
    },
    ctaLabel: { en: "Book Hotel Transfer", te: "హోటల్ బదిలీ బుక్ చేయండి" },
    waService: "Hotel Transfer in Tirupati",
    waPickup: "Hotel in Tirupati",
    waDrop: "Airport / Station / Temples",
  },
  {
    id: "local",
    emoji: "📍",
    accentColor: "#059669",
    title: {
      en: "Local Pickup & Drop",
      te: "స్థానిక పికప్ & డ్రాప్",
    },
    subtitle: {
      en: "Anywhere Within Tirupati City — 24/7",
      te: "తిరుపతి నగరంలో ఎక్కడైనా — 24/7",
    },
    desc: {
      en: "Point-to-point cab service anywhere within Tirupati city. Hospital runs, market trips, temple visits, school drops, or any daily errand — our reliable local cabs are available around the clock.",
      te: "తిరుపతి నగరంలో ఎక్కడైనా పాయింట్-టు-పాయింట్ క్యాబ్ సేవ. ఆసుపత్రి వెళ్లడాలు, మార్కెట్ ట్రిప్పులు, ఆలయ సందర్శనలు, పాఠశాల డ్రాప్స్, లేదా ఏ రోజువారీ పని — మా నమ్మకమైన స్థానిక క్యాబ్లు 24 గంటలు అందుబాటులో.",
    },
    tripTypes: {
      en: ["One-way", "Roundtrip"],
      te: ["వన్-వే", "రౌండ్‌ట్రిప్"],
    },
    from: { en: "Any location in Tirupati", te: "తిరుపతిలో ఏ స్థానమైనా" },
    to: { en: "Any location in Tirupati", te: "తిరుపతిలో ఏ స్థానమైనా" },
    steps: {
      en: [
        "Share your pickup address and destination on WhatsApp",
        "Driver assigned immediately — available round the clock",
        "Pickup in AC comfort within the city",
        "Reach your destination safely and on time",
      ],
      te: [
        "WhatsApp లో మీ పికప్ చిరునామా మరియు గమ్యం పంచుకోండి",
        "డ్రైవర్ వెంటనే నియమించబడ్డాడు — 24 గంటలు అందుబాటులో",
        "నగరంలో AC సౌకర్యంతో పికప్",
        "సురక్షితంగా మరియు సమయానికి మీ గమ్యం చేరండి",
      ],
    },
    ctaLabel: { en: "Book Local Cab", te: "స్థానిక క్యాబ్ బుక్ చేయండి" },
    waService: "Local Pickup & Drop in Tirupati",
    waPickup: "Your location in Tirupati",
    waDrop: "Your destination in Tirupati",
  },
  {
    id: "outstation",
    emoji: "🛣️",
    accentColor: "#DC2626",
    title: {
      en: "Outstation & Custom Transfer",
      te: "అవుట్‌స్టేషన్ & కస్టమ్ బదిలీ",
    },
    subtitle: {
      en: "Tirupati to Any City — Chennai, Bangalore, Hyderabad & Beyond",
      te: "తిరుపతి నుండి ఏ నగరానికైనా — చెన్నై, బెంగళూరు, హైదరాబాద్ & మరిన్ని",
    },
    desc: {
      en: "Intercity and outstation cab service from Tirupati to Chennai, Bangalore, Hyderabad, Vijayawada and all major South Indian cities. One-way and roundtrip available. The base fare includes 300 km per day — extra kilometres are charged at the vehicle's per-km rate.",
      te: "తిరుపతి నుండి చెన్నై, బెంగళూరు, హైదరాబాద్, విజయవాడ మరియు అన్ని ప్రధాన దక్షిణ భారత నగరాలకు ఇంటర్‌సిటీ మరియు అవుట్‌స్టేషన్ క్యాబ్ సేవ. వన్-వే మరియు రౌండ్‌ట్రిప్ అందుబాటులో ఉన్నాయి.",
    },
    tripTypes: {
      en: ["One-way", "Roundtrip (300 km/day included)"],
      te: ["వన్-వే", "రౌండ్‌ట్రిప్ (300 కి.మీ./రోజు చేర్చబడింది)"],
    },
    from: { en: "Tirupati (any location)", te: "తిరుపతి (ఏ స్థానమైనా)" },
    to: { en: "Chennai / Bangalore / Hyderabad / Any city", te: "చెన్నై / బెంగళూరు / హైదరాబాద్ / ఏ నగరమైనా" },
    steps: {
      en: [
        "Share your destination, date, time & group size on WhatsApp",
        "We recommend the best vehicle and confirm the fare",
        "Driver arrives on time — tolls & parking paid by customer",
        "Comfortable long-distance journey with experienced highway driver",
      ],
      te: [
        "WhatsApp లో మీ గమ్యం, తేదీ, సమయం & గ్రూప్ సైజ్ పంచుకోండి",
        "మేము అత్యుత్తమ వాహనాన్ని సిఫారసు చేసి చార్జీ నిర్ధారిస్తాం",
        "డ్రైవర్ సమయానికి వస్తాడు — టోల్ & పార్కింగ్ కస్టమర్ చెల్లిస్తారు",
        "అనుభవజ్ఞులైన హైవే డ్రైవర్‌తో సౌకర్యవంతమైన దీర్ఘ-దూర ప్రయాణం",
      ],
    },
    ctaLabel: { en: "Book Outstation Cab", te: "అవుట్‌స్టేషన్ క్యాబ్ బుక్ చేయండి" },
    waService: "Outstation Cab from Tirupati",
    waPickup: "Tirupati",
    waDrop: "Outstation destination",
    outstation: true,
  },
];

const PROCESS_STEPS_EN = [
  { emoji: "📱", title: "WhatsApp Us", desc: "Send your pickup location, destination, date & time on WhatsApp." },
  { emoji: "✅", title: "We Confirm",  desc: "We confirm your booking with driver name, vehicle & estimated fare." },
  { emoji: "🚗", title: "Driver Arrives", desc: "Driver arrives on time — 15 min early for airport & railway pickups." },
  { emoji: "😊", title: "Travel Comfortably", desc: "Reach your destination safely in a clean, AC cab with a professional driver." },
];

const PROCESS_STEPS_TE = [
  { emoji: "📱", title: "WhatsApp చేయండి",   desc: "WhatsApp లో మీ పికప్ స్థానం, గమ్యం, తేదీ & సమయం పంపండి." },
  { emoji: "✅", title: "మేము నిర్ధారిస్తాం", desc: "డ్రైవర్ పేరు, వాహనం & అంచనా చార్జీతో మీ బుకింగ్ నిర్ధారిస్తాం." },
  { emoji: "🚗", title: "డ్రైవర్ వస్తాడు",   desc: "డ్రైవర్ సమయానికి వస్తాడు — విమానాశ్రయం & రైల్వే పికప్‌లకు 15 నిమిషాల ముందు." },
  { emoji: "😊", title: "సౌకర్యంగా ప్రయాణించండి", desc: "వృత్తిపర డ్రైవర్‌తో శుభ్రమైన, AC క్యాబ్‌లో సురక్షితంగా గమ్యం చేరండి." },
];

const QUICKNAV_EN = [
  { id: "airport",    emoji: "✈️",  label: "Airport" },
  { id: "railway",    emoji: "🚆",  label: "Railway" },
  { id: "tirumala",   emoji: "🛕",  label: "Tirumala" },
  { id: "hotel",      emoji: "🏨",  label: "Hotel" },
  { id: "local",      emoji: "📍",  label: "Local" },
  { id: "outstation", emoji: "🛣️", label: "Outstation" },
];

const QUICKNAV_TE = [
  { id: "airport",    emoji: "✈️",  label: "విమానాశ్రయం" },
  { id: "railway",    emoji: "🚆",  label: "రైల్వే" },
  { id: "tirumala",   emoji: "🛕",  label: "తిరుమల" },
  { id: "hotel",      emoji: "🏨",  label: "హోటల్" },
  { id: "local",      emoji: "📍",  label: "స్థానిక" },
  { id: "outstation", emoji: "🛣️", label: "అవుట్‌స్టేషన్" },
];

// ── Page ──────────────────────────────────────────────────────────

export default async function PickupDropPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (LOCALES.includes(lang as Locale) ? lang : "en") as Locale;
  const isEn = locale === "en";

  const heroWaUrl = primaryWhatsAppUrl(
    isEn
      ? "Hello Akshaya Cabs Tirupati! I need a pickup & drop service. Could you please confirm availability and pricing? Thank you!"
      : "నమస్కారం అక్షయ క్యాబ్స్ తిరుపతి! నాకు పికప్ & డ్రాప్ సేవ కావాలి. అందుబాటు మరియు ధర నిర్ధారించగలరా? ధన్యవాదాలు!"
  );

  const processSteps = isEn ? PROCESS_STEPS_EN : PROCESS_STEPS_TE;
  const quickNav = isEn ? QUICKNAV_EN : QUICKNAV_TE;

  return (
    <>
      {/* ── 1. Hero ── */}
      <header className="akc-pd-hero" role="banner">
        <div className="akc-container akc-pd-hero__content">
          <p className="akc-pd-hero__label">
            {isEn ? "🚗 Pickup & Drop Services" : "🚗 పికప్ & డ్రాప్ సేవలు"}
          </p>
          <h1 className={`akc-pd-hero__h1${locale === "te" ? " lang-te" : ""}`}>
            {isEn ? (
              <>On-Time Every Time —<br /><span className="akc-pd-hero__h1-accent">Airport, Railway & Beyond</span></>
            ) : (
              <>ప్రతిసారి సమయానికి —<br /><span className="akc-pd-hero__h1-accent">విమానాశ్రయం, రైల్వే & మరిన్ని</span></>
            )}
          </h1>
          <p className={`akc-pd-hero__desc${locale === "te" ? " lang-te" : ""}`}>
            {isEn
              ? `Reliable pickup & drop service across Tirupati — from Tirupati Airport and Railway Station to Tirumala, hotels, outstation and anywhere in the city. Book in seconds on WhatsApp, available ${BUSINESS.availability}.`
              : `తిరుపతిలో నమ్మకమైన పికప్ & డ్రాప్ సేవ — తిరుపతి విమానాశ్రయం మరియు రైల్వే స్టేషన్ నుండి తిరుమల, హోటళ్లు, అవుట్‌స్టేషన్ మరియు నగరంలో ఎక్కడైనా. WhatsApp లో సెకన్లలో బుక్ చేయండి, ${BUSINESS.availability} అందుబాటులో.`}
          </p>
          <div className="akc-pd-hero__ctas">
            <a
              href={heroWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="akc-btn akc-btn--wa akc-btn--lg"
              aria-label={isEn ? "Book a pickup or drop on WhatsApp" : "WhatsApp లో పికప్ లేదా డ్రాప్ బుక్ చేయండి"}
            >
              <WaIcon size={20} />
              {isEn ? "Book Pickup / Drop" : "పికప్ / డ్రాప్ బుక్ చేయండి"}
            </a>
            <a
              href={BUSINESS.phone.primaryTel}
              className="akc-btn akc-btn--ghost akc-btn--lg"
              aria-label={`Call Akshaya Cabs at ${BUSINESS.phone.primaryDisplay}`}
            >
              <PhoneIcon />
              {isEn ? `Call ${BUSINESS.phone.primaryDisplay}` : BUSINESS.phone.primaryDisplay}
            </a>
          </div>
        </div>
      </header>

      {/* ── 2. Quick-jump nav ── */}
      <nav className="akc-pd-quicknav" aria-label={isEn ? "Jump to transfer type" : "బదిలీ రకానికి వెళ్లండి"}>
        <div className="akc-container">
          <div className="akc-pd-quicknav__inner">
            {quickNav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`akc-pd-quicknav__btn${locale === "te" ? " lang-te" : ""}`}
                aria-label={`Jump to ${item.label} section`}
              >
                <span aria-hidden="true">{item.emoji}</span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── 3. Service cards ── */}
      <section className="akc-pd-services" aria-labelledby="pd-services-heading">
        <div className="akc-container">
          <div className="akc-section-header akc-section-header--center" style={{ marginBottom: "2.5rem" }}>
            <p className="akc-section-label">
              {isEn ? "All Transfer Services" : "అన్ని బదిలీ సేవలు"}
            </p>
            <h2 id="pd-services-heading" className="akc-section-title">
              {isEn ? `${PD_SERVICES.length} Transfer Services Available` : `${PD_SERVICES.length} బదిలీ సేవలు అందుబాటులో`}
            </h2>
            <p className="akc-section-subtitle">
              {isEn
                ? "From Tirupati Airport to the Tirumala ghat road — we handle every kind of transfer with professional drivers, clean vehicles and on-time service."
                : "తిరుపతి విమానాశ్రయం నుండి తిరుమల ఘాట్ రోడ్డు వరకు — మేము వృత్తిపర డ్రైవర్లు, శుభ్రమైన వాహనాలు మరియు సమయానికి సేవతో ప్రతి బదిలీని నిర్వహిస్తాం."}
            </p>
          </div>

          <ul className="akc-pd-services__grid" role="list">
            {PD_SERVICES.map((svc) => {
              const waUrl = serviceWhatsAppUrl({
                service: svc.waService,
                pickupLocation: svc.waPickup,
                dropLocation: svc.waDrop,
              });
              const tripTypes = isEn ? svc.tripTypes.en : svc.tripTypes.te;
              const steps = isEn ? svc.steps.en : svc.steps.te;

              return (
                <li key={svc.id} id={svc.id} className="akc-pd-card" aria-label={isEn ? svc.title.en : svc.title.te}>
                  {/* Coloured top accent bar */}
                  <div
                    className="akc-pd-card__accent"
                    style={{ background: svc.accentColor }}
                    aria-hidden="true"
                  />

                  <div className="akc-pd-card__body">
                    {/* Icon */}
                    <div className="akc-pd-card__icon" aria-hidden="true">{svc.emoji}</div>

                    {/* Title + subtitle */}
                    <div>
                      <h2 className={`akc-pd-card__title${locale === "te" ? " lang-te" : ""}`}>
                        {isEn ? svc.title.en : svc.title.te}
                      </h2>
                      <p className={`akc-pd-card__subtitle${locale === "te" ? " lang-te" : ""}`}>
                        {isEn ? svc.subtitle.en : svc.subtitle.te}
                      </p>
                    </div>

                    {/* Trip types (one-way / roundtrip) */}
                    <div className="akc-pd-card__trip-types" aria-label={isEn ? "Trip options" : "ట్రిప్ ఎంపికలు"}>
                      {tripTypes.map((t) => (
                        <span key={t} className="akc-pd-card__trip-chip">{t}</span>
                      ))}
                    </div>

                    {/* Description */}
                    <p className={`akc-pd-card__desc${locale === "te" ? " lang-te" : ""}`}>
                      {isEn ? svc.desc.en : svc.desc.te}
                    </p>

                    {/* Route row */}
                    <div className="akc-pd-card__route" aria-label={isEn ? "Route" : "మార్గం"}>
                      <span>📍 {isEn ? svc.from.en : svc.from.te}</span>
                      <span className="akc-pd-card__route-arrow" aria-hidden="true">→</span>
                      <span>🏁 {isEn ? svc.to.en : svc.to.te}</span>
                    </div>

                    {/* Booking steps */}
                    <div>
                      <p className="akc-pd-card__steps-label">
                        {isEn ? "How to Book" : "ఎలా బుక్ చేయాలి"}
                      </p>
                      <ol className="akc-pd-card__steps" aria-label={isEn ? "Booking steps" : "బుకింగ్ దశలు"}>
                        {steps.map((step, i) => (
                          <li key={i} className="akc-pd-card__step">
                            <span className="akc-pd-card__step-num" aria-hidden="true">{i + 1}</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Outstation note */}
                    {svc.outstation && (
                      <p className="akc-pd-card__outstation-note">
                        ℹ️ {isEn
                          ? "Base fare includes 300 km/day. Extra km charged at vehicle rate. Toll & parking paid by customer. State permits extra where applicable."
                          : "బేస్ ఫేర్‌లో 300 కి.మీ./రోజు చేర్చబడింది. అదనపు కి.మీ. వాహన రేటు వద్ద వసూలు చేయబడుతుంది. టోల్ & పార్కింగ్ కస్టమర్ చెల్లిస్తారు."}
                      </p>
                    )}

                    {/* CTA */}
                    <div className="akc-pd-card__cta">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="akc-btn akc-btn--wa"
                        aria-label={`${isEn ? svc.ctaLabel.en : svc.ctaLabel.te} on WhatsApp`}
                      >
                        <WaIcon />
                        {isEn ? svc.ctaLabel.en : svc.ctaLabel.te}
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── 4. Important notes (fare, driver, date) ── */}
      <section className="akc-pd-notes" aria-labelledby="pd-notes-heading">
        <div className="akc-container">
          <h2 id="pd-notes-heading" className={`akc-pd-notes__heading${locale === "te" ? " lang-te" : ""}`}>
            {isEn ? "📋 Important Notes" : "📋 ముఖ్యమైన గమనికలు"}
          </h2>
          <ul className="akc-pd-notes__list" aria-label={isEn ? "Fare and booking notes" : "చార్జీ మరియు బుకింగ్ గమనికలు"}>
            {(isEn ? [
              "All fares include driver allowance — it is not an extra surcharge.",
              "Toll charges, parking fees and state border permits are paid by the customer.",
              "For outstation trips, the base fare covers 300 km per day. Extra km are charged at the vehicle's published per-km rate.",
              "Airport and railway pickups: driver arrives 15 minutes before your arrival time — no extra waiting charge for minor delays.",
              "Booking is confirmed via WhatsApp — no automated confirmation is generated just by sending a message. Please wait for our team to reply.",
              "Service hours: available 24 hours a day, 7 days a week.",
            ] : [
              "అన్ని చార్జీలలో డ్రైవర్ అలవెన్స్ చేర్చబడింది — ఇది అదనపు సర్‌చార్జ్ కాదు.",
              "టోల్ చార్జీలు, పార్కింగ్ ఫీజులు మరియు రాష్ట్ర సరిహద్దు పర్మిట్లు కస్టమర్ చెల్లిస్తారు.",
              "అవుట్‌స్టేషన్ ట్రిప్పులకు, బేస్ ఫేర్‌లో రోజుకు 300 కి.మీ. చేర్చబడింది. అదనపు కి.మీ. వాహనం యొక్క ప్రచురించిన కి.మీ. రేటు వద్ద వసూలు చేయబడుతుంది.",
              "విమానాశ్రయం మరియు రైల్వే పికప్‌లు: మీ రాక సమయానికి 15 నిమిషాల ముందు డ్రైవర్ వస్తాడు — చిన్న ఆలస్యాలకు అదనపు వేచి ఉండే చార్జీ లేదు.",
              "బుకింగ్ WhatsApp ద్వారా నిర్ధారించబడుతుంది — కేవలం మెసేజ్ పంపడం వల్ల స్వయంచాలక నిర్ధారణ రాదు. మా బృందం సమాధానం కోసం వేచి ఉండండి.",
              "సేవా గంటలు: రోజూ 24 గంటలు, వారానికి 7 రోజులు అందుబాటులో.",
            ]).map((note, i) => (
              <li key={i} className="akc-pd-notes__item">
                <span className="akc-pd-notes__bullet" aria-hidden="true">✓</span>
                <span className={locale === "te" ? "lang-te" : ""}>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 5. How booking works ── */}
      <section className="akc-pd-process" aria-labelledby="process-heading">
        <div className="akc-container">
          <div className="akc-section-header akc-section-header--center" style={{ marginBottom: "2.5rem" }}>
            <p className="akc-section-label">
              {isEn ? "Simple Process" : "సులభమైన ప్రక్రియ"}
            </p>
            <h2 id="process-heading" className="akc-section-title">
              {isEn ? "How Booking Works" : "బుకింగ్ ఎలా జరుగుతుంది"}
            </h2>
          </div>
          <ol className="akc-pd-process__steps" role="list" aria-label={isEn ? "Booking process steps" : "బుకింగ్ దశలు"}>
            {processSteps.map((step, idx) => (
              <li key={idx} className="akc-pd-process__step">
                <div className="akc-pd-process__num" aria-label={`Step ${idx + 1}`}>
                  <span className="akc-pd-process__emoji" aria-hidden="true">{step.emoji}</span>
                </div>
                <h3 className={`akc-pd-process__step-title${locale === "te" ? " lang-te" : ""}`}>{step.title}</h3>
                <p className={`akc-pd-process__step-desc${locale === "te" ? " lang-te" : ""}`}>{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 6. Bottom CTA ── */}
      <section className="akc-pd-cta" aria-labelledby="pd-cta-heading">
        <div className="akc-container">
          <h2 id="pd-cta-heading" className={`akc-pd-cta__heading${locale === "te" ? " lang-te" : ""}`}>
            {isEn ? "Need a Pickup or Drop Right Now?" : "ఇప్పుడే పికప్ లేదా డ్రాప్ కావాలా?"}
          </h2>
          <p className={`akc-pd-cta__sub${locale === "te" ? " lang-te" : ""}`}>
            {isEn
              ? "We respond instantly on WhatsApp — day or night. Share your pickup location and destination and we'll confirm your booking in minutes."
              : "మేము WhatsApp లో తక్షణం స్పందిస్తాం — రోజు లేదా రాత్రి. మీ పికప్ స్థానం మరియు గమ్యం పంచుకోండి, నిమిషాల్లో మీ బుకింగ్ నిర్ధారిస్తాం."}
          </p>
          <div className="akc-pd-cta__btns">
            <a
              href={heroWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="akc-btn akc-btn--wa akc-btn--lg"
              aria-label={isEn ? "Book pickup or drop on WhatsApp" : "WhatsApp లో పికప్ లేదా డ్రాప్ బుక్ చేయండి"}
            >
              <WaIcon size={20} />
              {isEn ? "Book on WhatsApp" : "WhatsApp లో బుక్ చేయండి"}
            </a>
            <a
              href={BUSINESS.phone.primaryTel}
              className="akc-btn akc-btn--ghost akc-btn--lg"
              aria-label={`Call Akshaya Cabs at ${BUSINESS.phone.primaryDisplay}`}
            >
              <PhoneIcon />
              {isEn ? `Call ${BUSINESS.phone.primaryDisplay}` : BUSINESS.phone.primaryDisplay}
            </a>
            <Link
              href={`/${locale}/request-a-quote`}
              className="akc-btn akc-btn--secondary akc-btn--lg"
            >
              {isEn ? "Request a Quote" : "కోటేషన్ అభ్యర్థించండి"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}