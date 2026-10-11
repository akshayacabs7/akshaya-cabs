"use client";
// Akshaya Cabs — Package Comparator (TASK-24)
// src/components/compare/PackageComparator.tsx
// Phone field: BUSINESS.phone.primaryWhatsApp (e.g. "917288876667")
//
// RULES:
//  - Max 3 packages selected at once.
//  - All price/distance/temple data sourced from PACKAGES data — never invented.
//  - customQuote rows show "Get Quote" — never invent a price.
//  - No darshan ticket guarantees.
//  - Reset, cancel, empty states required.
//  - WhatsApp enquiry summary uses confirmed data only.
//  - Bilingual EN + TE via `locale` prop.

import { useState, useCallback } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Package } from "@/types";
import { PACKAGES } from "@/data/packages";
import { BUSINESS } from "@/data/business";

// ── Helpers ────────────────────────────────────────────────────────────────

function formatRupees(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

function buildWhatsAppText(
  selected: Package[],
  vehicleId: string,
  passengers: number,
  locale: Locale
): string {
  const isEn = locale === "en";
  const vehicle = VEHICLE_OPTIONS.find((v) => v.id === vehicleId);
  const vehicleName = !isEn && vehicle?.labelTe ? vehicle.labelTe : (vehicle?.label ?? vehicleId);

  const greeting = isEn
    ? `Hi Akshaya Cabs, I would like a quote for the following:\n\n`
    : `నమస్కారం అక్షయ క్యాబ్స్, నాకు కింది ప్యాకేజీలకు కోటేషన్ కావాలి:\n\n`;

  const pkgLines = selected
    .map((p, i) => {
      const price = p.prices.find((pr) => pr.vehicleId === vehicleId);
      const priceStr = price?.customQuote
        ? (isEn ? "(custom quote needed)" : "(ప్రత్యేక కోటేషన్ అవసరం)")
        : price?.price
        ? formatRupees(price.price)
        : (isEn ? "(price TBC)" : "(ధర ధృవీకరించబడుతుంది)");
      const title = !isEn && p.titleTe ? p.titleTe : p.title;
      const duration = !isEn && p.durationTe ? p.durationTe : p.duration;
      return `${i + 1}. ${title} (${duration}) — ${priceStr}`;
    })
    .join("\n");

  const vehicleLine = isEn
    ? `\nVehicle preferred: ${vehicleName} (${passengers} passengers)`
    : `\nవాహనం: ${vehicleName} (${passengers} మంది ప్రయాణికులు)`;
  const note = isEn
    ? `\n\nPlease confirm availability and final fare.`
    : `\n\nదయచేసి లభ్యత మరియు తుది ధర నిర్ధారించండి.`;

  return encodeURIComponent(greeting + pkgLines + vehicleLine + note);
}

// ── Vehicle option rows — shared across all packages ──────────────────────

const VEHICLE_OPTIONS = [
  { id: "dzire-amaze-etios", label: "Dzire / Amaze / Etios", labelTe: "డిజైర్ / అమేజ్ / ఎటియోస్", capacity: "4+1", maxPax: 4 },
  { id: "ertiga",            label: "Ertiga",                 labelTe: "ఎర్టిగా",                 capacity: "6+1", maxPax: 6 },
  { id: "innova",            label: "Innova",                 labelTe: "ఇన్నోవా",                 capacity: "7+1", maxPax: 7 },
  { id: "innova-crysta",     label: "Innova Crysta",          labelTe: "ఇన్నోవా క్రిస్టా",          capacity: "7+1", maxPax: 7 },
  { id: "tavera",            label: "Tavera",                 labelTe: "టవేరా",                 capacity: "8+1", maxPax: 8 },
  { id: "tempo-traveller-12",label: "Tempo Traveller 12+1",  labelTe: "టెంపో ట్రావెలర్ 12+1",  capacity: "12+1", maxPax: 12 },
  { id: "force-urbania-12",  label: "Force Urbania 12 Seater",labelTe: "ఫోర్స్ అర్బానియా 12 సీటర్",capacity: "12+1", maxPax: 12 },
];

// ── i18n strings ────────────────────────────────────────────────────────────

type Lang = Record<"en" | "te", string>;

const S: Record<string, Lang> = {
  pageTitle:    { en: "Compare Tour Packages", te: "టూర్ ప్యాకేజీలు పోల్చండి" },
  pageSubtitle: { en: "Select up to 3 packages to compare duration, temples covered, and vehicle fares.", te: "వ్యవధి, కవర్ చేసిన ఆలయాలు మరియు వాహన ఫేర్‌లను పోల్చడానికి గరిష్టంగా 3 ప్యాకేజీలు ఎంచుకోండి." },
  selectPkg:    { en: "Select packages to compare:", te: "పోల్చడానికి ప్యాకేజీలు ఎంచుకోండి:" },
  maxNote:      { en: "Maximum 3 packages at a time.", te: "ఒకేసారి గరిష్టంగా 3 ప్యాకేజీలు." },
  vehicle:      { en: "Your vehicle:", te: "మీ వాహనం:" },
  passengers:   { en: "Passengers:", te: "ప్రయాణికులు:" },
  compareBtn:   { en: "Compare Selected", te: "ఎంచుకున్నవి పోల్చండి" },
  resetBtn:     { en: "Reset", te: "రీసెట్" },
  emptyState:   { en: "Select at least 1 package above to see comparison.", te: "పోలిక చూడటానికి పైన కనీసం 1 ప్యాకేజీ ఎంచుకోండి." },
  duration:     { en: "Duration", te: "వ్యవధి" },
  temples:      { en: "Temples Covered", te: "కవర్ చేసిన ఆలయాలు" },
  allowance:    { en: "KM Allowance", te: "KM అలవెన్స్" },
  estRoute:     { en: "Est. Route", te: "అంచనా మార్గం" },
  fare:         { en: "Fare", te: "ఫేర్" },
  getQuote:     { en: "Get Quote", te: "కోటేషన్ పొందండి" },
  distWarn:     { en: "⚠ Exceeds allowance", te: "⚠ అలవెన్స్ మించుతుంది" },
  enquireWa:    { en: "Enquire on WhatsApp", te: "WhatsApp లో అడగండి" },
  included:     { en: "Included in all fares:", te: "అన్ని ఫేర్‌లలో చేర్చబడింది:" },
  notIncluded:  { en: "Not included:", te: "చేర్చబడలేదు:" },
  viewPkg:      { en: "View full details →", te: "పూర్తి వివరాలు చూడండి →" },
  category:     { en: "Category", te: "వర్గం" },
  startFrom:    { en: "Starts from", te: "నుండి ప్రారంభం" },
};

function t(key: string, locale: Locale): string {
  return S[key]?.[locale] ?? S[key]?.["en"] ?? key;
}

// ── Main component ─────────────────────────────────────────────────────────

interface PackageComparatorProps {
  locale: Locale;
}

export default function PackageComparator({ locale }: PackageComparatorProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [vehicleId, setVehicleId] = useState("innova");
  const [passengers, setPassengers] = useState(4);
  const [showComparison, setShowComparison] = useState(false);

  const selected = PACKAGES.filter((p) => selectedIds.includes(p.id));
  const chosenVehicle = VEHICLE_OPTIONS.find((v) => v.id === vehicleId)!;

  const togglePackage = useCallback(
    (id: string) => {
      setSelectedIds((prev) => {
        if (prev.includes(id)) return prev.filter((x) => x !== id);
        if (prev.length >= 3) return prev; // max 3
        return [...prev, id];
      });
      setShowComparison(false);
    },
    []
  );

  const handleReset = () => {
    setSelectedIds([]);
    setVehicleId("innova");
    setPassengers(4);
    setShowComparison(false);
  };

  const waUrl = `https://wa.me/${BUSINESS.phone.primaryWhatsApp}?text=${buildWhatsAppText(
    selected,
    vehicleId,
    passengers,
    locale
  )}`;

  const categoryLabel: Record<string, string> = {
    local:     locale === "te" ? "స్థానిక" : "Local",
    nearby:    locale === "te" ? "సమీప" : "Nearby",
    outstation:locale === "te" ? "అవుట్‌స్టేషన్" : "Outstation",
    "multi-day":locale === "te" ? "బహుళ-దినాలు" : "Multi-Day",
  };

  return (
    <div className="akc-compare">

      {/* ── Package picker ── */}
      <section className="akc-compare-picker" aria-labelledby="picker-heading">
        <div className="akc-container">
          <div className="akc-compare-picker__header">
            <h2 id="picker-heading" className={`akc-compare-picker__title${locale === "te" ? " lang-te" : ""}`}>
              {t("selectPkg", locale)}
            </h2>
            <p className="akc-compare-picker__note">{t("maxNote", locale)}</p>
          </div>

          <ul className="akc-compare-picker__grid" role="list">
            {PACKAGES.map((pkg) => {
              const isSelected = selectedIds.includes(pkg.id);
              const isDisabled = !isSelected && selectedIds.length >= 3;
              const title = locale === "te" && pkg.shortTitleTe ? pkg.shortTitleTe : pkg.shortTitle;
              const duration = locale === "te" && pkg.durationTe ? pkg.durationTe : pkg.duration;
              return (
                <li key={pkg.id} className="akc-compare-picker__item" role="listitem">
                  <button
                    type="button"
                    id={`pkg-btn-${pkg.id}`}
                    onClick={() => togglePackage(pkg.id)}
                    disabled={isDisabled}
                    aria-pressed={isSelected}
                    aria-label={`${isSelected ? "Deselect" : "Select"} ${pkg.title}`}
                    className={[
                      "akc-compare-pkg-btn",
                      isSelected ? "akc-compare-pkg-btn--selected" : "",
                      isDisabled ? "akc-compare-pkg-btn--disabled" : "",
                    ].join(" ")}
                  >
                    <span className="akc-compare-pkg-btn__check" aria-hidden="true">
                      {isSelected ? "✓" : "+"}
                    </span>
                    <span className={`akc-compare-pkg-btn__title${locale === "te" ? " lang-te" : ""}`}>{title}</span>
                    <span className={`akc-compare-pkg-btn__meta${locale === "te" ? " lang-te" : ""}`}>
                      {duration} · {formatRupees(pkg.startingPrice)}+
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Controls */}
          <div className="akc-compare-controls">
            <div className="akc-compare-controls__field">
              <label htmlFor="vehicle-select" className={locale === "te" ? "lang-te" : ""}>
                {t("vehicle", locale)}
              </label>
              <select
                id="vehicle-select"
                value={vehicleId}
                onChange={(e) => { setVehicleId(e.target.value); setShowComparison(false); }}
                className="akc-compare-controls__select"
              >
                {VEHICLE_OPTIONS.map((v) => (
                  <option key={v.id} value={v.id}>
                    {locale === "te" ? v.labelTe : v.label} ({v.capacity})
                  </option>
                ))}
              </select>
            </div>

            <div className="akc-compare-controls__field">
              <label htmlFor="pax-input" className={locale === "te" ? "lang-te" : ""}>
                {t("passengers", locale)}
              </label>
              <input
                id="pax-input"
                type="number"
                min={1}
                max={chosenVehicle.maxPax}
                value={passengers}
                onChange={(e) => setPassengers(Math.max(1, Math.min(chosenVehicle.maxPax, Number(e.target.value))))}
                className="akc-compare-controls__input"
                aria-label={`Number of passengers (max ${chosenVehicle.maxPax})`}
              />
            </div>

            <button
              type="button"
              onClick={() => setShowComparison(true)}
              disabled={selectedIds.length === 0}
              className="akc-btn akc-btn--primary akc-btn--md"
              aria-label={t("compareBtn", locale)}
            >
              <span className={locale === "te" ? "lang-te" : ""}>{t("compareBtn", locale)}</span>
            </button>

            {selectedIds.length > 0 && (
              <button
                type="button"
                onClick={handleReset}
                className="akc-btn akc-btn--outline akc-btn--md"
                aria-label={t("resetBtn", locale)}
              >
                <span className={locale === "te" ? "lang-te" : ""}>{t("resetBtn", locale)}</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── Comparison table / empty state ── */}
      <section className="akc-compare-results" aria-labelledby="results-heading" aria-live="polite">
        <div className="akc-container">
          <h2 id="results-heading" className="sr-only">
            {t("compareBtn", locale)}
          </h2>

          {!showComparison ? (
            <div className="akc-compare-empty" role="status">
              <span className="akc-compare-empty__icon" aria-hidden="true">📊</span>
              <p className={`akc-compare-empty__text${locale === "te" ? " lang-te" : ""}`}>
                {t("emptyState", locale)}
              </p>
            </div>
          ) : (
            <div className="akc-compare-table-wrap">
              <table className="akc-compare-table" aria-label="Package comparison table">
                <thead>
                  <tr>
                    <th scope="col" className="akc-compare-table__attr-col">
                      {/* attribute label column */}
                    </th>
                    {selected.map((pkg) => {
                      const title = locale === "te" && pkg.shortTitleTe ? pkg.shortTitleTe : pkg.shortTitle;
                      return (
                        <th key={pkg.id} scope="col" className="akc-compare-table__pkg-col">
                          <div className="akc-compare-table__pkg-header">
                            <span className="akc-compare-table__pkg-code">{pkg.code}</span>
                            <span className={`akc-compare-table__pkg-title${locale === "te" ? " lang-te" : ""}`}>{title}</span>
                            <button
                              type="button"
                              onClick={() => togglePackage(pkg.id)}
                              className="akc-compare-table__remove"
                              aria-label={`Remove ${title} from comparison`}
                            >
                              ✕
                            </button>
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {/* Category */}
                  <tr>
                    <th scope="row" className="akc-compare-table__row-label">
                      {t("category", locale)}
                    </th>
                    {selected.map((pkg) => (
                      <td key={pkg.id} className="akc-compare-table__cell">
                        <span className="akc-compare-table__badge">
                          {categoryLabel[pkg.category] ?? pkg.category}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Duration */}
                  <tr>
                    <th scope="row" className="akc-compare-table__row-label">
                      {t("duration", locale)}
                    </th>
                    {selected.map((pkg) => (
                      <td key={pkg.id} className={`akc-compare-table__cell${locale === "te" ? " lang-te" : ""}`}>
                        {locale === "te" && pkg.durationTe ? pkg.durationTe : pkg.duration}
                      </td>
                    ))}
                  </tr>

                  {/* KM Allowance */}
                  <tr>
                    <th scope="row" className="akc-compare-table__row-label">
                      {t("allowance", locale)}
                    </th>
                    {selected.map((pkg) => (
                      <td key={pkg.id} className="akc-compare-table__cell">
                        {pkg.distance.allowanceKm}
                      </td>
                    ))}
                  </tr>

                  {/* Est route */}
                  <tr>
                    <th scope="row" className="akc-compare-table__row-label">
                      {t("estRoute", locale)}
                    </th>
                    {selected.map((pkg) => {
                      const distNote = locale === "te" && pkg.distance.distanceNoteTe ? pkg.distance.distanceNoteTe : pkg.distance.distanceNote;
                      return (
                        <td key={pkg.id} className="akc-compare-table__cell">
                          ~{pkg.distance.estimatedRouteKm} km
                          {pkg.distance.exceedsAllowance && (
                            <span className="akc-compare-table__warn" title={distNote}>
                              {" "}{t("distWarn", locale)}
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>

                  {/* Fare for selected vehicle */}
                  <tr className="akc-compare-table__fare-row">
                    <th scope="row" className="akc-compare-table__row-label">
                      {t("fare", locale)}
                      <span className={`akc-compare-table__vehicle-label${locale === "te" ? " lang-te" : ""}`}>
                        ({locale === "te" ? chosenVehicle.labelTe : chosenVehicle.label})
                      </span>
                    </th>
                    {selected.map((pkg) => {
                      const priceRow = pkg.prices.find((p) => p.vehicleId === vehicleId);
                      return (
                        <td key={pkg.id} className="akc-compare-table__cell akc-compare-table__fare-cell">
                          {priceRow?.customQuote ? (
                            <span className="akc-compare-table__quote-badge">
                              {t("getQuote", locale)}
                            </span>
                          ) : priceRow?.price ? (
                            <strong className="akc-compare-table__price">
                              {formatRupees(priceRow.price)}
                            </strong>
                          ) : (
                            <span className="akc-compare-table__quote-badge">TBC</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>

                  {/* Starting from */}
                  <tr>
                    <th scope="row" className="akc-compare-table__row-label">
                      {t("startFrom", locale)}
                    </th>
                    {selected.map((pkg) => (
                      <td key={pkg.id} className="akc-compare-table__cell">
                        {formatRupees(pkg.startingPrice)}+
                      </td>
                    ))}
                  </tr>

                  {/* Temples */}
                  <tr>
                    <th scope="row" className="akc-compare-table__row-label akc-compare-table__row-label--top">
                      {t("temples", locale)}
                    </th>
                    {selected.map((pkg) => {
                      const temples = locale === "te" && pkg.templesTe && pkg.templesTe.length > 0 ? pkg.templesTe : pkg.temples;
                      const title = locale === "te" && pkg.shortTitleTe ? pkg.shortTitleTe : pkg.shortTitle;
                      return (
                        <td key={pkg.id} className="akc-compare-table__cell akc-compare-table__temples-cell">
                          <ul className="akc-compare-table__temples-list" aria-label={`Temples in ${title}`}>
                            {temples.map((temple) => (
                              <li key={temple} className={locale === "te" ? "lang-te" : ""}>{temple}</li>
                            ))}
                          </ul>
                        </td>
                      );
                    })}
                  </tr>

                  {/* View details links */}
                  <tr>
                    <th scope="row" className="akc-compare-table__row-label" />
                    {selected.map((pkg) => {
                      const title = locale === "te" && pkg.titleTe ? pkg.titleTe : pkg.title;
                      return (
                        <td key={pkg.id} className="akc-compare-table__cell">
                          <Link
                            href={`/${locale}/tour-packages/${pkg.slug}`}
                            className="akc-compare-table__view-link"
                            aria-label={`View full details for ${title}`}
                          >
                            {t("viewPkg", locale)}
                          </Link>
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>

              {/* Inclusions reminder */}
              <div className="akc-compare-inclusions">
                <div className="akc-compare-inclusions__col">
                  <strong>{t("included", locale)}</strong>
                  <ul>
                    <li>{locale === "te" ? "✅ డ్రైవర్‌తో AC వాహనం" : "✅ AC vehicle with driver"}</li>
                    <li>{locale === "te" ? "✅ ఇంధనం (Fuel)" : "✅ Fuel"}</li>
                    <li>{locale === "te" ? "✅ డ్రైవర్ అలవెన్స్" : "✅ Driver allowance"}</li>
                  </ul>
                </div>
                <div className="akc-compare-inclusions__col">
                  <strong>{t("notIncluded", locale)}</strong>
                  <ul>
                    <li>{locale === "te" ? "⚠ టోల్ & పార్కింగ్" : "⚠ Tolls & parking"}</li>
                    <li>{locale === "te" ? "⚠ రాష్ట్ర పర్మిట్లు (అవుట్‌స్టేషన్)" : "⚠ State permits (outstation)"}</li>
                    <li>{locale === "te" ? "🚫 దర్శన్ టిక్కెట్లు (TTD నిర్వహణ)" : "🚫 Darshan tickets (TTD managed)"}</li>
                    <li>{locale === "te" ? "🚫 భోజనం / వసతి" : "🚫 Meals / accommodation"}</li>
                  </ul>
                </div>
              </div>

              {/* WhatsApp enquiry CTA */}
              <div className="akc-compare-wa-cta">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="akc-btn akc-btn--wa akc-btn--lg"
                  aria-label={t("enquireWa", locale)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span className={locale === "te" ? "lang-te" : ""}>{t("enquireWa", locale)}</span>
                </a>
                <p className={`akc-compare-wa-cta__note${locale === "te" ? " lang-te" : ""}`}>
                  {locale === "en"
                    ? "Your selected packages and vehicle will be pre-filled in the message."
                    : "మీరు ఎంచుకున్న ప్యాకేజీలు మరియు వాహనం మెసేజ్‌లో ముందే పూరించబడతాయి."}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
