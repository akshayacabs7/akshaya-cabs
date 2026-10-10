/**
 * Akshaya Cabs – Breadcrumb
 * src/components/ui/Breadcrumb.tsx
 *
 * TASK 08: Breadcrumb foundation — renders structured nav with JSON-LD.
 * Usage: <Breadcrumb items={[{ label, href? }]} locale={locale} />
 *
 * Server Component — no "use client" needed.
 */

import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { BUSINESS } from "@/data/business";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  locale: Locale;
}

export default function Breadcrumb({ items, locale }: BreadcrumbProps) {
  const prefix = `/${locale}`;

  // Build JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "te" ? "హోమ్" : "Home",
        item: `${BUSINESS.siteUrl}${prefix}`,
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.label,
        ...(item.href ? { item: `${BUSINESS.siteUrl}${item.href}` } : {}),
      })),
    ],
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Visual breadcrumb */}
      <nav
        aria-label={locale === "te" ? "బ్రెడ్‌క్రంబ్" : "Breadcrumb"}
        className="akc-breadcrumb"
      >
        <ol role="list" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.25rem", listStyle: "none", margin: 0, padding: 0 }}>
          {/* Home item */}
          <li className="akc-breadcrumb__item">
            <Link href={prefix} className="akc-breadcrumb__link">
              {locale === "te" ? "హోమ్" : "Home"}
            </Link>
          </li>

          {/* Remaining items */}
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={i} className="akc-breadcrumb__item">
                <span className="akc-breadcrumb__sep" aria-hidden="true">›</span>
                {item.href && !isLast ? (
                  <Link href={item.href} className="akc-breadcrumb__link">
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className="akc-breadcrumb__current"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
