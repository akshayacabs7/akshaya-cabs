"use client";

/**
 * Akshaya Cabs – TripSearchPanel
 * Homepage smart trip entry widget (TASK-11)
 *
 * 6 trip-type tabs:  One-Way · Round Trip · Local · Airport/Station · Temple Tour · Custom
 * On submit → builds a WhatsApp pre-filled message → opens wa.me link (no fake booking).
 * Before TASK-18 (guided wizard), this is the first-contact enquiry panel.
 *
 * Fully bilingual: props carry locale + dictionary strings.
 * Keyboard accessible: tab, enter, focus-ring, aria attributes.
 * No past-date selection enforced via min attribute.
 */

import { useState, useId } from "react";
import type { Locale } from "@/i18n/config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { BUSINESS } from "@/data/business";

// ── Tab definitions ──────────────────────────────────────────────────────────

type TripType =
  | "one-way"
  | "round-trip"
  | "local"
  | "airport"
  | "temple"
  | "custom";

interface TripTab {
  id: TripType;
  labelEn: string;
  labelTe: string;
  icon: string;
  serviceEn: string;
  serviceTe: string;
}

const TABS: TripTab[] = [
  {
    id: "one-way",
    labelEn: "One-Way",
    labelTe: "వన్-వే",
    icon: "→",
    serviceEn: "One-Way Outstation Cab",
    serviceTe: "వన్-వే ఔట్‌స్టేషన్ క్యాబ్",
  },
  {
    id: "round-trip",
    labelEn: "Round Trip",
    labelTe: "రౌండ్ ట్రిప్",
    icon: "⇄",
    serviceEn: "Round-Trip Cab",
    serviceTe: "రౌండ్ ట్రిప్ క్యాబ్",
  },
  {
    id: "local",
    labelEn: "Local",
    labelTe: "స్థానిక",
    icon: "📍",
    serviceEn: "Tirupati Local Cab (8-hour)",
    serviceTe: "తిరుపతి స్థానిక క్యాబ్ (8 గంటలు)",
  },
  {
    id: "airport",
    labelEn: "Airport / Station",
    labelTe: "విమానాశ్రయం / స్టేషన్",
    icon: "✈",
    serviceEn: "Airport or Railway Station Transfer",
    serviceTe: "విమానాశ్రయం లేదా రైల్వే స్టేషన్ బదిలీ",
  },
  {
    id: "temple",
    labelEn: "Temple Tour",
    labelTe: "దేవాలయ టూర్",
    icon: "🛕",
    serviceEn: "Temple Tour Package",
    serviceTe: "దేవాలయ టూర్ ప్యాకేజీ",
  },
  {
    id: "custom",
    labelEn: "Custom",
    labelTe: "కస్టమ్",
    icon: "✦",
    serviceEn: "Custom / Corporate Tour",
    serviceTe: "కస్టమ్ / కార్పొరేట్ టూర్",
  },
];

// ── Helper — today in YYYY-MM-DD format ──────────────────────────────────────

function todayISODate(): string {
  return new Date().toISOString().split("T")[0];
}

// ── WhatsApp message builders ────────────────────────────────────────────────

function buildTripMessage(
  tab: TripTab,
  fields: FormFields,
  locale: Locale
): string {
  const isEn = locale === "en";
  const label = isEn ? tab.serviceEn : tab.serviceTe;

  const lines: string[] = [
    "Hello Akshaya Cabs Tirupati!",
    "",
    `Service: ${label}`,
  ];

  if (fields.pickup)      lines.push(`Pickup: ${fields.pickup}`);
  if (fields.drop)        lines.push(`Drop: ${fields.drop}`);
  if (fields.date)        lines.push(`Travel Date: ${fields.date}`);
  if (fields.returnDate)  lines.push(`Return Date: ${fields.returnDate}`);
  if (fields.time)        lines.push(`Pickup Time: ${fields.time}`);
  if (fields.passengers)  lines.push(`Passengers: ${fields.passengers}`);
  if (fields.notes)       lines.push(`Additional Details: ${fields.notes}`);

  lines.push("", "Please confirm availability and fare. Thank you!");
  return lines.join("\n");
}

// ── Form state ───────────────────────────────────────────────────────────────

interface FormFields {
  pickup: string;
  drop: string;
  date: string;
  returnDate: string;
  time: string;
  passengers: string;
  notes: string;
}

const EMPTY: FormFields = {
  pickup: "",
  drop: "",
  date: "",
  returnDate: "",
  time: "",
  passengers: "",
  notes: "",
};

// ── Props ─────────────────────────────────────────────────────────────────────

interface Props {
  locale: Locale;
}

// ── Component ────────────────────────────────────────────────────────────────

export default function TripSearchPanel({ locale }: Props) {
  const isEn = locale === "en";
  const uid = useId();

  const [activeTab, setActiveTab] = useState<TripType>("one-way");
  const [fields, setFields] = useState<FormFields>(EMPTY);

  const currentTab = TABS.find((t) => t.id === activeTab)!;

  function handleField(key: keyof FormFields, value: string) {
    setFields((prev) => ({ ...prev, [key]: value }));
  }

  function handleTabChange(id: TripType) {
    setActiveTab(id);
    setFields((prev) => ({
      ...prev,
      returnDate: id === "round-trip" ? prev.returnDate : "",
      notes: "",
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = buildTripMessage(currentTab, fields, locale);
    const url = buildWhatsAppUrl(BUSINESS.phone.primaryWhatsApp, message);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  // Labels
  const L = {
    pickup: isEn ? "Pickup Location" : "పికప్ లొకేషన్",
    pickupPh: isEn ? "e.g. Tirupati Railway Station" : "ఉదా: తిరుపతి రైల్వే స్టేషన్",
    drop: isEn ? "Drop Location" : "డ్రాప్ లొకేషన్",
    dropPh: isEn ? "e.g. Tirumala Temple" : "ఉదా: తిరుమల ఆలయం",
    date: isEn ? "Travel Date" : "ప్రయాణ తేదీ",
    returnDate: isEn ? "Return Date" : "తిరిగి వచ్చే తేదీ",
    time: isEn ? "Pickup Time" : "పికప్ సమయం",
    passengers: isEn ? "Passengers" : "ప్రయాణికులు",
    notes: isEn ? "Additional Details (optional)" : "అదనపు వివరాలు (ఐచ్ఛికం)",
    notesPh: isEn
      ? "Vehicle preference, special requirements…"
      : "వాహన ప్రాధాన్యత, ప్రత్యేక అవసరాలు…",
    cta: isEn ? "Send WhatsApp Enquiry" : "వాట్సాప్ విచారణ పంపండి",
    hint: isEn
      ? "Opens WhatsApp — tap Send to complete your enquiry"
      : "WhatsApp తెరుచుకుంటుంది — విచారణ పూర్తి చేయడానికి Send నొక్కండి",
    localNote: isEn
      ? "8-hour / 80 km package · from ₹2,000"
      : "8 గంటలు / 80 కి.మీ ప్యాకేజ్ · ₹2,000 నుండి",
    airportNote: isEn
      ? "Tirupati Airport (TIR) & Renigunta Jn · both covered"
      : "తిరుపతి విమానాశ్రయం & రేణిగుంట జంక్షన్ · రెండూ కవర్ చేయబడ్డాయి",
  };

  const showDrop = activeTab !== "local";
  const showReturn = activeTab === "round-trip";
  const showNotes = activeTab === "temple" || activeTab === "custom";

  return (
    <div
      className="trip-panel"
      role="search"
      aria-label={isEn ? "Search for a cab" : "క్యాబ్ శోధించండి"}
    >
      {/* ── Tab bar ─────────────────────────────────────────────── */}
      <div
        className="trip-panel__tabs"
        role="tablist"
        aria-label={isEn ? "Trip type" : "ట్రిప్ రకం"}
      >
        {TABS.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            id={`${uid}-tab-${tab.id}`}
            aria-selected={activeTab === tab.id}
            aria-controls={`${uid}-panel`}
            className={`trip-panel__tab${activeTab === tab.id ? " trip-panel__tab--active" : ""}`}
            onClick={() => handleTabChange(tab.id)}
            type="button"
          >
            <span className="trip-panel__tab-icon" aria-hidden="true">
              {tab.icon}
            </span>
            <span className={locale === "te" ? "lang-te" : ""}>
              {isEn ? tab.labelEn : tab.labelTe}
            </span>
          </button>
        ))}
      </div>

      {/* ── Form panel ──────────────────────────────────────────── */}
      <form
        id={`${uid}-panel`}
        role="tabpanel"
        aria-labelledby={`${uid}-tab-${activeTab}`}
        className="trip-panel__form"
        onSubmit={handleSubmit}
        noValidate
      >
        {/* Contextual info note */}
        {activeTab === "local" && (
          <p className="trip-panel__note">{L.localNote}</p>
        )}
        {activeTab === "airport" && (
          <p className="trip-panel__note">{L.airportNote}</p>
        )}

        <div className="trip-panel__grid">
          {/* Pickup */}
          <div className="trip-panel__field">
            <label
              htmlFor={`${uid}-pickup`}
              className="trip-panel__label"
            >
              {L.pickup} *
            </label>
            <input
              id={`${uid}-pickup`}
              type="text"
              className="trip-panel__input"
              placeholder={L.pickupPh}
              value={fields.pickup}
              onChange={(e) => handleField("pickup", e.target.value)}
              required
              autoComplete="address-level2"
            />
          </div>

          {/* Drop (hidden for local) */}
          {showDrop && (
            <div className="trip-panel__field">
              <label
                htmlFor={`${uid}-drop`}
                className="trip-panel__label"
              >
                {L.drop} *
              </label>
              <input
                id={`${uid}-drop`}
                type="text"
                className="trip-panel__input"
                placeholder={L.dropPh}
                value={fields.drop}
                onChange={(e) => handleField("drop", e.target.value)}
                required={showDrop}
                autoComplete="off"
              />
            </div>
          )}

          {/* Date */}
          <div className="trip-panel__field">
            <label
              htmlFor={`${uid}-date`}
              className="trip-panel__label"
            >
              {L.date} *
            </label>
            <input
              id={`${uid}-date`}
              type="date"
              className="trip-panel__input"
              min={todayISODate()}
              value={fields.date}
              onChange={(e) => handleField("date", e.target.value)}
              required
            />
          </div>

          {/* Return date — round trip only */}
          {showReturn && (
            <div className="trip-panel__field">
              <label
                htmlFor={`${uid}-return`}
                className="trip-panel__label"
              >
                {L.returnDate}
              </label>
              <input
                id={`${uid}-return`}
                type="date"
                className="trip-panel__input"
                min={fields.date || todayISODate()}
                value={fields.returnDate}
                onChange={(e) => handleField("returnDate", e.target.value)}
              />
            </div>
          )}

          {/* Pickup time */}
          <div className="trip-panel__field">
            <label
              htmlFor={`${uid}-time`}
              className="trip-panel__label"
            >
              {L.time}
            </label>
            <input
              id={`${uid}-time`}
              type="time"
              className="trip-panel__input"
              value={fields.time}
              onChange={(e) => handleField("time", e.target.value)}
            />
          </div>

          {/* Passengers */}
          <div className="trip-panel__field">
            <label
              htmlFor={`${uid}-pax`}
              className="trip-panel__label"
            >
              {L.passengers}
            </label>
            <input
              id={`${uid}-pax`}
              type="number"
              className="trip-panel__input"
              min="1"
              max="17"
              placeholder={isEn ? "e.g. 4" : "ఉదా: 4"}
              value={fields.passengers}
              onChange={(e) => handleField("passengers", e.target.value)}
            />
          </div>

          {/* Notes — temple / custom */}
          {showNotes && (
            <div className="trip-panel__field trip-panel__field--full">
              <label
                htmlFor={`${uid}-notes`}
                className="trip-panel__label"
              >
                {L.notes}
              </label>
              <textarea
                id={`${uid}-notes`}
                className="trip-panel__input trip-panel__textarea"
                placeholder={L.notesPh}
                rows={2}
                value={fields.notes}
                onChange={(e) => handleField("notes", e.target.value)}
              />
            </div>
          )}
        </div>

        {/* Submit */}
        <div className="trip-panel__actions">
          <button type="submit" className="trip-panel__cta">
            {/* WhatsApp icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className={locale === "te" ? "lang-te" : ""}>{L.cta}</span>
          </button>

          <p
            className={`trip-panel__hint${locale === "te" ? " lang-te" : ""}`}
          >
            {L.hint}
          </p>
        </div>
      </form>
    </div>
  );
}
