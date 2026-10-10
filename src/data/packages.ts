// Akshaya Cabs — Tour Package Data
// akshayacabs.com | Tirupati, Andhra Pradesh
// Source: Verified master execution plan Section 01E (confirmed 2026-10-09).
//
// RULES:
// - Never invent prices. Use only master-plan-verified price matrix values.
// - SVTT identifiers (SVTT0001 etc.) must NEVER appear in any user-facing output.
// - Public IDs are AKC0001 … AKC0010 (map is deterministic — do not shuffle).
// - Tavera (8+1) and Tempo 17+1 are shown with customQuote: true — no invented price.
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
    shortTitle: "Tirupati + Tirumala Temples",
    destinations: ["Tirupati", "Tirumala"],
    temples: [
      "Tirumala — Sri Venkateswara Temple",
      "ISKCON Tirupati",
      "Kapilatheertham",
      "Govindaraja Swamy Temple",
      "Padmavathi Temple (Tiruchanur)",
      "Vakulamatha Temple",
      "Srinivasa Mangapuram",
    ],
    description:
      "A full-day Tirupati and Tirumala darshan package covering the most important temples in the region. Receive the blessings of Lord Venkateswara at Tirumala and visit the celebrated temples of Tirupati city — all in a single, well-organised day trip.",
    duration: "1 Day",
    distance: {
      allowanceKm: "300 km",
      estimatedRouteKm: 80,
      exceedsAllowance: false,
      distanceNote: "Approx. 80 km round trip — well within the 300 km included allowance.",
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
      { vehicleId: "tempo-traveller-17", vehicleName: "Tempo Traveller 17+1", capacity: "17+1", price: null, customQuote: true, customQuoteNote: "Contact us for Tempo Traveller 17+1 pricing on this package." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  {
    id: "akc0002",
    code: "AKC0002",
    slug: "tirumala-hill-temples",
    title: "Tirumala Hill Temples & Sacred Sites",
    shortTitle: "Tirumala Hill Temples",
    destinations: ["Tirumala"],
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
    description:
      "Explore the sacred Tirumala hills beyond the main temple — including natural wonders, ancient shrines and sites of immense spiritual significance. This package is ideal for devotees who wish to spend a full day experiencing the complete spiritual and natural landscape of the Tirumala hill.",
    duration: "1 Day",
    distance: {
      allowanceKm: "300 km",
      estimatedRouteKm: 60,
      exceedsAllowance: false,
      distanceNote: "Approx. 60 km round trip — well within the 300 km included allowance.",
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
      { vehicleId: "tempo-traveller-17", vehicleName: "Tempo Traveller 17+1", capacity: "17+1", price: null, customQuote: true, customQuoteNote: "Contact us for Tempo Traveller 17+1 pricing on this package." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  {
    id: "akc0003",
    code: "AKC0003",
    slug: "tirumala-kanipakam-padmavathi",
    title: "Tirumala, Kanipakam & Padmavathi",
    shortTitle: "Tirumala + Kanipakam + Padmavathi",
    destinations: ["Tirumala", "Kanipakam", "Tirupati"],
    temples: [
      "Tirumala — Sri Venkateswara Temple",
      "Kanipakam — Sri Varasidhi Vinayaka Swamy Temple",
      "Padmavathi Temple (Tiruchanur)",
      "Vakulamatha Temple",
      "Srinivasa Mangapuram",
    ],
    description:
      "A complete one-day pilgrimage combining three powerful shrines — Lord Venkateswara at Tirumala, Lord Ganesha at the famous Kanipakam temple, and Goddess Padmavathi at Tiruchanur. A deeply fulfilling spiritual journey for the whole family.",
    duration: "1 Day",
    distance: {
      allowanceKm: "300 km",
      estimatedRouteKm: 200,
      exceedsAllowance: false,
      distanceNote: "Approx. 200 km circuit — within the 300 km included allowance.",
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
      { vehicleId: "tempo-traveller-17", vehicleName: "Tempo Traveller 17+1", capacity: "17+1", price: null, customQuote: true, customQuoteNote: "Contact us for Tempo Traveller 17+1 pricing on this package." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  {
    id: "akc0004",
    code: "AKC0004",
    slug: "tirumala-srikalahasti-padmavathi",
    title: "Tirumala, Sri Kalahasti & Padmavathi",
    shortTitle: "Tirumala + Sri Kalahasti",
    destinations: ["Tirumala", "Sri Kalahasti", "Tirupati"],
    temples: [
      "Tirumala — Sri Venkateswara Temple",
      "Sri Kalahasti — Kalahastiswara Temple (Vayu Lingam, one of the Pancha Bhuta Stalams)",
      "Padmavathi Temple (Tiruchanur)",
    ],
    description:
      "Visit three sacred temples in a single day. Sri Kalahasti is one of the ancient Pancha Bhuta Stalams, representing the air element, and holds immense significance for Shiva devotees. Combined with Tirumala darshan and Goddess Padmavathi's blessings, this is a spiritually complete day trip.",
    duration: "1 Day",
    distance: {
      allowanceKm: "300 km",
      estimatedRouteKm: 150,
      exceedsAllowance: false,
      distanceNote: "Approx. 150 km circuit — within the 300 km included allowance.",
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
      { vehicleId: "tempo-traveller-17", vehicleName: "Tempo Traveller 17+1", capacity: "17+1", price: null, customQuote: true, customQuoteNote: "Contact us for Tempo Traveller 17+1 pricing on this package." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  {
    id: "akc0005",
    code: "AKC0005",
    slug: "tirumala-padmavathi-7hrs",
    title: "Tirumala & Padmavathi — Half Day",
    shortTitle: "Tirumala + Padmavathi (~7 hrs)",
    destinations: ["Tirumala", "Tirupati"],
    temples: [
      "Tirumala — Sri Venkateswara Temple",
      "Padmavathi Temple (Tiruchanur)",
    ],
    description:
      "A focused ~7-hour pilgrimage visiting the two most important temples of the Tirupati region — Lord Venkateswara at Tirumala and Goddess Padmavathi at Tiruchanur. Perfect for pilgrims with a tighter schedule who want to complete these two essential darshans comfortably.",
    duration: "~7 hours",
    distance: {
      allowanceKm: "300 km",
      estimatedRouteKm: 60,
      exceedsAllowance: false,
      distanceNote: "Approx. 60 km round trip — well within the 300 km included allowance.",
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
      { vehicleId: "tempo-traveller-17", vehicleName: "Tempo Traveller 17+1", capacity: "17+1", price: null, customQuote: true, customQuoteNote: "Contact us for Tempo Traveller 17+1 pricing on this package." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  {
    id: "akc0006",
    code: "AKC0006",
    slug: "tirumala-kanipakam-5hrs",
    title: "Tirumala & Kanipakam — Short Trip",
    shortTitle: "Tirumala + Kanipakam (~5 hrs)",
    destinations: ["Tirumala", "Kanipakam"],
    temples: [
      "Tirumala — Sri Venkateswara Temple",
      "Kanipakam — Sri Varasidhi Vinayaka Swamy Temple",
    ],
    description:
      "A compact ~5-hour package combining Tirumala darshan and the renowned Kanipakam Ganesha temple. Ideal for pilgrims seeking the blessings of both Lord Venkateswara and Lord Ganesha in a focused, efficient trip. Package includes up to 200 km.",
    duration: "~5 hours",
    distance: {
      allowanceKm: "200 km",
      estimatedRouteKm: 150,
      exceedsAllowance: false,
      distanceNote: "Approx. 150 km circuit — within the 200 km included allowance. Distances beyond 200 km are charged per km.",
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
      { vehicleId: "tempo-traveller-17", vehicleName: "Tempo Traveller 17+1", capacity: "17+1", price: null, customQuote: true, customQuoteNote: "Contact us for Tempo Traveller 17+1 pricing on this package." },
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
    shortTitle: "3-Temple Pilgrimage (1 Day)",
    destinations: ["Kanipakam", "Vellore", "Tiruvannamalai"],
    temples: [
      "Kanipakam — Sri Varasidhi Vinayaka Swamy Temple (Andhra Pradesh)",
      "Sripuram Golden Temple (Vellore, Tamil Nadu)",
      "Arunachaleswara Temple — Tiruvannamalai (Tamil Nadu)",
    ],
    description:
      "A one-day pilgrimage spanning two states — Andhra Pradesh and Tamil Nadu — visiting three spiritually powerful temples. Begin at Kanipakam Ganesha, proceed to the breathtaking all-gold Sripuram Temple in Vellore, and conclude at the ancient Arunachaleswara Shiva temple at the sacred Arunachala Hill. An early start is strongly recommended given the driving distances involved.",
    duration: "1 Day (long day — early start recommended)",
    distance: {
      allowanceKm: "300 km",
      estimatedRouteKm: 415,
      exceedsAllowance: true,
      distanceNote:
        "The estimated driving circuit is approximately 415 km — which exceeds the standard 300 km package allowance. Extra kilometres (approx. 115 km) will be charged at the vehicle's per-km rate. The final fare will be confirmed before your trip.",
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
      { vehicleId: "tempo-traveller-17", vehicleName: "Tempo Traveller 17+1", capacity: "17+1", price: null, customQuote: true, customQuoteNote: "Contact us for Tempo Traveller 17+1 pricing on this package." },
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
    shortTitle: "4-Temple 2-Day Pilgrimage",
    destinations: ["Kanipakam", "Vellore", "Tiruvannamalai", "Tiruttani"],
    temples: [
      "Kanipakam — Sri Varasidhi Vinayaka Swamy Temple (Andhra Pradesh)",
      "Sripuram Golden Temple (Vellore, Tamil Nadu)",
      "Arunachaleswara Temple — Tiruvannamalai (Tamil Nadu)",
      "Murugan Temple — Tiruttani (Tamil Nadu; one of the six Padai Veedus of Lord Murugan)",
    ],
    description:
      "A 2-day multi-state pilgrimage visiting four of the most significant temples across Andhra Pradesh and Tamil Nadu. Day 1 takes you through Kanipakam, Vellore and Tiruvannamalai. Day 2 adds the sacred Tiruttani Murugan temple — one of the six divine abodes of Lord Murugan — before returning to Tirupati. Overnight accommodation is arranged by the customer independently.",
    duration: "2 Days",
    distance: {
      allowanceKm: "300 km/day",
      estimatedRouteKm: 455, // total across both days
      exceedsAllowance: false,
      distanceNote:
        "Estimated Day 1: ~230 km. Day 2: ~225 km. Both days are within the 300 km/day included allowance. Package prices shown are per-day fares × 2 days.",
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
      { vehicleId: "tempo-traveller-17", vehicleName: "Tempo Traveller 17+1", capacity: "17+1", price: null, customQuote: true, customQuoteNote: "Contact us for Tempo Traveller 17+1 pricing on this 2-day package." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  {
    id: "akc0009",
    code: "AKC0009",
    slug: "tirupati-city-temples",
    title: "Tirupati City Temples",
    shortTitle: "Tirupati City Temples",
    destinations: ["Tirupati"],
    temples: [
      "ISKCON Tirupati",
      "Kapilatheertham",
      "Govindaraja Swamy Temple",
      "Padmavathi Temple (Tiruchanur)",
      "Srinivasa Mangapuram",
      "Vakulamatha Temple",
    ],
    description:
      "Explore the rich temple heritage of Tirupati city without climbing Tirumala. This package covers the most significant temples located in and around Tirupati — perfect for devotees who have already visited Tirumala, prefer a city-level darshan, or are short on time.",
    duration: "1 Day",
    distance: {
      allowanceKm: "300 km",
      estimatedRouteKm: 50,
      exceedsAllowance: false,
      distanceNote: "Approx. 50 km circuit within Tirupati — well within the 300 km included allowance.",
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
      { vehicleId: "tempo-traveller-17", vehicleName: "Tempo Traveller 17+1", capacity: "17+1", price: null, customQuote: true, customQuoteNote: "Contact us for Tempo Traveller 17+1 pricing on this package." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  {
    id: "akc0010",
    code: "AKC0010",
    slug: "padmavathi-srikalahasti",
    title: "Padmavathi Temple & Sri Kalahasti",
    shortTitle: "Padmavathi + Sri Kalahasti (~5 hrs)",
    destinations: ["Tirupati", "Sri Kalahasti"],
    temples: [
      "Padmavathi Temple (Tiruchanur)",
      "Sri Kalahasti — Kalahastiswara Temple (Vayu Lingam, one of the Pancha Bhuta Stalams)",
    ],
    description:
      "A focused ~5-hour package combining Goddess Padmavathi at Tiruchanur with the revered Kalahastiswara Shiva temple at Sri Kalahasti — one of the Pancha Bhuta Stalams representing the air element. A compact yet deeply meaningful spiritual combination for Vishnu and Shiva devotees alike.",
    duration: "~5 hours",
    distance: {
      allowanceKm: "300 km",
      estimatedRouteKm: 100,
      exceedsAllowance: false,
      distanceNote: "Approx. 100 km circuit — well within the 300 km included allowance.",
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
      { vehicleId: "tempo-traveller-17", vehicleName: "Tempo Traveller 17+1", capacity: "17+1", price: null, customQuote: true, customQuoteNote: "Contact us for Tempo Traveller 17+1 pricing on this package." },
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
// All Tavera (8+1) and Tempo Traveller 17+1 rows across all packages.
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