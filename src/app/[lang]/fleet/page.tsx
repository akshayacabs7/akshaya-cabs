// Akshaya Cabs — Fleet Page (TASK-13)
// /[lang]/fleet — fully locale-aware, bilingual EN+TE
// Server Component. No SVTT identity. No .svtt-* class names.
//
// Sections:
//  1. Page hero
//  2. AkcFleetGallery (client island — filters + vehicle cards)
//  3. Side-by-side comparison table
//  4. Bottom CTA strip

import type { Metadata } from "next";
import Link from "next/link";
import { VEHICLES } from "@/data/vehicles";
import { buildWhatsAppUrl, primaryWhatsAppUrl } from "@/lib/whatsapp";
import { BUSINESS } from "@/data/business";
import AkcFleetGallery from "@/components/ui/AkcFleetGallery";
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
    ? "మా వాహనాలు | అక్షయ క్యాబ్స్ — తిరుపతి క్యాబ్ వాహనాలు"
    : "Our Fleet | Akshaya Cabs — Tirupati Cab Vehicles";

  const description = isTe
    ? "7 మంచి నిర్వహణలో ఉన్న AC వాహనాలు — Dzire, Ertiga, Innova, Innova Crysta, Tavera, Tempo Traveller 12+1 & Force Urbania 12 Seater. ధరలు, సీటు సంఖ్య & లక్షణాలను పోల్చండి. WhatsApp లో బుక్ చేయండి."
    : "7 well-maintained AC vehicles — Dzire, Ertiga, Innova, Innova Crysta, Tavera, Tempo Traveller 12+1 & Force Urbania 12 Seater. Compare pricing, capacity & features. Book on WhatsApp.";

  return {
    title,
    description,
    alternates: {
      canonical: `https://akshayacabs.com/${locale}/fleet`,
      languages: {
        "en-IN": "https://akshayacabs.com/en/fleet",
        "te-IN": "https://akshayacabs.com/te/fleet",
        "x-default": "https://akshayacabs.com/en/fleet",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://akshayacabs.com/${locale}/fleet`,
      images: [{ url: "/images/akshaya/brand/og-cover.webp", width: 1200, height: 630 }],
    },
  };
}

// ── Helpers ───────────────────────────────────────────────────────

function formatPrice(n: number): string {
  return `₹${n.toLocaleString("en-IN")}`;
}

function paxLabel(seats: number, isTe: boolean): string {
  // "4 passengers + driver" — rule: never show +1 as passenger count
  const p = `${seats} ${isTe ? "ప్రయాణికులు" : `passenger${seats !== 1 ? "s" : ""}`}`;
  return `${p} + ${isTe ? "డ్రైవర్" : "driver"}`;
}

const CAT_LABEL_TE: Record<string, string> = {
  sedan: "సెడాన్",
  suv: "SUV",
  van: "వ్యాన్",
  tempo: "టెంపో",
};

const WA_NUMBER = BUSINESS.phone.primaryWhatsApp;

// ── Page ──────────────────────────────────────────────────────────

export default async function FleetPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (LOCALES.includes(lang as Locale) ? lang : "en") as Locale;
  const isEn = locale === "en";

  const generalWaUrl = primaryWhatsAppUrl(
    isEn
      ? "Hello Akshaya Cabs Tirupati! I would like to enquire about vehicle availability and pricing. Could you recommend the right cab for my trip? Thank you!"
      : "నమస్కారం అక్షయ క్యాబ్స్! నాకు వాహన అందుబాటు మరియు ధర గురించి విచారించాలి. నా ట్రిప్‌కు సరైన క్యాబ్ సూచించగలరా? ధన్యవాదాలు!"
  );

  return (
    <>
      {/* ── 1. Page Hero ── */}
      <header className="akc-fleet-hero" role="banner">
        <div className="akc-container akc-fleet-hero__content">
          <p className="akc-fleet-hero__label">
            <span aria-hidden="true">🚗</span>
            {isEn ? "Our Fleet" : "మా వాహనాలు"}
          </p>
          <h1 className={`akc-fleet-hero__h1${locale === "te" ? " lang-te" : ""}`}>
            {isEn ? (
              <>{VEHICLES.length} Well-Maintained AC Vehicles —<br />
                <span className="akc-fleet-hero__h1-accent">Every Group Size Covered</span></>
            ) : (
              <>{VEHICLES.length} మంచి నిర్వహణలో ఉన్న AC వాహనాలు —<br />
                <span className="akc-fleet-hero__h1-accent">ప్రతి బృంద పరిమాణానికి అనుకూలం</span></>
            )}
          </h1>
          <p className="akc-fleet-hero__desc">
            {isEn
              ? "From compact sedans for solo pilgrims to 12-seater Force Urbania and Tempo Travellers for groups — all vehicles are air-conditioned, regularly serviced, and driven by experienced local professionals."
              : "సోలో యాత్రికుల కోసం కాంపాక్ట్ సెడాన్ నుండి బృందాల కోసం 12-సీటర్ ఫోర్స్ అర్బానియా మరియు టెంపో ట్రావెలర్ వరకు — అన్ని వాహనాలు AC, క్రమం తప్పకుండా సర్వీస్ చేయబడతాయి."}
          </p>
          <p className="akc-fleet-hero__note">
            ✓ {isEn
              ? "All prices include driver & fuel · Toll, parking & state permits are extra (paid by customer)"
              : "అన్ని ధరలు డ్రైవర్ & ఇంధనాన్ని చేర్చుతాయి · టోల్, పార్కింగ్ & రాష్ట్ర పర్మిట్లు అదనం (కస్టమర్ చెల్లిస్తారు)"}
          </p>
        </div>
      </header>

      {/* ── 2. Filter Gallery (Client Island) ── */}
      <AkcFleetGallery locale={locale} />

      {/* ── 3. Comparison Table ── */}
      <section className="akc-fleet-compare" aria-labelledby="compare-heading">
        <div className="akc-container">
          <div className="akc-section-header akc-section-header--center" style={{ marginBottom: "1.5rem" }}>
            <p className="akc-section-label">
              {isEn ? "Side-by-Side Comparison" : "పక్కపక్కన పోలిక"}
            </p>
            <h2 id="compare-heading" className="akc-section-title">
              {isEn ? "Vehicle Comparison Table" : "వాహన పోలిక పట్టిక"}
            </h2>
            <p className="akc-fleet-compare__note">
              {isEn
                ? "Scroll horizontally on mobile to view all columns · Toll, parking & state permits not included · Driver charges included in all fares"
                : "అన్ని కాలమ్‌లు చూడటానికి మొబైల్‌లో అడ్డంగా స్క్రోల్ చేయండి · టోల్, పార్కింగ్ చేర్చబడలేదు · డ్రైవర్ ఛార్జీలు అన్ని ధరలలో చేర్చబడ్డాయి"}
            </p>
          </div>

          <div className="akc-fleet-compare__scroll">
            <table className="akc-fleet-table" aria-label={isEn ? "Vehicle comparison table" : "వాహన పోలిక పట్టిక"}>
              <thead>
                <tr>
                  <th scope="col">{isEn ? "Vehicle" : "వాహనం"}</th>
                  <th scope="col">{isEn ? "Passengers" : "ప్రయాణికులు"}</th>
                  <th scope="col">{isEn ? "Category" : "తరగతి"}</th>
                  <th scope="col">{isEn ? "Per KM (Outstation)" : "కి.మీ. కి (అవుట్‌స్టేషన్)"}</th>
                  <th scope="col">{isEn ? "Local / Day (8 hrs)" : "స్థానిక / రోజు (8 గంటలు)"}</th>
                  <th scope="col">{isEn ? "KM Allowance/Day" : "కి.మీ. అలవెన్స్/రోజు"}</th>
                  <th scope="col">AC</th>
                  <th scope="col">{isEn ? "Wi‑Fi" : "వై-ఫై"}</th>
                  <th scope="col">{isEn ? "Enquire" : "విచారించండి"}</th>
                </tr>
              </thead>
              <tbody>
                {VEHICLES.map((v) => {
                  const vehName = !isEn && v.nameTe ? v.nameTe : v.name;
                  const vehLabel = !isEn && v.labelTe ? v.labelTe : v.label;
                  const vehCat = !isEn ? (CAT_LABEL_TE[v.category] ?? v.category) : v.category;
                  const msg = isEn
                    ? `Hello Akshaya Cabs Tirupati!\n\nI would like to enquire about the ${v.name} (${v.seats} passengers).\n\nPlease share availability and pricing. Thank you!`
                    : `నమస్కారం అక్షయ క్యాబ్స్!\n\n${vehName} (${v.seats} మంది ప్రయాణికులు) బుకింగ్ గురించి వివరాలు పంచగలరా? ధన్యవాదాలు!`;
                  const waUrl = buildWhatsAppUrl(WA_NUMBER, msg);

                  return (
                    <tr key={v.id}>
                      <td>
                        <span className={`akc-fleet-table__veh-name${locale === "te" ? " lang-te" : ""}`}>{vehName}</span>
                        {vehLabel && (
                          <span className={`akc-fleet-table__veh-label${locale === "te" ? " lang-te" : ""}`}>{vehLabel}</span>
                        )}
                      </td>
                      {/* Passenger count: use v.seats (NOT capacity string) */}
                      <td>{paxLabel(v.seats, !isEn)}</td>
                      <td className="akc-fleet-table__cat">{vehCat}</td>
                      <td>
                        {v.price.perKm
                          ? <span className="akc-fleet-table__price">{formatPrice(v.price.perKm)}/km</span>
                          : "—"}
                      </td>
                      <td>
                        {v.price.localDay
                          ? <span className="akc-fleet-table__price">{formatPrice(v.price.localDay)}</span>
                          : "—"}
                      </td>
                      <td>
                        {v.price.kmLimit
                          ? `${v.price.kmLimit} km`
                          : "—"}
                      </td>
                      <td>
                        {v.acStatus
                          ? <span className="akc-fleet-table__ac">✓ AC</span>
                          : isEn ? "Non-AC" : "Non-AC"}
                      </td>
                      <td>
                        {(v.wifiStatus ?? true)
                          ? <span className="akc-fleet-table__wifi">📶 {isEn ? "Wi‑Fi" : "వై-ఫై"}</span>
                          : isEn ? "—" : "—"}
                      </td>
                      <td>
                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="akc-btn akc-btn--wa akc-btn--sm"
                          aria-label={isEn
                            ? `Enquire about ${v.name} on WhatsApp`
                            : `${vehName} గురించి WhatsApp లో విచారించండి`}
                        >
                          {isEn ? "Enquire" : "విచారించండి"}
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Exclusions note */}
          <p className="akc-fleet-compare__exclusions">
            {isEn
              ? "⚠ Toll charges, highway parking fees, and state permit fees are NOT included and are paid by the customer. Driver allowance IS included in all fares shown above."
              : "⚠ టోల్ ఛార్జీలు, హైవే పార్కింగ్ ఫీజులు మరియు రాష్ట్ర పర్మిట్ ఫీజులు చేర్చబడలేదు — కస్టమర్ చెల్లిస్తారు. డ్రైవర్ అలవెన్స్ పైన చూపించిన అన్ని ధరలలో చేర్చబడింది."}
          </p>
        </div>
      </section>

      {/* ── 4. Bottom CTA Strip ── */}
      <section className="akc-fleet-bottom-cta" aria-labelledby="fleet-cta-heading">
        <div className="akc-container">
          <h2 id="fleet-cta-heading" className={`akc-fleet-bottom-cta__heading${locale === "te" ? " lang-te" : ""}`}>
            {isEn ? "Not Sure Which Vehicle to Choose?" : "ఏ వాహనం ఎంచుకోవాలో తెలియట్లేదా?"}
          </h2>
          <p className="akc-fleet-bottom-cta__sub">
            {isEn
              ? `Tell us your group size, destination, and dates — we'll recommend the best vehicle for your trip. Available ${BUSINESS.availability}.`
              : `మీ బృంద పరిమాణం, గమ్యం మరియు తేదీలు చెప్పండి — మేము మీ ట్రిప్‌కు అత్యుత్తమ వాహనాన్ని సూచిస్తాం. ${BUSINESS.availability} అందుబాటులో ఉన్నాం.`}
          </p>
          <div className="akc-fleet-bottom-cta__btns">
            <a
              href={generalWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="akc-btn akc-btn--wa akc-btn--lg"
              aria-label={isEn ? "Get vehicle recommendation on WhatsApp" : "WhatsApp లో వాహన సిఫార్సు పొందండి"}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              {isEn ? "Get Vehicle Recommendation" : "వాహన సిఫార్సు పొందండి"}
            </a>
            <Link href={`/${locale}/tour-packages`} className="akc-btn akc-btn--secondary akc-btn--lg">
              {isEn ? "View Tour Packages" : "టూర్ ప్యాకేజీలు చూడండి"}
            </Link>
            <a
              href={BUSINESS.phone.primaryTel}
              className="akc-btn akc-btn--ghost akc-btn--lg"
              aria-label={isEn
                ? `Call Akshaya Cabs at ${BUSINESS.phone.primaryDisplay}`
                : `అక్షయ క్యాబ్స్‌కు కాల్ చేయండి`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.93 19.79 19.79 0 01.01 .28 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              {isEn ? `Call ${BUSINESS.phone.primaryDisplay}` : BUSINESS.phone.primaryDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
