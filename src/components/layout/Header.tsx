"use client";
/**
 * Akshaya Cabs – Header & Desktop Navigation
 * src/components/layout/Header.tsx
 *
 * TASK 08: Original design — no SVTT classes or structure.
 * Features:
 *  - Sticky header with scroll shadow
 *  - Desktop nav with active-state underline indicator
 *  - Mobile hamburger → slide-in right drawer
 *  - EN/TE language switcher (pill) in both header and drawer
 *  - Skip-to-main link (accessibility)
 *  - Keyboard trap inside drawer (Escape to close)
 *  - Body scroll lock when drawer is open
 *  - Both locales: labels, aria-labels, WhatsApp messages
 */

import {
  useState,
  useEffect,
  useCallback,
  useRef,
  startTransition,
} from "react";
import Link from "next/link";
import LogoMark from "@/components/ui/LogoMark";
import { usePathname } from "next/navigation";
import { BUSINESS } from "@/data/business";
import { primaryWhatsAppUrl } from "@/lib/whatsapp";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import type { Locale } from "@/i18n/config";
import { stripLocale } from "@/i18n/config";

// ─── Nav link definitions ────────────────────────────────────────────────────
// path is locale-relative (e.g. /about → becomes /en/about or /te/about)

const NAV = [
  { path: "/",              en: "Home",            te: "హోమ్" },
  { path: "/services",      en: "Services",        te: "సేవలు" },
  { path: "/tour-packages", en: "Tour Packages",   te: "టూర్ ప్యాకేజీలు" },
  { path: "/fleet",         en: "Fleet",           te: "వాహనాలు" },
  { path: "/pickup-drop",   en: "Pickup & Drop",   te: "పికప్ & డ్రాప్" },
  { path: "/about",         en: "About",           te: "మా గురించి" },
  { path: "/contact",       en: "Contact",         te: "సంప్రదించండి" },
] as const;

// Extra links only shown in mobile drawer
const DRAWER_EXTRA = [
  { path: "/routes",          en: "Popular Routes",   te: "ప్రసిద్ధ మార్గాలు" },
  { path: "/blog",            en: "Travel Guides",    te: "ట్రావెల్ గైడ్స్" },
  { path: "/why-choose-us",   en: "Why Choose Us",    te: "మమ్మల్ని ఎందుకు ఎంచుకోవాలి" },
  { path: "/request-a-quote", en: "Request a Quote",  te: "కోటేషన్ అడగండి" },
] as const;

// ─── Icons ───────────────────────────────────────────────────────────────────

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.93 19.79 19.79 0 010 .28 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

// ─── Nav link component ───────────────────────────────────────────────────────

interface NavLinkProps {
  href: string;
  label: string;
  localeStripped: string;
  className?: string;
  onClick?: () => void;
}

function NavLink({ href, label, localeStripped, className = "", onClick }: NavLinkProps) {
  // Strip locale from href for comparison: /en/about → /about
  const pathPart = href.replace(/^\/(en|te)/, "") || "/";
  const isHome = pathPart === "/";
  const isActive = isHome
    ? localeStripped === "/"
    : localeStripped.startsWith(pathPart);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${className}${isActive ? (className.includes("drawer") ? " akc-drawer__nav-link--active" : " akc-nav-link--active") : ""}`}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

// ─── Header Component ─────────────────────────────────────────────────────────

interface HeaderProps {
  locale: Locale;
}

export default function Header({ locale }: HeaderProps) {
  const pathname = usePathname();
  const localeStripped = stripLocale(pathname);

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const drawerRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  const isTe = locale === "te";
  const prefix = `/${locale}`;

  // Build locale-prefixed nav links
  const navLinks = NAV.map((item) => ({
    href: item.path === "/" ? prefix : `${prefix}${item.path}`,
    label: isTe ? item.te : item.en,
    path: item.path,
  }));

  const extraLinks = DRAWER_EXTRA.map((item) => ({
    href: `${prefix}${item.path}`,
    label: isTe ? item.te : item.en,
    path: item.path,
  }));

  // Contact
  const callHref = BUSINESS.phone.primaryTel;
  const phoneDisplay = BUSINESS.phone.primaryDisplay;
  const waUrl = primaryWhatsAppUrl(
    isTe
      ? `నమస్కారం! అక్షయ క్యాబ్స్ సేవల గురించి విచారించాలనుకుంటున్నాను.`
      : `Hello! I'd like to enquire about Akshaya Cabs.`
  );

  // Scroll handler
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    startTransition(() => setMenuOpen(false));
  }, [pathname]);

  // Body scroll lock when drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Keyboard: Escape closes drawer
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuBtnRef.current?.focus();
      }
    },
    [menuOpen]
  );

  // Outside click closes drawer
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(e.target as Node) &&
        menuBtnRef.current &&
        !menuBtnRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  return (
    <>
      {/* Skip-to-main link */}
      <a href="#main-content" className="akc-skip-link">
        {isTe ? "ముఖ్య కంటెంట్‌కు దాటవేయండి" : "Skip to main content"}
      </a>

      {/* ── Sticky Header ── */}
      <header
        className={`akc-header${scrolled ? " akc-header--scrolled" : ""}`}
        role="banner"
      >
        <div className="akc-header__inner">

          {/* Logo */}
          <Link
            href={prefix}
            className="akc-header__logo-link"
            aria-label={`${BUSINESS.name} – ${isTe ? "హోమ్" : "Home"}`}
          >
            <LogoMark variant="light" height={40} className="akc-header__logo" />
          </Link>

          {/* Desktop nav */}
          <nav className="akc-header__nav" aria-label={isTe ? "ప్రధాన నావిగేషన్" : "Main navigation"}>
            <ul className="akc-header__nav-list" role="list">
              {navLinks.map((link) => (
                <li key={link.href} role="listitem">
                  <NavLink
                    href={link.href}
                    label={link.label}
                    localeStripped={localeStripped}
                    className="akc-nav-link"
                  />
                </li>
              ))}
            </ul>
          </nav>

          {/* Right actions */}
          <div className="akc-header__actions">
            {/* Language switcher — all viewports */}
            <div className="akc-header__lang">
              <LanguageSwitcher
                currentLocale={locale}
                ariaLabel={isTe ? "భాష మార్చుకోండి" : "Switch language"}
              />
            </div>

            {/* WhatsApp — desktop */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="akc-header__wa"
              aria-label={isTe ? "వాట్సాప్‌లో సంప్రదించండి" : "Chat on WhatsApp"}
            >
              <WhatsAppIcon />
              {isTe ? "వాట్సాప్" : "WhatsApp"}
            </a>

            {/* Book CTA — desktop */}
            <Link
              href={`${prefix}/contact`}
              className="akc-header__book-btn"
            >
              {isTe ? "క్యాబ్ బుక్ చేయండి" : "Book a Cab"}
            </Link>

            {/* Hamburger — mobile */}
            <button
              ref={menuBtnRef}
              className={`akc-hamburger${menuOpen ? " akc-hamburger--open" : ""}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="akc-mobile-drawer"
              aria-label={
                menuOpen
                  ? (isTe ? "నావిగేషన్ మెనూ మూయండి" : "Close navigation menu")
                  : (isTe ? "నావిగేషన్ మెనూ తెరవండి" : "Open navigation menu")
              }
            >
              <span className="akc-hamburger__bar" aria-hidden="true" />
              <span className="akc-hamburger__bar" aria-hidden="true" />
              <span className="akc-hamburger__bar" aria-hidden="true" />
            </button>
          </div>

        </div>
      </header>

      {/* ── Mobile overlay ── */}
      {menuOpen && (
        <div
          className="akc-overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Mobile drawer ── */}
      <div
        id="akc-mobile-drawer"
        ref={drawerRef}
        className={`akc-drawer${menuOpen ? " akc-drawer--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={isTe ? "నావిగేషన్ మెనూ" : "Navigation menu"}
        onKeyDown={handleKeyDown}
        tabIndex={-1}
      >
        {/* Drawer header */}
        <div className="akc-drawer__header">
          <Link
            href={prefix}
            onClick={() => setMenuOpen(false)}
            aria-label={`${BUSINESS.name} – ${isTe ? "హోమ్" : "Home"}`}
          >
            <LogoMark variant="light" height={36} className="akc-drawer__logo" />
          </Link>
          <button
            className="akc-drawer__close"
            onClick={() => { setMenuOpen(false); menuBtnRef.current?.focus(); }}
            aria-label={isTe ? "మెనూ మూయండి" : "Close menu"}
          >
            <CloseIcon />
          </button>
        </div>

        {/* Language switcher */}
        <div className="akc-drawer__lang">
          <LanguageSwitcher
            currentLocale={locale}
            ariaLabel={isTe ? "భాష మార్చుకోండి" : "Switch language"}
          />
        </div>

        {/* Primary nav */}
        <nav className="akc-drawer__nav" aria-label={isTe ? "మొబైల్ నావిగేషన్" : "Mobile navigation"}>
          <ul role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  href={link.href}
                  label={link.label}
                  localeStripped={localeStripped}
                  className="akc-drawer__nav-link"
                  onClick={() => setMenuOpen(false)}
                />
              </li>
            ))}
          </ul>

          <div className="akc-drawer__divider" />
          <p className="akc-drawer__section-title" aria-hidden="true">
            {isTe ? "మరిన్ని" : "More"}
          </p>

          <ul role="list">
            {extraLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  href={link.href}
                  label={link.label}
                  localeStripped={localeStripped}
                  className="akc-drawer__nav-link"
                  onClick={() => setMenuOpen(false)}
                />
              </li>
            ))}
          </ul>
        </nav>

        {/* Drawer CTAs */}
        <div className="akc-drawer__ctas">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="akc-drawer__cta-wa"
            onClick={() => setMenuOpen(false)}
            aria-label={isTe ? "వాట్సాప్‌లో సంప్రదించండి" : "Chat on WhatsApp"}
          >
            <WhatsAppIcon size={18} />
            {isTe ? "వాట్సాప్ చేయండి" : "WhatsApp Us"}
          </a>
          <a
            href={callHref}
            className="akc-drawer__cta-call"
            onClick={() => setMenuOpen(false)}
            aria-label={`${isTe ? "కాల్ చేయండి" : "Call"} ${phoneDisplay}`}
          >
            <PhoneIcon />
            {phoneDisplay}
          </a>
        </div>

        {/* Address */}
        <div className="akc-drawer__address">
          <p>📍 {BUSINESS.address.city}, {BUSINESS.address.stateCode} — {isTe ? "24/7 అందుబాటులో" : "Available 24/7"}</p>
        </div>
      </div>
    </>
  );
}