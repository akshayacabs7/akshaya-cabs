// SVTT Homepage Hero Section
// Sri Vinayaka Tours & Travels — svtttirupati.com
// Task 06: Full-screen hero with real images, CTAs, trust badges, scroll indicator

import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/data/business";
import { primaryWhatsAppUrl } from "@/lib/whatsapp";

export default function HeroSection() {
  const waUrl = primaryWhatsAppUrl(
    "Hello Sri Vinayaka Tours & Travels!\n\nI came from your website and would like to enquire about your cab/tour services.\n\nPlease share availability and pricing. Thank you!"
  );

  return (
    <section
      className="svtt-hero"
      aria-label="Hero — Sri Vinayaka Tours & Travels"
      id="hero"
    >
      {/* ── Background Image ── */}
      <div className="svtt-hero__bg" aria-hidden="true">
        <Image
          src="/images/hero/hero-desktop.webp"
          alt="Tirumala hills — Sri Vinayaka Tours & Travels"
          fill
          priority
          quality={90}
          className="svtt-hero__bg-img svtt-hero__bg-img--desktop"
          sizes="100vw"
        />
        <Image
          src="/images/hero/hero-mobile.webp"
          alt="Tirumala hills — Sri Vinayaka Tours & Travels"
          fill
          priority
          quality={85}
          className="svtt-hero__bg-img svtt-hero__bg-img--mobile"
          sizes="100vw"
        />
        <div className="svtt-hero__overlay" aria-hidden="true" />
      </div>

      {/* ── Content ── */}
      <div className="svtt-container svtt-hero__content">

        <div className="svtt-hero__eyebrow">
          <span className="svtt-hero__eyebrow-dot" aria-hidden="true" />
          Tirupati&apos;s Trusted Travel Partner
        </div>

        <h1 className="svtt-hero__heading">
          Sacred Journeys,{" "}
          <span className="svtt-hero__heading-accent">Seamless Travel</span>
        </h1>

        <p className="svtt-hero__subheading">
          Cab services &amp; temple tour packages from Tirupati — covering Tirumala,
          South India pilgrimages, airport transfers &amp; outstation trips.{" "}
          <strong>Available {BUSINESS.availability}.</strong>
        </p>

        <div className="svtt-hero__ctas">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg"
            aria-label="Book now via WhatsApp"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Book on WhatsApp
          </a>
          <Link href="/tour-packages" className="btn btn-ghost btn-lg svtt-hero__pkg-btn">
            View All Packages
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>

        {/* Trust badges — TASK-11 will redesign this hero fully */}
        <div className="svtt-hero__badges" role="list" aria-label="Trust indicators">
          <div className="svtt-hero__badge" role="listitem">
            <span className="svtt-hero__badge-icon" aria-hidden="true">📍</span>
            <div>
              <strong className="svtt-hero__badge-value">Tirupati</strong>
              <span className="svtt-hero__badge-label">Based & Trusted</span>
            </div>
          </div>
          <div className="svtt-hero__badge-divider" aria-hidden="true" />
          <div className="svtt-hero__badge" role="listitem">
            <span className="svtt-hero__badge-icon" aria-hidden="true">🕐</span>
            <div>
              <strong className="svtt-hero__badge-value">24 / 7</strong>
              <span className="svtt-hero__badge-label">Available Always</span>
            </div>
          </div>
          <div className="svtt-hero__badge-divider" aria-hidden="true" />
          <div className="svtt-hero__badge" role="listitem">
            <span className="svtt-hero__badge-icon" aria-hidden="true">🚗</span>
            <div>
              <strong className="svtt-hero__badge-value">7 Vehicles</strong>
              <span className="svtt-hero__badge-label">Fleet Options</span>
            </div>
          </div>
          <div className="svtt-hero__badge-divider" aria-hidden="true" />
          <div className="svtt-hero__badge" role="listitem">
            <span className="svtt-hero__badge-icon" aria-hidden="true">🛕</span>
            <div>
              <strong className="svtt-hero__badge-value">10 Packages</strong>
              <span className="svtt-hero__badge-label">Temple Tours</span>
            </div>
          </div>
        </div>

        {/* Phone quick-dial */}
        <div className="svtt-hero__phone">
          <a href={BUSINESS.phone.primaryTel} className="svtt-hero__phone-link" aria-label={`Call ${BUSINESS.phone.primaryDisplay}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.93 19.79 19.79 0 01.01 .28 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Call {BUSINESS.phone.primaryDisplay}
          </a>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="svtt-hero__scroll" aria-hidden="true">
        <span className="svtt-hero__scroll-line" />
        <span className="svtt-hero__scroll-text">Scroll</span>
      </div>
    </section>
  );
}