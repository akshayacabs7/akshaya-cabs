// Blog Index Page — Sri Vinayaka Tours & Travels
// svtttirupati.com/blog

import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/data/business";

export const metadata: Metadata = {
  title: "Travel Blog | Tirupati Temple Tours & Pilgrimage Tips",
  description:
    "Sri Vinayaka Tours & Travels blog — tips for Tirumala darshan, Tirupati temple tours, South India pilgrimage guides, travel itineraries and cab booking advice.",
  alternates: { canonical: "https://svtttirupati.com/blog" },
  openGraph: {
    title: "Travel Blog | Sri Vinayaka Tours & Travels",
    description: "Pilgrimage tips, temple tour guides and travel advice from Tirupati's trusted cab service.",
    url: "https://svtttirupati.com/blog",
  },
};

const BLOG_POSTS = [
  {
    slug: "tirumala-darshan-guide",
    title: "Complete Guide to Tirumala Darshan — What Every Pilgrim Must Know",
    summary:
      "Everything you need to know before visiting Tirumala — ticket types, queue management, best timings, ghat road entry, and how to get there from Tirupati.",
    date: "2024-12-01",
    readTime: "8 min read",
    category: "Pilgrimage Guide",
  },
  {
    slug: "tirupati-cab-booking-tips",
    title: "7 Tips for Booking a Cab in Tirupati — Avoid Common Mistakes",
    summary:
      "First-time visitors often get overcharged or stuck without transport. Here are 7 practical tips for booking a reliable cab in Tirupati for temple tours and airport transfers.",
    date: "2024-11-15",
    readTime: "5 min read",
    category: "Travel Tips",
  },
  {
    slug: "kanipakam-temple-travel-guide",
    title: "Kanipakam Vinayaka Temple — Day Trip from Tirupati",
    summary:
      "A complete travel guide for the Kanipakam Sri Varasiddhi Vinayaka Swamy Temple, 45 km from Tirupati. Best time to visit, puja details, and how to get there.",
    date: "2024-10-20",
    readTime: "6 min read",
    category: "Destination Guide",
  },
  {
    slug: "srikalahasti-temple-guide",
    title: "Sri Kalahasti Temple — The Vayu Linga Kshetra Near Tirupati",
    summary:
      "One of the Pancha Bhuta Stalas, Sri Kalahasti is 36 km from Tirupati and famous for Rahu-Ketu Dosha Nivarana Pooja. Here's everything a pilgrim needs to know.",
    date: "2024-09-10",
    readTime: "7 min read",
    category: "Pilgrimage Guide",
  },
  {
    slug: "golden-temple-sripuram-guide",
    title: "Sripuram Golden Temple, Vellore — Day Trip from Tirupati",
    summary:
      "The breathtaking Mahalakshmi Golden Temple at Sripuram, Vellore is 155 km from Tirupati. Here's how to plan a comfortable day trip with Sri Vinayaka Tours & Travels.",
    date: "2024-08-05",
    readTime: "5 min read",
    category: "Destination Guide",
  },
  {
    slug: "tempo-traveller-group-travel-tirupati",
    title: "Planning a Group Pilgrimage from Tirupati? Use a Tempo Traveller",
    summary:
      "For pilgrim groups of 10–17, a Tempo Traveller offers the best value, comfort, and convenience. Here's what to check before booking one in Tirupati.",
    date: "2024-07-12",
    readTime: "4 min read",
    category: "Vehicle Guide",
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <main className="svtt-blog-page">
      {/* Page header */}
      <header className="svtt-page-hero svtt-blog-page__hero">
        <div className="svtt-container svtt-page-hero__content">
          <p className="svtt-page-hero__eyebrow">Travel Knowledge</p>
          <h1 className="svtt-page-hero__title">
            Tirupati Pilgrimage &amp; Travel Blog
          </h1>
          <p className="svtt-page-hero__subtitle">
            Temple tour guides, darshan tips, travel itineraries and local
            insights — from {BUSINESS.name}.
          </p>
        </div>
      </header>

      {/* Blog posts grid */}
      <section className="svtt-section svtt-blog-grid" aria-labelledby="blog-posts-heading">
        <div className="svtt-container">
          <h2 id="blog-posts-heading" className="svtt-visually-hidden">
            Blog Articles
          </h2>
          <ul role="list" className="svtt-blog__grid">
            {BLOG_POSTS.map((post) => (
              <li key={post.slug} className="svtt-blog__card">
                <article>
                  <div className="svtt-blog__card-meta">
                    <span className="svtt-blog__category">{post.category}</span>
                    <span className="svtt-blog__read-time">{post.readTime}</span>
                  </div>
                  <h3 className="svtt-blog__card-title">
                    <Link href={`/blog/${post.slug}`} className="svtt-blog__card-link">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="svtt-blog__card-summary">{post.summary}</p>
                  <div className="svtt-blog__card-footer">
                    <time dateTime={post.date} className="svtt-blog__date">
                      {formatDate(post.date)}
                    </time>
                    <Link href={`/blog/${post.slug}`} className="svtt-blog__read-more" aria-label={`Read: ${post.title}`}>
                      Read Article →
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="svtt-section-sm svtt-blog-cta" aria-label="Book a tour">
        <div className="svtt-container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", marginBottom: "0.75rem" }}>
            Plan Your Tirupati Trip with Us
          </h2>
          <p style={{ color: "var(--svtt-text-muted)", marginBottom: "1.5rem" }}>
            {BUSINESS.availability} cab service, temple tours &amp; pilgrimage packages — call or WhatsApp us.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/tour-packages" className="btn btn-primary">View Tour Packages</Link>
            <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
