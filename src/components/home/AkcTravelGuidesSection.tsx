/**
 * Akshaya Cabs — AkcTravelGuidesSection (TASK-12)
 * "Selected helpful travel-guide links" from the blog.
 * Only shows PUBLISHED blog posts (contentStatus gate enforced).
 * Server Component. Locale-aware.
 * No .svtt-* class names.
 */

import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";
import type { Locale } from "@/i18n/config";

interface Props { locale: Locale; }

export default function AkcTravelGuidesSection({ locale }: Props) {
  const isEn = locale === "en";

  // Only show published articles (contentStatus === "published").
  // If none are published yet, hide the entire section gracefully.
  const published = BLOG_POSTS.filter((p) => p.contentStatus === "published").slice(0, 3);

  // If no articles published yet, show the "guides coming soon" placeholder
  // (still renders the section so layout doesn't jump when articles go live)
  const hasPosts = published.length > 0;

  return (
    <section className="akc-section akc-travel-guides" aria-labelledby="guides-heading">
      <div className="akc-container">

        {/* ── Header ── */}
        <div className="akc-section-header akc-section-header--center">
          <p className="akc-section-label">{isEn ? "Travel Resources" : "ట్రావెల్ రిసోర్సెస్"}</p>
          <h2 id="guides-heading" className="akc-section-title">
            {isEn ? "Tirupati Travel Guides" : "తిరుపతి ట్రావెల్ గైడ్స్"}
          </h2>
          <p className="akc-section-subtitle">
            {isEn
              ? "Practical guides to help you plan your pilgrimage — darshan tips, route advice, and temple information."
              : "మీ యాత్రను ప్లాన్ చేయడానికి ఆచరణాత్మక గైడ్లు — దర్శన చిట్కాలు, మార్గ సలహా మరియు ఆలయ సమాచారం."}
          </p>
        </div>

        {hasPosts ? (
          <>
            {/* ── Published article cards ── */}
            <ul role="list" className="akc-guides__grid">
              {published.map((post) => (
                <li key={post.id} className="akc-guides__card">
                  <Link href={`/${locale}/blog/${post.slug}`} className="akc-guides__link">
                    <div className="akc-guides__img-wrap">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="akc-guides__img"
                      />
                    </div>
                    <div className="akc-guides__body">
                      <div className="akc-guides__meta">
                        <span className="akc-guides__category">{post.category}</span>
                        <span className="akc-guides__reading-time">{post.readingTime}</span>
                      </div>
                      <h3 className="akc-guides__title">{post.title}</h3>
                      <p className="akc-guides__excerpt">{post.excerpt}</p>
                      <span className="akc-guides__read-more" aria-hidden="true">
                        {isEn ? "Read guide →" : "గైడ్ చదవండి →"}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="akc-section-cta akc-section-cta--center">
              <Link href={`/${locale}/blog`} className="akc-btn akc-btn--secondary">
                {isEn ? "View All Travel Guides" : "అన్ని ట్రావెల్ గైడ్లు చూడండి"}
              </Link>
            </div>
          </>
        ) : (
          /* ── Coming-soon placeholder (no published posts yet) ── */
          <div className="akc-guides__coming-soon">
            <div className="akc-guides__coming-icon" aria-hidden="true">📚</div>
            <p className={`akc-guides__coming-text${locale === "te" ? " lang-te" : ""}`}>
              {isEn
                ? "Detailed Tirupati pilgrimage guides are coming soon — covering darshan types, ghat road tips, and South India temple routes."
                : "వివరణాత్మక తిరుపతి యాత్రా గైడ్లు త్వరలో వస్తాయి — దర్శన రకాలు, ఘాట్ రోడ్ చిట్కాలు మరియు దక్షిణ భారత ఆలయ మార్గాలు."}
            </p>
            <Link href={`/${locale}/blog`} className="akc-btn akc-btn--ghost">
              {isEn ? "Visit Blog" : "బ్లాగ్ సందర్శించండి"}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
