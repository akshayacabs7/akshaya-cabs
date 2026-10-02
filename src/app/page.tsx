// Homepage — Sri Vinayaka Tours & Travels
// svtttirupati.com
// Task 16: Full homepage with all 9 sections in blueprint order

import type { Metadata } from "next";
import HeroSection              from "@/components/sections/HeroSection";
import ServicesSection          from "@/components/sections/ServicesSection";
import FeaturedPackagesSection  from "@/components/sections/FeaturedPackagesSection";
import FleetPreviewSection      from "@/components/sections/FleetPreviewSection";
import WhyChooseSection         from "@/components/sections/WhyChooseSection";
import DestinationStorySection  from "@/components/sections/DestinationStorySection";
import GoogleReputationSection  from "@/components/sections/GoogleReputationSection";
import HowItWorksSection        from "@/components/sections/HowItWorksSection";
import FinalCtaSection          from "@/components/sections/FinalCtaSection";

export const metadata: Metadata = {
  title: "Sri Vinayaka Tours & Travels | Tirupati Cab Service & Temple Tours",
  description:
    "Sri Vinayaka Tours & Travels — Tirupati's trusted cab service for Tirumala temple tours, outstation cabs, airport transfers & South India pilgrimage packages. Available 24/7. Call or WhatsApp +91 96522 40674.",
  alternates: { canonical: "https://svtttirupati.com/" },
  openGraph: {
    title: "Sri Vinayaka Tours & Travels | Tirupati Cab Service & Temple Tours",
    description:
      "Trusted Tirupati cab & temple tour service. WhatsApp: +91 96522 40674. Available 24/7.",
    url: "https://svtttirupati.com/",
    images: [{ url: "/images/logo/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <>
      {/* S1: Full-screen cinematic hero */}
      <HeroSection />

      {/* S3: Core services strip */}
      <ServicesSection />

      {/* S4: Featured tour packages */}
      <FeaturedPackagesSection />

      {/* S5: Fleet preview */}
      <FleetPreviewSection />

      {/* S6: Why choose SVTT */}
      <WhyChooseSection />

      {/* S7: Destination story — SEO & emotional */}
      <DestinationStorySection />

      {/* S8: Google reputation + testimonials */}
      <GoogleReputationSection />

      {/* S9: How booking works */}
      <HowItWorksSection />

      {/* S11: Final CTA strip */}
      <FinalCtaSection />
    </>
  );
}