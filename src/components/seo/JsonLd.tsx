import React from "react";

/**
 * Akshaya Cabs – JSON-LD Script Renderer
 * src/components/seo/JsonLd.tsx
 *
 * Renders structured data scripts for Google Search crawling.
 * Safe for server components.
 */

interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
