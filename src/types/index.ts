// SVTT TypeScript Interfaces
// Sri Vinayaka Tours & Travels — svtttirupati.com
// All shared type definitions live here.

// ── Vehicle ──────────────────────────────────────────────────

export interface VehiclePrice {
  perKm?: number;           // rate per km (outstation)
  localDay?: number;        // fixed local 1-day rate
  driverCharges?: number;   // per-day driver allowance
  kmLimit?: number;         // km limit per day
}

export interface Vehicle {
  id: string;               // e.g. "dzire"
  name: string;             // Display name
  variants?: string[];      // e.g. ["Dzire", "Amaze", "Etios"]
  capacity: string;         // e.g. "4+1"
  seats: number;            // passenger seats (excluding driver)
  category: "sedan" | "suv" | "van" | "tempo";
  label?: string;           // e.g. "Family", "Couple"
  image: string;            // /images/vehicles/...
  price: VehiclePrice;
  features?: string[];      // AC, luggage, etc.
  bestFor?: string;         // short use-case description
  acStatus: boolean;
}

// ── Package ───────────────────────────────────────────────────

export interface PackageVehiclePrice {
  vehicleId: string;        // matches Vehicle.id
  vehicleName: string;
  capacity: string;
  price: number;            // in INR
  priceFlag?: boolean;      // true = flagged for owner verification
  priceFlagNote?: string;
}

export interface Package {
  id: string;               // e.g. "svtt0001"
  code: string;             // e.g. "SVTT0001"
  slug: string;             // URL slug
  title: string;
  shortTitle: string;
  destinations: string[];   // key destination names
  temples: string[];        // temples visited
  description: string;
  duration?: string;        // e.g. "1 Day", "2 Days"
  kmLimit?: string;         // e.g. "300 km"
  category: "local" | "nearby" | "outstation" | "multi-day";
  image: string;            // /images/packages/...
  prices: PackageVehiclePrice[];
  startingPrice: number;    // lowest price (for display)
  featured?: boolean;       // show on homepage
}

// ── Service ───────────────────────────────────────────────────

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;             // lucide icon name or emoji
  image?: string;
  features?: string[];
  vehicles?: string[];      // vehicle IDs
  cta?: string;             // CTA button text
}

// ── Blog ──────────────────────────────────────────────────────

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  publishedAt: string;      // ISO date string
  category: string;
  readingTime?: string;
  featured?: boolean;
}

// ── Social ────────────────────────────────────────────────────

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  handle: string;
  icon: string;             // platform icon identifier
}

// ── Business ──────────────────────────────────────────────────

export interface BusinessContact {
  phone: string;            // E.164 format
  phoneDisplay: string;     // human-readable
  whatsapp: string;         // E.164 format (no +)
  label: string;
}