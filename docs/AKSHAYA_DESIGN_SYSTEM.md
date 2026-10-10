# AKSHAYA CABS — Design System & UX Architecture
## TASK-04 Deliverable — Original UX Strategy, Wireframes & Component Plan

> **Status:** APPROVED — 2026-10-09
> **Read before:** TASK-05 (design tokens), TASK-08 (header/footer), TASK-11 (homepage hero)
> **Do NOT modify this master plan.** Record deviations in `HANDSHAKE.md`.

---

## 1. Design Philosophy

Akshaya Cabs is a **local expert** — a Tirupati-native, founder-operated cab service that knows the ghat roads, the pilgrimage rhythms, and the exact needs of first-time and returning temple visitors. The design must feel like talking to a knowledgeable local friend, not booking through an impersonal aggregator.

### Core UX tenets

| Tenet | Implication |
|---|---|
| **Pilgrimage-first** | Every page should be reachable from "I want to visit Tirumala" with minimal steps |
| **Thumb-first mobile** | Primary actions always within reach of a thumb; critical form fields above fold on 360px |
| **Honest and clear** | No fake ratings, no "instant confirmation" language; enquiry vs. booking is always distinct |
| **Local authority** | Specific distances, named temples, named drivers' expertise — never generic "India travel" copy |
| **Speed over flash** | Micro-animations are meaningful and short; page weight is priority; no heavy JS for decorative purposes |
| **Telugu parity** | Every page in English has an identical Telugu page; no untranslated English bodies under `/te/` routes |

---

## 2. Colour & Typography Baseline (tokens finalized in TASK-05)

| Token | Value | Use |
|---|---|---|
| `--color-navy` | `#102B46` | Primary text, nav background, CTAs |
| `--color-teal` | `#0FAF9D` | Accent, interactive, links, highlights |
| `--color-gold` | `#F2B75C` | Sunrise accent, price highlights, badges |
| `--color-cloud` | `#F6F8FB` | Section backgrounds, card fills |
| `--color-white` | `#FFFFFF` | Surface |
| `--color-text-body` | `#1A2C3D` | Body text |
| `--color-text-subtle` | `#6B7C8F` | Labels, captions, metadata |
| `--font-heading` | Sora | Page/section headings |
| `--font-body` | Manrope | Body, UI labels, forms |
| `--font-telugu` | Noto Sans Telugu | All Telugu content |

---

## 3. Sitemap — Full Route Structure

### 3A. English route tree (`/en/` prefix, default locale)

```
/ (root)
└── /en/
    ├── /en/                           → Homepage
    ├── /en/book-a-cab                 → Trip Enquiry Wizard (new)
    ├── /en/fleet                      → Fleet overview + filters
    ├── /en/tour-packages              → Package listing + filters
    │   └── /en/tour-packages/[slug]   → Package detail
    ├── /en/services                   → Services overview (9 categories)
    │   └── /en/services/[slug]        → Service detail page (TASK-16)
    ├── /en/destinations               → Destination explorer (new, TASK-17)
    ├── /en/pickup-drop                → Airport + station transfers
    ├── /en/request-a-quote            → Full quote form
    ├── /en/contact                    → Contact page
    ├── /en/about                      → About / Founder page
    ├── /en/travel-guides              → Blog index (replaces /blog)
    │   └── /en/travel-guides/[slug]   → Blog article
    ├── /en/reviews                    → "What to Expect" page
    ├── /en/privacy-policy             → Privacy Policy (noIndex)
    └── /en/terms-and-conditions       → Terms & Conditions (noIndex)
```

### 3B. Telugu route tree (`/te/` prefix)

```
/te/
├── /te/                               → Homepage (Telugu)
├── /te/cab-book                       → Trip Enquiry Wizard (Telugu)
├── /te/fleet                          → Fleet (Telugu)
├── /te/tour-packages                  → Packages (Telugu)
│   └── /te/tour-packages/[slug]       → Package detail (Telugu)
├── /te/services                       → Services (Telugu)
├── /te/destinations                   → Destinations (Telugu)
├── /te/pickup-drop                    → Transfers (Telugu)
├── /te/request-a-quote                → Quote form (Telugu)
├── /te/contact                        → Contact (Telugu)
├── /te/about                          → About (Telugu)
└── /te/travel-guides                  → Blog index (Telugu)
    └── /te/travel-guides/[slug]       → Article (Telugu)
```

### 3C. Root redirect behavior

```
/  →  302 to /en/  (permanent after go-live: 301)
/sitemap.xml  →  All published /en/ and /te/ canonical pages
/robots.txt   →  Allow all; sitemap URL = https://akshayacabs.com/sitemap.xml
```

---

## 4. Navigation Architecture

### 4A. Primary desktop nav (>=1024px)

```
+--------------------------------------------------------------------------+
|  [Akshaya Cabs logo]  Book a Cab  Fleet  Tour Packages  Destinations     |
|                       Services    About  Travel Guides  [EN | te]        |
|                                          [Phone 72888 76667]  [WA v]     |
+--------------------------------------------------------------------------+
```

- Logo: left-aligned; links to `/en/`
- Primary links: 5 visible + overflow hidden behind "More" below 1280px
- Language toggle: pill switcher `EN | తె` — switches locale, preserves equivalent route
- Phone CTA: click-to-call, always visible
- WhatsApp dropdown: primary + secondary numbers with label

### 4B. Mobile nav (<=1023px)

```
+----------------------------------------+
|  [Menu]  [Akshaya Cabs logo]  [Phone]  |
+----------------------------------------+
   Drawer opens right-to-left (full height)
+----------------------------------------+
|  X Close                               |
|  Home                                  |
|  Book a Cab            <- primary      |
|  Fleet                                 |
|  Tour Packages                         |
|  Destinations                          |
|  Services                              |
|  About                                 |
|  Travel Guides                         |
|  ----                                  |
|  English | Telugu                      |
|  ----                                  |
|  +91 72888 76667                       |
|  +91 93939 00006                       |
|  WhatsApp                              |
+----------------------------------------+
```

- Drawer: slide-in from right, full height, `role="dialog"`, focus-trap, Escape closes
- No link nesting on mobile — flat list
- Language switcher inside drawer, not top bar (saves space)
- Sticky bottom bar: **Call** | **WhatsApp** | **Book Now** — always visible when not in an active form

### 4C. Sticky bottom booking bar (mobile only)

```
+---------------------------------------------------+
|  [Phone Call]    [WhatsApp]    [Book a Cab]        |
+---------------------------------------------------+
  fixed bottom-0; safe-area-inset-bottom offset;
  hidden on pages with an active booking form step
```

---

## 5. Homepage Architecture

**Design direction:** Search-first → discover → trust → convert
**No SVTT section order.** No hero-then-services-then-testimonials structure.

### 5A. Section order (desktop and mobile)

```
SECTION 1 — CINEMATIC HERO (full viewport ~100vh)
  Full-bleed Tirumala/Tirupati backdrop image
  TRIP SEARCH CARD (glassmorphism, centered on desktop / full-width on mobile)
    Tab strip: [One-Way] [Round Trip] [Local] [Airport] [Temple Tour] [Custom]
    From: [Tirupati] / To: [Destination]
    Date picker (IST, no past dates) / Passengers stepper
    [Get Quote on WhatsApp] CTA
  Sub-text: "Tirupati's trusted cab. Available 24/7."

SECTION 2 — DESTINATION EXPLORER (horizontal scroll strip)
  Heading: "Popular Pilgrimages from Tirupati"
  Scrollable chips: Tirumala / Kanipakam / Sri Kalahasti / Kanchipuram
                    Vellore / Arunachalam / Rameshwaram / Madurai
  Each chip → package filter or destination guide

SECTION 3 — WHY AKSHAYA CABS (3-col desktop / 1-col mobile)
  Experienced Local Drivers | 24/7 Available | Transparent Fares
  Tirumala Expert | Multiple Vehicle Types | Easy WhatsApp Booking
  Short factual bullets only — no invented numbers or ratings

SECTION 4 — FEATURED TOUR PACKAGES (3-up card carousel)
  Heading: "Temple Tour Packages from Tirupati"
  3 featured cards: title / destination chips / from-price / Book CTA
  [View All 10 Packages →]

SECTION 5 — FLEET PREVIEW (vehicle selector strip)
  Heading: "Pick the right vehicle for your group"
  Horizontal strip of vehicle category chips with seat count + per-km rate
  [View Full Fleet →]

SECTION 6 — SERVICES GRID (3x3 on desktop / 3x3 icon grid on mobile)
  9 service cards: name + icon + short description

SECTION 7 — FOUNDER SNIPPET (split layout: photo + text)
  Genuine photo of S.R. Kumar (user-supplied / placeholder until supplied)
  Original story copy — truthful, no invented years or superlatives
  [About Akshaya Cabs →]

SECTION 8 — TRAVEL GUIDES (blog teaser, 3 cards)
  Heading: "Tirupati Travel Guides"
  Only published articles shown — stubs hidden
  [Read All Guides →]

SECTION 9 — BOTTOM BOOKING CTA
  "Ready to plan your Tirupati journey?"
  [Book on WhatsApp] [Call Now] [Request a Quote]
  Address + both phone numbers
```

### 5B. Key mobile layout differences from desktop

- HERO: Search card collapses full-width; tab strip scrolls horizontally; date/pax on separate rows
- DESTINATIONS: Single-row horizontal scroll, 48px min tap targets
- WHY AKSHAYA: Single column stack
- PACKAGES: 1-up visible card with scroll indicator; swipe carousel
- FLEET: 2-column chip grid
- SERVICES: 3-column icon-only grid (label below icon)
- FOUNDER: Photo above text (stacked)
- GUIDES: 1-up card visible + horizontal scroll

---

## 6. Page Wireframes — Key Pages

### 6A. Book a Cab (/en/book-a-cab) — NEW PAGE

**Step 1 — Trip type + route**
```
  What type of trip?
  [One-Way] [Round Trip] [Local] [Airport] [Temple Tour] [Custom]

  Pickup:   [text — Tirupati default]
  Drop:     [text]
  Date:     [date picker — IST, no past]
  Return:   [shown for Round Trip / Multi-day only]
  Passengers: [stepper 1–20]

  [Next: Choose Vehicle]
```

**Step 2 — Vehicle selection**
```
  Choose a vehicle (N passengers selected)

  [Dzire 4+1 / Rs.15/km] [Ertiga 6+1 / Rs.19] [Innova 7+1 / Rs.21] ...
  Cards below passenger count: greyed out + "Needs more seats" label
  Custom-quote state for Tavera / Tempo 17+1

  Fare guidance panel:
    "Local 8-hr / 300 km: Rs.2,000"
    "Note: Tolls, parking and permits are paid separately by the customer"
    "Exact fare confirmed before your trip"

  [Next: Your Details]
```

**Step 3 — Contact + confirm**
```
  Name: [text]
  Phone / WhatsApp: [tel input]
  Hotel / Pickup point: [optional text]
  Notes: [optional textarea]

  Booking summary (read-only review):
    Trip: One-Way | Tirupati → Tirumala
    Date: 15 Nov 2026 | 3 passengers
    Vehicle: Innova Crysta (7+1)
    Fare guidance: Rs.23/km (local 8-hr from Rs.3,000)
    Extra: Tolls, parking, permits paid separately

  [Send Enquiry on WhatsApp]   [Submit via Form]

  Disclaimer: "This is an enquiry, not a confirmed booking.
  We will confirm fare and availability within 30 minutes."
```

### 6B. Fleet page (/en/fleet)

```
  Page heading: "Find the Right Vehicle for Your Journey"
  Sub: "7 vehicle categories · Transparent rates · Available 24/7"

  Filter strip (scroll on mobile):
    [All] [1-4 seats] [5-6 seats] [7 seats] [8 seats] [12 seats] [17 seats]

  Vehicle card grid (3-col desktop / 2-col tablet / 1-col mobile):
    [vehicle image]
    Category name (e.g., Innova Crysta)
    Capacity: 7+1 passengers
    Per km: Rs.23
    Local 8hr: Rs.3,000
    Daily limit: 300 km
    [Enquire for This Vehicle]

  Seat Advisor (collapsible accordion below grid):
    "How many passengers?" → recommended vehicle
    Advisory only, not a definitive recommendation

  Full rates table (accessible, sortable):
    Vehicle | Passengers | Per km | 8hr base | 300 km/day
```

### 6C. Tour Packages (/en/tour-packages)

```
  Page heading: "Temple Tour Packages from Tirupati"
  Sub: "10 thoughtfully planned pilgrimage journeys"

  Filter tabs (primary):
    [All 10] [Tirupati Local] [Nearby Temples] [Outstation] [Multi-Day]

  Secondary filters (collapsible):
    Group size: [1-4] [5-6] [7-8] [9-12] [13+]
    Sort: [Popularity] [Price Low-High] [Duration]

  Package cards (2-col desktop / 1-col mobile):
    [Package image]
    Package code badge (e.g., AKC0004)
    Title
    Destination chips: Tirumala / Padmavathi / Kapila Theertham
    Duration + starting price
    [View Package] [Enquire on WhatsApp]
    Compare checkbox (visible on hover / always visible mobile)

  Compare sticky bar (appears when 2-3 packages selected):
    [AKC0001 x] [AKC0004 x] [Compare Packages]
```

### 6D. Package Detail (/en/tour-packages/[slug])

```
  Breadcrumb: Home > Tour Packages > [Package title]
  Full-width package hero image

  Two-column layout (desktop):

  LEFT (60%):
    Package code + full title
    Duration / Category meta pills
    Destination chips
    Distance advisory (shown only when exceedsAllowance: true)
      WARNING: ~415 km estimated route
      Includes 300 km — extra km charged at per-km rate

    TEMPLES VISITED
    - Temple 1 (state)
    - Temple 2 (state)
    - Temple 3 (state)

    INCLUSIONS (checklist)
    - AC cab with experienced driver
    - Fuel charges
    - Driver allowance
    - 300 km included

    EXCLUSIONS (checklist)
    - Darshan / entrance tickets
    - Meals and accommodation
    - Tolls and parking
    - State permits (where applicable)

    SIMILAR PACKAGES section

  RIGHT (40%, sticky on desktop):
    ENQUIRY CARD
    Select your vehicle:
      [Dzire / Amaze / Etios  Rs.8,000]
      [Ertiga                 Rs.9,000]
      [Innova                 Rs.10,000]
      [Innova Crysta          Rs.11,000]
      [Tavera                 Contact for Quote]
      [Tempo Traveller 12+1   Rs.14,000]
      [Tempo 17+1             Contact for Quote]

    Selected vehicle price shown prominently
    Distance advisory inline if exceedsAllowance
    Tolls / permits note

    [Enquire on WhatsApp]   [Request Quote Form]

    Package code: AKC0007
    Driver allowance: Included
```

### 6E. Contact Page (/en/contact)

```
  Heading: "Get in Touch — Akshaya Cabs Tirupati"

  Two-column layout (desktop) / stacked (mobile):

  LEFT — Enquiry form:
    Name [text]
    Phone / WhatsApp [tel]
    Type of trip [select]
    Message [textarea]
    [Send on WhatsApp]   [Submit Form]
    Netlify form action + honeypot

  RIGHT — Contact details:
    Primary: +91 72888 76667
    Secondary: +91 93939 00006
    Email: akshayacabs7@gmail.com
    Address: D.No. 18-38-S3-314, Madura Nagar, Tirupati 517501
    Google Maps embed (static or iframe)
    Hours: Open 24/7
    Social icons: Instagram / Facebook / X
```

### 6F. About Page (/en/about)

```
  Page heading: "About Akshaya Cabs"

  Split section (desktop) / stacked (mobile):
    [Founder photo — user supplied]
    Name: S.R. Kumar
    Role: Founder & Operator
    Story / mission copy (independently written, factual)

  Key facts strip (horizontal, no invented numbers):
    Tirupati Based | Available 24/7 | 7 Vehicle Categories | 10 Tour Packages

  Services covered: icon grid with links to service pages

  Bottom CTA: WhatsApp + Call
```

---

## 7. Core Component Library Plan

Eight original components. Design intent described here; implementation begins TASK-05/08.

### C-01: TripSearchCard
- Used on: Homepage hero, /book-a-cab
- States: Default / Active tab / Validation error / Loading / Submitted
- Tab strip with 6 trip types; return-date field shows/hides by tab
- Passenger stepper (1–20) with advisory text
- Outputs WhatsApp enquiry message — never a confirmed fare total
- Mobile: tabs scroll horizontally; inputs stack vertically

### C-02: VehicleCard
- Used on: Fleet page, Book-a-Cab step 2, Package enquiry sidebar
- States: Default / Selected / Disabled (capacity < passengers) / Custom-quote
- Shows: vehicle name, capacity, per-km rate, 8hr base, 300 km limit
- Seat suitability note (advisory, not definitive)
- Custom-quote state: "Contact for Pricing" instead of price

### C-03: PackageCard
- Used on: Tour Packages listing, Homepage section 4
- States: Default / Hovered / Compare-selected (checkbox shown)
- Shows: code badge, title, destination chips, duration, starting price, CTA
- Compare checkbox: up to 3 selectable; triggers sticky compare bar
- Links to full package detail page

### C-04: PackageEnquiryCard
- Used on: Package detail page (sticky sidebar desktop / bottom sheet mobile)
- States: Default / Vehicle selected / WhatsApp opened / Form submitted
- Vehicle radio group — price or "Contact for Quote"
- Distance advisory shown inline when exceedsAllowance true
- WhatsApp message includes package code, vehicle, price (or custom flag)

### C-05: DestinationChip
- Used on: Homepage section 2, package cards, package detail
- States: Default / Active filter / Link
- Pill: location icon + destination name
- On click: filters packages OR navigates to destination guide

### C-06: StickyBookingBar (mobile only)
- Used on: All pages except active form steps
- Three actions: [Call] [WhatsApp] [Book a Cab]
- Fixed bottom-0 with safe-area-inset padding
- Hidden when keyboard opens (visualViewport listener)
- Hidden during active form steps (via page-level prop)

### C-07: LocaleToggle
- Used on: Desktop header + mobile drawer
- States: EN active / Telugu active
- Switches locale, preserves equivalent route
- Preference stored in localStorage
- SSR handles initial render (no hydration flash)

### C-08: EnquirySuccessState
- Used on: Book-a-Cab, Contact form, Request Quote
- WhatsApp path: "WhatsApp opened — tap Send to complete your enquiry"
  (never implies message was automatically sent)
- Form path: "Your enquiry has been submitted. We will call or WhatsApp you shortly."
- Error path: "Something went wrong. Please call: +91 72888 76667"

---

## 8. Interaction States & Motion Policy

| Element | Animation | Duration | Reduced motion |
|---|---|---|---|
| Page transitions | Fade opacity 0 to 1 | 150ms | None (instant) |
| Card hover (desktop) | translateY -2px + shadow deepen | 200ms ease | None |
| Tab underline | Slide (transform) | 200ms ease | Instant jump |
| Mobile drawer open | translateX 100% to 0 | 250ms ease-out | Instant |
| Vehicle card select | Background fill + border highlight | 150ms | Instant |
| Button press (touch) | Scale 0.97 | 100ms | None |
| Loading skeleton | Pulse shimmer | 1.2s loop | Static color |
| Destination chip scroll | Momentum scroll (native) | native | Native |

All transitions must wrap in `@media (prefers-reduced-motion: reduce)` and either disable or make instant.

---

## 9. Responsive Breakpoints

| Name | Min-width | Typical layout |
|---|---|---|
| xs | 320px | 1-col full-width, safe-area padding |
| sm | 375px | 1-col, slightly larger base type size |
| md | 640px | 2-col grids where appropriate |
| lg | 1024px | Desktop nav, sidebar layouts begin |
| xl | 1280px | Wider containers, 3-col grids |
| 2xl | 1536px | Max container ~1280px centered |

**Critical mobile breakpoints to test:** 320px / 360px / 375px / 390px / 414px / 430px

---

## 10. Accessibility Requirements (WCAG 2.1 AA minimum)

- Focus ring: 3px teal outline, 2px offset, visible on all interactive elements
- Colour contrast: 4.5:1 for body text; 3:1 for large text and UI components
- Touch targets: 44x44px minimum; 48x48px preferred for primary CTAs
- Keyboard navigation: all drawers/dropdowns/modals fully keyboard-operable + focus-trapped
- Skip-to-main link: visible on focus, first DOM element in every page
- Images: meaningful images have descriptive alt text; decorative images alt=""
- Form labels: every input has a visible label (not placeholder-only)
- Error messages: linked via aria-describedby; not colour-only indication
- Dialog roles: role="dialog" + aria-modal + aria-labelledby on drawers and modals
- Language attribute: html lang="en-IN" for English; html lang="te-IN" for Telugu pages
- Mixed content: lang="te" on inline Telugu text within English pages

---

## 11. SEO & Structured Data Plan

### Per-page metadata targets

| Page | Title pattern | Primary keyword | Schema type |
|---|---|---|---|
| Home | Akshaya Cabs - Tirupati Cab Service & Temple Tours | Tirupati cab service | LocalBusiness + WebSite |
| Book a Cab | Book a Cab from Tirupati - Akshaya Cabs | book cab Tirupati | Service |
| Fleet | Cabs & Vehicles - Akshaya Cabs Tirupati | Tirupati cab rates | ItemList |
| Tour Packages | Temple Tour Packages - Akshaya Cabs Tirupati | Tirupati temple tour | ItemList |
| Package detail | [Title] - Temple Tour - Akshaya Cabs | [specific package keyword] | TouristTrip |
| Services | Cab & Travel Services - Akshaya Cabs Tirupati | cab services Tirupati | Service |
| About | About Akshaya Cabs - Tirupati | Akshaya Cabs Tirupati | LocalBusiness |
| Contact | Contact Akshaya Cabs - Tirupati | contact Akshaya Cabs | LocalBusiness |
| Blog article | [Article title] - Akshaya Cabs Travel Guides | [article keyword] | Article |

### JSON-LD structured data (implemented in TASK-24)

- LocalBusiness: homepage + contact page (address, phone, geo, opening hours)
- TouristTrip: all 10 package detail pages (itinerary, offers)
- Article: all published blog articles (author, datePublished, description)
- BreadcrumbList: all pages except homepage

### Hreflang (TASK-06)

- en-IN pages point to equivalent te-IN alternate
- te-IN pages point to equivalent en-IN alternate
- x-default points to /en/

---

## 12. Origination & Differentiation Checklist

This checklist must pass before any page is considered "visually complete":

- [ ] No maroon or old-gold SVTT palette
- [ ] No Playfair + Inter typography pairing
- [ ] No .svtt-* CSS class names in production code
- [ ] No SVTT hero layout sequence (hero / services / testimonials / footer)
- [ ] No star ratings, review counts, or Google rating claims
- [ ] No SVTT owner name, photo, or testimonials
- [ ] No "live GPS tracking", "live flight tracking" or false real-time claims
- [ ] No unverified "X years of experience", "#1 in Tirupati" superlatives
- [ ] Search-first homepage (trip search card dominant and above fold)
- [ ] Destination discovery section present (no SVTT equivalent)
- [ ] /book-a-cab wizard present (no SVTT equivalent)
- [ ] Locale toggle functional in header and mobile drawer
- [ ] Sticky bottom booking bar on mobile (distinct interaction from SVTT)

---

## 13. Outstanding Questions for Owner (OQ-03 through OQ-07)

Record owner answers in HANDSHAKE.md decisions table. These are not blockers for TASK-05.

| Ref | Question | Impact on which task |
|---|---|---|
| OQ-03 | Should the About page display "S.R. Kumar" or another preferred name/format? | TASK-18 (About page) |
| OQ-04 | Is the Tavera currently operated? If yes, can the owner supply specific package prices for it? | Fleet + all packages |
| OQ-05 | Preferred primary CTA label: "Book a Cab" vs "Plan My Trip" vs "Get a Quote"? | All CTAs from TASK-08 |
| OQ-06 | Will the owner supply the 8 blog article drafts, or should the agent write them? | TASK-25 (blog content) |
| OQ-07 | Should /reviews permanently remain as "What to Expect", or will verified reviews be added post-launch? | TASK-23 (reviews rebuild) |

---

*AKSHAYA CABS — docs/AKSHAYA_DESIGN_SYSTEM.md — TASK-04 — Created 2026-10-09*
*Read-only reference. All deviations and owner decisions recorded in HANDSHAKE.md only.*
