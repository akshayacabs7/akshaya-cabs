# Sri Vinayaka Tours & Travels --- Website Master Blueprint

**Project:** Sri Vinayaka Tours & Travels, Tirupati\
**Domain:** `svtttirupati.com`\
**Deployment:** GitHub → Vercel\
**Document purpose:** Master product/design/engineering specification
for Claude / Antigravity\
**Implementation model:** Antigravity must split this document into
small, sequential tasks and complete, test, and verify each task before
moving to the next.\
**Important:** Do not attempt to build the entire website in one task.

------------------------------------------------------------------------

## 0. MASTER INSTRUCTION TO ANTIGRAVITY

Build a premium, modern, production-ready website for **Sri Vinayaka
Tours & Travels**, a Tirupati-based cab rental and pilgrimage-tour
business.

The website must feel like a **world-class modern travel brand**, not a
redesign of an old taxi website.

Use the supplied reference websites only for: - understanding
business/service requirements, - identifying useful functionality, -
understanding package/vehicle information, - observing navigation/CTA
interaction patterns.

Do **not** copy: - source-code, - wording, - layouts, - visual
identity, - illustrations, - images, - CSS, - component structure, -
page composition, - branding, - or distinctive design details.

The final website must have its own visual identity and information
architecture.

### Reference purposes

1.  **Existing SVTT information source**
    -   `https://srivinayakatours.netlify.app/`
    -   Use for SVTT business information, vehicles, prices, package
        data, services and existing content.
2.  **Vishnu Travels**
    -   `https://vishnu-travels.com/`
    -   Use only as a functional/content reference for travel-site
        features and service/package coverage.
3.  **CJK Digital Solutions**
    -   `https://www.cjkdigitalsolutions.com/`
    -   Use only as a UI inspiration reference for modern navigation/tab
        presentation, CTA hierarchy and WhatsApp access.
    -   It is unrelated to the travel business and must not influence
        SVTT's business content or branding.

------------------------------------------------------------------------

# 1. NON-NEGOTIABLE BUSINESS INFORMATION

## Brand

**Sri Vinayaka Tours & Travels**

Use this exact display name throughout the website.

Possible short brand treatment: - Sri Vinayaka Tours & Travels - SVTT

Do not invent another company name.

## Owner

**Ravilla Hemanth Naidu**

Include the owner in an appropriate trust/about section, but do not make
the entire website owner-centric.

## Primary phone

**+91 9652240674**

This is the **primary phone and primary WhatsApp number**.

All major phone/WhatsApp CTAs should use this number first.

## Secondary phone

**+91 6281537563**

This is the **fallback number only**.

Business rule: - Do not present the secondary number as equally
prominent everywhere. - Primary contact = 9652240674. - If the primary
number is unavailable/unreachable, customers can use 6281537563. -
Provide a secondary-contact option in the Contact page/footer/support
area. - Both numbers may support Call and WhatsApp, but the primary
number is always the default destination.

## Email

**svtttirupati@gmail.com**

All enquiry-form submissions should ultimately be routed to this email
through the selected form/email service.

## Address

Use this exact business address:

**D.No.9-130/5-9,\
L.S Nagar, Thiruchanur,\
Tirupati Dist, AP, 517503**

Do not replace this with the AutoNagar address from earlier discussions.

## Availability

**Available 24/7**

The website may communicate: - 24/7 availability - 24/7 booking
assistance - Call/WhatsApp enquiries anytime

Do not promise a specific service response time unless separately
confirmed.

------------------------------------------------------------------------

# 2. CORE BUSINESS OFFERING

The website should clearly communicate that Sri Vinayaka Tours & Travels
provides:

-   Tirupati local cab services
-   Tirumala taxi services
-   Tirupati temple sightseeing
-   Temple tour packages
-   Outstation cab services
-   Airport pickup and drop
-   Railway station pickup and drop
-   Tempo Traveller rentals
-   Group travel
-   Customized pilgrimage tours
-   South India pilgrimage tours
-   Multi-destination temple tours
-   Rental/enquiry services

Use the existing SVTT source as the factual content reference.

------------------------------------------------------------------------

# 3. VEHICLES

Use the same vehicle list and pricing information from the existing SVTT
source.

Known vehicle categories include:

-   Dzire / Amaze / Etios --- 4+1
-   Ertiga --- 6+1
-   Innova --- 7+1
-   Innova Crysta --- 7+1
-   Tavera --- 8+1 where confirmed in the source
-   Tempo Traveller 12+1
-   Tempo Traveller 17+1 where confirmed in the source

## Critical exclusion

### NEVER include Weganor.

Do not include Weganor: - in vehicle cards, - tables, - filters, -
package tables, - pricing, - metadata, - FAQs, - structured data, -
image prompts, - alt text, - search content, - hidden content, - or
generated copy.

If an imported/reference data source contains Weganor, remove it.

## Vehicle image policy

Vehicle images will be supplied/generated later.

Do not create fake vehicle photographs in the implementation phase.

Create a clean image/data architecture so actual vehicle images can be
inserted later without changing the component design.

------------------------------------------------------------------------

# 4. PRICING

Use the existing SVTT pricing source as the current pricing reference.

Do not copy Vishnu Travels pricing when SVTT pricing is available.

However, there are apparent inconsistencies in the existing SVTT data.
One example is a package entry showing an unusually low Innova price of
Rs.1,000 compared with surrounding package prices.

Therefore:

-   Preserve the supplied SVTT pricing data.
-   Do not silently invent or "correct" prices.
-   Flag suspicious values in the implementation notes/data validation
    task.
-   Before production launch, owner/business confirmation must be
    obtained for any flagged price.
-   Build pricing data in one central data file so it can be updated
    easily later.

Recommended architecture:

`src/data/vehicles.ts`\
`src/data/packages.ts`\
`src/data/services.ts`

Do not hard-code the same price in multiple components.

------------------------------------------------------------------------

# 5. DESIGN DIRECTION

The design must communicate:

**Tirupati + pilgrimage + trust + comfort + premium travel +
reliability**

The website should feel appropriate for a travel company based in
Tirupati.

## Visual mood

Use a sophisticated combination of:

-   deep temple-inspired maroon / burgundy,
-   warm saffron/gold accents,
-   ivory/cream,
-   subtle stone/sand neutrals,
-   deep charcoal/navy for contrast,
-   restrained green only where appropriate for WhatsApp.

Do not make the website look like: - a generic taxi website, - a loud
yellow taxi site, - a generic corporate website, - a religious poster, -
or a copied travel template.

## Tirupati-inspired visual language

Use subtle references to: - temple architecture, - gopuram
silhouettes, - sacred geometry, - stone textures, - sunrise/sunset over
Tirupati hills, - traditional South Indian visual motifs.

Keep these references **subtle and premium**.

Do not overcrowd the page with religious symbols.

## Background strategy

Backgrounds should have depth.

Use: - large cinematic destination photography, - subtle gradients, -
soft overlays, - very light texture, - glass/blur only where
appropriate, - layered sections, - elegant shapes.

Avoid excessive: - gradients everywhere, - glowing effects, - neon
colors, - glassmorphism on every card, - animation for the sake of
animation.

------------------------------------------------------------------------

# 6. TYPOGRAPHY

Use a modern premium font system.

Recommended: - Headings: a refined modern display font or premium serif
paired with a clean sans-serif. - Body/UI: Inter, Geist, Manrope, or
another highly legible modern sans-serif.

The final choice should be consistent and optimized for: -
readability, - Indian-English content, - mobile screens, - pricing
tables, - navigation.

Use a clear type scale: - display hero - H1 - H2 - H3 - body - small
text - labels - CTA text

Do not use too many font families.

------------------------------------------------------------------------

# 7. TECHNOLOGY STACK

Use a modern production stack.

## Required

-   **Next.js**
-   **TypeScript**
-   **React**
-   **Tailwind CSS**
-   App Router
-   ESLint
-   Prettier or equivalent formatting
-   Git
-   GitHub
-   Vercel

As of the current project planning date, Next.js 16.x is the appropriate
modern production baseline. Use the latest stable/security-supported
version available at implementation time rather than an obsolete pinned
version.

Tailwind CSS should use the current stable major version available at
implementation time.

Do not use experimental/canary versions in production unless there is a
compelling documented reason.

## Why Next.js

The site is primarily static but benefits from: - excellent SEO, -
static generation, - optimized images, - routing, - metadata, -
structured content, - reusable components, - future expansion, - Vercel
integration.

The website should remain as static/pre-rendered as practical.

Do not introduce: - a database, - unnecessary backend infrastructure, -
authentication, - CMS, - heavy server architecture, - or expensive APIs.

unless a future requirement explicitly needs them.

------------------------------------------------------------------------

# 8. RESPONSIVE REQUIREMENT --- EXTREMELY IMPORTANT

The website must work beautifully on:

-   small mobile phones,
-   large mobile phones,
-   tablets,
-   laptops,
-   desktops,
-   large desktop/ultrawide screens.

This is a **non-negotiable acceptance criterion**.

Do not build desktop first and "make mobile work later."

Use mobile-first responsive design.

## Required viewport validation

At minimum test: - 320px - 360px - 375px - 390px - 414px - 430px -
768px - 820px - 1024px - 1280px - 1366px - 1440px - 1536px - 1920px -
2560px

## Mobile requirements

On mobile: - no horizontal overflow, - no clipped text, - no overlapping
cards, - no tiny tap targets, - no desktop navigation leaking through, -
no oversized hero text, - no broken tables, - no unreadable pricing, -
no floating buttons covering important content, - forms must be easy to
complete with one hand.

Minimum interactive target should generally be around 44px or larger.

## Desktop requirements

On desktop: - avoid excessively wide text blocks, - use max-width
containers, - preserve visual hierarchy, - use whitespace
intentionally, - do not stretch cards unnaturally.

## Tablet

Do not treat tablet as simply a smaller desktop.

Validate: - navigation, - grids, - hero, - package cards, - forms, -
pricing tables, - footer.

------------------------------------------------------------------------

# 9. ACCESSIBILITY

Target WCAG 2.2 AA principles where practical.

Required: - semantic HTML, - keyboard navigation, - visible focus
states, - adequate color contrast, - meaningful alt text, - form
labels, - accessible buttons, - accessible dropdowns, - accessible
mobile menu, - reduced-motion support.

Respect: `prefers-reduced-motion`.

Animations must never make the site difficult to use.

------------------------------------------------------------------------

# 10. PERFORMANCE

The site must be fast.

Priorities: - optimized images, - responsive image sizes, - modern
formats such as WebP/AVIF where appropriate, - lazy-load below-the-fold
imagery, - preload only truly critical assets, - minimize JavaScript, -
avoid unnecessary client components, - avoid heavy animation libraries
unless necessary, - use server/static rendering wherever possible.

Target: - excellent Lighthouse performance, - strong Core Web Vitals, -
fast first meaningful rendering, - fast mobile loading.

Do not load giant hero images at their original camera resolution.

------------------------------------------------------------------------

# 11. INFORMATION ARCHITECTURE

Recommended primary navigation:

**Home**\
**Services**\
**Tour Packages**\
**Fleet**\
**Pickup & Drop**\
**About**\
**Contact**

Header CTA:

**WhatsApp Us**

Secondary CTA can be: **Call Now**

## Navigation behavior

Take inspiration from the clean navigation/CTA approach of CJK Digital
Solutions, but create a completely independent SVTT design.

Desktop: - clean horizontal navigation, - active-page state, - elegant
dropdown/mega-menu where required, - strong CTA.

Mobile: - hamburger menu, - animated but fast drawer, - large touch
targets, - clear hierarchy, - sticky contact actions if appropriate.

------------------------------------------------------------------------

# 12. PROPOSED SITE MAP

## Main pages

1.  `/`
2.  `/services`
3.  `/tour-packages`
4.  `/tour-packages/[slug]`
5.  `/fleet`
6.  `/pickup-drop`
7.  `/about`
8.  `/reviews`
9.  `/contact`
10. `/request-a-quote`
11. `/blog`
12. `/blog/[slug]`

Optional legal pages: 13. `/privacy-policy` 14. `/terms-and-conditions`

The site may use fewer physical routes if Antigravity determines a
cleaner architecture, but all required user journeys must exist.

------------------------------------------------------------------------

# 13. HOME PAGE

The homepage must be the strongest conversion page.

## Section 1 --- Hero

Create a cinematic Tirupati travel hero.

Headline concept:

**Explore Tirupati & South India with Comfort, Trust & Local Expertise**

Supporting text should clearly identify: - cab services, -
Tirumala/Tirupati tours, - temple packages, - 24/7 availability.

Primary CTA: **WhatsApp Us**

Secondary CTA: **Explore Tour Packages**

Optional third CTA: **Call Now**

Hero background: - premium Tirupati/temple/travel visual, - dark overlay
for readability, - subtle animation only.

Do not use generic stock taxi imagery if better authentic imagery is
available.

------------------------------------------------------------------------

## Section 2 --- Trust strip

Show: - 5.0 ★ Google rating - 24/7 availability - Tirupati-based travel
service - Comfortable vehicles - Local travel expertise

Do not fabricate statistics.

------------------------------------------------------------------------

## Section 3 --- Core services

Cards for: - Local Cab Services - Tirumala Taxi - Temple Tours -
Outstation Cabs - Airport Transfers - Railway Transfers

Each card: - icon/image, - short description, - CTA.

------------------------------------------------------------------------

## Section 4 --- Popular Tour Packages

Show selected package cards.

Each card: - package image, - package name, - route, - duration if
available, - starting price where valid, - vehicle availability, -
WhatsApp enquiry CTA, - View Details CTA.

Do not crowd the homepage with all 10 packages.

CTA: **View All Tour Packages**

------------------------------------------------------------------------

## Section 5 --- Fleet preview

Feature 4--6 key vehicles.

Show: - vehicle image, - name, - capacity, - price/rate, - short
description, - enquiry CTA.

CTA: **View Full Fleet**

------------------------------------------------------------------------

## Section 6 --- Why Choose SVTT

Possible factual reasons: - 24/7 availability - Tirupati local
expertise - multiple vehicle options - pilgrimage-focused travel -
customized tours - easy WhatsApp booking - transparent pricing where
applicable

Do not make unsupported claims such as "No.1 in Tirupati."

------------------------------------------------------------------------

## Section 7 --- Tirupati destination story

A visually rich section about travelling from Tirupati to: - Tirumala -
Kanipakam - Sri Kalahasti - Golden Temple - Arunachalam - other package
destinations

This section is for emotional storytelling and SEO.

------------------------------------------------------------------------

## Section 8 --- Google reputation

Prominent: **5.0 ★★★★★ on Google**

CTA: **View Google Reviews**

Do not label manually entered testimonials as Google reviews unless
verified.

------------------------------------------------------------------------

## Section 9 --- How booking works

Simple 3--4 step flow:

1.  Choose service/package
2.  Send enquiry on WhatsApp or form
3.  Confirm vehicle/date
4.  Travel comfortably

------------------------------------------------------------------------

## Section 10 --- Request a quote

Short form or CTA leading to full form.

------------------------------------------------------------------------

## Section 11 --- Final CTA

Example concept:

**Planning Your Tirupati Trip? Let's Make It Simple.**

Buttons: - WhatsApp Us - Call Now - Request a Quote

------------------------------------------------------------------------

# 14. SERVICES PAGE

Create a visually rich service directory.

Services:

### Local Cab Services

Tirupati local travel and temple visits.

### Tirumala Taxi Services

Tirupati ↔ Tirumala and local sightseeing.

### Temple Tour Packages

Curated pilgrimage routes.

### Outstation Cabs

Intercity travel.

### Airport Pickup & Drop

Tirupati Airport transfers.

### Railway Station Transfers

Tirupati Railway Station transfers.

### Tempo Traveller

Group/family travel.

### Customized Tours

Flexible route planning.

### South India Pilgrimage

Multi-state spiritual tours.

Each service should have: - purpose, - suitable customer, - vehicle
options, - CTA.

------------------------------------------------------------------------

# 15. TOUR PACKAGES PAGE

This is one of the most important pages.

Create a premium package discovery experience.

## Filtering

Possible filters: - Tirupati/Tirumala - Nearby Temples - One-day -
Multi-day - Family - Group - South India - Custom

Do not over-engineer filters if there are only 10 packages.

## Package cards

Every card should include: - package code, - title, - route, - key
destinations, - vehicle options, - price, - CTA.

Buttons: - View Package - WhatsApp Enquiry

------------------------------------------------------------------------

# 16. TEN SVTT PACKAGES

Retain all 10 existing SVTT packages from the current source and
redesign them.

Known source entries include:

1.  **SVTT0001 --- Tirupati - Tirumala Local Temples**
2.  **SVTT0002 --- Tirupati to Tirumala Local Temples**
3.  **SVTT0003 --- Tirumala and Kanipakam - Padmavathi**
4.  Continue the remaining SVTT package entries exactly from the
    existing SVTT source.
5.  Preserve all 10 packages.

Do not invent package codes or prices.

For each package page: - title, - package code, - route, -
temples/destinations, - vehicle pricing, - duration, - itinerary if
source provides it, - inclusions/exclusions where source provides
them, - enquiry CTA, - WhatsApp CTA, - request-quote CTA.

Source: `https://srivinayakatours.netlify.app/`

------------------------------------------------------------------------

# 17. FLEET PAGE

Create a premium fleet gallery.

Each vehicle card: - large image, - vehicle name, - seating, - luggage
note if known, - pricing, - best use case, - WhatsApp enquiry.

Suggested labels: - Family - Couple - Small Group - Large Group

Do not invent technical vehicle specifications.

## Vehicle comparison

Provide a clear comparison table on desktop.

On mobile: - convert the table into stacked cards or horizontally
scrollable accessible table, - never squeeze columns until unreadable.

------------------------------------------------------------------------

# 18. PICKUP & DROP PAGE

Include:

-   Tirupati Airport
-   Tirupati Railway Station
-   Tirumala
-   Hotels
-   Local pickup/drop
-   custom pickup/drop

Each service: - pickup location, - destination, - booking process, -
CTA.

Use maps where useful.

------------------------------------------------------------------------

# 19. ABOUT PAGE

Tell a concise authentic story.

Sections: - Sri Vinayaka Tours & Travels - Tirupati-based service -
Owner: Ravilla Hemanth Naidu - pilgrimage/travel focus - vehicles - 24/7
availability - customer-first approach - service coverage

Include owner photo later when supplied.

Do not invent years of experience, fleet size, employee count or awards.

------------------------------------------------------------------------

# 20. REVIEWS PAGE

Primary trust mechanism: **Google Reviews**

Display: - 5.0 rating if current Google listing remains verified, -
review count only if current/verified at launch, - View Google Reviews
CTA.

Optional: - selected authentic customer testimonials if
supplied/verified.

Do not fabricate reviews.

------------------------------------------------------------------------

# 21. CONTACT PAGE

Include: - primary phone, - secondary phone/fallback, - email, -
address, - WhatsApp, - Google Maps, - enquiry form, - social links.

Social links:

Instagram: `https://www.instagram.com/svtttirupati_official`

Facebook: `https://www.facebook.com/hemu.hemanth.568632`

X: `https://x.com/SVTTT0303`

Use official links supplied by the business.

------------------------------------------------------------------------

# 22. REQUEST A QUOTE FORM

Fields:

### Required

-   Full Name
-   Phone Number
-   Travel Date
-   Pickup Location
-   Drop Location
-   Service Type

### Optional

-   Email
-   Vehicle Preference
-   Number of Passengers
-   Package
-   Travel Time
-   Additional Requirements

Use proper HTML validation.

Success state: **Thank you. Your enquiry has been received. Sri Vinayaka
Tours & Travels will contact you shortly.**

Do not claim instant response unless guaranteed.

## Email delivery

Route submissions to: `svtttirupati@gmail.com`

Use an external form service or appropriate serverless endpoint.

Do not expose SMTP credentials or API keys in client-side code.

------------------------------------------------------------------------

# 23. WHATSAPP SYSTEM

Primary WhatsApp: `+919652240674`

Secondary: `+916281537563`

## Default WhatsApp message

Example:

Hello Sri Vinayaka Tours & Travels, I would like to enquire about your
cab/tour services in Tirupati.

## Contextual messages

Package: Hello Sri Vinayaka Tours & Travels, I am interested in
\[PACKAGE NAME\]. Please share availability and booking details.

Vehicle: Hello Sri Vinayaka Tours & Travels, I am interested in renting
\[VEHICLE\]. Please share availability and pricing.

Airport: Hello Sri Vinayaka Tours & Travels, I need airport pickup/drop
in Tirupati. Please share availability and pricing.

## WhatsApp placement

-   header CTA,
-   hero CTA,
-   package cards,
-   vehicle cards,
-   contact page,
-   floating WhatsApp button,
-   mobile sticky action area where it does not obstruct content.

The WhatsApp floating button should be: - recognizable, - accessible, -
non-intrusive, - safe-area aware on mobile, - not covering cookie
banners/forms/important controls.

------------------------------------------------------------------------

# 24. CALL SYSTEM

Primary: `tel:+919652240674`

Secondary fallback: `tel:+916281537563`

Use primary number for all default call CTAs.

Secondary number can be shown under: **Alternate contact**

------------------------------------------------------------------------

# 25. SOCIAL LINKS

Include: - Instagram - Facebook - X/Twitter

Do not fabricate YouTube or other accounts.

Open external social links safely.

------------------------------------------------------------------------

# 26. BLOG / TRAVEL GUIDES

Create a lightweight SEO-friendly blog architecture.

Recommended initial topics:

1.  Tirupati Darshan Guide
2.  Tirumala Travel Guide
3.  Best Places to Visit in Tirupati
4.  Tirupati to Kanipakam Travel Guide
5.  Tirupati to Sri Kalahasti Travel Guide
6.  Tirupati to Golden Temple Vellore
7.  Tirupati Temple Tour Guide
8.  Tirupati Airport to Tirumala Travel Guide

Important: - Do not publish fabricated facts. - Do not invent temple
timings. - Do not claim official darshan availability unless sourced. -
Blog content can be added progressively.

The blog should be easy to expand later.

------------------------------------------------------------------------

# 27. SEO

## Global SEO

Create: - title templates, - descriptions, - canonical URLs, - Open
Graph, - Twitter/X cards, - sitemap, - robots.txt, - favicon, - manifest
if appropriate.

Primary keyword themes: - Tirupati cab service - Tirumala taxi service -
Tirupati car rental - Tirupati temple tour packages - Tirupati airport
taxi - Tirupati outstation cab - Tirupati taxi rental - Tirupati Tempo
Traveller - Tirupati sightseeing taxi

Do not keyword-stuff.

## Local SEO

Business information must be consistent: - Name - Address - Phone -
Website - Email

Use appropriate `LocalBusiness` / travel-related structured data where
schema.org supports the business accurately.

Do not create fake ratings in structured data.

------------------------------------------------------------------------

# 28. IMAGE SEO

Every image: - meaningful filename, - descriptive alt text, -
width/height where possible, - responsive sizing, - optimized format.

Example: `tirupati-tirumala-taxi-service.webp`

Do not use: `IMG_1234.webp`

------------------------------------------------------------------------

# 29. IMAGE PROMPTS / ASSETS

Antigravity should NOT generate all images automatically inside the
first implementation task.

Create an `IMAGE_REQUIREMENTS.md` or equivalent internal task output
containing:

-   image purpose,
-   aspect ratio,
-   recommended resolution,
-   scene,
-   composition,
-   lighting,
-   subject placement,
-   negative prompts,
-   text/no-text instruction.

The user will provide/generate images later.

Required future image groups: - hero - each vehicle -
package/destination images - owner - logo - office - supporting travel
imagery.

When the user supplies real vehicle photos, prefer those over generic AI
vehicle images.

------------------------------------------------------------------------

# 30. ANIMATION

Use tasteful modern motion.

Examples: - hero fade/slide, - card reveal, - hover elevation, - subtle
image zoom, - number/stat reveal, - section entrance.

Do not animate every element.

Use: - CSS transitions, - lightweight motion library only if justified.

Support: `prefers-reduced-motion`.

------------------------------------------------------------------------

# 31. HEADER

Desktop: - logo, - nav, - primary WhatsApp CTA, - call option, -
possibly compact top strip.

Mobile: - logo, - hamburger, - optional WhatsApp icon, -
full-screen/drawer navigation.

Header should become sticky after scrolling if this improves usability.

Avoid an oversized header.

------------------------------------------------------------------------

# 32. FOOTER

Footer sections:

### Company

-   About
-   Services
-   Tour Packages
-   Fleet

### Travel

-   Pickup & Drop
-   Blog
-   Reviews

### Contact

-   phone,
-   alternate phone,
-   WhatsApp,
-   email,
-   address.

### Social

-   Instagram
-   Facebook
-   X

### Legal

-   Privacy Policy
-   Terms & Conditions

Include: **© Sri Vinayaka Tours & Travels**

Do not invent a registration/company number.

------------------------------------------------------------------------

# 33. DATA ARCHITECTURE

Centralize business data.

Recommended:

``` text
src/
  app/
  components/
  data/
    business.ts
    vehicles.ts
    packages.ts
    services.ts
    social.ts
  lib/
    whatsapp.ts
    seo.ts
  public/
    images/
```

Business data should contain: - name, - owner, - phone, - secondary
phone, - email, - address, - WhatsApp numbers, - hours, - social URLs.

Do not duplicate these values throughout components.

------------------------------------------------------------------------

# 34. COMPONENT ARCHITECTURE

Create reusable components such as:

-   Header
-   MobileNav
-   Footer
-   WhatsAppButton
-   CallButton
-   Hero
-   SectionHeading
-   ServiceCard
-   PackageCard
-   VehicleCard
-   ReviewSummary
-   QuoteForm
-   ContactCard
-   SocialLinks
-   Breadcrumbs
-   CTASection
-   ImageGallery
-   PricingTable
-   FAQ
-   BlogCard

Do not create one-off duplicated UI for every package.

------------------------------------------------------------------------

# 35. DESIGN SYSTEM

Create design tokens for: - colors, - spacing, - radius, - shadows, -
typography, - container widths, - breakpoints, - transitions.

The design should feel cohesive across all pages.

Do not use random Tailwind classes without an intentional design system.

------------------------------------------------------------------------

# 36. MOBILE BOTTOM ACTIONS

Consider a mobile-only fixed bottom bar:

**Call \| WhatsApp \| Get Quote**

Requirements: - safe-area padding, - no content obstruction, -
dismissibility if necessary, - accessible labels, - no conflict with
browser UI.

This is particularly useful for a travel business where mobile users are
likely to want immediate contact.

------------------------------------------------------------------------

# 37. FORMS AND VALIDATION

Use: - client-side validation for immediate feedback, - server/external
service validation for actual submission, - spam protection such as
honeypot or provider protection, - success/error states.

Never expose: - API secrets, - SMTP passwords, - private tokens.

------------------------------------------------------------------------

# 38. GOOGLE MAPS

Use the verified SVTT business location.

Do not invent coordinates.

Use either: - embedded map, - Google Maps direction link, - or both.

The Contact page should have: **Get Directions**

------------------------------------------------------------------------

# 39. SECURITY

Requirements: - no secrets in GitHub, - `.env.example` only for variable
names, - no API keys in public client bundles, - secure external
links, - form spam protection, - dependency updates, - production
security headers where appropriate.

------------------------------------------------------------------------

# 40. GITHUB WORKFLOW

Repository should use a clean Git workflow.

Suggested branches: - `main` - `develop` - feature branches as needed.

Every task should produce: - code, - test/verification, - commit, -
short task summary.

Use meaningful commits: - `feat: add responsive header` -
`feat: add fleet page` - `fix: mobile package card overflow`

Do not commit: - secrets, - `.env`, - huge unoptimized images, -
generated build folders.

------------------------------------------------------------------------

# 41. VERCEL DEPLOYMENT

Deployment target: **Vercel**

Repository: **GitHub**

Requirements: - connect GitHub repository, - automatic preview
deployments, - production deployment from main, - custom domain
`svtttirupati.com`, - HTTPS, - environment variables configured in
Vercel only.

Before launch: - test preview deployment, - test production build, -
test all routes, - test forms, - test WhatsApp, - test calls, - test
social links, - test mobile, - test SEO metadata.

------------------------------------------------------------------------

# 42. DOMAIN

Primary domain: `svtttirupati.com`

Prefer canonical: `https://svtttirupati.com`

Redirect alternate host variants to the canonical domain where
configured.

Ensure: - HTTPS, - canonical URLs, - sitemap uses canonical domain, -
Open Graph uses canonical domain.

------------------------------------------------------------------------

# 43. ANALYTICS

Add lightweight analytics only after the core website is stable.

Track: - page views, - WhatsApp clicks, - phone clicks, - quote-form
submissions, - package enquiry clicks, - vehicle enquiry clicks.

Do not collect unnecessary personal data.

------------------------------------------------------------------------

# 44. ACCESSIBLE WHATSAPP/CALL BUTTON LABELS

Do not rely only on icons.

Use labels: - WhatsApp Us - Call Now - Request a Quote

Icon-only buttons must have accessible labels.

------------------------------------------------------------------------

# 45. ERROR / EMPTY STATES

Create polished states for: - form submission failure, - missing
package, - invalid URL, - unavailable image, - 404.

404 page should provide: - Home - Tour Packages - Contact - WhatsApp

------------------------------------------------------------------------

# 46. BREADCRUMBS

Use breadcrumbs on: - package detail pages, - blog pages, - service
detail pages if created.

Example:

Home → Tour Packages → Tirupati - Tirumala Local Temples

Use structured breadcrumb data where appropriate.

------------------------------------------------------------------------

# 47. LEGAL CONTENT

Create placeholders/pages for: - Privacy Policy - Terms & Conditions

Do not invent legal claims.

Use clear placeholders where owner/legal review is required.

------------------------------------------------------------------------

# 48. NO COPY / ORIGINALITY RULE

The final site must pass a visual originality review.

Before completion, compare the website against: - Vishnu Travels -
existing SVTT website - CJK Digital Solutions

The purpose is to verify: - functionality was covered, - but the design
is independently created.

No copied CSS. No copied HTML. No copied text unless factual SVTT
information is intentionally retained. No copied image assets.

------------------------------------------------------------------------

# 49. CONTENT QUALITY

Writing style: - clear, - warm, - professional, - trustworthy, -
concise, - travel-oriented, - Indian-English friendly.

Avoid: - excessive marketing hype, - fake superlatives, - fake
guarantees, - fake statistics, - fake awards, - fake customer counts, -
unsupported "best in Tirupati" claims.

Use genuine business facts.

------------------------------------------------------------------------

# 50. TIRUPATI-SPECIFIC BRANDING

The website should visually feel connected to Tirupati.

Potential visual motifs: - Tirumala hills, - temple gopuram
silhouette, - warm sunrise, - South Indian architecture, - pilgrimage
roads, - elegant gold accents, - premium travel photography.

The visual treatment should be modern enough that it could compete with
premium travel brands.

Do not make it look like a temple donation website.

------------------------------------------------------------------------

# 51. WORLD-CLASS QUALITY BAR

"World best" should be interpreted as a quality target, not a marketing
claim.

The implementation should aim for:

-   premium visual design,
-   excellent typography,
-   exceptional mobile UX,
-   fast loading,
-   strong SEO,
-   high accessibility,
-   clean architecture,
-   reliable forms,
-   frictionless WhatsApp booking,
-   polished animations,
-   strong visual storytelling,
-   consistent design system,
-   production-quality code.

The site should feel like a serious professional travel brand.

------------------------------------------------------------------------

# 52. ANTIGRAVITY TASK EXECUTION PLAN

Do NOT build everything in one task.

Recommended sequence:

## Task 01 --- Project foundation

-   Next.js
-   TypeScript
-   Tailwind
-   linting
-   formatting
-   base structure
-   Git setup

## Task 02 --- Design system

-   colors
-   typography
-   spacing
-   container
-   buttons
-   cards
-   responsive rules

## Task 03 --- Header + navigation

-   desktop navigation
-   mobile navigation
-   CTA
-   sticky behavior

## Task 04 --- Footer + global contact system

-   footer
-   phone
-   WhatsApp
-   social links

## Task 05 --- Homepage hero

-   hero
-   background
-   CTAs
-   responsive behavior

## Task 06 --- Homepage service section

## Task 07 --- Homepage package section

## Task 08 --- Homepage fleet section

## Task 09 --- Homepage trust/reviews section

## Task 10 --- Homepage final CTA + polish

## Task 11 --- Services page

## Task 12 --- Tour Packages index

## Task 13 --- Package data architecture

## Task 14 --- Package detail template

## Task 15 --- Add all 10 SVTT packages

## Task 16 --- Fleet page

## Task 17 --- Pickup & Drop page

## Task 18 --- About page

## Task 19 --- Reviews page

## Task 20 --- Contact page

## Task 21 --- Request Quote form

## Task 22 --- Blog architecture

## Task 23 --- Blog starter content

## Task 24 --- SEO

## Task 25 --- Accessibility

## Task 26 --- Performance

## Task 27 --- Analytics/event tracking

## Task 28 --- Cross-device testing

## Task 29 --- Browser testing

## Task 30 --- Vercel preview deployment

## Task 31 --- Production domain

## Task 32 --- Final QA

This list may be subdivided further.

------------------------------------------------------------------------

# 53. IMAGE TASK WORKFLOW

Before generating images, Antigravity should create a separate image
requirement list.

For every image specify: - filename, - page, - purpose, -
dimensions/aspect ratio, - prompt, - negative prompt, - focal
position, - mobile crop requirements.

The user will provide/generate the actual images later.

Do not block the entire site architecture waiting for final images.

Use temporary placeholders that preserve correct aspect ratios.

------------------------------------------------------------------------

# 54. RESPONSIVE QA CHECKLIST

For every page:

### Mobile

-   320px
-   360px
-   375px
-   390px
-   414px
-   430px

### Tablet

-   768px
-   820px
-   1024px

### Desktop

-   1280px
-   1366px
-   1440px
-   1536px
-   1920px
-   2560px

Check: - header, - hero, - typography, - images, - cards, - grids, -
forms, - tables, - CTA, - footer, - floating WhatsApp, - mobile bottom
bar.

------------------------------------------------------------------------

# 55. FINAL QA GATE

Do not call the site complete until all of these pass.

## Functional

-   navigation works
-   all routes work
-   WhatsApp works
-   primary phone works
-   secondary fallback works
-   forms work
-   email delivery works
-   social links work
-   map works
-   package CTAs work
-   vehicle CTAs work

## Visual

-   no layout breaks
-   no horizontal scroll
-   no clipped text
-   consistent spacing
-   consistent typography
-   consistent colors
-   image crops look correct
-   mobile layout is intentionally designed

## Technical

-   production build passes
-   no console errors
-   no TypeScript errors
-   no ESLint errors
-   no broken links
-   no missing images
-   no exposed secrets

## SEO

-   unique page titles
-   meta descriptions
-   canonical URLs
-   sitemap
-   robots
-   structured data
-   Open Graph
-   proper headings
-   image alt text

## Performance

-   optimized images
-   limited client JavaScript
-   no unnecessary third-party scripts
-   strong Lighthouse scores
-   Core Web Vitals checked

------------------------------------------------------------------------

# 56. IMPORTANT IMPLEMENTATION PRINCIPLE

Do not optimize for "finishing quickly."

Optimize for: 1. correctness, 2. visual quality, 3. responsive behavior,
4. performance, 5. maintainability, 6. conversion, 7. SEO, 8.
accessibility.

Every completed task must be reviewed before the next task begins.

------------------------------------------------------------------------

# 57. SOURCE OF TRUTH PRIORITY

When information conflicts:

1.  **Latest explicit user-confirmed SVTT information**
2.  **Existing SVTT website**
3.  **Google Business information for public reputation/location
    verification**
4.  **Vishnu Travels for functional/reference coverage**
5.  **General assumptions --- never use if avoidable**

Never override explicit user-confirmed business data with an older
source.

------------------------------------------------------------------------

# 58. CURRENT BUSINESS DATA SUMMARY

``` text
Brand:
Sri Vinayaka Tours & Travels

Owner:
Ravilla Hemanth Naidu

Primary phone:
+91 9652240674

Primary WhatsApp:
+91 9652240674

Secondary phone:
+91 6281537563

Secondary WhatsApp:
+91 6281537563

Email:
svtttirupati@gmail.com

Address:
D.No.9-130/5-9,
L.S Nagar, Thiruchanur,
Tirupati Dist, AP, 517503

Availability:
24/7

Domain:
svtttirupati.com

Deployment:
GitHub → Vercel

Primary social:
Instagram — https://www.instagram.com/svtttirupati_official
Facebook — https://www.facebook.com/hemu.hemanth.568632
X — https://x.com/SVTTT0303
```

------------------------------------------------------------------------

# 59. FINAL DIRECTIVE TO ANTIGRAVITY

Read this entire blueprint before starting implementation.

Then:

1.  Convert the blueprint into a task backlog.
2.  Identify dependencies.
3.  Execute one task at a time.
4.  Verify each task.
5.  Do not skip responsive testing.
6.  Do not invent business information.
7.  Do not include Weganor.
8.  Do not copy the reference websites.
9.  Keep all business data centralized.
10. Keep the design system consistent.
11. Use the latest stable production versions available at
    implementation time.
12. Keep the website fast and mostly static.
13. Use Git commits after meaningful milestones.
14. Deploy preview builds to Vercel during QA.
15. Perform a full cross-device QA before production.
16. Do not consider the project complete merely because it builds.

The final result should be a **premium, fast, mobile-first, SEO-ready
Tirupati travel website** for Sri Vinayaka Tours & Travels that is
clearly original, conversion-focused, maintainable, and ready for
long-term expansion.

------------------------------------------------------------------------

## Reference sources

-   Existing SVTT website: https://srivinayakatours.netlify.app/
-   Vishnu Travels reference: https://vishnu-travels.com/
-   CJK Digital Solutions UI reference:
    https://www.cjkdigitalsolutions.com/
-   Next.js documentation: https://nextjs.org/docs
-   Tailwind CSS documentation: https://tailwindcss.com/docs
-   Vercel documentation: https://vercel.com/docs
