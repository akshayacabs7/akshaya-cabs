// SVTT Vehicle Data
// Sri Vinayaka Tours & Travels — svtttirupati.com
// Source: https://srivinayakatours.netlify.app/ (verified 2026-10-02)
// RULE: Weganor is BANNED. Never add it here or anywhere in the codebase.
// NOTE: Parking, Tolls, and State Permits are paid by the customer separately.

import type { Vehicle } from "@/types";

export const VEHICLES: Vehicle[] = [
  {
    id: "dzire-amaze-etios",
    name: "Dzire / Amaze / Etios",
    variants: ["Suzuki Dzire", "Honda Amaze", "Toyota Etios"],
    capacity: "4+1",
    seats: 4,
    category: "sedan",
    label: "Couple & Small Family",
    image: "/images/vehicles/dzire.webp",
    acStatus: true,
    price: {
      perKm: 15,
      localDay: 2000,
      driverCharges: 300,
      kmLimit: 300,
    },
    features: ["AC", "Music System", "Comfortable Seating"],
    bestFor: "Small families, couples, solo pilgrims",
  },
  {
    id: "ertiga",
    name: "Ertiga",
    variants: ["Maruti Ertiga"],
    capacity: "6+1",
    seats: 6,
    category: "van",
    label: "Family",
    image: "/images/vehicles/ertiga.webp",
    acStatus: true,
    price: {
      perKm: 19,
      localDay: 2300,
      driverCharges: 300,
      kmLimit: 300,
    },
    features: ["AC", "Extra Legroom", "Luggage Space"],
    bestFor: "Medium families, small groups",
  },
  {
    id: "innova",
    name: "Innova",
    variants: ["Toyota Innova"],
    capacity: "7+1",
    seats: 7,
    category: "suv",
    label: "Large Family",
    image: "/images/vehicles/innova.webp",
    acStatus: true,
    price: {
      perKm: 21,
      localDay: 2500,
      driverCharges: 300,
      kmLimit: 300,
    },
    features: ["AC", "Spacious Interior", "Ample Luggage"],
    bestFor: "Large families, temple tours, outstation trips",
  },
  {
    id: "innova-crysta",
    name: "Innova Crysta",
    variants: ["Toyota Innova Crysta"],
    capacity: "7+1",
    seats: 7,
    category: "suv",
    label: "Premium Family",
    image: "/images/vehicles/innova-crysta.webp",
    acStatus: true,
    price: {
      perKm: 23,
      localDay: 3000,
      driverCharges: 300,
      kmLimit: 300,
    },
    features: ["AC", "Premium Interior", "Extra Comfort", "Ample Luggage"],
    bestFor: "Premium travel, large families, VIP guests",
  },
  {
    id: "tavera",
    name: "Tavera",
    variants: ["Chevrolet Tavera"],
    capacity: "8+1",
    seats: 8,
    category: "van",
    label: "Large Group",
    image: "/images/vehicles/tavera.webp",
    acStatus: true,
    price: {
      perKm: 20,
      localDay: 3000,
      driverCharges: 300,
      kmLimit: 300,
    },
    features: ["AC", "Group Seating", "Luggage Space"],
    bestFor: "Large groups, pilgrimage groups, events",
  },
  {
    id: "tempo-traveller-12",
    name: "Tempo Traveller 12+1",
    variants: ["Force Traveller 12+1"],
    capacity: "12+1",
    seats: 12,
    category: "tempo",
    label: "Group Travel",
    image: "/images/vehicles/tempo-traveller-12.webp",
    acStatus: true,
    price: {
      perKm: 27,
      localDay: 3000,
      driverCharges: 500,
      kmLimit: 300,
    },
    features: ["AC", "Push-back Seats", "Large Luggage", "Group Comfort"],
    bestFor: "Group pilgrimages, corporate trips, family gatherings",
  },
  {
    id: "tempo-traveller-17",
    name: "Tempo Traveller 17+1",
    variants: ["Force Traveller 17+1"],
    capacity: "17+1",
    seats: 17,
    category: "tempo",
    label: "Large Group Travel",
    image: "/images/vehicles/tempo-traveller-17.webp",
    acStatus: true,
    price: {
      perKm: 35,
      localDay: 5000,
      driverCharges: 500,
      kmLimit: 300,
    },
    features: ["AC", "Push-back Seats", "Extra Luggage", "Large Group Comfort"],
    bestFor: "Large group pilgrimages, tours, corporate travel",
  },
];

// Helper: get vehicle by ID
export function getVehicleById(id: string): Vehicle | undefined {
  return VEHICLES.find((v) => v.id === id);
}

// Vehicle IDs for homepage fleet preview (featured 4)
export const FEATURED_VEHICLE_IDS = [
  "dzire-amaze-etios",
  "innova-crysta",
  "tempo-traveller-12",
  "ertiga",
];