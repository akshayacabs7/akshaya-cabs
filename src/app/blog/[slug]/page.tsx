// Blog Post [slug] Page — Sri Vinayaka Tours & Travels
// svtttirupati.com/blog/[slug]
// Dynamic route — served as Dynamic (ƒ) since blog posts are not pre-defined in data

import type { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

// Convert slug to readable title
function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slugToTitle(slug);
  return {
    title: `${title} | Sri Vinayaka Tours & Travels Blog`,
    description: `Read about ${title.toLowerCase()} — tips and guides for pilgrims visiting Tirupati, Tirumala and South India with Sri Vinayaka Tours & Travels.`,
    alternates: { canonical: `https://svtttirupati.com/blog/${slug}` },
    openGraph: {
      title: `${title} | SVTT Blog`,
      description: `Pilgrimage and travel guide: ${title.toLowerCase()}`,
      url: `https://svtttirupati.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const title = slugToTitle(slug);

  return (
    <main style={{ padding: "3rem 0" }}>
      <div className="svtt-container" style={{ maxWidth: "780px" }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: "1.5rem", fontSize: "0.875rem", color: "var(--svtt-text-subtle)" }}>
          <Link href="/" style={{ color: "var(--svtt-primary)", textDecoration: "none" }}>Home</Link>
          {" · "}
          <Link href="/blog" style={{ color: "var(--svtt-primary)", textDecoration: "none" }}>Blog</Link>
          {" · "}
          <span>{title}</span>
        </nav>

        <article>
          <header style={{ marginBottom: "2rem" }}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", lineHeight: "1.2", marginBottom: "0.75rem" }}>
              {title}
            </h1>
            <p style={{ color: "var(--svtt-text-muted)", fontSize: "0.9375rem" }}>
              Sri Vinayaka Tours &amp; Travels — Tirupati Pilgrimage Guide
            </p>
          </header>

          <div style={{
            background: "var(--svtt-bg-alt)",
            border: "1px solid var(--svtt-border)",
            borderRadius: "var(--svtt-radius-card)",
            padding: "2rem",
            textAlign: "center",
            color: "var(--svtt-text-muted)",
          }}>
            <p style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>🛕</p>
            <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>Full article coming soon</p>
            <p style={{ fontSize: "0.875rem", marginBottom: "1.5rem" }}>
              We are publishing detailed guides about Tirupati pilgrimage destinations, darshan tips, and travel advice.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/blog" className="btn btn-secondary">← Back to Blog</Link>
              <Link href="/tour-packages" className="btn btn-primary">View Tour Packages</Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}