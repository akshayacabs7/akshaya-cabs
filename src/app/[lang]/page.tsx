// Akshaya Cabs — Homepage (TASK-12)
// Server Component: reads locale from Next.js 16 params.
// All sections are original Akshaya design — no SVTT identity, no SVTT class names.
//
// Section order:
//  S1  AkcHeroSection         — cinematic hero + TripSearchPanel (TASK-11)
//  S2  AkcServicesSection      — all 9 service categories
//  S3  AkcFeaturedPackages     — 3 featured tour packages
//  S4  AkcDestinations         — 6 sacred destinations with real images
//  S5  AkcFleetPreview         — 4 vehicle class preview
//  S6  AkcWhyChoose            — 6 factual trust pillars
//  S7  AkcHowItWorks           — 4-step WhatsApp booking flow
//  S8  AkcTravelGuides         — blog articles (gates on published status)
//  S9  AkcFinalCta             — 24/7 enquiry CTA strip

import type { Metadata } from "next";
import AkcHeroSection            from "@/components/home/AkcHeroSection";
import AkcServicesSection        from "@/components/home/AkcServicesSection";
import AkcDarshanAssistanceSection from "@/components/home/AkcDarshanAssistanceSection";
import AkcFeaturedPackagesSection from "@/components/home/AkcFeaturedPackagesSection";
import AkcDestinationsSection    from "@/components/home/AkcDestinationsSection";
import AkcFleetPreviewSection    from "@/components/home/AkcFleetPreviewSection";
import AkcWhyChooseSection       from "@/components/home/AkcWhyChooseSection";
import AkcHowItWorksSection      from "@/components/home/AkcHowItWorksSection";
import AkcTravelGuidesSection    from "@/components/home/AkcTravelGuidesSection";
import AkcFinalCtaSection        from "@/components/home/AkcFinalCtaSection";
import type { Locale }           from "@/i18n/config";
import { LOCALES }               from "@/i18n/config";

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = (LOCALES.includes(lang as Locale) ? lang : "en") as Locale;
  const isTe = locale === "te";

  const title = isTe
    ? "అక్షయ క్యాబ్స్ | తిరుపతి క్యాబ్ సేవ & దేవాలయ టూర్లు"
    : "Akshaya Cabs | Tirupati Cab Service & Temple Tours";

  const description = isTe
    ? "తిరుపతి నుండి విశ్వసనీయ క్యాబ్ సేవలు — తిరుమల టాక్సీ, దేవాలయ టూర్ ప్యాకేజీలు, విమానాశ్రయ బదిలీలు & అవుట్‌స్టేషన్ ట్రిప్పులు. 24/7 అందుబాటులో. కాల్ / వాట్సాప్: +91 72888 76667."
    : "Akshaya Cabs – Tirupati's trusted cab service for Tirumala temple tours, outstation cabs, airport transfers & South India pilgrimage packages. Available 24/7. Call or WhatsApp +91 72888 76667.";

  return {
    title,
    description,
    alternates: {
      canonical: `https://akshayacabs.com/${locale}`,
      languages: {
        "en-IN": "https://akshayacabs.com/en",
        "te-IN": "https://akshayacabs.com/te",
        "x-default": "https://akshayacabs.com/en",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://akshayacabs.com/${locale}`,
      images: [
        {
          url: "/images/akshaya/brand/og-cover.webp",
          width: 1200,
          height: 630,
          alt: "Akshaya Cabs – Tirupati Cab Service & Temple Tours",
        },
      ],
    },
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (LOCALES.includes(lang as Locale) ? lang : "en") as Locale;

  return (
    <>
      {/* S1: Cinematic hero + smart trip entry panel */}
      <AkcHeroSection locale={locale} />

      {/* S2: All 9 service categories */}
      <AkcServicesSection locale={locale} />

      {/* S2.5: Tirumala Darshan Assistance promotional feature */}
      <AkcDarshanAssistanceSection locale={locale} />

      {/* S3: 3 featured tour packages */}
      <AkcFeaturedPackagesSection locale={locale} />

      {/* S4: 6 sacred destinations */}
      <AkcDestinationsSection locale={locale} />

      {/* S5: 4-vehicle fleet preview */}
      <AkcFleetPreviewSection locale={locale} />

      {/* S6: 6 factual trust pillars */}
      <AkcWhyChooseSection locale={locale} />

      {/* S7: 4-step WhatsApp booking flow */}
      <AkcHowItWorksSection locale={locale} />

      {/* S8: Travel guides (gates on published blog posts) */}
      <AkcTravelGuidesSection locale={locale} />

      {/* S9: 24/7 enquiry CTA strip */}
      <AkcFinalCtaSection locale={locale} />
    </>
  );
}