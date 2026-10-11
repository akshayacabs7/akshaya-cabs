// Akshaya Cabs — robots.txt generator (TASK-30 SEO hardening)
// akshayacabs.com | Next.js App Router
//
// Crawling rules:
//  - Allow everything except Next.js internals, API routes, and legal pages.
//  - Privacy Policy & Terms pages are noindex via their generateMetadata too,
//    but disallowing them here gives crawlers an extra explicit signal.
//  - Sitemap URL matches the actual output path.

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",                         // No public API routes
          "/_next/",                       // Next.js internals
          "/en/privacy-policy",           // Legal — noindex (see page metadata)
          "/te/privacy-policy",           // Legal — noindex (te variant)
          "/en/terms-and-conditions",     // Legal — noindex
          "/te/terms-and-conditions",     // Legal — noindex (te variant)
        ],
      },
    ],
    sitemap: "https://akshayacabs.com/sitemap.xml",
    host: "https://akshayacabs.com",
  };
}
