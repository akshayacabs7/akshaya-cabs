// Akshaya Cabs — Guided Trip Planner Form (TASK-18)
// /src/components/ui/TripPlannerForm.tsx
// "use client" — multi-step, bilingual EN+TE, date validation, WA-honest, accessible.
//
// Steps:
//  1  Trip Type selection (one-way / roundtrip / local / airport / temple / custom)
//  2  Trip Details (date, return date if roundtrip, pickup, drop, time, passengers)
//  3  Vehicle preference
//  4  Your details (name, phone)
//  5  Review & Send (summary → opens WhatsApp; honest confirmation wording)
//
// RULES (from TASK-18 + master plan):
//  - NO false guaranteed booking or pricing.
//  - Past dates rejected with accessible error.
//  - Return date must be >= travel date.
//  - Passengers > vehicle capacity shows advisory but does NOT auto-override.
//  - "Estimated" vs "Quote" wording used correctly.
//  - WhatsApp opens with pre-filled message; user must tap Send.
//  - Success state only shown AFTER window.open (honest wording).
//  - Telugu error messages required.
//  - No .svtt-* class names.

"use client";

import { useState, FormEvent } from "react";
import { VEHICLES } from "@/data/vehicles";
import { PACKAGES } from "@/data/packages";
import { tripPlannerWhatsAppUrl, openWhatsApp } from "@/lib/whatsapp";

// ── Types ─────────────────────────────────────────────────────────

type TripType = "one-way" | "roundtrip" | "local" | "airport" | "temple" | "custom";
type Step = 1 | 2 | 3 | 4 | 5;
type FormState = "idle" | "open" | "done";

interface TripForm {
  tripType: TripType | "";
  // Step 2
  travelDate: string;
  returnDate: string;
  travelTime: string;
  pickupLocation: string;
  dropLocation: string;
  passengers: string;
  tourPackage: string; // for temple trips
  // Step 3
  vehicle: string;
  // Step 4
  name: string;
  phone: string;
  notes: string;
}

const INITIAL: TripForm = {
  tripType: "",
  travelDate: "",
  returnDate: "",
  travelTime: "",
  pickupLocation: "",
  dropLocation: "",
  passengers: "",
  tourPackage: "",
  vehicle: "",
  name: "",
  phone: "",
  notes: "",
};

// ── I18n ──────────────────────────────────────────────────────────

type Locale = "en" | "te";

const I18N: Record<string, Record<Locale, string>> = {
  stepLabel:        { en: "Step", te: "దశ" },
  of:               { en: "of", te: "యొక్క" },
  next:             { en: "Next →", te: "తదుపరి →" },
  back:             { en: "← Back", te: "← వెనుకకు" },
  sendWa:           { en: "Send on WhatsApp", te: "WhatsApp లో పంపండి" },
  tripTypeTitle:    { en: "What kind of trip?", te: "మీ ప్రయాణం ఏ రకం?" },
  detailsTitle:     { en: "Trip Details", te: "ప్రయాణ వివరాలు" },
  vehicleTitle:     { en: "Vehicle Preference", te: "వాహన ప్రాధాన్యత" },
  yourDetails:      { en: "Your Contact Details", te: "మీ సంప్రదింపు వివరాలు" },
  reviewTitle:      { en: "Review Your Request", te: "మీ అభ్యర్థన సమీక్షించండి" },
  travelDate:       { en: "Travel Date *", te: "ప్రయాణ తేదీ *" },
  returnDate:       { en: "Return Date *", te: "తిరిగి రాక తేదీ *" },
  travelTime:       { en: "Preferred Time", te: "ఇష్టమైన సమయం" },
  pickup:           { en: "Pickup Location *", te: "పికప్ స్థానం *" },
  drop:             { en: "Drop Location *", te: "డ్రాప్ స్థానం *" },
  pax:              { en: "Number of Passengers *", te: "ప్రయాణికుల సంఖ్య *" },
  package:          { en: "Temple Tour Package (optional)", te: "ఆలయ టూర్ ప్యాకేజీ (ఐచ్ఛికం)" },
  noVehiclePref:    { en: "No preference — you suggest", te: "ప్రాధాన్యత లేదు — మీరు సూచించండి" },
  name:             { en: "Full Name *", te: "పూర్తి పేరు *" },
  phone:            { en: "Phone / WhatsApp Number *", te: "ఫోన్ / WhatsApp నంబర్ *" },
  notes:            { en: "Additional Notes (optional)", te: "అదనపు గమనికలు (ఐచ్ఛికం)" },
  notesPlaceholder: { en: "Any special requirements, multiple stops, accessibility needs…", te: "ఏవైనా ప్రత్యేక అవసరాలు, బహుళ ఆగుళ్లు, ప్రాప్యత అవసరాలు…" },
  errRequired:      { en: "This field is required.", te: "ఈ ఫీల్డ్ అవసరం." },
  errPastDate:      { en: "Travel date cannot be in the past.", te: "ప్రయాణ తేదీ గతంలో ఉండకూడదు." },
  errReturnDate:    { en: "Return date must be on or after the travel date.", te: "తిరిగి రాక తేదీ ప్రయాణ తేదీ తర్వాత లేదా అదే రోజు ఉండాలి." },
  errPhone:         { en: "Please enter a valid Indian mobile number.", te: "దయచేసి చెల్లుబాటు అయ్యే భారతీయ మొబైల్ నంబర్ నమోదు చేయండి." },
  errName:          { en: "Please enter your name (at least 2 characters).", te: "దయచేసి మీ పేరు నమోదు చేయండి (కనీసం 2 అక్షరాలు)." },
  largePaxNote:     { en: "For groups over 7, a Tempo Traveller (12+1 or 17+1) is recommended. Our team will suggest the best option.", te: "7 కంటే ఎక్కువ మంది గ్రూప్‌లకు, టెంపో ట్రావెలర్ (12+1 లేదా 17+1) సిఫారసు చేయబడింది. మా బృందం అత్యుత్తమ ఎంపిక సూచిస్తుంది." },
  successTitle:     { en: "WhatsApp Opened!", te: "WhatsApp తెరవబడింది!" },
  successBody:      { en: "Your trip request has been pre-filled in WhatsApp. Please tap Send to complete your enquiry. Our team will respond shortly.", te: "మీ ప్రయాణ అభ్యర్థన WhatsApp లో ముందే నింపబడింది. మీ విచారణ పూర్తి చేయడానికి Send నొక్కండి. మా బృందం త్వరగా స్పందిస్తుంది." },
  sendAnother:      { en: "Start New Request", te: "కొత్త అభ్యర్థన ప్రారంభించండి" },
  waDisclaimer:     { en: "Tapping 'Send on WhatsApp' will open WhatsApp with your details pre-filled. You must tap Send in WhatsApp to complete your enquiry. No booking is confirmed until you receive a reply from our team.", te: "WhatsApp లో పంపండి' నొక్కడం వలన మీ వివరాలు ముందే నింపబడిన WhatsApp తెరవబడుతుంది. మీ విచారణ పూర్తి చేయడానికి WhatsApp లో Send నొక్కాలి. మా బృందం నుండి సమాధానం వచ్చే వరకు బుకింగ్ నిర్ధారించబడదు." },
  tripTypeSummary:  { en: "Trip Type", te: "ప్రయాణ రకం" },
  estimatedNote:    { en: "Note: Our team will confirm the exact fare after reviewing your request. Pricing may vary for long-distance routes, state border permits, and multi-day itineraries.", te: "గమనిక: మీ అభ్యర్థన సమీక్షించిన తర్వాత మా బృందం ఖచ్చితమైన ఫేర్ నిర్ధారిస్తుంది. దీర్ఘ-దూర మార్గాలు, రాష్ట్ర సరిహద్దు పర్మిట్లు మరియు బహు-రోజు పర్యటనలకు ధరలు మారవచ్చు." },
};

function t(key: string, locale: Locale): string {
  return I18N[key]?.[locale] ?? key;
}

// ── Trip type options ─────────────────────────────────────────────

interface TripTypeOption {
  id: TripType;
  emoji: string;
  label: Record<Locale, string>;
  desc: Record<Locale, string>;
  pickupHint: Record<Locale, string>;
  dropHint: Record<Locale, string>;
  showReturn: boolean;
  showPackage: boolean;
  isOutstation: boolean;
}

const TRIP_TYPES: TripTypeOption[] = [
  {
    id: "one-way",
    emoji: "→",
    label: { en: "One-Way Outstation", te: "వన్-వే అవుట్‌స్టేషన్" },
    desc:  { en: "Point-to-point intercity journey", te: "అంతర్నగర పాయింట్-టు-పాయింట్ ప్రయాణం" },
    pickupHint: { en: "e.g. Tirupati Railway Station", te: "ఉదా. తిరుపతి రైల్వే స్టేషన్" },
    dropHint:   { en: "e.g. Chennai Central", te: "ఉదా. చెన్నై సెంట్రల్" },
    showReturn: false, showPackage: false, isOutstation: true,
  },
  {
    id: "roundtrip",
    emoji: "⇌",
    label: { en: "Roundtrip Outstation", te: "రౌండ్‌ట్రిప్ అవుట్‌స్టేషన్" },
    desc:  { en: "Go and return — 300 km/day included", te: "వెళ్ళి రండి — 300 కి.మీ./రోజు చేర్చబడింది" },
    pickupHint: { en: "e.g. Tirupati City", te: "ఉదా. తిరుపతి నగరం" },
    dropHint:   { en: "e.g. Bangalore", te: "ఉదా. బెంగళూరు" },
    showReturn: true, showPackage: false, isOutstation: true,
  },
  {
    id: "local",
    emoji: "📍",
    label: { en: "Local Cab (Tirupati City)", te: "స్థానిక క్యాబ్ (తిరుపతి నగరం)" },
    desc:  { en: "Within Tirupati city limits", te: "తిరుపతి నగర పరిధిలో" },
    pickupHint: { en: "e.g. Tirupati Bus Stand", te: "ఉదా. తిరుపతి బస్ స్టాండ్" },
    dropHint:   { en: "e.g. Kapila Theertham", te: "ఉదా. కపిల తీర్థం" },
    showReturn: false, showPackage: false, isOutstation: false,
  },
  {
    id: "airport",
    emoji: "✈️",
    label: { en: "Airport Transfer", te: "విమానాశ్రయ బదిలీ" },
    desc:  { en: "Tirupati Airport pickup or drop", te: "తిరుపతి విమానాశ్రయం పికప్ లేదా డ్రాప్" },
    pickupHint: { en: "e.g. Your hotel in Tirupati", te: "ఉదా. తిరుపతిలో మీ హోటల్" },
    dropHint:   { en: "Tirupati Airport (TIR)", te: "తిరుపతి విమానాశ్రయం (TIR)" },
    showReturn: false, showPackage: false, isOutstation: false,
  },
  {
    id: "temple",
    emoji: "🛕",
    label: { en: "Temple Tour / Tirumala", te: "ఆలయ టూర్ / తిరుమల" },
    desc:  { en: "Darshan packages and local temple circuits", te: "దర్శన్ ప్యాకేజీలు మరియు స్థానిక ఆలయ సర్క్యూట్లు" },
    pickupHint: { en: "e.g. Tirupati City / Hotel", te: "ఉదా. తిరుపతి నగరం / హోటల్" },
    dropHint:   { en: "Tirumala / Local Temples", te: "తిరుమల / స్థానిక ఆలయాలు" },
    showReturn: false, showPackage: true, isOutstation: false,
  },
  {
    id: "custom",
    emoji: "🗺️",
    label: { en: "Custom / Special Trip", te: "కస్టమ్ / ప్రత్యేక ప్రయాణం" },
    desc:  { en: "Multi-stop, group travel, South India tour", te: "బహుళ-ఆగుళ్లు, గ్రూప్ ప్రయాణం, దక్షిణ భారత టూర్" },
    pickupHint: { en: "Starting point", te: "ప్రారంభ స్థానం" },
    dropHint:   { en: "Final destination", te: "చివరి గమ్యం" },
    showReturn: false, showPackage: false, isOutstation: false,
  },
];

const TIME_SLOTS_EN = [
  "Very Early Morning (2 AM – 6 AM)",
  "Morning (6 AM – 10 AM)",
  "Late Morning (10 AM – 12 PM)",
  "Afternoon (12 PM – 4 PM)",
  "Evening (4 PM – 8 PM)",
  "Night (8 PM – 12 AM)",
  "Late Night (12 AM – 2 AM)",
  "Flexible",
];

const TIME_SLOTS_TE = [
  "చాలా తెల్లవారుజామున (2 AM – 6 AM)",
  "ఉదయం (6 AM – 10 AM)",
  "మధ్య ఉదయం (10 AM – 12 PM)",
  "మధ్యాహ్నం (12 PM – 4 PM)",
  "సాయంత్రం (4 PM – 8 PM)",
  "రాత్రి (8 PM – 12 AM)",
  "అర్ధరాత్రి (12 AM – 2 AM)",
  "సరళంగా",
];

// ── Validators ───────────────────────────────────────────────────

function isPhoneValid(phone: string): boolean {
  // Indian mobile: 10 digits, optionally starting with +91, 0, or 91
  const cleaned = phone.replace(/[\s\-().]/g, "");
  return /^(\+91|91|0)?[6-9]\d{9}$/.test(cleaned);
}

function todayStr(): string {
  return new Date().toISOString().split("T")[0];
}

// ── Main component ────────────────────────────────────────────────

interface Props { locale?: Locale; }

export default function TripPlannerForm({ locale = "en" }: Props) {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<TripForm>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof TripForm | "general", string>>>({});
  const [formState, setFormState] = useState<FormState>("idle");
  const [fallbackUrl, setFallbackUrl] = useState<string | null>(null);

  const tripTypeInfo = TRIP_TYPES.find((tt) => tt.id === form.tripType);
  const timeSlots = locale === "te" ? TIME_SLOTS_TE : TIME_SLOTS_EN;

  function set(field: keyof TripForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  // ── Step validators ──────────────────────────────────────────────

  function validateStep1(): boolean {
    if (!form.tripType) {
      setErrors({ tripType: t("errRequired", locale) });
      return false;
    }
    return true;
  }

  function validateStep2(): boolean {
    const errs: typeof errors = {};
    const today = todayStr();

    if (!form.travelDate) errs.travelDate = t("errRequired", locale);
    else if (form.travelDate < today) errs.travelDate = t("errPastDate", locale);

    if (tripTypeInfo?.showReturn) {
      if (!form.returnDate) errs.returnDate = t("errRequired", locale);
      else if (form.returnDate < form.travelDate) errs.returnDate = t("errReturnDate", locale);
    }

    if (!form.pickupLocation.trim()) errs.pickupLocation = t("errRequired", locale);
    if (!form.dropLocation.trim())   errs.dropLocation   = t("errRequired", locale);
    if (!form.passengers || parseInt(form.passengers) < 1) errs.passengers = t("errRequired", locale);

    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function validateStep4(): boolean {
    const errs: typeof errors = {};
    if (!form.name.trim() || form.name.trim().length < 2) errs.name = t("errName", locale);
    if (!form.phone.trim() || !isPhoneValid(form.phone))  errs.phone = t("errPhone", locale);
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  // ── Navigation ───────────────────────────────────────────────────

  function goNext() {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    if (step === 4 && !validateStep4()) return;
    setStep((s) => (s < 5 ? (s + 1) as Step : s));
  }

  function goBack() {
    setErrors({});
    setStep((s) => (s > 1 ? (s - 1) as Step : s));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validateStep4()) return;

    const tripLabel = tripTypeInfo
      ? (locale === "te" ? tripTypeInfo.label.te : tripTypeInfo.label.en)
      : form.tripType;

    const waUrl = tripPlannerWhatsAppUrl({
      tripType:        tripLabel,
      date:            form.travelDate,
      returnDate:      form.returnDate || undefined,
      time:            form.travelTime || undefined,
      pickupLocation:  form.pickupLocation,
      dropLocation:    form.dropLocation,
      passengers:      form.passengers ? parseInt(form.passengers) : undefined,
      packageCode:     form.tourPackage || undefined,
      vehicleName:     form.vehicle || undefined,
      callerName:      form.name,
      callerPhone:     form.phone,
      customMessage:   form.notes.trim() || undefined,
    });

    // openWhatsApp handles popup-blocked gracefully (returns false if blocked)
    setFormState("open");
    const opened = openWhatsApp(waUrl);
    if (!opened) setFallbackUrl(waUrl);
  }


  function reset() {
    setForm(INITIAL);
    setErrors({});
    setStep(1);
    setFormState("idle");
    setFallbackUrl(null);
  }


  // ── Success state ────────────────────────────────────────────────


  if (formState === "open") {
    return (
      <div className="akc-trip-success" role="status" aria-live="polite">
        <div className="akc-trip-success__icon" aria-hidden="true">💬</div>
        <h3 className={`akc-trip-success__title${locale === "te" ? " lang-te" : ""}`}>
          {t("successTitle", locale)}
        </h3>
        <p className={`akc-trip-success__body${locale === "te" ? " lang-te" : ""}`}>
          {t("successBody", locale)}
        </p>
        {/* Popup-blocked fallback — shown only when window.open returned null */}
        {fallbackUrl && (
          <div className="akc-trip-success__fallback" role="alert">
            <p className={locale === "te" ? "lang-te" : ""}>
              {locale === "te"
                ? "WhatsApp తెరవబడలేదా? దిగువ లింక్‌ను నొక్కండి:"
                : "WhatsApp didn't open? Tap the link below:"}
            </p>
            <a
              href={fallbackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="akc-btn akc-btn--wa"
            >
              {locale === "te" ? "WhatsApp లో తెరవండి" : "Open in WhatsApp"}
            </a>
          </div>
        )}
        <button
          type="button"
          className="akc-btn akc-btn--secondary"
          onClick={reset}
        >
          {t("sendAnother", locale)}
        </button>
      </div>
    );
  }


  // ── Progress bar ────────────────────────────────────────────────

  const TOTAL_STEPS = 5;
  const progressPct = Math.round(((step - 1) / (TOTAL_STEPS - 1)) * 100);


  return (
    <div className="akc-trip-planner">
      {/* Progress header */}
      <div className="akc-trip-progress" aria-label={`${t("stepLabel", locale)} ${step} ${t("of", locale)} ${TOTAL_STEPS}`}>
        <div className="akc-trip-progress__bar">
          <div
            className="akc-trip-progress__fill"
            style={{ width: `${progressPct}%` }}
            aria-hidden="true"
          />
        </div>
        <p className="akc-trip-progress__label" aria-live="polite">
          {t("stepLabel", locale)} {step} / {TOTAL_STEPS}
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        aria-label={locale === "te" ? "ప్రయాణ అభ్యర్థన ఫారం" : "Trip request form"}
      >

        {/* ══ STEP 1: Trip Type ══════════════════════════════════════ */}
        {step === 1 && (
          <div className="akc-trip-step" role="group" aria-labelledby="step1-heading">
            <h2 id="step1-heading" className={`akc-trip-step__title${locale === "te" ? " lang-te" : ""}`}>
              {t("tripTypeTitle", locale)}
            </h2>
            <div className="akc-trip-type-grid" role="radiogroup" aria-label={t("tripTypeTitle", locale)}>
              {TRIP_TYPES.map((tt) => (
                <button
                  key={tt.id}
                  type="button"
                  role="radio"
                  aria-checked={form.tripType === tt.id}
                  className={`akc-trip-type-btn${form.tripType === tt.id ? " akc-trip-type-btn--active" : ""}`}
                  onClick={() => { set("tripType", tt.id); setErrors({}); }}
                >
                  <span className="akc-trip-type-btn__emoji" aria-hidden="true">{tt.emoji}</span>
                  <span className={`akc-trip-type-btn__label${locale === "te" ? " lang-te" : ""}`}>
                    {locale === "te" ? tt.label.te : tt.label.en}
                  </span>
                  <span className={`akc-trip-type-btn__desc${locale === "te" ? " lang-te" : ""}`}>
                    {locale === "te" ? tt.desc.te : tt.desc.en}
                  </span>
                </button>
              ))}
            </div>
            {errors.tripType && (
              <p className="akc-trip-error" role="alert" aria-live="assertive">⚠ {errors.tripType}</p>
            )}
          </div>
        )}

        {/* ══ STEP 2: Trip Details ══════════════════════════════════ */}
        {step === 2 && (
          <div className="akc-trip-step" role="group" aria-labelledby="step2-heading">
            <h2 id="step2-heading" className={`akc-trip-step__title${locale === "te" ? " lang-te" : ""}`}>
              {t("detailsTitle", locale)}
            </h2>

            {/* Date row */}
            <div className="akc-trip-form-row akc-trip-form-row--2">
              <div className="akc-trip-field">
                <label className="akc-trip-label" htmlFor="tp-date">
                  <span className={locale === "te" ? "lang-te" : ""}>{t("travelDate", locale)}</span>
                </label>
                <input
                  id="tp-date"
                  type="date"
                  className="akc-trip-input"
                  value={form.travelDate}
                  min={todayStr()}
                  onChange={(e) => set("travelDate", e.target.value)}
                  required
                  aria-required="true"
                  aria-describedby={errors.travelDate ? "tp-date-err" : undefined}
                />
                {errors.travelDate && (
                  <p id="tp-date-err" className="akc-trip-error" role="alert">{errors.travelDate}</p>
                )}
              </div>

              {tripTypeInfo?.showReturn && (
                <div className="akc-trip-field">
                  <label className="akc-trip-label" htmlFor="tp-return">
                    <span className={locale === "te" ? "lang-te" : ""}>{t("returnDate", locale)}</span>
                  </label>
                  <input
                    id="tp-return"
                    type="date"
                    className="akc-trip-input"
                    value={form.returnDate}
                    min={form.travelDate || todayStr()}
                    onChange={(e) => set("returnDate", e.target.value)}
                    required={tripTypeInfo.showReturn}
                    aria-required={tripTypeInfo.showReturn}
                    aria-describedby={errors.returnDate ? "tp-return-err" : undefined}
                  />
                  {errors.returnDate && (
                    <p id="tp-return-err" className="akc-trip-error" role="alert">{errors.returnDate}</p>
                  )}
                </div>
              )}
            </div>

            {/* Pickup + Drop */}
            <div className="akc-trip-form-row akc-trip-form-row--2">
              <div className="akc-trip-field">
                <label className="akc-trip-label" htmlFor="tp-pickup">
                  <span className={locale === "te" ? "lang-te" : ""}>{t("pickup", locale)}</span>
                </label>
                <input
                  id="tp-pickup"
                  type="text"
                  className="akc-trip-input"
                  placeholder={locale === "te" ? tripTypeInfo?.pickupHint.te ?? "" : tripTypeInfo?.pickupHint.en ?? ""}
                  value={form.pickupLocation}
                  onChange={(e) => set("pickupLocation", e.target.value)}
                  required
                  aria-required="true"
                  aria-describedby={errors.pickupLocation ? "tp-pickup-err" : undefined}
                />
                {errors.pickupLocation && (
                  <p id="tp-pickup-err" className="akc-trip-error" role="alert">{errors.pickupLocation}</p>
                )}
              </div>

              <div className="akc-trip-field">
                <label className="akc-trip-label" htmlFor="tp-drop">
                  <span className={locale === "te" ? "lang-te" : ""}>{t("drop", locale)}</span>
                </label>
                <input
                  id="tp-drop"
                  type="text"
                  className="akc-trip-input"
                  placeholder={locale === "te" ? tripTypeInfo?.dropHint.te ?? "" : tripTypeInfo?.dropHint.en ?? ""}
                  value={form.dropLocation}
                  onChange={(e) => set("dropLocation", e.target.value)}
                  required
                  aria-required="true"
                  aria-describedby={errors.dropLocation ? "tp-drop-err" : undefined}
                />
                {errors.dropLocation && (
                  <p id="tp-drop-err" className="akc-trip-error" role="alert">{errors.dropLocation}</p>
                )}
              </div>
            </div>

            {/* Passengers + Time */}
            <div className="akc-trip-form-row akc-trip-form-row--2">
              <div className="akc-trip-field">
                <label className="akc-trip-label" htmlFor="tp-pax">
                  <span className={locale === "te" ? "lang-te" : ""}>{t("pax", locale)}</span>
                </label>
                <input
                  id="tp-pax"
                  type="number"
                  className="akc-trip-input"
                  placeholder="1"
                  value={form.passengers}
                  min={1}
                  max={50}
                  onChange={(e) => set("passengers", e.target.value)}
                  required
                  aria-required="true"
                  aria-describedby={errors.passengers ? "tp-pax-err" : undefined}
                />
                {errors.passengers && (
                  <p id="tp-pax-err" className="akc-trip-error" role="alert">{errors.passengers}</p>
                )}
                {form.passengers && parseInt(form.passengers) > 7 && (
                  <p className="akc-trip-advisory" aria-live="polite">
                    ℹ️ <span className={locale === "te" ? "lang-te" : ""}>{t("largePaxNote", locale)}</span>
                  </p>
                )}
              </div>

              <div className="akc-trip-field">
                <label className="akc-trip-label" htmlFor="tp-time">
                  <span className={locale === "te" ? "lang-te" : ""}>{t("travelTime", locale)}</span>
                </label>
                <select
                  id="tp-time"
                  className="akc-trip-select"
                  value={form.travelTime}
                  onChange={(e) => set("travelTime", e.target.value)}
                >
                  <option value="">{locale === "te" ? "సమయ స్లాట్ ఎంచుకోండి" : "Select time slot"}</option>
                  {timeSlots.map((ts) => (
                    <option key={ts} value={ts}>{ts}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Package selector for temple trips */}
            {tripTypeInfo?.showPackage && (
              <div className="akc-trip-field">
                <label className="akc-trip-label" htmlFor="tp-package">
                  <span className={locale === "te" ? "lang-te" : ""}>{t("package", locale)}</span>
                </label>
                <select
                  id="tp-package"
                  className="akc-trip-select"
                  value={form.tourPackage}
                  onChange={(e) => set("tourPackage", e.target.value)}
                >
                  <option value="">{locale === "te" ? "నిర్దిష్ట ప్యాకేజీ లేదు" : "No specific package"}</option>
                  {PACKAGES.map((p) => (
                    <option key={p.id} value={`${p.code} — ${p.title}`}>
                      {p.code} — {p.title}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        )}

        {/* ══ STEP 3: Vehicle ══════════════════════════════════════ */}
        {step === 3 && (
          <div className="akc-trip-step" role="group" aria-labelledby="step3-heading">
            <h2 id="step3-heading" className={`akc-trip-step__title${locale === "te" ? " lang-te" : ""}`}>
              {t("vehicleTitle", locale)}
            </h2>
            <p className="akc-trip-step__sub">
              {locale === "te"
                ? "మీకు ఇష్టమైన వాహనాన్ని ఎంచుకోండి. ప్రాధాన్యత లేకపోతే, మా బృందం మీ ప్రయాణికుల సంఖ్య ఆధారంగా సూచిస్తుంది."
                : "Select a vehicle preference. If no preference, our team will suggest the best fit based on your passenger count."}
            </p>

            <div className="akc-trip-vehicle-grid" role="radiogroup" aria-label={t("vehicleTitle", locale)}>
              {/* No preference option */}
              <button
                type="button"
                role="radio"
                aria-checked={form.vehicle === ""}
                className={`akc-trip-veh-btn${form.vehicle === "" ? " akc-trip-veh-btn--active" : ""}`}
                onClick={() => set("vehicle", "")}
              >
                <span className="akc-trip-veh-btn__emoji" aria-hidden="true">🤝</span>
                <span className={`akc-trip-veh-btn__name${locale === "te" ? " lang-te" : ""}`}>
                  {t("noVehiclePref", locale)}
                </span>
              </button>

              {VEHICLES.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  role="radio"
                  aria-checked={form.vehicle === v.name}
                  className={`akc-trip-veh-btn${form.vehicle === v.name ? " akc-trip-veh-btn--active" : ""}`}
                  onClick={() => set("vehicle", v.name)}
                >
                  <span className="akc-trip-veh-btn__emoji" aria-hidden="true">🚗</span>
                  <span className="akc-trip-veh-btn__name">{v.name}</span>
                  <span className="akc-trip-veh-btn__cap">
                    {v.capacity}{locale === "te" ? " సీటర్" : " Seater"}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ══ STEP 4: Contact ══════════════════════════════════════ */}
        {step === 4 && (
          <div className="akc-trip-step" role="group" aria-labelledby="step4-heading">
            <h2 id="step4-heading" className={`akc-trip-step__title${locale === "te" ? " lang-te" : ""}`}>
              {t("yourDetails", locale)}
            </h2>

            <div className="akc-trip-form-row akc-trip-form-row--2">
              <div className="akc-trip-field">
                <label className="akc-trip-label" htmlFor="tp-name">
                  <span className={locale === "te" ? "lang-te" : ""}>{t("name", locale)}</span>
                </label>
                <input
                  id="tp-name"
                  type="text"
                  className="akc-trip-input"
                  placeholder={locale === "te" ? "మీ పూర్తి పేరు" : "Your full name"}
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  required
                  aria-required="true"
                  autoComplete="name"
                  aria-describedby={errors.name ? "tp-name-err" : undefined}
                />
                {errors.name && (
                  <p id="tp-name-err" className="akc-trip-error" role="alert">{errors.name}</p>
                )}
              </div>
              <div className="akc-trip-field">
                <label className="akc-trip-label" htmlFor="tp-phone">
                  <span className={locale === "te" ? "lang-te" : ""}>{t("phone", locale)}</span>
                </label>
                <input
                  id="tp-phone"
                  type="tel"
                  className="akc-trip-input"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  required
                  aria-required="true"
                  autoComplete="tel"
                  inputMode="tel"
                  aria-describedby={errors.phone ? "tp-phone-err" : undefined}
                />
                {errors.phone && (
                  <p id="tp-phone-err" className="akc-trip-error" role="alert">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="akc-trip-field">
              <label className="akc-trip-label" htmlFor="tp-notes">
                <span className={locale === "te" ? "lang-te" : ""}>{t("notes", locale)}</span>
              </label>
              <textarea
                id="tp-notes"
                className="akc-trip-textarea"
                placeholder={t("notesPlaceholder", locale)}
                value={form.notes}
                onChange={(e) => set("notes", e.target.value)}
                maxLength={800}
                rows={3}
              />
            </div>
          </div>
        )}

        {/* ══ STEP 5: Review ════════════════════════════════════════ */}
        {step === 5 && (
          <div className="akc-trip-step" role="group" aria-labelledby="step5-heading">
            <h2 id="step5-heading" className={`akc-trip-step__title${locale === "te" ? " lang-te" : ""}`}>
              {t("reviewTitle", locale)}
            </h2>

            <dl className="akc-trip-summary">
              {[
                { label: t("tripTypeSummary", locale), val: tripTypeInfo ? (locale === "te" ? tripTypeInfo.label.te : tripTypeInfo.label.en) : form.tripType },
                { label: locale === "te" ? "ప్రయాణ తేదీ" : "Travel Date", val: form.travelDate },
                form.returnDate ? { label: locale === "te" ? "తిరిగి రాక తేదీ" : "Return Date", val: form.returnDate } : null,
                form.travelTime ? { label: locale === "te" ? "సమయం" : "Time", val: form.travelTime } : null,
                { label: locale === "te" ? "పికప్" : "Pickup", val: form.pickupLocation },
                { label: locale === "te" ? "డ్రాప్" : "Drop", val: form.dropLocation },
                { label: locale === "te" ? "ప్రయాణికులు" : "Passengers", val: form.passengers },
                form.tourPackage ? { label: locale === "te" ? "ప్యాకేజీ" : "Package", val: form.tourPackage } : null,
                { label: locale === "te" ? "వాహనం" : "Vehicle", val: form.vehicle || (locale === "te" ? "ప్రాధాన్యత లేదు" : "No preference") },
                { label: locale === "te" ? "పేరు" : "Name", val: form.name },
                { label: locale === "te" ? "ఫోన్" : "Phone", val: form.phone },
                form.notes ? { label: locale === "te" ? "గమనికలు" : "Notes", val: form.notes } : null,
              ].filter(Boolean).map((row, i) => (
                <div key={i} className="akc-trip-summary__row">
                  <dt className={`akc-trip-summary__key${locale === "te" ? " lang-te" : ""}`}>{row!.label}</dt>
                  <dd className={`akc-trip-summary__val${locale === "te" ? " lang-te" : ""}`}>{row!.val}</dd>
                </div>
              ))}
            </dl>

            {/* Estimated pricing disclaimer */}
            <div className="akc-trip-estimate-note" role="note">
              ℹ️ <span className={locale === "te" ? "lang-te" : ""}>{t("estimatedNote", locale)}</span>
            </div>

            {/* WA disclaimer — honest wording */}
            <div className="akc-trip-wa-disclaimer" role="note">
              💬 <span className={locale === "te" ? "lang-te" : ""}>{t("waDisclaimer", locale)}</span>
            </div>
          </div>
        )}

        {/* ── Navigation buttons ── */}
        <div className="akc-trip-nav">
          {step > 1 && (
            <button
              type="button"
              className="akc-btn akc-btn--ghost"
              onClick={goBack}
            >
              {t("back", locale)}
            </button>
          )}
          <div style={{ flex: 1 }} />
          {step < 5 && (
            <button
              type="button"
              className="akc-btn akc-btn--primary"
              onClick={goNext}
            >
              {t("next", locale)}
            </button>
          )}
          {step === 5 && (
            <button
              type="submit"
              className="akc-btn akc-btn--wa akc-btn--lg"
              aria-label={locale === "te" ? "WhatsApp లో అభ్యర్థన పంపండి" : "Submit trip request via WhatsApp"}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              {t("sendWa", locale)}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
