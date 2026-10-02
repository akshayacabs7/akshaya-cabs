// SVTT Business Data
// Sri Vinayaka Tours & Travels — svtttirupati.com
// RULE: This is the single source of truth for all contact/brand data.
// NEVER hard-code any of these values in components.

export const BUSINESS = {
  // Brand
  name: "Sri Vinayaka Tours & Travels",
  shortName: "SVTT",
  tagline: "Explore Tirupati & South India with Comfort, Trust & Local Expertise",
  description:
    "Sri Vinayaka Tours & Travels is Tirupati's trusted cab service for temple tours, Tirumala taxi, outstation cabs, airport transfers & South India pilgrimage packages. Available 24/7.",

  // Owner — Real photo only. Do NOT generate an AI face.
  owner: {
    name: "Ravilla Hemanth Naidu",
    role: "Founder & Owner",
    photo: "/images/owner/ravilla-hemanth-naidu.jpg",
  },

  // Primary contact (WhatsApp + Call)
  phone: {
    primary: "+919652240674",
    primaryDisplay: "+91 96522 40674",
    primaryTel: "tel:+919652240674",
    primaryWhatsApp: "9652240674",   // digits only, used in wa.me URLs

    secondary: "+916281537563",
    secondaryDisplay: "+91 62815 37563",
    secondaryTel: "tel:+916281537563",
    secondaryWhatsApp: "6281537563",
    secondaryLabel: "Alternate Contact",
  },

  // Email
  email: "svtttirupati@gmail.com",
  emailHref: "mailto:svtttirupati@gmail.com",

  // Address
  address: {
    line1: "D.No.9-130/5-9",
    line2: "L.S Nagar, Thiruchanur",
    city: "Tirupati",
    district: "Tirupati Dist",
    state: "Andhra Pradesh",
    stateCode: "AP",
    pincode: "517503",
    full: "D.No.9-130/5-9, L.S Nagar, Thiruchanur, Tirupati Dist, AP 517503",
    // Google Maps directions link
    mapsUrl:
      "https://www.google.com/maps/search/Sri+Vinayaka+Tours+Travels+Tirupati/@13.6288,79.4192,14z",
  },

  // Domain & deployment
  domain: "svtttirupati.com",
  siteUrl: "https://svtttirupati.com",

  // Availability
  availability: "24/7",
  availabilityText: "Available 24 hours a day, 7 days a week",

  // Google presence
  google: {
    rating: "5.0",
    reviewsUrl:
      "https://www.google.com/search?q=Sri+Vinayaka+Tours+Travels+Tirupati+reviews",
  },

  // Notes for Tolls / Parking
  pricingNote:
    "Parking, Toll charges, and State Permits are to be paid by the customer.",
} as const;

export type Business = typeof BUSINESS;