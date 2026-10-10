/**
 * AkcBadge — Akshaya Cabs badge / chip primitives
 *
 * AkcBadge:      small inline label (teal | navy | gold | success | warning)
 * AkcChip:       interactive destination/filter chip (link or button)
 * AkcCodeBadge:  package code label (AKC0001)
 */

import Link from "next/link";
import type { ReactNode, MouseEventHandler } from "react";

/* ── AkcBadge ───────────────────────────────────────────────── */

type BadgeVariant = "teal" | "navy" | "gold" | "success" | "warning";

interface AkcBadgeProps {
  variant?:  BadgeVariant;
  className?: string;
  children:  ReactNode;
}

export function AkcBadge({
  variant = "teal",
  className,
  children,
}: AkcBadgeProps) {
  return (
    <span className={["akc-badge", `akc-badge--${variant}`, className].filter(Boolean).join(" ")}>
      {children}
    </span>
  );
}

/* ── AkcChip ────────────────────────────────────────────────── */

interface AkcChipProps {
  label:      string;
  prefix?:    string;          // emoji or icon string
  active?:    boolean;
  href?:      string;          // render as link
  onClick?:   MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export function AkcChip({
  label,
  prefix,
  active = false,
  href,
  onClick,
  className,
}: AkcChipProps) {
  const cls = [
    "akc-chip",
    active ? "akc-chip--active" : "",
    className,
  ].filter(Boolean).join(" ");

  const inner = (
    <>
      {prefix && <span aria-hidden="true">{prefix}</span>}
      {label}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls} aria-current={active ? "true" : undefined}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={cls}
      onClick={onClick}
      aria-pressed={active}
    >
      {inner}
    </button>
  );
}

/* ── AkcCodeBadge ───────────────────────────────────────────── */

interface AkcCodeBadgeProps {
  code:       string;
  className?: string;
}

export function AkcCodeBadge({ code, className }: AkcCodeBadgeProps) {
  return (
    <span className={["akc-code-badge", className].filter(Boolean).join(" ")}>
      {code}
    </span>
  );
}
