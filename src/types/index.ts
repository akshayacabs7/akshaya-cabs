// Akshaya Cabs — TypeScript Interfaces
// akshayacabs.com | Tirupati, Andhra Pradesh
// All shared type definitions live here.
// Languages: en-IN (English) and te-IN (Telugu)
// RULE: Never hard-code prices, names, or contact data outside of src/data/.

// ── Internationalisation ──────────────────────────────────────────

/**
 * Localizable string supporting English and Telugu.
 * `en` is always required. `te` is populated in TASK-07.
 */
export interface I18nString {
  en: string;
  te?: string; // Telugu — populated in TASK-07 (leave undefined until then)
}

// ── Vehicle ──────────────────────────────────────────────────────

export interface VehiclePrice {
  perKm?: number;           // rate per km (outstation/round-trip)
  localDay?: number;        // fixed local 1-day base rate
  driverCharges?: number;   // LEGACY FIELD — allowance is INCLUDED in fares; do NOT display as surcharge
  kmLimit?: number;         // included km per day (300 unless stated otherwise)
}

export interface Vehicle {
  id: string;               // e.g. "dzire-amaze-etios"
  name: string;             // Display name — English
  nameTe?: string;          // Display name — Telugu (TASK-07)
  variants?: string[];      // e.g. ["Suzuki Dzire", "Honda Amaze", "Toyota Etios"]
  capacity: string;         // e.g. "4+1" (passengers + driver)
  seats: number;            // passenger seats ONLY (excluding driver)
  category: "sedan" | "suv" | "van" | "tempo";
  label?: string;           // e.g. "Family", "Couple" — English
  labelTe?: string;         // Telugu label (TASK-07)
  image: string;            // /images/vehicles/... (existing licensed fallback)
  imageAlt?: string;        // descriptive alt text
  acStatus: boolean;
  price: VehiclePrice;
  features?: string[];      // AC, luggage, etc. — English
  featuresTe?: string[];    // Telugu features (TASK-07)
  bestFor?: string;         // short use-case description — English
  bestForTe?: string;       // Telugu (TASK-07)
}

// ── Package ───────────────────────────────────────────────────────

export interface PackageVehiclePrice {
  vehicleId: string;        // matches Vehicle.id
  vehicleName: string;
  capacity: string;         // e.g. "4+1"
  price: number | null;     // null = custom quote required (do NOT display invented price)
  customQuote?: boolean;    // true = display "Contact for Quote" instead of price
  customQuoteNote?: string; // reason displayed to user e.g. "Rate depends on group size"
  priceFlag?: boolean;      // true = flagged for owner verification before launch
  priceFlagNote?: string;
}

/**
 * Distance information for a package.
 * NOTE: `allowanceKm` is the km included in the package fare.
 *       `estimatedRouteKm` is the actual approx driving distance for the circuit.
 *       These are DIFFERENT. Never label allowanceKm as "route distance."
 */
export interface PackageDistanceInfo {
  allowanceKm: string;          // km included in fare — e.g. "300 km" or "300 km/day"
  estimatedRouteKm?: number;    // approx actual driving km for the full circuit
  exceedsAllowance?: boolean;   // true if estimatedRouteKm > allowance
  distanceNote?: string;        // displayed advisory e.g. "Route ~415 km; extra-km charges apply"
}

export interface Package {
  id: string;               // e.g. "akc0001" — NEVER "svtt0001"
  code: string;             // e.g. "AKC0001" — NEVER display "SVTT..." identifiers
  slug: string;             // URL slug — e.g. "tirupati-tirumala-local-temples"
  title: string;            // English display title
  titleTe?: string;         // Telugu title (TASK-07)
  shortTitle: string;
  shortTitleTe?: string;
  destinations: string[];   // key destination names
  temples: string[];        // temples visited — English
  templesTe?: string[];     // Telugu (TASK-07)
  description: string;      // English — independently written, not copied from SVTT
  descriptionTe?: string;   // Telugu (TASK-07)
  duration?: string;        // e.g. "1 Day", "2 Days", "~7 hours"
  distance: PackageDistanceInfo;
  category: "local" | "nearby" | "outstation" | "multi-day";
  image: string;            // /images/akshaya/packages/akc000X.webp
  prices: PackageVehiclePrice[];
  startingPrice: number;    // lowest confirmed price for display
  featured?: boolean;       // show on homepage
  enquiryNote?: string;     // advisory displayed near pricing e.g. "Final fare subject to confirmation"
  inclusions?: string[];    // what is included in the quoted price
  exclusions?: string[];    // tolls, parking, darshan tickets, etc.
}

// ── Service ───────────────────────────────────────────────────────

export interface Service {
  id: string;
  slug: string;
  title: string;
  titleTe?: string;
  shortTitle: string;
  shortTitleTe?: string;
  description: string;      // English — no false feature claims
  descriptionTe?: string;
  icon: string;             // lucide icon name
  image?: string;
  features?: string[];      // verified factual features only
  featuresTe?: string[];
  vehicles?: string[];      // vehicle IDs
  cta?: string;             // CTA button text
  ctaTe?: string;
}

// ── Blog ──────────────────────────────────────────────────────────

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleTe?: string;
  excerpt: string;
  excerptTe?: string;
  image: string;
  publishedAt: string;      // ISO date string
  category: string;
  categoryTe?: string;
  readingTime?: string;
  featured?: boolean;
  contentStatus: "stub" | "draft" | "published"; // never publish stubs as content
}

// ── Social ────────────────────────────────────────────────────────

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  handle: string;
  icon: string;             // platform icon identifier
}

// ── Business ──────────────────────────────────────────────────────

export interface BusinessContact {
  phone: string;            // E.164 format e.g. "+917288876667"
  phoneDisplay: string;     // human-readable e.g. "+91 72888 76667"
  phoneTel: string;         // href format e.g. "tel:+917288876667"
  whatsapp: string;         // digits only for wa.me e.g. "917288876667"
  label: string;
}