# AKSHAYA CABS
## Master Website Rebuild & Execution Playbook

> **FOR: ANTIGRAVITY + CLAUDE SONNET — READ COMPLETELY BEFORE ACTING**  
> **PROJECT:** Akshaya Cabs, Tirupati, Andhra Pradesh  
> **LOCAL ROOT (EXACT):** `D:\Projects_OnlyAI\akshya-cabs`  
> **MASTER SPECIFICATION:** `D:\Projects_OnlyAI\akshya-cabs\AKSHAYA_CABS_MASTER_EXECUTION_PLAN.md`  
> **LIVING MEMORY:** `D:\Projects_OnlyAI\akshya-cabs\HANDSHAKE.md`  
> **EXECUTION MODE:** Exactly **ONE TASK PER USER APPROVAL**  
> **TASK COUNT:** 36 independently reviewable tasks  
> **DATE BASELINE:** 09 October 2026 | **TIMEZONE:** Asia/Kolkata

---

# 00. FIRST READ — THE NON-NEGOTIABLE MISSION

**This is a functional replica and substantial upgrade of the existing Sri Vinayaka Tours & Travels (SVTT) website, NOT a visual or textual copy.** You have explicit permission to reuse the original source code, selected pictures, business-data structure, and working logic. Before writing new features, inspect and validate the existing codebase; treat it as a reference implementation for **functional parity**, not as the new design.

**Preserve the meaning and factual service information:** the approved seven vehicle categories, all applicable vehicle variants and rates, all ten tour packages, per-vehicle package price matrices, distances/limits, temple stops, nine service categories, contact/enquiry capabilities, airport/railway/local/outstation offerings, blog topics, useful policies, and navigation destinations. **Do not copy descriptions verbatim.** Create fresh English content and genuine Telugu localization. Use distinctly different navigation hierarchy, typography, colours, imagery, spacing, components, animation, and page architecture. Changing only the logo/colours/text is **not acceptable**.

**This instruction overrides stale instructions copied from the SVTT project.** On your FIRST approved execution, run **TASK 01 only**: protect the new copy, **clean/reinitialize the existing `HANDSHAKE.md` without deleting it**, neutralize superseded SVTT instructions and separate the project from the original deployment/repository. Do **not** claim the SVTT project's completed tasks are completed Akshaya tasks. Do **not** start TASK 02 until the user explicitly approves it in a new message.

## Mandatory control rules

1. **Do not execute multiple tasks in one turn.** Read this master plan plus the updated `HANDSHAKE.md`, select the explicitly approved task, perform only that task, verify it, update `HANDSHAKE.md`, report, then **STOP**.
2. **No automatic progression.** Completing task N does not authorize task N+1. “Continue” only means the **next** task, not all remaining tasks. If task scope is ambiguous, request approval before modifying scope.
3. **`HANDSHAKE.md` is the only living project-progress record.** This master file is a stable, read-only specification: **NEVER edit this master MD file** during execution. Record all progress, decisions, image requests, missing information, and errors in `HANDSHAKE.md`.
4. **Never overwrite the original SVTT project, original GitHub repo, or original Netlify site.** Operate only within the exact root above. Never infer a different path. If `package.json` and `src/app/` are not under the supplied root, STOP and ask the user to identify the actual project root.
5. **Do not remove approved services or data because they are inconvenient.** Identify and preserve feature parity. Exclude original owner's identity, testimonials, review stars and Google ratings (those belong to another company).
6. **Truthful content.** Never fabricate reviews, ratings, “number of trips,” operating licenses, awards, fleet ownership, live GPS/flight/train tracking, driver availability, guaranteed darshan, exact distances, booking confirmations, or fare guarantees. Clearly distinguish *enquiry*, *quotation*, and *confirmed booking*.
7. **Image generation is a HUMAN-IN-THE-LOOP workflow.** Claude writes prompts + exact output filenames/paths; user generates in ChatGPT and places files in the stated paths; Claude validates and integrates them. **Do not silently generate founder faces, logos or fictional documentary photos.**
8. **Do not assume tests passed.** Actually run relevant commands; report results and limitations. “Not run” is not “passed.”
9. **No unapproved external effects.** Ask first before creating/connecting a remote GitHub repo, pushing changes, publishing to Netlify, changing DNS/Namecheap, sending messages, enabling paid APIs, or buying services.
10. **User's priorities:** original and impressive design; fast mobile-first experience; English + Telugu; complete feature coverage; SEO/local lead generation; dependable WhatsApp + phone + Netlify Forms; inexpensive maintainability and Netlify deployment.

### What to say when the user gives this MD file for the first time

1. Confirm you found `D:\Projects_OnlyAI\akshya-cabs` and this plan.
2. Read the entire document, inspect `package.json`, `AGENTS.md`, `CLAUDE.md` and the existing `HANDSHAKE.md`.
3. Execute **TASK 01 only**, provided the user has authorized execution. In this project the instruction to follow the master plan and perform its first task constitutes authorization for TASK 01; if only asked to inspect, inspect without modification.
4. Present the TASK 01 test and change report, state the next task, and ask: **“TASK 01 is complete. May I start TASK 02?”**
5. Stop. Never start TASK 02 in the same turn.

---

# 01. VERIFIED INPUTS AND SOURCE-OF-TRUTH HIERARCHY

**This plan is informed by inspection of the supplied `svttt-main.zip` source archive.** The agent must additionally inspect the **user's actual copied local folder**; file names and versions might differ. If they do, record differences in `HANDSHAKE.md` instead of assuming the archive is current.

**Truth hierarchy (highest first):**

1. Business decisions explicitly confirmed by the user in this project.
2. This master plan (until the user explicitly changes it).
3. Current, verified factual information in `src/data/vehicles.ts`, `packages.ts`, `services.ts` and related source files — excluding old business identity/review data.
4. Verified current travel/temple regulations, routes, and official business information.
5. The old SVTT public website, for functional research only.
6. Old SVTT prose, styling, HANDSHAKE history and blueprint: **historical reference only**, never active instructions.

If two sources conflict, note the conflict in `HANDSHAKE.md`, avoid changing approved rates by assumption, and raise a concise question or use a safe non-committal display.

## A. Approved business identity

| Field | Akshaya Cabs value |
|---|---|
| Public business name | **Akshaya Cabs** |
| Domain / canonical base | `https://akshayacabs.com` |
| Domain registrar | Namecheap |
| Owner / founder public name | **S.R. Kumar** |
| Owner alias | Ravi — same person; do not automatically publish the alias without a reason |
| Owner photo | **User will supply genuine photo**; temporary neutral placeholder only |
| Logo | **User will supply**; never present generated placeholder as official logo |
| Primary call + WhatsApp | **+91 72888 76667** — `tel:+917288876667`, WhatsApp `917288876667` |
| Secondary call + WhatsApp | **+91 93939 00006** — `tel:+919393900006`, WhatsApp `919393900006` |
| Email | `akshayacabs7@gmail.com` |
| Street address | `D.No. 18-38-S3-314, Madura Nagar` |
| City / postal | `Tirupati – 517501, Andhra Pradesh, India` |
| Google Maps | `https://maps.app.goo.gl/XcmrEFDmhH2uKPvg8?g_st=aw` |
| Instagram | `https://www.instagram.com/akshayacabs` |
| Facebook | `https://www.facebook.com/share/1J1DHsBsws/` |
| X / Twitter | `https://x.com/akshayacab` |
| Availability | 24 hours a day, 7 days a week — confirmed |
| Preferred booking | WhatsApp-first + click-to-call + REAL Netlify enquiry form |
| Payment / portal / auth | No online payment, no login, no booking dashboard for Version 1 |
| Languages | **English (`en-IN`) and Telugu (`te-IN`)**, genuine translations across all page types |
| Reviews / star ratings | **None** until Akshaya-specific verifiable reviews exist. NEVER reuse SVTT ratings or reviews |
| Driver allowance | **Included in displayed vehicle and package rates; do not add it twice** |
| Additional charges | Disclose tolls, parking, state permits and any separately approved extras where applicable |
| Hosting / development | GitHub + Netlify; local editor Antigravity with Claude Sonnet |

**Address display suggestion:** `D.No. 18-38-S3-314, Madura Nagar, Tirupati, Andhra Pradesh 517501` (retain user's capitalization/punctuation where necessary).

## B. Brand and visual direction — NEW, NOT SVTT

- **Tagline:** *Every Journey, Beautifully Planned.*
- **Brand promise:** easy local and outstation taxi enquiries + thoughtfully planned temple visits from Tirupati. Do not use unsupported “#1” / “most trusted” claims.
- **Primary midnight navy:** `#102B46`; **teal:** `#0FAF9D`; **sunrise gold accent:** `#F2B75C`; **cloud white:** `#F6F8FB`; supporting dark text, borders, neutral gray to be defined with accessible contrast.
- **Typography:** **Sora** for headings; **Manrope** for English body/UI; **Noto Sans Telugu** for Telugu content. Verify actual Telugu glyph rendering and font payloads.
- **Direction:** travel-tech / premium mobility experience with cinematic but authentic Tirupati imagery; prominent short trip finder; distinctive destination explorer; clean fleet comparison; helpful route/package details.
- **Visual originality gate:** No reuse of old maroon/gold palette, Playfair headings, Inter + Playfair pairing, SVTT's hero layout, section-by-section compositions, `.svtt-*` CSS class names, branded icons, logos, old owner's photo, ratings or testimonials. A few generic UI patterns are acceptable; whole-page look and content should not be recognizably duplicated.
- **Tone:** clear, contemporary, welcoming Indian English; respectful, fluent Telugu, not automatic-word-for-word translation.
- **Mobile focus:** usable at 320px, 360px, 375px, 390px, 414px, 430px; tablet and desktop thereafter. Forms easy to finish with a thumb; persistent bottom booking controls must not obscure content.

## C. Verified technical baseline in archive

- Next.js **16.3.8**, React **19.2.8**, TypeScript, Tailwind CSS **4**, ESLint, Prettier.
- `src/app/` currently contains Home, About, Blog + dynamic article, Contact, Fleet, Pickup/Drop, Privacy Policy, Request Quote, Reviews, Services, Terms, Tour Packages + dynamic package, sitemap, robots and not-found routes.
- Components include header/footer/floating contacts, service/hero/fleet/package sections, a vehicle filter gallery, package filter tabs, quote and contact forms.
- Centralized data: `src/data/business.ts`, `vehicles.ts`, `packages.ts`, `services.ts`, `social.ts`, `blog.ts`, `testimonials.ts`; WhatsApp utility: `src/lib/whatsapp.ts`.
- Asset directories currently include hero, vehicles, packages, destinations, services, blog, about, logo and owner.
- Old `HANDSHAKE.md` is approximately **817 lines** of SVTT history. Old `CLAUDE.md` includes `@AGENTS.md`; the `AGENTS.md` contains Next.js-specific instructions. Do not erase the valid Next.js framework guidance without checking it.
- Existing forms mostly prepare WhatsApp links and may imply an enquiry was *received* before the customer sends it. New behavior must be accurate.
- Source `sitemap.ts` may enumerate service detail URLs that are not implemented; new sitemap must include **only actual, publicly accessible canonical pages**.
- Blog source contains **8 topic entries**; do not publish empty “coming soon” article shells as finished SEO content.
- The legacy vehicle data includes `driverCharges` fields although the user confirmed allowance is already included: treat those fields as legacy reference, not surcharge to be added to the shown fare.

## D. Approved vehicle baseline (from actual source)

| Vehicle category | Passenger seats (+driver) | Per km | Local 8-hour base | Source daily km limit |
|---|---:|---:|---:|---:|
| Dzire / Amaze / Etios | 4+1 | ₹15 | ₹2,000 | 300 km |
| Ertiga | 6+1 | ₹19 | ₹2,300 | 300 km |
| Innova | 7+1 | ₹21 | ₹2,500 | 300 km |
| Innova Crysta | 7+1 | ₹23 | ₹3,000 | 300 km |
| Tavera | 8+1 | ₹20 | ₹3,000 | 300 km |
| Tempo Traveller | 12+1 | ₹27 | ₹3,000 | 300 km |
| Tempo Traveller | 17+1 | ₹35 | ₹5,000 | 300 km |

**Vehicle image files in original assets (9):** `amaze.webp`, `dzire.webp`, `ertiga.webp`, `etios.webp`, `innova.webp`, `innova-crysta.webp`, `tavera.webp`, `tempo-traveller-12.webp`, `tempo-traveller-17.webp`. Preserve these as licensed fallbacks or comparison references. A generic vehicle stock image must be labelled illustrative, never implied to be a real company-owned vehicle. Preserve source per-vehicle `prices[]` and `capacity` semantics and validate all displayed data programmatically.

## E. Approved tour-package baseline (preserve factual details)

| Source reference | Package/service meaning | Starting price | Stated distance limit / duration |
|---|---|---:|---|
| `SVTT0001` | Tirupati + Tirumala local temples | ₹3,600 | 300 km / 1 day |
| `SVTT0002` | Tirumala hill and local temples | ₹3,300 | 300 km / 1 day |
| `SVTT0003` | Tirumala, Kanipakam, Padmavathi | ₹5,200 | 300 km / 1 day |
| `SVTT0004` | Tirumala, Srikalahasti, Padmavathi | ₹4,300 | 300 km / 1 day |
| `SVTT0005` | Tirumala and Padmavathi | ₹3,000 | 300 km / ~7 hr |
| `SVTT0006` | Tirumala and Kanipakam | ₹4,500 | 200 km / ~5 hr |
| `SVTT0007` | Kanipakam, Golden Temple (Vellore), Arunachalam | ₹8,000 | 300 km / 1 day, **verify feasibility** |
| `SVTT0008` | Kanipakam, Golden Temple, Arunachalam, Tiruttani | ₹9,000 | 300 km/day / 2 days, **verify feasibility** |
| `SVTT0009` | Tirupati local temples | ₹2,300 | 300 km / 1 day |
| `SVTT0010` | Padmavathi and Srikalahasti | ₹2,500 | 300 km / ~5 hr |

Create new public IDs such as **`AKC0001` … `AKC0010`** (map each one deterministically) and original public titles/descriptions. **Never display `SVTT...` identifiers on Akshaya pages.** Migrate all per-vehicle package-price combinations and every temple/stop from the actual source instead of inferring them from the starting-price table. The user approved the original price baseline; do not silently change it. **Route distance limits and real driving distances are different concepts;** never label the package allowance as verified route distance. The 1-day scope of long multi-city journeys must be checked before a customer's itinerary is promised.

## F. Existing nine service categories — 100% coverage

1. Tirupati local cab services.
2. Tirupati–Tirumala taxi services.
3. Temple/pilgrimage tour packages.
4. Outstation and intercity cabs.
5. Tirupati airport pickup/drop.
6. Railway station pickup/drop.
7. 12+1 / 17+1 Tempo Traveller rental.
8. Customized tours.
9. South India pilgrimage tours.

Additionally preserve the intended customer journeys: round-trip, one-way, local sightseeing, airport/station pickup, group transport, quote requests, destination-specific enquiries, custom itineraries, contact, blog/travel guidance, pricing terms and legal policies. **No false real-time flight, vehicle availability or GPS features** unless a legitimate integration is approved.

## G. Eight existing blog topics — rewrite independently, publish only complete articles

1. Tirupati darshan planning.
2. Tirumala access and local sightseeing guide.
3. Things to see around Tirupati beyond Tirumala.
4. Tirupati to Kanipakam journey guide.
5. Tirupati to Srikalahasti journey guide.
6. Tirupati to Vellore Golden Temple journey guide.
7. Tirupati pilgrimage temple circuit guide.
8. Tirupati Airport to Tirumala traveller guide.

Verify changing religious entry rules, timings, distances, restrictions and ticket information against appropriate official sources; include a verification/update note where needed. Never suggest taxi payment includes temple darshan tickets unless confirmed.

---

# 02. EXECUTION PROTOCOL — ONE TASK, ONE APPROVAL, CONTINUOUS MEMORY

## A. State machine

```text
USER SAYS "RUN TASK NN"
       |
       v
READ MASTER PLAN + HANDSHAKE + REAL FILES
       |
       v
VERIFY ROOT / PERMISSION / PREREQUISITES
       |
       +--> BLOCKED? Record blocker in HANDSHAKE -> ASK USER -> STOP
       |
       v
SET TASK NN = IN_PROGRESS IN HANDSHAKE
       |
       v
IMPLEMENT TASK NN ONLY
       |
       v
RUN TASK-SPECIFIC AND BASIC REGRESSION TESTS
       |
       +--> FAIL? Fix within task scope; if not possible, record BLOCKED -> STOP
       |
       v
UPDATE HANDSHAKE (DONE, EVIDENCE, FILES, DECISIONS, NEXT)
       |
       v
REPORT RESULTS; ASK APPROVAL FOR TASK NN+1
       |
       v
STOP (DO NOT AUTO-CONTINUE)
```

**Allowed task states:** `NOT_STARTED`, `IN_PROGRESS`, `BLOCKED`, `DONE`, `NEEDS_REVIEW`. A task is `DONE` only after its required evidence is recorded. `NEEDS_REVIEW` requires the user's approval or correction, never silently convert to `DONE`. Only move to the next task after explicit user approval.

### Critical scope boundaries

- A task may fix bugs introduced during its own implementation, including related build/test failures. Do not silently implement a later task “while already here.”
- A task that depends on a new image can complete its **prompt-generation subdeliverable**, but cannot falsely mark a dependent image-integration task as complete. Record exact pending filename(s) and blocker.
- If a task must be subdivided due to technical complexity, explicitly ask the user to approve `TASK NN-A` and update the pending plan in the **handshake only**; do not edit this master plan.
- **Credit-efficient new sessions:** after Task 01, read **`HANDSHAKE.md` first** for the full state, then consult the master plan **Sections 00 and 02 plus the explicitly approved task entry** (and any directly referenced supporting section). Re-read the entire master plan only when establishing a first session, reconciling an inconsistency or performing a broad audit. Never resume merely because a task is pending; require current user authorization.
- **After every 5–6 tasks**, proactively include a compact **New Session Handoff** in the handshake summarizing state and exact next approved action. This handoff is not a substitute for keeping full task history.

## B. `HANDSHAKE.md` — required new format, initialized in TASK 01

Keep `HANDSHAKE.md` **at the root**. Replace all old SVTT content after creating an out-of-project backup (or Git-safe backup). Use a structure like:

```md
# AKSHAYA CABS — HANDSHAKE / SESSION CONTINUITY

## Read first
Master plan: AKSHAYA_CABS_MASTER_EXECUTION_PLAN.md (READ ONLY)
Local root: D:\Projects_OnlyAI\akshya-cabs
Approved mode: ONE TASK PER USER APPROVAL; NEVER AUTO-RUN NEXT TASK
Website: https://akshayacabs.com
Last updated: YYYY-MM-DD HH:mm IST

## Current execution state
Current task: TASK-01 / task name
Current status: DONE | IN_PROGRESS | BLOCKED | NEEDS_REVIEW
Last completed: TASK-01
Next proposed: TASK-02 (NOT APPROVED YET)
User approval received for: TASK-01 only
Source guard: Original SVTT repo/site untouched

## Immutable confirmed business facts
[Owner, phone, address, domain, languages, 24/7, pricing rules, no reviews]

## Architecture & major decisions
[App structure, locale routes, form strategy, fonts, Netlify plan, caveats]

## Full task board (TASK-01 through TASK-36)
| ID | Description | Status | Date | Evidence |
| ... |

## Per-task completion log (append entry after EVERY task)
### TASK-01 — YYYY-MM-DD HH:mm IST
- User approval: [statement]
- Scope completed: ...
- Files created/modified/deleted: ...
- Tests actually run + outcomes: ...
- Manual checks / screenshots (paths): ...
- Decisions and deviations: ...
- Risks / blockers / user input required: ...
- Git commit/hash if created: ...
- Next task proposal (NOT AUTHORIZED): TASK-02

## Asset request and delivery tracker
| Asset ID | Prompt recorded | Exact target path | Status | User action needed |

## Risks, unresolved questions & launch blockers
[No fabricated information, no old SVTT references]

## New-session quick handoff
[What changed in last ~5 tasks, known good build, outstanding issues, files to inspect,
 exact next task, permission state; new session MUST ask/verify approval]

## Owner decisions & change requests (append-only)
[Timestamp and user instruction]
```

### Exactly how HANDSHAKE should be updated

1. **Before changes:** mark task `IN_PROGRESS`, timestamp and approved scope; leave prior task log intact.
2. **After code and tests:** list files, changes, test command exit codes, defects, decisions, image dependencies, evidence, and next proposed task.
3. **At completion:** mark `DONE`; if tests incomplete/failed, record `BLOCKED` or `NEEDS_REVIEW` instead and describe why.
4. Keep task board and last completed/next proposed consistent. Update “last updated” in IST. Avoid wiping old Akshaya task history when refreshing the top summary.
5. Maintain precise continuity: no hidden decisions only in chat. Any user instruction that changes specifications must be recorded in the handshake.
6. On new session, review the last task's file list and evidence; verify the repository state before coding. Do not assume previous outputs exist without checking.

## C. Response template after each task

```text
AKSHAYA CABS — TASK-NN [TASK TITLE]
Status: DONE / BLOCKED / NEEDS_REVIEW
What changed: [3–6 concrete points]
Files touched: [exact paths]
Tests: [commands and outcomes; note what was not tested]
Visual/mobile check: [screens/pages inspected or NOT RUN]
Images needed: [asset ID, output filename and target folder or NONE]
HANDSHAKE.md: UPDATED (IST timestamp)
Old SVTT site/repo: UNTOUCHED
Next proposed task: TASK-(NN+1) — [title]
May I start TASK-(NN+1)?
```

**A task is not complete without an updated HANDSHAKE.** This includes documentation-only tasks and blocked tasks (record status accordingly).

## D. Per-task quality gate (always apply)

- Run `npm run lint` where applicable.
- Run `npx tsc --noEmit` where applicable.
- Run `npm run build` at meaningful component/page/configuration milestones (and **always** for build-sensitive tasks and before completion of production readiness). If skipped for a documentation-only task, say *not applicable* and why.
- Verify pages/links/actions touched by the task in local dev; inspect browser console and mobile viewport for visual tasks. Do not claim browser testing if Antigravity lacks browser access.
- Preserve approved source data, localized routing, semantic accessibility and link integrity.
- Check there is **no public SVTT branding** in touched output. During migration, reference data files may still contain SVTT until their respective cleanup task; track remaining leaks.
- For WhatsApp/Netlify form behavior, use end-to-end manual tests on the appropriate deployed environment; mock/unit tests alone are insufficient.
- Do not claim remote form submission, DNS verification or Google indexing succeeded without verifying it.

---

# 03. USER IMAGE WORKFLOW — EXACT PROMPTS, ASSET FILES AND APPROVAL

Claude Sonnet is **the image art director**, not the image generator. The user will return to ChatGPT to generate images and then upload them into `D:\Projects_OnlyAI\akshya-cabs`. Claude must create prompts and request files instead of inventing user assets. Create/update the asset registry **within `HANDSHAKE.md`**, optionally create `docs/ASSET_REQUESTS.md` as a prompt library; updating that secondary file NEVER replaces handshake updates.

For every needed image, Claude shall output a standalone copyable prompt with **all** these fields:

```text
ASSET ID: AKC-HERO-DESKTOP-01
USED ON: Homepage hero
TARGET FILE: D:\Projects_OnlyAI\akshya-cabs\public\images\akshaya\hero\hero-desktop.webp
SIZE: 1920 x 1080 pixels (16:9)
VISUAL PROMPT: [specific location/subject, credible Indian vehicles, scene, lighting,
realism, strong composition, non-overlapping space for heading/search, premium travel feel]
NEGATIVE INSTRUCTIONS: No logo, no embedded text, no watermark, no fake rating,
no vehicle number plate, no inaccurate religious symbolism, no borrowed SVTT graphics.
FILE REQUIREMENTS: WebP preferred; JPEG/PNG accepted temporarily and optimize locally.
USER ACTION: Generate in ChatGPT; save to EXACT target location; tell Claude once uploaded.
```

Recommended folder hierarchy (create as needed; avoid renaming the user's root):

```text
D:\Projects_OnlyAI\akshya-cabs\
  public\images\akshaya\
    hero\            hero-desktop.webp, hero-mobile.webp
    fleet\           sedan-*.webp, ertiga.webp, innova*.webp, tempo-*.webp ...
    packages\        akc0001.webp ... akc0010.webp
    destinations\    tirumala.webp, kanipakam.webp, srikalahasti.webp,
                     padmavathi.webp, vellore.webp, arunachalam.webp ...
    services\        airport.webp, local-cab.webp, outstation.webp ...
    brand\           logo.svg, logo-light.svg, icon-512.png, og-cover.webp ...
    founder\         sr-kumar.jpg (genuine user-provided photograph ONLY)
    blog\            [article-slug].webp
```

### Prioritized image delivery batches

| Priority | Assets | Suggested dimensions | Gate |
|---|---|---|---|
| P0 | Official logo, real founder photo | Vector SVG + PNG; founder 1000×1200 | User-supplied; placeholders permitted until delivered |
| P0 | New homepage desktop + mobile heroes | 1920×1080; 1080×1350 | Should be ready for final homepage sign-off |
| P1 | 9 vehicle photos (separate variants where useful) | 1200×800 | Old authorized images allowed as TEMPORARY placeholders |
| P1 | 10 original package covers | 1200×800 | Avoid uniform cloned SVTT-style photo backgrounds |
| P1 | 6 destination images | 1200×800 | Authentic/accurate temple representation |
| P2 | Service, airport, blog, about, social OG extras | 1200×800; OG 1200×630 | Generate as specific sections are built |

**Do not generate an imaginary photo and label it “S.R. Kumar.”** Request his original. Similarly, the business owner supplies the official logo. If photo licensing or authenticity is uncertain, use an image-safe neutral visual and request clarification. Keep source-file backups and optimize loaded assets (correct dimensions, alt text, lazy loading except LCP hero, modern formats) without harmful compression.

### When an image is missing

1. Write a prompt for the **specific current task** and the exact destination path.
2. Enter `PENDING_USER_UPLOAD` in the handshake asset tracker.
3. If the task cannot genuinely finish without the image, mark that task `BLOCKED` and ask the user to upload the file. Do not auto-start another task.
4. If a structurally correct placeholder is permitted for that task, finish with a labelled placeholder and mark final asset integration as an open launch blocker. Do not claim full visual sign-off.
5. On the user supplying an image, verify dimensions/format/quality, copy to correct path only within project root, integrate and retest the owning task with approval.

---

# 04. PAGE MAP AND COMPLETE FEATURE PARITY

This map is a **minimum delivery checklist**. Route names may be improved for UX, but every intended capability must remain reachable and testable. Use bilingual URL prefixes and translated UI throughout.

| Area | Source functionality | Required original Akshaya experience |
|---|---|---|
| Global header/mobile nav | Navigation, phone, WhatsApp | Distinct nav + language toggle + clear booking CTA + accessible drawer |
| Home | Hero, services, destinations, vehicle/package previews, CTA | Original art direction, prominent trip search, destination discovery, trust without fake reviews |
| Services | 9 categories | 9 independent, rewritten service entries and meaningful service detail/anchor paths |
| Fleet | 7 categories / filters / rates | 9 real vehicle variants within 7 classes, smart seat filters, pricing and fit guidance |
| Packages | 10 packs, filters, vehicle prices | Discover/filter/compare packages; original cards, all temple stops, pricing matrix |
| Package details | Stops, descriptions, enquiry CTA | Complete itinerary with factual notes, inclusions/exclusions, enquiry with context |
| Pickup & Drop | Airport/station/local/intercity | Purpose-built transfer finder, clear pickup/drop/date fields |
| Request Quote | Customer/trip form; WhatsApp | Guided form, user-friendly validation, WhatsApp and persistent Netlify form options |
| Contact | Contact form, address, social | Akshaya contact/map/calls/both WhatsApp links, real lead capture |
| About | Owner, story | Original copy, genuine founder photo, truthful business claims |
| Reviews | Old SVTT social proof | **Replace with an ethical “Why travel with us / What to expect” section; NO reviews/rating page claims** |
| Blog | 8 article topics | Original finished guides, localized editorial plan, internal links and verified route facts |
| Privacy / Terms | Policies | New business-specific policies; contact consent, cancellation only if owner confirms terms |
| SEO | Existing title/meta/sitemap/robots | Canonical/OG/JSON-LD/hreflang/route landing pages and verified local SEO |
| Social | Instagram/Facebook/X | New supplied Akshaya links only |
| Missing source features to add | Limited trip planning, one language | Telugu, smart trip wizard, package compare, seat advisor, route-oriented enquiry, better accessibility |

**Suggested English IA:** Home · Book a Cab · Our Fleet · Tour Packages · Destinations · Services · Travel Guides · About · Contact. Some secondary pages belong in a “More” menu; avoid overcrowded mobile navigation. Every locale should have identical feature reachability.

**Proposed locale strategy:** `/en/...` for English and `/te/...` for Telugu; root `/` should deterministically choose a primary locale (`/en/` recommended) without an endless redirect. Locale switch maps to the equivalent translated route; preserve trip form state where feasible. If framework architecture requires a different stable locale path plan, explain and record before implementation; don't mix `/te` URLs with untranslated English-only bodies.

### New interactive product features (Version 1; no paid APIs)

- Trip type tabs: **One-Way**, **Round Trip**, **Local**, **Airport / Railway**, **Temple Tour**, **Custom Tour**.
- Guided enquiry inputs: pickup, destination, date/time (IST), return date if applicable, group size, luggage preference, vehicle, notes; mobile-appropriate inputs; no past-date selection.
- Vehicle selection guidance based on **actual passenger seats** (and luggage as advisory, not definitive) with human confirmation.
- Fare guidance based on **approved published tariffs only**. For cases requiring unknown route distance/excess km/tolls/multi-day rules, show “Request exact quote”; NEVER fabricate computed totals.
- Package filters for destination, type, duration and group fit; compare up to three packages in a dedicated comparison view; all values sourced from catalog.
- Custom itinerary shortlist: select validated destinations, generate an **enquiry summary**, not a promise of booking/darshan or an unverified fixed travel-time schedule.
- Contextual WhatsApp (both numbers) and click-to-call CTAs; deep links preserve selected package/vehicle/travel details.
- Real lead-capture form with valid consent, email notification configuration (when user enables it) and accurate success/error states.
- Browser-local state for harmless comparison/selection only; no mandatory login, paid service, database, or admin portal.
- Accessible menus, keyboard navigation, meaningful loading/empty/error states; lightweight motion respecting reduced-motion preference.

---

# 05. TASK BOARD — 36 SMALL, SEPARATELY APPROVED EXECUTIONS

**Every task below is bounded.** Each task must apply the universal execution protocol and handshake update. Do not auto-execute task N+1. `STOP + ASK` at the end of **every** task (including audit/documentation-only tasks).

## PHASE A — SAFE ISOLATION, MIGRATION AND DESIGN FOUNDATION

### TASK 01 — Safeguard the project and CLEAN `HANDSHAKE.md` (FIRST TASK)

**Objective:** Turn the copied SVTT workspace into a safely isolated Akshaya workspace and reset the AI's project memory before other implementation.

**Exact steps:**
1. Confirm the root is `D:\Projects_OnlyAI\akshya-cabs`, with `package.json` and `src/` directly below it. Check repo status without deleting anything yet.
2. Verify the original SVTT folder is a different path. If `.git` exists, determine whether it points to `github.com/svtttirupati/svttt`; **never push**. For the *copied project only*, detach old Git linkage (safe local backup/rename of `.git` if needed), then arrange later creation of a new repo. Do not touch original folder. Check for inherited Netlify/Vercel project links/config and environment secrets; remove or neutralize connections in the copy only, never disclose secrets.
3. Back up the old `HANDSHAKE.md` **outside the Akshaya project repository** (e.g., adjacent private backup directory) so its SVTT history cannot contaminate prompts or publishing. Record backup location in the new handshake; ensure it is not pushed to Git.
4. **Keep the file `HANDSHAKE.md` in place and completely replace its 817-line SVTT history** with the Akshaya handshake schema above, all 36 task statuses, confirmed facts, and a current TASK 01 record.
5. Inspect `AGENTS.md` and `CLAUDE.md`; retain useful Next.js 16 framework guidance; neutralize stale project-specific directions only. No need to remove valid framework instructions.
6. Identify `sri-vinayaka-tours-travels-website-blueprint.md`, old `docs/DESIGN_SYSTEM.md`, and `docs/ASSET_REQUIREMENTS.md` as legacy: archive safely outside active agent instruction paths or replace later; mark decision in handshake. **Do not delete code/data/images needed for migration.**
7. Ensure `node_modules`, `.next`, `.netlify` and secret files are ignored/cleaned when safe; avoid deleting active local secrets without user knowledge. Take a file inventory snapshot. Do not modify public UI in this task.

**Acceptance:** Old original untouched; exact root validated; old SVTT handshake no longer active; new handshake contains **all 36 task entries**, correct current state and no claim the new site is deployed; no remote push. **STOP + ASK approval for TASK 02.**

### TASK 02 — Audit every original feature, route, reference and asset

**Objective:** Build a complete parity map from the actual copied source, with no UI changes.

**Do:** Inspect all `src/app` pages, layouts, CSS, `src/components`, `src/data`, `src/lib`, media folders and package scripts. Catalogue every navigation link, button, form, filter, price display, destination and old brand string. Identify live pages missing from the source or source-only non-working links. Distinguish current functionality from claimed functionality (e.g., "live flight tracking" may be mere copy). Audit route/page count, dynamic packages and blog articles. Create a compact parity matrix in `docs/AKSHAYA_PARITY_AUDIT.md` (allowed supporting document); summarize it comprehensively in handshake.

**Acceptance:** No missing source page or action from checklist; orphaned routes/links/risks identified; no feature coding yet; handshake updated. **STOP + ASK.**

### TASK 03 — Create Akshaya business and pricing data foundations

**Objective:** Migrate factual approved data without changing user-facing design yet.

**Do:** Centralize Akshaya identity, contacts, official social URLs and address in `src/data/business.ts`, replace old social data, map 7 vehicle categories/9 image variants and **all 10 full package price matrices**. Map `SVTT0001…0010` to `AKC0001…0010`, store stable IDs, destinations and every temple stop. Apply driver allowance **included** rule without accidental duplication; preserve rate fields, plus clear policy for toll/parking/permits and quote-vs-confirmation. Add data validation tests if feasible. Remove old testimonials and Google rating from Akshaya data references; handle any affected components temporarily without breaking build.

**Acceptance:** Source parity tables compare accurately; 7 categories, 10 packages, 9 services and corresponding price matrix rows verified; no old identity exposed via new business configuration. **STOP + ASK.**

### TASK 04 — Original UX strategy and wireframe architecture

**Objective:** Decide an original information hierarchy before rewriting all frontend components.

**Do:** Design sitemap, desktop/mobile page wireframes, search-first homepage, responsive nav, layout patterns, content hierarchy and primary CTA locations. Use insights from travel booking platforms (search, clear fare context, destination discovery, comparison, mobile usability); do NOT clone any existing site's distinctive UI. Describe 5–8 core original components, plus interaction states. Document in `docs/AKSHAYA_DESIGN_SYSTEM.md` and summarize approved direction in handshake. Do not re-skin old SVTT CSS.

**Acceptance:** Original layouts visibly different from existing SVTT wireframes; route structure covers full parity; accessible mobile navigation planned. **STOP + ASK.**

### TASK 05 — Build design tokens, fonts, UI primitives

**Objective:** Implement the new original design system safely.

**Do:** Configure Sora, Manrope, Noto Sans Telugu fonts; accessible token palette and type scale, buttons, cards, chips, form fields, badges (not fake trust badges), container/grid, reusable icons, micro-interaction/motion safety. Replace SVTT-specific CSS composition instead of sprinkling overrides; use semantic HTML, WCAG-friendly focus/contrast. Remove unused original heading/body font imports.

**Acceptance:** Isolated UI components render on mobile/desktop, no duplicate old typographic language, lint/typecheck/build green. **STOP + ASK.**

### TASK 06 — Establish scalable `/en` / `/te` language routing

**Objective:** A robust foundation for English + Telugu, expandable to more languages later.

**Do:** Configure locale-safe route structure and stable locale-aware links; support `en-IN`/`te-IN`, default root routing, equivalent-locale switching, 404 behavior, locale persistence if appropriate, server-rendered content for SEO. Use a maintained typed dictionary structure or suitable i18n package compatible with **actual Next.js 16 documentation**; avoid magic string replacements. Add explicit `lang` and semantic metadata placeholders. Do not translate all long content in this task.

**Acceptance:** Two test routes work, switcher does not generate 404 or redirect loops, correct HTML language, shared navigation paths localize. **STOP + ASK.**

### TASK 07 — Build core bilingual UI dictionary and conventions

**Objective:** Localize reusable app vocabulary without machine-like text.

**Do:** Translate navigation, 9 service labels, fleet categories, buttons, forms, validations, booking statuses, errors, accessibility labels, “fare from,” “extra charges,” consent, footer and travel terms. Set terminology conventions for Tirumala/Tirupati temples, currency and dates. Format ₹ in `en-IN` and `te-IN` appropriately; handle Telugu line-height/wrapping and mixed English car model names. Add dictionary missing-key checks.

**Acceptance:** No missing translations in shared shell and form building blocks; English/Telugu switching visibly correct; glossary documented. **STOP + ASK.**

### TASK 08 — Implement original shared header, footer and mobile navigation

**Objective:** Replace the website shell without copying SVTT page structure.

**Do:** Build distinct responsive header/nav, locale selector, footer with new contact/address/social, keyboard-friendly mobile drawer, sticky bottom Call/WhatsApp actions with safe-area offsets, breadcrumb foundation. Keep clear book-a-cab CTA and skip-to-main link; prevent overlapping mobile overlays and scroll locks. Update initial metadata to Akshaya placeholders before public preview.

**Acceptance:** All agreed routes reachable or clearly marked pending without broken links; both locales; primary/secondary numbers correct; mobile nav keyboard tested. **STOP + ASK.**

## PHASE B — MEDIA, HOME AND CORE CATALOG

### TASK 09 — Produce full image inventory and ChatGPT-ready prompts

**Objective:** Ask the user for **specific, original image assets** with no confusion about paths/sizes.

**Do:** Inspect all existing assets and image references. Write a prioritized list of exact target filenames under `public/images/akshaya/`. Generate detailed, independent prompts for **desktop/mobile hero**, 9 vehicle variants, 10 package cards, at least 6 destinations, service images, and a share/OG cover as needed. Explicitly request **official logo** and **real founder S.R. Kumar photo** from the user without inventing them. Suggest which existing licensed photographs can stay temporarily and which should be replaced for a distinct site. Create `docs/ASSET_REQUESTS.md` and mirror tracking state in handshake.

**Acceptance:** Every requested asset has dimensions, aspect ratio, complete ChatGPT prompt, target path and priority. User receives a clear upload request; no false claim that images exist. **STOP + ASK** (not necessary to wait for all low-priority assets before unrelated tasks).

### TASK 10 — Prepare media optimization and safe asset wiring

**Objective:** Build a reliable way to integrate user-supplied images when they arrive.

**Do:** Establish directory names, Next/image or suitable responsive image approach compatible with Netlify, alt text conventions for both locales, lazy loading and critical hero preloading, local optimization of supplied PNG/JPEG to WebP/AVIF when appropriate. Integrate images that actually exist; keep licensed source assets in neutral fallback slots with internal flags where images are pending; never show old brand/logo. Add broken-image fallbacks and correct aspect ratios.

**Acceptance:** No broken assets in pages touched; input/upload status reflected in handshake; no generated owner/official logo; build passes. **STOP + ASK.**

### TASK 11 — Create unique homepage hero + smart trip entry panel

**Objective:** Make the opening experience immediately recognizable as Akshaya Cabs.

**Do:** Original hero with new brand tagline, fresh background/image treatment and responsive trip tabs (one-way, round-trip, local, airport/station, temple, custom). First interaction should ask for pickup/destination/date and send visitors into booking/enquiry flow; before TASK 18 it may route to a documented form prototype rather than fake booking. Correct headline language in both locales. Use real images if delivered; otherwise documented placeholder and asset request.

**Acceptance:** At 320–1920px no overlap/crop/hard-to-read heading; clear CTA, correct tab behavior, bilingual labels, keyboard tests; note any missing hero assets. **STOP + ASK.**

### TASK 12 — Build original homepage discovery sections

**Objective:** Complete homepage beyond the hero with original visual composition.

**Do:** Cover all 9 services; fleet preview; featured packages; 6 destinations; why choose Akshaya (claims backed by real service facts); process/how it works; 24/7 and inquiry CTAs; selected helpful travel-guide links. Avoid copied headline/sequence/visual patterns. Do not show ratings/reviews or unverified company counts.

**Acceptance:** Every preview links to a real route (or clearly planned route until implemented); source functionality accounted for; both locales; responsive/a11y checks. **STOP + ASK.**

### TASK 13 — Rebuild the fleet page, filters and vehicle selection

**Objective:** Complete all approved fleet options in an entirely new vehicle gallery.

**Do:** Display seven categories and nine model photos, accurate seat counts/AC/approved local + per-km fares, driver included, 300-km/day source allowance where relevant, exclusions. Filter by seats/class/trip suitability; useful compare view and context-aware Request Quote CTA. Prevent 4+1 from being interpreted as five passengers. No fake live vehicle availability. Validate source price matrix.

**Acceptance:** All seven categories present, prices match approved data, filter reset/empty states work, mobile photo/capacity displays and Telugu labels are correct. **STOP + ASK.**

### TASK 14 — Build ten-package listing and discovery experience

**Objective:** Redesign tour browsing without losing information.

**Do:** Implement `AKC0001…0010` listing with original copy, categories, duration, verified descriptive stops, starting prices, accurate allowance label, image and enquiry CTA. Filters by category/destination/duration, compare affordance. Avoid assuming the listed km allowance represents route distance. Make large itinerary cards scannable on mobile.

**Acceptance:** Exactly ten packages, correct IDs and prices, functioning filters/sorting if added, all links resolve, no old IDs visible. **STOP + ASK.**

### TASK 15 — Implement all ten complete package-detail pages

**Objective:** Preserve **every stop and per-vehicle price** while upgrading explanation and enquiry flow.

**Do:** Create an original detail template with title, duration, itinerary/stops in correct order, inclusions vs exclusions, full vehicle-wise price table, kilometre allowance and caveats, suitable group sizes, FAQ where factual, WhatsApp/enquiry details. Rewrite descriptions independently; do not invent temple timings or darshan entitlements. Flag potentially unrealistic long circuits/durations in handshake; show advisory wording until validated.

**Acceptance:** Each of 10 slugs inspected, all existing temple stops present, correct per-vehicle prices and applicable terms, no fake distance/timing, metadata placeholders, bilingual routing works. **STOP + ASK.**

## PHASE C — SERVICES, BOOKINGS AND LEADS

### TASK 16 — Rebuild all nine service experiences

**Objective:** Ensure not one service is omitted or only represented by a dead card.

**Do:** Complete service overview and either meaningful unique detail pages or clear anchored experiences for all nine listed services; distinct original copy/images, appropriate fleet, realistic service descriptions, contact CTAs and cross-links to trip form. Remove unsupported claims such as real-time train/flight tracking, if no integration exists. Maintain English/Telugu route parity.

**Acceptance:** 9/9 service coverage with working navigation; no unverifiable operational promises; mobile/desktop verified. **STOP + ASK.**

### TASK 17 — Create airport, railway, local and outstation transfer experience

**Objective:** Improve `pickup-drop` beyond a generic enquiry page.

**Do:** Trip purpose selector, pickup/drop context, airport/railway references, baggage and passenger requirements, date/time in IST, vehicle suggestion, outstation notes, one-way/roundtrip handling, service hours (24/7). Use only verified airport/station names; no fake terminal/flight-tracking data. Build lead flow entry points reused elsewhere.

**Acceptance:** All four trip contexts work, input fields adapt, CTA carries context, date validations are meaningful. **STOP + ASK.**

### TASK 18 — Implement real guided trip planner and fare guidance

**Objective:** Convert user intent into complete, accurate enquiries.

**Do:** One-way/round-trip/local/airport/temple/custom steps with progressive disclosure, date/time and return validations, seat-count recommendation, vehicle preference, summary and clear “estimated vs quote” wording. Use source per-km tariffs only when real distance input is explicitly validated; avoid arbitrary distance API costs or unverifiable map estimates. For complex outstation, long circuits, driver overtime/tolls and permits use **request exact quote**. Accessibility labels and Telugu errors required.

**Acceptance:** Start-to-finish flows for every trip type, impossible dates rejected, passengers > capacity not auto-selected, no false guaranteed booking or pricing; unit/interaction tests for validators. **STOP + ASK.**

### TASK 19 — Build robust contextual WhatsApp + phone workflows

**Objective:** Send meaningful structured trip enquiry messages to correct contacts.

**Do:** Centralize URL construction in `src/lib/whatsapp.ts`; ensure `wa.me/917288876667` primary and `wa.me/919393900006` secondary; encode English/Telugu text, include package code/name, vehicle, date/time, pickup/drop, passengers, notes, price context. Provide call CTAs with accurate tel links. Explain “WhatsApp will open with your message; tap Send to complete the enquiry.” Never show “We received your enquiry” merely because `window.open` was invoked. Handle popup blocked/mobile browsers gracefully.

**Acceptance:** Primary/secondary links verified; Unicode round-trip tests; no double sends; correct context on all touched pages; honest confirmation wording. **STOP + ASK.**

### TASK 20 — Implement REAL Netlify enquiry form submissions

**Objective:** Provide actual stored email-notifiable leads, not just WhatsApp links.

**Do:** Build enquiry/contact form with name, valid Indian phone, optional email, service/trip, travel date/time, pickup/drop, passengers, notes, consent checkbox and anti-spam. With Next.js on Netlify, include a **static hidden form definition** (e.g., `public/__forms.html`) with every matching field; submit AJAX URL-encoded data to the valid static target and include `form-name`. Enable form detection in Netlify dashboard during later deployment; do not claim backend success on localhost alone. Show pending/success/failure states **only after actual successful response**; no silent duplicate submit. Use Netlify notification configuration when owner authorizes. Avoid exposing API keys or user contact information to analytics.

**Acceptance:** Local submission logic test; form presence in build verified; document mandatory **production test** with a test lead visible in Netlify Forms and notification received at the configured address. If production test not yet possible, explicitly record as pending launch gate. **STOP + ASK.**

### TASK 21 — Build full contact/map/social page

**Objective:** Make Akshaya easy to reach by any customer.

**Do:** Display 24/7 info, both call/WhatsApp options, clickable address/map directions, `akshayacabs7@gmail.com`, genuine Facebook/Instagram/X links, enquiry form (TASK 20) and relevant location FAQ. Prefer direct directions link without exposing tracking codes when avoidable. Cross-check every digit against business data. Ensure map embed does not slow hero load or violate consent requirements.

**Acceptance:** Calls, WhatsApp, mailto, maps and socials tested on desktop/mobile; all Akshaya contacts; Telugu labels. **STOP + ASK.**

### TASK 22 — Original About and founder story

**Objective:** Introduce real S.R. Kumar and the operating philosophy truthfully.

**Do:** Build distinctive About page with original brand story, genuine supplied owner photo `public/images/akshaya/founder/sr-kumar.jpg`, business location, 24/7 service, vehicles and travel offerings. Ask user for short factual bio if needed; **do not invent years of experience, achievements, licenses or personal quotes**. If photo missing, create exact asset request and appropriate placeholder. Telugu version required.

**Acceptance:** No SVTT owner/content/image; biography verified or neutral; founder photo genuine or pending in handshake; responsive. **STOP + ASK.**

### TASK 23 — Ethical trust and service-expectations design (NO FAKE REVIEWS)

**Objective:** Replace old reviews/5-star section with transparent trust-building content.

**Do:** Remove old GoogleReputation/testimonials imports, old aggregate ratings and user reviews; build “What to expect when you book,” “How enquiries work,” pricing transparency, passenger guidance, 24/7 assistance facts, common questions. Redirect old `/reviews` route appropriately if retained, without serving fabricated content. No fake testimonial avatars, star graphics suggesting reviews, review schema or “5.0” badges.

**Acceptance:** Search rendered pages/data/meta for old reviews/ratings and eliminate from new customer-facing site; CTA trust content is factual. **STOP + ASK.**

### TASK 24 — Package comparison and custom temple itinerary enquiry

**Objective:** Add a genuinely useful feature beyond SVTT, without expensive integrations.

**Do:** Allow comparing up to 3 actual packages on duration, covered temples, group/vehicle prices, allowance, and disclaimer; add custom-destination selector for known routes and build an editable WhatsApp/form enquiry summary. Never invent road distance, trip timings, or guarantee darshan tickets. Implement reset/cancel/empty states and bilingual labels.

**Acceptance:** Compare data matches source; custom request survives navigation into enquiry; responsive and keyboard testing. **STOP + ASK.**

## PHASE D — FULL CONTENT AND SEO REACH

### TASK 25 — Original travel blog system + first four real articles

**Objective:** Replace incomplete legacy blog stubs with useful original English/translated content architecture.

**Do:** Rebuild blog index, author/publish/updated presentation (truthful dates), SEO-friendly slugs, categories, contents/reading guidance, related route links and proper article schema only for real articles. Publish **four complete**, independently authored guides drawn from topics 1–4 of Section 01G. Carefully verify changing temple details; mark unknown facts. Build Telugu delivery for these four (full text, not English paragraphs behind Telugu shell), or explicitly block full completion until translation QA is done.

**Acceptance:** Four complete articles, no “coming soon” placeholders, local/internal links, correct locales, reasonable accessibility/readability. **STOP + ASK.**

### TASK 26 — Final four travel articles + editorial quality check

**Objective:** Complete existing eight-guide coverage.

**Do:** Create four comprehensive original guides for topics 5–8 of Section 01G; add relevant real destination images/prompts, route enquiry CTAs, update/accuracy notes and original Telugu versions. Check title uniqueness, no claims of official TTD affiliation, avoid invented travel distance/ticket rules. Review all eight for factual consistency and internal links.

**Acceptance:** Eight real guides in English and Telugu; all rendered/accessible, no plagiarism or broken images/links, factual caveats logged. **STOP + ASK.**

### TASK 27 — Build SEO-oriented destination and cab route landing pages

**Objective:** Reach high-intent Tirupati customers through genuinely useful, distinctive content.

**Do:** Prioritize separate pages only where they provide **unique value**, e.g. Tirupati ↔ Tirumala, Tirupati airport transfers, Tirupati ↔ Chennai, Tirupati ↔ Bengaluru, Tirupati ↔ Srikalahasti, Tirupati ↔ Kanipakam, Tirupati ↔ Vellore, Tirupati local sightseeing. Describe available services and suitable fleet, transparent quote policies, true geography, useful FAQs, authentic links and distinct calls to action. Research exact distances/travel times before displaying; don't mass-produce near-identical city pages or keyword stuffing. Build corresponding Telugu experiences for each published page.

**Acceptance:** Each published route page adds distinct real value; no doorways, fake pricing or map estimates; pages load bilingually with contextual enquiry links. **STOP + ASK.**

### TASK 28 — English editorial review and brand originality audit

**Objective:** Eliminate copied, repetitive and misleading text across the entire site.

**Do:** Independently rewrite global headings, all vehicle explanations, service descriptions, ten package pages, CTAs, FAQs, About, contact, transfer flows, policies and blog summaries in consistently natural Indian English. Compare source sections semantically for factual parity and manually inspect for sentence-level copying. Keep proper nouns (temples, cities, vehicle names), prices and factual limits unchanged. Distinguish “service available 24/7” from “a driver/vehicle instantly confirmed.”

**Acceptance:** Every English public-facing page has original wording, accurate facts, no stray SVTT language or brand identity; maintain editorial checklist in handshake. **STOP + ASK.**

### TASK 29 — Full Telugu content completion and native usability QA

**Objective:** Ensure Telugu is a real website, not a partially translated toggle.

**Do:** Translate/review every visible page, ten package details, all service cards/pages, fleet, eight blog articles, route pages, form flows, validations, SEO titles/descriptions, legal notices, alt text where appropriate and user messages. Use correct Telugu grammar and respectful local terms; retain useful English models/names in mixed scripts. Confirm Telugu fonts and visible text wrapping at 320px; use proper `lang`, screen-reader labels and no missing-key fallbacks. Prefer human review for high-stakes pricing/policy and religious details.

**Acceptance:** Side-by-side EN/TE route checklist 100% coverage, no untranslated paragraphs/buttons, readable native text, no broken layout; documented language review. **STOP + ASK.**

### TASK 30 — Technical SEO: metadata, hreflang, canonicals, indexing

**Objective:** Prepare pages for Google discovery without deceptive ranking claims.

**Do:** Build unique title tags/meta descriptions, per-locale canonical URLs and valid alternates (`en-IN`, `te-IN`, `x-default`), OpenGraph/X images and descriptions, correct semantic headings, breadcrumbs, robots policies, sitemap for **real** localized pages only, proper 404, correct robots settings for dev/staging/production, clean URLs, image alt/title policies, favicon and OG artwork using supplied logo. Avoid canonical pointing every route to the homepage. Verify rendered source from production-like build; sitemap must not include orphaned nonexistent `/services/...` routes.

**Acceptance:** Automated crawled route inventory matches sitemap; no cross-brand metadata; canonical and hreflang reciprocal, 200 pages/indexable, staging protected from unintended indexing. **STOP + ASK.**

### TASK 31 — Local SEO and factual structured data

**Objective:** Give Google consistent, legitimate Akshaya business information.

**Do:** Add valid LocalBusiness/TaxiService structured data only as supported and schema-valid: name, address, hours `24/7` appropriately encoded, contacts, map link, `sameAs` social profiles, URLs, approved service types, logo/image only when supplied. Use BreadcrumbList and appropriate Article/FAQ schema **only when matching visible content and current Google guidelines**; omit unsupported review/aggregateRating values. Prepare Google Business Profile claim/verification checklist, Search Console verification/sitemap instructions and NAP consistency checklist. Owner must perform external verification; no guaranteed top rank.

**Acceptance:** Schema validated using appropriate testing tools, no SVTT identifiers, review schema absent, SEO checklist in handshake with external user actions clearly separated. **STOP + ASK.**

## PHASE E — SECURITY, QUALITY AND LAUNCH

### TASK 32 — Legal, privacy, accessibility and security pass

**Objective:** Make enquiry and legal pages appropriate for the new business and respectful of personal data.

**Do:** Rewrite privacy policy, enquiry consent, cookie/analytics disclosure if applicable and terms; keep reasonable original concepts but never copy old legal text verbatim. **Do not invent cancellation/no-show/refund policies** — request owner confirmation and keep disputed details noncommittal until approved. Protect lead data: validate inputs, minimal collection, no logs of submitted phone/email, form spam filtering, safe target windows, link rel policies, privacy-minded analytics. Audit keyboard usage, focus, alt text, landmarks and contrast.

**Acceptance:** Old company name absent, forms show appropriate consent, sensitive info not logged, legal unknowns flagged rather than invented, basic WCAG checks pass. **STOP + ASK.**

### TASK 33 — Performance, visual responsiveness and test automation

**Objective:** Optimize real mobile experience and prevent regressions.

**Do:** Image compression, hero LCP strategy, minimize unused JS, use React/Next server components sensibly, font subsets/font display, code splitting and scroll/performance checks. Test at 320, 360, 375, 390, 414, 430, 768, 820, 1024, 1280, 1440, 1920. Set non-guaranteed targets for Core Web Vitals (LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at p75 on applicable field data); report lab measures separately. Add automated unit tests for vehicle rates, package IDs, trip validation, locale messages and link generators plus smoke tests for major routes where tools allow.

**Acceptance:** No horizontal overflow, critical actions tappable, real build/lint/typecheck results, significant measurable issues recorded with evidence. **STOP + ASK.**

### TASK 34 — Full end-to-end parity and originality regression

**Objective:** Prove Akshaya has all needed source features and all new ones work together.

**Do:** Walk through **all** EN/TE routes, homepage navigation, 9 services, 7 vehicle classes/9 variants, 10 packages and full price matrices, 8 blogs, route pages, filters, compare, enquiry wizard, primary/secondary WhatsApp links, call/mail/map/social, Netlify form logic, footer, legal, mobile menus, SEO tags, sitemap and cross-links. Test false-positive booking confirmations and past-date logic. Compare screenshots against source to demonstrate substantial distinct design; use visual originality checklist, not percent scores. Grep the new **public build** and copied source for old business names, phones, domains, old rating, logo and owner. Report all remaining exceptions before approval.

**Acceptance:** Signed-off parity checklist with PASS/FAIL/N/A, defects fixed or honestly blocked; source repo untouched; mandatory build green. **STOP + ASK.**

### TASK 35 — New GitHub repository and Netlify STAGING deployment

**Objective:** Deploy safely without affecting SVTT or prematurely publishing the new domain.

**Do:** Ask user to approve creation/connection of a **new** GitHub repo and a **new** Netlify site; do not reuse `svtttirupati/svttt` or old Netlify site identifiers. Review `.gitignore`, secrets, build commands, deploy settings and Next.js adapter. Push only with explicit authorization. Confirm preview/staging URL and root routes, run actual browser smoke tests. Enable Netlify form detection and **redeploy**, submit a real test enquiry through public staging, verify form is in dashboard and notification if configured. Avoid indexing staging URL. Validate bilingual navigation, CTAs, assets, headers, SEO, no owner-secret exposure.

**Acceptance:** New preview opens and is isolated; preview form E2E verified; DNS untouched; stage inspection recorded; ask approval before next task. **STOP + ASK.**

### TASK 36 — Production launch, Google integration and final handoff

**Objective:** Finish deployment correctly and leave a self-contained long-term handoff.

**Do:** Only with explicit user authorization, configure Namecheap DNS for `akshayacabs.com` + `www` and HTTPS on dedicated Netlify project; verify canonical redirects, SSL, WWW behavior, uptime, link/form/WhatsApp on the **real domain**, English/Telugu sitemap and indexing controls. Provide step-by-step user ownership tasks for Google Search Console, site verification, sitemap submission, Google Business Profile consistency, and Google Analytics 4 only if consented. Check actual `robots.txt` and `sitemap.xml`; do not declare Google indexing/ranking complete without Google reporting it. Final release QA: old branding eliminated, real logo/owner image delivered, no fake reviews, driver allowance included, image and legal blockers resolved. Summarize how to edit prices, translations, articles, contacts, images, deploy and rollback. Mark `PROJECT READY/LAUNCHED` only on proven checks, or `LAUNCH BLOCKED` with exact reasons. Record completed tasks and future phase ideas in handshake.

**Acceptance:** Production verified or clearly marked blocked, complete trustworthy final handshake, user receives a written release summary; no auto-start of any future phase. **STOP.**

---

# 06. NON-FUNCTIONAL ACCEPTANCE MATRIX — CHECK BEFORE RELEASE

| Quality dimension | Required check |
|---|---|
| Visual originality | New layout/colour/fonts/copy/components; no visible SVTT brand or recognizable section-clone composition |
| Factual parity | 7 fleet categories, 9 vehicle images/variants, 10 packages and **all** price matrices, all temple stops, 9 service types |
| Pricing | Driver allowance **included**; ₹ rates exact; correct km allowance; extra toll/parking/permit disclaimer; no invented full price |
| Reviews | No SVTT Google rating, stars, customer reviews, review schema or fake trust metrics |
| Contacts | Primary +91 72888 76667; secondary +91 93939 00006; email, map, and social links all verified |
| Availability | 24/7 claim reflects confirmed business availability, not guaranteed instantaneous confirmation |
| Languages | EN and TE for every public route, content, form, CTA and error; translation quality, no overflow |
| Enquiry | Proper encoded WhatsApp text, both numbers, calling links and **actual** stored Netlify lead submissions |
| Booking honesty | An enquiry is not a booked trip; WhatsApp prefill is not evidence of a sent message |
| Technical SEO | Unique meta, valid sitemap, canonical/hreflang, 404, images, structured data, Index vs Noindex environments |
| Local SEO | NAP consistency, real map/social profiles, Search Console/GBP verification tasks for owner |
| Performance | Mobile responsive; efficient assets/fonts; real build and audited page-load concerns |
| Accessibility | Keyboard support, contrast, focus, semantic forms and error reporting, Telugu readability |
| Security | No exposed credentials, correctly sanitized input, minimized stored data, form anti-spam |
| Testability | Repeatable automated tests for critical logic; manual device and staging form checks |
| Maintainability | Source-of-truth files, content data model, update instructions, independent GitHub/Netlify project |
| Session continuity | Accurate HANDSHAKE updated every task; approval gate honored; new-session handoff every 5–6 tasks |

---

# 07. WHAT IS OUT OF SCOPE FOR VERSION 1

The following are potential **future ideas**, not promises or grounds to delay the approved scope. Adding them requires separate user approval and may incur costs:

- Real-time vehicle availability, driver GPS tracking, airport/railway tracking APIs.
- Online card/UPI payment gateways, deposits, automated refund/payment reconciliation.
- Customer login, account portal, admin dashboard or CRM with a database.
- AI chatbot, automatic voice agent or WhatsApp Business API message automation.
- Paid routing/distance matrix APIs or guaranteed instantaneous fare calculation.
- Automatic Google first-page/first-position ranking; no responsible professional can guarantee it.
- Authentic third-party review integration **until Akshaya Cabs has genuine reviews and approved access**.

Prioritize an elegant **lead-conversion first** website that is stable, truthful, discoverable and inexpensive to run.

---

# 08. SEO SUCCESS PLAN — REALISTIC TARGET, NOT A RANKING GUARANTEE

**Commercial objective:** improve qualified enquiries from searches such as “Tirupati taxi service,” “local cabs in Tirupati,” “Tirupati Tirumala cabs,” “Tirupati airport taxi,” “Tirupati to Chennai cab,” “Tirupati temple tour packages,” plus naturally phrased Telugu equivalents.

**Technical foundations:** indexed original route pages with genuinely useful content; bilingual `hreflang`; canonical URLs; descriptive metadata; Google-compatible sitemap, schema and mobile performance; internal links between destinations, vehicles, packages and booking. **Do not** generate 100 near-duplicate doorway pages or keyword stuff.

**Off-site user-controlled activity:** accurate Google Business Profile for Akshaya Cabs (owner verification), truthful business category/service area, matching company NAP, quality licensed photos, complete service descriptions, and collecting **real** customer reviews after providing actual service. Google Search Console verification and sitemap submission require account access/owner steps.

**Measurable outcomes after launch:** Search Console clicks, impressions, indexed page count, real enquiry completions, WhatsApp CTA interactions and phone interactions (avoid collecting PII in analytics). Document measurements, not invented rankings. Google local search placement is influenced by relevance, distance and prominence; rankings are **not guaranteed**, particularly for broad “taxi” searches.

---

# 09. RECOMMENDED TEST / DEPLOY COMMANDS

Run from the actual project root, after reading installed framework documentation. Do not arbitrarily upgrade package versions or delete `package-lock.json`.

```powershell
Set-Location 'D:\Projects_OnlyAI\akshya-cabs'
Get-Location
Get-ChildItem -Name
npm install
npm run lint
npx tsc --noEmit
npm run build
npm run dev
```

**Notes:**

- These commands are examples, not permission to run Task 02+. Prefer `npm ci` for reproducible clean installs once lockfile is verified and dependencies are available.
- Check the installed Next.js 16 documentation in `node_modules/next/dist/docs/` before applying legacy API patterns; old `AGENTS.md` explicitly cautions about breaking Next conventions.
- The source might have `src/app/` at a nested folder if the zip was extracted incorrectly. **Never silently work in another project root**; request clarification.
- Netlify must support the chosen Next.js runtime/adapter. Do not assume an SSR/API feature is available in static export.
- With Netlify Next.js SSR forms, include a static HTML form skeleton and verify a successful **deployed** test submission; a client-side form alone is insufficient for Netlify detection.
- Keep any `NEXT_PUBLIC_SITE_URL` / environment configuration pointed to `akshayacabs.com` only when launching; never accidentally publish SVTT domain metadata.

---

# 10. EXACT RESTART INSTRUCTIONS FOR FUTURE CLAUDE SESSIONS

The user may start a new Antigravity conversation after **5–6 tasks** to manage model credits. This is expected. In a fresh session the user can paste:

> **Continue Akshaya Cabs in `D:\Projects_OnlyAI\akshya-cabs`. READ `HANDSHAKE.md` fully first; then consult `AKSHAYA_CABS_MASTER_EXECUTION_PLAN.md` Sections 00/02 and the specific task I approve, plus any referenced section. Do not reread every task unnecessarily. Inspect actual files, last results, blockers, image requests and permission. Execute ONLY the approved task. Update `HANDSHAKE.md` before and after it, report evidence, ask approval for the following task, then STOP. Never modify the master plan, old SVTT folder/repo or original Netlify site.**

### Useful one-line user command for first run

> **Read `D:\Projects_OnlyAI\akshya-cabs\AKSHAYA_CABS_MASTER_EXECUTION_PLAN.md` from start to finish. Execute TASK 01 ONLY: protect the copied project and replace the old SVTT `HANDSHAKE.md` with clean Akshaya session memory. Update the handshake with results and request my explicit permission for TASK 02. Do not run any further task.**

### Useful one-line user command after any finished task

> **Read HANDSHAKE fully; consult master Sections 00/02 and TASK NN, then execute TASK NN ONLY. Update HANDSHAKE with all changes, tests and blockers. Stop and ask approval for TASK NN+1.**

---

# 11. DOCUMENTATION & REFERENCE LINKS (INFORMATION ONLY)

Agent should refer to current upstream docs before implementing platform-specific details; do not copy external website designs:

- Google Search Central SEO starter guidance: `https://developers.google.com/search/docs/fundamentals/seo-starter-guide`
- Google Search Central localized versions / hreflang: `https://developers.google.com/search/docs/specialty/international/localized-versions`
- Google Business Profile local ranking explanation: `https://support.google.com/business/answer/7091`
- Netlify Next.js guide: `https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/`
- Netlify Forms setup: `https://docs.netlify.com/manage/forms/setup/`
- Netlify Forms troubleshooting: `https://docs.netlify.com/manage/forms/troubleshooting-tips/`
- Next.js installed docs: `node_modules/next/dist/docs/` (preferred for installed-version API details)
- Public functional source site: `https://svtttirupati.com/` (reference only; don't clone layout or wording)

---

## FINAL INSTRUCTION TO CLAUDE SONNET

**You are responsible for the project state even across 36 separate conversations.** Be careful with user credits: do only the specifically approved task, avoid repeated broad rewrites, and keep every important technical and business decision inside the accurate `HANDSHAKE.md` after that task. Use the original SVTT code to understand complete functionality but make Akshaya Cabs an **independent, original, bilingual and better-designed website**.

**On first execution: TASK 01 ONLY. Clean but retain `HANDSHAKE.md`. Update its state. Report. Ask for approval for TASK 02. STOP.**

---

*Master specification version 1.0 — prepared for Akshaya Cabs; intended to remain unchanged while `HANDSHAKE.md` tracks execution.*
