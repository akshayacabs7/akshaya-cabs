// Akshaya Cabs — Blog Index Page (TASK-25)
// /[lang]/blog — bilingual EN + TE
// Server Component. No .svtt-* class names. No SVTT identity.
//
// Shows only published articles (contentStatus === "published").
// Stubs/drafts are hidden from the public listing.

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { LOCALES } from "@/i18n/config";
import { getPublishedBlogPosts } from "@/data/blog";
import { BUSINESS } from "@/data/business";
import Breadcrumb from "@/components/ui/Breadcrumb";

// ── Metadata ──────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isTe = lang === "te";

  const title = isTe
    ? "తిరుపతి ట్రావెల్ బ్లాగ్ | అక్షయ క్యాబ్స్ — యాత్రా గైడ్లు"
    : "Tirupati Travel Blog | Akshaya Cabs — Pilgrimage & Travel Guides";
  const description = isTe
    ? "తిరుమల దర్శనం, తిరుపతి ఆలయ పర్యటనలు, కాణిపాకం, శ్రీ కాళహస్తి మరియు దక్షిణ భారత యాత్రా మార్గదర్శకాలు — అక్షయ క్యాబ్స్ నుండి."
    : "Tirumala darshan guides, Tirupati temple tours, Kanipakam, Sri Kalahasti and South India pilgrimage guides — from Akshaya Cabs Tirupati.";

  return {
    title,
    description,
    alternates: {
      canonical: `https://akshayacabs.com/${lang}/blog`,
      languages: {
        "en-IN": "https://akshayacabs.com/en/blog",
        "te-IN": "https://akshayacabs.com/te/blog",
        "x-default": "https://akshayacabs.com/en/blog",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://akshayacabs.com/${lang}/blog`,
      siteName: BUSINESS.name,
      locale: isTe ? "te_IN" : "en_IN",
      type: "website",
    },
  };
}

// ── Static params ──────────────────────────────────────────────────

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

// ── Helpers ────────────────────────────────────────────────────────

function formatDate(iso: string, locale: Locale): string {
  return new Date(iso).toLocaleDateString(
    locale === "te" ? "te-IN" : "en-IN",
    { day: "numeric", month: "long", year: "numeric" }
  );
}

// Placeholder image for posts without a real uploaded image
const PLACEHOLDER_IMG = "/images/akshaya/hero/hero-desktop-tirumala.webp";

// ── Page ───────────────────────────────────────────────────────────

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (LOCALES.includes(lang as Locale) ? lang : "en") as Locale;
  const isEn = locale === "en";
  const posts = getPublishedBlogPosts();

  return (
    <main id="main-content">
      {/* ── Page hero ── */}
      <header className="akc-page-hero">
        <div className="akc-container akc-page-hero__content">
          <Breadcrumb
            items={[
              { label: isEn ? "Blog" : "బ్లాగ్" },
            ]}
            locale={locale}
          />
          <p className="akc-page-hero__label">
            {isEn ? "Travel Knowledge" : "యాత్రా జ్ఞానం"}
          </p>
          <h1 className="akc-page-hero__title">
            {isEn
              ? "Tirupati Pilgrimage & Travel Blog"
              : "తిరుపతి యాత్రా & ట్రావెల్ బ్లాగ్"}
          </h1>
          <p className="akc-page-hero__subtitle">
            {isEn
              ? `In-depth guides for Tirumala darshan, Tirupati temple tours, nearby pilgrimage destinations and South India travel — from ${BUSINESS.name}.`
              : `తిరుమల దర్శనం, తిరుపతి ఆలయ పర్యటనలు, సమీప యాత్రా గమ్యాలు మరియు దక్షిణ భారత ప్రయాణానికి వివరణాత్మక గైడ్లు — ${BUSINESS.name} నుండి.`}
          </p>
        </div>
      </header>

      {/* ── Blog grid ── */}
      <section
        className="akc-section akc-blog"
        aria-labelledby="blog-heading"
      >
        <div className="akc-container">
          <h2 id="blog-heading" className="akc-visually-hidden">
            {isEn ? "Travel Articles" : "ట్రావెల్ వ్యాసాలు"}
          </h2>

          {posts.length === 0 ? (
            <div className="akc-blog__empty">
              <p className="akc-blog__empty-text">
                {isEn
                  ? "Detailed travel guides are coming soon. Check back shortly."
                  : "వివరణాత్మక యాత్రా గైడ్లు త్వరలో వస్తాయి."}
              </p>
              <Link href={`/${locale}/tour-packages`} className="akc-btn akc-btn--primary">
                {isEn ? "View Tour Packages" : "టూర్ ప్యాకేజీలు చూడండి"}
              </Link>
            </div>
          ) : (
            <ul role="list" className="akc-blog__grid">
              {posts.map((post) => {
                const title = isEn ? post.title : (post.titleTe ?? post.title);
                const excerpt = isEn ? post.excerpt : (post.excerptTe ?? post.excerpt);
                const category = isEn ? post.category : (post.categoryTe ?? post.category);

                return (
                  <li key={post.id} className="akc-blog__card">
                    <Link
                      href={`/${locale}/blog/${post.slug}`}
                      className="akc-blog__card-link"
                      aria-label={title}
                    >
                      {/* Image */}
                      <div className="akc-blog__img-wrap">
                        <Image
                          src={post.image ?? PLACEHOLDER_IMG}
                          alt={title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="akc-blog__img"
                          onError={undefined}
                        />
                        <div className="akc-blog__img-overlay" aria-hidden="true" />
                        {/* Category chip */}
                        <span className="akc-blog__category-chip">
                          {category}
                        </span>
                      </div>

                      {/* Body */}
                      <div className="akc-blog__body">
                        <h3 className={`akc-blog__title${locale === "te" ? " lang-te" : ""}`}>
                          {title}
                        </h3>
                        <p className={`akc-blog__excerpt${locale === "te" ? " lang-te" : ""}`}>
                          {excerpt}
                        </p>
                        <div className="akc-blog__footer">
                          <time
                            dateTime={post.publishedAt}
                            className="akc-blog__date"
                          >
                            {formatDate(post.publishedAt, locale)}
                          </time>
                          {post.readingTime && (
                            <span className="akc-blog__read-time">
                              {post.readingTime} {isEn ? "read" : "చదవండి"}
                            </span>
                          )}
                        </div>
                        <span className="akc-blog__read-more" aria-hidden="true">
                          {isEn ? "Read Article →" : "వ్యాసం చదవండి →"}
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section className="akc-section akc-section--alt akc-blog-cta" aria-label={isEn ? "Book a cab" : "క్యాబ్ బుక్ చేయండి"}>
        <div className="akc-container akc-blog-cta__inner">
          <div className="akc-blog-cta__text">
            <h2 className={`akc-blog-cta__heading${locale === "te" ? " lang-te" : ""}`}>
              {isEn
                ? "Ready to Plan Your Tirupati Trip?"
                : "మీ తిరుపతి ట్రిప్ ప్లాన్ చేయడానికి సిద్ధంగా ఉన్నారా?"}
            </h2>
            <p className={`akc-blog-cta__sub${locale === "te" ? " lang-te" : ""}`}>
              {isEn
                ? `${BUSINESS.availability} cab service, temple tours & pilgrimage packages — call or WhatsApp us.`
                : `${BUSINESS.availability} క్యాబ్ సేవ, ఆలయ పర్యటనలు & యాత్రా ప్యాకేజీలు — కాల్ చేయండి లేదా WhatsApp చేయండి.`}
            </p>
          </div>
          <div className="akc-blog-cta__actions">
            <Link href={`/${locale}/tour-packages`} className="akc-btn akc-btn--primary akc-btn--lg">
              {isEn ? "View Tour Packages" : "టూర్ ప్యాకేజీలు చూడండి"}
            </Link>
            <Link href={`/${locale}/contact`} className="akc-btn akc-btn--outline akc-btn--lg">
              {isEn ? "Contact Us" : "సంప్రదించండి"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
