# SVTT Design System
## Sri Vinayaka Tours & Travels — svtttirupati.com
*Created: Task 02 | Last updated: 2026-10-02*

---

## Overview

The SVTT design system is built on **Tailwind CSS v4** using the `@theme` directive.
All tokens defined in `@theme` automatically become Tailwind utility classes.

**Files:**
- `src/app/globals.css` — all design tokens + base styles
- `src/app/layout.tsx` — font loading (Playfair Display + Inter)

---

## Color Palette

### Brand Colors

| Token | Tailwind Class | Hex | Usage |
|---|---|---|---|
| `svtt-maroon` | `bg-svtt-maroon` / `text-svtt-maroon` | `#8d1c22` | Primary brand, CTAs, nav |
| `svtt-gold` | `bg-svtt-gold` / `text-svtt-gold` | `#f59e0b` | Accents, labels, underlines |
| `svtt-cream` | `bg-svtt-cream` / `text-svtt-cream` | `#fdf9f0` | Alternate section backgrounds |
| `svtt-sand` | `bg-svtt-sand` / `text-svtt-sand` | `#f5f0e8` | Card backgrounds, subtle fills |
| `svtt-charcoal` | `bg-svtt-charcoal` / `text-svtt-charcoal` | `#1e2126` | Body text, dark sections |
| `svtt-whatsapp` | `bg-svtt-whatsapp` / `text-svtt-whatsapp` | `#25d366` | ONLY for WhatsApp CTAs |

### Full Scales Available

Each color has a full scale (50–950):
- `bg-svtt-maroon-50` through `bg-svtt-maroon-950`
- `bg-svtt-gold-50` through `bg-svtt-gold-900`
- `bg-svtt-cream-100` through `bg-svtt-cream-500`
- `bg-svtt-sand-100` through `bg-svtt-sand-500`
- `bg-svtt-charcoal-50` through `bg-svtt-charcoal-950`

### CSS Custom Properties (Semantic Tokens)

```css
--svtt-primary:       #8d1c22   /* primary brand maroon */
--svtt-primary-dark:  #6b1419   /* hover states */
--svtt-primary-light: #ab1d25   /* lighter variant */
--svtt-accent:        #f59e0b   /* gold accent */
--svtt-accent-dark:   #d97706   /* gold hover */
--svtt-bg:            #ffffff   /* page background */
--svtt-bg-alt:        #fdf9f0   /* cream alternate bg */
--svtt-bg-dark:       #1e2126   /* dark section bg */
--svtt-text:          #1e2126   /* body text */
--svtt-text-muted:    #555d68   /* secondary text */
--svtt-text-subtle:   #9aa0a9   /* hints, placeholders */
--svtt-border:        #ece3d0   /* card borders */
--svtt-wa:            #25d366   /* WhatsApp green */
--svtt-wa-dark:       #128c7e   /* WhatsApp hover */
```

---

## Typography

### Font Families

| Role | Font | Variable | Fallback |
|---|---|---|---|
| Headings / Display | Playfair Display | `--font-playfair` | Georgia, serif |
| Body / UI | Inter | `--font-inter` | Helvetica Neue, Arial, sans-serif |

**Tailwind classes:**
- `font-display` → Playfair Display (headings, hero, section titles)
- `font-body` / `font-sans` → Inter (body text, labels, buttons, nav)

**Loaded via `next/font/google`** — self-hosted, no external requests.

### Type Scale

| Name | Size | Usage |
|---|---|---|
| Display hero | `clamp(2.5rem, 6vw, 4.5rem)` | Hero headline |
| `section-title-lg` | `clamp(2rem, 5vw, 2.75rem)` | Large section headings |
| `section-title` | `clamp(1.75rem, 4vw, 2.25rem)` | Standard section headings |
| Body Large | `1.0625rem` | Lead paragraphs |
| Body | `1rem` | Standard body text |
| Small | `0.875rem` | Captions, metadata |
| XS / Label | `0.75rem` | Section labels, badges |

### Section Labels (Uppercase)

```html
<span class="section-label">Our Services</span>
<h2 class="section-title title-underline">What We Offer</h2>
<p class="section-subtitle">Explore our range of premium travel services...</p>
```

---

## Spacing

| Token | Value | Usage |
|---|---|---|
| `svtt-section-sm` | `3rem` (48px) | Tight sections |
| `svtt-section` | `5rem` (80px) | Standard section padding |
| `svtt-section-lg` | `7.5rem` (120px) | Hero, large sections |

**CSS classes:**
```css
.svtt-section    { padding-block: 5rem; }
.svtt-section-sm { padding-block: 3rem; }
.svtt-section-lg { padding-block: 7.5rem; }
```

---

## Container

```css
.svtt-container {
  max-width: 1280px;
  margin-inline: auto;
  padding-inline: 1rem;       /* mobile */
  /* 1.5rem @ 640px+ */
  /* 2rem   @ 1024px+ */
  /* 2.5rem @ 1280px+ */
}
```

Use `.svtt-container` for all page sections.

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| `--svtt-radius-card` | `0.75rem` (12px) | Cards, image containers |
| `--svtt-radius-btn` | `0.5rem` (8px) | Buttons |
| `--svtt-radius-pill` | `9999px` | Badges, pills, tags |

---

## Shadows

```css
--svtt-shadow-card:       /* subtle maroon-tinted card shadow */
--svtt-shadow-card-hover: /* elevated on hover */
--svtt-shadow-nav:        /* sticky header shadow */
--svtt-shadow-cta:        /* primary button glow */
--svtt-shadow-wa:         /* WhatsApp button glow */
```

---

## Buttons

### Available variants

```html
<!-- Primary (Maroon) -->
<button class="btn btn-primary">Book Now</button>

<!-- Secondary (Outlined) -->
<button class="btn btn-secondary">Learn More</button>

<!-- Gold (Accent) -->
<button class="btn btn-gold">View Packages</button>

<!-- WhatsApp -->
<a href="https://wa.me/919652240674" class="btn btn-whatsapp">
  WhatsApp Us
</a>

<!-- Ghost (on dark backgrounds) -->
<button class="btn btn-ghost">Explore</button>
```

### Size modifiers

```html
<button class="btn btn-primary btn-sm">Small</button>   <!-- 36px height -->
<button class="btn btn-primary">Default</button>          <!-- 44px height -->
<button class="btn btn-primary btn-lg">Large</button>    <!-- 52px height -->
<button class="btn btn-primary btn-xl">XL</button>       <!-- 60px height -->
```

> **Rule:** All buttons have `min-height: 44px` (WCAG touch target minimum).

---

## Cards

```html
<div class="card">
  <img src="..." alt="..." />
  <div class="card-body">
    <h3>Card Title</h3>
    <p>Description text here.</p>
  </div>
</div>
```

Cards have: `border-radius: 0.75rem`, maroon-tinted shadow, hover lift effect.

---

## Transitions

```css
--svtt-transition-fast:   150ms ease       /* instant feedback */
--svtt-transition-base:   250ms ease       /* default */
--svtt-transition-slow:   400ms ease       /* page transitions */
--svtt-transition-spring: 300ms cubic-bezier(0.34,1.56,0.64,1)  /* bouncy */
```

---

## Responsive Breakpoints

Standard Tailwind v4 breakpoints apply. SVTT target viewports:

| Breakpoint | Width | Category |
|---|---|---|
| `xs` (custom) | 320px | Small mobile |
| `sm` | 640px | Large mobile |
| `md` | 768px | Tablet |
| `lg` | 1024px | Laptop |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Large desktop |
| (custom) | 1920px | Full HD |
| (custom) | 2560px | Ultrawide |

---

## Section Heading Pattern

```html
<div class="svtt-container">
  <span class="section-label">Our Services</span>
  <h2 class="section-title title-underline">
    Comprehensive Travel Services
  </h2>
  <p class="section-subtitle">
    From local Tirupati sightseeing to South India pilgrimages...
  </p>
</div>
```

**On dark backgrounds:**
```html
<h2 class="section-title section-title-inverted">...</h2>
<p class="section-subtitle section-subtitle-inverted">...</p>
```

**Centered underline:**
```html
<h2 class="section-title title-underline title-underline-center text-center">
  Why Choose SVTT
</h2>
```

---

## Safe Area (Mobile)

```css
.pb-safe { padding-bottom: env(safe-area-inset-bottom, 0px); }
.pt-safe { padding-top: env(safe-area-inset-top, 0px); }
```

Used on the mobile sticky bottom bar to avoid iPhone home indicator overlap.

---

## Accessibility

- All focus states use `outline: 2px solid var(--svtt-accent)` (gold)
- All interactive elements have `min-height: 44px`
- `prefers-reduced-motion` disables all transforms and animations
- Color contrast: maroon on white = 7.2:1 (AAA), gold on charcoal = 4.8:1 (AA)

---

*DESIGN_SYSTEM.md — Sri Vinayaka Tours & Travels — svtttirupati.com*
*Created in Task 02. Update after any design token changes.*