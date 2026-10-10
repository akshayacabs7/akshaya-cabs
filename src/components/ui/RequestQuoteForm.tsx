// RequestQuoteForm — client component for /request-a-quote
// Sri Vinayaka Tours & Travels — svtttirupati.com
// Blueprint fields: Name*, Phone*, Travel Date*, Pickup*, Drop*, Service Type*,
//   Email, Vehicle Preference, Passengers, Package, Travel Time, Additional Requirements
// Submission: opens WhatsApp with all fields pre-filled (no exposed API keys)
// Success message: "Thank you. Your enquiry has been received. Sri Vinayaka Tours & Travels will contact you shortly."

"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { PACKAGES } from "@/data/packages";
import { VEHICLES } from "@/data/vehicles";
import { quoteWhatsAppUrl, openWhatsApp } from "@/lib/whatsapp";

type FormState = "idle" | "submitting" | "success";

interface QuoteFormData {
  // Required
  name: string;
  phone: string;
  travelDate: string;
  pickupLocation: string;
  dropLocation: string;
  serviceType: string;
  // Optional
  email: string;
  vehicle: string;
  passengers: string;
  tourPackage: string;
  travelTime: string;
  message: string;
}

const INITIAL: QuoteFormData = {
  name: "",
  phone: "",
  travelDate: "",
  pickupLocation: "",
  dropLocation: "",
  serviceType: "",
  email: "",
  vehicle: "",
  passengers: "",
  tourPackage: "",
  travelTime: "",
  message: "",
};

const SERVICE_TYPES = [
  "Tirumala Taxi",
  "Airport Pickup / Drop",
  "Railway Station Transfer",
  "Local Cab Service",
  "Outstation Cab",
  "Temple Tour Package",
  "Tempo Traveller Rental",
  "Custom / South India Tour",
  "Other",
];

const TRAVEL_TIMES = [
  "Very Early Morning (2 AM – 6 AM)",
  "Morning (6 AM – 10 AM)",
  "Late Morning (10 AM – 12 PM)",
  "Afternoon (12 PM – 4 PM)",
  "Evening (4 PM – 8 PM)",
  "Night (8 PM – 12 AM)",
  "Late Night (12 AM – 2 AM)",
  "Flexible",
];

export default function RequestQuoteForm() {
  const [form, setForm] = useState<QuoteFormData>(INITIAL);
  const [state, setState] = useState<FormState>("idle");
  const [fallbackUrl, setFallbackUrl] = useState<string | null>(null);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const waUrl = quoteWhatsAppUrl({
      pickupLocation:  form.pickupLocation,
      dropLocation:    form.dropLocation,
      date:            form.travelDate,
      passengers:      form.passengers ? parseInt(form.passengers) : undefined,
      vehicleName:     form.vehicle || undefined,
      packageCode:     form.tourPackage || undefined,
      time:            form.travelTime || undefined,
      customMessage:   form.message.trim() || undefined,
    });

    // openWhatsApp handles popup-blocked (returns false if blocked)
    setState("success");
    setForm(INITIAL);
    const opened = openWhatsApp(waUrl);
    if (!opened) setFallbackUrl(waUrl);
  }

  if (state === "success") {
    return (
      <div className="svtt-form-success" role="alert" aria-live="polite">
        <span className="svtt-form-success__icon" aria-hidden="true">💬</span>
        <h3 className="svtt-form-success__title">WhatsApp Opened!</h3>
        <p className="svtt-form-success__msg">
          Your quote request has been pre-filled in WhatsApp.{" "}
          <strong>Please tap Send in WhatsApp to complete your enquiry.</strong>{" "}
          Our team will respond with transparent pricing and availability.
        </p>
        {fallbackUrl && (
          <div role="alert" style={{ marginTop: "0.75rem" }}>
            <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
              WhatsApp didn&apos;t open? Use this link:
            </p>
            <a
              href={fallbackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              Open in WhatsApp
            </a>
          </div>
        )}
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => { setState("idle"); setFallbackUrl(null); }}
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      className="svtt-contact-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Request a quote form"
    >
      {/* ── Section: Required ── */}
      <p className="svtt-quote-section-label" aria-hidden="true">Required Information</p>

      {/* Row: Name + Phone */}
      <div className="svtt-form-row svtt-form-row--2">
        <div className="svtt-form-field">
          <label className="svtt-form-label" htmlFor="rq-name">
            Full Name <span aria-label="required" style={{ color: "var(--svtt-primary)" }}>*</span>
          </label>
          <input
            id="rq-name"
            name="name"
            type="text"
            className="svtt-form-input"
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
            required
            minLength={2}
            autoComplete="name"
          />
        </div>
        <div className="svtt-form-field">
          <label className="svtt-form-label" htmlFor="rq-phone">
            Phone Number <span aria-label="required" style={{ color: "var(--svtt-primary)" }}>*</span>
          </label>
          <input
            id="rq-phone"
            name="phone"
            type="tel"
            className="svtt-form-input"
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={handleChange}
            required
            autoComplete="tel"
          />
        </div>
      </div>

      {/* Row: Service + Travel Date */}
      <div className="svtt-form-row svtt-form-row--2">
        <div className="svtt-form-field">
          <label className="svtt-form-label" htmlFor="rq-service">
            Service Type <span aria-label="required" style={{ color: "var(--svtt-primary)" }}>*</span>
          </label>
          <select
            id="rq-service"
            name="serviceType"
            className="svtt-form-select"
            value={form.serviceType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a service</option>
            {SERVICE_TYPES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="svtt-form-field">
          <label className="svtt-form-label" htmlFor="rq-date">
            Travel Date <span aria-label="required" style={{ color: "var(--svtt-primary)" }}>*</span>
          </label>
          <input
            id="rq-date"
            name="travelDate"
            type="date"
            className="svtt-form-input"
            value={form.travelDate}
            onChange={handleChange}
            required
            min={new Date().toISOString().split("T")[0]}
          />
        </div>
      </div>

      {/* Row: Pickup + Drop */}
      <div className="svtt-form-row svtt-form-row--2">
        <div className="svtt-form-field">
          <label className="svtt-form-label" htmlFor="rq-pickup">
            Pickup Location <span aria-label="required" style={{ color: "var(--svtt-primary)" }}>*</span>
          </label>
          <input
            id="rq-pickup"
            name="pickupLocation"
            type="text"
            className="svtt-form-input"
            placeholder="e.g. Tirupati Railway Station"
            value={form.pickupLocation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="svtt-form-field">
          <label className="svtt-form-label" htmlFor="rq-drop">
            Drop Location <span aria-label="required" style={{ color: "var(--svtt-primary)" }}>*</span>
          </label>
          <input
            id="rq-drop"
            name="dropLocation"
            type="text"
            className="svtt-form-input"
            placeholder="e.g. Tirumala"
            value={form.dropLocation}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* ── Section: Optional ── */}
      <p className="svtt-quote-section-label" aria-hidden="true">Optional Details (helps us quote accurately)</p>

      {/* Row: Email + Passengers */}
      <div className="svtt-form-row svtt-form-row--2">
        <div className="svtt-form-field">
          <label className="svtt-form-label" htmlFor="rq-email">
            Email
          </label>
          <input
            id="rq-email"
            name="email"
            type="email"
            className="svtt-form-input"
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
          />
        </div>
        <div className="svtt-form-field">
          <label className="svtt-form-label" htmlFor="rq-passengers">
            No. of Passengers
          </label>
          <input
            id="rq-passengers"
            name="passengers"
            type="number"
            className="svtt-form-input"
            placeholder="e.g. 5"
            value={form.passengers}
            onChange={handleChange}
            min={1}
            max={50}
          />
        </div>
      </div>

      {/* Row: Vehicle + Travel Time */}
      <div className="svtt-form-row svtt-form-row--2">
        <div className="svtt-form-field">
          <label className="svtt-form-label" htmlFor="rq-vehicle">
            Vehicle Preference
          </label>
          <select
            id="rq-vehicle"
            name="vehicle"
            className="svtt-form-select"
            value={form.vehicle}
            onChange={handleChange}
          >
            <option value="">No preference</option>
            {VEHICLES.map((v) => (
              <option key={v.id} value={v.name}>
                {v.name} ({v.capacity} Seater)
              </option>
            ))}
          </select>
        </div>
        <div className="svtt-form-field">
          <label className="svtt-form-label" htmlFor="rq-time">
            Preferred Travel Time
          </label>
          <select
            id="rq-time"
            name="travelTime"
            className="svtt-form-select"
            value={form.travelTime}
            onChange={handleChange}
          >
            <option value="">Select time slot</option>
            {TRAVEL_TIMES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Package */}
      <div className="svtt-form-field">
        <label className="svtt-form-label" htmlFor="rq-package">
          Tour Package (if applicable)
        </label>
        <select
          id="rq-package"
          name="tourPackage"
          className="svtt-form-select"
          value={form.tourPackage}
          onChange={handleChange}
        >
          <option value="">No specific package</option>
          {PACKAGES.map((p) => (
            <option key={p.id} value={`${p.code} — ${p.title}`}>
              {p.code} — {p.title}
            </option>
          ))}
        </select>
      </div>

      {/* Additional requirements */}
      <div className="svtt-form-field">
        <label className="svtt-form-label" htmlFor="rq-message">
          Additional Requirements
        </label>
        <textarea
          id="rq-message"
          name="message"
          className="svtt-form-textarea"
          placeholder="Any special requirements, multiple stops, accessibility needs, or other details..."
          value={form.message}
          onChange={handleChange}
          maxLength={1000}
        />
      </div>

      {/* Submit */}
      <div className="svtt-form-submit">
        <button
          type="submit"
          className="btn btn-whatsapp btn-lg"
          disabled={state === "submitting"}
          aria-label="Submit quote request via WhatsApp"
        >
          {state === "submitting" ? (
            "Sending…"
          ) : (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Request a Quote via WhatsApp
            </>
          )}
        </button>
        <p
          style={{
            fontSize: "0.75rem",
            color: "var(--svtt-text-subtle)",
            textAlign: "center",
            marginTop: "0.625rem",
          }}
        >
          Your quote request will open WhatsApp pre-filled with all your details.
        </p>
      </div>
    </form>
  );
}
