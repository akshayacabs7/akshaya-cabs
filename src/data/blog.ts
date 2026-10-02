// SVTT Blog Post Metadata
// Sri Vinayaka Tours & Travels — svtttirupati.com
// 8 starter blog posts (stubs — content added in Task 16)
// RULE: Do not publish fabricated facts about temple timings/darshan.

import type { BlogPost } from "@/types";

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "tirupati-darshan-guide",
    slug: "tirupati-darshan-guide",
    title: "Complete Tirupati Darshan Guide — Everything You Need to Know",
    excerpt:
      "Planning your Tirumala visit? This complete guide covers darshan types, timings, what to carry, dress code, and how to make the most of your Tirupati pilgrimage.",
    image: "/images/blog/tirupati-darshan-guide.webp",
    publishedAt: "2026-09-01",
    category: "Travel Guide",
    readingTime: "8 min",
    featured: true,
  },
  {
    id: "tirumala-travel-guide",
    slug: "tirumala-travel-guide",
    title: "Tirumala Travel Guide — Getting There, Places to See & Tips",
    excerpt:
      "A comprehensive travel guide to Tirumala — the sacred hill town of Lord Venkateswara. Includes how to reach Tirumala, accommodation options, and must-visit spots.",
    image: "/images/blog/tirumala-travel-guide.webp",
    publishedAt: "2026-09-05",
    category: "Travel Guide",
    readingTime: "7 min",
    featured: true,
  },
  {
    id: "best-places-tirupati",
    slug: "best-places-to-visit-in-tirupati",
    title: "Best Places to Visit in Tirupati Beyond Tirumala",
    excerpt:
      "Tirupati is more than just Tirumala. Discover the lesser-known temples, natural attractions, and heritage sites that make Tirupati a complete travel destination.",
    image: "/images/blog/best-places-tirupati.webp",
    publishedAt: "2026-09-10",
    category: "Destinations",
    readingTime: "6 min",
    featured: false,
  },
  {
    id: "tirupati-to-kanipakam",
    slug: "tirupati-to-kanipakam-travel-guide",
    title: "Tirupati to Kanipakam — Distance, Route & Travel Tips",
    excerpt:
      "Planning a trip from Tirupati to Kanipakam Vinayaka temple? Here is everything you need to know about the route, distance, best time to visit, and how to get there comfortably.",
    image: "/images/blog/tirupati-kanipakam-travel.webp",
    publishedAt: "2026-09-15",
    category: "Destinations",
    readingTime: "5 min",
    featured: false,
  },
  {
    id: "tirupati-to-srikalahasti",
    slug: "tirupati-to-srikalahasti-travel-guide",
    title: "Tirupati to Sri Kalahasti — Complete Travel Guide",
    excerpt:
      "Sri Kalahasti is one of the Pancha Bhuta Stalams and a must-visit for Shiva devotees. Discover the distance from Tirupati, how to travel, and what to see at this ancient temple.",
    image: "/images/blog/tirupati-srikalahasti-travel.webp",
    publishedAt: "2026-09-20",
    category: "Destinations",
    readingTime: "5 min",
    featured: false,
  },
  {
    id: "tirupati-golden-temple-vellore",
    slug: "tirupati-to-golden-temple-vellore",
    title: "Tirupati to Golden Temple Vellore — Route, Distance & Tips",
    excerpt:
      "The Sripuram Golden Temple in Vellore is one of the most stunning temples in India. Plan your trip from Tirupati with this complete travel guide covering route options, distance, and timing.",
    image: "/images/blog/tirupati-golden-temple.webp",
    publishedAt: "2026-09-25",
    category: "Destinations",
    readingTime: "5 min",
    featured: false,
  },
  {
    id: "tirupati-temple-tour-guide",
    slug: "tirupati-temple-tour-guide",
    title: "Tirupati Temple Tour Guide — All Major Temples Covered",
    excerpt:
      "From Tirumala to Padmavathi, Govindaraja to Kapilatheertham — this guide covers all the major temples in and around Tirupati with information, darshan tips, and travel advice.",
    image: "/images/blog/tirupati-temple-tour.webp",
    publishedAt: "2026-09-28",
    category: "Travel Guide",
    readingTime: "9 min",
    featured: false,
  },
  {
    id: "tirupati-airport-to-tirumala",
    slug: "tirupati-airport-to-tirumala-travel-guide",
    title: "Tirupati Airport to Tirumala — How to Get There Easily",
    excerpt:
      "Just landed at Tirupati Airport and heading to Tirumala? This guide covers all your transport options — cab, bus, and more — with timings, distance, and practical tips for a smooth journey.",
    image: "/images/blog/tirupati-airport-tirumala.webp",
    publishedAt: "2026-09-30",
    category: "Travel Tips",
    readingTime: "4 min",
    featured: false,
  },
];

// Helpers
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.featured);
}