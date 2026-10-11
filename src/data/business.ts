// Akshaya Cabs — Business Data
// akshayacabs.com | Tirupati, Andhra Pradesh
// RULE: This is the single source of truth for all contact/brand data.
// RULE: NEVER hard-code any of these values in components.
// RULE: No reviews, star ratings or Google ratings until Akshaya-specific
//       verifiable reviews exist. This file MUST NOT reference SVTT identity.

export const BUSINESS = {
  // ── Brand ────────────────────────────────────────────────────
  name: "Akshaya Cabs",
  shortName: "Akshaya Cabs",
  tagline: "Every Journey, Beautifully Planned.",
  description:
    "Akshaya Cabs is Tirupati's trusted cab service for temple tours, Tirumala taxi, outstation cabs, airport transfers and South India pilgrimage packages. Available 24 hours a day, 7 days a week.",

  // ── Owner ────────────────────────────────────────────────────
  // RULE: Use genuine owner photo only. Do NOT generate or AI-create a face.
  // Photo will be supplied by the owner (TASK-22 / TASK-09).
  owner: {
    name: "S.R. Kumar",
    // alias: "Ravi" — do NOT auto-publish alias without a business reason
    role: "Founder & Owner",
    photo: "/images/akshaya/founder/sr-kumar.jpg", // Owner-supplied photo — TASK-10 delivered
  },

  // ── Primary contact (Call + WhatsApp) ─────────────────────────
  phone: {
    primary: "+917288876667",
    primaryDisplay: "+91 72888 76667",
    primaryTel: "tel:+917288876667",
    primaryWhatsApp: "917288876667",   // digits with country code, no +; used in wa.me URLs

    secondary: "+919393900006",
    secondaryDisplay: "+91 93939 00006",
    secondaryTel: "tel:+919393900006",
    secondaryWhatsApp: "919393900006",
    secondaryLabel: "Alternate Contact",
  },

  // ── Email ────────────────────────────────────────────────────
  email: "akshayacabs7@gmail.com",
  emailHref: "mailto:akshayacabs7@gmail.com",

  // ── Address ──────────────────────────────────────────────────
  address: {
    line1: "D.No. 18-38-S3-314",
    line2: "Madura Nagar",
    city: "Tirupati",
    district: "Tirupati Dist",
    state: "Andhra Pradesh",
    stateCode: "AP",
    pincode: "517501",
    full: "D.No. 18-38-S3-314, Madura Nagar, Tirupati, Andhra Pradesh 517501",
    // Google Maps link — verified from master plan
    mapsUrl: "https://maps.app.goo.gl/XcmrEFDmhH2uKPvg8?g_st=aw",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Akshaya+Cabs,+Madura+Nagar,+Tirupati",
  },

  // ── Domain & deployment ──────────────────────────────────────
  domain: "akshayacabs.com",
  siteUrl: "https://akshayacabs.com",

  // ── Availability ─────────────────────────────────────────────
  availability: "24/7",
  availabilityText: "Available 24 hours a day, 7 days a week",

  // ── Google presence ──────────────────────────────────────────
  // RULE: No star ratings or review counts until Akshaya-specific verifiable
  //       reviews exist. Do NOT reference SVTT ratings anywhere.
  google: {
    mapsUrl: "https://maps.app.goo.gl/XcmrEFDmhH2uKPvg8?g_st=aw",
    // rating: undefined — add only when genuine Akshaya reviews are verified
    // reviewCount: undefined — same rule
  },

  // ── Pricing disclaimers ──────────────────────────────────────
  // RULE: Driver allowance is INCLUDED in displayed fares — do NOT add it again.
  pricingNote:
    "Tolls, parking charges and state permits are paid separately by the customer. Driver allowance is included in all displayed fares.",
  driverAllowanceNote:
    "Driver allowance is included in all displayed vehicle and package fares. Do not add it as a separate charge.",

  // ── Languages ────────────────────────────────────────────────
  languages: ["en-IN", "te-IN"] as const,
  defaultLocale: "en" as const,

  // ── Booking policy ───────────────────────────────────────────
  bookingNote:
    "All bookings and pricing shown are enquiries only — not confirmed reservations. Final fare is confirmed after speaking with our team via WhatsApp or phone.",
  noOnlinePayment: true,
  noLoginRequired: true,
} as const;

export type Business = typeof BUSINESS;