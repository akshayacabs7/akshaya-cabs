// ContactEnquiryForm — client component for /contact
// Sri Vinayaka Tours & Travels — svtttirupati.com
// Blueprint rule: Do NOT claim instant response. Success state is honest.

"use client";

import { useState, FormEvent } from "react";
import { BUSINESS } from "@/data/business";

type FormState = "idle" | "submitting" | "success";

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

const VEHICLE_OPTIONS = [
  "Dzire / Amaze / Etios (4+1 Seater)",
  "Ertiga (6+1 Seater)",
  "Innova (7+1 Seater)",
  "Innova Crysta (7+1 Seater)",
  "Tavera (8+1 Seater)",
  "Tempo Traveller 12+1",
  "Tempo Traveller 17+1",
  "No Preference",
];

export default function ContactEnquiryForm() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [state, setState] = useState<FormState>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    // Build a WhatsApp message with all form fields
    const lines: string[] = [
      `Hello Sri Vinayaka Tours & Travels (SVTT) Tirupati!`,
      ``,
      `I am submitting an enquiry from your website:`,
      ``,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
    ];

    if (form.email)          lines.push(`Email: ${form.email}`);
    if (form.serviceType)    lines.push(`Service: ${form.serviceType}`);
    if (form.travelDate)     lines.push(`Travel Date: ${form.travelDate}`);
    if (form.pickupLocation) lines.push(`Pickup: ${form.pickupLocation}`);
    if (form.dropLocation)   lines.push(`Drop: ${form.dropLocation}`);
    if (form.passengers)     lines.push(`Passengers: ${form.passengers}`);
    if (form.vehicle)        lines.push(`Vehicle Preference: ${form.vehicle}`);
    if (form.message)        lines.push(``, `Additional Notes: ${form.message}`);

    lines.push(``, `Please share availability and pricing. Thank you!`);

    const waUrl = `https://wa.me/${BUSINESS.phone.primaryWhatsApp}?text=${encodeURIComponent(lines.join("\n"))}`;

    // Open WhatsApp (the actual submission mechanism) then show success state
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setState("success");
      setForm(INITIAL);
    }, 600);
  }

  if (state === "success") {
    return (
      <div className="svtt-form-success" role="alert" aria-live="polite">
        <span className="svtt-form-success__icon" aria-hidden="true">✅</span>
        <h3 className="svtt-form-success__title">Thank You!</h3>
        <p className="svtt-form-success__msg">
          Your enquiry has been received. Sri Vinayaka Tours &amp; Travels will
          contact you shortly via WhatsApp or phone.
        </p>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setState("idle")}
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      className="svtt-contact-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact enquiry form"
    >
      {/* Row 1: Name + Phone (required) */}
      <div className="svtt-form-row svtt-form-row--2">
        <div className="svtt-form-field">
          <label className="svtt-form-label" htmlFor="cf-name">
            Full Name <span aria-label="required">*</span>
          </label>
          <input
            id="cf-name"
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
          <label className="svtt-form-label" htmlFor="cf-phone">
            Phone Number <span aria-label="required">*</span>
          </label>
          <input
            id="cf-phone"
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

      {/* Row 2: Email + Service Type */}
      <div className="svtt-form-row svtt-form-row--2">
        <div className="svtt-form-field">
          <label className="svtt-form-label" htmlFor="cf-email">
            Email <span style={{ color: "var(--svtt-text-subtle)", fontWeight: 400 }}>(optional)</span>
          </label>
          <input
            id="cf-email"
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
          <label className="svtt-form-label" htmlFor="cf-service">
            Service Type <span aria-label="required">*</span>
          </label>
          <select
            id="cf-service"
            name="serviceType"
            className="svtt-form-select"
            value={form.serviceType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a service</option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 3: Travel Date + Passengers */}
      <div className="svtt-form-row svtt-form-row--2">
        <div className="svtt-form-field">
          <label className="svtt-form-label" htmlFor="cf-date">
            Travel Date <span aria-label="required">*</span>
          </label>
          <input
            id="cf-date"
            name="travelDate"
            type="date"
            className="svtt-form-input"
            value={form.travelDate}
            onChange={handleChange}
            required
            min={new Date().toISOString().split("T")[0]}
          />
        </div>
        <div className="svtt-form-field">
          <label className="svtt-form-label" htmlFor="cf-passengers">
            No. of Passengers
          </label>
          <input
            id="cf-passengers"
            name="passengers"
            type="number"
            className="svtt-form-input"
            placeholder="e.g. 4"
            value={form.passengers}
            onChange={handleChange}
            min={1}
            max={50}
          />
        </div>
      </div>

      {/* Row 4: Pickup + Drop */}
      <div className="svtt-form-row svtt-form-row--2">
        <div className="svtt-form-field">
          <label className="svtt-form-label" htmlFor="cf-pickup">
            Pickup Location <span aria-label="required">*</span>
          </label>
          <input
            id="cf-pickup"
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
          <label className="svtt-form-label" htmlFor="cf-drop">
            Drop Location <span aria-label="required">*</span>
          </label>
          <input
            id="cf-drop"
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

      {/* Vehicle preference */}
      <div className="svtt-form-field">
        <label className="svtt-form-label" htmlFor="cf-vehicle">
          Vehicle Preference
        </label>
        <select
          id="cf-vehicle"
          name="vehicle"
          className="svtt-form-select"
          value={form.vehicle}
          onChange={handleChange}
        >
          <option value="">No preference</option>
          {VEHICLE_OPTIONS.map((v) => (
            <option key={v} value={v}>{v}</option>
          ))}
        </select>
      </div>

      {/* Additional requirements */}
      <div className="svtt-form-field">
        <label className="svtt-form-label" htmlFor="cf-message">
          Additional Requirements
        </label>
        <textarea
          id="cf-message"
          name="message"
          className="svtt-form-textarea"
          placeholder="Any special requirements, preferred timing, or additional stops..."
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
          aria-label="Send enquiry via WhatsApp"
        >
          {state === "submitting" ? (
            "Sending…"
          ) : (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Send Enquiry via WhatsApp
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
          Your enquiry will open WhatsApp pre-filled with your details.
        </p>
      </div>
    </form>
  );
}
