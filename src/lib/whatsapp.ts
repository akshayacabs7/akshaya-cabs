// SVTT WhatsApp Utility Library
// Sri Vinayaka Tours & Travels — svtttirupati.com
// Centralised WhatsApp link generation. Never hard-code wa.me URLs.
// RULE: The green btn-whatsapp class is ONLY for WhatsApp links — not calls.

import { BUSINESS } from "@/data/business";

const PRIMARY_WA   = BUSINESS.phone.primaryWhatsApp;
const SECONDARY_WA = BUSINESS.phone.secondaryWhatsApp;

// ── Types ─────────────────────────────────────────────────────

export interface WhatsAppMessageOptions {
  packageCode?: string;
  packageTitle?: string;
  vehicleName?: string;
  vehicleCapacity?: string;
  price?: number;
  service?: string;
  date?: string;
  pickupLocation?: string;
  dropLocation?: string;
  passengers?: number;
  customMessage?: string;
}

// ── URL Builder ───────────────────────────────────────────────

/**
 * Build a wa.me URL with an optional pre-filled message.
 * @param number - WhatsApp number (digits only, with country code, no +)
 * @param message - Optional pre-filled message text (will be URL-encoded)
 */
export function buildWhatsAppUrl(number: string, message?: string): string {
  const base = `https://wa.me/${number}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

// ── Message Templates ─────────────────────────────────────────

/**
 * Generic enquiry message
 */
export function generalEnquiryMessage(): string {
  return (
    "Hello Sri Vinayaka Tours & Travels (SVTT) Tirupati!\n\n" +
    "I would like to enquire about your cab/tour services.\n\n" +
    "Could you please share availability and pricing details?\n\n" +
    "Thank you."
  );
}

/**
 * Package booking message with pre-filled package details
 */
export function packageBookingMessage(opts: WhatsAppMessageOptions): string {
  const lines: string[] = [
    "Hello Sri Vinayaka Tours & Travels (SVTT) Tirupati!",
    "",
    "I would like to book a tour package:",
    "",
  ];

  if (opts.packageCode)    lines.push(`Package Code: ${opts.packageCode}`);
  if (opts.packageTitle)   lines.push(`Package: ${opts.packageTitle}`);
  if (opts.vehicleName)    lines.push(`Vehicle: ${opts.vehicleName} (${opts.vehicleCapacity ?? ""})`);
  if (opts.price)          lines.push(`Package Price: Rs.${opts.price.toLocaleString("en-IN")}`);
  if (opts.date)           lines.push(`Preferred Date: ${opts.date}`);
  if (opts.passengers)     lines.push(`Number of Passengers: ${opts.passengers}`);
  if (opts.pickupLocation) lines.push(`Pickup Location: ${opts.pickupLocation}`);
  if (opts.dropLocation)   lines.push(`Drop Location: ${opts.dropLocation}`);
  if (opts.customMessage)  lines.push(`Additional Notes: ${opts.customMessage}`);

  lines.push("", "Please confirm availability. Thank you!");

  return lines.join("\n");
}

/**
 * Service booking message (for non-package services like airport transfer)
 */
export function serviceBookingMessage(opts: WhatsAppMessageOptions): string {
  const lines: string[] = [
    "Hello Sri Vinayaka Tours & Travels (SVTT) Tirupati!",
    "",
    "I would like to book a cab service:",
    "",
  ];

  if (opts.service)        lines.push(`Service: ${opts.service}`);
  if (opts.vehicleName)    lines.push(`Vehicle Preference: ${opts.vehicleName}`);
  if (opts.date)           lines.push(`Date & Time: ${opts.date}`);
  if (opts.passengers)     lines.push(`Number of Passengers: ${opts.passengers}`);
  if (opts.pickupLocation) lines.push(`Pickup Location: ${opts.pickupLocation}`);
  if (opts.dropLocation)   lines.push(`Drop Location: ${opts.dropLocation}`);
  if (opts.customMessage)  lines.push(`Additional Notes: ${opts.customMessage}`);

  lines.push("", "Please confirm availability and pricing. Thank you!");

  return lines.join("\n");
}

/**
 * Quote request message
 */
export function quoteRequestMessage(opts: WhatsAppMessageOptions): string {
  const lines: string[] = [
    "Hello Sri Vinayaka Tours & Travels (SVTT) Tirupati!",
    "",
    "I would like to request a quote for a trip:",
    "",
  ];

  if (opts.pickupLocation) lines.push(`From: ${opts.pickupLocation}`);
  if (opts.dropLocation)   lines.push(`To: ${opts.dropLocation}`);
  if (opts.date)           lines.push(`Date: ${opts.date}`);
  if (opts.passengers)     lines.push(`Passengers: ${opts.passengers}`);
  if (opts.vehicleName)    lines.push(`Vehicle Preference: ${opts.vehicleName}`);
  if (opts.customMessage)  lines.push(`Additional Details: ${opts.customMessage}`);

  lines.push("", "Kindly share the best rate. Thank you!");

  return lines.join("\n");
}

// ── Pre-built URL Helpers ─────────────────────────────────────

/** Primary number — general enquiry (homepage CTA, footer, sticky bar) */
export function primaryWhatsAppUrl(message?: string): string {
  return buildWhatsAppUrl(PRIMARY_WA, message ?? generalEnquiryMessage());
}

/** Secondary number — alternate contact */
export function secondaryWhatsAppUrl(message?: string): string {
  return buildWhatsAppUrl(SECONDARY_WA, message ?? generalEnquiryMessage());
}

/** Package booking URL for a specific package */
export function packageWhatsAppUrl(opts: WhatsAppMessageOptions): string {
  return buildWhatsAppUrl(PRIMARY_WA, packageBookingMessage(opts));
}

/** Service booking URL */
export function serviceWhatsAppUrl(opts: WhatsAppMessageOptions): string {
  return buildWhatsAppUrl(PRIMARY_WA, serviceBookingMessage(opts));
}

/** Quick quote request URL */
export function quoteWhatsAppUrl(opts: WhatsAppMessageOptions): string {
  return buildWhatsAppUrl(PRIMARY_WA, quoteRequestMessage(opts));
}