// robots.ts — Sri Vinayaka Tours & Travels
// Next.js App Router robots.txt generator
// svtttirupati.com/robots.txt

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",        // No public API routes
          "/_next/",      // Next.js internals
        ],
      },
    ],
    sitemap: "https://svtttirupati.com/sitemap.xml",
    host: "https://svtttirupati.com",
  };
}
