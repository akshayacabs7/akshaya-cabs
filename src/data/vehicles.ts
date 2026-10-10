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
    variants: ["Suzuki Dzire", "Honda Amaze", "Toyota Etios"],
    capacity: "4+1",
    seats: 4,   // 4 passengers — the +1 is the driver
    category: "sedan",
    label: "Ideal for Couples & Small Families",
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
    bestFor: "Small families, couples, solo pilgrims travelling to Tirumala or city temples",
  },
  {
    id: "ertiga",
    name: "Ertiga",
    variants: ["Maruti Ertiga"],
    capacity: "6+1",
    seats: 6,   // 6 passengers
    category: "van",
    label: "Ideal for Families",
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
    bestFor: "Medium families, small groups, temple tour packages",
  },
  {
    id: "innova",
    name: "Innova",
    variants: ["Toyota Innova"],
    capacity: "7+1",
    seats: 7,   // 7 passengers
    category: "suv",
    label: "Ideal for Large Families",
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
    bestFor: "Large families, temple tours, outstation trips across South India",
  },
  {
    id: "innova-crysta",
    name: "Innova Crysta",
    variants: ["Toyota Innova Crysta"],
    capacity: "7+1",
    seats: 7,   // 7 passengers
    category: "suv",
    label: "Premium Family Travel",
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
    bestFor: "Premium travel, large families, VIP transfers, multi-day outstation tours",
  },
  {
    id: "tavera",
    name: "Tavera",
    variants: ["Chevrolet Tavera"],
    capacity: "8+1",
    seats: 8,   // 8 passengers
    category: "van",
    label: "Ideal for Large Groups",
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
    bestFor: "Large groups, pilgrimage groups, local sightseeing, events",
  },
  {
    id: "tempo-traveller-12",
    name: "Tempo Traveller 12+1",
    variants: ["Force Traveller 12+1"],
    capacity: "12+1",
    seats: 12,  // 12 passengers
    category: "tempo",
    label: "Group Travel",
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
    bestFor: "Group pilgrimages, corporate trips, family gatherings, temple tours",
  },
  {
    id: "tempo-traveller-17",
    name: "Tempo Traveller 17+1",
    variants: ["Force Traveller 17+1"],
    capacity: "17+1",
    seats: 17,  // 17 passengers
    category: "tempo",
    label: "Large Group Travel",
    image: "/images/akshaya/vehicles/tempo-17.webp",
    imageAlt: "Tempo Traveller 17-seater — large group transport from Tirupati",
    acStatus: true,
    price: {
      perKm: 35,
      localDay: 5000,
      driverCharges: 500,  // LEGACY — included
      kmLimit: 300,
    },
    features: ["AC", "Push-back Seats", "Extra Luggage Space", "Large Group Comfort"],
    bestFor: "Large group pilgrimages, extended tours, corporate travel, school and community trips",
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
export function passengerSeatText(vehicle: Vehicle): string {
  return `${vehicle.seats} passenger${vehicle.seats !== 1 ? "s" : ""} + driver`;
}