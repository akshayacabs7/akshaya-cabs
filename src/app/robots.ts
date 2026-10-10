// Akshaya Cabs — robots.txt generator
// akshayacabs.com | Next.js App Router

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",     // No public API routes
          "/_next/",   // Next.js internals
        ],
      },
    ],
    sitemap: "https://akshayacabs.com/sitemap.xml",
    host: "https://akshayacabs.com",
  };
}
