// Akshaya Cabs — Blog Post Metadata
// akshayacabs.com | Tirupati, Andhra Pradesh
// Complete 8 travel guides published in English & Telugu (TASK-25 & TASK-26).
//
// RULES:
// - All 8 articles are published with complete bilingual content.
// - Real distance and timing estimates based on verified highways.
// - TTD darshan caveats and disclaimer notices included on all pages.

import type { BlogPost } from "@/types";

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "tirupati-darshan-guide",
    slug: "tirupati-darshan-guide",
    title: "Complete Tirupati Darshan Guide — Everything You Need to Know",
    titleTe: "తిరుపతి దర్శన గైడ్ — మీకు తెలుసుకోవలసిన అన్నీ",
    excerpt:
      "Planning your Tirumala visit? This guide covers darshan types, timings, what to carry, dress code, and practical tips for making the most of your Tirupati pilgrimage.",
    excerptTe:
      "తిరుమల సందర్శన ప్లాన్ చేస్తున్నారా? దర్శన రకాలు, సమయాలు, ఏం తీసుకెళ్ళాలి, డ్రెస్ కోడ్ మరియు మీ యాత్రను సార్థకంగా చేసుకోవడానికి ఆచరణాత్మక చిట్కాలు.",
    image: "/images/akshaya/blog/blog-darshan-guide.webp",
    publishedAt: "2026-10-01",
    category: "Travel Guide",
    categoryTe: "ట్రావెల్ గైడ్",
    readingTime: "8 min",
    featured: true,
    contentStatus: "published",
  },
  {
    id: "tirumala-travel-guide",
    slug: "tirumala-travel-guide",
    title: "Tirumala Travel Guide — Getting There, What to See and Practical Tips",
    titleTe: "తిరుమల ట్రావెల్ గైడ్ — ఎలా చేరాలి, ఏం చూడాలి మరియు ఆచరణాత్మక చిట్కాలు",
    excerpt:
      "A comprehensive guide to Tirumala — the sacred hill town of Lord Venkateswara. Covers how to reach Tirumala by road, accommodation options, and the must-visit spots on the hill.",
    excerptTe:
      "తిరుమల — శ్రీ వేంకటేశ్వర స్వామి పవిత్ర కొండ పట్టణం — పూర్తి గైడ్. రోడ్డు ద్వారా తిరుమల చేరే విధానం, వసతి ఎంపికలు మరియు కొండపై తప్పక చూడవలసిన స్థలాలు.",
    image: "/images/akshaya/blog/blog-tirumala-guide.webp",
    publishedAt: "2026-10-05",
    category: "Travel Guide",
    categoryTe: "ట్రావెల్ గైడ్",
    readingTime: "7 min",
    featured: true,
    contentStatus: "published",
  },
  {
    id: "best-places-tirupati",
    slug: "best-places-to-visit-in-tirupati",
    title: "Best Places to Visit in Tirupati Beyond Tirumala",
    titleTe: "తిరుమల కాకుండా తిరుపతిలో తప్పక చూడవలసిన స్థలాలు",
    excerpt:
      "Tirupati is far more than Tirumala. Discover the lesser-known temples, scenic spots, and cultural heritage sites that make Tirupati a rewarding travel destination in its own right.",
    excerptTe:
      "తిరుపతి కేవలం తిరుమల కంటే చాలా ఎక్కువ. తక్కువ తెలిసిన ఆలయాలు, అందమైన ప్రదేశాలు మరియు సాంస్కృతిక వారసత్వ స్థలాలను కనుగొనండి.",
    image: "/images/akshaya/blog/blog-temple-tour.webp",
    publishedAt: "2026-10-10",
    category: "Destinations",
    categoryTe: "గమ్యాలు",
    readingTime: "6 min",
    featured: false,
    contentStatus: "published",
  },
  {
    id: "tirupati-to-kanipakam",
    slug: "tirupati-to-kanipakam-travel-guide",
    title: "Tirupati to Kanipakam — Distance, Route and Travel Tips",
    titleTe: "తిరుపతి నుండి కాణిపాకం — దూరం, మార్గం మరియు ప్రయాణ చిట్కాలు",
    excerpt:
      "Planning a trip from Tirupati to the Kanipakam Vinayaka temple? Here is everything you need to know — route, distance (~75 km), best time to visit, and how to travel comfortably.",
    excerptTe:
      "తిరుపతి నుండి కాణిపాకం వినాయక ఆలయానికి ట్రిప్ ప్లాన్ చేస్తున్నారా? మార్గం, దూరం (~75 కి.మీ), సందర్శించడానికి ఉత్తమ సమయం మరియు సుఖంగా ప్రయాణించే విధానం.",
    image: "/images/akshaya/blog/blog-kanipakam.webp",
    publishedAt: "2026-10-15",
    category: "Destinations",
    categoryTe: "గమ్యాలు",
    readingTime: "5 min",
    featured: false,
    contentStatus: "published",
  },
  {
    id: "tirupati-to-srikalahasti",
    slug: "tirupati-to-srikalahasti-travel-guide",
    title: "Tirupati to Sri Kalahasti — Complete Travel Guide",
    titleTe: "తిరుపతి నుండి శ్రీకాళహస్తి — పూర్తి ప్రయాణ గైడ్",
    excerpt:
      "Sri Kalahasti is one of the Pancha Bhuta Stalams (Vayu Lingam) and an important Shiva pilgrimage site, approximately 36 km from Tirupati. This guide covers the route, Rahu-Ketu puja, timings, and travel tips.",
    excerptTe:
      "శ్రీకాళహస్తి పంచభూత స్థలాలలో (వాయు లింగం) ఒకటి మరియు తిరుపతి నుండి సుమారు 36 కి.మీ దూరంలో ఉన్న ముఖ్యమైన శైవ క్షేత్రం. ఈ గైడ్ మార్గం, రాహు-కేతు పూజ, సమయాలు మరియు ప్రయాణ చిట్కాలను అందిస్తుంది.",
    image: "/images/akshaya/blog/blog-srikalahasti.webp",
    publishedAt: "2026-10-20",
    category: "Destinations",
    categoryTe: "గమ్యాలు",
    readingTime: "6 min",
    featured: false,
    contentStatus: "published",
  },
  {
    id: "tirupati-golden-temple-vellore",
    slug: "tirupati-to-golden-temple-vellore",
    title: "Tirupati to Golden Temple Vellore — Route, Distance and Tips",
    titleTe: "తిరుపతి నుండి వెల్లూరు గోల్డెన్ టెంపుల్ — మార్గం, దూరం మరియు చిట్కాలు",
    excerpt:
      "The Sripuram Golden Temple in Vellore is one of the most visually stunning temples in India. This guide covers the route from Tirupati (~140 km), visiting rules, star path, and combined pilgrimage options.",
    excerptTe:
      "వెల్లూరులోని శ్రీపురం గోల్డెన్ టెంపుల్ భారతదేశంలో అత్యంత అద్భుతమైన దేవాలయాలలో ఒకటి. తిరుపతి నుండి మార్గం (~140 కి.మీ), ఆలయ నిబంధనలు, నక్షత్ర మార్గం మరియు సమగ్ర యాత్రా వివరాలు.",
    image: "/images/akshaya/blog/blog-golden-temple.webp",
    publishedAt: "2026-10-25",
    category: "Destinations",
    categoryTe: "గమ్యాలు",
    readingTime: "6 min",
    featured: false,
    contentStatus: "published",
  },
  {
    id: "tirupati-temple-tour-guide",
    slug: "tirupati-temple-tour-guide",
    title: "Tirupati Temple Tour Guide — All Major Temples Covered",
    titleTe: "తిరుపతి ఆలయ దర్శన గైడ్ — అన్ని ప్రధాన ఆలయాల సమగ్ర సమాచారం",
    excerpt:
      "From Tirumala to Padmavathi Ammavaru, Govindaraja to Kapilatheertham and Srinivasa Mangapuram — this guide covers all major temples in and around Tirupati with itineraries and cab packages.",
    excerptTe:
      "తిరుమల నుండి పద్మావతి అమ్మవారు, గోవిందరాజ స్వామి, కపిలతీర్థం మరియు శ్రీనివాస మంగాపురం వరకు — తిరుపతిలోని అన్ని ప్రధాన ఆలయాల దర్శన క్రమం మరియు క్యాబ్ ప్యాకేజీల పూర్తి వివరాలు.",
    image: "/images/akshaya/blog/blog-temple-tour.webp",
    publishedAt: "2026-10-28",
    category: "Travel Guide",
    categoryTe: "ట్రావెల్ గైడ్",
    readingTime: "8 min",
    featured: true,
    contentStatus: "published",
  },
  {
    id: "tirupati-airport-to-tirumala",
    slug: "tirupati-airport-to-tirumala-travel-guide",
    title: "Tirupati Airport to Tirumala — How to Get There Easily",
    titleTe: "తిరుపతి ఎయిర్‌పోర్ట్ నుండి తిరుమల — సులభంగా ప్రయాణించే విధానం",
    excerpt:
      "Just landed at Tirupati Airport (Renigunta) and heading to Tirumala? This guide covers distances (~15 km to city, ~42 km to hill), ghat road gate timings, terminal pickups, and cab booking advice.",
    excerptTe:
      "తిరుపతి ఎయిర్‌పోర్ట్ (రేణిగుంట) లో దిగి తిరుమల వెళ్ళాలనుకుంటున్నారా? దూరాలు (~15 కి.మీ నగరానికి, ~42 కి.మీ కొండపైకి), ఘాట్ రోడ్ గేట్ సమయాలు మరియు అనుకూలమైన క్యాబ్ బుకింగ్ సలహాలు.",
    image: "/images/akshaya/blog/blog-airport-tirumala.webp",
    publishedAt: "2026-10-30",
    category: "Travel Tips",
    categoryTe: "ప్రయాణ చిట్కాలు",
    readingTime: "5 min",
    featured: false,
    contentStatus: "published",
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