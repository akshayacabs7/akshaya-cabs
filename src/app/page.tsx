// Homepage — Sri Vinayaka Tours & Travels
// Sri Vinayaka Tours & Travels — svtttirupati.com

import type { Metadata } from "next";
import HeroSection            from "@/components/sections/HeroSection";
import WhyChooseSection       from "@/components/sections/WhyChooseSection";
import FeaturedPackagesSection from "@/components/sections/FeaturedPackagesSection";
import ServicesSection        from "@/components/sections/ServicesSection";
import AboutSnippetSection    from "@/components/sections/AboutSnippetSection";

export const metadata: Metadata = {
  title: "Sri Vinayaka Tours & Travels | Tirupati Cab Service & Temple Tours",
  description:
    "Sri Vinayaka Tours & Travels — Tirupati's trusted cab service for Tirumala temple tours, outstation cabs, airport transfers & South India pilgrimage packages. Available 24/7. Call or WhatsApp +91 9652240674.",
  alternates: { canonical: "https://svtttirupati.com/" },
  openGraph: {
    title: "Sri Vinayaka Tours & Travels | Tirupati Cab Service & Temple Tours",
    description:
      "Trusted Tirupati cab & temple tour service. WhatsApp: +91 9652240674. Available 24/7.",
    url: "https://svtttirupati.com/",
    images: [{ url: "/images/logo/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseSection />
      <FeaturedPackagesSection />
      <ServicesSection />
      <AboutSnippetSection />
    </>
  );
}