// SVTT Tour Package Data
// Sri Vinayaka Tours & Travels — svtttirupati.com
// Source: https://srivinayakatours.netlify.app/ (verified 2026-10-02)
// RULE: Never invent prices. Flag suspicious values with PRICE_FLAG.
// RULE: Do NOT invent package codes. Use codes as found in source.
// NOTE: Tolls, Parking, State Permits paid by customer.

import type { Package } from "@/types";

export const PACKAGES: Package[] = [
  {
    id: "svtt0001",
    code: "SVTT0001",
    slug: "tirupati-tirumala-local-temples",
    title: "Tirupati - Tirumala Local Temples",
    shortTitle: "Tirupati + Tirumala Temples",
    destinations: ["Tirupati", "Tirumala"],
    temples: [
      "Tirumala (Sri Venkateswara Temple)",
      "ISKCON Tirupati",
      "Kapilatheertham",
      "Govindaraja Swamy Temple",
      "Padmavathi Temple",
      "Vakulamatha Temple",
      "Srinivasa Mangapuram",
    ],
    description:
      "A comprehensive Tirupati and Tirumala darshan package covering the most sacred temples of the Tirupati region. Experience the divine blessings of Lord Venkateswara at Tirumala along with the most important temples in and around Tirupati.",
    duration: "1 Day",
    kmLimit: "300 km",
    category: "local",
    image: "/images/packages/svtt0001-tirupati-tirumala-local.webp",
    featured: true,
    startingPrice: 3600,
    prices: [
      { vehicleId: "dzire-amaze-etios", vehicleName: "Dzire / Amaze / Etios", capacity: "4+1", price: 3600 },
      { vehicleId: "ertiga", vehicleName: "Ertiga", capacity: "6+1", price: 4300 },
      { vehicleId: "innova", vehicleName: "Innova", capacity: "7+1", price: 5000 },
      { vehicleId: "innova-crysta", vehicleName: "Innova Crysta", capacity: "7+1", price: 5700 },
      { vehicleId: "tempo-traveller-12", vehicleName: "Tempo Traveller", capacity: "12+1", price: 7300 },
    ],
  },

  {
    id: "svtt0002",
    code: "SVTT0002",
    slug: "tirupati-to-tirumala-local-temples",
    title: "Tirupati to Tirumala Local Temples",
    shortTitle: "Tirumala Hill Temples",
    destinations: ["Tirupati", "Tirumala"],
    temples: [
      "Tirumala (Sri Venkateswara Temple)",
      "Varahaswamy Temple",
      "Vengamamba Museum",
      "Srivari Padhalu",
      "Silathoranam",
      "Japali Theertham",
      "Akasaganga",
      "Papavinasanam",
    ],
    description:
      "Explore the sacred Tirumala hills and its divine temples and natural wonders. This package focuses on the spiritual and natural attractions on the Tirumala hill, including the famous Silathoranam natural arch and the scenic Papavinasanam waterfall.",
    duration: "1 Day",
    kmLimit: "300 km",
    category: "local",
    image: "/images/packages/svtt0002-tirumala-local-temples.webp",
    featured: true,
    startingPrice: 3300,
    prices: [
      { vehicleId: "dzire-amaze-etios", vehicleName: "Dzire / Amaze / Etios", capacity: "4+1", price: 3300 },
      { vehicleId: "ertiga", vehicleName: "Ertiga", capacity: "6+1", price: 4000 },
      { vehicleId: "innova", vehicleName: "Innova", capacity: "7+1", price: 4900 },
      { vehicleId: "innova-crysta", vehicleName: "Innova Crysta", capacity: "7+1", price: 5600 },
      { vehicleId: "tempo-traveller-12", vehicleName: "Tempo Traveller", capacity: "12+1", price: 6900 },
    ],
  },

  {
    id: "svtt0003",
    code: "SVTT0003",
    slug: "tirumala-kanipakam-padmavathi",
    title: "Tirumala & Kanipakam - Padmavathi",
    shortTitle: "Tirumala + Kanipakam",
    destinations: ["Tirumala", "Kanipakam", "Tirupati"],
    temples: [
      "Tirumala (Sri Venkateswara Temple)",
      "Kanipakam (Sri Varasidhi Vinayaka Swamy Temple)",
      "Padmavathi Temple (Tiruchanur)",
      "Vakulamatha Temple",
      "Srinivasa Mangapuram",
    ],
    description:
      "A blessed combination of Tirumala darshan and the famous Kanipakam Vinayaka temple visit. This package brings together the divine blessings of Lord Venkateswara at Tirumala and Lord Ganesha at Kanipakam, along with the sacred Padmavathi Temple.",
    duration: "1 Day",
    kmLimit: "300 km",
    category: "nearby",
    image: "/images/packages/svtt0003-tirumala-kanipakam-padmavathi.webp",
    featured: true,
    startingPrice: 5200,
    prices: [
      { vehicleId: "dzire-amaze-etios", vehicleName: "Dzire / Amaze / Etios", capacity: "4+1", price: 5200 },
      { vehicleId: "ertiga", vehicleName: "Ertiga", capacity: "6+1", price: 5900 },
      { vehicleId: "innova", vehicleName: "Innova", capacity: "7+1", price: 6500 },
      { vehicleId: "innova-crysta", vehicleName: "Innova Crysta", capacity: "7+1", price: 7500 },
      { vehicleId: "tempo-traveller-12", vehicleName: "Tempo Traveller", capacity: "12+1", price: 9900 },
    ],
  },

  {
    id: "svtt0004",
    code: "SVTT0004",
    slug: "tirumala-srikalahasti-padmavathi",
    title: "Tirumala - Sri Kalahasti - Padmavathi",
    shortTitle: "Tirumala + Sri Kalahasti",
    destinations: ["Tirumala", "Sri Kalahasti", "Tirupati"],
    temples: [
      "Tirumala (Sri Venkateswara Temple)",
      "Sri Kalahasti (Kalahastiswara Temple — Vayu Linga)",
      "Padmavathi Temple (Tiruchanur)",
    ],
    description:
      "Visit three divine temples in one day. Sri Kalahasti is one of the Pancha Bhuta Stalams, dedicated to Lord Shiva as the Vayu Linga (wind element). This package combines Tirumala darshan with the ancient Kalahastiswara Temple and the Padmavathi Temple.",
    duration: "1 Day",
    kmLimit: "300 km",
    category: "nearby",
    image: "/images/packages/svtt0004-tirumala-srikalahasti-padmavathi.webp",
    featured: false,
    startingPrice: 4300,
    prices: [
      { vehicleId: "dzire-amaze-etios", vehicleName: "Dzire / Amaze / Etios", capacity: "4+1", price: 4300 },
      { vehicleId: "ertiga", vehicleName: "Ertiga", capacity: "6+1", price: 4800 },
      { vehicleId: "innova", vehicleName: "Innova", capacity: "7+1", price: 5600 },
      { vehicleId: "innova-crysta", vehicleName: "Innova Crysta", capacity: "7+1", price: 6400 },
      { vehicleId: "tempo-traveller-12", vehicleName: "Tempo Traveller", capacity: "12+1", price: 7900 },
    ],
  },

  {
    id: "svtt0005",
    code: "SVTT0005",
    slug: "tirumala-padmavathi",
    title: "Tirumala - Padmavathi",
    shortTitle: "Tirumala + Padmavathi (7 hrs)",
    destinations: ["Tirumala", "Tirupati"],
    temples: [
      "Tirumala (Sri Venkateswara Temple)",
      "Padmavathi Temple (Tiruchanur)",
    ],
    description:
      "A focused 7-hour package combining the most important temple visits in the Tirupati region — Lord Venkateswara at Tirumala and Goddess Padmavathi at Tiruchanur. Ideal for pilgrims with limited time who want to complete the most sacred darshans.",
    duration: "1 Day (7 hrs)",
    kmLimit: "300 km",
    category: "local",
    image: "/images/packages/svtt0005-tirumala-padmavathi.webp",
    featured: true,
    startingPrice: 3000,
    prices: [
      { vehicleId: "dzire-amaze-etios", vehicleName: "Dzire / Amaze / Etios", capacity: "4+1", price: 3000 },
      { vehicleId: "ertiga", vehicleName: "Ertiga", capacity: "6+1", price: 3600 },
      { vehicleId: "innova", vehicleName: "Innova", capacity: "7+1", price: 4400 },
      { vehicleId: "innova-crysta", vehicleName: "Innova Crysta", capacity: "7+1", price: 5000 },
      { vehicleId: "tempo-traveller-12", vehicleName: "Tempo Traveller", capacity: "12+1", price: 6200 },
    ],
  },

  {
    id: "svtt0006",
    code: "SVTT0006",
    slug: "tirumala-kanipakam",
    title: "Tirumala - Kanipakam",
    shortTitle: "Tirumala + Kanipakam (5 hrs)",
    destinations: ["Tirumala", "Kanipakam"],
    temples: [
      "Tirumala (Sri Venkateswara Temple)",
      "Kanipakam (Sri Varasidhi Vinayaka Swamy Temple)",
    ],
    description:
      "A compact 5-hour package visiting Tirumala and the famous Kanipakam Ganesha temple. Limited to 200 km, this package is ideal for pilgrims who want to receive blessings from both Lord Venkateswara and Lord Ganesha in a single day trip.",
    duration: "1 Day (5 hrs)",
    kmLimit: "200 km",
    category: "nearby",
    image: "/images/packages/svtt0006-tirumala-kanipakam.webp",
    featured: false,
    startingPrice: 4500,
    prices: [
      { vehicleId: "dzire-amaze-etios", vehicleName: "Dzire / Amaze / Etios", capacity: "4+1", price: 4500 },
      { vehicleId: "ertiga", vehicleName: "Ertiga", capacity: "6+1", price: 5000 },
      { vehicleId: "innova", vehicleName: "Innova", capacity: "7+1", price: 5600 },
      { vehicleId: "innova-crysta", vehicleName: "Innova Crysta", capacity: "7+1", price: 6500 },
      { vehicleId: "tempo-traveller-12", vehicleName: "Tempo Traveller", capacity: "12+1", price: 8900 },
    ],
  },

  {
    id: "svtt0007",
    code: "SVTT0007",
    slug: "kanipakam-golden-temple-arunachalam",
    title: "Kanipakam - Golden Temple - Arunachalam",
    shortTitle: "Kanipakam + Golden Temple + Arunachalam",
    destinations: ["Kanipakam", "Vellore", "Tiruvannamalai"],
    temples: [
      "Kanipakam (Sri Varasidhi Vinayaka Swamy Temple)",
      "Sripuram Golden Temple (Vellore)",
      "Arunachaleswara Temple (Tiruvannamalai)",
    ],
    description:
      "A magnificent 1-day pilgrimage covering three spiritually powerful temples across Andhra Pradesh and Tamil Nadu. Visit Kanipakam Ganesha, the stunning all-gold Sripuram Temple in Vellore, and the ancient Arunachaleswara Shiva temple at the foot of the sacred Arunachala Hill.",
    duration: "1 Day",
    kmLimit: "300 km",
    category: "outstation",
    image: "/images/packages/svtt0007-kanipakam-golden-temple-arunachalam.webp",
    featured: true,
    startingPrice: 8000,
    prices: [
      { vehicleId: "dzire-amaze-etios", vehicleName: "Dzire / Amaze / Etios", capacity: "4+1", price: 8000 },
      { vehicleId: "ertiga", vehicleName: "Ertiga", capacity: "6+1", price: 9000 },
      // PRICE_FLAG: verify before launch
      // Source shows Rs.1000 for Innova on SVTT0007 — this appears to be a data entry error.
      // Surrounding package prices for Innova range from Rs.4,400 to Rs.14,000.
      // Likely intended value: Rs.10,000. Owner confirmation required before going live.
      { vehicleId: "innova", vehicleName: "Innova", capacity: "7+1", price: 1000, priceFlag: true, priceFlagNote: "Source shows Rs.1,000 — likely Rs.10,000. Verify with owner." },
      { vehicleId: "innova-crysta", vehicleName: "Innova Crysta", capacity: "7+1", price: 11000 },
      { vehicleId: "tempo-traveller-12", vehicleName: "Tempo Traveller", capacity: "12+1", price: 14000 },
    ],
  },

  {
    id: "svtt0008",
    code: "SVTT0008",
    slug: "kanipakam-golden-temple-arunachalam-tiruthani",
    title: "Kanipakam - Golden Temple - Arunachalam - Tiruthani",
    shortTitle: "4-Temple 2-Day Tour",
    destinations: ["Kanipakam", "Vellore", "Tiruvannamalai", "Tiruttani"],
    temples: [
      "Kanipakam (Sri Varasidhi Vinayaka Swamy Temple)",
      "Sripuram Golden Temple (Vellore)",
      "Arunachaleswara Temple (Tiruvannamalai)",
      "Murugan Temple (Tiruttani — One of the 6 Padai Veedus)",
    ],
    description:
      "A comprehensive 2-day pilgrimage tour visiting four of the most significant temples in Andhra Pradesh and Tamil Nadu. This extended tour adds the sacred Tiruttani Murugan temple — one of the six abodes of Lord Murugan — to the SVTT0007 route, creating a complete multi-state pilgrimage experience.",
    duration: "2 Days",
    kmLimit: "300 km/day",
    category: "multi-day",
    image: "/images/packages/svtt0008-kanipakam-golden-arunachalam-tiruthani.webp",
    featured: false,
    startingPrice: 9000,
    prices: [
      { vehicleId: "dzire-amaze-etios", vehicleName: "Dzire / Amaze / Etios", capacity: "4+1", price: 9000 },
      { vehicleId: "ertiga", vehicleName: "Ertiga", capacity: "6+1", price: 11000 },
      { vehicleId: "innova", vehicleName: "Innova", capacity: "7+1", price: 14000 },
      { vehicleId: "innova-crysta", vehicleName: "Innova Crysta", capacity: "7+1", price: 15000 },
      { vehicleId: "tempo-traveller-12", vehicleName: "Tempo Traveller", capacity: "12+1", price: 17000 },
    ],
  },

  {
    id: "svtt0009",
    code: "SVTT0009",
    slug: "tirupati-local-temples",
    title: "Tirupati Local Temples",
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
      "Explore the rich temple heritage of Tirupati city without climbing Tirumala. This package covers the most important temples located in and around Tirupati, offering a complete local darshan experience for devotees who have already visited Tirumala or prefer to visit city temples only.",
    duration: "1 Day",
    kmLimit: "300 km",
    category: "local",
    image: "/images/packages/svtt0009-tirupati-local-temples.webp",
    featured: false,
    startingPrice: 2300,
    prices: [
      { vehicleId: "dzire-amaze-etios", vehicleName: "Dzire / Amaze / Etios", capacity: "4+1", price: 2300 },
      { vehicleId: "ertiga", vehicleName: "Ertiga", capacity: "6+1", price: 2500 },
      { vehicleId: "innova", vehicleName: "Innova", capacity: "7+1", price: 2800 },
      { vehicleId: "innova-crysta", vehicleName: "Innova Crysta", capacity: "7+1", price: 3300 },
      { vehicleId: "tempo-traveller-12", vehicleName: "Tempo Traveller", capacity: "12+1", price: 4000 },
    ],
  },

  {
    id: "svtt0010",
    code: "SVTT0010",
    slug: "padmavathi-srikalahasti",
    title: "Padmavathi Temple & Sri Kalahasti Temple",
    shortTitle: "Padmavathi + Sri Kalahasti (5 hrs)",
    destinations: ["Tirupati", "Sri Kalahasti"],
    temples: [
      "Padmavathi Temple (Tiruchanur)",
      "Sri Kalahasti (Kalahastiswara Temple — Vayu Linga)",
    ],
    description:
      "A compact 5-hour package combining two powerful temples — Goddess Padmavathi at Tiruchanur and Lord Shiva at Sri Kalahasti. Sri Kalahasti is one of the Pancha Bhuta Stalams (Vayu — air element), making this a uniquely complete spiritual experience.",
    duration: "1 Day (5 hrs)",
    kmLimit: "300 km",
    category: "nearby",
    image: "/images/packages/svtt0010-padmavathi-srikalahasti.webp",
    featured: false,
    startingPrice: 2500,
    prices: [
      { vehicleId: "dzire-amaze-etios", vehicleName: "Dzire / Amaze / Etios", capacity: "4+1", price: 2500 },
      { vehicleId: "ertiga", vehicleName: "Ertiga", capacity: "6+1", price: 3500 },
      { vehicleId: "innova", vehicleName: "Innova", capacity: "7+1", price: 4000 },
      { vehicleId: "innova-crysta", vehicleName: "Innova Crysta", capacity: "7+1", price: 4500 },
      { vehicleId: "tempo-traveller-12", vehicleName: "Tempo Traveller", capacity: "12+1", price: 6000 },
    ],
  },
];

// Helper functions
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

// Flagged prices — for owner verification before launch
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