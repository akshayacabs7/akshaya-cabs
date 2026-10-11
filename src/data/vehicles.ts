// Akshaya Cabs — Vehicle Data
// akshayacabs.com | Tirupati, Andhra Pradesh
// Source: Verified master execution plan Section 01D (confirmed 2026-10-09).
//
// RULES:
// - Weganor is BANNED. Never add it here or anywhere in the codebase.
// - Driver allowance is INCLUDED in all fares — do NOT display driverCharges as a surcharge.
//   The driverCharges field is retained as a legacy reference only.
// - 4+1 capacity means 4 passenger seats plus 1 driver = total 5 occupants.
//   Always display as "4 passengers" NOT "5 passengers" in UI.
// - All vehicle images are wired to /images/akshaya/vehicles/ (TASK-10 complete).
// - Tolls, parking, and state permits are paid separately by the customer.

import type { Vehicle } from "@/types";

export const VEHICLES: Vehicle[] = [
  {
    id: "dzire-amaze-etios",
    name: "Dzire / Amaze / Etios",
    nameTe: "డిజైర్ / అమేజ్ / ఎటియోస్",
    variants: ["Suzuki Dzire", "Honda Amaze", "Toyota Etios"],
    capacity: "4+1",
    seats: 4,   // 4 passengers — the +1 is the driver
    category: "sedan",
    label: "Ideal for Couples & Small Families",
    labelTe: "చిన్న కుటుంబాలు & దంపతులకు అనుకూలం",
    image: "/images/akshaya/vehicles/sedan-dzire.webp",
    imageAlt: "Sedan cab — Dzire, Amaze or Etios — available for hire in Tirupati",
    acStatus: true,
    price: {
      perKm: 15,
      localDay: 2000,
      driverCharges: 300,  // LEGACY — included in above fares, do NOT display separately
      kmLimit: 300,
    },
    features: ["AC", "Music System", "Comfortable Seating", "Luggage Space"],
    featuresTe: ["ఎయిర్ కండీషనర్ (AC)", "మ్యూజిక్ సిస్టమ్", "సౌకర్యవంతమైన సీటింగ్", "లగేజీ స్పేస్"],
    bestFor: "Small families, couples, solo pilgrims travelling to Tirumala or city temples",
    bestForTe: "చిన్న కుటుంబాలు, దంపతులు, తిరుమల మరియు తిరుపతి స్థానిక ఆలయ దర్శనాలకు ఉత్తమం",
  },
  {
    id: "ertiga",
    name: "Ertiga",
    nameTe: "ఎర్టిగా",
    variants: ["Maruti Ertiga"],
    capacity: "6+1",
    seats: 6,   // 6 passengers
    category: "van",
    label: "Ideal for Families",
    labelTe: "కుటుంబాలకు ఆదర్శం",
    image: "/images/akshaya/vehicles/van-ertiga.webp",
    imageAlt: "Maruti Ertiga — 6-seater AC cab available in Tirupati",
    acStatus: true,
    price: {
      perKm: 19,
      localDay: 2300,
      driverCharges: 300,  // LEGACY — included
      kmLimit: 300,
    },
    features: ["AC", "Extra Legroom", "Luggage Space", "Comfortable Ride"],
    featuresTe: ["ఎయిర్ కండీషనర్ (AC)", "అదనపు లెగ్‌రూమ్", "లగేజీ స్పేస్", "సౌకర్యవంతమైన ప్రయాణం"],
    bestFor: "Medium families, small groups, temple tour packages",
    bestForTe: "మధ్య తరహా కుటుంబాలు, చిన్న బృందాలు, ఆలయ ప్యాకేజీ యాత్రలకు అనుకూలం",
  },
  {
    id: "innova",
    name: "Innova",
    nameTe: "ఇన్నోవా",
    variants: ["Toyota Innova"],
    capacity: "7+1",
    seats: 7,   // 7 passengers
    category: "suv",
    label: "Ideal for Large Families",
    labelTe: "పెద్ద కుటుంబాలకు ప్రత్యేకం",
    image: "/images/akshaya/vehicles/suv-innova.webp",
    imageAlt: "Toyota Innova — 7-seater AC SUV available for Tirupati cab hire",
    acStatus: true,
    price: {
      perKm: 21,
      localDay: 2500,
      driverCharges: 300,  // LEGACY — included
      kmLimit: 300,
    },
    features: ["AC", "Spacious Interior", "Ample Luggage Space", "Comfortable Seats"],
    featuresTe: ["ఎయిర్ కండీషనర్ (AC)", "విశాలమైన ఇంటీరియర్", "ఎక్కువ లగేజీ స్థలం", "సౌకర్యవంతమైన సీట్లు"],
    bestFor: "Large families, temple tours, outstation trips across South India",
    bestForTe: "పెద్ద కుటుంబాలు, ఆలయ యాత్రలు, దక్షిణ భారతదేశ ప్రయాణాలకు ఉత్తమం",
  },
  {
    id: "innova-crysta",
    name: "Innova Crysta",
    nameTe: "ఇన్నోవా క్రిస్టా",
    variants: ["Toyota Innova Crysta"],
    capacity: "7+1",
    seats: 7,   // 7 passengers
    category: "suv",
    label: "Premium Family Travel",
    labelTe: "ప్రీమియం కుటుంబ ప్రయాణం",
    image: "/images/akshaya/vehicles/suv-innova-crysta.webp",
    imageAlt: "Toyota Innova Crysta — premium 7-seater AC SUV in Tirupati",
    acStatus: true,
    price: {
      perKm: 23,
      localDay: 3000,
      driverCharges: 300,  // LEGACY — included
      kmLimit: 300,
    },
    features: ["AC", "Premium Interior", "Captain Seats", "Ample Luggage Space"],
    featuresTe: ["ఎయిర్ కండీషనర్ (AC)", "ప్రీమియం ఇంటీరియర్", "కెప్టెన్ సీట్లు", "విశాలమైన లగేజీ స్థలం"],
    bestFor: "Premium travel, large families, VIP transfers, multi-day outstation tours",
    bestForTe: "ప్రీమియం ప్రయాణం, వీఐపీ పర్యటనలు, కుటుంబంతో దూర ప్రయాణాలకు అత్యంత సౌకర్యవంతం",
  },
  {
    id: "tavera",
    name: "Tavera",
    nameTe: "టవేరా",
    variants: ["Chevrolet Tavera"],
    capacity: "8+1",
    seats: 8,   // 8 passengers
    category: "van",
    label: "Ideal for Large Groups",
    labelTe: "గ్రూప్ ప్రయాణాలకు అనుకూలం",
    image: "/images/akshaya/vehicles/minivan-tavera.webp",
    imageAlt: "Chevrolet Tavera — 8-seater AC van available for group travel in Tirupati",
    acStatus: true,
    price: {
      perKm: 20,
      localDay: 3000,
      driverCharges: 300,  // LEGACY — included
      kmLimit: 300,
    },
    features: ["AC", "Group Seating", "Luggage Space", "Comfortable for Long Drives"],
    featuresTe: ["ఎయిర్ కండీషనర్ (AC)", "గ్రూప్ సీటింగ్", "లగేజీ స్పేస్", "సుదీర్ఘ ప్రయాణాలకు అనుకూలం"],
    bestFor: "Large groups, pilgrimage groups, local sightseeing, events",
    bestForTe: "పెద్ద బృందాలు, యాత్రికుల సంఘాలు, స్థానిక ఆలయ సందర్శనలకు అనుకూలం",
  },
  {
    id: "tempo-traveller-12",
    name: "Tempo Traveller 12+1",
    nameTe: "టెంపో ట్రావెలర్ 12+1",
    variants: ["Force Traveller 12+1"],
    capacity: "12+1",
    seats: 12,  // 12 passengers
    category: "tempo",
    label: "Group Travel",
    labelTe: "యాత్రికుల బృందాలకు ఉత్తమం",
    image: "/images/akshaya/vehicles/tempo-12.webp",
    imageAlt: "Tempo Traveller 12-seater — group cab for Tirupati temple tours and outstation",
    acStatus: true,
    price: {
      perKm: 27,
      localDay: 3000,
      driverCharges: 500,  // LEGACY — included
      kmLimit: 300,
    },
    features: ["AC", "Push-back Seats", "Large Luggage Capacity", "Group Comfort"],
    featuresTe: ["ఎయిర్ కండీషనర్ (AC)", "పుష్-బ్యాక్ సీట్లు", "పెద్ద లగేజీ స్థలం", "బృంద సౌకర్యం"],
    bestFor: "Group pilgrimages, corporate trips, family gatherings, temple tours",
    bestForTe: "యాత్రికుల సంఘాలు, కుటుంబ వేడుకలు, కార్పొరేట్ పర్యటనలు మరియు తీర్థయాత్రలు",
  },
  {
    id: "force-urbania-12",
    name: "Force Urbania 12 Seater",
    nameTe: "ఫోర్స్ అర్బానియా 12 సీటర్",
    variants: ["Force Urbania 12+1"],
    capacity: "12+1",
    seats: 12,  // 12 passengers
    category: "tempo",
    label: "Premium Group Travel",
    labelTe: "ప్రీమియం గ్రూప్ ప్రయాణం",
    image: "/images/akshaya/vehicles/urbania-12.webp",
    imageAlt: "Force Urbania 12-seater luxury van — premium group cab in Tirupati",
    acStatus: true,
    price: {
      perKm: 35,
      localDay: 5000,
      driverCharges: 500,  // LEGACY — included
      kmLimit: 300,
    },
    features: ["AC", "Luxury Push-back Seats", "Extra Luggage Space", "Premium Group Comfort"],
    featuresTe: ["ఎయిర్ కండీషనర్ (AC)", "లగ్జరీ పుష్-బ్యాక్ సీట్లు", "విస్తారమైన లగేజీ సామర్థ్యం", "ప్రీమియం గ్రూప్ సౌకర్యం"],
    bestFor: "Premium group pilgrimages, extended tours, corporate travel, school and community trips",
    bestForTe: "ప్రీమియం యాత్రా బృందాలు, పాఠశాల/సంఘాల యాత్రలు, సుదూర దక్షిణ భారత తీర్థయాత్రలు",
  },
];

// ── Helpers ───────────────────────────────────────────────────────

export function getVehicleById(id: string): Vehicle | undefined {
  return VEHICLES.find((v) => v.id === id);
}

// Featured vehicle IDs for homepage fleet preview (4 representative vehicles)
export const FEATURED_VEHICLE_IDS = [
  "dzire-amaze-etios",
  "innova-crysta",
  "tempo-traveller-12",
  "ertiga",
];

// All 7 vehicle IDs in display order
export const ALL_VEHICLE_IDS = VEHICLES.map((v) => v.id);

// Passenger seat advisory — enforced display rule
// Use this helper to generate honest passenger count text
export function passengerSeatText(vehicle: Vehicle, locale: "en" | "te" = "en"): string {
  if (locale === "te") {
    return `${vehicle.seats} మంది ప్రయాణికులు + డ్రైవర్`;
  }
  return `${vehicle.seats} passenger${vehicle.seats !== 1 ? "s" : ""} + driver`;
}