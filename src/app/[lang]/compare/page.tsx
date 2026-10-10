// Akshaya Cabs — Compare Tour Packages page (TASK-24)
// src/app/[lang]/compare/page.tsx
//
// This is a server component wrapper. The interactive comparator is
// a "use client" component (PackageComparator).
//
// Route: /en/compare  /te/compare

import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import PackageComparator from "@/components/compare/PackageComparator";

// ── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang !== "te";
  return {
    title: isEn
      ? "Compare Tour Packages | Akshaya Cabs Tirupati"
      : "టూర్ ప్యాకేజీలు పోల్చండి | అక్షయ క్యాబ్స్ తిరుపతి",
    description: isEn
      ? "Compare up to 3 Akshaya Cabs tour packages side by side — duration, temples covered, vehicle fares, km allowance and inclusions. Send a WhatsApp enquiry directly."
      : "అక్షయ క్యాబ్స్ టూర్ ప్యాకేజీలను పక్కపక్కన పోల్చండి — వ్యవధి, కవర్ చేసిన ఆలయాలు, వాహన ఫేర్‌లు, km అలవెన్స్ మరియు చేర్పులు.",
    alternates: { canonical: `https://akshayacabs.com/${lang}/compare` },
    openGraph: {
      title: isEn ? "Compare Tour Packages | Akshaya Cabs" : "టూర్ ప్యాకేజీలు పోల్చండి | అక్షయ క్యాబ్స్",
      description: isEn
        ? "Compare duration, temples, fares and inclusions for all 10 Akshaya Cabs tour packages."
        : "అన్ని 10 అక్షయ క్యాబ్స్ టూర్ ప్యాకేజీల వ్యవధి, ఆలయాలు, ఫేర్‌లు మరియు చేర్పులు పోల్చండి.",
      url: `https://akshayacabs.com/${lang}/compare`,
    },
  };
}

// ── Static params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "te" }];
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function ComparePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (lang === "te" ? "te" : "en") as Locale;
  const isEn = locale === "en";

  return (
    <>
      {/* ── Page Hero ── */}
      <header className="akc-compare-hero">
        <div className="akc-container akc-compare-hero__inner">
          <nav aria-label="Breadcrumb" className="akc-compare-hero__breadcrumb">
            <Link href={`/${locale}/tour-packages`} className="akc-compare-hero__breadcrumb-link">
              {isEn ? "← Tour Packages" : "← టూర్ ప్యాకేజీలు"}
            </Link>
          </nav>
          <span className="akc-compare-hero__label">
            📊 {isEn ? "Package Comparator" : "ప్యాకేజీ పోల్చుడు"}
          </span>
          <h1 className={`akc-compare-hero__h1${isEn ? "" : " lang-te"}`}>
            {isEn ? (
              <>
                Compare <span className="akc-compare-hero__h1-accent">Tour Packages</span>
              </>
            ) : (
              <>
                <span className="akc-compare-hero__h1-accent">టూర్ ప్యాకేజీలు</span> పోల్చండి
              </>
            )}
          </h1>
          <p className={`akc-compare-hero__desc${isEn ? "" : " lang-te"}`}>
            {isEn
              ? "Select up to 3 packages, choose your vehicle, and compare duration, temples, fares and km allowance side by side. Then send a WhatsApp enquiry in one click."
              : "గరిష్టంగా 3 ప్యాకేజీలు ఎంచుకుని, మీ వాహనాన్ని ఎంచుకుని, వ్యవధి, ఆలయాలు, ఫేర్‌లు మరియు km అలవెన్స్ పక్కపక్కన పోల్చండి. తర్వాత ఒక్క క్లిక్‌లో WhatsApp విచారణ పంపండి."}
          </p>
          <p className="akc-compare-hero__disclaimer">
            ⚠{" "}
            {isEn
              ? "All fares are indicative. Final fare confirmed on WhatsApp before travel. Tolls, parking, and darshan tickets are not included."
              : "అన్ని ఫేర్‌లు సూచనాత్మకమైనవి. ప్రయాణానికి ముందు WhatsApp లో తుది ఫేర్ నిర్ధారించబడుతుంది. టోల్లు, పార్కింగ్ మరియు దర్శన టికెట్లు చేర్చబడలేదు."}
          </p>
        </div>
      </header>

      {/* ── Interactive comparator (client) ── */}
      <PackageComparator locale={locale} />
    </>
  );
}
