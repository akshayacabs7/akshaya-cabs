// Akshaya Cabs – sitemap.xml generator
// akshayacabs.com | Next.js App Router
// Task 06: Updated for /en/ / /te/ locale routing with hreflang alternates
// RULE: Only include ACTUAL, publicly accessible canonical pages.
// RULE: Blog stubs (contentStatus !== "published") must NOT be included.
// RULE: Service detail /services/[slug] pages omitted until TASK-16.

import type { MetadataRoute } from "next";
import { PACKAGES } from "@/data/packages";
import { getPublishedBlogPosts } from "@/data/blog";

const BASE_URL = "https://akshayacabs.com";

// Static page paths (relative, no locale prefix)
const STATIC_PATHS: Array<{ path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }> = [
  { path: "",              changeFrequency: "weekly",  priority: 1.0 },
  { path: "/tour-packages", changeFrequency: "weekly",  priority: 0.9 },
  { path: "/services",     changeFrequency: "monthly", priority: 0.9 },
  { path: "/fleet",        changeFrequency: "monthly", priority: 0.8 },
  { path: "/pickup-drop",  changeFrequency: "monthly", priority: 0.8 },
  { path: "/request-a-quote", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact",      changeFrequency: "monthly", priority: 0.7 },
  { path: "/about",        changeFrequency: "monthly", priority: 0.7 },
  { path: "/why-choose-us", changeFrequency: "monthly", priority: 0.5 },
  { path: "/travel-guides", changeFrequency: "weekly",  priority: 0.6 },
  // privacy-policy and terms-and-conditions are noIndex – excluded from sitemap
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ── Static pages (both locales) ──────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = STATIC_PATHS.flatMap(({ path, changeFrequency, priority }) => [
    {
      url: `${BASE_URL}/en${path}`,
      lastModified: now,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          "en-IN": `${BASE_URL}/en${path}`,
          "te-IN": `${BASE_URL}/te${path}`,
        },
      },
    },
    {
      url: `${BASE_URL}/te${path}`,
      lastModified: now,
      changeFrequency,
      priority: priority * 0.9, // slightly lower than English canonical
      alternates: {
        languages: {
          "en-IN": `${BASE_URL}/en${path}`,
          "te-IN": `${BASE_URL}/te${path}`,
        },
      },
    },
  ]);

  // ── Tour package detail pages (10 confirmed routes, both locales) ─────────
  const packagePages: MetadataRoute.Sitemap = PACKAGES.flatMap((pkg) => [
    {
      url: `${BASE_URL}/en/tour-packages/${pkg.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
      alternates: {
        languages: {
          "en-IN": `${BASE_URL}/en/tour-packages/${pkg.slug}`,
          "te-IN": `${BASE_URL}/te/tour-packages/${pkg.slug}`,
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
          "en-IN": `${BASE_URL}/en/tour-packages/${pkg.slug}`,
          "te-IN": `${BASE_URL}/te/tour-packages/${pkg.slug}`,
        },
      },
    },
  ]);

  // ── Published blog articles only (both locales) ───────────────────────────
  const publishedPosts = getPublishedBlogPosts();
  const blogPages: MetadataRoute.Sitemap = publishedPosts.flatMap((post) => [
    {
      url: `${BASE_URL}/en/travel-guides/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          "en-IN": `${BASE_URL}/en/travel-guides/${post.slug}`,
          "te-IN": `${BASE_URL}/te/travel-guides/${post.slug}`,
        },
      },
    },
    {
      url: `${BASE_URL}/te/travel-guides/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.54,
      alternates: {
        languages: {
          "en-IN": `${BASE_URL}/en/travel-guides/${post.slug}`,
          "te-IN": `${BASE_URL}/te/travel-guides/${post.slug}`,
        },
      },
    },
  ]);

  // Note: /services/[slug] (service detail pages) not included until TASK-16.

  return [...staticPages, ...packagePages, ...blogPages];
}
