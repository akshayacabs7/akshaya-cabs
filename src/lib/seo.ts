// Akshaya Cabs — SEO Metadata Builder
// akshayacabs.com | Tirupati, Andhra Pradesh
// Centralised metadata generation for all pages.
// Twitter/X creator tag uses Akshaya handle @akshayacab.
// RULE: No star ratings or review count claims in any metadata.

import type { Metadata } from "next";
import { BUSINESS } from "@/data/business";

const SITE_URL  = BUSINESS.siteUrl;   // "https://akshayacabs.com"
const SITE_NAME = BUSINESS.name;      // "Akshaya Cabs"
const OG_IMAGE  = "/images/akshaya/brand/og-cover.webp"; // PENDING_USER_UPLOAD (TASK-09/10)

// ── Base builder ───────────────────────────────────────────────────

export interface PageSeoInput {
  title: string;
  description: string;
  slug?: string;           // relative URL path e.g. "/tour-packages"
  ogImage?: string;
  keywords?: string[];
  noIndex?: boolean;
  locale?: "en" | "te";   // locale prefix for canonical URL (default: "en")
}

export function buildMetadata(input: PageSeoInput): Metadata {
  const locale = input.locale ?? "en";
  const canonical = input.slug
    ? `${SITE_URL}/${locale}${input.slug.startsWith("/") ? input.slug : `/${input.slug}`}`
    : `${SITE_URL}/${locale}`;

  const ogImage = input.ogImage ?? OG_IMAGE;

  return {
    title: input.title,
    description: input.description,
    ...(input.keywords && { keywords: input.keywords }),
    alternates: { canonical },
    ...(input.noIndex
      ? { robots: { index: false, follow: false } }
      : { robots: { index: true, follow: true } }),
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: canonical,
      siteName: SITE_NAME,
      title: input.title,
      description: input.description,
      images: [
        {
          url: `${SITE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: `${input.title} | Akshaya Cabs Tirupati`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [`${SITE_URL}${ogImage}`],
      creator: "@akshayacab",
    },
  };
}

// ── Pre-built page metadata ────────────────────────────────────────

export const PAGE_SEO = {
  home: buildMetadata({
    title: "Akshaya Cabs | Tirupati Cab Service & Temple Tours",
    description:
      "Akshaya Cabs — Tirupati's trusted cab service for Tirumala darshan, temple tour packages, airport transfers and South India pilgrimages. Call +91 72888 76667. Available 24/7.",
    slug: "/",
    keywords: [
      "Tirupati cab service",
      "Tirumala taxi",
      "Tirupati temple tours",
      "Akshaya Cabs Tirupati",
      "cab service Tirupati",
    ],
  }),

  about: buildMetadata({
    title: "About Akshaya Cabs | Tirupati Cab Service",
    description:
      "Learn about Akshaya Cabs — a trusted Tirupati-based cab service for temple tours, outstation travel and airport transfers. Founded and operated by S.R. Kumar.",
    slug: "/about",
    keywords: ["about Akshaya Cabs", "Tirupati cab operator", "S.R. Kumar Tirupati"],
  }),

  fleet: buildMetadata({
    title: "Our Fleet — Cabs & Vehicles | Akshaya Cabs Tirupati",
    description:
      "Well-maintained AC cabs from Sedan (4+1) to Tempo Traveller (17+1). Transparent pricing starting at ₹15/km. Book for Tirupati and South India travel.",
    slug: "/fleet",
    keywords: ["Tirupati cab rates", "Tempo Traveller Tirupati", "Innova Crysta Tirupati", "Akshaya Cabs fleet"],
  }),

  tourPackages: buildMetadata({
    title: "Temple Tour Packages | Akshaya Cabs Tirupati",
    description:
      "10 curated South India temple tour packages from Tirupati. Local sightseeing to multi-day pilgrimages — Tirumala, Kanipakam, Sri Kalahasti, Golden Temple Vellore and more. Starting from ₹2,300.",
    slug: "/tour-packages",
    keywords: [
      "Tirupati temple tour packages",
      "Tirumala tour package",
      "South India pilgrimage package",
      "Akshaya Cabs tour packages",
    ],
  }),

  services: buildMetadata({
    title: "Cab & Travel Services | Akshaya Cabs Tirupati",
    description:
      "Local cabs, Tirumala taxi, airport transfers, outstation cabs, Tempo Traveller rental and customised South India tours — all-inclusive travel services in Tirupati.",
    slug: "/services",
    keywords: [
      "Tirupati cab services",
      "Tirumala taxi service",
      "Tirupati airport transfer",
      "outstation cab Tirupati",
    ],
  }),

  contact: buildMetadata({
    title: "Contact Akshaya Cabs | Tirupati",
    description:
      "Contact Akshaya Cabs. Call or WhatsApp +91 72888 76667. Available 24/7 for Tirupati cab bookings, temple tours, and travel enquiries.",
    slug: "/contact",
    keywords: ["contact Akshaya Cabs Tirupati", "WhatsApp Akshaya Cabs", "Tirupati cab booking contact"],
  }),

  requestQuote: buildMetadata({
    title: "Request a Quote | Akshaya Cabs Tirupati",
    description:
      "Get a customised travel quote from Akshaya Cabs Tirupati. Tell us your requirements — pickup, drop, date, group size — and we will share the best available fare.",
    slug: "/request-a-quote",
  }),

  whyChooseUs: buildMetadata({
    title: "Why Choose Akshaya Cabs | What to Expect | Tirupati",
    description:
      "Find out how Akshaya Cabs works — our booking process, what is included in every trip, how we handle special requests, and why Tirupati travellers choose us.",
    slug: "/why-choose-us",
  }),

  travelGuides: buildMetadata({
    title: "Tirupati Travel Guides & Tips | Akshaya Cabs",
    description:
      "Travel guides, tips and insights for Tirupati, Tirumala and South India. Plan your pilgrimage with Akshaya Cabs' practical travel guides.",
    slug: "/travel-guides",
    keywords: ["Tirupati travel guide", "Tirumala guide", "South India pilgrimage tips"],
  }),

  pickupDrop: buildMetadata({
    title: "Airport & Station Pickup & Drop | Akshaya Cabs Tirupati",
    description:
      "Reliable pickup and drop service from Tirupati Airport, railway station, hotels and any location. Available 24/7 with professional drivers.",
    slug: "/pickup-drop",
  }),

  privacyPolicy: buildMetadata({
    title: "Privacy Policy | Akshaya Cabs",
    description: "Privacy Policy of Akshaya Cabs, akshayacabs.com.",
    slug: "/privacy-policy",
    noIndex: true,
  }),

  termsConditions: buildMetadata({
    title: "Terms & Conditions | Akshaya Cabs",
    description: "Terms and Conditions of Akshaya Cabs, akshayacabs.com.",
    slug: "/terms-and-conditions",
    noIndex: true,
  }),
} as const;

// ── Dynamic page metadata builders ────────────────────────────────

export function buildPackageMetadata(
  title: string,
  description: string,
  slug: string,
  image?: string
): Metadata {
  return buildMetadata({
    title: `${title} | Temple Tour Package | Akshaya Cabs Tirupati`,
    description,
    slug: `/tour-packages/${slug}`,
    ogImage: image,
    keywords: [`${title} tour package`, "Tirupati tour", "Akshaya Cabs package"],
  });
}

export function buildBlogMetadata(
  title: string,
  excerpt: string,
  slug: string,
  image?: string
): Metadata {
  return buildMetadata({
    title: `${title} | Akshaya Cabs Tirupati Travel Blog`,
    description: excerpt,
    slug: `/blog/${slug}`,
    ogImage: image,
  });
}