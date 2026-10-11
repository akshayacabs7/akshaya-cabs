/**
 * Akshaya Cabs — AkcFleetPreviewSection (TASK-12)
 * 4-vehicle preview with real images, factual pricing, locale-aware.
 * Server Component. No .svtt-* class names.
 */

import Image from "next/image";
import Link from "next/link";
import { VEHICLES } from "@/data/vehicles";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { BUSINESS } from "@/data/business";
import type { Locale } from "@/i18n/config";

const PREVIEW_IDS = [
  "dzire-amaze-etios",
  "innova-crysta",
  "tempo-traveller-12",
  "force-urbania-12",
];

// Vehicle capacity display: always show passenger count, not total-with-driver
function displayCapacity(capacity: string): string {
  // "4+1" → "4 passengers", "12+1" → "12 passengers"
  return capacity.replace(/(\d+)\+1/, "$1 passengers");
}

interface Props { locale: Locale; }

export default function AkcFleetPreviewSection({ locale }: Props) {
  const isEn = locale === "en";
  const preview = VEHICLES.filter((v) => PREVIEW_IDS.includes(v.id));
  const vehicles = preview.length >= 4 ? preview : VEHICLES.slice(0, 4);

  return (
    <section className="akc-section akc-section--alt akc-fleet-preview" aria-labelledby="fleet-preview-heading">
      <div className="akc-container">

        {/* ── Header ── */}
        <div className="akc-section-header">
          <p className="akc-section-label">{isEn ? "Our Fleet" : "మా వాహనాలు"}</p>
          <h2 id="fleet-preview-heading" className="akc-section-title">
            {isEn ? "Clean, AC Vehicles for Every Group" : "ప్రతి బృందానికి శుభ్రమైన, AC వాహనాలు"}
          </h2>
          <p className="akc-section-subtitle">
            {isEn
              ? "From compact sedans for couples to Force Urbania 12 Seater luxury vans and Tempo Travellers for pilgrim groups — all AC, well-maintained, and regularly serviced."
              : "జంటలకు కాంపాక్ట్ సెడాన్ నుండి యాత్రికుల బృందాలకు ఫోర్స్ అర్బానియా 12 సీటర్ మరియు టెంపో ట్రావెల్లర్ వరకు — అన్నీ AC, చక్కగా నిర్వహించబడినవి."}
          </p>
        </div>

        {/* ── Vehicle grid ── */}
        <ul role="list" className="akc-fleet-preview__grid">
          {vehicles.map((v) => {
            const vehName = !isEn && v.nameTe ? v.nameTe : v.name;
            const vehLabel = !isEn && (v.labelTe ?? v.bestForTe) ? (v.labelTe ?? v.bestForTe) : (v.label ?? v.bestFor);
            const msg = isEn
              ? `Hello Akshaya Cabs Tirupati!\n\nI am interested in renting the ${v.name} (${displayCapacity(v.capacity)}).\n\nPlease share availability and pricing. Thank you!`
              : `నమస్కారం అక్షయ క్యాబ్స్!\n\n${vehName} (${v.seats} మంది ప్రయాణికులు) బుకింగ్ గురించి వివరాలు పంచగలరా? ధన్యవాదాలు!`;
            const waUrl = buildWhatsAppUrl(BUSINESS.phone.primaryWhatsApp, msg);

            return (
              <li key={v.id} className="akc-fleet-preview__card">
                {/* Image */}
                <div className="akc-fleet-preview__img-wrap">
                  <Image
                    src={v.image}
                    alt={`${vehName} — Akshaya Cabs Tirupati`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="akc-fleet-preview__img"
                  />
                  <span
                    className="akc-fleet-preview__badge"
                    aria-label={displayCapacity(v.capacity)}
                  >
                    {v.capacity.replace("+1", "")} {isEn ? "seater" : "సీటర్"}
                  </span>
                </div>

                {/* Body */}
                <div className="akc-fleet-preview__body">
                  <h3 className={`akc-fleet-preview__name${locale === "te" ? " lang-te" : ""}`}>{vehName}</h3>
                  <p className={`akc-fleet-preview__label${locale === "te" ? " lang-te" : ""}`}>{vehLabel}</p>

                  <div className="akc-fleet-preview__price">
                    <span className="akc-fleet-preview__price-from">{isEn ? "From" : "నుండి"}</span>
                    <strong className="akc-fleet-preview__price-val">
                      ₹{v.price.perKm}/km
                    </strong>
                  </div>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="akc-btn akc-btn--wa akc-btn--sm"
                    aria-label={isEn
                      ? `Enquire about ${v.name} on WhatsApp`
                      : `${vehName} గురించి WhatsApp లో విచారించండి`}
                  >
                    {isEn ? "Enquire on WhatsApp" : "WhatsApp లో విచారించండి"}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>

        {/* ── CTA ── */}
        <div className="akc-section-cta akc-section-cta--center">
          <Link href={`/${locale}/fleet`} className="akc-btn akc-btn--secondary">
            {isEn ? "View Full Fleet & Pricing" : "పూర్తి వాహనాలు & ధరలు చూడండి"}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
