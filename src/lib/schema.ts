// Akshaya Cabs — Local SEO & Structured Data Builder (TASK-31)
// akshayacabs.com | Tirupati, Andhra Pradesh
// Valid Schema.org JSON-LD structured data generators.
//
// RULES:
//  - Strictly NO fake reviews, rating values, or aggregateRating schema.
//  - All business contact info, address, hours match verified facts.
//  - Supports bilingual en-IN and te-IN content.

import { BUSINESS } from "@/data/business";
import type { Locale } from "@/i18n/config";
import type { BlogPost } from "@/types";
import type { Package } from "@/types";
import type { CabRoute } from "@/data/routes";

// ── 1. LocalBusiness / TaxiService Global Schema ───────────────────────────

export function buildLocalBusinessSchema(locale: Locale = "en") {
  const isTe = locale === "te";

  return {
    "@context": "https://schema.org",
    "@type": ["TaxiService", "LocalBusiness"],
    "@id": `${BUSINESS.siteUrl}/#organization`,
    name: BUSINESS.name,
    alternateName: "Akshaya Cabs Tirupati",
    legalName: BUSINESS.name,
    url: BUSINESS.siteUrl,
    logo: `${BUSINESS.siteUrl}/images/logo/akshaya/akc-icon-512.png`,
    image: `${BUSINESS.siteUrl}/images/akshaya/brand/og-cover.webp`,
    description: isTe
      ? "అక్షయ క్యాబ్స్ తిరుపతిలో తిరుమల దర్శనం, ఆలయ టూర్ ప్యాకేజీలు, విమానాశ్రయ పికప్/డ్రాప్ మరియు అవుట్‌స్టేషన్ యాత్రల కోసం నమ్మకమైన క్యాబ్ సర్వీస్. 24/7 అందుబాటులో ఉంటుంది."
      : BUSINESS.description,
    telephone: BUSINESS.phone.primary,
    email: BUSINESS.email,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${BUSINESS.address.line1}, ${BUSINESS.address.line2}`,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.6288,
      longitude: 79.4192,
    },
    hasMap: BUSINESS.address.mapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [
      "https://www.instagram.com/akshayacabs",
      "https://www.facebook.com/share/1J1DHsBsws/",
      "https://x.com/akshayacab",
      BUSINESS.address.mapsUrl,
    ],
    areaServed: [
      { "@type": "City", "name": "Tirupati" },
      { "@type": "Place", "name": "Tirumala" },
      { "@type": "City", "name": "Srikalahasti" },
      { "@type": "City", "name": "Kanipakam" },
      { "@type": "City", "name": "Vellore" },
      { "@type": "City", "name": "Chennai" },
      { "@type": "City", "name": "Bengaluru" },
    ],
    founder: {
      "@type": "Person",
      name: BUSINESS.owner.name,
      jobTitle: BUSINESS.owner.role,
      image: `${BUSINESS.siteUrl}${BUSINESS.owner.photo}`,
    },
    knowsLanguage: ["en", "te"],
    inLanguage: isTe ? "te-IN" : "en-IN",
  };
}

// ── 2. FAQ Schema ─────────────────────────────────────────────────────────

export function buildFaqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ── 3. Blog Article / Post Schema ─────────────────────────────────────────

export function buildArticleSchema(
  post: BlogPost,
  locale: Locale,
  articleUrl: string
) {
  const isTe = locale === "te";

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: isTe && post.titleTe ? post.titleTe : post.title,
    description: isTe && post.excerptTe ? post.excerptTe : post.excerpt,
    image: post.image
      ? `${BUSINESS.siteUrl}${post.image}`
      : `${BUSINESS.siteUrl}/images/akshaya/brand/og-cover.webp`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: isTe ? "te-IN" : "en-IN",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    author: {
      "@type": "Person",
      name: BUSINESS.owner.name,
      url: `${BUSINESS.siteUrl}/${locale}/about`,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BUSINESS.siteUrl}/#organization`,
      name: BUSINESS.name,
      logo: {
        "@type": "ImageObject",
        url: `${BUSINESS.siteUrl}/images/logo/akshaya/akc-icon-512.png`,
      },
    },
  };
}

// ── 4. Tour Package TouristTrip Schema ────────────────────────────────────

export function buildTouristTripSchema(
  pkg: Package,
  locale: Locale,
  pkgUrl: string
) {
  const isTe = locale === "te";

  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: isTe && pkg.titleTe ? pkg.titleTe : pkg.title,
    description: isTe && pkg.descriptionTe ? pkg.descriptionTe : pkg.description,
    touristType: ["Pilgrim", "Family", "Tourist"],
    itinerary: {
      "@type": "ItemList",
      numberOfItems: pkg.temples.length,
      itemListElement: pkg.temples.map((temple, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: temple,
      })),
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: pkg.startingPrice,
      offerCount: pkg.prices.length,
      availability: "https://schema.org/InStock",
      url: pkgUrl,
    },
    provider: {
      "@type": "TaxiService",
      "@id": `${BUSINESS.siteUrl}/#organization`,
      name: BUSINESS.name,
      telephone: BUSINESS.phone.primary,
    },
  };
}

// ── 5. Cab Route Service Schema ───────────────────────────────────────────

export function buildRouteServiceSchema(
  route: CabRoute,
  locale: Locale,
  routeUrl: string
) {
  const isTe = locale === "te";

  return {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: isTe ? route.metaTitleTe : route.metaTitle,
    description: isTe ? route.metaDescriptionTe : route.metaDescription,
    serviceType: "Intercity Taxi / Cab Transfer",
    provider: {
      "@type": "TaxiService",
      "@id": `${BUSINESS.siteUrl}/#organization`,
      name: BUSINESS.name,
      telephone: BUSINESS.phone.primary,
    },
    areaServed: [
      { "@type": "Place", name: isTe ? route.fromTe : route.from },
      { "@type": "Place", name: isTe ? route.toTe : route.to },
    ],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: route.startingPrice,
      availability: "https://schema.org/InStock",
      url: routeUrl,
    },
  };
}
