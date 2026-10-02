// SVTT Global Footer
// Sri Vinayaka Tours & Travels — svtttirupati.com
// Task 05: Full footer with 5 columns + legal bar

import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/data/business";
import { SOCIAL_LINKS } from "@/data/social";
import { primaryWhatsAppUrl } from "@/lib/whatsapp";

// ── Column data ───────────────────────────────────────────────

const PACKAGE_LINKS = [
  { href: "/tour-packages/tirupati-tirumala-local-temples",         label: "Tirupati & Tirumala" },
  { href: "/tour-packages/tirumala-kanipakam-padmavathi",           label: "Tirumala & Kanipakam" },
  { href: "/tour-packages/tirumala-srikalahasti-padmavathi",        label: "Tirumala & Sri Kalahasti" },
  { href: "/tour-packages/kanipakam-golden-temple-arunachalam",     label: "Golden Temple Tour" },
  { href: "/tour-packages/kanipakam-golden-temple-arunachalam-tiruthani", label: "2-Day Pilgrimage" },
  { href: "/tour-packages",                                          label: "All 10 Packages →" },
] as const;

const SERVICE_LINKS = [
  { href: "/services/local-cab-services",         label: "Local Cab Services" },
  { href: "/services/tirumala-taxi-services",     label: "Tirumala Taxi" },
  { href: "/services/temple-tour-packages",       label: "Temple Tours" },
  { href: "/services/outstation-cab-services",    label: "Outstation Cabs" },
  { href: "/services/airport-pickup-drop",        label: "Airport Transfers" },
  { href: "/services/tempo-traveller-rental",     label: "Tempo Traveller" },
  { href: "/services/south-india-pilgrimage-tours", label: "South India Pilgrimage" },
] as const;

// ── Social icon components ────────────────────────────────────

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

const SOCIAL_ICON_MAP: Record<string, React.FC> = {
  instagram: InstagramIcon,
  facebook:  FacebookIcon,
  twitter:   TwitterIcon,
};

// ── Footer Component ──────────────────────────────────────────

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const waUrl = primaryWhatsAppUrl();

  return (
    <footer className="svtt-footer" role="contentinfo" aria-label="Site footer">

      {/* ── Pre-footer CTA strip ── */}
      <div className="svtt-footer__prefooter">
        <div className="svtt-container svtt-footer__prefooter-inner">
          <div className="svtt-footer__prefooter-text">
            <p className="svtt-footer__prefooter-label">Ready to Book?</p>
            <p className="svtt-footer__prefooter-sub">
              Available {BUSINESS.availability} — call, WhatsApp, or request a quote.
            </p>
          </div>
          <div className="svtt-footer__prefooter-btns">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
              aria-label="WhatsApp Sri Vinayaka Tours & Travels"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href={BUSINESS.phone.primaryTel}
              className="btn btn-primary btn-sm"
              aria-label={`Call ${BUSINESS.phone.primaryDisplay}`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.93 19.79 19.79 0 01.01 .28 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              {BUSINESS.phone.primaryDisplay}
            </a>
            <a
              href="/request-a-quote"
              className="btn btn-gold btn-sm"
              aria-label="Request a cab or tour quote"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div className="svtt-container svtt-footer__grid">

        {/* Column 1 — Brand */}
        <div className="svtt-footer__col svtt-footer__col--brand">
          <Link href="/" aria-label="Sri Vinayaka Tours & Travels — Home">
            <Image
              src="/images/logo/svtt-logo-light.svg"
              alt="Sri Vinayaka Tours & Travels"
              width={160}
              height={52}
              className="svtt-footer__logo"
              unoptimized
            />
          </Link>
          <p className="svtt-footer__tagline">{BUSINESS.tagline}</p>

          {/* Social links */}
          <div className="svtt-footer__social" aria-label="Social media links">
            {SOCIAL_LINKS.map((s) => {
              const Icon = SOCIAL_ICON_MAP[s.icon];
              return (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="svtt-footer__social-link"
                  aria-label={`Follow us on ${s.name}`}
                >
                  {Icon ? <Icon /> : null}
                </a>
              );
            })}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="svtt-footer__social-link svtt-footer__social-link--wa"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon />
            </a>
          </div>

          {/* Google rating badge */}
          <div className="svtt-footer__rating" aria-label="Google rating">
            <span className="svtt-footer__stars" aria-hidden="true">★★★★★</span>
            <span className="svtt-footer__rating-text">
              {BUSINESS.google.rating} on Google
            </span>
          </div>
        </div>

        {/* Column 2 — Tour Packages */}
        <div className="svtt-footer__col">
          <h3 className="svtt-footer__heading">Tour Packages</h3>
          <ul role="list" className="svtt-footer__links">
            {PACKAGE_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="svtt-footer__link">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Services */}
        <div className="svtt-footer__col">
          <h3 className="svtt-footer__heading">Our Services</h3>
          <ul role="list" className="svtt-footer__links">
            {SERVICE_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="svtt-footer__link">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Quick Links */}
        <div className="svtt-footer__col">
          <h3 className="svtt-footer__heading">Quick Links</h3>
          <ul role="list" className="svtt-footer__links">
            <li><Link href="/about"          className="svtt-footer__link">About Us</Link></li>
            <li><Link href="/fleet"          className="svtt-footer__link">Our Fleet</Link></li>
            <li><Link href="/reviews"        className="svtt-footer__link">Reviews</Link></li>
            <li><Link href="/blog"           className="svtt-footer__link">Travel Blog</Link></li>
            <li><Link href="/pickup-drop"    className="svtt-footer__link">Pickup & Drop</Link></li>
            <li><Link href="/request-a-quote" className="svtt-footer__link">Request a Quote</Link></li>
            <li><Link href="/contact"        className="svtt-footer__link">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 5 — Contact */}
        <div className="svtt-footer__col svtt-footer__col--contact">
          <h3 className="svtt-footer__heading">Contact Us</h3>
          <address className="svtt-footer__address">

            {/* Phone — Primary */}
            <div className="svtt-footer__contact-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.93 19.79 19.79 0 01.01 .28 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <a href={BUSINESS.phone.primaryTel} className="svtt-footer__contact-link">
                {BUSINESS.phone.primaryDisplay}
              </a>
            </div>

            {/* Phone — Secondary */}
            <div className="svtt-footer__contact-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.93 19.79 19.79 0 01.01 .28 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <a href={BUSINESS.phone.secondaryTel} className="svtt-footer__contact-link">
                {BUSINESS.phone.secondaryDisplay}
              </a>
            </div>

            {/* WhatsApp */}
            <div className="svtt-footer__contact-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="svtt-footer__contact-link svtt-footer__contact-link--wa">
                WhatsApp Us
              </a>
            </div>

            {/* Email */}
            <div className="svtt-footer__contact-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              <a href={BUSINESS.emailHref} className="svtt-footer__contact-link">
                {BUSINESS.email}
              </a>
            </div>

            {/* Address */}
            <div className="svtt-footer__contact-item svtt-footer__contact-item--address">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink: 0, marginTop: "3px"}}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <a href={BUSINESS.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="svtt-footer__contact-link">
                {BUSINESS.address.line1}, {BUSINESS.address.line2},<br />
                {BUSINESS.address.city}, {BUSINESS.address.stateCode} {BUSINESS.address.pincode}
              </a>
            </div>

            {/* Availability badge */}
            <div className="svtt-footer__availability">
              <span className="svtt-footer__avail-dot" aria-hidden="true" />
              Available {BUSINESS.availability}
            </div>
          </address>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="svtt-footer__divider" />

      {/* ── Legal bar ── */}
      <div className="svtt-container svtt-footer__legal">
        <p className="svtt-footer__copyright">
          &copy; {currentYear} {BUSINESS.name}. All rights reserved.
        </p>
        <p className="svtt-footer__pricing-note">
          {BUSINESS.pricingNote}
        </p>
        <nav aria-label="Legal links" className="svtt-footer__legal-links">
          <Link href="/privacy-policy"     className="svtt-footer__legal-link">Privacy Policy</Link>
          <span aria-hidden="true">·</span>
          <Link href="/terms-and-conditions" className="svtt-footer__legal-link">Terms & Conditions</Link>
        </nav>
      </div>

    </footer>
  );
}