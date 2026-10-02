// Homepage — Sri Vinayaka Tours & Travels
// Sri Vinayaka Tours & Travels — svtttirupati.com
// Task 06: Hero section live. Remaining sections added in Tasks 07-10.

import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";

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
      {/* Tasks 07-10 sections will be added here */}
    </>
  );
}