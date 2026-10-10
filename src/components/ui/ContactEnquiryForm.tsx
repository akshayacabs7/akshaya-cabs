// Akshaya Cabs — Contact Enquiry Form (TASK-19 + TASK-20)
// /src/components/ui/ContactEnquiryForm.tsx
//
// Dual-channel submission:
//   1. Netlify Forms AJAX POST (lead stored in Netlify dashboard)
//   2. WhatsApp pre-filled link (customer taps Send)
//
// WA always opens; Netlify submission state is shown separately.
// On localhost, Netlify submission will fail (expected) — honest message shown.
//
// RULES:
//   - No SVTT / Sri Vinayaka identity.
//   - Never claim success until HTTP 200 from Netlify.
//   - WA link opened independently of Netlify success.
//   - Honeypot field "bot-field" always included, always empty.
//   - Consent checkbox required before submit.
//   - No API keys or analytics tracking in submission body.

"use client";

import React, { useState, FormEvent, useId } from "react";
import { VEHICLES } from "@/data/vehicles";
import { contactEnquiryWhatsAppUrl, openWhatsApp } from "@/lib/whatsapp";
import { submitToNetlify } from "@/lib/netlify-form";

type SubmitPhase = "idle" | "submitting" | "wa-sent" | "netlify-ok" | "netlify-err" | "offline";

interface FormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  travelDate: string;
  pickupLocation: string;
  dropLocation: string;
  passengers: string;
  vehicle: string;
  message: string;
  consent: boolean;
}

interface Errors {
  name?: string;
  phone?: string;
  serviceType?: string;
  travelDate?: string;
  pickupLocation?: string;
  dropLocation?: string;
  consent?: string;
}

const INITIAL: FormData = {
  name: "",
  phone: "",
  email: "",
  serviceType: "",
  travelDate: "",
  pickupLocation: "",
  dropLocation: "",
  passengers: "",
  vehicle: "",
  message: "",
  consent: false,
};

const SERVICE_OPTIONS = [
  "Tirumala Taxi",
  "Temple Tour Package",
  "Airport Pickup / Drop",
  "Railway Station Transfer",
  "Local Cab Service",
  "Outstation Cab",
  "Tempo Traveller Rental",
  "Custom / South India Tour",
  "Other",
];

function todayStr(): string {
  return new Date().toISOString().split("T")[0];
}

function isPhoneValid(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-().]/g, "");
  return /^(\+91|91|0)?[6-9]\d{9}$/.test(cleaned);
}

export default function ContactEnquiryForm({ locale = "en" }: { locale?: "en" | "te" }) {
  const uid = useId();
  const isEn = locale === "en";

  const [form, setForm] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [phase, setPhase] = useState<SubmitPhase>("idle");
  const [netlifyError, setNetlifyError] = useState<string | null>(null);
  const [isLocalhostWarn, setIsLocalhostWarn] = useState(false);
  const [fallbackUrl, setFallbackUrl] = useState<string | null>(null);

  // ── i18n labels ────────────────────────────────────────────────
  const L = {
    name:        isEn ? "Full Name"            : "పూర్తి పేరు",
    phone:       isEn ? "Phone / WhatsApp"     : "ఫోన్ / WhatsApp",
    email:       isEn ? "Email"                : "ఇమెయిల్",
    optional:    isEn ? "(optional)"           : "(ఐచ్ఛికం)",
    service:     isEn ? "Service Type"         : "సేవా రకం",
    selectSvc:   isEn ? "Select a service"     : "సేవ ఎంచుకోండి",
    date:        isEn ? "Travel Date"          : "ప్రయాణ తేదీ",
    pax:         isEn ? "No. of Passengers"    : "ప్రయాణికుల సంఖ్య",
    pickup:      isEn ? "Pickup Location"      : "పికప్ స్థానం",
    drop:        isEn ? "Drop Location"        : "డ్రాప్ స్థానం",
    vehicle:     isEn ? "Vehicle Preference"   : "వాహన ప్రాధాన్యత",
    noVeh:       isEn ? "No preference"        : "ప్రాధాన్యత లేదు",
    notes:       isEn ? "Additional Requirements" : "అదనపు అవసరాలు",
    notesPh:     isEn ? "Special requirements, preferred timing, additional stops…" : "ప్రత్యేక అవసరాలు, ఇష్టమైన సమయం, అదనపు ఆగుళ్లు…",
    consent:     isEn ? "I agree to be contacted by Akshaya Cabs via WhatsApp or phone about my enquiry." : "నా విచారణ గురించి WhatsApp లేదా ఫోన్ ద్వారా అక్షయ క్యాబ్స్ నన్ను సంప్రదించడానికి అంగీకరిస్తున్నాను.",
    submit:      isEn ? "Send Enquiry via WhatsApp" : "WhatsApp ద్వారా విచారణ పంపండి",
    submitting:  isEn ? "Sending…"             : "పంపుతోంది…",
    hint:        isEn ? "Opens WhatsApp with your details pre-filled. Tap Send to complete your enquiry." : "మీ వివరాలు ముందే నింపబడిన WhatsApp తెరవబడుతుంది. విచారణ పూర్తి చేయడానికి Send నొక్కండి.",
    successTitle: isEn ? "WhatsApp Opened!"   : "WhatsApp తెరవబడింది!",
    successBody:  isEn ? "Your enquiry has been pre-filled in WhatsApp. Please tap Send to complete it. Our team will respond as soon as possible." : "మీ విచారణ WhatsApp లో ముందే నింపబడింది. దాన్ని పూర్తి చేయడానికి Send నొక్కండి. మా బృందం వీలైనంత త్వరగా స్పందిస్తుంది.",
    sendAnother:  isEn ? "Send Another Enquiry" : "మరో విచారణ పంపండి",
    errRequired:  isEn ? "Required."           : "అవసరం.",
    errPhone:     isEn ? "Enter a valid Indian mobile number." : "చెల్లుబాటు అయ్యే భారతీయ మొబైల్ నంబర్ నమోదు చేయండి.",
    errConsent:   isEn ? "Please confirm your consent to proceed." : "దయచేసి మీ సమ్మతిని నిర్ధారించండి.",
    netlifyOk:    isEn ? "✓ Your enquiry has also been saved to our lead system." : "✓ మీ విచారణ మా లీడ్ సిస్టమ్‌లో కూడా సేవ్ చేయబడింది.",
    netlifyErr:   isEn ? "Note: Your WhatsApp enquiry was sent. The lead backup couldn't be saved right now — that's OK, we'll respond via WhatsApp." : "గమనిక: మీ WhatsApp విచారణ పంపబడింది. లీడ్ బ్యాకప్ ఇప్పుడు సేవ్ కాలేదు — సరే, మేము WhatsApp ద్వారా స్పందిస్తాము.",
    localhostWarn: isEn ? "⚠ You are on localhost — Netlify form storage requires a live deployment. WhatsApp enquiry still sent." : "⚠ మీరు localhost లో ఉన్నారు — Netlify ఫారం స్టోరేజ్ కు లైవ్ డిప్లాయ్‌మెంట్ అవసరం. WhatsApp విచారణ పంపబడింది.",
    openWa:       isEn ? "Open in WhatsApp"    : "WhatsApp లో తెరవండి",
    waBlocked:    isEn ? "WhatsApp didn't open? Use this link:" : "WhatsApp తెరవబడలేదా? ఈ లింక్ ఉపయోగించండి:",
  };

  // ── Validation ─────────────────────────────────────────────────
  function validate(): boolean {
    const e: Errors = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = L.errRequired;
    if (!form.phone.trim() || !isPhoneValid(form.phone)) e.phone = L.errPhone;
    if (!form.serviceType)             e.serviceType    = L.errRequired;
    if (!form.travelDate)              e.travelDate     = L.errRequired;
    if (!form.pickupLocation.trim())   e.pickupLocation = L.errRequired;
    if (!form.dropLocation.trim())     e.dropLocation   = L.errRequired;
    if (!form.consent)                 e.consent        = L.errConsent;
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  // ── Submit — dual channel ──────────────────────────────────────
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;

    setPhase("submitting");

    // ── Channel 1: WhatsApp (always runs, regardless of Netlify) ──
    const waUrl = contactEnquiryWhatsAppUrl({
      callerName:      form.name,
      callerPhone:     form.phone,
      service:         form.serviceType || undefined,
      date:            form.travelDate || undefined,
      pickupLocation:  form.pickupLocation || undefined,
      dropLocation:    form.dropLocation || undefined,
      passengers:      form.passengers ? parseInt(form.passengers) : undefined,
      vehicleName:     form.vehicle || undefined,
      customMessage:   form.message.trim() || undefined,
    });

    const opened = openWhatsApp(waUrl);
    if (!opened) setFallbackUrl(waUrl);

    // ── Channel 2: Netlify Forms AJAX ──────────────────────────
    const result = await submitToNetlify(
      "akshaya-enquiry",
      {
        name:            form.name,
        phone:           form.phone,
        email:           form.email || undefined,
        serviceType:     form.serviceType,
        travelDate:      form.travelDate,
        pickupLocation:  form.pickupLocation,
        dropLocation:    form.dropLocation,
        passengers:      form.passengers || undefined,
        vehicle:         form.vehicle || undefined,
        message:         form.message.trim() || undefined,
        consent:         "yes",
      },
      locale
    );

    if (result.isLocalhost) setIsLocalhostWarn(true);

    setPhase(result.ok ? "netlify-ok" : result.state === "offline" ? "offline" : "netlify-err");
    if (!result.ok && result.errorMessage) setNetlifyError(result.errorMessage);
    setForm(INITIAL);
  }

  function reset() {
    setPhase("idle");
    setErrors({});
    setNetlifyError(null);
    setIsLocalhostWarn(false);
    setFallbackUrl(null);
  }

  // ── Success / sent states ──────────────────────────────────────
  if (phase === "netlify-ok" || phase === "netlify-err" || phase === "offline") {
    return (
      <div className="akc-form-success" role="status" aria-live="polite">
        <span className="akc-form-success__icon" aria-hidden="true">💬</span>
        <h3 className={`akc-form-success__title${isEn ? "" : " lang-te"}`}>
          {L.successTitle}
        </h3>
        <p className={`akc-form-success__msg${isEn ? "" : " lang-te"}`}>
          {L.successBody}
        </p>

        {/* Netlify outcome badge */}
        {phase === "netlify-ok" && (
          <p className="akc-form-success__netlify-ok" aria-live="polite">
            {L.netlifyOk}
          </p>
        )}
        {(phase === "netlify-err" || phase === "offline") && (
          <p className="akc-form-success__netlify-err" aria-live="polite">
            {isLocalhostWarn ? L.localhostWarn : (netlifyError ?? L.netlifyErr)}
          </p>
        )}

        {/* Popup-blocked fallback */}
        {fallbackUrl && (
          <div className="akc-form-success__fallback" role="alert">
            <p className={isEn ? "" : "lang-te"}>{L.waBlocked}</p>
            <a
              href={fallbackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="akc-btn akc-btn--wa"
            >
              {L.openWa}
            </a>
          </div>
        )}

        <button type="button" className="akc-btn akc-btn--secondary" onClick={reset}>
          {L.sendAnother}
        </button>
      </div>
    );
  }

  // ── Main form ──────────────────────────────────────────────────
  return (
    <form
      className="akc-contact-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label={isEn ? "Contact enquiry form" : "సంప్రదింపు విచారణ ఫారం"}
    >
      {/* Honeypot — hidden from real users; bots fill it */}
      <div aria-hidden="true" style={{ display: "none" }}>
        <label htmlFor={`${uid}-bot`}>Don&apos;t fill this out</label>
        <input id={`${uid}-bot`} name="bot-field" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Row 1: Name + Phone */}
      <div className="akc-form-row akc-form-row--2">
        <div className="akc-form-field">
          <label className="akc-form-label" htmlFor={`${uid}-name`}>
            {L.name} <span aria-label="required" className="akc-form-required">*</span>
          </label>
          <input
            id={`${uid}-name`}
            name="name"
            type="text"
            className={`akc-form-input${errors.name ? " akc-form-input--err" : ""}`}
            placeholder={isEn ? "Your full name" : "మీ పూర్తి పేరు"}
            value={form.name}
            onChange={handleChange}
            required
            minLength={2}
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? `${uid}-name-err` : undefined}
          />
          {errors.name && (
            <p id={`${uid}-name-err`} className="akc-form-error" role="alert">{errors.name}</p>
          )}
        </div>
        <div className="akc-form-field">
          <label className="akc-form-label" htmlFor={`${uid}-phone`}>
            {L.phone} <span aria-label="required" className="akc-form-required">*</span>
          </label>
          <input
            id={`${uid}-phone`}
            name="phone"
            type="tel"
            className={`akc-form-input${errors.phone ? " akc-form-input--err" : ""}`}
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={handleChange}
            required
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? `${uid}-phone-err` : undefined}
          />
          {errors.phone && (
            <p id={`${uid}-phone-err`} className="akc-form-error" role="alert">{errors.phone}</p>
          )}
        </div>
      </div>

      {/* Row 2: Email + Service */}
      <div className="akc-form-row akc-form-row--2">
        <div className="akc-form-field">
          <label className="akc-form-label" htmlFor={`${uid}-email`}>
            {L.email} <span className="akc-form-optional">{L.optional}</span>
          </label>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            className="akc-form-input"
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
          />
        </div>
        <div className="akc-form-field">
          <label className="akc-form-label" htmlFor={`${uid}-service`}>
            {L.service} <span aria-label="required" className="akc-form-required">*</span>
          </label>
          <select
            id={`${uid}-service`}
            name="serviceType"
            className={`akc-form-select${errors.serviceType ? " akc-form-input--err" : ""}`}
            value={form.serviceType}
            onChange={handleChange}
            required
            aria-invalid={!!errors.serviceType}
          >
            <option value="" disabled>{L.selectSvc}</option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.serviceType && (
            <p className="akc-form-error" role="alert">{errors.serviceType}</p>
          )}
        </div>
      </div>

      {/* Row 3: Date + Passengers */}
      <div className="akc-form-row akc-form-row--2">
        <div className="akc-form-field">
          <label className="akc-form-label" htmlFor={`${uid}-date`}>
            {L.date} <span aria-label="required" className="akc-form-required">*</span>
          </label>
          <input
            id={`${uid}-date`}
            name="travelDate"
            type="date"
            className={`akc-form-input${errors.travelDate ? " akc-form-input--err" : ""}`}
            value={form.travelDate}
            onChange={handleChange}
            required
            min={todayStr()}
            aria-invalid={!!errors.travelDate}
          />
          {errors.travelDate && (
            <p className="akc-form-error" role="alert">{errors.travelDate}</p>
          )}
        </div>
        <div className="akc-form-field">
          <label className="akc-form-label" htmlFor={`${uid}-pax`}>{L.pax}</label>
          <input
            id={`${uid}-pax`}
            name="passengers"
            type="number"
            className="akc-form-input"
            placeholder={isEn ? "e.g. 4" : "ఉదా: 4"}
            value={form.passengers}
            onChange={handleChange}
            min={1}
            max={50}
            inputMode="numeric"
          />
        </div>
      </div>

      {/* Row 4: Pickup + Drop */}
      <div className="akc-form-row akc-form-row--2">
        <div className="akc-form-field">
          <label className="akc-form-label" htmlFor={`${uid}-pickup`}>
            {L.pickup} <span aria-label="required" className="akc-form-required">*</span>
          </label>
          <input
            id={`${uid}-pickup`}
            name="pickupLocation"
            type="text"
            className={`akc-form-input${errors.pickupLocation ? " akc-form-input--err" : ""}`}
            placeholder={isEn ? "e.g. Tirupati Railway Station" : "ఉదా: తిరుపతి రైల్వే స్టేషన్"}
            value={form.pickupLocation}
            onChange={handleChange}
            required
            aria-invalid={!!errors.pickupLocation}
          />
          {errors.pickupLocation && (
            <p className="akc-form-error" role="alert">{errors.pickupLocation}</p>
          )}
        </div>
        <div className="akc-form-field">
          <label className="akc-form-label" htmlFor={`${uid}-drop`}>
            {L.drop} <span aria-label="required" className="akc-form-required">*</span>
          </label>
          <input
            id={`${uid}-drop`}
            name="dropLocation"
            type="text"
            className={`akc-form-input${errors.dropLocation ? " akc-form-input--err" : ""}`}
            placeholder={isEn ? "e.g. Tirumala" : "ఉదా: తిరుమల"}
            value={form.dropLocation}
            onChange={handleChange}
            required
            aria-invalid={!!errors.dropLocation}
          />
          {errors.dropLocation && (
            <p className="akc-form-error" role="alert">{errors.dropLocation}</p>
          )}
        </div>
      </div>

      {/* Vehicle preference */}
      <div className="akc-form-field">
        <label className="akc-form-label" htmlFor={`${uid}-vehicle`}>{L.vehicle}</label>
        <select
          id={`${uid}-vehicle`}
          name="vehicle"
          className="akc-form-select"
          value={form.vehicle}
          onChange={handleChange}
        >
          <option value="">{L.noVeh}</option>
          {VEHICLES.map((v) => (
            <option key={v.id} value={`${v.name} (${v.capacity} Seater)`}>
              {v.name} ({v.capacity} Seater)
            </option>
          ))}
        </select>
      </div>

      {/* Additional notes */}
      <div className="akc-form-field">
        <label className="akc-form-label" htmlFor={`${uid}-notes`}>{L.notes}</label>
        <textarea
          id={`${uid}-notes`}
          name="message"
          className="akc-form-textarea"
          placeholder={L.notesPh}
          value={form.message}
          onChange={handleChange}
          maxLength={1000}
          rows={4}
        />
      </div>

      {/* Consent checkbox */}
      <div className="akc-form-field">
        <label
          className={`akc-form-consent${errors.consent ? " akc-form-consent--err" : ""}`}
          htmlFor={`${uid}-consent`}
        >
          <input
            id={`${uid}-consent`}
            name="consent"
            type="checkbox"
            checked={form.consent}
            onChange={handleChange}
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? `${uid}-consent-err` : undefined}
          />
          <span className={isEn ? "" : "lang-te"}>{L.consent}</span>
        </label>
        {errors.consent && (
          <p id={`${uid}-consent-err`} className="akc-form-error" role="alert">
            {errors.consent}
          </p>
        )}
      </div>

      {/* Submit */}
      <div className="akc-form-submit">
        <button
          type="submit"
          className="akc-btn akc-btn--wa akc-btn--lg"
          disabled={phase === "submitting"}
          aria-label={isEn ? "Send enquiry via WhatsApp" : "WhatsApp ద్వారా విచారణ పంపండి"}
        >
          {phase === "submitting" ? (
            <>
              <span className="akc-btn__spinner" aria-hidden="true">⏳</span>
              {L.submitting}
            </>
          ) : (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className={isEn ? "" : "lang-te"}>{L.submit}</span>
            </>
          )}
        </button>
        <p className={`akc-form-hint${isEn ? "" : " lang-te"}`}>{L.hint}</p>
        <p className="akc-form-policy">
          {isEn
            ? "No booking is confirmed until our team replies. We do not share your details with third parties."
            : "మా బృందం సమాధానం ఇచ్చే వరకు బుకింగ్ నిర్ధారించబడదు. మేము మీ వివరాలను మూడవ పక్షాలతో పంచుకోము."}
        </p>
      </div>
    </form>
  );
}
