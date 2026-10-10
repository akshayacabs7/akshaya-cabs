// Akshaya Cabs — Tour Packages Listing Page (TASK-14)
// /[lang]/tour-packages — locale-aware, bilingual EN+TE
// Server Component. No SVTT identity. No .svtt-* class names.
//
// Sections:
//  1. Page hero
//  2. AkcPackageGallery (client island — 3-axis filters + 10 package cards)
//  3. Custom tour CTA strip
//  4. Pricing note strip

import type { Metadata } from "next";
import Link from "next/link";
import { PACKAGES } from "@/data/packages";
import { primaryWhatsAppUrl } from "@/lib/whatsapp";
import { BUSINESS } from "@/data/business";
import AkcPackageGallery from "@/components/ui/AkcPackageGallery";
import type { Locale } from "@/i18n/config";
import { LOCALES } from "@/i18n/config";

// ── Metadata ──────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = (LOCALES.includes(lang as Locale) ? lang : "en") as Locale;
  const isTe = locale === "te";

  const title = isTe
    ? "టూర్ ప్యాకేజీలు | అక్షయ క్యాబ్స్ — తిరుపతి ఆలయ టూర్లు"
    : "Tour Packages | Akshaya Cabs — Tirupati Temple Tours";

  const description = isTe
    ? "తిరుపతి నుండి 10 క్యూరేటెడ్ ఆలయ టూర్ ప్యాకేజీలు — తిరుమల దర్శన్, కాణిపాకం, శ్రీ కాళహస్తి, పద్మావతి, గోల్డెన్ టెంపుల్ వెల్లూర్, అరుణాచలం & మరిన్ని. బహుళ వాహన ఎంపికలు. WhatsApp లో బుక్ చేయండి."
    : "10 curated temple tour packages from Tirupati — Tirumala darshan, Kanipakam, Sri Kalahasti, Padmavathi, Golden Temple Vellore, Arunachalam & more. Multiple vehicle options. Book on WhatsApp.";

  return {
    title,
    description,
    alternates: {
      canonical: `https://akshayacabs.com/${locale}/tour-packages`,
      languages: {
        "en-IN": "https://akshayacabs.com/en/tour-packages",
        "te-IN": "https://akshayacabs.com/te/tour-packages",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://akshayacabs.com/${locale}/tour-packages`,
      images: [{ url: "/images/akshaya/brand/og-cover.webp", width: 1200, height: 630 }],
    },
  };
}

// ── Page ──────────────────────────────────────────────────────────

export default async function TourPackagesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (LOCALES.includes(lang as Locale) ? lang : "en") as Locale;
  const isEn = locale === "en";

  const customTourWaUrl = primaryWhatsAppUrl(
    isEn
      ? "Hello Akshaya Cabs Tirupati! I would like to plan a custom pilgrimage tour. Could you help me with a route based on my preferred temples, dates, and group size? Thank you!"
      : "నమస్కారం అక్షయ క్యాబ్స్! నాకు కస్టమ్ యాత్రా టూర్ ప్లాన్ చేయాలనుకుంటున్నాను. నా ఇష్టపడే ఆలయాలు, తేదీలు మరియు బృంద పరిమాణం ఆధారంగా మార్గం సూచించగలరా? ధన్యవాదాలు!"
  );

  return (
    <>
      {/* ── 1. Page Hero ── */}
      <header className="akc-pkgpage-hero" role="banner">
        <div className="akc-container akc-pkgpage-hero__content">
          <p className="akc-pkgpage-hero__label">
            <span aria-hidden="true">🛕</span>
            {isEn ? "Temple Tour Packages" : "ఆలయ టూర్ ప్యాకేజీలు"}
          </p>
          <h1 className={`akc-pkgpage-hero__h1${locale === "te" ? " lang-te" : ""}`}>
            {isEn ? (
              <>Sacred Pilgrimage Packages<br />
                <span className="akc-pkgpage-hero__h1-accent">from Tirupati</span></>
            ) : (
              <>పవిత్ర యాత్రా ప్యాకేజీలు<br />
                <span className="akc-pkgpage-hero__h1-accent">తిరుపతి నుండి</span></>
            )}
          </h1>
          <p className={`akc-pkgpage-hero__desc${locale === "te" ? " lang-te" : ""}`}>
            {isEn
              ? "Carefully curated routes covering Tirumala, Kanipakam, Sri Kalahasti, Padmavathi Temple, Golden Temple Vellore, Arunachalam & more — with multiple vehicle options to suit every group size and budget."
              : "తిరుమల, కాణిపాకం, శ్రీ కాళహస్తి, పద్మావతి ఆలయం, గోల్డెన్ టెంపుల్ వెల్లూర్, అరుణాచలం & మరిన్ని కవర్ చేసే జాగ్రత్తగా రూపొందించిన మార్గాలు — ప్రతి బృంద పరిమాణం మరియు బడ్జెట్‌కు అనుకూలమైన బహుళ వాహన ఎంపికలతో."}
          </p>

          {/* Stats row */}
          <div className="akc-pkgpage-hero__stats">
            <div className="akc-pkgpage-hero__stat">
              <strong>{PACKAGES.length}</strong>
              <span>{isEn ? "packages" : "ప్యాకేజీలు"}</span>
            </div>
            <div className="akc-pkgpage-hero__stat-divider" aria-hidden="true" />
            <div className="akc-pkgpage-hero__stat">
              <strong>7</strong>
              <span>{isEn ? "vehicle options" : "వాహన ఎంపికలు"}</span>
            </div>
            <div className="akc-pkgpage-hero__stat-divider" aria-hidden="true" />
            <div className="akc-pkgpage-hero__stat">
              <strong>{isEn ? "24/7" : "24/7"}</strong>
              <span>{isEn ? "available" : "అందుబాటులో"}</span>
            </div>
          </div>

          <p className="akc-pkgpage-hero__note">
            ✓ {isEn
              ? "All prices include driver & fuel · Toll, parking & state permits are extra (paid by customer)"
              : "అన్ని ధరలు డ్రైవర్ & ఇంధనాన్ని చేర్చుతాయి · టోల్, పార్కింగ్ & రాష్ట్ర పర్మిట్లు అదనం (కస్టమర్ చెల్లిస్తారు)"}
          </p>
        </div>
      </header>

      {/* ── 2. Filter Gallery (Client Island) ── */}
      <AkcPackageGallery locale={locale} />

      {/* ── 3. Custom Tour CTA ── */}
      <section className="akc-pkgpage-custom-cta" aria-labelledby="custom-cta-heading">
        <div className="akc-container">
          <div className="akc-pkgpage-custom-cta__inner">
            <div className="akc-pkgpage-custom-cta__text">
              <p className="akc-pkgpage-custom-cta__eyebrow" aria-hidden="true">✨</p>
              <h2
                id="custom-cta-heading"
                className={`akc-pkgpage-custom-cta__heading${locale === "te" ? " lang-te" : ""}`}
              >
                {isEn ? "Don't see what you're looking for?" : "మీకు కావలసింది కనుగొనలేదా?"}
              </h2>
              <p className={`akc-pkgpage-custom-cta__sub${locale === "te" ? " lang-te" : ""}`}>
                {isEn
                  ? `We can design a custom pilgrimage route to match your preferred temples, budget, and schedule. WhatsApp us and we'll plan it together. Available ${BUSINESS.availability}.`
                  : `మీ ఇష్టపడే ఆలయాలు, బడ్జెట్ మరియు షెడ్యూల్‌కు సరిపోయే కస్టమ్ యాత్రా మార్గాన్ని మేము రూపొందిస్తాం. ${BUSINESS.availability} అందుబాటులో ఉన్నాం.`}
              </p>
              <div className="akc-pkgpage-custom-cta__btns">
                <a
                  href={customTourWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="akc-btn akc-btn--wa akc-btn--lg"
                  aria-label={isEn ? "Request a custom tour on WhatsApp" : "WhatsApp లో కస్టమ్ టూర్ అభ్యర్థించండి"}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  {isEn ? "Request Custom Tour" : "కస్టమ్ టూర్ అభ్యర్థించండి"}
                </a>
                <Link href={`/${locale}/request-a-quote`} className="akc-btn akc-btn--secondary akc-btn--lg">
                  {isEn ? "Get a Quote" : "కోటేషన్ పొందండి"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Pricing disclaimer ── */}
      <aside className="akc-pkgpage-disclaimer" aria-label={isEn ? "Pricing notes" : "ధర గమనికలు"}>
        <div className="akc-container">
          <p className="akc-pkgpage-disclaimer__text">
            <strong>
              {isEn ? "Note on km allowance:" : "కి.మీ. అలవెన్స్ గమనిక:"}
            </strong>{" "}
            {isEn
              ? "Each package includes a km allowance (e.g., 300 km). This is the number of kilometres included in the package price — it is not the route distance. Additional kilometres beyond the allowance are charged at the vehicle's per-km rate. For AKC0007, the estimated driving circuit (~415 km) exceeds the 300 km allowance — an extra-km advisory is shown on that package card."
              : "ప్రతి ప్యాకేజీలో కి.మీ. అలవెన్స్ (ఉదా. 300 కి.మీ.) ఉంటుంది. ఇది ప్యాకేజీ ధరలో చేర్చిన కిలోమీటర్ల సంఖ్య — ఇది రూట్ దూరం కాదు. అలవెన్స్ మించిన అదనపు కిలోమీటర్లు వాహనం యొక్క కి.మీ. ధరకు వసూలు చేయబడతాయి."}
          </p>
        </div>
      </aside>
    </>
  );
}
