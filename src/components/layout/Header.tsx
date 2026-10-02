"use client";
// SVTT Global Header & Navigation
// Sri Vinayaka Tours & Travels — svtttirupati.com
// Task 04: Desktop sticky nav + Mobile hamburger drawer
// Uses: BUSINESS data, primaryWhatsAppUrl(), next/link, usePathname()

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BUSINESS } from "@/data/business";
import { primaryWhatsAppUrl } from "@/lib/whatsapp";

// ── Nav Links ─────────────────────────────────────────────────

// ── Nav Links — blueprint order: Home, Services, Tour Packages, Fleet, Pickup & Drop, About, Contact
// Reviews and Blog accessible via footer; too many items for desktop primary nav

const NAV_LINKS = [
  { href: "/",              label: "Home" },
  { href: "/services",      label: "Services" },
  { href: "/tour-packages", label: "Tour Packages" },
  { href: "/fleet",         label: "Fleet" },
  { href: "/pickup-drop",   label: "Pickup & Drop" },
  { href: "/about",         label: "About" },
  { href: "/contact",       label: "Contact" },
] as const;

// Extra links shown in mobile drawer only (not cluttering desktop nav)
const DRAWER_EXTRA_LINKS = [
  { href: "/reviews",           label: "Reviews" },
  { href: "/blog",              label: "Blog" },
  { href: "/request-a-quote",   label: "Request a Quote" },
] as const;


// ── Types ─────────────────────────────────────────────────────

interface NavLinkItemProps {
  href: string;
  label: string;
  pathname: string;
  onClick?: () => void;
  className?: string;
}

// ── NavLinkItem ───────────────────────────────────────────────

function NavLinkItem({ href, label, pathname, onClick, className = "" }: NavLinkItemProps) {
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`nav-link ${isActive ? "nav-link--active" : ""} ${className}`}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

// ── Header Component ──────────────────────────────────────────

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Escape key handler
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && menuOpen) {
      setMenuOpen(false);
      menuBtnRef.current?.focus();
    }
  }, [menuOpen]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Focus trap in mobile drawer
  useEffect(() => {
    if (!menuOpen || !drawerRef.current) return;
    const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable.length) return;
    focusable[0].focus();
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", trap);
    return () => document.removeEventListener("keydown", trap);
  }, [menuOpen]);

  const waUrl = primaryWhatsAppUrl();
  const callHref = BUSINESS.phone.primaryTel;
  const phoneDisplay = BUSINESS.phone.primaryDisplay;

  return (
    <>
      <header
        className={`svtt-header ${scrolled ? "svtt-header--scrolled" : ""}`}
        role="banner"
      >
        <div className="svtt-container svtt-header__inner">

          {/* ── Logo ── */}
          <Link href="/" className="svtt-header__logo" aria-label="Sri Vinayaka Tours & Travels — Home">
            <Image
              src="/images/logo/svtt-logo-dark.svg"
              alt="Sri Vinayaka Tours & Travels"
              width={160}
              height={52}
              priority
              className="svtt-header__logo-img"
            />
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="svtt-header__nav" aria-label="Main navigation">
            <ul role="list" className="svtt-header__nav-list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <NavLinkItem href={link.href} label={link.label} pathname={pathname} />
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Desktop CTAs ── */}
          <div className="svtt-header__actions">
            <a
              href="/request-a-quote"
              className="btn btn-ghost svtt-header__quote-btn"
              aria-label="Request a cab or tour quote"
            >
              Get a Quote
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm svtt-header__wa-btn"
              aria-label="Chat on WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href={callHref}
              className="btn btn-primary btn-sm svtt-header__call-btn"
              aria-label={`Call us at ${phoneDisplay}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.93 19.79 19.79 0 01.01 .28 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Call Now
            </a>
          </div>

          {/* ── Hamburger ── */}
          <button
            ref={menuBtnRef}
            className={`svtt-hamburger ${menuOpen ? "svtt-hamburger--open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span className="svtt-hamburger__bar" aria-hidden="true" />
            <span className="svtt-hamburger__bar" aria-hidden="true" />
            <span className="svtt-hamburger__bar" aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* ── Mobile Overlay ── */}
      {menuOpen && (
        <div
          className="svtt-overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Mobile Drawer ── */}
      <div
        id="mobile-menu"
        ref={drawerRef}
        className={`svtt-drawer ${menuOpen ? "svtt-drawer--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div className="svtt-drawer__header">
          <Link href="/" onClick={() => setMenuOpen(false)} aria-label="Home">
            <Image
              src="/images/logo/svtt-logo-dark.svg"
              alt="Sri Vinayaka Tours & Travels"
              width={140}
              height={46}
              className="svtt-drawer__logo"
            />
          </Link>
          <button
            className="svtt-drawer__close"
            onClick={() => { setMenuOpen(false); menuBtnRef.current?.focus(); }}
            aria-label="Close navigation menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Drawer nav */}
        <nav aria-label="Mobile navigation">
          <ul role="list" className="svtt-drawer__nav">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NavLinkItem
                  href={link.href}
                  label={link.label}
                  pathname={pathname}
                  onClick={() => setMenuOpen(false)}
                  className="svtt-drawer__nav-link"
                />
              </li>
            ))}
          </ul>
          {/* Extra drawer links: Reviews, Blog, Request a Quote */}
          <div className="svtt-drawer__extra" aria-label="More pages">
            <p className="svtt-drawer__extra-label">More</p>
            <ul role="list" className="svtt-drawer__nav svtt-drawer__nav--extra">
              {DRAWER_EXTRA_LINKS.map((link) => (
                <li key={link.href}>
                  <NavLinkItem
                    href={link.href}
                    label={link.label}
                    pathname={pathname}
                    onClick={() => setMenuOpen(false)}
                    className="svtt-drawer__nav-link svtt-drawer__nav-link--extra"
                  />
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Drawer CTAs */}
        <div className="svtt-drawer__ctas">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            onClick={() => setMenuOpen(false)}
            aria-label="Chat on WhatsApp"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp Us
          </a>
          <a href={callHref} className="btn btn-primary" onClick={() => setMenuOpen(false)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.93 19.79 19.79 0 01.01 .28 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            {phoneDisplay}
          </a>
        </div>

        {/* Drawer address */}
        <div className="svtt-drawer__address">
          <p className="svtt-drawer__address-text">
            📍 {BUSINESS.address.full}
          </p>
        </div>
      </div>
    </>
  );
}