"use client";
/**
 * Akshaya Cabs — AkcFleetGallery (TASK-13)
 * Client component: filter tabs + seat-range filter + vehicle gallery.
 *
 * Rules enforced:
 * - "4+1" is displayed as "4 passengers" — +1 is the driver
 * - Driver allowance is INCLUDED in all fares — never shown as a surcharge
 * - No live availability — WhatsApp enquiry only
 * - No .svtt-* class names
 */

import { useState, useMemo } from "react";
import Image from "next/image";
import { VEHICLES } from "@/data/vehicles";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { BUSINESS } from "@/data/business";
import type { Vehicle } from "@/types";
import type { Locale } from "@/i18n/config";

type Cat = "all" | Vehicle["category"];
type SeatFilter = "any" | "1-4" | "5-7" | "8-12" | "13+";

// ── Filter config ─────────────────────────────────────────────────

const CAT_FILTERS: { id: Cat; labelEn: string; labelTe: string; emoji: string }[] = [
  { id: "all",    labelEn: "All Vehicles",     labelTe: "అన్ని వాహనాలు",    emoji: "🚗" },
  { id: "sedan",  labelEn: "Sedans",           labelTe: "సెడాన్",           emoji: "🚙" },
  { id: "suv",    labelEn: "SUVs",             labelTe: "SUV",              emoji: "🚐" },
  { id: "van",    labelEn: "Vans",             labelTe: "వ్యాన్",            emoji: "🚌" },
  { id: "tempo",  labelEn: "Tempo Travellers", labelTe: "టెంపో ట్రావెల్లర్", emoji: "🚍" },
];

const SEAT_FILTERS: { id: SeatFilter; labelEn: string; labelTe: string }[] = [
  { id: "any",  labelEn: "Any size",    labelTe: "ఏ సైజు" },
  { id: "1-4",  labelEn: "Up to 4",    labelTe: "4 వరకు" },
  { id: "5-7",  labelEn: "5 – 7",      labelTe: "5 – 7" },
  { id: "8-12", labelEn: "8 – 12",     labelTe: "8 – 12" },
  { id: "13+",  labelEn: "13 or more", labelTe: "13 లేదా అంతకు మించి" },
];

function matchesSeat(seats: number, filter: SeatFilter): boolean {
  if (filter === "any")  return true;
  if (filter === "1-4")  return seats <= 4;
  if (filter === "5-7")  return seats >= 5 && seats <= 7;
  if (filter === "8-12") return seats >= 8 && seats <= 12;
  if (filter === "13+")  return seats >= 13;
  return true;
}

// ── Helpers ───────────────────────────────────────────────────────

function pax(v: Vehicle): string {
  // Always show passenger count, never total occupants
  return `${v.seats} passenger${v.seats !== 1 ? "s" : ""}`;
}

function formatPrice(n: number): string {
  return `₹${n.toLocaleString("en-IN")}`;
}

const CAT_BADGE_COLOR: Record<Vehicle["category"], string> = {
  sedan: "#0FAF9D",
  suv:   "#102B46",
  van:   "#2563EB",
  tempo: "#7C3AED",
};

const WA_NUMBER = BUSINESS.phone.primaryWhatsApp;

// ── Component ─────────────────────────────────────────────────────

interface Props { locale: Locale; }

export default function AkcFleetGallery({ locale }: Props) {
  const isEn = locale === "en";
  const [activeCat, setActiveCat] = useState<Cat>("all");
  const [activeSeat, setActiveSeat] = useState<SeatFilter>("any");

  const filtered = useMemo(() => {
    return VEHICLES.filter((v) => {
      const catMatch  = activeCat === "all" || v.category === activeCat;
      const seatMatch = matchesSeat(v.seats, activeSeat);
      return catMatch && seatMatch;
    });
  }, [activeCat, activeSeat]);

  const catCount = (cat: Cat) =>
    cat === "all" ? VEHICLES.length : VEHICLES.filter((v) => v.category === cat).length;

  function handleReset() {
    setActiveCat("all");
    setActiveSeat("any");
  }

  return (
    <div className="akc-fleet-gallery">
      {/* ── Filter bar ── */}
      <div className="akc-fleet-filters-wrap">
        <div className="akc-container">

          {/* Category tabs */}
          <nav
            className="akc-fleet-cat-tabs"
            aria-label={isEn ? "Filter by vehicle category" : "వాహన తరగతి ద్వారా ఫిల్టర్ చేయండి"}
          >
            {CAT_FILTERS.map((f) => (
              <button
                key={f.id}
                className={`akc-fleet-tab${activeCat === f.id ? " akc-fleet-tab--active" : ""}`}
                onClick={() => setActiveCat(f.id)}
                aria-pressed={activeCat === f.id}
              >
                <span aria-hidden="true">{f.emoji}</span>
                <span>{isEn ? f.labelEn : f.labelTe}</span>
                <span className="akc-fleet-tab__count">{catCount(f.id)}</span>
              </button>
            ))}
          </nav>

          {/* Seat-range pills */}
          <div className="akc-fleet-seat-row">
            <span className="akc-fleet-seat-label" aria-hidden="true">
              {isEn ? "Passengers:" : "ప్రయాణికులు:"}
            </span>
            <div
              role="group"
              aria-label={isEn ? "Filter by passenger count" : "ప్రయాణికుల సంఖ్య ద్వారా ఫిల్టర్"}
              className="akc-fleet-seat-pills"
            >
              {SEAT_FILTERS.map((f) => (
                <button
                  key={f.id}
                  className={`akc-fleet-seat-pill${activeSeat === f.id ? " akc-fleet-seat-pill--active" : ""}`}
                  onClick={() => setActiveSeat(f.id)}
                  aria-pressed={activeSeat === f.id}
                >
                  {isEn ? f.labelEn : f.labelTe}
                </button>
              ))}
            </div>

            {/* Reset */}
            {(activeCat !== "all" || activeSeat !== "any") && (
              <button
                className="akc-fleet-reset"
                onClick={handleReset}
                aria-label={isEn ? "Clear all filters" : "అన్ని ఫిల్టర్లు క్లియర్ చేయండి"}
              >
                ✕ {isEn ? "Clear" : "క్లియర్"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Gallery or empty state ── */}
      <section className="akc-fleet-section" aria-label={isEn ? "Vehicle gallery" : "వాహన గ్యాలరీ"}>
        <div className="akc-container">
          {filtered.length === 0 ? (
            /* Empty state */
            <div className="akc-fleet-empty">
              <span className="akc-fleet-empty__icon" aria-hidden="true">🔍</span>
              <p className={`akc-fleet-empty__text${locale === "te" ? " lang-te" : ""}`}>
                {isEn
                  ? "No vehicles match your current filters. Try adjusting the category or passenger count."
                  : "మీ ప్రస్తుత ఫిల్టర్‌లకు సరిపోయే వాహనాలు లేవు. తరగతి లేదా ప్రయాణికుల సంఖ్యను మార్చి ప్రయత్నించండి."}
              </p>
              <button className="akc-btn akc-btn--secondary" onClick={handleReset}>
                {isEn ? "Show all vehicles" : "అన్ని వాహనాలు చూపించు"}
              </button>
            </div>
          ) : (
            <ul className="akc-fleet-grid" role="list">
              {filtered.map((v, idx) => {
                const vehName = !isEn && v.nameTe ? v.nameTe : v.name;
                const vehLabel = !isEn && v.labelTe ? v.labelTe : v.label;
                const vehBestFor = !isEn && v.bestForTe ? v.bestForTe : v.bestFor;
                const vehFeatures = !isEn && v.featuresTe && v.featuresTe.length > 0 ? v.featuresTe : v.features;
                const catLabel = isEn
                  ? (v.category.charAt(0).toUpperCase() + v.category.slice(1))
                  : (CAT_FILTERS.find((f) => f.id === v.category)?.labelTe ?? v.category);

                const msg = isEn
                  ? `Hello Akshaya Cabs Tirupati!\n\nI would like to enquire about the ${v.name} (${pax(v)}).\n\nPlease share availability and pricing.\n\nThank you!`
                  : `నమస్కారం అక్షయ క్యాబ్స్!\n\n${vehName} (${v.seats} మంది ప్రయాణికులు) బుకింగ్ గురించి వివరాలు పంచగలరా? ధన్యవాదాలు!`;
                const waUrl = buildWhatsAppUrl(WA_NUMBER, msg);
                const badgeColor = CAT_BADGE_COLOR[v.category] ?? "#102B46";

                return (
                  <li key={v.id} className="akc-veh-card">
                    {/* ── Image wrap ── */}
                    <div className="akc-veh-card__img-wrap">
                      <Image
                        src={v.image}
                        alt={v.imageAlt ?? `${vehName} — Akshaya Cabs Tirupati`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="akc-veh-card__img"
                        loading={idx < 3 ? "eager" : "lazy"}
                      />

                      {/* Category badge */}
                      <span
                        className="akc-veh-card__cat-badge"
                        style={{ background: badgeColor }}
                      >
                        {catLabel}
                      </span>

                      {/* AC & Wi-Fi badges */}
                      <div className="akc-veh-card__top-right-badges">
                        {v.acStatus && (
                          <span className="akc-veh-card__ac-badge">✓ AC</span>
                        )}
                        {(v.wifiStatus ?? true) && (
                          <span
                            className="akc-veh-card__wifi-badge"
                            aria-label={isEn ? "Wi‑Fi Available" : "Wi‑Fi సౌకర్యం అందుబాటులో ఉంది"}
                          >
                            📶 {isEn ? "Wi‑Fi Available" : "Wi‑Fi సౌకర్యం అందుబాటులో ఉంది"}
                          </span>
                        )}
                      </div>

                      {/* Passenger count chip */}
                      <div className="akc-veh-card__pax-wrap">
                        <span className={`akc-veh-card__pax${locale === "te" ? " lang-te" : ""}`}>
                          {isEn ? `👥 ${pax(v)}` : `👥 ${v.seats} మంది ప్రయాణికులు`}
                        </span>
                      </div>
                    </div>

                    {/* ── Card body ── */}
                    <div className="akc-veh-card__body">
                      <h2 className={`akc-veh-card__name${locale === "te" ? " lang-te" : ""}`}>{vehName}</h2>

                      {v.variants && v.variants.length > 0 && (
                        <p className="akc-veh-card__variants">{v.variants.join(" · ")}</p>
                      )}

                      {/* Label pill */}
                      {vehLabel && (
                        <span className={`akc-veh-card__label${locale === "te" ? " lang-te" : ""}`}>{vehLabel}</span>
                      )}

                      {/* Best-for */}
                      {vehBestFor && (
                        <p className={`akc-veh-card__best-for${locale === "te" ? " lang-te" : ""}`}>
                          <strong>{isEn ? "Best for:" : "అనుకూలం:"}</strong> {vehBestFor}
                        </p>
                      )}

                      {/* Feature chips */}
                      {vehFeatures && vehFeatures.length > 0 && (
                        <div
                          className="akc-veh-card__features"
                          aria-label={isEn ? `Features of ${vehName}` : `${vehName} వాహన లక్షణాలు`}
                        >
                          {vehFeatures.map((feat) => (
                            <span key={feat} className={`akc-veh-card__feat${locale === "te" ? " lang-te" : ""}`}>✓ {feat}</span>
                          ))}
                        </div>
                      )}

                      {/* Pricing block */}
                      <div
                        className="akc-veh-card__pricing"
                        aria-label={isEn ? `Pricing for ${vehName}` : `${vehName} ధరలు`}
                      >
                        {v.price.perKm && (
                          <div className="akc-veh-card__price-row">
                            <span className="akc-veh-card__price-label">
                              {isEn ? "Per KM" : "కి.మీ. కి"}
                            </span>
                            <strong className="akc-veh-card__price-val">
                              {formatPrice(v.price.perKm)}
                            </strong>
                            <span className="akc-veh-card__price-note">
                              {isEn ? "outstation" : "అవుట్‌స్టేషన్"}
                            </span>
                          </div>
                        )}
                        {v.price.localDay && (
                          <div className="akc-veh-card__price-row">
                            <span className="akc-veh-card__price-label">
                              {isEn ? "Local / Day" : "స్థానిక / రోజు"}
                            </span>
                            <strong className="akc-veh-card__price-val">
                              {formatPrice(v.price.localDay)}
                            </strong>
                            <span className="akc-veh-card__price-note">{isEn ? "8 hrs" : "8 గంటలు"}</span>
                          </div>
                        )}
                        {v.price.kmLimit && (
                          <p className="akc-veh-card__km-allowance">
                            📍 {v.price.kmLimit} km {isEn ? "daily allowance" : "రోజువారీ అలవెన్స్"} ·{" "}
                            {isEn ? "Toll & parking extra" : "టోల్ & పార్కింగ్ అదనం"}
                          </p>
                        )}
                        <p className="akc-veh-card__driver-note">
                          {isEn ? "✓ Driver charges included" : "✓ డ్రైవర్ ఛార్జీలు చేర్చబడ్డాయి"}
                        </p>
                      </div>

                      {/* WhatsApp CTA */}
                      <div className="akc-veh-card__cta">
                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="akc-btn akc-btn--wa"
                          aria-label={isEn
                            ? `Enquire about ${v.name} on WhatsApp`
                            : `${vehName} గురించి WhatsApp లో విచారించండి`}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                          {isEn ? `Enquire — ${v.name}` : `విచారించండి — ${vehName}`}
                        </a>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
