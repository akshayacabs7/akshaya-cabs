// SVTT SEO Metadata Builder
// Sri Vinayaka Tours & Travels — svtttirupati.com
// Centralised metadata generation for all pages.

import type { Metadata } from "next";
import { BUSINESS } from "@/data/business";

const SITE_URL  = BUSINESS.siteUrl;
const SITE_NAME = BUSINESS.name;
const OG_IMAGE  = "/images/logo/og-image.jpg";

// ── Base builder ───────────────────────────────────────────────

export interface PageSeoInput {
  title: string;
  description: string;
  slug?: string;           // relative URL path e.g. "/tour-packages"
  ogImage?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function buildMetadata(input: PageSeoInput): Metadata {
  const canonical = input.slug
    ? `${SITE_URL}${input.slug.startsWith("/") ? input.slug : `/${input.slug}`}`
    : SITE_URL;

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
          alt: `${input.title} | Sri Vinayaka Tours & Travels`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [`${SITE_URL}${ogImage}`],
      creator: "@SVTTT0303",
    },
  };
}

// ── Pre-built page metadata ────────────────────────────────────

export const PAGE_SEO = {
  home: buildMetadata({
    title: "Sri Vinayaka Tours & Travels | Tirupati Cab Service & Temple Tours",
    description:
      "Sri Vinayaka Tours & Travels — Tirupati's trusted cab service for Tirumala darshan, temple tour packages, airport transfers & South India pilgrimages. Call +91 96522 40674. Available 24/7.",
    slug: "/",
    keywords: [
      "Tirupati cab service",
      "Tirumala taxi",
      "Tirupati temple tours",
      "SVTT Tirupati",
      "Sri Vinayaka Tours Travels",
    ],
  }),

  about: buildMetadata({
    title: "About Us | Sri Vinayaka Tours & Travels Tirupati",
    description:
      "Learn about Sri Vinayaka Tours & Travels — Tirupati's trusted travel service since inception. Led by Ravilla Hemanth Naidu, we provide safe, affordable, and reliable cab services for pilgrims and tourists.",
    slug: "/about",
    keywords: ["about SVTT", "Sri Vinayaka Tours Travels Tirupati", "Ravilla Hemanth Naidu"],
  }),

  fleet: buildMetadata({
    title: "Our Fleet | Cabs & Vehicles | Sri Vinayaka Tours & Travels Tirupati",
    description:
      "Well-maintained AC cabs from Dzire/Etios (4+1) to Tempo Travellers (17+1). Transparent pricing starting at Rs.15/km. Book now for Tirupati and South India travel.",
    slug: "/fleet",
    keywords: ["Tirupati cab rates", "Tempo Traveller Tirupati", "Innova Crysta Tirupati", "SVTT fleet"],
  }),

  tourPackages: buildMetadata({
    title: "Temple Tour Packages | Sri Vinayaka Tours & Travels Tirupati",
    description:
      "10 curated South India temple tour packages from Tirupati. Local sightseeing to multi-day pilgrimages — Tirumala, Kanipakam, Sri Kalahasti, Golden Temple & more. Starting from Rs.2,300.",
    slug: "/tour-packages",
    keywords: [
      "Tirupati temple tour packages",
      "Tirumala tour package",
      "South India pilgrimage package",
      "SVTT packages",
    ],
  }),

  services: buildMetadata({
    title: "Cab & Travel Services | Sri Vinayaka Tours & Travels Tirupati",
    description:
      "Local cabs, Tirumala taxi, airport transfers, outstation cabs, Tempo Travellers, and customized South India tours. All-inclusive travel services in Tirupati.",
    slug: "/services",
    keywords: [
      "Tirupati cab services",
      "Tirumala taxi service",
      "Tirupati airport transfer",
      "outstation cab Tirupati",
    ],
  }),

  contact: buildMetadata({
    title: "Contact Us | Sri Vinayaka Tours & Travels Tirupati",
    description:
      "Contact Sri Vinayaka Tours & Travels. Call or WhatsApp +91 96522 40674. We are available 24/7 for Tirupati cab bookings, temple tours, and travel enquiries.",
    slug: "/contact",
    keywords: ["contact SVTT Tirupati", "WhatsApp SVTT", "Tirupati cab booking contact"],
  }),

  requestQuote: buildMetadata({
    title: "Request a Quote | Sri Vinayaka Tours & Travels Tirupati",
    description:
      "Get a customised travel quote from SVTT Tirupati. Tell us your requirements and we will send you the best rate for your Tirupati or South India trip.",
    slug: "/request-a-quote",
  }),

  reviews: buildMetadata({
    title: "Customer Reviews | Sri Vinayaka Tours & Travels Tirupati",
    description:
      "What our customers say about SVTT Tirupati. Hundreds of satisfied pilgrims and tourists trust Sri Vinayaka Tours & Travels for safe and comfortable travel.",
    slug: "/reviews",
  }),

  blog: buildMetadata({
    title: "Travel Blog | Tirupati Travel Tips & Guides | SVTT",
    description:
      "Travel guides, tips, and insights for Tirupati, Tirumala, and South India. Plan your pilgrimage with SVTT's expert travel blog.",
    slug: "/blog",
    keywords: ["Tirupati travel guide", "Tirumala guide", "South India pilgrimage tips"],
  }),

  pickupDrop: buildMetadata({
    title: "Pickup & Drop Services | Sri Vinayaka Tours & Travels Tirupati",
    description:
      "Reliable pickup and drop cab services from Tirupati airport, railway station, hotels, and any location. Available 24/7 with professional drivers.",
    slug: "/pickup-drop",
  }),

  privacyPolicy: buildMetadata({
    title: "Privacy Policy | Sri Vinayaka Tours & Travels Tirupati",
    description: "Privacy Policy of Sri Vinayaka Tours & Travels, svtttirupati.com.",
    slug: "/privacy-policy",
    noIndex: true,
  }),

  termsConditions: buildMetadata({
    title: "Terms & Conditions | Sri Vinayaka Tours & Travels Tirupati",
    description: "Terms and Conditions of Sri Vinayaka Tours & Travels, svtttirupati.com.",
    slug: "/terms-and-conditions",
    noIndex: true,
  }),
} as const;

// ── Dynamic page metadata builders ────────────────────────────

export function buildPackageMetadata(
  title: string,
  description: string,
  slug: string,
  image?: string
): Metadata {
  return buildMetadata({
    title: `${title} | Tour Package | SVTT Tirupati`,
    description,
    slug: `/tour-packages/${slug}`,
    ogImage: image,
    keywords: [`${title} tour package`, "Tirupati tour", "SVTT package"],
  });
}

export function buildBlogMetadata(
  title: string,
  excerpt: string,
  slug: string,
  image?: string
): Metadata {
  return buildMetadata({
    title: `${title} | SVTT Tirupati Travel Blog`,
    description: excerpt,
    slug: `/blog/${slug}`,
    ogImage: image,
  });
}