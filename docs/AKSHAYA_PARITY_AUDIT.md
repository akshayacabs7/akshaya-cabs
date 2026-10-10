# AKSHAYA CABS — Source Parity Audit
## TASK-02 Deliverable
**Date:** 2026-10-09 | **Auditor:** Antigravity (Claude Sonnet) | **Root:** `D:\Projects_OnlyAI\akshya-cabs`

> This document audits the existing SVTT source code that is being reused as the technical baseline for Akshaya Cabs.
> It identifies every feature, route, data object, component, asset, and branding string that must be accounted for.
> No UI changes were made during this audit.

---

## 1. Route / Page Inventory

### 1A. Confirmed Working App Router Pages (14 routes)

| Route | File | Type | Status | Notes |
|---|---|---|---|---|
| `/` | `src/app/page.tsx` | Static | EXISTS | 9 homepage sections |
| `/about` | `src/app/about/page.tsx` | Static | EXISTS | Owner photo from data |
| `/blog` | `src/app/blog/page.tsx` | Static | EXISTS | 8 post stubs listed |
| `/blog/[slug]` | `src/app/blog/[slug]/page.tsx` | Dynamic | EXISTS | Stub content only |
| `/contact` | `src/app/contact/page.tsx` | Static | EXISTS | Form + map |
| `/fleet` | `src/app/fleet/page.tsx` | Static | EXISTS | 7 vehicles + filter |
| `/pickup-drop` | `src/app/pickup-drop/page.tsx` | Static | EXISTS | 6 service anchors |
| `/privacy-policy` | `src/app/privacy-policy/page.tsx` | Static | EXISTS | robots: noindex |
| `/request-a-quote` | `src/app/request-a-quote/page.tsx` | Static | EXISTS | 12-field form |
| `/reviews` | `src/app/reviews/page.tsx` | Static | EXISTS | PROBLEM — see Section 4 |
| `/services` | `src/app/services/page.tsx` | Static | EXISTS | All 9 services |
| `/terms-and-conditions` | `src/app/terms-and-conditions/page.tsx` | Static | EXISTS | |
| `/tour-packages` | `src/app/tour-packages/page.tsx` | Static | EXISTS | 10 packages + filter |
| `/tour-packages/[slug]` | `src/app/tour-packages/[slug]/page.tsx` | SSG (10 paths) | EXISTS | Full price tables |
| `/sitemap.xml` | `src/app/sitemap.ts` | Generated | EXISTS | PROBLEM — see Section 4 |
| `/robots.txt` | `src/app/robots.ts` | Generated | EXISTS | PROBLEM — see Section 4 |
| `/404` | `src/app/not-found.tsx` | Static | EXISTS | Stub only |

### 1B. Orphaned Sitemap URLs (404 when requested)

The sitemap generates 9 service detail URLs (`/services/{slug}`) but **no `[slug]` directory exists** under `src/app/services/`. These would all return 404.

| Orphaned URL | Would resolve to |
|---|---|
| `/services/local-cab-services` | 404 |
| `/services/tirumala-taxi-services` | 404 |
| `/services/temple-tour-packages` | 404 |
| `/services/outstation-cab-services` | 404 |
| `/services/airport-pickup-drop` | 404 |
| `/services/railway-station-transfers` | 404 |
| `/services/tempo-traveller-rental` | 404 |
| `/services/customized-tours` | 404 |
| `/services/south-india-pilgrimage-tours` | 404 |

**Action required in TASK 16 (or earlier):** Either create service detail pages or remove service slugs from the sitemap until pages exist.

---

## 2. Component Inventory

### 2A. Layout Components (`src/components/layout/`)

| Component | File | Key Functionality |
|---|---|---|
| Header | `Header.tsx` (14KB) | Sticky nav, 7 links, WhatsApp+Call CTAs, animated hamburger, mobile drawer, focus trap, keyboard (Escape), aria-modal |
| Footer | `Footer.tsx` (18KB) | 5-column layout, brand+social, packages+services+quicklinks+contact cols, legal bar, SVTT Google ★★★★★ badge |
| FloatingContact | `FloatingContact.tsx` (5KB) | WhatsApp FAB (2s delay, pulse ring), mobile sticky 3-button bar (Call/WhatsApp/Quote), safe-area offsets |

**Nav links in Header:** Home, Services, Tour Packages, Fleet, Pickup & Drop, About, Contact (7 primary) + Reviews, Blog, Request a Quote (mobile drawer extras)

### 2B. Home/Section Components (`src/components/sections/`)

| Component | File | Key Functionality |
|---|---|---|
| HeroSection | `HeroSection.tsx` (7KB) | Full-screen image hero, headline, WhatsApp+Packages CTAs, trust badges, phone quick-dial, scroll indicator |
| ServicesSection | `ServicesSection.tsx` (2.3KB) | 9 service cards strip |
| FeaturedPackagesSection | `FeaturedPackagesSection.tsx` (4.5KB) | 3 featured packages, image, price, WhatsApp CTA |
| FleetPreviewSection | `FleetPreviewSection.tsx` (3.8KB) | 4 vehicles, capacity badge, price/km, WhatsApp enquiry |
| WhyChooseSection | `WhyChooseSection.tsx` (4.6KB) | 6-card grid — includes "GPS-tracked" claim |
| DestinationStorySection | `DestinationStorySection.tsx` (4KB) | 6 pilgrimage destinations |
| GoogleReputationSection | `GoogleReputationSection.tsx` (5.7KB) | PROBLEM — SVTT Google rating 5.0 ★★★★★, 3 testimonial cards |
| HowItWorksSection | `HowItWorksSection.tsx` (4.2KB) | 4-step numbered flow |
| AboutSnippetSection | `AboutSnippetSection.tsx` (5.7KB) | Brand story, stats, CTAs |
| FinalCtaSection | `FinalCtaSection.tsx` (3.7KB) | Maroon strip, 3 CTAs |

### 2C. UI Components (`src/components/ui/`)

| Component | File | Key Functionality |
|---|---|---|
| ContactEnquiryForm | `ContactEnquiryForm.tsx` (11.5KB) | 10-field WhatsApp form |
| FleetFilterGallery | `FleetFilterGallery.tsx` (8.7KB) | 5-tab filter (All/Sedans/SUVs/Vans/Tempo), 7 vehicle cards, comparison table |
| PackageFilterTabs | `PackageFilterTabs.tsx` (9KB) | 5-tab filter (All/Local/Nearby/Outstation/Multi-Day), 10 package cards |
| RequestQuoteForm | `RequestQuoteForm.tsx` (14.6KB) | 12-field WhatsApp form |

**Note:** Home section components directory (`src/components/home/`) exists but is EMPTY — sections live in `src/components/sections/`.

---

## 3. Data Layer Inventory

### 3A. Business Data (`src/data/business.ts`) — ALL SVTT, ALL WRONG for Akshaya

| Field | Current (SVTT) | Akshaya Correct Value |
|---|---|---|
| name | "Sri Vinayaka Tours & Travels" | "Akshaya Cabs" |
| shortName | "SVTT" | "Akshaya Cabs" |
| owner.name | "Ravilla Hemanth Naidu" | "S.R. Kumar" |
| owner.photo | "/images/owner/ravilla-hemanth-naidu.jpg" | "/images/akshaya/founder/sr-kumar.jpg" |
| phone.primary | "+919652240674" | "+917288876667" |
| phone.secondary | "+916281537563" | "+919393900006" |
| email | "svtttirupati@gmail.com" | "akshayacabs7@gmail.com" |
| address.line1 | "D.No.9-130/5-9" | "D.No. 18-38-S3-314" |
| address.line2 | "L.S Nagar, Thiruchanur" | "Madura Nagar" |
| address.pincode | "517503" | "517501" |
| domain | "svtttirupati.com" | "akshayacabs.com" |
| siteUrl | "https://svtttirupati.com" | "https://akshayacabs.com" |
| google.rating | "5.0" | REMOVE — no Akshaya ratings yet |
| google.reviewsUrl | SVTT Google reviews URL | REMOVE |

**Action required in TASK 03:** Complete replacement of business.ts.

### 3B. Vehicle Data (`src/data/vehicles.ts`) — Prices CORRECT, Structure reusable

| Field | Assessment |
|---|---|
| 7 vehicle categories | CORRECT — matches approved baseline |
| 9 vehicle variants (images) | CORRECT — amaze.webp, dzire.webp, etios.webp separately stored |
| Per-km rates | CORRECT — matches master plan approved table |
| Local day rates | CORRECT — matches master plan approved table |
| km limits | CORRECT — all 300 km (SVTT0006 is 200 km but that's in packages, not vehicles) |
| `driverCharges` field | LEGACY — keep field in type but note allowance is INCLUDED per confirmed rule; do NOT display as surcharge |
| Image paths | Use `/images/vehicles/` — paths must be updated to `/images/akshaya/fleet/` in TASK 03 |
| SVTT comment headers | Must be rewritten to Akshaya in TASK 03 |
| Weganor | Correctly absent |

### 3C. Package Data (`src/data/packages.ts`) — Prices CORRECT, IDs need renaming

| Field | Assessment |
|---|---|
| 10 packages present | CORRECT |
| Prices | CORRECT — match master plan table and per-vehicle matrices |
| Package IDs | PROBLEM — currently `svtt0001`…`svtt0010`; must become `akc0001`…`akc0010` in TASK 03 |
| Package codes | PROBLEM — currently `SVTT0001`…`SVTT0010`; never display on Akshaya site |
| Image paths | PROBLEM — currently `/images/packages/svtt000X-*.webp`; need Akshaya paths |
| Temple stops | COMPLETE — all temples present for all 10 packages |
| Vehicle price matrices | COMPLETE — Dzire, Ertiga, Innova, Innova Crysta, Tempo 12+1 for each |
| Missing vehicle in price rows | Tavera (8+1) and Tempo 17+1 absent from all package matrices — must flag for TASK 03 |
| AKC0007/AKC0008 feasibility | Flagged in master plan — 1-day 3-temple outstation; advisory note needed |
| SVTT0008 description | Contains "SVTT0007 route" reference — must rewrite in TASK 03 |

### 3D. Services Data (`src/data/services.ts`) — Coverage COMPLETE, content needs rewrite

| Assessment | Detail |
|---|---|
| All 9 services present | PASS |
| Service slugs | OK for Akshaya (generic terms, not SVTT-branded) |
| "Real-time driver tracking (on request)" | FALSE FEATURE CLAIM — no live tracking integration exists |
| "Flight tracking & on-time pickup" | FALSE FEATURE CLAIM — no flight API integration exists |
| "Train tracking for on-time arrival" | FALSE FEATURE CLAIM — no train API integration |
| Content descriptions | Must be rewritten independently (TASK 16) |

### 3E. Blog Data (`src/data/blog.ts`) — 8 topics, STUBS ONLY

| Assessment | Detail |
|---|---|
| 8 blog post topics | Present as metadata stubs — NO actual article content |
| Published dates | Backdated to September 2026 — must verify with owner or set to actual publish date |
| Blog slug structure | Generic (no SVTT branding in slugs) — reusable |
| Image paths | `/images/blog/*.webp` — paths to be updated in TASK 03 |

### 3F. Testimonials Data (`src/data/testimonials.ts`) — MUST NOT be used for Akshaya

| Assessment | Detail |
|---|---|
| 12 testimonials | ALL SVTT customer feedback — cannot be used for Akshaya |
| "SVTT" mentioned by name in 6 testimonials | All violate master plan Rule 5 |
| "Hemanth" mentioned in t10 | SVTT owner name — cannot appear on Akshaya site |
| Star ratings (5 stars each) | Cannot be shown without Akshaya-specific verified reviews |
| File | Must be REPLACED in TASK 23 with non-review "What to Expect" content |

### 3G. Social Data (`src/data/social.ts`) — ALL WRONG

| Field | Current (SVTT) | Akshaya Correct Value |
|---|---|---|
| Instagram URL | `instagram.com/svtttirupati_official` | `instagram.com/akshayacabs` |
| Facebook URL | `facebook.com/hemu.hemanth.568632` | `facebook.com/share/1J1DHsBsws/` |
| Twitter/X URL | `x.com/SVTTT0303` | `x.com/akshayacab` |

**Action required in TASK 03:** Replace all social URLs.

### 3H. TypeScript Types (`src/types/index.ts`) — Reusable with minor updates

| Assessment | Detail |
|---|---|
| Vehicle, Package, Service, BlogPost, SocialLink interfaces | REUSABLE — data structures are correct for Akshaya |
| Package.id/code field comments | Reference "svtt0001"/"SVTT0001" — update comments only |
| driverCharges in VehiclePrice | Keep field but annotate as "included in fares, do not display as surcharge" |

---

## 4. Critical Problems (Must Fix Before Public Launch)

### P1 — SVTT Identity in Every Data File and SEO Layer (TASK 03)
- `business.ts`, `social.ts`, `sitemap.ts`, `robots.ts`, `layout.tsx`, `page.tsx`, `seo.ts`, `whatsapp.ts`: All contain SVTT business name, phone numbers, email, domain
- All WhatsApp messages say "Hello Sri Vinayaka Tours & Travels (SVTT) Tirupati!"
- Root layout metadata title/OG is SVTT branded
- **Risk:** If the site were deployed now, it would present itself entirely as SVTT

### P2 — Fake Google Rating on Live Pages (TASK 23 / TASK 03)
- `GoogleReputationSection.tsx` displays SVTT's Google 5.0 rating with ★★★★★
- `/reviews/page.tsx` shows "5.0 ★★★★★ Google rating" and "Rated 5.0 on Google"
- `BUSINESS.google.rating` (currently "5.0") is referenced in hero/trust badges
- `WhyChooseSection.tsx` previously hard-coded "4.9★" (now uses data) — still problematic
- **Risk:** Displaying another business's rating violates master plan Rule; constitutes misrepresentation

### P3 — False Feature Claims in Services Data (TASK 16)
- "Real-time driver tracking (on request)" — no GPS system integrated
- "Flight tracking & on-time pickup" — no flight API
- "Train tracking for on-time arrival" — no rail API
- "GPS-tracked" in `WhyChooseSection.tsx`
- **Risk:** These are displayed to customers and constitute false advertising

### P4 — Orphaned Service Detail URLs in Sitemap (TASK 16 / TASK 30)
- Sitemap generates 9 `/services/{slug}` URLs
- No `src/app/services/[slug]/page.tsx` exists — all return 404
- **Risk:** Broken sitemap URLs harm SEO; Google will crawl and find 404s

### P5 — Package Image Paths and SVTT IDs (TASK 03)
- All 10 package images named `svtt000X-*.webp`
- Package data uses `id: "svtt0001"`, `code: "SVTT0001"` — must never appear publicly
- **Risk:** SVTT IDs could leak into URLs, JSON-LD, meta, and page content

### P6 — SVTT Testimonials Cannot Be Used (TASK 23)
- 12 testimonials name SVTT by name, mention "Hemanth" (SVTT owner)
- These are SVTT customer feedback — completely inappropriate for Akshaya
- `GoogleReputationSection` currently renders 3 of these

### P7 — Blog Articles Are Stubs Only (TASK 25/26)
- 8 blog posts exist as metadata only — no article body content
- Sitemap includes `/blog/{slug}` for all 8 — currently shows placeholder/empty pages
- Publishing stubs as finished SEO content violates master plan Section 01G

### P8 — SVTT Owner Photo in Public Directory (TASK 22)
- `public/images/owner/ravilla-hemanth-naidu.jpg` — SVTT owner photo is present
- New `business.ts` references this path currently
- Must NOT appear on Akshaya pages; S.R. Kumar genuine photo needed

### P9 — SVTT Logo Files (TASK 10)
- `svtt-logo.svg`, `svtt-logo-dark.svg`, `svtt-logo-light.svg`, `svtt-logo-white.svg`, `svtt-icon.svg`, `svtt-icon-192.png`, `svtt-icon-512.png`, `og-image.jpg` — all SVTT branded
- Referenced in `layout.tsx` favicon config and OG image
- Must be replaced with Akshaya logo/icon when owner supplies them

### P10 — CSS Class Names Have `.svtt-*` Prefix (TASK 05)
- `globals.css` (143KB!) contains hundreds of `.svtt-container`, `.svtt-section`, `.svtt-form-*`, `.svtt-rv-card__*`, etc.
- Layout components use `className="svtt-..."` throughout
- Must be replaced with new Akshaya design system in TASK 05

---

## 5. Feature Parity Matrix

### 5A. Navigation / Global Shell

| Feature | Source Has | Akshaya Plan | Status |
|---|---|---|---|
| Sticky header | Yes | Yes | Exists (SVTT) — needs full rebuild |
| Desktop nav links | Yes (7 primary) | Yes (different IA proposed) | Rebuild in TASK 08 |
| Mobile hamburger drawer | Yes | Yes | Rebuild in TASK 08 |
| Language toggle (EN/TE) | No | YES — new feature | Build in TASK 06/07/08 |
| WhatsApp CTA in header | Yes | Yes | Rebuild with Akshaya numbers |
| Click-to-call in header | Yes | Yes | Rebuild with Akshaya numbers |
| Book a Cab / Quote CTA | Yes | Yes | Rebuild in TASK 08 |
| Floating WhatsApp FAB | Yes | Yes | Rebuild with Akshaya number |
| Mobile sticky bottom bar | Yes | Yes | Rebuild with Akshaya numbers |
| Footer with social links | Yes | Yes | Rebuild in TASK 08 |

### 5B. Homepage Sections

| Section | Source Has | Akshaya Plan | Status |
|---|---|---|---|
| Full-screen hero | Yes | Yes (original art direction) | TASK 11 |
| Smart trip search | No | Yes — NEW FEATURE | TASK 11 |
| Services overview | Yes (9 services) | Yes (9 services) | TASK 12 |
| Featured packages | Yes (3 featured) | Yes | TASK 12 |
| Fleet preview | Yes (4 vehicles) | Yes | TASK 12 |
| Destination discovery | Yes (6 destinations) | Yes | TASK 12 |
| Why choose section | Yes | Yes (factual claims only) | TASK 12 |
| Google rating / reviews | Yes (FAKE for Akshaya) | NO — replace with "What to Expect" | TASK 23 |
| How it works | Yes | Yes | TASK 12 |
| Final CTA | Yes | Yes | TASK 12 |

### 5C. Core Pages

| Page | Source Has | Akshaya Plan | Parity |
|---|---|---|---|
| Home (/) | Full page | Full page + trip search | Rebuild TASK 11/12 |
| Services (/services) | All 9 service cards | All 9 + detail anchors/pages | Rebuild TASK 16 |
| Fleet (/fleet) | 7 categories, 9 images | 7 categories, 9 images | Rebuild TASK 13 |
| Tour Packages (/tour-packages) | 10 packages + filter | 10 packages + filter + compare | Rebuild TASK 14 |
| Package Detail (/tour-packages/[slug]) | All 10 SSG | All 10 SSG | Rebuild TASK 15 |
| Pickup & Drop (/pickup-drop) | 6 service anchors | Purpose-built transfer finder | Rebuild TASK 17 |
| Request Quote (/request-a-quote) | 12-field WhatsApp form | Guided multi-step + Netlify | Rebuild TASK 18/20 |
| Contact (/contact) | Form + map | Akshaya contact + map + social | Rebuild TASK 21 |
| About (/about) | SVTT owner story | S.R. Kumar story (photo needed) | Rebuild TASK 22 |
| Reviews (/reviews) | SVTT fake Google rating | Replace with "What to Expect" | TASK 23 |
| Blog (/blog) | 8 stub cards | 8 complete articles | TASK 25/26 |
| Blog Detail (/blog/[slug]) | Placeholder content | Full articles | TASK 25/26 |
| Privacy Policy | SVTT policy | Akshaya policy | TASK 32 |
| Terms & Conditions | SVTT terms | Akshaya terms | TASK 32 |
| 404 | Stub only | Proper 404 | TASK 33 |

### 5D. New Features (Not in Source, Required by Plan)

| Feature | Target Task |
|---|---|
| Trip type tabs (One-Way, Round-Trip, Local, Airport, Temple, Custom) | TASK 11/18 |
| Smart trip planner with progressive disclosure | TASK 18 |
| Fare guidance (approved tariffs + "Request quote" for complex) | TASK 18 |
| Package comparison (up to 3) | TASK 24 |
| Custom itinerary enquiry builder | TASK 24 |
| English / Telugu language routing (/en, /te) | TASK 06/07 |
| Netlify Forms real lead capture | TASK 20 |
| hreflang / canonical / JSON-LD SEO | TASK 30/31 |
| Destination and route landing pages | TASK 27 |
| Seat count advisory (4+1 = 4 passengers, not 5) | TASK 13/18 |

---

## 6. Image Asset Inventory

### 6A. Existing Images (55 files — all SVTT branded)

| Category | Count | SVTT-branded names | Can reuse images? |
|---|---|---|---|
| Hero | 2 | `hero-desktop.webp`, `hero-mobile.webp` | Temporary placeholder only — new Akshaya heroes needed (TASK 09/10) |
| Vehicles | 9 | `amaze.webp`, `dzire.webp`, `ertiga.webp`, `etios.webp`, `innova.webp`, `innova-crysta.webp`, `tavera.webp`, `tempo-traveller-12.webp`, `tempo-traveller-17.webp` | Yes — approved as licensed fallbacks per master plan |
| Packages | 10 | All `svtt000X-*.webp` | PROBLEM — filenames expose SVTT. Must be renamed to `akc000X-*.webp` in TASK 03/10 |
| Destinations | 6 | Generic temple names | Can reuse if genuinely appropriate temple imagery |
| Services | 9 | Generic service names | Can reuse temporarily |
| Blog | 8 | Generic blog slugs | Temporary placeholders — original content needed TASK 25/26 |
| Logo / icons | 7 | All `svtt-*.svg/png` | CANNOT reuse — SVTT branding; Akshaya logo needed |
| Owner | 1 | `ravilla-hemanth-naidu.jpg` | CANNOT use — SVTT owner photo |
| About | 2 | Generic | Can reuse temporarily |

### 6B. Missing Akshaya-Specific Assets (to be requested in TASK 09)

| Asset | Priority | Notes |
|---|---|---|
| Akshaya Cabs logo | P0 — User-supplied | Owner must supply |
| S.R. Kumar founder photo | P0 — User-supplied | Genuine photo only |
| Hero desktop (1920×1080) | P0 — ChatGPT prompt | New Tirupati/Akshaya scene |
| Hero mobile (1080×1350) | P0 — ChatGPT prompt | New Tirupati/Akshaya scene |
| OG cover image (1200×630) | P1 — ChatGPT prompt | Brand cover for social sharing |
| Package images × 10 | P1 — ChatGPT prompt | Renamed from svtt000X to akc000X |
| Destination images × 6+ | P1 — ChatGPT prompt | Can reuse current if verified |

---

## 7. WhatsApp / Form Functionality Audit

### 7A. WhatsApp Library (`src/lib/whatsapp.ts`)

| Function | Assessment |
|---|---|
| `buildWhatsAppUrl()` | REUSABLE — logic is correct |
| `generalEnquiryMessage()` | PROBLEM — hardcoded "Sri Vinayaka Tours & Travels (SVTT)" |
| `packageBookingMessage()` | PROBLEM — hardcoded "Sri Vinayaka Tours & Travels (SVTT)" |
| `serviceBookingMessage()` | PROBLEM — hardcoded "Sri Vinayaka Tours & Travels (SVTT)" |
| `quoteRequestMessage()` | PROBLEM — hardcoded "Sri Vinayaka Tours & Travels (SVTT)" |
| `primaryWhatsAppUrl()` | PROBLEM — pulls from BUSINESS.phone.primaryWhatsApp = SVTT number |
| `secondaryWhatsAppUrl()` | PROBLEM — pulls from BUSINESS.phone.secondaryWhatsApp = SVTT number |
| "WhatsApp will open; tap Send" honesty | GOOD — architecture avoids false "received" confirmation |

### 7B. Form Behavior

| Form | Current behavior | Issues |
|---|---|---|
| ContactEnquiryForm | WhatsApp-based submission | OK logic, SVTT phone numbers |
| RequestQuoteForm | WhatsApp-based submission | OK logic, SVTT phone numbers |
| No Netlify Forms | Not implemented | TASK 20 required |
| No static `public/__forms.html` | Not implemented | TASK 20 required |
| Success state | Honest ("WhatsApp will open") | GOOD — keep this pattern |

---

## 8. CSS / Design System Audit

### 8A. CSS State (`src/app/globals.css` — 143KB)

| Assessment | Detail |
|---|---|
| Size | 143KB is extremely large — not optimized |
| Design tokens | SVTT-specific: `--svtt-maroon`, `--svtt-gold`, `--svtt-cream`, etc. — ALL to be replaced |
| Typography | Playfair Display + Inter — explicitly banned for Akshaya (must use Sora + Manrope + Noto Sans Telugu) |
| Class prefix | All layout/component classes use `.svtt-*` prefix — prohibited on Akshaya site |
| Tailwind usage | Tailwind CSS v4 configured but `.svtt-*` classes are custom CSS |
| Animations | `prefers-reduced-motion` implemented — GOOD, keep pattern |
| Mobile bottom safe area | Implemented — GOOD, keep pattern |
| Action | COMPLETE REPLACEMENT in TASK 05 — do not patch over SVTT CSS |

### 8B. Font Configuration (`src/app/layout.tsx`)

| Current | Required for Akshaya |
|---|---|
| Inter (variable `--font-inter`) | REMOVE — use Manrope instead |
| Playfair Display (variable `--font-playfair`) | REMOVE — use Sora for headings |
| Missing | Add Manrope (`--font-manrope`) |
| Missing | Add Noto Sans Telugu (`--font-noto-telugu`) |

---

## 9. SEO Layer Audit

| File | Issues |
|---|---|
| `src/app/layout.tsx` | All metadata is SVTT branded; metadataBase falls back to `svtttirupati.com`; OG image is SVTT; Twitter creator `@SVTTT0303`; Icon paths use `svtt-icon-*.png` |
| `src/app/sitemap.ts` | BASE_URL = `svtttirupati.com`; generates 9 orphaned service detail URLs |
| `src/app/robots.ts` | Sitemap URL = `svtttirupati.com/sitemap.xml`; host = `svtttirupati.com` |
| `src/lib/seo.ts` | All PAGE_SEO entries use SVTT brand name, phone, domain; Twitter creator `@SVTTT0303` |
| No hreflang | No English/Telugu locale alternates |
| No JSON-LD | No LocalBusiness or BreadcrumbList structured data |
| No canonical tags | Only homepage has one (to svtttirupati.com) |

---

## 10. Feature Completeness vs. Master Plan Requirements

| Requirement | Source has | Gap / Task |
|---|---|---|
| 7 vehicle categories | YES | Prices correct; rebuild UI (TASK 13) |
| 9 vehicle image variants | YES | Rename paths for Akshaya (TASK 03/10) |
| 10 tour packages | YES | Rename IDs; rebuild UI (TASK 03/14/15) |
| All temple stops per package | YES | Verified complete |
| Per-vehicle price matrices | YES | Verified; missing Tavera + Tempo 17+1 in some |
| 9 service categories | YES | Rebuild UI; remove false claims (TASK 16) |
| Airport/station transfer context | YES (pickup-drop page) | Rebuild (TASK 17) |
| English + Telugu | NO | New feature TASK 06/07 onward |
| Smart trip planner | NO | New feature TASK 11/18 |
| Package comparison | NO | New feature TASK 24 |
| Real Netlify Forms | NO | New feature TASK 20 |
| No fake reviews/ratings | VIOLATION | Fix TASK 03/23 |
| No false GPS/flight/train tracking | VIOLATION | Fix TASK 16 |
| Both WhatsApp numbers | VIOLATION | Fix TASK 03/19 (currently only 1 number) |
| Correct contact data | VIOLATION | Fix TASK 03 |
| Correct social links | VIOLATION | Fix TASK 03 |
| hreflang + canonical SEO | NO | TASK 30 |
| JSON-LD structured data | NO | TASK 31 |
| Blog articles with full content | NO | TASK 25/26 |
| Seat count clarity (4+1 = 4 pax) | Partly | Reinforce in TASK 13/18 |
| Driver allowance "included" clarity | Not explicit | Add in TASK 03/13 |

---

## 11. Parity Summary

### What is reusable (functional logic, data structure, routing pattern):
- App Router page structure (routes)
- WhatsApp URL builder logic (change messages/numbers)
- Vehicle data structure and prices (change identifiers, image paths)
- Package data prices and temple stops (change IDs, image paths)
- Service categories and coverage (rewrite content, remove false claims)
- Blog metadata structure (need full article content)
- TypeScript interfaces (minor comment updates)
- Next.js configuration (security headers, image optimization)
- Mobile bottom bar / floating FAB pattern
- Netlify-compatible static export approach

### What must be completely replaced:
- All SVTT business identity (business.ts, social.ts)
- All SVTT-branded metadata (layout.tsx, sitemap.ts, robots.ts, seo.ts)
- All SVTT WhatsApp messages (whatsapp.ts message templates)
- All SVTT CSS design tokens (globals.css, font imports in layout.tsx)
- All SVTT logo/icon assets
- All SVTT-branded package IDs and image filenames
- The testimonials/reviews section (no Akshaya reviews exist)
- The Google rating badge (not Akshaya's rating)
- False feature claims (GPS tracking, flight tracking, train tracking)

---

*Audit completed: 2026-10-09 | Next action: TASK-03 (requires user approval)*
