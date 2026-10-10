/**
 * AkcSection — page section wrapper with container
 * AkcPageHero — dark navy page hero (non-homepage)
 * AkcSectionHeading — eyebrow + title + subtitle pattern
 * AkcBreadcrumb — accessible breadcrumb navigation
 */

import type { ReactNode } from "react";
import Link from "next/link";

/* ── AkcSection ─────────────────────────────────────────────── */

interface AkcSectionProps {
  dark?:      boolean;
  teal?:      boolean;
  alt?:       boolean;
  sm?:        boolean;
  id?:        string;
  className?: string;
  children?:  ReactNode;
}

export function AkcSection({
  dark      = false,
  teal      = false,
  alt       = false,
  sm        = false,
  id,
  className,
  children,
}: AkcSectionProps) {
  const sectionCls = [
    sm ? "akc-section--sm" : "akc-section",
    dark ? "akc-section--dark" : "",
    teal ? "akc-section--teal" : "",
    alt && !dark && !teal ? "bg-akc-cloud-200" : "",
    className,
  ].filter(Boolean).join(" ");

  return (
    <section id={id} className={sectionCls}>
      <div className="akc-container">{children}</div>
    </section>
  );
}

/* ── AkcPageHero ─────────────────────────────────────────────── */

interface AkcPageHeroProps {
  eyebrow?:   string;
  title:      string;
  subtitle?:  string;
  children?:  ReactNode;  // extra content below subtitle (e.g. CTA, breadcrumb)
  className?: string;
}

export function AkcPageHero({
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: AkcPageHeroProps) {
  return (
    <div className={["akc-page-hero", className].filter(Boolean).join(" ")}>
      <div className="akc-container akc-page-hero__content">
        {eyebrow && (
          <p className="akc-page-hero__eyebrow" aria-hidden="true">
            {eyebrow}
          </p>
        )}
        <h1 className="akc-page-hero__title">{title}</h1>
        {subtitle && (
          <p className="akc-page-hero__subtitle">{subtitle}</p>
        )}
        {children}
      </div>
    </div>
  );
}

/* ── AkcSectionHeading ───────────────────────────────────────── */

interface AkcSectionHeadingProps {
  eyebrow?:   string;
  title:      string;
  subtitle?:  string;
  center?:    boolean;
  as?:        "h2" | "h3";
  className?: string;
}

export function AkcSectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  as: Tag = "h2",
  className,
}: AkcSectionHeadingProps) {
  return (
    <div
      className={[
        center ? "text-center" : "",
        "mb-10",
        className,
      ].filter(Boolean).join(" ")}
    >
      {eyebrow && (
        <span className="akc-section-eyebrow" aria-hidden="true">
          {eyebrow}
        </span>
      )}
      <Tag className="akc-section-title">{title}</Tag>
      {subtitle && (
        <p className={["akc-section-subtitle", center ? "mx-auto" : ""].filter(Boolean).join(" ")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ── AkcBreadcrumb ───────────────────────────────────────────── */

export interface BreadcrumbItem {
  label: string;
  href?: string;  // last item usually has no href
}

interface AkcBreadcrumbProps {
  items:     BreadcrumbItem[];
  className?: string;
}

export function AkcBreadcrumb({ items, className }: AkcBreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={["akc-breadcrumb", className].filter(Boolean).join(" ")}
    >
      <ol className="akc-breadcrumb" role="list">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="akc-breadcrumb__item">
              {i > 0 && (
                <span className="akc-breadcrumb__sep" aria-hidden="true">
                  /
                </span>
              )}
              {item.href && !isLast ? (
                <Link href={item.href} className="akc-breadcrumb__link">
                  {item.label}
                </Link>
              ) : (
                <span
                  className="akc-breadcrumb__current"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
