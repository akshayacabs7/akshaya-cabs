// Akshaya Cabs – sitemap.xml generator (TASK-30 SEO hardening)
// akshayacabs.com | Next.js App Router
//
// CHANGES (TASK-30):
//  - Added /compare to STATIC_PATHS (was omitted before).
//  - Added "x-default" language alternates to every URL entry so Google's
//    hreflang parser can resolve the fallback locale correctly.
//  - privacy-policy and terms-and-conditions remain excluded (noindex).

import type { MetadataRoute } from "next";
import { PACKAGES } from "@/data/packages";
import { getPublishedBlogPosts } from "@/data/blog";
import { CAB_ROUTES } from "@/data/routes";

const BASE_URL = "https://akshayacabs.com";

// Static page paths (relative, no locale prefix)
const STATIC_PATHS: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "",                  changeFrequency: "weekly",  priority: 1.0  },
  { path: "/tour-packages",   changeFrequency: "weekly",  priority: 0.9  },
  { path: "/services",        changeFrequency: "monthly", priority: 0.9  },
  { path: "/routes",          changeFrequency: "weekly",  priority: 0.88 },
  { path: "/fleet",           changeFrequency: "monthly", priority: 0.8  },
  { path: "/pickup-drop",     changeFrequency: "monthly", priority: 0.8  },
  { path: "/request-a-quote", changeFrequency: "monthly", priority: 0.8  },
  { path: "/contact",         changeFrequency: "monthly", priority: 0.7  },
  { path: "/about",           changeFrequency: "monthly", priority: 0.7  },
  { path: "/blog",            changeFrequency: "weekly",  priority: 0.7  },
  { path: "/compare",         changeFrequency: "monthly", priority: 0.6  },
  { path: "/why-choose-us",   changeFrequency: "monthly", priority: 0.5  },
  // privacy-policy and terms-and-conditions are noIndex – excluded from sitemap
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ── Static pages (both locales) ──────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = STATIC_PATHS.flatMap(
    ({ path, changeFrequency, priority }) => [
      {
        url: `${BASE_URL}/en${path}`,
        lastModified: now,
        changeFrequency,
        priority,
        alternates: {
          languages: {
            "en-IN":    `${BASE_URL}/en${path}`,
            "te-IN":    `${BASE_URL}/te${path}`,
            "x-default": `${BASE_URL}/en${path}`,
          },
        },
      },
      {
        url: `${BASE_URL}/te${path}`,
        lastModified: now,
        changeFrequency,
        priority: priority * 0.9,
        alternates: {
          languages: {
            "en-IN":    `${BASE_URL}/en${path}`,
            "te-IN":    `${BASE_URL}/te${path}`,
            "x-default": `${BASE_URL}/en${path}`,
          },
        },
      },
    ]
  );

  // ── Tour package detail pages (10 packages, both locales) ─────────────────
  const packagePages: MetadataRoute.Sitemap = PACKAGES.flatMap((pkg) => [
    {
      url: `${BASE_URL}/en/tour-packages/${pkg.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
      alternates: {
        languages: {
          "en-IN":    `${BASE_URL}/en/tour-packages/${pkg.slug}`,
          "te-IN":    `${BASE_URL}/te/tour-packages/${pkg.slug}`,
          "x-default": `${BASE_URL}/en/tour-packages/${pkg.slug}`,
        },
      },
    },
    {
      url: `${BASE_URL}/te/tour-packages/${pkg.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.76,
      alternates: {
        languages: {
          "en-IN":    `${BASE_URL}/en/tour-packages/${pkg.slug}`,
          "te-IN":    `${BASE_URL}/te/tour-packages/${pkg.slug}`,
          "x-default": `${BASE_URL}/en/tour-packages/${pkg.slug}`,
        },
      },
    },
  ]);

  // ── Cab route landing pages (both locales) ──────────────────────────────
  const routePages: MetadataRoute.Sitemap = CAB_ROUTES.flatMap((route) => [
    {
      url: `${BASE_URL}/en/routes/${route.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
      alternates: {
        languages: {
          "en-IN":    `${BASE_URL}/en/routes/${route.slug}`,
          "te-IN":    `${BASE_URL}/te/routes/${route.slug}`,
          "x-default": `${BASE_URL}/en/routes/${route.slug}`,
        },
      },
    },
    {
      url: `${BASE_URL}/te/routes/${route.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.76,
      alternates: {
        languages: {
          "en-IN":    `${BASE_URL}/en/routes/${route.slug}`,
          "te-IN":    `${BASE_URL}/te/routes/${route.slug}`,
          "x-default": `${BASE_URL}/en/routes/${route.slug}`,
        },
      },
    },
  ]);

  // ── Published blog articles (both locales) ──────────────────────────────
  const publishedPosts = getPublishedBlogPosts();
  const blogPages: MetadataRoute.Sitemap = publishedPosts.flatMap((post) => [
    {
      url: `${BASE_URL}/en/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          "en-IN":    `${BASE_URL}/en/blog/${post.slug}`,
          "te-IN":    `${BASE_URL}/te/blog/${post.slug}`,
          "x-default": `${BASE_URL}/en/blog/${post.slug}`,
        },
      },
    },
    {
      url: `${BASE_URL}/te/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.63,
      alternates: {
        languages: {
          "en-IN":    `${BASE_URL}/en/blog/${post.slug}`,
          "te-IN":    `${BASE_URL}/te/blog/${post.slug}`,
          "x-default": `${BASE_URL}/en/blog/${post.slug}`,
        },
      },
    },
  ]);

  return [...staticPages, ...packagePages, ...routePages, ...blogPages];
}
