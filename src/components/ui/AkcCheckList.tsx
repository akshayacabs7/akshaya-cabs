/**
 * AkcCheckList — inclusion / exclusion list for package detail pages
 * AkcEnquirySuccess — WhatsApp-opened / Form-submitted / Error states
 */

import type { ReactNode } from "react";

/* ── AkcCheckList ────────────────────────────────────────────── */

interface CheckItem {
  text:     string;
  included: boolean; // true = ✓ green, false = ✗ red
}

interface AkcCheckListProps {
  items:     CheckItem[];
  className?: string;
}

export function AkcCheckList({ items, className }: AkcCheckListProps) {
  return (
    <ul
      className={["akc-checklist", className].filter(Boolean).join(" ")}
      aria-label="List"
    >
      {items.map((item, i) => (
        <li
          key={i}
          className={
            item.included
              ? "akc-checklist__item akc-checklist__item--included"
              : "akc-checklist__item akc-checklist__item--excluded"
          }
        >
          <span aria-hidden="true" />
          {item.text}
        </li>
      ))}
    </ul>
  );
}

export type { CheckItem };

/* ── AkcEnquirySuccess ───────────────────────────────────────── */

type SuccessVariant = "whatsapp" | "form" | "error";

interface AkcEnquirySuccessProps {
  variant:    SuccessVariant;
  className?: string;
  children?:  ReactNode;
}

const STATE_CONTENT: Record<
  SuccessVariant,
  { icon: string; title: string; body: string }
> = {
  whatsapp: {
    icon:  "💬",
    title: "WhatsApp Opened",
    body:  "Tap 'Send' in WhatsApp to complete your enquiry. We will confirm your booking details within 30 minutes.",
  },
  form: {
    icon:  "✅",
    title: "Enquiry Submitted",
    body:  "Thank you! We have received your enquiry and will call or WhatsApp you shortly to confirm the details.",
  },
  error: {
    icon:  "⚠️",
    title: "Something Went Wrong",
    body:  "Your enquiry could not be submitted. Please call us directly: +91 72888 76667.",
  },
};

export function AkcEnquirySuccess({
  variant,
  className,
  children,
}: AkcEnquirySuccessProps) {
  const { icon, title, body } = STATE_CONTENT[variant];
  return (
    <div
      className={["akc-success-state", className].filter(Boolean).join(" ")}
      role={variant === "error" ? "alert" : "status"}
      aria-live="polite"
    >
      <div className="akc-success-state__icon" aria-hidden="true">
        {icon}
      </div>
      <p
        className={[
          "akc-success-state__title",
          variant === "error" ? "akc-error-state__title" : "",
        ].filter(Boolean).join(" ")}
      >
        {title}
      </p>
      <p className="akc-success-state__body">{body}</p>
      {children}
    </div>
  );
}
