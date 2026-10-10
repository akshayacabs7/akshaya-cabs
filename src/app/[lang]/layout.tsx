import React from "react";
/**
 * Akshaya Cabs – Locale Root Layout
 * app/[lang]/layout.tsx
 *
 * This is the root layout for all locale-prefixed routes (/en/... and /te/...).
 * Per Next.js 16 docs: app/layout.tsx can be omitted when subdirectory layouts
 * serve as root layouts for their respective directories.
 * Ref: node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/layout.md
 *
 * This layout:
 *  - Declares generateStaticParams for /en and /te pre-rendering
 *  - Sets html[lang] correctly per locale (en-IN / te-IN)
 *  - Loads shared fonts (Sora, Manrope, Noto Sans Telugu)
 *  - Adds hreflang alternates via Next.js Metadata API
 *  - Renders Header (with locale), main, Footer, FloatingContact
 */

import type { Metadata } from "next";
import { Sora, Manrope, Noto_Sans_Telugu } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyBookingBar from "@/components/layout/StickyBookingBar";
import { LOCALES, LOCALE_LANG_TAGS } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

// ---------------------------------------------------------------------------
// Fonts – Akshaya brand typography (Task 05)
// ---------------------------------------------------------------------------

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

const notoSansTelugu = Noto_Sans_Telugu({
  variable: "--font-noto-telugu",
  subsets: ["telugu"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: false,
});

// ---------------------------------------------------------------------------
// Static params – pre-render /en and /te at build time
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

// ---------------------------------------------------------------------------
// Metadata – base with hreflang alternates via Next.js Metadata API
// ---------------------------------------------------------------------------

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://akshayacabs.com";

export const metadata: Metadata = {
  title: {
    default: "Akshaya Cabs | Tirupati Cab Service & Temple Tours",
    template: "%s | Akshaya Cabs Tirupati",
  },
  description:
    "Akshaya Cabs – Tirupati's trusted cab service for temple tours, Tirumala taxi, outstation cabs, airport transfers and South India pilgrimage packages. Available 24/7.",
  metadataBase: new URL(SITE_URL),
  keywords: [
    "Tirupati cab service",
    "Tirumala taxi service",
    "Tirupati temple tour packages",
    "Tirupati airport taxi",
    "Tirupati outstation cab",
    "Tempo Traveller Tirupati",
    "Tirupati sightseeing taxi",
    "pilgrimage tours Tirupati",
    "Akshaya Cabs Tirupati",
    "cab booking Tirupati",
  ],
  authors: [{ name: "Akshaya Cabs" }],
  creator: "Akshaya Cabs",
  publisher: "Akshaya Cabs",
  robots: { index: true, follow: true },
  // hreflang alternates – Google uses these for bilingual SEO
  alternates: {
    canonical: `${SITE_URL}/en`,
    languages: {
      "en-IN": `${SITE_URL}/en`,
      "te-IN": `${SITE_URL}/te`,
      "x-default": `${SITE_URL}/en`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Akshaya Cabs",
    title: "Akshaya Cabs | Tirupati Cab Service & Temple Tours",
    description:
      "Tirupati's trusted cab service for temple tours, Tirumala taxi, outstation cabs and pilgrimage packages. Call or WhatsApp +91 72888 76667. Available 24/7.",
    images: [
      {
        url: "/images/akshaya/brand/og-cover.webp",
        width: 1200,
        height: 630,
        alt: "Akshaya Cabs – Tirupati Cab Service & Temple Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshaya Cabs | Tirupati Cab & Temple Tours",
    description:
      "Trusted Tirupati cab and temple tour service. WhatsApp: +91 72888 76667. Available 24/7.",
    images: ["/images/akshaya/brand/og-cover.webp"],
    creator: "@akshayacab",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/logo/akshaya/akc-icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/logo/akshaya/akc-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/images/logo/akshaya/akc-icon-192.png" }],
  },
};

// ---------------------------------------------------------------------------
// Root Layout Component
// ---------------------------------------------------------------------------

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  // Determine html[lang] attribute; fallback to en-IN for unknown values
  const htmlLang: string = LOCALE_LANG_TAGS[lang as Locale] ?? LOCALE_LANG_TAGS.en;
  const locale: Locale = (LOCALES.includes(lang as Locale) ? lang : "en") as Locale;

  return (
    <html
      lang={htmlLang}
      className={`${sora.variable} ${manrope.variable} ${notoSansTelugu.variable}`}
    >
      <body className="akc-body">
        <Header locale={locale} />
        <main id="main-content" className="akc-main">
          {children}
        </main>
        <Footer locale={locale} />
        <StickyBookingBar locale={locale} />
      </body>
    </html>
  );
}
