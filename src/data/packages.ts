// Akshaya Cabs — Tour Package Data
// akshayacabs.com | Tirupati, Andhra Pradesh
// Source: Verified master execution plan Section 01E (confirmed 2026-10-09).
//
// RULES:
// - Never invent prices. Use only master-plan-verified price matrix values.
// - SVTT identifiers (SVTT0001 etc.) must NEVER appear in any user-facing output.
// - Public IDs are AKC0001 … AKC0010 (map is deterministic — do not shuffle).
// - Tavera (8+1) and Force Urbania 12 Seater are shown with customQuote: true — no invented price.
// - allowanceKm ≠ route distance. Never label the package allowance as "route distance."
// - For AKC0007/AKC0008: estimated driving circuit ~415 km and ~575 km respectively.
//   These exceed the standard 300 km/day allowance — advisory note is mandatory.
// - Tolls, parking, darshan tickets, state permits are NOT included in package fares.
// - Driver allowance IS included in all fares — do NOT add it again.

import type { Package } from "@/types";

// ── Standard inclusions / exclusions (shared across packages) ─────

const STD_INCLUSIONS = [
  "AC vehicle with experienced driver",
  "Fuel charges",
  "Driver allowance",
];

const STD_EXCLUSIONS = [
  "Tolls and highway charges (paid by customer)",
  "Parking fees (paid by customer)",
  "State permit charges where applicable (paid by customer)",
  "Temple darshan tickets and prasad",
  "Hotel / accommodation",
  "Meals and refreshments",
];

const EXTRA_KM_NOTE =
  "Additional kilometres beyond the included allowance are charged at the per-km rate for the selected vehicle.";

export const PACKAGES: Package[] = [
  // ─────────────────────────────────────────────────────────────────
  {
    id: "akc0001",
    code: "AKC0001",
    slug: "tirupati-tirumala-local-temples",
    title: "Tirupati & Tirumala Local Temples",
    titleTe: "తిరుపతి & తిరుమల స్థానిక ఆలయాలు",
    shortTitle: "Tirupati + Tirumala Temples",
    shortTitleTe: "తిరుపతి + తిరుమల ఆలయాలు",
    destinations: ["Tirupati", "Tirumala"],
    destinationsTe: ["తిరుపతి", "తిరుమల"],
    temples: [
      "Tirumala — Sri Venkateswara Temple",
      "ISKCON Tirupati",
      "Kapilatheertham",
      "Govindaraja Swamy Temple",
      "Padmavathi Temple (Tiruchanur)",
      "Vakulamatha Temple",
      "Srinivasa Mangapuram",
    ],
    templesTe: [
      "తిరుమల — శ్రీ వేంకటేశ్వర స్వామి ఆలయం",
      "ఇస్కాన్ తిరుపతి (రాధా గోవింద మందిరం)",
      "కపిలతీర్థం (శ్రీ కపిలేశ్వర స్వామి)",
      "గోవిందరాజ స్వామి ఆలయం",
      "శ్రీ పద్మావతి అమ్మవారి ఆలయం (తిరుచానూరు)",
      "వకుళమాత ఆలయం",
      "శ్రీనివాస మంగాపురం (కల్యాణ వేంకటేశ్వర స్వామి)",
    ],
    description:
      "A full-day Tirupati and Tirumala darshan package covering the most important temples in the region. Receive the blessings of Lord Venkateswara at Tirumala and visit the celebrated temples of Tirupati city — all in a single, well-organised day trip.",
    descriptionTe:
      "తిరుపతి మరియు తిరుమల ప్రాంతంలోని ప్రముఖ దేవాలయాలను కవర్ చేసే ఒక రోజు దర్శన ప్యాకేజీ. తిరుమలలో శ్రీ వేంకటేశ్వర స్వామి వారి ఆశీస్సులు అందుకోండి మరియు తిరుపతి నగరంలోని పవిత్ర ఆలయాలను సౌకర్యవంతంగా సందర్శించండి.",
    duration: "1 Day",
    durationTe: "1 రోజు",
    distance: {
      allowanceKm: "300 km",
      estimatedRouteKm: 80,
      exceedsAllowance: false,
      distanceNote: "Approx. 80 km round trip — well within the 300 km included allowance.",
      distanceNoteTe: "సుమారు 80 కి.మీ రౌండ్ ట్రిప్ — ప్యాకేజీలో చేర్చబడిన 300 కి.మీ పరిమితి లోపలే.",
    },
    category: "local",
    image: "/images/akshaya/packages/akc0001-tirupati-tirumala.webp",
    featured: true,
    startingPrice: 3600,
    enquiryNote: EXTRA_KM_NOTE,
    inclusions: STD_INCLUSIONS,
    exclusions: STD_EXCLUSIONS,
    prices: [
      { vehicleId: "dzire-amaze-etios", vehicleName: "Dzire / Amaze / Etios", capacity: "4+1", price: 3600 },
      { vehicleId: "ertiga",            vehicleName: "Ertiga",                 capacity: "6+1", price: 4300 },
      { vehicleId: "innova",            vehicleName: "Innova",                 capacity: "7+1", price: 5000 },
      { vehicleId: "innova-crysta",     vehicleName: "Innova Crysta",          capacity: "7+1", price: 5700 },
      { vehicleId: "tavera",            vehicleName: "Tavera",                 capacity: "8+1", price: null, customQuote: true, customQuoteNote: "Contact us for Tavera pricing on this package." },
      { vehicleId: "tempo-traveller-12", vehicleName: "Tempo Traveller 12+1", capacity: "12+1", price: 7300 },
      { vehicleId: "force-urbania-12", vehicleName: "Force Urbania 12 Seater", capacity: "12+1", price: null, customQuote: true, customQuoteNote: "Contact us for Force Urbania 12 Seater pricing on this package." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  {
    id: "akc0002",
    code: "AKC0002",
    slug: "tirumala-hill-temples",
    title: "Tirumala Hill Temples & Sacred Sites",
    titleTe: "తిరుమల కొండ ఆలయాలు & పవిత్ర క్షేత్రాలు",
    shortTitle: "Tirumala Hill Temples",
    shortTitleTe: "తిరుమల కొండ ఆలయాలు",
    destinations: ["Tirumala"],
    destinationsTe: ["తిరుమల"],
    temples: [
      "Tirumala — Sri Venkateswara Temple",
      "Varahaswamy Temple",
      "Vengamamba Museum",
      "Srivari Padhalu (Sacred Footprints)",
      "Silathoranam (Natural Arch)",
      "Japali Theertham",
      "Akasaganga Theertham",
      "Papavinasanam Waterfall",
    ],
    templesTe: [
      "తిరుమల — శ్రీ వేంకటేశ్వర స్వామి ఆలయం",
      "వరాహస్వామి ఆలయం",
      "తరిగొండ వెంగమాంబ మ్యూజియం",
      "శ్రీవారి పాదాలు (పవిత్ర పాదముద్రలు)",
      "శిలాతోరణం (సహజ రాతి తోరణం)",
      "జాపాలి తీర్థం (హనుమాన్ క్షేత్రం)",
      "ఆకాశగంగ తీర్థం",
      "పాపవినాశనం జలపాతం",
    ],
    description:
      "Explore the sacred Tirumala hills beyond the main temple — including natural wonders, ancient shrines and sites of immense spiritual significance. This package is ideal for devotees who wish to spend a full day experiencing the complete spiritual and natural landscape of the Tirumala hill.",
    descriptionTe:
      "ప్రధాన ఆలయంతో పాటు తిరుమల కొండల పై ఉన్న సహజ వింతలు, ప్రాచీన పుణ్యక్షేత్రాలు మరియు ఆధ్యాత్మిక స్థలాలను సందర్శించండి. తిరుమల కొండ యొక్క ఆధ్యాత్మిక మరియు ప్రకృతి సౌందర్యాన్ని రోజంతా ఆస్వాదించాలనుకునే భక్తులకు ఇది అనువైన ప్యాకేజీ.",
    duration: "1 Day",
    durationTe: "1 రోజు",
    distance: {
      allowanceKm: "300 km",
      estimatedRouteKm: 60,
      exceedsAllowance: false,
      distanceNote: "Approx. 60 km round trip — well within the 300 km included allowance.",
      distanceNoteTe: "సుమారు 60 కి.మీ సర్క్యూట్ — ప్యాకేజీలో చేర్చబడిన 300 కి.మీ పరిమితి లోపలే.",
    },
    category: "local",
    image: "/images/akshaya/packages/akc0002-tirumala-hill.webp",
    featured: true,
    startingPrice: 3300,
    enquiryNote: EXTRA_KM_NOTE,
    inclusions: STD_INCLUSIONS,
    exclusions: STD_EXCLUSIONS,
    prices: [
      { vehicleId: "dzire-amaze-etios", vehicleName: "Dzire / Amaze / Etios", capacity: "4+1", price: 3300 },
      { vehicleId: "ertiga",            vehicleName: "Ertiga",                 capacity: "6+1", price: 4000 },
      { vehicleId: "innova",            vehicleName: "Innova",                 capacity: "7+1", price: 4900 },
      { vehicleId: "innova-crysta",     vehicleName: "Innova Crysta",          capacity: "7+1", price: 5600 },
      { vehicleId: "tavera",            vehicleName: "Tavera",                 capacity: "8+1", price: null, customQuote: true, customQuoteNote: "Contact us for Tavera pricing on this package." },
      { vehicleId: "tempo-traveller-12", vehicleName: "Tempo Traveller 12+1", capacity: "12+1", price: 6900 },
      { vehicleId: "force-urbania-12", vehicleName: "Force Urbania 12 Seater", capacity: "12+1", price: null, customQuote: true, customQuoteNote: "Contact us for Force Urbania 12 Seater pricing on this package." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  {
    id: "akc0003",
    code: "AKC0003",
    slug: "tirumala-kanipakam-padmavathi",
    title: "Tirumala, Kanipakam & Padmavathi",
    titleTe: "తిరుమల, కాణిపాకం & పద్మావతి అమ్మవారి దర్శనం",
    shortTitle: "Tirumala + Kanipakam + Padmavathi",
    shortTitleTe: "తిరుమల + కాణిపాకం",
    destinations: ["Tirumala", "Kanipakam", "Tirupati"],
    destinationsTe: ["తిరుమల", "కాణిపాకం", "తిరుపతి"],
    temples: [
      "Tirumala — Sri Venkateswara Temple",
      "Kanipakam — Sri Varasidhi Vinayaka Swamy Temple",
      "Padmavathi Temple (Tiruchanur)",
      "Vakulamatha Temple",
      "Srinivasa Mangapuram",
    ],
    templesTe: [
      "తిరుమల — శ్రీ వేంకటేశ్వర స్వామి ఆలయం",
      "కాణిపాకం — శ్రీ వరసిద్ధి వినాయక స్వామి ఆలయం",
      "శ్రీ పద్మావతి అమ్మవారి ఆలయం (తిరుచానూరు)",
      "వకుళమాత ఆలయం",
      "శ్రీనివాస మంగాపురం",
    ],
    description:
      "A complete one-day pilgrimage combining three powerful shrines — Lord Venkateswara at Tirumala, Lord Ganesha at the famous Kanipakam temple, and Goddess Padmavathi at Tiruchanur. A deeply fulfilling spiritual journey for the whole family.",
    descriptionTe:
      "మూడు మహిమాన్విత పుణ్యక్షేత్రాలను అనుసంధానించే సంపూర్ణ ఒక రోజు యాత్ర — తిరుమలలో శ్రీ వేంకటేశ్వరుడు, ప్రసిద్ధ కాణిపాకంలో స్వయంభు వినాయకుడు మరియు తిరుచానూరులో శ్రీ పద్మావతి అమ్మవారు. మొత్తం కుటుంబానికి ఆధ్యాత్మిక సంతృప్తినిచ్చే యాత్ర.",
    duration: "1 Day",
    durationTe: "1 రోజు",
    distance: {
      allowanceKm: "300 km",
      estimatedRouteKm: 200,
      exceedsAllowance: false,
      distanceNote: "Approx. 200 km circuit — within the 300 km included allowance.",
      distanceNoteTe: "సుమారు 200 కి.మీ సర్క్యూట్ — చేర్చబడిన 300 కి.మీ పరిమితి లోపలే.",
    },
    category: "nearby",
    image: "/images/akshaya/packages/akc0003-kanipakam-padmavathi.webp",
    featured: true,
    startingPrice: 5200,
    enquiryNote: EXTRA_KM_NOTE,
    inclusions: STD_INCLUSIONS,
    exclusions: STD_EXCLUSIONS,
    prices: [
      { vehicleId: "dzire-amaze-etios", vehicleName: "Dzire / Amaze / Etios", capacity: "4+1", price: 5200 },
      { vehicleId: "ertiga",            vehicleName: "Ertiga",                 capacity: "6+1", price: 5900 },
      { vehicleId: "innova",            vehicleName: "Innova",                 capacity: "7+1", price: 6500 },
      { vehicleId: "innova-crysta",     vehicleName: "Innova Crysta",          capacity: "7+1", price: 7500 },
      { vehicleId: "tavera",            vehicleName: "Tavera",                 capacity: "8+1", price: null, customQuote: true, customQuoteNote: "Contact us for Tavera pricing on this package." },
      { vehicleId: "tempo-traveller-12", vehicleName: "Tempo Traveller 12+1", capacity: "12+1", price: 9900 },
      { vehicleId: "force-urbania-12", vehicleName: "Force Urbania 12 Seater", capacity: "12+1", price: null, customQuote: true, customQuoteNote: "Contact us for Force Urbania 12 Seater pricing on this package." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  {
    id: "akc0004",
    code: "AKC0004",
    slug: "tirumala-srikalahasti-padmavathi",
    title: "Tirumala, Sri Kalahasti & Padmavathi",
    titleTe: "తిరుమల, శ్రీకాళహస్తి & పద్మావతి అమ్మవారు",
    shortTitle: "Tirumala + Sri Kalahasti",
    shortTitleTe: "తిరుమల + శ్రీకాళహస్తి",
    destinations: ["Tirumala", "Sri Kalahasti", "Tirupati"],
    destinationsTe: ["తిరుమల", "శ్రీకాళహస్తి", "తిరుపతి"],
    temples: [
      "Tirumala — Sri Venkateswara Temple",
      "Sri Kalahasti — Kalahastiswara Temple (Vayu Lingam, one of the Pancha Bhuta Stalams)",
      "Padmavathi Temple (Tiruchanur)",
    ],
    templesTe: [
      "తిరుమల — శ్రీ వేంకటేశ్వర స్వామి ఆలయం",
      "శ్రీకాళహస్తి — శ్రీ కాళహస్తీశ్వర ఆలయం (వాయు లింగం, పంచభూత క్షేత్రం)",
      "శ్రీ పద్మావతి అమ్మవారి ఆలయం (తిరుచానూరు)",
    ],
    description:
      "Visit three sacred temples in a single day. Sri Kalahasti is one of the ancient Pancha Bhuta Stalams, representing the air element, and holds immense significance for Shiva devotees. Combined with Tirumala darshan and Goddess Padmavathi's blessings, this is a spiritually complete day trip.",
    descriptionTe:
      "ఒకే రోజులో మూడు పవిత్ర ఆలయాలను దర్శించండి. శ్రీకాళహస్తి వాయు లింగ పంచభూత క్షేత్రం మరియు రాహు-కేతు పూజలకు ప్రసిద్ధి. తిరుమల దర్శనం మరియు పద్మావతి అమ్మవారి ఆశీస్సులతో కూడిన ఈ యాత్ర పరమ పవిత్రమైనది.",
    duration: "1 Day",
    durationTe: "1 రోజు",
    distance: {
      allowanceKm: "300 km",
      estimatedRouteKm: 150,
      exceedsAllowance: false,
      distanceNote: "Approx. 150 km circuit — within the 300 km included allowance.",
      distanceNoteTe: "సుమారు 150 కి.మీ సర్క్యూట్ — చేర్చబడిన 300 కి.మీ పరిమితి లోపలే.",
    },
    category: "nearby",
    image: "/images/akshaya/packages/akc0004-srikalahasti.webp",
    featured: false,
    startingPrice: 4300,
    enquiryNote: EXTRA_KM_NOTE,
    inclusions: STD_INCLUSIONS,
    exclusions: STD_EXCLUSIONS,
    prices: [
      { vehicleId: "dzire-amaze-etios", vehicleName: "Dzire / Amaze / Etios", capacity: "4+1", price: 4300 },
      { vehicleId: "ertiga",            vehicleName: "Ertiga",                 capacity: "6+1", price: 4800 },
      { vehicleId: "innova",            vehicleName: "Innova",                 capacity: "7+1", price: 5600 },
      { vehicleId: "innova-crysta",     vehicleName: "Innova Crysta",          capacity: "7+1", price: 6400 },
      { vehicleId: "tavera",            vehicleName: "Tavera",                 capacity: "8+1", price: null, customQuote: true, customQuoteNote: "Contact us for Tavera pricing on this package." },
      { vehicleId: "tempo-traveller-12", vehicleName: "Tempo Traveller 12+1", capacity: "12+1", price: 7900 },
      { vehicleId: "force-urbania-12", vehicleName: "Force Urbania 12 Seater", capacity: "12+1", price: null, customQuote: true, customQuoteNote: "Contact us for Force Urbania 12 Seater pricing on this package." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  {
    id: "akc0005",
    code: "AKC0005",
    slug: "tirumala-padmavathi-7hrs",
    title: "Tirumala & Padmavathi — Half Day",
    titleTe: "తిరుమల & పద్మావతి అమ్మవారు — అర్ధ దినం",
    shortTitle: "Tirumala + Padmavathi (~7 hrs)",
    shortTitleTe: "తిరుమల + పద్మావతి (~7 గంటలు)",
    destinations: ["Tirumala", "Tirupati"],
    destinationsTe: ["తిరుమల", "తిరుపతి"],
    temples: [
      "Tirumala — Sri Venkateswara Temple",
      "Padmavathi Temple (Tiruchanur)",
    ],
    templesTe: [
      "తిరుమల — శ్రీ వేంకటేశ్వర స్వామి ఆలయం",
      "శ్రీ పద్మావతి అమ్మవారి ఆలయం (తిరుచానూరు)",
    ],
    description:
      "A focused ~7-hour pilgrimage visiting the two most important temples of the Tirupati region — Lord Venkateswara at Tirumala and Goddess Padmavathi at Tiruchanur. Perfect for pilgrims with a tighter schedule who want to complete these two essential darshans comfortably.",
    descriptionTe:
      "తిరుపతి ప్రాంతంలోని అత్యంత ముఖ్యమైన రెండు ఆలయాలు — తిరుమలలో శ్రీ వేంకటేశ్వరుడు మరియు తిరుచానూరులో పద్మావతి అమ్మవారిని దర్శించే 7 గంటల ప్రయాణం. పరిమిత సమయం ఉన్న యాత్రికులకు అనువైనది.",
    duration: "~7 hours",
    durationTe: "~7 గంటలు",
    distance: {
      allowanceKm: "300 km",
      estimatedRouteKm: 60,
      exceedsAllowance: false,
      distanceNote: "Approx. 60 km round trip — well within the 300 km included allowance.",
      distanceNoteTe: "సుమారు 60 కి.మీ రౌండ్ ట్రిప్ — చేర్చబడిన 300 కి.మీ పరిమితి లోపలే.",
    },
    category: "local",
    image: "/images/akshaya/packages/akc0005-tirumala-padmavathi.webp",
    featured: true,
    startingPrice: 3000,
    enquiryNote: EXTRA_KM_NOTE,
    inclusions: STD_INCLUSIONS,
    exclusions: STD_EXCLUSIONS,
    prices: [
      { vehicleId: "dzire-amaze-etios", vehicleName: "Dzire / Amaze / Etios", capacity: "4+1", price: 3000 },
      { vehicleId: "ertiga",            vehicleName: "Ertiga",                 capacity: "6+1", price: 3600 },
      { vehicleId: "innova",            vehicleName: "Innova",                 capacity: "7+1", price: 4400 },
      { vehicleId: "innova-crysta",     vehicleName: "Innova Crysta",          capacity: "7+1", price: 5000 },
      { vehicleId: "tavera",            vehicleName: "Tavera",                 capacity: "8+1", price: null, customQuote: true, customQuoteNote: "Contact us for Tavera pricing on this package." },
      { vehicleId: "tempo-traveller-12", vehicleName: "Tempo Traveller 12+1", capacity: "12+1", price: 6200 },
      { vehicleId: "force-urbania-12", vehicleName: "Force Urbania 12 Seater", capacity: "12+1", price: null, customQuote: true, customQuoteNote: "Contact us for Force Urbania 12 Seater pricing on this package." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  {
    id: "akc0006",
    code: "AKC0006",
    slug: "tirumala-kanipakam-5hrs",
    title: "Tirumala & Kanipakam — Short Trip",
    titleTe: "తిరుమల & కాణిపాకం — షార్ట్ ట్రిప్",
    shortTitle: "Tirumala + Kanipakam (~5 hrs)",
    shortTitleTe: "తిరుమల + కాణిపాకం (~5 గంటలు)",
    destinations: ["Tirumala", "Kanipakam"],
    destinationsTe: ["తిరుమల", "కాణిపాకం"],
    temples: [
      "Tirumala — Sri Venkateswara Temple",
      "Kanipakam — Sri Varasidhi Vinayaka Swamy Temple",
    ],
    templesTe: [
      "తిరుమల — శ్రీ వేంకటేశ్వర స్వామి ఆలయం",
      "కాణిపాకం — శ్రీ వరసిద్ధి వినాయక స్వామి ఆలయం",
    ],
    description:
      "A compact ~5-hour package combining Tirumala darshan and the renowned Kanipakam Ganesha temple. Ideal for pilgrims seeking the blessings of both Lord Venkateswara and Lord Ganesha in a focused, efficient trip. Package includes up to 200 km.",
    descriptionTe:
      "తిరుమల శ్రీవారి దర్శనం మరియు కాణిపాకం స్వయంభు వినాయక స్వామి దర్శనాన్ని కలిపే సంక్షిప్త ~5 గంటల ప్యాకేజీ. స్వామి వారి మరియు విఘ్నేశ్వరుని ఆశీస్సులు రెండూ సులభంగా పొందవచ్చు. ఈ ప్యాకేజీలో 200 కి.మీ వరకు చేర్చబడింది.",
    duration: "~5 hours",
    durationTe: "~5 గంటలు",
    distance: {
      allowanceKm: "200 km",
      estimatedRouteKm: 150,
      exceedsAllowance: false,
      distanceNote: "Approx. 150 km circuit — within the 200 km included allowance. Distances beyond 200 km are charged per km.",
      distanceNoteTe: "సుమారు 150 కి.మీ సర్క్యూట్ — చేర్చబడిన 200 కి.మీ పరిమితి లోపలే. అదనపు కిలోమీటర్లకు ప్రత్యేక రేటు వర్తిస్తుంది.",
    },
    category: "nearby",
    image: "/images/akshaya/packages/akc0006-tirumala-kanipakam.webp",
    featured: false,
    startingPrice: 4500,
    enquiryNote: "This package includes up to 200 km. Extra kilometres are charged at the vehicle's per-km rate.",
    inclusions: STD_INCLUSIONS,
    exclusions: STD_EXCLUSIONS,
    prices: [
      { vehicleId: "dzire-amaze-etios", vehicleName: "Dzire / Amaze / Etios", capacity: "4+1", price: 4500 },
      { vehicleId: "ertiga",            vehicleName: "Ertiga",                 capacity: "6+1", price: 5000 },
      { vehicleId: "innova",            vehicleName: "Innova",                 capacity: "7+1", price: 5600 },
      { vehicleId: "innova-crysta",     vehicleName: "Innova Crysta",          capacity: "7+1", price: 6500 },
      { vehicleId: "tavera",            vehicleName: "Tavera",                 capacity: "8+1", price: null, customQuote: true, customQuoteNote: "Contact us for Tavera pricing on this package." },
      { vehicleId: "tempo-traveller-12", vehicleName: "Tempo Traveller 12+1", capacity: "12+1", price: 8900 },
      { vehicleId: "force-urbania-12", vehicleName: "Force Urbania 12 Seater", capacity: "12+1", price: null, customQuote: true, customQuoteNote: "Contact us for Force Urbania 12 Seater pricing on this package." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // AKC0007 — PRICING CONFIRMED by owner (2026-10-09)
  // Published allowance: 300 km (same as SVTT baseline).
  // Starting price: ₹8,000 (same as SVTT baseline — confirmed).
  // Factual route advisory: estimated circuit ~415 km.
  // Extra km beyond 300 km allowance are charged at per-km rate.
  // This is disclosed to the customer via distanceNote + enquiryNote.
  // priceFlag: REMOVED — pricing is owner-confirmed.
  // ─────────────────────────────────────────────────────────────────
  {
    id: "akc0007",
    code: "AKC0007",
    slug: "kanipakam-golden-temple-arunachalam",
    title: "Kanipakam, Golden Temple & Arunachalam",
    titleTe: "కాణిపాకం, గోల్డెన్ టెంపుల్ & అరుణాచలం",
    shortTitle: "3-Temple Pilgrimage (1 Day)",
    shortTitleTe: "3-ఆలయాల యాత్ర (1 రోజు)",
    destinations: ["Kanipakam", "Vellore", "Tiruvannamalai"],
    destinationsTe: ["కాణిపాకం", "వెల్లూరు", "తిరువణ్ణామలై"],
    temples: [
      "Kanipakam — Sri Varasidhi Vinayaka Swamy Temple (Andhra Pradesh)",
      "Sripuram Golden Temple (Vellore, Tamil Nadu)",
      "Arunachaleswara Temple — Tiruvannamalai (Tamil Nadu)",
    ],
    templesTe: [
      "కాణిపాకం — శ్రీ వరసిద్ధి వినాయక స్వామి ఆలయం (ఆంధ్రప్రదేశ్)",
      "శ్రీపురం గోల్డెన్ టెంపుల్ (వెల్లూరు, తమిళనాడు)",
      "శ్రీ అరుణాచలేశ్వర ఆలయం — తిరువణ్ణామలై (తమిళనాడు)",
    ],
    description:
      "A one-day pilgrimage spanning two states — Andhra Pradesh and Tamil Nadu — visiting three spiritually powerful temples. Begin at Kanipakam Ganesha, proceed to the breathtaking all-gold Sripuram Temple in Vellore, and conclude at the ancient Arunachaleswara Shiva temple at the sacred Arunachala Hill. An early start is strongly recommended given the driving distances involved.",
    descriptionTe:
      "రెండు రాష్ట్రాలు (ఆంధ్రప్రదేశ్ మరియు తమిళనాడు) దాటుతూ మూడు మహిమాన్విత ఆలయాలను దర్శించే ఒక రోజు యాత్ర. కాణిపాకం వినాయకునితో మొదలై, వెల్లూరులోని స్వర్ణ దేవాలయం చూసి, పవిత్ర అరుణాచల కొండ చెంతనున్న ప్రాచీన అరుణాచలేశ్వర శివాలయంలో ముగుస్తుంది. దూరం ఎక్కువ ఉన్నందున తెల్లవారుజామునే బయలుదేరడం మంచిది.",
    duration: "1 Day (long day — early start recommended)",
    durationTe: "1 రోజు (దీర్ఘ ప్రయాణం — తెల్లవారుజామునే ప్రారంభం)",
    distance: {
      allowanceKm: "300 km",
      estimatedRouteKm: 415,
      exceedsAllowance: true,
      distanceNote:
        "The estimated driving circuit is approximately 415 km — which exceeds the standard 300 km package allowance. Extra kilometres (approx. 115 km) will be charged at the vehicle's per-km rate. The final fare will be confirmed before your trip.",
      distanceNoteTe:
        "అంచనా ప్రయాణ దూరం సుమారు 415 కి.మీ — ప్రామాణిక 300 కి.మీ పరిమితిని మించుతుంది. అదనపు కిలోమీటర్లు (సుమారు 115 కి.మీ) ఎంచుకున్న వాహనం యొక్క per-km రేటు ప్రకారం లెక్కించబడతాయి.",
    },
    category: "outstation",
    image: "/images/akshaya/packages/akc0007-golden-temple-arunachalam.webp",
    featured: true,
    startingPrice: 8000,
    enquiryNote:
      "This package includes 300 km. The actual driving circuit is approximately 415 km — any kilometres beyond 300 km are charged at the vehicle's per-km rate, and applicable state permit charges are paid separately. Contact us for an exact all-inclusive fare.",
    inclusions: STD_INCLUSIONS,
    exclusions: [
      ...STD_EXCLUSIONS,
      "Tamil Nadu state permit (applicable — paid by customer)",
    ],
    prices: [
      { vehicleId: "dzire-amaze-etios", vehicleName: "Dzire / Amaze / Etios", capacity: "4+1", price: 8000 },
      { vehicleId: "ertiga",            vehicleName: "Ertiga",                 capacity: "6+1", price: 9000 },
      { vehicleId: "innova",            vehicleName: "Innova",                 capacity: "7+1", price: 10000 },
      { vehicleId: "innova-crysta",     vehicleName: "Innova Crysta",          capacity: "7+1", price: 11000 },
      { vehicleId: "tavera",            vehicleName: "Tavera",                 capacity: "8+1", price: null, customQuote: true, customQuoteNote: "Contact us for Tavera pricing on this package." },
      { vehicleId: "tempo-traveller-12", vehicleName: "Tempo Traveller 12+1", capacity: "12+1", price: 14000 },
      { vehicleId: "force-urbania-12", vehicleName: "Force Urbania 12 Seater", capacity: "12+1", price: null, customQuote: true, customQuoteNote: "Contact us for Force Urbania 12 Seater pricing on this package." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // AKC0008 — 2-DAY ROUTE DISTANCE NOTE
  // Day 1: Tirupati → Kanipakam (~75) → Vellore (~75) → Tiruvannamalai (~80) = ~230 km
  // Day 2: Tiruvannamalai → Tiruttani (~110) → Tirupati (~115) = ~225 km
  // Both days within 300 km/day limit — feasible as 2-day trip. ✓
  // ─────────────────────────────────────────────────────────────────
  {
    id: "akc0008",
    code: "AKC0008",
    slug: "kanipakam-golden-temple-arunachalam-tiruttani",
    title: "Kanipakam, Golden Temple, Arunachalam & Tiruttani",
    titleTe: "కాణిపాకం, గోల్డెన్ టెంపుల్, అరుణాచలం & తిరుత్తణి — 2 రోజుల యాత్ర",
    shortTitle: "4-Temple 2-Day Pilgrimage",
    shortTitleTe: "2-రోజుల దక్షిణ భారత తీర్థయాత్ర",
    destinations: ["Kanipakam", "Vellore", "Tiruvannamalai", "Tiruttani"],
    destinationsTe: ["కాణిపాకం", "వెల్లూరు", "తిరువణ్ణామలై", "తిరుత్తణి"],
    temples: [
      "Kanipakam — Sri Varasidhi Vinayaka Swamy Temple (Andhra Pradesh)",
      "Sripuram Golden Temple (Vellore, Tamil Nadu)",
      "Arunachaleswara Temple — Tiruvannamalai (Tamil Nadu)",
      "Murugan Temple — Tiruttani (Tamil Nadu; one of the six Padai Veedus of Lord Murugan)",
    ],
    templesTe: [
      "కాణిపాకం — శ్రీ వరసిద్ధి వినాయక స్వామి ఆలయం (ఆంధ్రప్రదేశ్)",
      "శ్రీపురం గోల్డెన్ టెంపుల్ (వెల్లూరు, తమిళనాడు)",
      "శ్రీ అరుణాచలేశ్వర ఆలయం & రమణ ఆశ్రమం — తిరువణ్ణామలై (తమిళనాడు)",
      "మురుగన్ ఆలయం — తిరుత్తణి (ఆరుపడై వీడులలో ఒకటి, తమిళనాడు)",
    ],
    description:
      "A 2-day multi-state pilgrimage visiting four of the most significant temples across Andhra Pradesh and Tamil Nadu. Day 1 takes you through Kanipakam, Vellore and Tiruvannamalai. Day 2 adds the sacred Tiruttani Murugan temple — one of the six divine abodes of Lord Murugan — before returning to Tirupati. Overnight accommodation is arranged by the customer independently.",
    descriptionTe:
      "ఆంధ్రప్రదేశ్ మరియు తమిళనాడులోని నాలుగు ప్రధాన ఆలయాలను దర్శించే 2 రోజుల యాత్ర. మొదటి రోజు కాణిపాకం, వెల్లూరు, తిరువణ్ణామలై. రెండవ రోజు పవిత్ర తిరుత్తణి మురుగన్ ఆలయాన్ని దర్శించి తిరుపతికి తిరుగు ప్రయాణం. రాత్రి బస కస్టమర్లదే.",
    duration: "2 Days",
    durationTe: "2 రోజులు",
    distance: {
      allowanceKm: "300 km/day",
      estimatedRouteKm: 455, // total across both days
      exceedsAllowance: false,
      distanceNote:
        "Estimated Day 1: ~230 km. Day 2: ~225 km. Both days are within the 300 km/day included allowance. Package prices shown are per-day fares × 2 days.",
      distanceNoteTe:
        "అంచనా 1వ రోజు: ~230 కి.మీ, 2వ రోజు: ~225 కి.మీ. రెండు రోజులూ రోజుకు 300 కి.మీ పరిమితి లోపలే ఉంటాయి.",
    },
    category: "multi-day",
    image: "/images/akshaya/packages/akc0008-2day-pilgrimage.webp",
    featured: false,
    startingPrice: 9000,
    enquiryNote:
      "This is a 2-day trip. Displayed prices are the total for both days. Overnight accommodation is not included — please arrange independently. Final fare is subject to confirmation.",
    inclusions: [
      ...STD_INCLUSIONS,
      "Driver night halt allowance for 2-day trips (included)",
    ],
    exclusions: [
      ...STD_EXCLUSIONS,
      "Overnight accommodation for passengers",
      "Tamil Nadu state permit (applicable — paid by customer)",
    ],
    prices: [
      { vehicleId: "dzire-amaze-etios", vehicleName: "Dzire / Amaze / Etios", capacity: "4+1", price: 9000 },
      { vehicleId: "ertiga",            vehicleName: "Ertiga",                 capacity: "6+1", price: 11000 },
      { vehicleId: "innova",            vehicleName: "Innova",                 capacity: "7+1", price: 14000 },
      { vehicleId: "innova-crysta",     vehicleName: "Innova Crysta",          capacity: "7+1", price: 15000 },
      { vehicleId: "tavera",            vehicleName: "Tavera",                 capacity: "8+1", price: null, customQuote: true, customQuoteNote: "Contact us for Tavera pricing on this 2-day package." },
      { vehicleId: "tempo-traveller-12", vehicleName: "Tempo Traveller 12+1", capacity: "12+1", price: 17000 },
      { vehicleId: "force-urbania-12", vehicleName: "Force Urbania 12 Seater", capacity: "12+1", price: null, customQuote: true, customQuoteNote: "Contact us for Force Urbania 12 Seater pricing on this 2-day package." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  {
    id: "akc0009",
    code: "AKC0009",
    slug: "tirupati-city-temples",
    title: "Tirupati City Temples",
    titleTe: "తిరుపతి నగర ఆలయాల పర్యటన",
    shortTitle: "Tirupati City Temples",
    shortTitleTe: "తిరుపతి నగర ఆలయాలు",
    destinations: ["Tirupati"],
    destinationsTe: ["తిరుపతి"],
    temples: [
      "ISKCON Tirupati",
      "Kapilatheertham",
      "Govindaraja Swamy Temple",
      "Padmavathi Temple (Tiruchanur)",
      "Srinivasa Mangapuram",
      "Vakulamatha Temple",
    ],
    templesTe: [
      "ఇస్కాన్ తిరుపతి (రాధా గోవింద మందిరం)",
      "కపిలతీర్థం (శ్రీ కపిలేశ్వర స్వామి)",
      "గోవిందరాజ స్వామి ఆలయం",
      "శ్రీ పద్మావతి అమ్మవారి ఆలయం (తిరుచానూరు)",
      "శ్రీనివాస మంగాపురం (కల్యాణ వేంకటేశ్వర స్వామి)",
      "వకుళమాత ఆలయం",
    ],
    description:
      "Explore the rich temple heritage of Tirupati city without climbing Tirumala. This package covers the most significant temples located in and around Tirupati — perfect for devotees who have already visited Tirumala, prefer a city-level darshan, or are short on time.",
    descriptionTe:
      "తిరుమల కొండ ఎక్కకుండా తిరుపతి నగరంలోని సుసంపన్నమైన దేవాలయాలను దర్శించండి. తిరుపతి పరిసరాల్లోని ముఖ్య ఆలయాలను కవర్ చేస్తుంది — ఇప్పటికే తిరుమల దర్శనం పూర్తయిన వారికి లేదా సమయం తక్కువగా ఉన్న వారికి ఇది ఉత్తమ ఎంపిక.",
    duration: "1 Day",
    durationTe: "1 రోజు",
    distance: {
      allowanceKm: "300 km",
      estimatedRouteKm: 50,
      exceedsAllowance: false,
      distanceNote: "Approx. 50 km circuit within Tirupati — well within the 300 km included allowance.",
      distanceNoteTe: "తిరుపతి పరిధిలో సుమారు 50 కి.మీ సర్క్యూట్ — చేర్చబడిన 300 కి.మీ పరిమితి లోపలే.",
    },
    category: "local",
    image: "/images/akshaya/packages/akc0009-tirupati-city.webp",
    featured: false,
    startingPrice: 2300,
    enquiryNote: EXTRA_KM_NOTE,
    inclusions: STD_INCLUSIONS,
    exclusions: STD_EXCLUSIONS,
    prices: [
      { vehicleId: "dzire-amaze-etios", vehicleName: "Dzire / Amaze / Etios", capacity: "4+1", price: 2300 },
      { vehicleId: "ertiga",            vehicleName: "Ertiga",                 capacity: "6+1", price: 2500 },
      { vehicleId: "innova",            vehicleName: "Innova",                 capacity: "7+1", price: 2800 },
      { vehicleId: "innova-crysta",     vehicleName: "Innova Crysta",          capacity: "7+1", price: 3300 },
      { vehicleId: "tavera",            vehicleName: "Tavera",                 capacity: "8+1", price: null, customQuote: true, customQuoteNote: "Contact us for Tavera pricing on this package." },
      { vehicleId: "tempo-traveller-12", vehicleName: "Tempo Traveller 12+1", capacity: "12+1", price: 4000 },
      { vehicleId: "force-urbania-12", vehicleName: "Force Urbania 12 Seater", capacity: "12+1", price: null, customQuote: true, customQuoteNote: "Contact us for Force Urbania 12 Seater pricing on this package." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  {
    id: "akc0010",
    code: "AKC0010",
    slug: "padmavathi-srikalahasti",
    title: "Padmavathi Temple & Sri Kalahasti",
    titleTe: "పద్మావతి అమ్మవారి ఆలయం & శ్రీకాళహస్తి",
    shortTitle: "Padmavathi + Sri Kalahasti (~5 hrs)",
    shortTitleTe: "పద్మావతి + శ్రీకాళహస్తి (~5 గంటలు)",
    destinations: ["Tirupati", "Sri Kalahasti"],
    destinationsTe: ["తిరుపతి", "శ్రీకాళహస్తి"],
    temples: [
      "Padmavathi Temple (Tiruchanur)",
      "Sri Kalahasti — Kalahastiswara Temple (Vayu Lingam, one of the Pancha Bhuta Stalams)",
    ],
    templesTe: [
      "శ్రీ పద్మావతి అమ్మవారి ఆలయం (తిరుచానూరు)",
      "శ్రీకాళహస్తి — శ్రీ కాళహస్తీశ్వర ఆలయం (వాయు లింగం, పంచభూత క్షేత్రం)",
    ],
    description:
      "A focused ~5-hour package combining Goddess Padmavathi at Tiruchanur with the revered Kalahastiswara Shiva temple at Sri Kalahasti — one of the Pancha Bhuta Stalams representing the air element. A compact yet deeply meaningful spiritual combination for Vishnu and Shiva devotees alike.",
    descriptionTe:
      "తిరుచానూరులోని శ్రీ పద్మావతి అమ్మవారిని మరియు శ్రీకాళహస్తిలోని శ్రీ కాళహస్తీశ్వర శివాలయాన్ని కలిపే సంక్షిప్త ~5 గంటల ప్యాకేజీ. విష్ణు మరియు శివ భక్తులకు ఆధ్యాత్మికంగా అర్థవంతమైన కలయిక.",
    duration: "~5 hours",
    durationTe: "~5 గంటలు",
    distance: {
      allowanceKm: "300 km",
      estimatedRouteKm: 100,
      exceedsAllowance: false,
      distanceNote: "Approx. 100 km circuit — well within the 300 km included allowance.",
      distanceNoteTe: "సుమారు 100 కి.మీ సర్క్యూట్ — చేర్చబడిన 300 కి.మీ పరిమితి లోపలే.",
    },
    category: "nearby",
    image: "/images/akshaya/packages/akc0010-padmavathi-srikalahasti.webp",
    featured: false,
    startingPrice: 2500,
    enquiryNote: EXTRA_KM_NOTE,
    inclusions: STD_INCLUSIONS,
    exclusions: STD_EXCLUSIONS,
    prices: [
      { vehicleId: "dzire-amaze-etios", vehicleName: "Dzire / Amaze / Etios", capacity: "4+1", price: 2500 },
      { vehicleId: "ertiga",            vehicleName: "Ertiga",                 capacity: "6+1", price: 3500 },
      { vehicleId: "innova",            vehicleName: "Innova",                 capacity: "7+1", price: 4000 },
      { vehicleId: "innova-crysta",     vehicleName: "Innova Crysta",          capacity: "7+1", price: 4500 },
      { vehicleId: "tavera",            vehicleName: "Tavera",                 capacity: "8+1", price: null, customQuote: true, customQuoteNote: "Contact us for Tavera pricing on this package." },
      { vehicleId: "tempo-traveller-12", vehicleName: "Tempo Traveller 12+1", capacity: "12+1", price: 6000 },
      { vehicleId: "force-urbania-12", vehicleName: "Force Urbania 12 Seater", capacity: "12+1", price: null, customQuote: true, customQuoteNote: "Contact us for Force Urbania 12 Seater pricing on this package." },
    ],
  },
];

// ── Helpers ───────────────────────────────────────────────────────

export function getPackageBySlug(slug: string): Package | undefined {
  return PACKAGES.find((p) => p.slug === slug);
}

export function getPackageById(id: string): Package | undefined {
  return PACKAGES.find((p) => p.id === id);
}

export function getFeaturedPackages(): Package[] {
  return PACKAGES.filter((p) => p.featured);
}

export function getPackagesByCategory(
  category: Package["category"]
): Package[] {
  return PACKAGES.filter((p) => p.category === category);
}

// ── Price flags — for owner verification before launch ────────────
// AKC0007 prices are flagged because the route exceeds 300 km allowance.
// Owner should confirm final pricing with extra-km included or adjust.
export const PRICE_FLAGS = PACKAGES.flatMap((pkg) =>
  pkg.prices
    .filter((p) => p.priceFlag)
    .map((p) => ({
      package: pkg.code,
      packageTitle: pkg.title,
      vehicleName: p.vehicleName,
      price: p.price,
      note: p.priceFlagNote,
    }))
);

// ── Custom-quote rows — for awareness ────────────────────────────
// All Tavera (8+1) and Force Urbania 12 Seater rows across all packages.
export const CUSTOM_QUOTE_ROWS = PACKAGES.flatMap((pkg) =>
  pkg.prices
    .filter((p) => p.customQuote)
    .map((p) => ({
      package: pkg.code,
      packageTitle: pkg.title,
      vehicleName: p.vehicleName,
      note: p.customQuoteNote,
    }))
);

// ── ID mapping reference (for developer use only, never display SVTT IDs) ──
// AKC0001 → was SVTT0001 | AKC0002 → SVTT0002 | ... | AKC0010 → SVTT0010
export const AKC_TO_LEGACY_MAP: Record<string, string> = {
  "AKC0001": "SVTT0001",
  "AKC0002": "SVTT0002",
  "AKC0003": "SVTT0003",
  "AKC0004": "SVTT0004",
  "AKC0005": "SVTT0005",
  "AKC0006": "SVTT0006",
  "AKC0007": "SVTT0007",
  "AKC0008": "SVTT0008",
  "AKC0009": "SVTT0009",
  "AKC0010": "SVTT0010",
} as const;