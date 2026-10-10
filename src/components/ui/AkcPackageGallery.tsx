"use client";
/**
 * Akshaya Cabs — AkcPackageGallery (TASK-14)
 * Client component: 3-axis filter (category / duration / destination)
 * + sort (price asc/desc) + all 10 package cards.
 *
 * Rules enforced:
 * - Only AKC IDs (AKC0001–AKC0010) are ever shown — never SVTT IDs.
 * - allowanceKm ≠ route distance. "300 km" is the included allowance only.
 * - AKC0007: displays a route advisory banner (exceedsAllowance: true).
 * - customQuote rows (Tavera / Tempo 17+1) show "Ask for price" — never ₹0.
 * - No .svtt-* class names.
 */

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { PACKAGES } from "@/data/packages";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { BUSINESS } from "@/data/business";
import type { Package } from "@/types";
import type { Locale } from "@/i18n/config";

// ── Filter config ─────────────────────────────────────────────────

type CatFilter = "all" | Package["category"];
type DurFilter = "all" | "short" | "fullday" | "multi";
type SortOption = "default" | "price-asc" | "price-desc";

const CAT_FILTERS: { id: CatFilter; labelEn: string; labelTe: string; emoji: string }[] = [
  { id: "all",       labelEn: "All Packages",   labelTe: "అన్ని ప్యాకేజీలు", emoji: "🛕" },
  { id: "local",     labelEn: "Local Temples",  labelTe: "స్థానిక ఆలయాలు",  emoji: "📍" },
  { id: "nearby",    labelEn: "Nearby Temples", labelTe: "సమీప ఆలయాలు",    emoji: "🗺️" },
  { id: "outstation",labelEn: "Outstation",     labelTe: "అవుట్‌స్టేషన్",    emoji: "✈️" },
  { id: "multi-day", labelEn: "Multi-Day",      labelTe: "బహు-రోజు",        emoji: "🌙" },
];

const DUR_FILTERS: { id: DurFilter; labelEn: string; labelTe: string }[] = [
  { id: "all",     labelEn: "Any duration", labelTe: "ఏ వ్యవధి" },
  { id: "short",   labelEn: "~5–7 hrs",    labelTe: "~5–7 గంటలు" },
  { id: "fullday", labelEn: "1 Day",        labelTe: "1 రోజు" },
  { id: "multi",   labelEn: "2+ Days",      labelTe: "2+ రోజులు" },
];

// Unique destination labels derived from package data
const ALL_DEST_LABELS: string[] = Array.from(
  new Set(PACKAGES.flatMap((p) => p.destinations).filter((d): d is string => typeof d === "string"))
).sort();

function matchesDuration(dur: string, filter: DurFilter): boolean {
  if (filter === "all") return true;
  if (filter === "short")   return dur.includes("5") || dur.includes("7");
  if (filter === "fullday") return dur === "1 Day";
  if (filter === "multi")   return dur.includes("2") || dur.includes("3");
  return true;
}

// ── Helpers ───────────────────────────────────────────────────────

function formatPrice(n: number): string {
  return `₹${n.toLocaleString("en-IN")}`;
}

const CAT_COLOR: Record<string, string> = {
  local:     "var(--akc-accent)",
  nearby:    "#2563EB",
  outstation:"#7C3AED",
  "multi-day":"#D97706",
};

const CAT_LABEL_EN: Record<string, string> = {
  local:     "Local",
  nearby:    "Nearby",
  outstation:"Outstation",
  "multi-day":"Multi-Day",
};

const WA_NUMBER = BUSINESS.phone.primaryWhatsApp;

// ── Component ─────────────────────────────────────────────────────

interface Props { locale: Locale; }

export default function AkcPackageGallery({ locale }: Props) {
  const isEn = locale === "en";
  const [activeCat,  setActiveCat]  = useState<CatFilter>("all");
  const [activeDur,  setActiveDur]  = useState<DurFilter>("all");
  const [activeDest, setActiveDest] = useState<string>("all");
  const [sort,       setSort]       = useState<SortOption>("default");

  // Filtered + sorted list
  const filtered = useMemo(() => {
    let list = PACKAGES.filter((p) => {
      const catOk  = activeCat === "all" || p.category === activeCat;
      const durOk  = matchesDuration(p.duration ?? "", activeDur);
      const destOk = activeDest === "all" || p.destinations.includes(activeDest);
      return catOk && durOk && destOk;
    });

    if (sort === "price-asc")  list = [...list].sort((a, b) => a.startingPrice - b.startingPrice);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.startingPrice - a.startingPrice);
    return list;
  }, [activeCat, activeDur, activeDest, sort]);

  const catCount = (cat: CatFilter) =>
    cat === "all" ? PACKAGES.length : PACKAGES.filter((p) => p.category === cat).length;

  function handleReset() {
    setActiveCat("all");
    setActiveDur("all");
    setActiveDest("all");
    setSort("default");
  }

  const hasFilter = activeCat !== "all" || activeDur !== "all" || activeDest !== "all";

  return (
    <div className="akc-pkg-gallery">

      {/* ── Filter bar ── */}
      <div className="akc-pkg-filters-wrap">
        <div className="akc-container">

          {/* Category tabs */}
          <nav
            className="akc-pkg-cat-tabs"
            aria-label={isEn ? "Filter by package category" : "ప్యాకేజీ తరగతి ద్వారా ఫిల్టర్"}
          >
            {CAT_FILTERS.map((f) => (
              <button
                key={f.id}
                className={`akc-pkg-tab${activeCat === f.id ? " akc-pkg-tab--active" : ""}`}
                onClick={() => setActiveCat(f.id)}
                aria-pressed={activeCat === f.id}
              >
                <span aria-hidden="true">{f.emoji}</span>
                <span>{isEn ? f.labelEn : f.labelTe}</span>
                <span className="akc-pkg-tab__count">{catCount(f.id)}</span>
              </button>
            ))}
          </nav>

          {/* Second row — Duration + Destination + Sort */}
          <div className="akc-pkg-filter-row2">

            {/* Duration pills */}
            <div
              role="group"
              aria-label={isEn ? "Filter by duration" : "వ్యవధి ద్వారా ఫిల్టర్"}
              className="akc-pkg-dur-pills"
            >
              {DUR_FILTERS.map((f) => (
                <button
                  key={f.id}
                  className={`akc-pkg-pill${activeDur === f.id ? " akc-pkg-pill--active" : ""}`}
                  onClick={() => setActiveDur(f.id)}
                  aria-pressed={activeDur === f.id}
                >
                  {isEn ? f.labelEn : f.labelTe}
                </button>
              ))}
            </div>

            {/* Destination select */}
            <select
              className="akc-pkg-dest-select"
              value={activeDest}
              onChange={(e) => setActiveDest(e.target.value)}
              aria-label={isEn ? "Filter by destination" : "గమ్యం ద్వారా ఫిల్టర్"}
            >
              <option value="all">{isEn ? "All destinations" : "అన్ని గమ్యాలు"}</option>
              {ALL_DEST_LABELS.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              className="akc-pkg-sort-select"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              aria-label={isEn ? "Sort packages" : "ప్యాకేజీలు క్రమబద్ధం చేయండి"}
            >
              <option value="default">{isEn ? "Default order" : "డిఫాల్ట్ క్రమం"}</option>
              <option value="price-asc">{isEn ? "Price: Low → High" : "ధర: తక్కువ → ఎక్కువ"}</option>
              <option value="price-desc">{isEn ? "Price: High → Low" : "ధర: ఎక్కువ → తక్కువ"}</option>
            </select>

            {/* Reset */}
            {hasFilter && (
              <button
                className="akc-fleet-reset"
                onClick={handleReset}
                aria-label={isEn ? "Clear all filters" : "అన్ని ఫిల్టర్లు క్లియర్ చేయండి"}
              >
                ✕ {isEn ? "Clear" : "క్లియర్"}
              </button>
            )}
          </div>

          {/* Result count */}
          <p className="akc-pkg-result-count" role="status" aria-live="polite">
            {isEn
              ? `Showing ${filtered.length} of ${PACKAGES.length} packages`
              : `${PACKAGES.length} లో ${filtered.length} ప్యాకేజీలు చూపిస్తున్నాం`}
          </p>
        </div>
      </div>

      {/* ── Grid or Empty ── */}
      <section
        className="akc-pkg-section"
        aria-label={isEn ? "Temple tour packages" : "ఆలయ టూర్ ప్యాకేజీలు"}
      >
        <div className="akc-container">
          {filtered.length === 0 ? (
            <div className="akc-fleet-empty">
              <span className="akc-fleet-empty__icon" aria-hidden="true">🔍</span>
              <p className={`akc-fleet-empty__text${locale === "te" ? " lang-te" : ""}`}>
                {isEn
                  ? "No packages match your current filters. Try adjusting the category, duration, or destination."
                  : "మీ ప్రస్తుత ఫిల్టర్‌లకు సరిపోయే ప్యాకేజీలు లేవు. తరగతి, వ్యవధి లేదా గమ్యం మార్చి ప్రయత్నించండి."}
              </p>
              <button className="akc-btn akc-btn--secondary" onClick={handleReset}>
                {isEn ? "Show all packages" : "అన్ని ప్యాకేజీలు చూపించు"}
              </button>
            </div>
          ) : (
            <ul className="akc-pkg-grid" role="list">
              {filtered.map((pkg, idx) => {
                const waMsg = isEn
                  ? `Hello Akshaya Cabs Tirupati!\n\nI am interested in the "${pkg.title}" (${pkg.code}) package.\n\nPlease share available vehicle options and pricing.\n\nThank you!`
                  : `నమస్కారం అక్షయ క్యాబ్స్!\n\n"${pkg.title}" (${pkg.code}) ప్యాకేజీ గురించి తెలుసుకోవాలనుకుంటున్నాను.\n\nవాహన ఎంపికలు మరియు ధర వివరాలు పంచగలరా?\n\nధన్యవాదాలు!`;
                const waUrl = buildWhatsAppUrl(WA_NUMBER, waMsg);
                const catColor = CAT_COLOR[pkg.category] ?? "var(--akc-primary)";

                return (
                  <li key={pkg.id} className={`akc-pkg-card${pkg.distance.exceedsAllowance ? " akc-pkg-card--advisory" : ""}`}>

                    {/* ── Image ── */}
                    <div className="akc-pkg-card__img-wrap">
                      <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="akc-pkg-card__img"
                        loading={idx < 3 ? "eager" : "lazy"}
                      />
                      {/* Duration badge */}
                      <span className="akc-pkg-card__dur-badge">
                        🕐 {pkg.duration}
                      </span>
                      {/* Category badge */}
                      <span
                        className="akc-pkg-card__cat-badge"
                        style={{ background: catColor }}
                      >
                        {CAT_LABEL_EN[pkg.category] ?? pkg.category}
                      </span>
                    </div>

                    {/* ── Body ── */}
                    <div className="akc-pkg-card__body">
                      {/* Code badge */}
                      <span className="akc-pkg-card__code">{pkg.code}</span>

                      {/* Title */}
                      <h2 className="akc-pkg-card__title">
                        <Link
                          href={`/${locale}/tour-packages/${pkg.slug}`}
                          className="akc-pkg-card__title-link"
                        >
                          {pkg.title}
                        </Link>
                      </h2>

                      {/* Destination chips */}
                      <div className="akc-pkg-card__dests" aria-label={isEn ? "Destinations covered" : "కవర్ చేసిన గమ్యాలు"}>
                        {pkg.destinations.map((d) => (
                          <span key={d} className="akc-pkg-card__dest-chip">📍 {d}</span>
                        ))}
                      </div>

                      {/* Temple stops teaser */}
                      <p className="akc-pkg-card__temples">
                        <strong>{isEn ? "Stops:" : "ఆగే ప్రదేశాలు:"}</strong>{" "}
                        {pkg.temples.slice(0, 3).join(" · ")}
                        {pkg.temples.length > 3 && (
                          <> · <span className="akc-pkg-card__more">+{pkg.temples.length - 3} more</span></>
                        )}
                      </p>

                      {/* Description */}
                      <p className="akc-pkg-card__desc">{pkg.description}</p>

                      {/* Km allowance note */}
                      <p className={`akc-pkg-card__km-note${pkg.distance.exceedsAllowance ? " akc-pkg-card__km-note--warn" : ""}`}>
                        {pkg.distance.exceedsAllowance ? "⚠" : "📍"}{" "}
                        {pkg.distance.distanceNote}
                      </p>
                    </div>

                    {/* ── Footer ── */}
                    <div className="akc-pkg-card__footer">
                      <div className="akc-pkg-card__price-block">
                        <span className="akc-pkg-card__price-from">
                          {isEn ? "Starting from" : "ప్రారంభ ధర"}
                        </span>
                        <strong className="akc-pkg-card__price-val">
                          {formatPrice(pkg.startingPrice)}
                        </strong>
                        <span className="akc-pkg-card__price-note">
                          {isEn ? "· driver & fuel included" : "· డ్రైవర్ & ఇంధనం చేర్చబడింది"}
                        </span>
                      </div>

                      <div className="akc-pkg-card__actions">
                        <Link
                          href={`/${locale}/tour-packages/${pkg.slug}`}
                          className="akc-btn akc-btn--secondary akc-btn--sm"
                        >
                          {isEn ? "View Details" : "వివరాలు చూడండి"}
                        </Link>
                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="akc-btn akc-btn--wa akc-btn--sm"
                          aria-label={isEn
                            ? `Enquire about ${pkg.title} on WhatsApp`
                            : `${pkg.title} గురించి WhatsApp లో విచారించండి`}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                          {isEn ? "Enquire" : "విచారించండి"}
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
