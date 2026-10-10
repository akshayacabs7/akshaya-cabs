# Akshaya Cabs — Bilingual Terminology Glossary & Conventions
# src/i18n/GLOSSARY.md
# 
# MANDATORY reading for all content tasks (TASK 08 onward).
# These conventions protect brand accuracy, religious sensitivity,
# and consistency across English and Telugu UI.
#
# Last updated: 2026-10-10 (TASK 07)
# ─────────────────────────────────────────────────────────────

## 1. Temple & Pilgrimage Terminology

| English (en-IN) | Telugu (te-IN) | Notes |
|---|---|---|
| Tirumala | తిరుమల | The hills / Venkateswara temple complex. NOT "Tirupati hills" in body copy. |
| Tirumala temple | శ్రీ వేంకటేశ్వర స్వామి ఆలయం | Full formal name. Use in headings / descriptions. |
| Tirupati | తిరుపతి | The city at the base of the hill. Different from Tirumala. |
| Darshan | దర్శనం | Temple visit / audience with deity. NEVER translate as "sightseeing". |
| Seva | సేవ | Devotional service at the temple (arjitha seva, etc.). |
| Prasadam | ప్రసాదం | Sacred temple offering. NOT "food" or "gift". |
| Pilgrim | యాత్రికుడు / భక్తుడు | Use "భక్తుడు" for more devotional context. |
| Pilgrimage | యాత్ర / తీర్థయాత్ర | "తీర్థయాత్ర" is more formal / sacred. |
| Ghat road | ఘాట్ రోడ్ | The winding hill road to Tirumala. Keep "Ghat" untranslated in Telugu. |
| Archa Venkateswara | అర్చా వేంకటేశ్వర | Deity form — do not abbreviate or anglicize. |

## 2. Service Names

All 9 service categories are proper names — translate the *description* but keep the spirit:

| Service ID | English Title | Telugu Title |
|---|---|---|
| local-cab | Tirupati Local Cab Services | తిరుపతి స్థానిక క్యాబ్ సేవలు |
| tirumala-taxi | Tirupati to Tirumala Taxi | తిరుపతి నుండి తిరుమల టాక్సీ |
| temple-tours | Temple Tour Packages | దేవాలయ టూర్ ప్యాకేజీలు |
| outstation-cab | Outstation Cab Services | అవుట్‌స్టేషన్ క్యాబ్ సేవలు |
| airport-transfer | Airport Pickup & Drop | విమానాశ్రయ పికప్ & డ్రాప్ |
| railway-transfer | Railway Station Transfers | రైల్వే స్టేషన్ ట్రాన్స్‌ఫర్లు |
| tempo-traveller | Tempo Traveller Rental | Tempo Traveller అద్దె |
| south-india-tours | South India Pilgrimage Tours | దక్షిణ భారత యాత్రా పర్యటనలు |
| custom-tours | Custom & Corporate Tours | కస్టమ్ & కార్పొరేట్ పర్యటనలు |

## 3. Vehicle Names — MUST stay in Roman script in all locales

Car model names are **brand names / proper nouns** — they MUST NOT be transliterated or translated into Telugu script.

| Name | Correct (both locales) | WRONG |
|---|---|---|
| Dzire | Dzire | ~~డ్జైర్~~ |
| Honda Amaze | Amaze | ~~అమేజ్~~ |
| Toyota Etios | Etios | ~~ఎటీఓస్~~ |
| Maruti Ertiga | Ertiga | ~~ఎర్టిగా~~ |
| Toyota Innova | Innova | ~~ఇన్నోవా~~ |
| Innova Crysta | Innova Crysta | ~~ఇన్నోవా క్రిస్టా~~ |
| Tavera | Tavera | ~~టవేరా~~ |
| Tempo Traveller | Tempo Traveller | ~~టెంపో ట్రావెల్లర్~~ |

Use the `vehicleName()` helper from `src/i18n/config.ts` in code as a documentation marker.

## 4. Currency & Number Formatting

- Symbol: **₹** (U+20B9, Indian Rupee Sign) — always use this, never "Rs." or "INR" in UI
- Number grouping: **Indian system** — 1,00,000 (not 100,000)
- Decimal separator: `.` (full stop)
- Format: `₹{amount}` — no space between ₹ and number in both locales
- Use `formatCurrency(amount, locale)` from `src/i18n/config.ts`
- Range notation: `₹2,000 – ₹4,500` (en dash, not hyphen)
- "Fare from": `₹{n} నుండి` (te) / `Fare from ₹{n}` (en) — see dict `fare.fareFrom`
- Extra km: `₹{n}/కిమీ` (te) / `₹{n}/km` (en) — abbreviation not translated

## 5. Date & Time Formatting

- Date: `DD/MM/YYYY` format in both locales (use en-IN Intl for both to avoid Telugu numeral system)
- Time: 12-hour with AM/PM, IST timezone — `hh:mm a IST`
- Do NOT use Telugu numerals (౦౧౨...) in date/time displays — too uncommon for most users
- Use `formatDate(date, locale)` from `src/i18n/config.ts`

## 6. Telugu Typography Rules

Applied via `.lang-te` CSS class (see `globals.css`):

- **Line height**: 2.0 for body text (vs ~1.6 for Latin). Telugu matras extend above/below baseline.
- **Font**: Noto Sans Telugu — loaded via next/font in `[lang]/layout.tsx`.
- **Min font size**: 16px (vs 14px for Latin small text).
- **Word break**: `break-word` — Telugu conjunct consonants create long unbreakable sequences.
- **Letter spacing**: 0 (Telugu script does not benefit from tracking).
- **Headings**: line-height 1.8 minimum.
- Vehicle names within Telugu text use `.vehicle-name` class to revert to Manrope font.

## 7. Destination Spelling Conventions

Use these exact spellings consistently — both locales:

| Place | English | Telugu |
|---|---|---|
| Kanipakam | Kanipakam | కాణిపాకం |
| Sri Kalahasti | Sri Kalahasti | శ్రీ కాళహస్తి |
| Vellore Golden Temple | Golden Temple, Vellore | గోల్డెన్ టెంపుల్, వేలూరు |
| Thiruvannamalai | Thiruvannamalai (Arunachalam) | తిరువణ్ణామలై (అరుణాచలం) |
| Tiruttani | Tiruttani | తిరుత్తణి |
| Tiruchanur | Tiruchanur | తిరుచానూర్ |
| Padmavathi Temple | Padmavathi Temple, Tiruchanur | పద్మావతి దేవాలయం, తిరుచానూర్ |

## 8. Banned / Replaced Phrases

| DO NOT USE | USE INSTEAD |
|---|---|
| Sri Vinayaka Tours & Travels | Akshaya Cabs |
| SVTT | Akshaya Cabs |
| "GPS tracked" | (omit — not a confirmed feature) |
| "Flight tracking" | "Punctual airport transfers" |
| "Google rating X.X" | (omit — not verified for Akshaya) |
| "Rs." or "INR" | ₹ |
| "sightseeing" for darshan | "temple visit" / "darshan" |
| Weganor | (banned — never use this vehicle name) |

## 9. CTA Button Text Conventions

Buttons must be short and action-oriented. Max 3 words in English, ~4 words in Telugu.

| CTA | English | Telugu |
|---|---|---|
| Primary book | Book a Cab | క్యాబ్ బుక్ చేయండి |
| WhatsApp | WhatsApp Us | వాట్సాప్ చేయండి |
| Quote | Get a Quote | కోటేషన్ పొందండి |
| Enquire | Enquire Now | ఇప్పుడు విచారించండి |
| Packages | Explore Tour Packages | టూర్ ప్యాకేజీలు చూడండి |

## 10. Missing-Key Policy

In development (`NODE_ENV=development`), the dictionary loader runs `checkMissingKeys()` which:
- Compares every Telugu key against the English base dictionary
- Logs `[i18n] Missing key in "te": "path.to.key"` to server console
- Never throws — silently degrades to key path in production

When adding a new English key, ALWAYS add the Telugu equivalent in the same commit.
