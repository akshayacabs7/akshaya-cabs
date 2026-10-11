// Akshaya Cabs — Blog Article [slug] Page (TASK-25)
// /[lang]/blog/[slug] — bilingual EN + TE
// Server Component — renders article content from blog-content/ modules.
// Uses generateStaticParams to SSG all published articles.
// Dynamic articles (no content map) return 404.
//
// No .svtt-* class names. No SVTT identity.

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import { LOCALES } from "@/i18n/config";
import { getBlogPostBySlug, getPublishedBlogPosts } from "@/data/blog";
import { getArticleContent } from "@/data/blog-content/index";
import type { ArticleSection } from "@/data/blog-content/types";
import { BUSINESS } from "@/data/business";
import { primaryWhatsAppUrl } from "@/lib/whatsapp";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd";
import { buildArticleSchema } from "@/lib/schema";

// ── Types ──────────────────────────────────────────────────────────

interface Props {
  params: Promise<{ lang: string; slug: string }>;
}

// ── Metadata ──────────────────────────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = (LOCALES.includes(lang as Locale) ? lang : "en") as Locale;
  const isTe = locale === "te";
  const post = getBlogPostBySlug(slug);

  if (!post || post.contentStatus !== "published") {
    return { title: "Article Not Found | Akshaya Cabs" };
  }

  const title = isTe ? (post.titleTe ?? post.title) : post.title;
  const description = isTe ? (post.excerptTe ?? post.excerpt) : post.excerpt;
  const category = isTe ? (post.categoryTe ?? post.category) : post.category;

  return {
    title: `${title} | Akshaya Cabs`,
    description,
    keywords: [
      "Tirupati travel guide",
      "Tirumala darshan",
      category,
      BUSINESS.name,
    ],
    alternates: {
      canonical: `https://akshayacabs.com/${locale}/blog/${slug}`,
      languages: {
        "en-IN": `https://akshayacabs.com/en/blog/${slug}`,
        "te-IN": `https://akshayacabs.com/te/blog/${slug}`,
        "x-default": `https://akshayacabs.com/en/blog/${slug}`,
      },
    },
    openGraph: {
      title: `${title} | ${BUSINESS.name}`,
      description,
      url: `https://akshayacabs.com/${locale}/blog/${slug}`,
      siteName: BUSINESS.name,
      locale: isTe ? "te_IN" : "en_IN",
      type: "article",
      publishedTime: post.publishedAt,
      images: post.image ? [{ url: post.image, alt: title }] : [],
    },
  };
}

// ── Static params ──────────────────────────────────────────────────

export function generateStaticParams() {
  const published = getPublishedBlogPosts();
  return LOCALES.flatMap((lang) =>
    published.map((post) => ({ lang, slug: post.slug }))
  );
}

// ── Article body renderer ──────────────────────────────────────────

/**
 * Very lightweight markdown-like renderer — only handles **bold** patterns.
 * Converts \n\n into paragraph breaks.
 * No dependency on external markdown libraries.
 */
function renderContent(text: string, isTe: boolean) {
  const paragraphs = text.split(/\n\n+/);
  return paragraphs.map((para, idx) => {
    // Bold: **text**
    const parts = para.split(/\*\*([^*]+)\*\*/g);
    const rendered = parts.map((part, i) =>
      i % 2 === 1 ? <strong key={i}>{part}</strong> : part
    );
    return (
      <p key={idx} className={`akc-article__para${isTe ? " lang-te" : ""}`}>
        {rendered}
      </p>
    );
  });
}

function SectionBlock({
  section,
  isTe,
}: {
  section: ArticleSection;
  isTe: boolean;
}) {
  const heading = isTe ? (section.headingTe ?? section.heading) : section.heading;
  const content = isTe ? (section.contentTe ?? section.content) : section.content;

  if (section.type === "intro") {
    return (
      <div className="akc-article__intro">
        {renderContent(content, isTe)}
      </div>
    );
  }

  if (section.type === "notice") {
    return (
      <aside className={`akc-article__notice${isTe ? " lang-te" : ""}`} role="note">
        {renderContent(content, isTe)}
      </aside>
    );
  }

  if (section.type === "cta") {
    return null; // CTA is rendered separately at the bottom
  }

  return (
    <div className="akc-article__section">
      {heading && (
        <h2 className={`akc-article__section-heading${isTe ? " lang-te" : ""}`}>
          {heading}
        </h2>
      )}
      {renderContent(content, isTe)}
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: Props) {
  const { lang, slug } = await params;
  const locale = (LOCALES.includes(lang as Locale) ? lang : "en") as Locale;
  const isTe = locale === "te";

  const post = getBlogPostBySlug(slug);

  // 404 for stubs / missing posts
  if (!post || post.contentStatus !== "published") {
    notFound();
  }

  const sections = getArticleContent(slug);

  // 404 if no content module exists for this slug
  if (!sections) {
    notFound();
  }

  const title = isTe ? (post.titleTe ?? post.title) : post.title;
  const category = isTe ? (post.categoryTe ?? post.category) : post.category;

  // Separate CTA section
  const ctaSection = sections.find((s) => s.type === "cta");
  const ctaContent = ctaSection
    ? (isTe ? (ctaSection.contentTe ?? ctaSection.content) : ctaSection.content)
    : null;
  const bodySections = sections.filter((s) => s.type !== "cta");

  const waUrl = primaryWhatsAppUrl(
    isTe
      ? `నమస్కారం! తిరుపతి ట్రిప్ ప్లాన్ చేయాలనుకుంటున్నాను.`
      : `Hello! I'd like to plan a Tirupati trip with Akshaya Cabs.`
  );

  const publishDate = new Date(post.publishedAt).toLocaleDateString(
    isTe ? "te-IN" : "en-IN",
    { day: "numeric", month: "long", year: "numeric" }
  );

  return (
    <main id="main-content">
      <JsonLd
        data={buildArticleSchema(
          post,
          locale,
          `https://akshayacabs.com/${locale}/blog/${slug}`
        )}
      />
      {/* ── Article hero ── */}
      <header className="akc-article-hero">
        {post.image && (
          <div className="akc-article-hero__img-wrap" aria-hidden="true">
            <Image
              src={post.image}
              alt={title}
              fill
              priority
              quality={85}
              className="akc-article-hero__img"
              sizes="100vw"
            />
            <div className="akc-article-hero__overlay" />
          </div>
        )}
        <div className="akc-container akc-article-hero__content">
          <Breadcrumb
            items={[
              { label: isTe ? "బ్లాగ్" : "Blog", href: `/${locale}/blog` },
              { label: title },
            ]}
            locale={locale}
          />
          <div className="akc-article-hero__meta">
            <span className="akc-article-hero__category">{category}</span>
            {post.readingTime && (
              <span className="akc-article-hero__read-time">
                {post.readingTime} {isTe ? "చదవండి" : "read"}
              </span>
            )}
          </div>
          <h1 className={`akc-article-hero__title${isTe ? " lang-te" : ""}`}>
            {title}
          </h1>
          <time dateTime={post.publishedAt} className="akc-article-hero__date">
            {publishDate}
          </time>
        </div>
      </header>

      {/* ── Article body ── */}
      <div className="akc-article-layout">
        <article className="akc-article" id="article-body">
          {bodySections.map((section, idx) => (
            <SectionBlock key={idx} section={section} isTe={isTe} />
          ))}

          {/* ── Inline CTA box ── */}
          {ctaContent && (
            <aside className="akc-article__cta-box" aria-label={isTe ? "అక్షయ క్యాబ్స్‌తో బుక్ చేయండి" : "Book with Akshaya Cabs"}>
              <p className={`akc-article__cta-text${isTe ? " lang-te" : ""}`}>
                {ctaContent}
              </p>
              <div className="akc-article__cta-actions">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="akc-btn akc-btn--whatsapp"
                >
                  {isTe ? "WhatsApp బుకింగ్" : "WhatsApp Booking"}
                </a>
                <Link
                  href={`/${locale}/tour-packages`}
                  className="akc-btn akc-btn--outline"
                >
                  {isTe ? "టూర్ ప్యాకేజీలు చూడండి" : "View Tour Packages"}
                </Link>
              </div>
            </aside>
          )}

          {/* ── Back link ── */}
          <div className="akc-article__back">
            <Link href={`/${locale}/blog`} className="akc-article__back-link">
              ← {isTe ? "బ్లాగ్‌కి తిరిగి వెళ్ళండి" : "Back to Blog"}
            </Link>
          </div>
        </article>

        {/* ── Sidebar ── */}
        <aside className="akc-article-sidebar" aria-label={isTe ? "త్వరిత సంప్రదింపు" : "Quick contact"}>
          <div className="akc-article-sidebar__card">
            <p className={`akc-article-sidebar__label${isTe ? " lang-te" : ""}`}>
              {isTe ? "ట్రిప్ ప్లాన్ చేయాలా?" : "Planning a trip?"}
            </p>
            <h2 className={`akc-article-sidebar__heading${isTe ? " lang-te" : ""}`}>
              {isTe ? "అక్షయ క్యాబ్స్‌తో బుక్ చేయండి" : "Book with Akshaya Cabs"}
            </h2>
            <p className={`akc-article-sidebar__body${isTe ? " lang-te" : ""}`}>
              {isTe
                ? "24/7 క్యాబ్ సేవ, ఆలయ పర్యటనలు & ఘాట్ రోడ్ ట్రిప్‌లు."
                : "24/7 cab service, temple tours & ghat road trips."}
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="akc-btn akc-btn--whatsapp akc-btn--full"
            >
              {isTe ? "WhatsApp చేయండి" : "WhatsApp Us"}
            </a>
            <a
              href={BUSINESS.phone.primaryTel}
              className="akc-btn akc-btn--outline akc-btn--full"
            >
              {isTe ? "కాల్ చేయండి" : "Call Us"}
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}