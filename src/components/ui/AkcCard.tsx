/**
 * AkcCard — Akshaya Cabs card primitive
 *
 * Exports:
 *   AkcCard              — base card wrapper
 *   AkcCardImage         — aspect-ratio image
 *   AkcCardBody          — padded content area
 *   AkcCardFooter        — bottom strip with border
 *   AkcPriceDisplay      — price (from/per-km) + custom-quote state
 *   AkcFareNote          — advisory/disclosure message box
 *   AkcDistanceAdvisory  — warning for routes exceeding km allowance
 */

import Image from "next/image";
import type { ReactNode } from "react";

/* ── AkcCard ────────────────────────────────────────────────── */

interface AkcCardProps {
  interactive?: boolean;
  selected?:    boolean;
  className?:   string;
  children?:    ReactNode;
}

export function AkcCard({
  interactive = false,
  selected    = false,
  className,
  children,
}: AkcCardProps) {
  const cls = [
    "akc-card",
    interactive ? "akc-card--interactive" : "",
    selected    ? "akc-card--price-selected" : "",
    className,
  ].filter(Boolean).join(" ");
  return <div className={cls}>{children}</div>;
}

/* ── AkcCardImage ───────────────────────────────────────────── */

interface AkcCardImageProps {
  src:       string;
  alt:       string;
  square?:   boolean;
  priority?: boolean;
}

export function AkcCardImage({
  src,
  alt,
  square    = false,
  priority  = false,
}: AkcCardImageProps) {
  return (
    <div className={square ? "akc-card__image akc-card__image--square" : "akc-card__image"}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "cover" }}
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  );
}

/* ── AkcCardBody ─────────────────────────────────────────────── */

interface AkcCardBodyProps { children?: ReactNode; className?: string; }

export function AkcCardBody({ children, className }: AkcCardBodyProps) {
  return (
    <div className={["akc-card__body", className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}

/* ── AkcCardFooter ───────────────────────────────────────────── */

interface AkcCardFooterProps { children?: ReactNode; className?: string; }

export function AkcCardFooter({ children, className }: AkcCardFooterProps) {
  return (
    <div className={["akc-card__footer", className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}

/* ── AkcPriceDisplay ─────────────────────────────────────────── */

interface AkcPriceDisplayProps {
  price?:      number | null;   // null = custom quote
  fromLabel?:  boolean;         // show "Starting from"
  perKm?:      boolean;         // show "/km"
  className?:  string;
}

export function AkcPriceDisplay({
  price,
  fromLabel = false,
  perKm     = false,
  className,
}: AkcPriceDisplayProps) {
  if (price === null || price === undefined) {
    return (
      <span className={["akc-price--custom-quote", className].filter(Boolean).join(" ")}>
        Contact for Quote
      </span>
    );
  }
  return (
    <div className={["akc-price", className].filter(Boolean).join(" ")}>
      {fromLabel && <span className="akc-price__from">Starting from</span>}
      ₹{price.toLocaleString("en-IN")}
      {perKm && <span className="akc-price__unit">/km</span>}
    </div>
  );
}

/* ── AkcFareNote ─────────────────────────────────────────────── */

interface AkcFareNoteProps {
  children:  ReactNode;
  variant?:  "default" | "info";
  className?: string;
}

export function AkcFareNote({
  children,
  variant   = "default",
  className,
}: AkcFareNoteProps) {
  const cls = [
    "akc-fare-note",
    variant === "info" ? "akc-fare-note--info" : "",
    className,
  ].filter(Boolean).join(" ");
  return (
    <p className={cls} role="note">
      {children}
    </p>
  );
}

/* ── AkcDistanceAdvisory ─────────────────────────────────────── */

interface AkcDistanceAdvisoryProps {
  note:       string;
  className?: string;
}

export function AkcDistanceAdvisory({
  note,
  className,
}: AkcDistanceAdvisoryProps) {
  return (
    <div
      className={["akc-distance-advisory", className].filter(Boolean).join(" ")}
      role="alert"
      aria-live="polite"
    >
      <span aria-hidden="true">⚠️</span>
      <span>{note}</span>
    </div>
  );
}
