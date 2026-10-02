import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

/**
 * Inter - body / UI font (variable font)
 * latin-ext subset for Indian-English content
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
});

/**
 * Playfair Display - display / heading font
 */
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Sri Vinayaka Tours & Travels | Tirupati Cab Service & Temple Tours",
    template: "%s | Sri Vinayaka Tours & Travels",
  },
  description:
    "Sri Vinayaka Tours & Travels — Tirupati's trusted cab service for temple tours, Tirumala taxi, outstation cabs, airport transfers & South India pilgrimage packages. Available 24/7.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://svtttirupati.com"
  ),
  keywords: [
    "Tirupati cab service",
    "Tirumala taxi service",
    "Tirupati temple tour packages",
    "Tirupati airport taxi",
    "Tirupati outstation cab",
    "Tempo Traveller Tirupati",
    "Tirupati sightseeing taxi",
    "pilgrimage tours Tirupati",
    "Sri Vinayaka Tours Travels",
    "SVTT Tirupati",
  ],
  authors: [{ name: "Sri Vinayaka Tours & Travels" }],
  creator: "Sri Vinayaka Tours & Travels",
  publisher: "Sri Vinayaka Tours & Travels",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://svtttirupati.com",
    siteName: "Sri Vinayaka Tours & Travels",
    title: "Sri Vinayaka Tours & Travels | Tirupati Cab Service & Temple Tours",
    description:
      "Tirupati's trusted cab service for temple tours, Tirumala taxi, outstation cabs & pilgrimage packages. Call or WhatsApp +91 9652240674. Available 24/7.",
    images: [
      {
        url: "/images/logo/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sri Vinayaka Tours & Travels — Tirupati Cab Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Vinayaka Tours & Travels | Tirupati Cab & Temple Tours",
    description:
      "Trusted Tirupati cab & temple tour service. WhatsApp: +91 9652240674. Available 24/7.",
    images: ["/images/logo/og-image.jpg"],
    creator: "@SVTTT0303",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/logo/svtt-icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/logo/svtt-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${playfairDisplay.variable}`}
    >
      <body className="min-h-dvh flex flex-col antialiased">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}