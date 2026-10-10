# AKSHAYA CABS — HANDSHAKE / SESSION CONTINUITY

> **IF YOU ARE A NEW AI SESSION — READ THIS ENTIRE FILE FIRST BEFORE DOING ANYTHING.**
> This is the single source of truth for the Akshaya Cabs website project execution state.
> The master plan is READ-ONLY. All progress is recorded here.

---

## Read First

| Field | Value |
|---|---|
| Master plan (READ ONLY) | `AKSHAYA_CABS_MASTER_EXECUTION_PLAN.md` — never edit |
| Local root (EXACT) | `D:\Projects_OnlyAI\akshya-cabs` |
| Website | `https://akshayacabs.com` |
| Execution mode | **ONE TASK PER USER APPROVAL — NEVER AUTO-RUN NEXT TASK** |
| Last updated | 2026-10-09 22:30 IST |

---

## Current Execution State

| Field | Value |
|---|---|
| **Current task** | TASK-25 — Original travel blog system + first four real articles |
| **Current status** | IN_PROGRESS |
| **Last completed** | TASK-24 (PackageComparator client component; compare page; up to 3 packages; vehicle + pax picker; WA pre-filled enquiry; lint+build Exit 0, 51 static pages) |
| **Next proposed** | TASK-26 — Final four travel articles + editorial quality check (NOT APPROVED) |
| **User approval received for** | TASK-01 through TASK-25 |
| **Source guard** | Original SVTT repo/site **untouched**. No remote push possible (remote removed). |

---

## 🚦 Launch Gates — Actions Required Before Going Live

> These are **mandatory owner actions** that cannot be completed by the AI or on localhost.
> This agent will remind the owner of these gates when all tasks are complete.

| # | Gate | Task | Status | Action Required |
|---|---|---|---|---|
| LG-01 | **Netlify Forms — Production Test** | TASK-20 | ⏳ PENDING | After deploying to Netlify: submit one test lead via the contact form at `/en/contact`. Confirm the lead appears in **Netlify Dashboard → Forms → akshaya-enquiry**. Set up email notification to `akshayacabs7@gmail.com` in Netlify Forms settings. |
| LG-02 | **Netlify Forms — Quote Form Test** | TASK-20 | ⏳ PENDING | Submit a test lead via `/en/request-a-quote`. Confirm it appears in **Netlify Dashboard → Forms → akshaya-quote**. |
| LG-03 | **Netlify Forms — Trip Planner Test** | TASK-20 | ⏳ PENDING | Complete the 5-step trip planner at `/en/request-a-quote`. Confirm it appears in **Netlify Dashboard → Forms → akshaya-trip**. |
| LG-04 | **Founder Photo** | TASK-22 | ⏳ PENDING | Supply genuine photo of S.R. Kumar at `public/images/akshaya/founder/sr-kumar.jpg`. Do not use a placeholder as the final published image. |
| LG-05 | **Social Media Links Verified** | TASK-21 | ⏳ PENDING | Confirm Facebook, Instagram, X (Twitter) handles in `src/data/social.ts` are correct and active for Akshaya Cabs before go-live. |
| LG-06 | **Google Maps Pin Verified** | TASK-21 | ⏳ PENDING | Confirm the address `D.No. 18-38-S3-314, Madura Nagar, Tirupati 517501` is correctly pinned on Google Maps via `business.address.mapsUrl`. |
| LG-07 | **WhatsApp Numbers Live Test** | All | ⏳ PENDING | On a real mobile device, tap all WA CTAs on the live site. Confirm messages pre-fill correctly in WhatsApp for both `917288876667` and `919393900006`. |
| LG-08 | **DNS / Netlify Domain** | Deployment | ⏳ PENDING | Point `akshayacabs.com` Namecheap DNS to Netlify. Set HTTPS and confirm canonical URL resolves. |

---



## Immutable Confirmed Business Facts

> These are locked. Never fabricate, modify, or override without explicit owner confirmation.

| Field | Value |
|---|---|
| **Public business name** | Akshaya Cabs |
| **Domain / canonical base** | `https://akshayacabs.com` |
| **Domain registrar** | Namecheap |
| **Owner / founder public name** | S.R. Kumar |
| **Owner alias** | Ravi (same person; do not publish alias without reason) |
| **Owner photo** | User will supply genuine photo — placeholder only until delivered |
| **Logo** | User will supply — never present generated placeholder as official logo |
| **Primary call + WhatsApp** | +91 72888 76667 — tel:+917288876667 / WhatsApp 917288876667 |
| **Secondary call + WhatsApp** | +91 93939 00006 — tel:+919393900006 / WhatsApp 919393900006 |
| **Email** | akshayacabs7@gmail.com |
| **Street address** | D.No. 18-38-S3-314, Madura Nagar |
| **City / postal** | Tirupati - 517501, Andhra Pradesh, India |
| **Google Maps** | https://maps.app.goo.gl/XcmrEFDmhH2uKPvg8?g_st=aw |
| **Instagram** | https://www.instagram.com/akshayacabs |
| **Facebook** | https://www.facebook.com/share/1J1DHsBsws/ |
| **X / Twitter** | https://x.com/akshayacab |
| **Availability** | 24 hours a day, 7 days a week — confirmed |
| **Preferred booking** | WhatsApp-first + click-to-call + REAL Netlify enquiry form |
| **Payment / portal / auth** | No online payment, no login, no booking dashboard for Version 1 |
| **Languages** | English (en-IN) and Telugu (te-IN) — genuine translations across all page types |
| **Reviews / star ratings** | NONE — never reuse SVTT ratings or reviews. Zero until Akshaya-specific verifiable reviews exist |
| **Driver allowance** | Included in displayed vehicle and package rates — do not add it twice |
| **Additional charges** | Disclose tolls, parking, state permits where applicable |
| **Hosting / dev** | GitHub (new repo, TASK 35) + Netlify; local editor Antigravity with Claude Sonnet |

---

## Brand and Visual Direction (NEW — Not SVTT)

| Field | Value |
|---|---|
| **Tagline** | Every Journey, Beautifully Planned. |
| **Primary midnight navy** | #102B46 |
| **Teal** | #0FAF9D |
| **Sunrise gold accent** | #F2B75C |
| **Cloud white** | #F6F8FB |
| **Headings font** | Sora |
| **Body / UI font** | Manrope (English) |
| **Telugu font** | Noto Sans Telugu |
| **Tone** | Clear, contemporary, welcoming Indian English; respectful, fluent Telugu |
| **No-go palette** | Old SVTT maroon/gold, Playfair headings, .svtt-* CSS class names |
| **No-go content** | Old owner photo, ratings, testimonials, review schema, "#1" claims |

---

## Architecture and Major Decisions

| Topic | Decision |
|---|---|
| **Framework** | Next.js 16.3.8, React 19.2.8, TypeScript, Tailwind CSS 4 |
| **Locale routing** | /en/... and /te/... — root / redirects to /en/ (TASK 06) |
| **Form strategy** | WhatsApp primary + Netlify Forms stored submission; static form definition in public/__forms.html (TASK 20) |
| **Images** | User-supplied (genuine photos); AI-generated prompts for ChatGPT delivery only; old SVTT assets are TEMPORARY licensed fallbacks |
| **Deployment** | New GitHub repo + new Netlify site (TASK 35) — NOT svtttirupati/svttt |
| **Git remote** | SVTT remote (svtttirupati/svttt) removed from Akshaya copy in TASK 01; new repo created in TASK 35 with explicit user approval |
| **Old SVTT git user** | Changed from svtttirupati@gmail.com / SVTT Dev to akshayacabs7@gmail.com / Akshaya Cabs Dev |
| **Reviews page** | Replace with ethical "What to Expect" — no fake reviews, no star badges, no SVTT Google rating |
| **Package IDs** | AKC0001-AKC0010 map to SVTT0001-SVTT0010; SVTT IDs never displayed publicly |
| **Driver allowance** | Already included in rates — legacy driverCharges fields in source data are historical only |
| **package.json name** | Still "svtt-website" — will be updated in TASK 03 |
| **.env.example** | Updated to Akshaya Cabs in TASK 01 |
| **Legacy docs** | sri-vinayaka-tours-travels-website-blueprint.md, docs/DESIGN_SYSTEM.md, docs/ASSET_REQUIREMENTS.md are SVTT legacy — do NOT delete; mark as inactive reference in TASK 02 audit |

---

## Approved Vehicle Baseline (7 categories, 9 variants)

| Vehicle category | Passenger seats (+driver) | Per km | Local 8-hour base | Daily km limit |
|---|---:|---:|---:|---:|
| Dzire / Amaze / Etios | 4+1 | Rs.15 | Rs.2,000 | 300 km |
| Ertiga | 6+1 | Rs.19 | Rs.2,300 | 300 km |
| Innova | 7+1 | Rs.21 | Rs.2,500 | 300 km |
| Innova Crysta | 7+1 | Rs.23 | Rs.3,000 | 300 km |
| Tavera | 8+1 | Rs.20 | Rs.3,000 | 300 km |
| Tempo Traveller 12+1 | 12+1 | Rs.27 | Rs.3,000 | 300 km |
| Tempo Traveller 17+1 | 17+1 | Rs.35 | Rs.5,000 | 300 km |

Driver allowance is INCLUDED in all rates. Do not add it again.

---

## Approved Tour Package Baseline (10 packages)

| Akshaya ID | SVTT Ref | Meaning | Starting price |
|---|---|---|---:|
| AKC0001 | SVTT0001 | Tirupati + Tirumala local temples | Rs.3,600 |
| AKC0002 | SVTT0002 | Tirumala hill and local temples | Rs.3,300 |
| AKC0003 | SVTT0003 | Tirumala, Kanipakam, Padmavathi | Rs.5,200 |
| AKC0004 | SVTT0004 | Tirumala, Srikalahasti, Padmavathi | Rs.4,300 |
| AKC0005 | SVTT0005 | Tirumala and Padmavathi | Rs.3,000 |
| AKC0006 | SVTT0006 | Tirumala and Kanipakam | Rs.4,500 |
| AKC0007 | SVTT0007 | Kanipakam, Golden Temple (Vellore), Arunachalam | Rs.8,000 |
| AKC0008 | SVTT0008 | Kanipakam, Golden Temple, Arunachalam, Tiruttani | Rs.9,000 |
| AKC0009 | SVTT0009 | Tirupati local temples | Rs.2,300 |
| AKC0010 | SVTT0010 | Padmavathi and Srikalahasti | Rs.2,500 |

SVTT IDs must NEVER appear on Akshaya public pages. AKC0007/AKC0008 feasibility flagged for review.

---

## Nine Service Categories (100% coverage required)

1. Tirupati local cab services
2. Tirupati-Tirumala taxi services
3. Temple/pilgrimage tour packages
4. Outstation and intercity cabs
5. Tirupati airport pickup/drop
6. Railway station pickup/drop
7. 12+1 / 17+1 Tempo Traveller rental
8. Customized tours
9. South India pilgrimage tours

---

## Full Task Board (TASK-01 through TASK-36)

| ID | Phase | Description | Status | Date | Evidence |
|---|---|---|---|---|---|
| TASK-01 | A | Safeguard project and CLEAN HANDSHAKE.md | DONE | 2026-10-09 | See log below |
| TASK-02 | A | Audit every feature, route, reference and asset | DONE | 2026-10-09 | docs/AKSHAYA_PARITY_AUDIT.md |
| TASK-03 | A | Create Akshaya business and pricing data foundations | DONE | 2026-10-09 | All data/lib/app files; `npx tsc --noEmit` exit 0 |
| TASK-04 | A | Original UX strategy and wireframe architecture | DONE | 2026-10-09 | docs/AKSHAYA_DESIGN_SYSTEM.md |
| TASK-05 | A | Build design tokens, fonts, UI primitives | DONE | 2026-10-09 | globals.css replaced; layout.tsx fonts; 5 component files; tsc+lint exit 0 |
| TASK-06 | A | Establish scalable /en / /te language routing | NOT_STARTED | — | — |
| TASK-07 | A | Build core bilingual UI dictionary and conventions | NOT_STARTED | — | — |
| TASK-08 | A | Implement original shared header, footer and mobile navigation | NOT_STARTED | — | — |
| TASK-09 | B | Produce full image inventory and ChatGPT-ready prompts | NOT_STARTED | — | — |
| TASK-10 | B | Prepare media optimization and safe asset wiring | NOT_STARTED | — | — |
| TASK-11 | B | Create unique homepage hero + smart trip entry panel | DONE | 2026-10-10 | See log below |
| TASK-12 | B | Build original homepage discovery sections | DONE | 2026-10-10 | 8 sections created; tsc+lint+build Exit 0 |
| TASK-13 | B | Rebuild the fleet page, filters and vehicle selection | DONE | 2026-10-10 | AkcFleetGallery; category+seat filters; comparison table; tsc+lint+build Exit 0 |
| TASK-14 | B | Build ten-package listing and discovery experience | DONE | 2026-10-10 | AkcPackageGallery; 3-axis filters; AKC0007 advisory; tsc+lint+build Exit 0 |
| TASK-15 | B | Implement all ten complete package-detail pages | DONE | 2026-10-10 | Full rewrite; bilingual EN+TE; AKC0007 advisory; 20 SSG pages (10×2 locales); tsc+lint+build Exit 0 |
| TASK-16 | C | Rebuild all nine service experiences | DONE | 2026-10-10 | Full rewrite; bilingual EN+TE; 9 alternating-layout service cards; trust strip; tsc+lint+build Exit 0 |
| TASK-17 | C | Create airport, railway, local and outstation transfer experience | DONE | 2026-10-10 | Full rewrite; bilingual EN+TE; 6 transfer cards; trip-type chips; outstation 300km note; important notes section; tsc+lint+build Exit 0 |
| TASK-18 | C | Implement real guided trip planner and fare guidance | DONE | 2026-10-10 | 5-step guided planner; bilingual EN+TE; date/return validation; large-pax advisory; outstation note; honest WA confirmation; lint+tsc+build Exit 0 |
| TASK-19 | C | Build robust contextual WhatsApp + phone workflows | DONE | 2026-10-10 | whatsapp.ts full rewrite; openWhatsApp() popup-blocked handler; tripPlannerMessage + contactEnquiryMessage; ContactEnquiryForm + RequestQuoteForm SVTT cleanup; akc-form-* CSS; lint+tsc+build Exit 0 |
| TASK-20 | C | Implement REAL Netlify enquiry form submissions | DONE | 2026-10-10 | public/__forms.html (3 form definitions); src/lib/netlify-form.ts (AJAX POST, localhost detection, error states); ContactEnquiryForm dual-channel (WA+Netlify); consent checkbox; honeypot; pending/netlify-ok/netlify-err/offline states; PENDING PRODUCTION TEST (launch gate) |
| TASK-21 | C | Build full contact/map/social page | DONE | 2026-10-10 | Full rewrite; removed SVTT; hero with WA+call CTAs; 6 contact cards; 3 social links with SVG icons; ContactEnquiryForm with locale; lazy-loaded map iframe + directions link; 5 bilingual FAQ; akc-contact-* CSS; lint+tsc+build Exit 0 |
| TASK-22 | C | Original About and founder story | DONE | 2026-10-10 | Full rewrite; Akshaya Cabs identity; S.R. Kumar founder card (genuine photo confirmed at public/images/akshaya/founder/sr-kumar.jpg); bilingual EN+TE; 6 values; 13 coverage areas; factual neutral bio (no invented years/awards/quotes); lint+tsc+build Exit 0 |
| TASK-23 | C | Ethical trust and service-expectations design (NO FAKE REVIEWS) | DONE | 2026-10-10 | Full rewrite; ZERO fake reviews/stars/ratings/testimonials/schema; 5-step booking flow; 6 what-to-expect cards; pricing transparency callout (included/excluded breakdown); 6-item bilingual FAQ; Google Maps genuine-review invite; bilingual EN+TE; akc-trust-* CSS; lint+tsc+build Exit 0 |
| TASK-24 | C | Package comparison and custom temple itinerary enquiry | DONE | 2026-10-10 | PackageComparator "use client" component; /[lang]/compare page; up to 3 packages; vehicle + pax picker; duration/km/fare/temples table; customQuote=Get Quote; inclusions reminder; WA pre-filled enquiry summary; reset/empty/cancel states; bilingual EN+TE; lint+tsc+build Exit 0, 51 static pages |
| TASK-25 | D | Original travel blog system + first four real articles | NOT_STARTED | — | — |
| TASK-26 | D | Final four travel articles + editorial quality check | NOT_STARTED | — | — |
| TASK-27 | D | Build SEO-oriented destination and cab route landing pages | NOT_STARTED | — | — |
| TASK-28 | D | English editorial review and brand originality audit | NOT_STARTED | — | — |
| TASK-29 | D | Full Telugu content completion and native usability QA | NOT_STARTED | — | — |
| TASK-30 | D | Technical SEO: metadata, hreflang, canonicals, indexing | NOT_STARTED | — | — |
| TASK-31 | D | Local SEO and factual structured data | NOT_STARTED | — | — |
| TASK-32 | E | Legal, privacy, accessibility and security pass | NOT_STARTED | — | — |
| TASK-33 | E | Performance, visual responsiveness and test automation | NOT_STARTED | — | — |
| TASK-34 | E | Full end-to-end parity and originality regression | NOT_STARTED | — | — |
| TASK-35 | E | New GitHub repository and Netlify STAGING deployment | NOT_STARTED | — | — |
| TASK-36 | E | Production launch, Google integration and final handoff | NOT_STARTED | — | — |

---

## Per-Task Completion Log

### TASK-01 — 2026-10-09 22:30 IST

**User approval:** "Execute TASK 01 ONLY, exactly as defined in the master plan." — user request 2026-10-09

**Scope completed:** Workspace isolation, SVTT Git remote detachment, HANDSHAKE.md complete replacement, .env.example update, legacy docs identified.

**Files created / modified / deleted:**

| File | Action | Notes |
|---|---|---|
| D:\Projects_OnlyAI\SVTT_HANDSHAKE_BACKUP_2026-10-09.md | Created (outside repo) | Backup of 818-line SVTT HANDSHAKE — preserved; not pushed to Git |
| HANDSHAKE.md | Replaced | Old 818-line SVTT history replaced with Akshaya Cabs schema (this file) |
| .git\config | Modified | Removed [remote "origin"] pointing to svtttirupati/svttt; changed git user email/name to Akshaya Cabs; old remote URL preserved as comment |
| .env.example | Modified | Updated NEXT_PUBLIC_SITE_URL from svtttirupati.com to akshayacabs.com; updated form email reference and comments |

**Tests actually run + outcomes:**

| Test | Command | Outcome |
|---|---|---|
| Root verification | list_dir on D:\Projects_OnlyAI\akshya-cabs | PASS — package.json and src/ confirmed directly under project root |
| Git config check | view_file on .git\config | PASS — SVTT remote confirmed present before; removed after; new config verified |
| SVTT backup | Copy-Item PowerShell | PASS — Exit code 0; file confirmed at D:\Projects_OnlyAI\SVTT_HANDSHAKE_BACKUP_2026-10-09.md |
| Git CLI | git remote -v | INFO — Git CLI not installed on this machine; config edited directly (file-level, equivalent and safe) |
| npm run lint | NOT RUN | Not applicable — documentation/isolation task only; no source code changed |
| npx tsc --noEmit | NOT RUN | Not applicable — no TypeScript files changed |
| npm run build | NOT RUN | Not applicable — no source code changed; deferred to first build-touching task |
| SVTT original folder | Directory inspection | PASS — SVTT project does NOT exist at a separate path; remote removed from copy; original svtttirupati.com / GitHub svtttirupati/svttt untouched |

**Manual checks and observations:**

- .git/config: remote URL was https://github.com/svtttirupati/svttt.git — now removed from Akshaya copy
- .git/config: [branch "main"] stanza retained — harmless; no remote to push to
- AGENTS.md: Contains valid Next.js 16 framework guidance (auto-generated by next dev) — retained unchanged
- CLAUDE.md: Contains only @AGENTS.md — retained unchanged
- package.json name: Still "svtt-website" — cosmetic only; will be corrected in TASK 03
- docs/ASSET_REQUIREMENTS.md (71KB): SVTT image specs — legacy reference only; not deleted
- docs/DESIGN_SYSTEM.md (7.8KB): SVTT design tokens — legacy reference only; not deleted
- sri-vinayaka-tours-travels-website-blueprint.md (42KB): SVTT blueprint — historical reference only; not active agent instruction
- README.md: SVTT scaffolding text — will be replaced in a later task
- .gitignore: Covers .env*, standard Next.js files; does not include .netlify — add in TASK 35
- .netlify directory: Does NOT exist — no inherited Netlify connection
- public/vercel.svg, public/next.svg: Default scaffold files — will be removed in TASK 10
- No .env.local or secrets file found — safe
- Source code (src/) preserved entirely — no functional code changed

**Decisions and deviations:**

- Git remote detached via direct .git/config file edit (not git remote remove) because Git CLI is not installed on this machine. Equivalent and safe result.
- SVTT backup placed at D:\Projects_OnlyAI\SVTT_HANDSHAKE_BACKUP_2026-10-09.md (one level above project root, outside Git tracking).
- sri-vinayaka-tours-travels-website-blueprint.md NOT moved/archived yet — it is not in docs/ and not imported by AGENTS.md/CLAUDE.md so it does not affect agent behavior. Archiving deferred to TASK 02.

**Risks / blockers / user input required:**

- No blockers for TASK 01 acceptance.
- package.json name still reads "svtt-website" — cosmetic; will be corrected in TASK 03.
- README.md still contains SVTT scaffolding text — will be replaced in a later task.
- Git CLI not available on this machine — git operations will need CLI installation or alternative methods. Recorded for TASK 35 awareness.

**Git commit/hash:** No commit created — TASK 01 is isolation/documentation; no source code changed.

**Next task proposal:** TASK-02 — approved and completed on 2026-10-09.

---

### TASK-02 — 2026-10-09 22:50 IST

**User approval:** "yes please" — user approved TASK-02 on 2026-10-09

**Scope completed:** Full inspection of all src/ files, data layer, components, routes, CSS, images, and SEO layer. Parity matrix created. Critical problems documented.

**Files created / modified / deleted:**

| File | Action | Notes |
|---|---|---|
| `docs/AKSHAYA_PARITY_AUDIT.md` | Created | 500+ line complete parity audit with route inventory, data inventory, feature matrix, critical problems, image inventory, CSS/SEO audit |
| `HANDSHAKE.md` | Updated | TASK-02 status added |

**Tests actually run + outcomes:**

| Test | Command | Outcome |
|---|---|---|
| All page files | list_dir + view_file | PASS — 14 page routes confirmed |
| Orphaned service routes | PowerShell check | FAIL — 9 service detail URLs in sitemap but no [slug] page exists |
| All data files | Full view_file on 7 data files | PASS — complete inventory captured |
| SVTT brand sweep | PowerShell Select-String | PASS — all SVTT strings catalogued |
| Image inventory | Get-ChildItem -Recurse | PASS — 55 images found, all categorised |
| False feature claims | Pattern search | FOUND — GPS tracking, flight tracking, train tracking claims present |
| Google rating | Pattern search | FOUND — SVTT 5.0 rating displayed on 2+ pages |
| npm run lint | NOT RUN | Not applicable — no source code changed |
| npx tsc --noEmit | NOT RUN | Not applicable — no TypeScript changed |
| npm run build | NOT RUN | Not applicable — no code changed |

**Key findings (10 critical problems):**

| # | Problem | Severity | Fix Task |
|---|---|---|---|
| P1 | SVTT identity in ALL data files, SEO, WhatsApp messages | CRITICAL | TASK-03 |
| P2 | Fake SVTT Google 5.0 rating displayed on live pages | CRITICAL | TASK-03/23 |
| P3 | False GPS/flight/train tracking claims in services data | HIGH | TASK-16 |
| P4 | 9 orphaned service detail URLs in sitemap (404) | HIGH | TASK-16/30 |
| P5 | All package IDs/images named svtt000X | HIGH | TASK-03 |
| P6 | SVTT testimonials cannot be used for Akshaya | HIGH | TASK-23 |
| P7 | Blog articles are metadata stubs only (no content) | MEDIUM | TASK-25/26 |
| P8 | SVTT owner photo in public directory | MEDIUM | TASK-22 |
| P9 | All logo/icon assets are SVTT branded | HIGH | TASK-10 |
| P10 | globals.css (143KB) uses .svtt-* classes throughout | HIGH | TASK-05 |

**Decisions and deviations:**

- Vehicle prices and temple stops are VERIFIED CORRECT — match master plan approved baselines exactly
- Tavera (8+1) and Tempo Traveller 17+1 are ABSENT from all 10 package price matrices — flagged for user confirmation in TASK-03
- Package AKC0007 (1-day Kanipakam+Vellore+Arunachalam) feasibility concern noted per master plan — advisory note required
- The `src/components/home/` directory exists but is EMPTY — all home sections live in `src/components/sections/`
- Only one WhatsApp number is configured in current source (primary only) — secondary number missing from all CTAs

**Risks / blockers / user input required:**

- QUESTION for owner: Tavera (8+1) and Tempo Traveller 17+1 are not in any package price matrix. Should they be added? Or is this intentional (those vehicles only offered for outstation/local, not tour packages)?
- QUESTION for owner: Verify AKC0007 (Kanipakam + Golden Temple Vellore + Arunachalam) as a 1-day package — the driving distance is approximately 450-500 km round trip which may exceed the 300 km limit stated.

**Git commit/hash:** No commit — audit only, no source code changes.

**Next task proposal (NOT AUTHORIZED):** TASK-03 — Create Akshaya business and pricing data foundations

---

## Asset Request and Delivery Tracker

No assets requested yet. TASK 09 will generate all prompts and populate this table.

| Asset ID | Prompt recorded | Exact target path | Status | User action needed |
|---|---|---|---|---|
| — | — | — | PENDING TASK-09 | — |

---

## Pending Owner Questions (requires answers before affected tasks)

| # | Question | Affects Task | Status |
|---|---|---|---|
| OQ-01 | Should Tavera (8+1) and Tempo Traveller 17+1 appear in package price matrices? Or are they offered for local/outstation only? | TASK-03 | OPEN |
| OQ-02 | Is AKC0007 (Kanipakam + Vellore + Arunachalam) genuinely feasible in 1 day? Route is approx 450-500 km round trip. | TASK-03/15 | OPEN — advisory warning recommended |

---

## Risks, Unresolved Questions and Launch Blockers

| # | Risk / Question | Severity | Status |
|---|---|---|---|
| R-01 | package.json name still reads "svtt-website" | Low | Pending TASK-03 |
| R-10 | Tavera/Tempo 17+1 absent from package price matrices — owner confirmation needed | Medium | Pending OQ-01 |
| R-11 | AKC0007 1-day feasibility concern — advisory note recommended | Medium | Pending OQ-02 |
| R-12 | 9 orphaned service detail URLs in sitemap generate 404 | High | Fix TASK-16/30 |
| R-13 | globals.css is 143KB with all SVTT tokens — complete rebuild in TASK-05 | High | Pending TASK-05 |
| R-02 | README.md still has SVTT scaffolding text | Low | Pending later task |
| R-03 | sri-vinayaka-tours-travels-website-blueprint.md present at root (not active instruction) | Low | Deferred to TASK-02 audit |
| R-04 | Git CLI not installed on user machine | Medium | User may need to install Git before TASK-35 |
| R-05 | docs/ASSET_REQUIREMENTS.md and docs/DESIGN_SYSTEM.md are SVTT-era legacy | Low | To be superseded in TASKS 05 and 09 |
| R-06 | Owner photo (S.R. Kumar) not yet supplied | Medium | User action required before TASK-22 |
| R-07 | Official Akshaya Cabs logo not yet supplied | Medium | User action required before TASK-10 |
| R-08 | No existing .env.local — Akshaya environment vars not yet set | Low | Will be configured in TASK-35 at deployment |
| R-09 | .gitignore does not include .netlify | Low | Add in TASK-35 |

---

## New-Session Quick Handoff

**State after TASK-01 (first task, isolation and memory reset only):**

- Workspace is safely isolated from SVTT: Git remote removed, HANDSHAKE.md replaced, .env.example updated to Akshaya
- Source code (all src/ files), public assets, and docs are UNCHANGED — preserved for TASK-02 audit
- No Akshaya implementation code has been written yet
- SVTT backup is at D:\Projects_OnlyAI\SVTT_HANDSHAKE_BACKUP_2026-10-09.md (outside repo)

**To resume in a new session:**

1. Read this HANDSHAKE.md fully
2. Read master plan Sections 00 and 02 plus the specific approved task entry
3. Verify the task board above for current status
4. Do NOT proceed without explicit user approval for the next task
5. The next task is TASK-06 but it is NOT yet approved

**Summary of completed work so far:**
- TASK-01: Workspace isolated, HANDSHAKE.md replaced, git remote removed, .env.example updated
- TASK-02: Complete parity audit in docs/AKSHAYA_PARITY_AUDIT.md — 10 critical problems identified
- TASK-03: All data/lib/app files rewritten for Akshaya; all SVTT identity removed; tsc clean
- TASK-04: Full UX strategy in docs/AKSHAYA_DESIGN_SYSTEM.md — sitemap, wireframes, 8 components, motion, SEO
- TASK-05: Akshaya design system live — globals.css, fonts, 5 component primitives; tsc+lint 0 errors

**Files to inspect before TASK-06:** `src/app/layout.tsx`, `src/app/globals.css`, `docs/AKSHAYA_DESIGN_SYSTEM.md`, `src/components/ui/AkcButton.tsx`

---

### TASK-04 — 2026-10-09 22:52–23:00 IST

**User approval:** Explicit approval received 2026-10-09 22:52 IST ("please start task04").

**Scope completed:** Full UX strategy and wireframe architecture documented in `docs/AKSHAYA_DESIGN_SYSTEM.md`. Documentation-only task — no source code changes.

**Files created / modified:**

| File | Action | Notes |
|---|---|---|
| `docs/AKSHAYA_DESIGN_SYSTEM.md` | Created (replaced SVTT design_system stub) | Full TASK-04 deliverable |

**Document contents:**
1. Design philosophy (6 UX tenets: pilgrimage-first, thumb-first, honest, local authority, speed, Telugu parity)
2. Colour + typography baseline (navy/#102B46, teal/#0FAF9D, gold/#F2B75C; Sora/Manrope/Noto Sans Telugu)
3. Complete sitemap: English `/en/` tree (15 routes) + Telugu `/te/` tree (12 routes) + root redirect
4. Navigation architecture: desktop nav spec, mobile drawer spec, sticky bottom booking bar
5. Homepage architecture: 9 sections in ORIGINAL order (search-first, NOT SVTT order)
6. Page wireframes: Book a Cab (3-step wizard), Fleet, Tour Packages, Package Detail (2-col with enquiry card), Contact, About
7. 8 core original components (C-01 through C-08): TripSearchCard, VehicleCard, PackageCard, PackageEnquiryCard, DestinationChip, StickyBookingBar, LocaleToggle, EnquirySuccessState
8. Interaction states + motion policy (respects prefers-reduced-motion)
9. Responsive breakpoints (xs: 320px through 2xl: 1536px)
10. Accessibility requirements (WCAG 2.1 AA)
11. SEO targets per page + JSON-LD plan + hreflang strategy
12. Origination/differentiation checklist vs SVTT (13 items)
13. Outstanding owner questions OQ-03 through OQ-07

**Tests actually run + outcomes:**

| Test | Outcome |
|---|---|
| npx tsc --noEmit | NOT RUN — documentation-only task, no code changes |
| npm run lint | NOT RUN — documentation-only task, no code changes |
| npm run build | NOT RUN — documentation-only task |
| Visual/browser | NOT RUN — no UI changes in this task |
| Document review | DONE — checked against master plan requirements, parity audit, and approved data |

**Acceptance criteria verified:**
- [x] Original layouts visibly different from SVTT wireframes (search-first homepage, 9 sections vs SVTT 7-section order, /book-a-cab wizard is new)
- [x] Route structure covers full parity (all 14 SVTT routes mapped + 3 new: /book-a-cab, /destinations, /travel-guides)
- [x] Accessible mobile navigation planned (focus-trap drawer, flat list, keyboard, Escape, sticky bar)
- [x] Distinct from any known booking platform UI (no clone of MakeMyTrip/OlaCabs/Uber layout)

**New routes vs SVTT (confirmed additions in this design):**
- `/en/book-a-cab` — 3-step guided enquiry wizard (new, no SVTT equivalent)
- `/en/destinations` — destination explorer (new)
- `/en/travel-guides` — replaces `/blog` with SEO-friendlier URL
- Telugu locale tree `/te/*` — 12 routes (new)

**Key design decisions recorded:**
- Homepage section order: Hero (search) → Destinations → Why Akshaya → Packages → Fleet → Services → Founder → Guides → Bottom CTA
- Primary conversion page: `/book-a-cab` (3-step wizard) NOT `/request-a-quote` as in SVTT
- TripSearchCard never calculates or displays a confirmed fare total; WhatsApp enquiry only
- Package compare: up to 3 packages selectable; dedicated comparison view
- StickyBookingBar hidden during active form steps (keyboard-safe)
- Drawer animation: 250ms ease-out; instant on prefers-reduced-motion
- EnquirySuccessState: "WhatsApp opened — tap Send to complete" (never implies auto-send)

**Outstanding owner questions raised (OQ-03 through OQ-07):**

| Ref | Question | Blocking which task |
|---|---|---|
| OQ-03 | About page display name preference ("S.R. Kumar" or other format?) | TASK-18 |
| OQ-04 | Tavera currently operated? Specific package prices if yes? | Fleet + packages |
| OQ-05 | Primary CTA label preference: "Book a Cab" vs "Plan My Trip" vs "Get a Quote"? | TASK-08 onward |
| OQ-06 | Blog content: owner drafts or agent-written? | TASK-25 |
| OQ-07 | /reviews page: permanent "What to Expect" or genuine reviews later? | TASK-23 |

**Git commit/hash:** No commit — git not configured.

**Next task proposal (NOT AUTHORIZED):** TASK-05 — Build design tokens, fonts, UI primitives

---

### TASK-03 — 2026-10-09 22:20–22:43 IST

**User approval:** Explicit approval received 2026-10-09 22:19 IST with detailed TASK-03 instructions and owner answers to OQ-01 and OQ-02.

**Owner decisions recorded (OQ-01 and OQ-02):**
- OQ-01 RESOLVED: Tavera (8+1) and Tempo Traveller 17+1 included in all packages with `customQuote: true` and `price: null`. Display: "Contact for Custom Quote".
- OQ-02 RESOLVED: AKC0007 estimated at ~415 km circuit (exceeds 300 km allowance). `exceedsAllowance: true` set, distanceNote and enquiryNote added. Owner instructed not to advertise 300 km as route distance.

**Scope completed:** All 12 data/lib/app files rewritten. All 10 packages mapped SVTT→AKC. All type errors fixed. tsc and lint (pre-existing issues only) verified.

**Files created / modified / deleted:**

| File | Action | Notes |
|---|---|---|
| `src/types/index.ts` | Rewritten | Added I18nString, PackageDistanceInfo, updated all interfaces |
| `src/data/business.ts` | Rewritten | Full Akshaya identity, both phone numbers, address, tagline, no ratings |
| `src/data/social.ts` | Rewritten | Instagram/Facebook/X with Akshaya handles |
| `src/data/vehicles.ts` | Rewritten | All 7 categories, driver allowance rule documented |
| `src/data/packages.ts` | Rewritten | AKC0001–0010, Tavera/Tempo17+1 as custom quote, AKC0007 distance flagged |
| `src/data/services.ts` | Rewritten | All 9 services, false tracking claims removed |
| `src/data/blog.ts` | Rewritten | contentStatus gate added, Akshaya image paths |
| `src/data/testimonials.ts` | Rewritten | SVTT testimonials removed, empty array, clear documentation |
| `src/lib/whatsapp.ts` | Rewritten | Akshaya message templates, both phone numbers |
| `src/lib/seo.ts` | Rewritten | Akshaya domain/brand in all page metadata |
| `src/app/layout.tsx` | Updated | Metadata updated to Akshaya (fonts deferred to TASK-05) |
| `src/app/sitemap.ts` | Rewritten | akshayacabs.com, service detail pages removed (no 404s) |
| `src/app/robots.ts` | Rewritten | akshayacabs.com domain |
| `package.json` | Updated | name: "svtt-website" → "akshaya-cabs" |
| `src/components/sections/GoogleReputationSection.tsx` | Stubbed | SVTT rating/testimonials removed; factual placeholder |
| `src/components/sections/HeroSection.tsx` | Updated | SVTT rating badge removed |
| `src/components/sections/AboutSnippetSection.tsx` | Updated | SVTT rating stat removed |
| `src/components/sections/WhyChooseSection.tsx` | Updated | SVTT rating removed, unused import removed |
| `src/components/layout/Footer.tsx` | Updated | SVTT rating badge removed |
| `src/app/reviews/page.tsx` | Rewritten | SVTT content removed; factual "What to Expect" placeholder |
| `src/app/request-a-quote/page.tsx` | Updated | SVTT rating sidebar removed |
| `src/app/tour-packages/[slug]/page.tsx` | Updated | Domain, kmLimit→distance.allowanceKm, price null type |
| `src/components/ui/PackageFilterTabs.tsx` | Updated | kmLimit→distance.allowanceKm |
| `public/images/akshaya/` | Created | 8 Akshaya image subdirectories for TASK-09 |

**Tests actually run + outcomes:**

| Test | Command | Outcome |
|---|---|---|
| TypeScript type check | `npx tsc --noEmit` | **PASS** — exit code 0, zero errors |
| ESLint | `npm run lint` | **1 pre-existing error, 3 pre-existing warnings** — zero new problems introduced |
| SVTT brand sweep | PowerShell Select-String | **PASS** — only AKC_TO_LEGACY_MAP ref and comment warning found (intentional) |
| npm run build | NOT RUN | Deferred — CSS/components unchanged; build milestone at TASK-05 |
| Browser / visual | NOT RUN | No visual changes in scope for TASK-03 |

**Pre-existing lint issues (NOT caused by TASK-03):**
- `Header.tsx:80` — setState-in-effect (existed before TASK-03; flagged for TASK-08)
- `tour-packages/page.tsx:25` — unused var (pre-existing)
- `FleetFilterGallery.tsx:48` / `PackageFilterTabs.tsx:66` — aria-pressed on listitem (pre-existing; flagged for TASK-05/08)

**Key decisions:**
- Package IDs: SVTT0001–0010 → AKC0001–0010 (deterministic mapping preserved in AKC_TO_LEGACY_MAP)
- Tavera / Tempo 17+1: added to all 10 packages with `customQuote: true`, `price: null` per owner instruction
- AKC0007: estimated ~415 km; `exceedsAllowance: true`, distanceNote and prices flagged with `priceFlag: true` for owner confirmation before launch
- AKC0008: estimated ~455 km total (230 km day 1 + 225 km day 2); both days within 300 km/day limit — no flag needed
- Driver allowance: labeled as LEGACY in vehicle data; documented as included in all fares
- Blog: all 8 posts have `contentStatus: "stub"` — `getPublishedBlogPosts()` ensures zero stubs appear in sitemap or listing
- Testimonials: empty array — SVTT reviews cannot be used; /reviews page rebuilt as "What to Expect"
- Fonts in layout.tsx: Inter/Playfair left unchanged; TASK-05 will replace with Sora/Manrope/Noto Sans Telugu
- Icon paths: svtt-icon-192/512 remain as fallback with PENDING_USER_UPLOAD note; TASK-10 replaces
- OG image: paths updated to akshaya/brand/og-cover.webp with PENDING_USER_UPLOAD; TASK-09/10 deliver

**Launch blockers (data layer only):**
- ~~AKC0007 prices flagged~~ — **RESOLVED 2026-10-09**: owner confirmed all SVTT rates carry forward
- All Tavera / Tempo 17+1 package prices show "Contact for Quote" — owner may supply specific prices later
- All blog posts are stubs — content needed before /blog can be published
- No Google reviews/rating until genuine Akshaya reviews exist
- Founder photo (sr-kumar.jpg) and logo not yet supplied — TASK-09 IMAGE WORKFLOW

**Images needed from this task:**
None specific — TASK-09 generates all image prompts. Akshaya image directories created at `public/images/akshaya/`.

**Git commit/hash:** No commit — git not configured.

**Next task proposal (NOT AUTHORIZED):** TASK-04 — Original UX strategy and wireframe architecture

---

## Owner Decisions and Change Requests (Append-Only)

| Timestamp | Source | Instruction |
|---|---|---|
| 2026-10-09 22:30 IST | User (session start) | Execute TASK 01 only: protect the copied project, clean/reinitialize HANDSHAKE.md, separate from SVTT. |
| 2026-10-09 22:50 IST | User | "yes please" — approved TASK-02. |
| 2026-10-09 22:19 IST | User | Approved TASK-03 with detailed instructions. OQ-01: Tavera/Tempo17+1 included in packages with "Contact for Custom Quote". OQ-02: AKC0007 distance must be verified/accurate; do not advertise 300 km if route exceeds it. |
| 2026-10-09 22:50 IST | User | **Pricing confirmation:** All vehicle rates, package prices and km allowances are the same as the published SVTT website. AKC0007: retain ₹8,000 starting price and 300 km published allowance. Clearly note that extra km and applicable charges may apply. Remove `priceFlag` (pricing approval resolved). Keep factual distance advisory (distanceNote / enquiryNote). Apply consistently across all 7 vehicle categories and 10 packages. Do not start any task without explicit approval. |
| 2026-10-09 23:02 IST | User | **OQ-03 RESOLVED:** Founder name = **S.R. Kumar** throughout. Ravi = same person. Founder photo will be supplied later. Do not invent experience/achievements/history. |\n| 2026-10-09 23:02 IST | User | **OQ-04 RESOLVED:** YES — include Tavera and all 7 vehicle categories. Use same approved SVTT pricing/package pricing/km limits. Tavera + Tempo 17+1 in all relevant packages. "Contact for Custom Quote" if package-specific price unavailable. Do not invent prices. |\n| 2026-10-09 23:02 IST | User | **OQ-05 RESOLVED:** Primary CTA = "Book a Cab". Secondary CTA = "Explore Tour Packages". Package CTA = "Get a Quote". Mobile sticky = WhatsApp / Call / Book. All fully functional, optimized for all viewports. |\n| 2026-10-09 23:02 IST | User | **OQ-06 RESOLVED:** Agent (Claude Sonnet) writes 8 completely original, professional, SEO-optimized travel guide articles. Independent writing — not SVTT paraphrase. English + Telugu. Verify facts, distances, timings. No misleading info, placeholders or invented testimonials. Goal: organic search traffic → genuine enquiries. |\n| 2026-10-09 23:02 IST | User | **OQ-07 RESOLVED:** No Google reviews currently. Do NOT copy SVTT reviews. Create original "Why Choose Us / What to Expect" page. URL = `/why-choose-us` (not `/reviews`). No fabricated ratings. Genuine reviews feature may be added post-launch. |\n| 2026-10-09 23:02 IST | User | Approved TASK-05: Build design tokens, fonts, UI primitives. Sora/Manrope/Noto Sans Telugu. Original Akshaya design. Responsive. Accessible. tsc + lint + tests. Stop after TASK-05 and ask for explicit approval before TASK-06. |\n\n---\n\n*AKSHAYA CABS — HANDSHAKE.md — Last updated: 2026-10-09 23:04 IST (TASK-05 IN_PROGRESS)*\n*This file is the only living project-progress record. Update after EVERY task. Never edit the master plan.*\n

---

### TASK-05 � 2026-10-09 23:04�23:21 IST

**User approval:** Explicit approval received 2026-10-09 23:02 IST with answers to OQ-03 through OQ-07.

**Scope completed:** Full Akshaya design system implemented � design tokens, typography, CSS primitives, 5 reusable React components, route renames, and all lint/tsc errors resolved.

**Files created / modified:**

| File | Action | Notes |
|---|---|---|
| `src/app/layout.tsx` | Modified | Replaced Inter+Playfair with Sora+Manrope+Noto Sans Telugu; fixed LayoutProps type |
| `src/app/globals.css` | Replaced entirely | 6477 SVTT lines replaced by 23-section Akshaya design system |
| `src/components/ui/AkcButton.tsx` | Created | 6 variants, 4 sizes, Link/button/anchor polymorphic |
| `src/components/ui/AkcBadge.tsx` | Created | AkcBadge, AkcChip, AkcCodeBadge |
| `src/components/ui/AkcCard.tsx` | Created | AkcCard family + AkcPriceDisplay + AkcFareNote + AkcDistanceAdvisory |
| `src/components/ui/AkcSection.tsx` | Created | AkcSection, AkcPageHero, AkcSectionHeading, AkcBreadcrumb |
| `src/components/ui/AkcCheckList.tsx` | Created | AkcCheckList, AkcEnquirySuccess (3 states) |
| `src/app/reviews/` | Renamed | to src/app/why-choose-us/ per OQ-07 |
| `src/app/why-choose-us/page.tsx` | Modified | Updated comment + PAGE_SEO.whyChooseUs key |
| `src/components/layout/Header.tsx` | Modified | /reviews->why-choose-us; startTransition fix; aria fix |
| `src/components/layout/Footer.tsx` | Modified | /reviews->why-choose-us; /blog->travel-guides |
| `src/app/sitemap.ts` | Modified | /reviews and /blog URLs updated |
| `src/lib/seo.ts` | Modified | reviews->whyChooseUs; blog->travelGuides keys and slugs |
| `src/components/ui/FleetFilterGallery.tsx` | Modified | aria-pressed fix: div[role=listitem] wraps button |
| `src/components/ui/PackageFilterTabs.tsx` | Modified | Same aria fix |
| `src/app/tour-packages/page.tsx` | Modified | Removed unused import/var; updated WA message |

**Fonts configured (layout.tsx):**
- Sora (--font-sora) � headings/display (replaces Playfair Display)
- Manrope (--font-manrope) � body/UI (replaces Inter)
- Noto_Sans_Telugu (--font-noto-telugu) � all Telugu content (new)

**Design tokens (globals.css @theme):**
- Navy #102B46 / Teal #0FAF9D / Gold #F2B75C palette (replaces svtt-maroon/svtt-gold)
- All CSS custom properties use --akc-* prefix (zero --svtt-* remaining in this file)
- 23 sections: tokens, reset, layout, typography, buttons, cards, badges, forms, hero, price, loading, motion, sticky bar, checklist, scroll, overlay, dark sections, success states, breadcrumb, a11y, print

**Tests run + outcomes:**

| Test | Result |
|---|---|
| npx tsc --noEmit | Exit 0 � clean |
| npm run lint | Exit 0 � 0 errors, 0 warnings |

**Pre-existing issues fixed in TASK-05:**
- Header.tsx setState in useEffect -> startTransition (lint error eliminated)
- FleetFilterGallery + PackageFilterTabs aria-pressed on listitem role -> wrapper div fix (lint warnings eliminated)
- tour-packages/page.tsx unused totalPackages + PACKAGES import -> removed (lint warning eliminated)

**New component exports:**
- AkcButton: primary/secondary/ghost/dark/gold/wa, sm/md/lg/xl, Link or button
- AkcBadge, AkcChip (href or onClick), AkcCodeBadge
- AkcCard, AkcCardImage, AkcCardBody, AkcCardFooter, AkcPriceDisplay, AkcFareNote, AkcDistanceAdvisory
- AkcSection, AkcPageHero, AkcSectionHeading, AkcBreadcrumb
- AkcCheckList, AkcEnquirySuccess (whatsapp/form/error states)

**Git commit/hash:** No commit � git not configured.

**Next task (NOT AUTHORIZED):** TASK-06 � Establish scalable /en/ / /te/ language routing

---

*AKSHAYA CABS � HANDSHAKE.md � Last updated: 2026-10-09 23:21 IST (TASK-05 DONE)*
*This file is the only living project-progress record. Update after EVERY task. Never edit the master plan.*


---

### TASK-06 - 2026-10-09 23:24-23:51 IST

**User approval:** Explicit approval received (session start instruction).

**Scope completed:** Scalable English + Telugu language routing established using the Next.js 16 `app/[lang]/` pattern per installed documentation at `node_modules/next/dist/docs/`.

**Architecture decisions:**
- Next.js 16 uses `proxy.ts` (not `middleware.ts`) — middleware is deprecated and renamed
- `app/[lang]/layout.tsx` is the root layout (no `app/layout.tsx` needed per docs)
- `next/root-params` used in server components to read `lang` without prop drilling
- `generateStaticParams` pre-renders `/en` and `/te` at build time (SSG)
- `LanguageSwitcher` client component uses `usePathname()` + `swapLocale()` helper to toggle locale without a server round-trip
- hreflang alternates added via Next.js Metadata API (`alternates.languages`) — no manual `<head>` tags

**Files created:**

| File | Notes |
|---|---|
| `src/i18n/config.ts` | Locale types, LOCALES, LOCALE_LANG_TAGS, swapLocale(), stripLocale(), detectLocale() |
| `src/i18n/dictionaries/en.json` | English UI strings (nav, header, footer, cta, errors, meta) |
| `src/i18n/dictionaries/te.json` | Telugu UI strings (all same keys) |
| `src/i18n/dictionaries.ts` | getDictionary() via next/root-params; getDictionaryForLocale() for explicit locale |
| `src/proxy.ts` | Next.js 16 proxy (replaces middleware.ts); Accept-Language detection → /en or /te redirect |
| `src/app/[lang]/layout.tsx` | Root layout with html[lang], generateStaticParams, hreflang alternates via metadata |
| `src/app/[lang]/not-found.tsx` | Locale-aware 404 page using next/root-params |
| `src/components/ui/LanguageSwitcher.tsx` | Client component: EN/TE toggle pill in header and mobile drawer |

**Files modified:**

| File | Changes |
|---|---|
| `src/components/layout/Header.tsx` | Added `locale: Locale` prop; locale-prefixed nav links; LanguageSwitcher integrated; Telugu labels; aria labels |
| `src/components/layout/Footer.tsx` | Added `locale: Locale` prop; all internal links now locale-prefixed; Locale type import |
| `src/app/globals.css` | Added `.akc-lang-switcher` CSS block (switcher pill styles, hover/focus, drawer context) |
| `src/app/sitemap.ts` | Bilingual URLs (/en/ and /te/) with hreflang alternates for all static/package/blog pages |
| `src/lib/seo.ts` | `PageSeoInput.locale` field added; canonical URLs now include /en/ or /te/ prefix |

**Files migrated (copied to `[lang]` then originals deleted):**
- All page routes: `about`, `blog`, `contact`, `fleet`, `pickup-drop`, `privacy-policy`, `request-a-quote`, `services`, `terms-and-conditions`, `tour-packages`, `why-choose-us`, `page.tsx` (home), `not-found.tsx`
- `app/layout.tsx` — deleted (replaced by `app/[lang]/layout.tsx`)

**Build output (exit code 0):**
```
✓ Compiled successfully in 10.7s
✓ Generating static pages (49/49) in 1928ms
Route: /[lang] → /en + /te (SSG)
All 11 pages × 2 locales = 22 SSG variants
10 tour-package slugs × 2 locales = 20 SSG variants
ƒ Proxy (Middleware) active
```

**Tests run + outcomes:**

| Test | Result |
|---|---|
| `npx tsc --noEmit` | Exit 0 – clean |
| `npm run lint` | Exit 0 – 0 errors, 0 warnings |
| `npm run build` | Exit 0 – 49 static pages generated |

**Issues encountered and resolved:**
- `LayoutProps<"/[lang]">` not available pre-build → replaced with explicit `{ children: React.ReactNode; params: Promise<{ lang: string }> }` type
- `BUSINESS.contact.phone` doesn't exist → fixed to `BUSINESS.phone.primary`
- `proxy.ts` TS2532 possible undefined cookie value → fixed with explicit undefined guard
- `package.json` and several .tsx files got UTF-8 BOM prepended by PowerShell `Set-Content` → all BOM stripped; affected files repaired; `.next` cache cleared
- Two files (`[lang]/layout.tsx`, `[lang]/page.tsx`) had first character truncated by BOM-strip → character prepended manually

**Known limitations (by TASK-06 scope):**
- Full page content not yet translated to Telugu — TASK-06 only establishes routing infrastructure. Pages under `/te/` currently render English content (this is expected and documented in master plan: "Do not translate all long content in this task")
- `blog/[slug]` is `ƒ Dynamic` — will be SSG when blog content published in a later task

**Git commit/hash:** No commit — git not configured.

**Next task (NOT AUTHORIZED):** TASK-07 — SEO foundation (metadata, robots, structured data)

---

*AKSHAYA CABS — HANDSHAKE.md — Last updated: 2026-10-09 23:51 IST (TASK-06 DONE)*
*This file is the only living project-progress record. Update after EVERY task. Never edit the master plan.*


---

### TASK-07 - 2026-10-09 23:53 - 2026-10-10 00:05 IST

**User approval:** Received ("approved").

**Scope completed:** Core bilingual UI dictionary built for English (en-IN) and Telugu (te-IN). All shared shell and form building blocks now have complete translations. Missing-key checker implemented.

**Files created/modified:**

| File | Action | Notes |
|---|---|---|
| `src/i18n/dictionaries/en.json` | Replaced | Full dictionary: nav, header, footer, cta, services (9), fleet (7 vehicles), packages, form (enquiry + quote), booking statuses, fare labels, travel glossary, errors, meta, a11y |
| `src/i18n/dictionaries/te.json` | Replaced | Same shape, professional Telugu translations for all keys |
| `src/i18n/dictionaries.ts` | Replaced | Dictionary type derived from en.json; missing-key dev checker; module-level cache; getDictionary() + getDictionaryForLocale() API |
| `src/i18n/config.ts` | Extended | Added: formatCurrency(), formatNumber(), formatDate(), t() interpolation, teluguTextClass(), telugFontClass(), vehicleName() |
| `src/i18n/GLOSSARY.md` | Created | Terminology conventions: temple terms, vehicle names (Roman-only rule), currency/date formatting, Telugu typography, destination spellings, banned phrases |
| `src/app/globals.css` | Appended | .lang-te block: line-height 2.0, word-break, Noto Sans Telugu, min font-size, .vehicle-name exception |

**Key conventions established:**

1. **Vehicle names**: Innova, Dzire, Ertiga, Crysta, Tavera, Tempo Traveller — MUST stay in Roman script in ALL locales. Use vehicleName() as code marker.
2. **Currency**: Always ₹ (U+20B9), Indian grouping 1,00,000, no space between ₹ and number. Use formatCurrency(amount, locale).
3. **Dates**: en-IN numerals for both locales (avoid Telugu numeral system). Use formatDate(date).
4. **Telugu typography**: .lang-te class — line-height 2.0, word-break: break-word, Noto Sans Telugu, 16px minimum.
5. **Dictionary interpolation**: t("{n} passengers", {n: 4}) → "4 passengers" / "4 ప్రయాణికులు"
6. **Missing keys**: Dev console warns [i18n] Missing key in "te": "path.to.key" — never throws in prod.
7. **Darshan**: NEVER translate as "sightseeing" — use "darshan" / "దర్శనం"

**Tests run:**
| Test | Result |
|---|---|
| npx tsc --noEmit | Exit 0 — clean |
| npm run lint | Exit 0 — 0 errors, 0 warnings |

**Next task (NOT AUTHORIZED):** TASK-08 — per master plan

---

### TASK-08 - 2026-10-10 00:08 - 00:31 IST

**User approval:** Received ("TASK 07 is approved. Proceed with TASK 08 ONLY").

**Scope completed:** Original Akshaya Cabs header, footer and mobile navigation. All SVTT nav classes removed. New `akc-header`, `akc-drawer`, `akc-footer`, `akc-sticky-bar` CSS written from scratch.

**Files created:**
| File | Description |
|---|---|
| `src/components/layout/StickyBookingBar.tsx` | Mobile sticky bottom bar — Call, WhatsApp, Book (3 cells). Locale-aware labels. Hidden on desktop via CSS. |
| `src/components/ui/Breadcrumb.tsx` | Breadcrumb foundation — JSON-LD structured data, accessible nav, bilingual Home, locale-prefixed links |

**Files rewritten:**
| File | Key changes |
|---|---|
| `src/components/layout/Header.tsx` | Completely original design: sticky scroll shadow, desktop nav, EN/TE pill switcher, hamburger, slide-in drawer, body scroll lock, Escape-to-close, skip link, aria-expanded, aria-modal, both locales |
| `src/components/layout/Footer.tsx` | 4-column SSG footer: brand+tagline+availability badge+social icons; tour packages; services+quick links; contact (both phones, WhatsApp, email, map address). Pricing note in legal bar. |
| `src/components/ui/LanguageSwitcher.tsx` | Pill-style EN/TE toggle. New `akc-lang-switcher` CSS classes. Used in both desktop header and mobile drawer. |
| `src/app/globals.css` | Removed SVTT nav CSS block. Added akc-header, akc-drawer, akc-overlay, akc-hamburger, akc-sticky-bar, akc-footer, akc-breadcrumb, akc-lang-switcher CSS. 55,837 bytes total. |
| `src/app/[lang]/layout.tsx` | Swapped FloatingContact for StickyBookingBar; passes locale prop. |

**All 8 browser tests passed:**
| Test | Result |
|---|---|
| Desktop header (1440px) — logo, nav, WhatsApp, Book a Cab, EN/TE pill | ✅ PASSED |
| Language switcher EN → TE: URL /te, Telugu nav labels | ✅ PASSED |
| Language switcher TE → EN: URL /en | ✅ PASSED |
| Mobile drawer (375px): hamburger, drawer slide, all links, Escape close | ✅ PASSED |
| Mobile sticky bar: Call/WA/Book 3 buttons with correct hrefs | ✅ PASSED |
| Desktop footer: both phones, email, address, social icons, columns | ✅ PASSED |
| WhatsApp link: wa.me/917288876667 (Akshaya number confirmed) | ✅ PASSED |
| Telugu footer: no clipping, correct Telugu text | ✅ PASSED |

**Build/lint results:**
| Test | Result |
|---|---|
| npx tsc --noEmit | ✅ Exit 0 |
| npm run lint | ✅ Exit 0 — 0 errors |
| npm run build | ✅ Exit 0 — 49 SSG pages |

**Known issue (pending TASK-09/10):**
- Logo still shows `svtt-logo-light.svg` (SVTT branding) — Akshaya Cabs branded logo SVG/PNG not yet created. This is expected per master plan (media/logo work is TASK-09/10). The `Image` component references `/images/logo/svtt-logo-light.svg` which must be replaced when Akshaya logo is produced.

**Architecture decisions:**
- `StickyBookingBar` replaces `FloatingContact` (SVTT component) — cleaner, locale-aware, no floating FAB z-index conflicts
- `Breadcrumb` is a Server Component + JSON-LD pattern — no client JS overhead
- Drawer uses `document.body.style.overflow = "hidden"` for scroll lock — simpler than aria-hidden on siblings
- `akc-sticky-bar` hidden on desktop via `display: none` at 1024px — no JS needed
- Mobile drawer `z-index: 310`, overlay `z-index: 300`, header `z-index: 200`, sticky bar `z-index: 190` — no overlap possible

**Tests NOT performable (no browser automation):**
- VoiceOver/NVDA screen reader
- Actual mobile device safe-area (notch) rendering
- 320px very narrow viewport (browser automation minimum ~375px)

**Next task (NOT AUTHORIZED):** TASK-09 per master plan

---

### TASK-09 - 2026-10-10 00:35 - 00:45 IST

**User approval:** Received ("TASK 08 is approved. Proceed with TASK 09 ONLY").

**Scope completed:**
1. Complete image inventory and 42 ChatGPT-ready prompts created in `docs/AKSHAYA_IMAGE_PROMPTS.md`
2. All image directories created under `public/images/akshaya/`
3. Temporary text-based LogoMark SVG component created — removes visible SVTT branding from header and footer immediately
4. Header and Footer updated to use LogoMark (no more svtt-logo-light.svg)

**Files created:**
| File | Description |
|---|---|
| `docs/AKSHAYA_IMAGE_PROMPTS.md` | Complete image inventory: 42 image prompts in 5 priority batches, status table, keep/replace decisions, directory paths, integration plan |
| `src/components/ui/LogoMark.tsx` | Temporary SVG text-based brand mark ("AKSHAYA CABS / Tirupati") — replaces SVTT logo until owner provides real logo |

**Files modified:**
| File | Change |
|---|---|
| `src/components/layout/Header.tsx` | Replaced `<Image src="svtt-logo-light.svg">` with `<LogoMark variant="light">` in header and drawer |
| `src/components/layout/Footer.tsx` | Replaced `<Image src="svtt-logo-light.svg">` with `<LogoMark variant="light">` in footer brand column |

**Directories created:**
```
public/images/akshaya/brand/
public/images/akshaya/hero/
public/images/akshaya/vehicles/
public/images/akshaya/packages/
public/images/akshaya/services/
public/images/akshaya/destinations/
public/images/akshaya/about/
public/images/akshaya/blog/
public/images/akshaya/founder/   (OWNER SUPPLY ONLY)
public/images/logo/akshaya/      (OWNER SUPPLY ONLY)
docs/
```

**Image summary & Delivery Status:**
| Batch | Images | Folder | Status |
|---|---|---|---|
| 0 — Owner Supply | 4 Logo files + Founder photo (`sr-kumar`) | `logo/akshaya/` + `founder/` | ✅ Received & Converted |
| 1 — Hero & Brand | 5 images (IMG-H01 to IMG-H05) | `hero/` + `brand/` | ✅ Received & Converted |
| 2 — Vehicles | 7 images (IMG-V01 to IMG-V07) | `vehicles/` | ✅ Received & Converted |
| 3 — Tour Packages | 10 images (IMG-P01 to IMG-P10) | `packages/` | ✅ Received & Converted |
| 4 — Destinations + Services | 13 images (IMG-D01-D06, IMG-S01-S07) | `destinations/` + `services/` | ✅ Received & Converted |
| 5 — About + Blog | 10 images (IMG-A01-A03, IMG-B01-B07) | `about/` + `blog/` | ✅ Received & Converted |
| **TOTAL** | **49 images (50 files converted)** | — | **100% RECEIVED & CONVERTED** |

**Conversion Performance:**
- Original PNG size: 123.00 MB
- Optimized WebP size: 14.08 MB
- Bandwidth savings: **88.6%**
- `sr-kumar.jpg` also generated for founder photo compatibility.

**Tests run:**
| Test | Result |
|---|---|
| npx tsc --noEmit | ✅ Exit 0 |
| npm run lint | ✅ Exit 0 — 0 errors, 0 warnings |
| Image conversion pipeline | ✅ Exit 0 — 50 files converted |

**Next task (NOT AUTHORIZED):** TASK-11 per master plan (Requires explicit user approval)

---

### TASK-10 — 2026-10-10 03:35 - 03:40 IST

**User approval:** Received ("Please start TASK 10").

**Scope completed:**
1. All 50 PNG images verified in correct folders, converted to WebP at quality 85 (88.6% size savings: 123 MB → 14 MB)
2. `sr-kumar.jpg` generated alongside WebP for founder photo compatibility
3. `src/data/vehicles.ts` — 7 vehicle image paths → `/images/akshaya/vehicles/`
4. `src/data/packages.ts` — 10 package image paths → correct slugged filenames under `/images/akshaya/packages/`
5. `src/data/services.ts` — 9 service image paths → `/images/akshaya/services/`
6. `src/data/blog.ts` — 8 blog image paths → actual generated filenames under `/images/akshaya/blog/`
7. `src/components/ui/LogoMark.tsx` — Upgraded from SVG text fallback to real `next/image` using owner-supplied `akc-logo-light.png` and `akc-logo-dark.png`
8. `src/app/[lang]/layout.tsx` — PWA icons updated from `svtt-icon-192.png` / `svtt-icon-512.png` → `akc-icon-192.png` / `akc-icon-512.png`; OG cover PENDING comment removed
9. `eslint.config.mjs` — `scripts/` folder added to ESLint ignores (CJS Node utility scripts must not be linted as ESM TypeScript)
10. `src/data/business.ts` — Founder photo PENDING comment updated to delivered

**Files modified:**
| File | Change |
|---|---|
| `src/data/vehicles.ts` | 7 vehicle image paths → akshaya/vehicles/ |
| `src/data/packages.ts` | 10 package image paths → correct slugged filenames |
| `src/data/services.ts` | 9 service image paths → akshaya/services/ |
| `src/data/blog.ts` | 8 blog image paths → actual generated filenames |
| `src/data/business.ts` | Owner photo PENDING comment removed |
| `src/components/ui/LogoMark.tsx` | Upgraded to next/image using real owner logo PNG |
| `src/app/[lang]/layout.tsx` | SVTT icons replaced with Akshaya akc-icon-*.png |
| `eslint.config.mjs` | scripts/ added to globalIgnores |
| `scripts/convert-images.js` | Created — batch PNG→WebP conversion utility (sharp) |

**Tests run:**
| Test | Result |
|---|---|
| npx tsc --noEmit | ✅ Exit 0 — 0 errors |
| npm run lint | ✅ Exit 0 — 0 errors, 0 warnings |
| Image conversion | ✅ 50 files — 123 MB → 14 MB (88.6% savings) |

**No broken images:** Every image path in data files corresponds to an actual `.webp` file on disk.

**Next task (NOT AUTHORIZED):** TASK-11 — Homepage hero + smart trip entry panel

---

### TASK-11 — 2026-10-10 03:45–03:55 IST

**User approval:** Received (\"Execute TASK 11 only\" — session start instruction with full context).

**Scope completed:** New Akshaya Cabs homepage hero + 6-tab smart trip entry panel. Fully bilingual (EN/TE). No SVTT CSS class names. No fake booking. WhatsApp enquiry routing only. Real hero image used.

**Files created:**
| File | Description |
|---|---|
| `src/components/home/AkcHeroSection.tsx` | Server component — full-screen cinematic hero with real WebP Tirumala images, brand tagline, bilingual H1, trust pills, dual phone links, TripSearchPanel island, scroll indicator |
| `src/components/home/TripSearchPanel.tsx` | Client component — 6-tab trip type selector (One-Way, Round-Trip, Local, Airport/Station, Temple Tour, Custom), contextual form fields, WhatsApp message builder, no fake booking |

**Files modified:**
| File | Change |
|---|---|
| `src/app/[lang]/page.tsx` | Replaced static HeroSection with locale-aware AkcHeroSection; bilingual generateMetadata() added; SVTT-era description removed |
| `src/app/globals.css` | Appended `.akc-hero` (hero section, 200+ lines) and `.trip-panel` (search panel, 200+ lines) CSS blocks |

**Key design decisions:**
- Hero uses `hero-desktop-tirumala.webp` + `hero-mobile-tirumala.webp` (delivered in TASK-10, real Tirumala hill scene)
- Glassmorphism panel: `rgba(255,255,255,0.08)` + `backdrop-filter: blur(16px)` — legible over dark overlay
- TripSearchPanel is a `"use client"` island inside the server-rendered hero — optimal for SSG + interactivity
- 6 tabs: one-way, round-trip, local, airport, temple, custom — each with contextual fields (return date for round-trip, notes for temple/custom, local info note for local)
- All tab state preserved across tab switches (pickup/drop/date/passengers) — only return date and notes cleared on switch
- Date input: `min={todayISODate()}` — no past-date selection enforced at HTML level
- WhatsApp message includes: service type, pickup, drop, date, return date, time, passengers, notes
- Trust pills: 4 glassmorphic pills (Temple Circuit Specialists · Available 24/7 · 7 Vehicle Classes · Driver Allowance Included)
- Gold pulsing dot: subtle `@keyframes akc-pulse` animation on eyebrow label — reduced motion respected
- Scroll indicator: bouncing line/dot `@keyframes akc-scroll-bounce` — reduced motion respected
- No .svtt-* CSS classes, no SVTT identity, no fake reviews, no fabricated counts

**Tests run + outcomes:**
| Test | Command | Outcome |
|---|---|---|
| TypeScript type check | `npx tsc --noEmit` | ✅ Exit 0 — clean |
| ESLint | `npm run lint` | ✅ Exit 0 — 0 errors, 0 warnings |
| Production build | `npm run build` | ✅ Exit 0 — 49 SSG pages (same as before) |
| Browser EN desktop (1821px) | Browser subagent | ✅ PASS — hero image, heading, tagline, tabs, fields, WhatsApp CTA all visible and correct |
| Browser TE desktop (1821px) | Browser subagent | ✅ PASS — Noto Sans Telugu font, bilingual labels, all tab labels translated |
| Mobile EN (375px) | Browser subagent | ✅ PASS — stacked layout, scrollable tab bar, full-width CTA, sticky bottom bar |
| Mobile TE (375px) | Browser subagent | ✅ PASS — clean Telugu wrapping, no horizontal overflow |
| Tab interaction | Browser subagent (manual click) | ✅ PASS — Temple Tour tab clicked, contextual notes field appeared |
| WhatsApp routing | Browser DOM check | ✅ PASS — wa.me/917288876667 with pre-filled message confirmed |

**Visual check screenshots (browser subagent artifacts):**
- `hero_en_desktop_1791584513959.png` — EN desktop hero
- `hero_en_desktop_scrolled_1791584522050.png` — EN trust pills + phones
- `hero_en_temple_tab_1791584543024.png` — Temple Tour tab dynamic fields
- `hero_te_desktop_1791584567022.png` — TE desktop hero
- `hero_te_desktop_scrolled_1791584581807.png` — TE trust pills
- `hero_en_mobile_1791584625337.png` — EN 375px mobile
- `hero_te_mobile_1791584642326.png` — TE 375px mobile

**SVTT identity check:** Zero `.svtt-*` CSS class names in new files. No SVTT branding in hero or trip panel.

**Hero image note:** Using `hero-desktop-tirumala.webp` (delivered in TASK-09/10) — shows Tirumala hills with white cab on road. The instruction mentioned `hero-main.webp` but actual delivered file is `hero-desktop-tirumala.webp`. Image renders correctly at correct path.

**No images needed:** All hero images were delivered in TASK-10.

**Git commit/hash:** No commit — git not configured.

**Next task (NOT AUTHORIZED):** TASK-12 — Build original homepage discovery sections

---

*AKSHAYA CABS — HANDSHAKE.md — Last updated: 2026-10-10 03:55 IST (TASK-11 DONE)*
*This file is the only living project-progress record. Update after EVERY task. Never edit the master plan.*