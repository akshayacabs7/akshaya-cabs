// Akshaya Cabs — Blog Post Metadata
// akshayacabs.com | Tirupati, Andhra Pradesh
// 8 blog topic stubs — article content to be written in TASK-25/TASK-26.
//
// RULES:
// - Do NOT publish empty stubs as finished SEO content (contentStatus gate).
// - Only `published` articles should appear in the public blog listing.
// - Do NOT fabricate temple timings, darshan rules, or route distances.
// - Verify religious entry rules and ticket information from official sources before publishing.
// - Blog images: PENDING_USER_UPLOAD — prompts will be generated in TASK-09.

import type { BlogPost } from "@/types";

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "tirupati-darshan-guide",
    slug: "tirupati-darshan-guide",
    title: "Complete Tirupati Darshan Guide — Everything You Need to Know",
    excerpt:
      "Planning your Tirumala visit? This guide covers darshan types, timings, what to carry, dress code, and practical tips for making the most of your Tirupati pilgrimage.",
    image: "/images/akshaya/blog/blog-darshan-guide.webp",
    publishedAt: "2026-10-01",
    category: "Travel Guide",
    readingTime: "8 min",
    featured: true,
    contentStatus: "stub", // Do NOT publish until content is written — TASK-25
  },
  {
    id: "tirumala-travel-guide",
    slug: "tirumala-travel-guide",
    title: "Tirumala Travel Guide — Getting There, What to See and Practical Tips",
    excerpt:
      "A comprehensive guide to Tirumala — the sacred hill town of Lord Venkateswara. Covers how to reach Tirumala by road, accommodation options, and the must-visit spots on the hill.",
    image: "/images/akshaya/blog/blog-tirumala-guide.webp",
    publishedAt: "2026-10-05",
    category: "Travel Guide",
    readingTime: "7 min",
    featured: true,
    contentStatus: "stub",
  },
  {
    id: "best-places-tirupati",
    slug: "best-places-to-visit-in-tirupati",
    title: "Best Places to Visit in Tirupati Beyond Tirumala",
    excerpt:
      "Tirupati is far more than Tirumala. Discover the lesser-known temples, scenic spots, and cultural heritage sites that make Tirupati a rewarding travel destination in its own right.",
    image: "/images/akshaya/blog/blog-temple-tour.webp",
    publishedAt: "2026-10-10",
    category: "Destinations",
    readingTime: "6 min",
    featured: false,
    contentStatus: "stub",
  },
  {
    id: "tirupati-to-kanipakam",
    slug: "tirupati-to-kanipakam-travel-guide",
    title: "Tirupati to Kanipakam — Distance, Route and Travel Tips",
    excerpt:
      "Planning a trip from Tirupati to the Kanipakam Vinayaka temple? Here is everything you need to know — route, distance (~75 km), best time to visit, and how to travel comfortably.",
    image: "/images/akshaya/blog/blog-kanipakam.webp",
    publishedAt: "2026-10-15",
    category: "Destinations",
    readingTime: "5 min",
    featured: false,
    contentStatus: "stub",
  },
  {
    id: "tirupati-to-srikalahasti",
    slug: "tirupati-to-srikalahasti-travel-guide",
    title: "Tirupati to Sri Kalahasti — Complete Travel Guide",
    excerpt:
      "Sri Kalahasti is one of the Pancha Bhuta Stalams and an important Shiva pilgrimage site, approximately 36 km from Tirupati. This guide covers the route, temple timings, and what to see.",
    image: "/images/akshaya/blog/blog-srikalahasti.webp",
    publishedAt: "2026-10-20",
    category: "Destinations",
    readingTime: "5 min",
    featured: false,
    contentStatus: "stub",
  },
  {
    id: "tirupati-golden-temple-vellore",
    slug: "tirupati-to-golden-temple-vellore",
    title: "Tirupati to Golden Temple Vellore — Route, Distance and Tips",
    excerpt:
      "The Sripuram Golden Temple in Vellore is one of the most visually stunning temples in India. This guide covers the route from Tirupati (~150 km), visiting tips, and how to combine it with other temples.",
    image: "/images/akshaya/blog/blog-golden-temple.webp",
    publishedAt: "2026-10-25",
    category: "Destinations",
    readingTime: "5 min",
    featured: false,
    contentStatus: "stub",
  },
  {
    id: "tirupati-temple-tour-guide",
    slug: "tirupati-temple-tour-guide",
    title: "Tirupati Temple Tour Guide — All Major Temples Covered",
    excerpt:
      "From Tirumala to Padmavathi, Govindaraja to Kapilatheertham — this guide covers all the major temples in and around Tirupati with practical darshan advice and travel information.",
    image: "/images/akshaya/blog/blog-temple-tour.webp",
    publishedAt: "2026-10-28",
    category: "Travel Guide",
    readingTime: "9 min",
    featured: false,
    contentStatus: "stub",
  },
  {
    id: "tirupati-airport-to-tirumala",
    slug: "tirupati-airport-to-tirumala-travel-guide",
    title: "Tirupati Airport to Tirumala — How to Get There Easily",
    excerpt:
      "Just landed at Tirupati Airport and heading to Tirumala? This guide covers your transport options, the approximate distance (~20 km to Tirupati city, ~50 km to Tirumala), and practical tips for a smooth onward journey.",
    image: "/images/akshaya/blog/blog-airport-tirumala.webp",
    publishedAt: "2026-10-30",
    category: "Travel Tips",
    readingTime: "4 min",
    featured: false,
    contentStatus: "stub",
  },
];

// ── Helpers ───────────────────────────────────────────────────────

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.featured);
}

/**
 * Returns only published blog posts — use this for all public listing pages.
 * Stubs and drafts must NOT appear in the public blog index or sitemap.
 */
export function getPublishedBlogPosts(): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.contentStatus === "published");
}