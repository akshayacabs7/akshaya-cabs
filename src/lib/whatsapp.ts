// Akshaya Cabs — WhatsApp Utility Library (TASK-19)
// akshayacabs.com | Tirupati, Andhra Pradesh
//
// RULES — enforced throughout the codebase:
// ─────────────────────────────────────────────────────────────────────────────
// 1. NEVER hard-code wa.me URLs in components — always use this module.
// 2. Primary number : wa.me/917288876667  (BUSINESS.phone.primaryWhatsApp)
//    Secondary number: wa.me/919393900006  (BUSINESS.phone.secondaryWhatsApp)
// 3. Messages open WhatsApp with PRE-FILLED text; the customer MUST tap Send.
//    NEVER imply "enquiry received" or "booking confirmed" just because
//    window.open was invoked (the user may have closed the popup).
// 4. Use openWhatsApp() — it handles popup-blocked and mobile gracefully by
//    falling back to a visible copy-link state when window.open returns null.
// 5. Call CTAs (tel: links) are NOT btn-whatsapp — they are plain btn links.
// 6. Unicode (Telugu) text round-trips correctly through encodeURIComponent.
// ─────────────────────────────────────────────────────────────────────────────

import { BUSINESS } from "@/data/business";

const PRIMARY_WA   = BUSINESS.phone.primaryWhatsApp;    // "917288876667"
const SECONDARY_WA = BUSINESS.phone.secondaryWhatsApp;  // "919393900006"

// ── Types ─────────────────────────────────────────────────────────────────────

export interface WhatsAppMessageOptions {
  // Package context
  packageCode?:     string;
  packageTitle?:    string;
  // Vehicle
  vehicleName?:     string;
  vehicleCapacity?: string;
  // Pricing (always "context" / "estimate", never guaranteed)
  price?:           number;
  priceContext?:    string;  // e.g. "per-pax estimate (4-pax vehicle)"
  // Service & trip
  service?:         string;
  tripType?:        string;
  date?:            string;
  returnDate?:      string;
  time?:            string;
  pickupLocation?:  string;
  dropLocation?:    string;
  passengers?:      number;
  // Caller details (used in guided planner)
  callerName?:      string;
  callerPhone?:     string;
  // Freeform
  customMessage?:   string;
}

// ── URL Builder ───────────────────────────────────────────────────────────────

/**
 * Build a wa.me URL with an optional pre-filled message.
 * @param number  - WhatsApp number with country code, no +, digits only
 *                  e.g. "917288876667"
 * @param message - Optional pre-filled message text (will be URL-encoded)
 */
export function buildWhatsAppUrl(number: string, message?: string): string {
  const base = `https://wa.me/${number}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

// ── Client-side opener (handles popup-blocked gracefully) ─────────────────────

/**
 * Open a WhatsApp URL safely.
 *
 * Desktop/mobile browsers that allow popups: window.open returns a Window object.
 * When the browser blocks the popup (strict settings, desktop): window.open
 * returns null. In that case this function returns false so the caller can
 * show a visible fallback link to the user instead of silently failing.
 *
 * Usage (client components only — do NOT call from Server Components):
 * ```ts
 * const opened = openWhatsApp(url);
 * if (!opened) setShowFallbackLink(url);  // show <a href={url}>Open WhatsApp</a>
 * ```
 *
 * @returns true  if the popup was opened (or navigator is mobile — assume success)
 *          false if window.open was blocked
 */
export function openWhatsApp(url: string): boolean {
  // On true mobile browsers (no opener concept) just navigate directly
  if (typeof window === "undefined") return false;

  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.href = url;
    return true;
  }

  const popup = window.open(url, "_blank", "noopener,noreferrer");
  return popup !== null;
}

// ── Separator helper ──────────────────────────────────────────────────────────

const SEP = "━━━━━━━━━━━━━━━━━━━━━━━━";

// ── Message Templates ─────────────────────────────────────────────────────────

/**
 * Generic enquiry message — homepage CTA, footer, floating button.
 */
export function generalEnquiryMessage(): string {
  return (
    "Hello Akshaya Cabs Tirupati!\n\n" +
    "I would like to enquire about your cab and tour services.\n\n" +
    "Could you please share availability and pricing details?\n\n" +
    "Thank you."
  );
}

/**
 * Package booking enquiry — package detail pages, tour listing page.
 * Includes: package code/name, vehicle, price context, date, passengers,
 * pickup/drop, notes.
 */
export function packageBookingMessage(opts: WhatsAppMessageOptions): string {
  const lines: string[] = [
    "Hello Akshaya Cabs Tirupati!",
    "",
    "I would like to enquire about a tour package:",
    "",
    SEP,
    "PACKAGE DETAILS",
    SEP,
  ];

  if (opts.packageCode)    lines.push(`Package      : ${opts.packageCode}`);
  if (opts.packageTitle)   lines.push(`Package Name : ${opts.packageTitle}`);
  if (opts.vehicleName)    lines.push(`Vehicle      : ${opts.vehicleName}${opts.vehicleCapacity ? ` (${opts.vehicleCapacity} Seater)` : ""}`);
  if (opts.price)          lines.push(`Price (est.) : ₹${opts.price.toLocaleString("en-IN")}${opts.priceContext ? ` — ${opts.priceContext}` : ""}`);
  if (opts.date)           lines.push(`Preferred Date: ${opts.date}`);
  if (opts.passengers)     lines.push(`Passengers   : ${opts.passengers}`);
  if (opts.pickupLocation) lines.push(`Pickup       : ${opts.pickupLocation}`);
  if (opts.dropLocation)   lines.push(`Drop         : ${opts.dropLocation}`);
  if (opts.customMessage)  lines.push(`Notes        : ${opts.customMessage}`);

  lines.push(
    "",
    "Please confirm availability and exact fare. Thank you!"
  );

  return lines.join("\n");
}

/**
 * Service booking enquiry — pickup-drop page, services page CTAs.
 */
export function serviceBookingMessage(opts: WhatsAppMessageOptions): string {
  const lines: string[] = [
    "Hello Akshaya Cabs Tirupati!",
    "",
    "I would like to book a cab service:",
    "",
    SEP,
    "SERVICE DETAILS",
    SEP,
  ];

  if (opts.service)        lines.push(`Service      : ${opts.service}`);
  if (opts.tripType)       lines.push(`Trip Type    : ${opts.tripType}`);
  if (opts.vehicleName)    lines.push(`Vehicle Pref : ${opts.vehicleName}`);
  if (opts.date)           lines.push(`Travel Date  : ${opts.date}`);
  if (opts.time)           lines.push(`Pickup Time  : ${opts.time}`);
  if (opts.returnDate)     lines.push(`Return Date  : ${opts.returnDate}`);
  if (opts.passengers)     lines.push(`Passengers   : ${opts.passengers}`);
  if (opts.pickupLocation) lines.push(`Pickup       : ${opts.pickupLocation}`);
  if (opts.dropLocation)   lines.push(`Drop         : ${opts.dropLocation}`);
  if (opts.customMessage)  lines.push(`Notes        : ${opts.customMessage}`);

  lines.push(
    "",
    "Please confirm availability and pricing. Thank you!"
  );

  return lines.join("\n");
}

/**
 * Guided trip planner enquiry — TripPlannerForm (TASK-18/19).
 * Includes caller name + phone so the message is self-contained.
 */
export function tripPlannerMessage(opts: WhatsAppMessageOptions): string {
  const lines: string[] = [
    "Hello Akshaya Cabs Tirupati!",
    "",
    "I would like to request a fare quote for a cab trip:",
    "",
    SEP,
    "TRIP DETAILS",
    SEP,
  ];

  if (opts.tripType)       lines.push(`Trip Type    : ${opts.tripType}`);
  if (opts.date)           lines.push(`Travel Date  : ${opts.date}`);
  if (opts.returnDate)     lines.push(`Return Date  : ${opts.returnDate}`);
  if (opts.time)           lines.push(`Preferred Time: ${opts.time}`);
  if (opts.pickupLocation) lines.push(`Pickup       : ${opts.pickupLocation}`);
  if (opts.dropLocation)   lines.push(`Drop         : ${opts.dropLocation}`);
  if (opts.passengers)     lines.push(`Passengers   : ${opts.passengers}`);
  if (opts.packageCode)    lines.push(`Package      : ${opts.packageCode}`);
  if (opts.vehicleName)    lines.push(`Vehicle Pref : ${opts.vehicleName}`);
  if (opts.customMessage)  lines.push(`Notes        : ${opts.customMessage}`);

  lines.push(
    "",
    SEP,
    "CONTACT",
    SEP,
  );

  if (opts.callerName)     lines.push(`Name         : ${opts.callerName}`);
  if (opts.callerPhone)    lines.push(`Phone        : ${opts.callerPhone}`);

  const isOutstation =
    opts.tripType?.toLowerCase().includes("outstation") ||
    opts.tripType?.toLowerCase().includes("one-way") ||
    opts.tripType?.toLowerCase().includes("roundtrip");

  if (isOutstation) {
    lines.push(
      "",
      "Note: Please share per-km rate and state permit charges for this outstation route."
    );
  }

  lines.push("", "Kindly confirm availability and exact fare. Thank you!");

  return lines.join("\n");
}

/**
 * Contact page general enquiry — ContactEnquiryForm.
 */
export function contactEnquiryMessage(opts: WhatsAppMessageOptions): string {
  const lines: string[] = [
    "Hello Akshaya Cabs Tirupati!",
    "",
    "I am submitting an enquiry from your website:",
    "",
    SEP,
    "ENQUIRY DETAILS",
    SEP,
  ];

  if (opts.callerName)     lines.push(`Name         : ${opts.callerName}`);
  if (opts.callerPhone)    lines.push(`Phone        : ${opts.callerPhone}`);
  if (opts.service)        lines.push(`Service      : ${opts.service}`);
  if (opts.date)           lines.push(`Travel Date  : ${opts.date}`);
  if (opts.pickupLocation) lines.push(`Pickup       : ${opts.pickupLocation}`);
  if (opts.dropLocation)   lines.push(`Drop         : ${opts.dropLocation}`);
  if (opts.passengers)     lines.push(`Passengers   : ${opts.passengers}`);
  if (opts.vehicleName)    lines.push(`Vehicle Pref : ${opts.vehicleName}`);
  if (opts.customMessage)  lines.push(`Notes        : ${opts.customMessage}`);

  lines.push(
    "",
    "Please share availability and pricing. Thank you!"
  );

  return lines.join("\n");
}

/**
 * Quote request message — legacy RequestQuoteForm (TASK-18 new: use tripPlannerMessage).
 */
export function quoteRequestMessage(opts: WhatsAppMessageOptions): string {
  const lines: string[] = [
    "Hello Akshaya Cabs Tirupati!",
    "",
    "I would like to request a fare quote:",
    "",
    SEP,
    "TRIP DETAILS",
    SEP,
  ];

  if (opts.pickupLocation) lines.push(`From         : ${opts.pickupLocation}`);
  if (opts.dropLocation)   lines.push(`To           : ${opts.dropLocation}`);
  if (opts.date)           lines.push(`Travel Date  : ${opts.date}`);
  if (opts.returnDate)     lines.push(`Return Date  : ${opts.returnDate}`);
  if (opts.passengers)     lines.push(`Passengers   : ${opts.passengers}`);
  if (opts.vehicleName)    lines.push(`Vehicle Pref : ${opts.vehicleName}`);
  if (opts.customMessage)  lines.push(`Notes        : ${opts.customMessage}`);

  lines.push(
    "",
    "Kindly share the best available fare. Thank you!"
  );

  return lines.join("\n");
}

// ── Pre-built URL Helpers ─────────────────────────────────────────────────────

/** Primary number — general enquiry (homepage CTA, footer, floating button) */
export function primaryWhatsAppUrl(message?: string): string {
  return buildWhatsAppUrl(PRIMARY_WA, message ?? generalEnquiryMessage());
}

/** Secondary number — alternate contact */
export function secondaryWhatsAppUrl(message?: string): string {
  return buildWhatsAppUrl(SECONDARY_WA, message ?? generalEnquiryMessage());
}

/** Package enquiry URL — primary number */
export function packageWhatsAppUrl(opts: WhatsAppMessageOptions): string {
  return buildWhatsAppUrl(PRIMARY_WA, packageBookingMessage(opts));
}

/** Service booking URL — primary number */
export function serviceWhatsAppUrl(opts: WhatsAppMessageOptions): string {
  return buildWhatsAppUrl(PRIMARY_WA, serviceBookingMessage(opts));
}

/** Guided trip planner URL — primary number */
export function tripPlannerWhatsAppUrl(opts: WhatsAppMessageOptions): string {
  return buildWhatsAppUrl(PRIMARY_WA, tripPlannerMessage(opts));
}

/** Contact enquiry URL — primary number */
export function contactEnquiryWhatsAppUrl(opts: WhatsAppMessageOptions): string {
  return buildWhatsAppUrl(PRIMARY_WA, contactEnquiryMessage(opts));
}

/** Quote request URL — primary number */
export function quoteWhatsAppUrl(opts: WhatsAppMessageOptions): string {
  return buildWhatsAppUrl(PRIMARY_WA, quoteRequestMessage(opts));
}

// ── Number verification constants (for tests / runtime checks) ────────────────

export const VERIFIED_PRIMARY_NUMBER   = "917288876667";
export const VERIFIED_SECONDARY_NUMBER = "919393900006";

/** Verify the primary number hasn't drifted in business.ts */
export function assertWhatsAppNumbers(): void {
  if (PRIMARY_WA !== VERIFIED_PRIMARY_NUMBER) {
    throw new Error(
      `WhatsApp primary number mismatch: expected ${VERIFIED_PRIMARY_NUMBER}, got ${PRIMARY_WA}`
    );
  }
  if (SECONDARY_WA !== VERIFIED_SECONDARY_NUMBER) {
    throw new Error(
      `WhatsApp secondary number mismatch: expected ${VERIFIED_SECONDARY_NUMBER}, got ${SECONDARY_WA}`
    );
  }
}