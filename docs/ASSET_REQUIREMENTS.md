# SVTT — Complete Asset Requirements & Generation Guide
## Sri Vinayaka Tours & Travels | svtttirupati.com

> **HOW TO USE THIS DOCUMENT**
> 1. Read each section carefully before generating anything.
> 2. Copy the **ChatGPT Prompt** exactly as written into ChatGPT (DALL·E 3) or any AI image tool.
> 3. Generate at the **exact pixel dimensions** specified — do not resize after.
> 4. Save with the **exact filename** shown.
> 5. Upload to the **exact folder path** shown.
> The website code references these exact filenames and paths. Any mismatch will break the layout.

---

## ⚠️ MASTER RULES — READ BEFORE GENERATING ANYTHING

| Rule | Detail |
|---|---|
| **No AI-generated owner face** | Ravilla Hemanth Naidu's photo MUST be a real photograph you supply |
| **No religious poster style** | Everything must look cinematic, premium, and photographic |
| **No text inside images** | All text is overlaid by the website code |
| **No watermarks / borders / frames** | Clean image only |
| **No license plates on vehicles** | Keep plates blurred or not visible |
| **Exterior vehicle shots only** | All vehicle images = exterior 3/4 front-angle, no interiors |
| **Consistent lighting** | Warm golden-hour light across ALL images |
| **No Weganor** | This vehicle must never appear in any image or prompt |
| **WebP format preferred** | Use WebP for all photos; SVG for logos/icons |

---

## FOLDER STRUCTURE — CREATE THESE FIRST

```
public/
├── favicon.ico                  ← Root level
├── icon.png                     ← Root level (192×192)
├── apple-icon.png               ← Root level (180×180)
└── images/
    ├── logo/
    │   ├── svtt-logo.svg
    │   ├── svtt-logo-dark.svg
    │   ├── svtt-logo-light.svg
    │   ├── svtt-logo-white.svg
    │   ├── svtt-icon.svg
    │   ├── svtt-icon-192.png
    │   ├── svtt-icon-512.png
    │   └── og-image.jpg
    ├── hero/
    │   ├── hero-desktop.webp
    │   └── hero-mobile.webp
    ├── vehicles/
    │   ├── dzire.webp
    │   ├── etios.webp
    │   ├── amaze.webp
    │   ├── ertiga.webp
    │   ├── innova.webp
    │   ├── innova-crysta.webp
    │   ├── tavera.webp
    │   ├── tempo-traveller-12.webp
    │   └── tempo-traveller-17.webp
    ├── packages/
    │   ├── svtt0001-tirupati-tirumala-local.webp
    │   ├── svtt0002-tirumala-local-temples.webp
    │   ├── svtt0003-tirumala-kanipakam-padmavathi.webp
    │   ├── svtt0004-tirumala-srikalahasti-padmavathi.webp
    │   ├── svtt0005-tirumala-padmavathi.webp
    │   ├── svtt0006-tirumala-kanipakam.webp
    │   ├── svtt0007-kanipakam-golden-temple-arunachalam.webp
    │   ├── svtt0008-kanipakam-golden-arunachalam-tiruthani.webp
    │   ├── svtt0009-tirupati-local-temples.webp
    │   └── svtt0010-padmavathi-srikalahasti.webp
    ├── destinations/
    │   ├── tirumala-venkateswara.webp
    │   ├── kanipakam-temple.webp
    │   ├── sri-kalahasti-temple.webp
    │   ├── padmavathi-temple.webp
    │   ├── golden-temple-vellore.webp
    │   └── arunachalam-temple.webp
    ├── about/
    │   ├── tirupati-travel-service.webp
    │   ├── professional-driver-tirupati.webp
    │   ├── tirupati-scenic-road.webp
    │   └── tirupati-airport-transfer.webp
    ├── owner/
    │   └── ravilla-hemanth-naidu.jpg    ← REAL PHOTO ONLY
    ├── blog/
    │   ├── tirupati-darshan-guide.webp
    │   ├── tirumala-travel-guide.webp
    │   ├── best-places-tirupati.webp
    │   ├── tirupati-kanipakam-travel.webp
    │   ├── tirupati-srikalahasti-travel.webp
    │   ├── tirupati-golden-temple.webp
    │   ├── tirupati-temple-tour.webp
    │   └── tirupati-airport-tirumala.webp
    └── icons/
        ├── whatsapp-icon.svg
        ├── phone-icon.svg
        └── location-pin.svg
```

---
---

# SECTION 1 — MASTER LOGO

> ⚠️ **ChatGPT cannot export working SVG files.**
> Use ChatGPT to **visualize and approve the concept only**.
> Then recreate the approved design as a clean vector in **Canva, Adobe Illustrator, or Figma**.
> Export as SVG with transparent background.

---

## LOGO-01 — Master Logo Concept (ChatGPT Visualization)

**Purpose:** Get a visual concept approved before building the vector file.

**ChatGPT Prompt — Master Concept:**
```
Design a premium modern travel company logo for "Sri Vinayaka Tours & Travels".

LETTERMARK:
- Letters "SVTT" are the dominant element — bold, confident, geometric sans-serif
- All four letters are the same height
- Letter spacing is tight and strong
- The overall lettermark reads as a single cohesive mark

ICON ELEMENT:
- A minimal, elegant South Indian temple gopuram (tower) silhouette sits 
  directly above the "SVTT" letters as a crown
- The gopuram is reduced to its simplest recognizable silhouette — 
  a stepped pyramid shape with a curved top finial
- It should be small relative to the letters — a subtle crown, not the main feature
- Color: warm gold (#C9922B)

WORDMARK:
- Below the SVTT lettermark: "Sri Vinayaka Tours & Travels"
- Clean, modern sans-serif (similar to Outfit or Manrope)
- Smaller than the lettermark — secondary element
- Letter-spacing: slightly wide for elegance
- Color: deep maroon (#7B1C2E)

COLOR PALETTE:
- SVTT letters: Deep maroon (#7B1C2E)
- Gopuram icon: Warm gold (#C9922B)
- Wordmark text: Deep maroon (#7B1C2E)
- Background: Transparent (show on white for visualization)

STYLE:
- Premium, modern, minimal — think luxury Indian travel brand
- NOT cartoonish, NOT clipart, NOT a religious poster
- Must look excellent at both large size AND small 32×32 favicon size
- Clean and timeless — suitable for a premium Tirupati travel company

SHOW TWO VERSIONS SIDE BY SIDE:
Version A: Full logo (gopuram + SVTT + wordmark) on white background
Version B: Same full logo on deep charcoal background (#1A1A2E)

No watermarks. No borders. No extra text.
Only the two logo versions on a clean white/dark background.
```

---

## LOGO-02 — Dark Version (on Light/White Backgrounds)

**File:** `public/images/logo/svtt-logo-dark.svg`
**Use:** Website header (white/light background), business cards, documents
**Colors:** SVTT = Maroon `#7B1C2E` | Gopuram = Gold `#C9922B` | Wordmark = Maroon `#7B1C2E`
**Background:** Transparent

**ChatGPT Prompt:**
```
The SVTT logo (lettermark "SVTT" with a minimal gopuram crown + wordmark 
"Sri Vinayaka Tours & Travels") on a pure white background.

Colors: 
- "SVTT" letters in deep maroon #7B1C2E
- Gopuram crown in warm gold #C9922B
- Wordmark in deep maroon #7B1C2E

Show the logo centered on a clean white rectangle.
No borders. No drop shadows. No extra elements.
This is the dark-on-light version.
```

---

## LOGO-03 — Light Version (on Dark/Maroon Backgrounds)

**File:** `public/images/logo/svtt-logo-light.svg`
**Use:** Dark header, footer, dark overlays on hero image
**Colors:** SVTT = White `#FFFFFF` | Gopuram = Gold `#C9922B` | Wordmark = White/Cream `#F7F1E5`
**Background:** Transparent

**ChatGPT Prompt:**
```
The SVTT logo (lettermark "SVTT" with a minimal gopuram crown + wordmark 
"Sri Vinayaka Tours & Travels") on a deep maroon/burgundy background (#7B1C2E).

Colors:
- "SVTT" letters in clean white #FFFFFF
- Gopuram crown in warm gold #C9922B
- Wordmark in cream/ivory #F7F1E5

Show the logo centered on the deep maroon background rectangle.
No borders. No drop shadows. No extra elements.
This is the light-on-dark version — for dark header/footer use.
```

---

## LOGO-04 — All-White Version (for dark photography backgrounds)

**File:** `public/images/logo/svtt-logo-white.svg`
**Use:** Displayed over dark hero images, dark overlays, dark banners
**Colors:** ALL elements = White `#FFFFFF`
**Background:** Transparent

**ChatGPT Prompt:**
```
The SVTT logo (lettermark "SVTT" with minimal gopuram crown + wordmark 
"Sri Vinayaka Tours & Travels") rendered entirely in pure white.

All elements — SVTT letters, gopuram silhouette, wordmark — are all white #FFFFFF.
Background: Show on a semi-transparent dark gray background so white is visible.
No watermarks. No borders. No drop shadows.
This is the all-white version used over photography backgrounds.
```

---

## LOGO-05 — Icon Only / Favicon Source

**File:** `public/images/logo/svtt-icon.svg`
**Use:** Favicon, browser tab, mobile home screen, PWA icon
**Requirement:** Must be recognizable at 32×32 pixels

**ChatGPT Prompt (for visual reference only — then recreate in Canva/Figma as SVG):**
```
A square icon design for SVTT (Sri Vinayaka Tours & Travels).

Design:
- A square canvas with slightly rounded corners (like an app icon)
- Background: Deep maroon #7B1C2E
- Centered on the background: The letters "SVTT" in bold white (#FFFFFF)
- Above the SVTT letters: A tiny minimal golden gopuram silhouette crown (#C9922B)
  — just a simple stepped-pyramid shape, 3-4 steps, with a small curved top finial
- The gopuram crown sits directly on top of the S and T letters like a small crown
- All elements are balanced and centered within the square canvas

Sizing guide — the icon must work at ALL three sizes shown:
- 512×512 px: full detail visible
- 192×192 px: still clean and readable
- 32×32 px: SVTT letters and maroon background must still be recognizable

Show all three sizes side by side on a white background.
No extra decorative elements. No borders around the square. Flat, bold, clean.
```

**After ChatGPT approval → recreate in Canva or Figma:**
1. Create a 500×500 px artboard
2. Fill background with maroon `#7B1C2E`, corner radius 60px
3. Add "SVTT" in bold white sans-serif (Outfit Bold or similar), centered
4. Add a small gold `#C9922B` gopuram silhouette above the letters
5. Export as SVG with transparent background → save as `svtt-icon.svg`

---

## LOGO-06 — App Icon 192px PNG

**File:** `public/images/logo/svtt-icon-192.png`
**Also copy to:** `public/icon.png` (required by Next.js for PWA/metadata)
**Use:** PWA manifest, Android home screen, Next.js app icon metadata
**Size:** Exactly **192 × 192 pixels**
**Format:** PNG with transparent background OR maroon background

> ⚠️ **Do NOT generate this with ChatGPT as a photo.**
> This is exported directly from your `svtt-icon.svg` vector file.

**How to create:**
```
Step 1: Open svtt-icon.svg in Canva, Figma, or Adobe Illustrator.
Step 2: Set export size to exactly 192 × 192 pixels.
Step 3: Export as PNG.
Step 4: Save two copies:
        → public/images/logo/svtt-icon-192.png
        → public/icon.png  (Next.js metadata requirement)

The icon should have the maroon (#7B1C2E) background with the gold gopuram 
crown above the white SVTT letters — same as the svtt-icon.svg design.

Quality check: Open the 192×192 PNG — the "SVTT" text and gopuram crown must
be clearly readable. If any element looks blurry, re-export from vector source.
```

**ChatGPT Prompt (only if you cannot export from SVG and need a raster fallback):**
```
A square app icon, exactly 192 × 192 pixels.

Design:
- Square canvas, slightly rounded corners
- Background: Deep maroon #7B1C2E
- Center: The letters "SVTT" in bold white, large enough to fill ~60% of the square
- Above the letters: A minimal gold (#C9922B) gopuram silhouette crown
- Clean, flat, bold design — no gradients, no shadows, no textures

Output: Single icon at exactly 192×192 pixels on a transparent background.
No extra elements. No white frame. No watermark.
The maroon background IS part of the icon — do not make it transparent.
```

---

## LOGO-07 — App Icon 512px PNG

**File:** `public/images/logo/svtt-icon-512.png`
**Use:** PWA manifest large icon, Google Play store, high-DPI screens
**Size:** Exactly **512 × 512 pixels**
**Format:** PNG

> ⚠️ **Export from your `svtt-icon.svg` vector file — do not generate separately from ChatGPT.**

**How to create:**
```
Step 1: Open svtt-icon.svg in Canva, Figma, or Adobe Illustrator.
Step 2: Set export size to exactly 512 × 512 pixels.
Step 3: Export as PNG.
Step 4: Save as: public/images/logo/svtt-icon-512.png

Quality check: Open the 512×512 PNG — all details (SVTT text, gopuram crown, 
maroon background) must be crisp, sharp, and high-quality with no blurring.
```

**ChatGPT Prompt (only if you cannot export from SVG):**
```
A square app icon, exactly 512 × 512 pixels.

Design:
- Square canvas, slightly rounded corners (corner radius proportional to 512px)
- Background: Deep maroon #7B1C2E
- Center: The bold white letters "SVTT" — large, confident, geometric sans-serif
  Letters fill approximately 60-65% of the square width
- Directly above the letters: A minimal warm gold (#C9922B) gopuram silhouette 
  crown — a simple stepped pyramid shape, proportionally sized to the letters
- The entire composition is centered and balanced

Style: Flat, bold, modern app icon. No gradients. No drop shadows. No 3D effects.
Must look excellent at 512px AND when scaled down to 32px (favicon test).

Output: Exactly 512×512 pixels. Maroon background is part of the icon design.
No external border. No watermark.
```

---

## LOGO-08 — favicon.ico (Browser Tab Icon)

**File:** `public/favicon.ico`
**Use:** Browser tab, bookmark icon, search result favicon
**Size:** 32 × 32 pixels (standard) — ICO format supports multiple sizes: 16, 32, 48
**Format:** `.ico` (not PNG — must be ICO format)

> ⚠️ **ICO files cannot be generated by ChatGPT.** Convert from PNG using a free online tool.

**How to create:**
```
Step 1: Export svtt-icon.svg at 32×32 pixels as PNG (name it favicon-32.png)
Step 2: Go to https://favicon.io/favicon-converter/ (free, no signup)
Step 3: Upload your favicon-32.png
Step 4: Download the generated favicon.ico
Step 5: Save as: public/favicon.ico  ← root level of public folder

Also download apple-touch-icon.png from the same tool if available and 
save as: public/apple-icon.png  ← root level of public folder
```

**For the favicon.ico, the icon design is identical to LOGO-05/06/07:**
- Maroon `#7B1C2E` background
- White "SVTT" bold letters
- Gold `#C9922B` minimal gopuram crown above letters

---

## LOGO-09 — Open Graph Social Image

**File:** `public/images/logo/og-image.jpg`
**Also create:** Generate this AFTER the logo SVG is finalized
**Use:** Appears when website link is shared on WhatsApp, Facebook, X (Twitter), LinkedIn
**Size:** Exactly **1200 × 630 pixels**
**Format:** JPG (not PNG — JPG compresses better for social sharing)

**ChatGPT Prompt:**
```
Professional social media link preview card. Exactly 1200 pixels wide × 630 pixels tall.

LAYOUT — divide the image into two zones:

LEFT ZONE (35% of width = approximately 420px wide):
- Solid deep maroon background: #7B1C2E
- Vertically centered in this zone: A clean warm gold rounded rectangle 
  (#C9922B, approximately 200×200px, corner radius 20px) as a LOGO PLACEHOLDER
- Inside the gold placeholder: Small text "SVTT LOGO" in white — this tells 
  the developer where to place the actual logo SVG
- Below the gold placeholder: Small cream text "Sri Vinayaka" in italic

RIGHT ZONE (65% of width = approximately 780px wide):
- Background: A BLURRED and DARKENED photograph of the Tirumala Venkateswara 
  Temple gopuram at golden sunrise — soft bokeh, dark enough for white text
- Semi-transparent overlay: Deep maroon #7B1C2E at 60% opacity over the photo
- Content centered vertically in the right zone:
  Line 1 — Large white text: "Sri Vinayaka Tours & Travels"
            Font: clean bold sans-serif, approximately 42px equivalent
  Line 2 — Small warm gold text (#C9922B): "Tirupati's Trusted Travel Partner"
            Font: regular weight, approximately 22px equivalent
  Divider — A thin warm gold horizontal rule (2px height)
  Line 3 — Small white text: "+91 9652240674  |  svtttirupati.com"
            Font: regular weight, approximately 18px equivalent

OVERALL DESIGN:
- The left maroon zone and right dark-photo zone should feel unified
- A subtle thin gold vertical divider line separates the two zones
- The design looks premium and professional at full size AND as a small thumbnail

No watermarks. No extra borders. Exactly 1200×630 pixels.
This is for WhatsApp/Facebook/X link preview — it must look excellent as a thumbnail.
```

**After the logo SVG is ready:**
> Open this og-image.jpg in Canva, replace the gold placeholder rectangle with 
> the actual `svtt-logo-light.svg` (white/cream version), and re-export as JPG.

---
---

# SECTION 2 — OWNER PHOTO

## OWNER-01 — Ravilla Hemanth Naidu

> ⛔ **REAL PHOTOGRAPH ONLY — NO AI GENERATION**
> This must be a real photo of the actual owner. Do not use DALL·E or any AI generator.

| Property | Detail |
|---|---|
| **File name** | `ravilla-hemanth-naidu.jpg` |
| **Upload path** | `public/images/owner/` |
| **Required resolution** | Minimum **1200 × 1200 pixels** |
| **Aspect ratio** | **1:1 — perfect square** |
| **File format** | JPG or WebP |
| **Background color** | Warm cream / ivory `#F7F1E5` OR a clean neutral studio warm background |
| **Website display** | CSS circle — `border-radius: 50%; object-fit: cover;` |
| **Desktop size** | 180 × 180 px circle |
| **Tablet size** | 160 × 160 px circle |
| **Mobile size** | 140 × 140 px circle |

**Photo composition instructions:**
- Head and shoulders (chest-up) portrait
- Face centered horizontally and vertically in the frame
- Eyes clearly visible, sharp focus
- Neutral or natural slight smile — professional and warm
- NO other people in the frame
- NO text, watermarks, logos, or overlays
- Professional business attire (formal shirt, kurta, or business wear)
- Muted, warm, or dark tones in clothing work best
- Soft, even lighting — no harsh shadows on face
- No busy backgrounds or textured walls

> **Do NOT upload a pre-cropped circular photo.**
> Upload the full square — the website creates the circular crop with CSS automatically.

---
---

# SECTION 3 — HERO IMAGES

## HERO-01 — Desktop Hero

| Property | Detail |
|---|---|
| **File name** | `hero-desktop.webp` |
| **Upload path** | `public/images/hero/` |
| **Resolution** | **1920 × 900 px** |
| **Aspect ratio** | ~16:7.5 (wide cinematic banner) |
| **Format** | WebP (JPG acceptable if WebP unavailable) |
| **Max file size** | 400 KB (optimize after generation) |
| **Critical requirement** | Center area must be DARKER — white headline text will overlay it |

**ChatGPT Prompt:**
```
Photorealistic cinematic wide-angle travel photograph.
Exact size: 1920 pixels wide × 900 pixels tall. Landscape orientation.

SCENE:
Pre-dawn golden sunrise over the Tirumala hills near Tirupati, Andhra Pradesh, India.
A polished white Toyota Innova Crysta cab is parked on a winding stone pilgrimage 
road leading up to Tirumala. The car faces slightly left in a 3/4 front-left angle.
The road curves gently into misty golden hills. A tall South Indian temple gopuram 
(Dravidian tower) is visible in the soft golden haze of the background — slightly 
out of focus, atmospheric.

LIGHTING:
Warm cinematic golden-hour sunrise. Amber and deep gold sky tones. Soft morning mist 
in the valleys. The sky transitions from deep navy-blue at the edges to warm amber and 
gold at the center-horizon. Warm light rays break over the Tirumala hill peaks.

COMPOSITION:
- Left third: White Innova Crysta on the stone road — warm golden reflections on the 
  car body. No license plate visible (or completely blurred).
- Center: Darker atmospheric area — this zone MUST be dark enough for white text 
  overlay. This is where the website's headline will appear.
- Right: Tirumala hills, distant gopuram silhouette in golden mist.
Classic cinematic rule-of-thirds. Wide, majestic, premium.

CAMERA: Canon EOS R5, 24-70mm lens, f/8. Ultra-realistic. Cinematic color grade. 
Film grain barely perceptible. NOT a painting. NOT illustration. NOT generic stock.

IMPORTANT:
No text inside the image. No watermarks. No people visible.
The CENTER of the image must be visibly DARKER than the edges.
```

**Negative prompt:**
```
No text, no watermarks, no people, no neon colors, no religious poster, no cartoon, 
no illustration, no flat lighting, no overexposed center, no license plates, 
no generic stock photo quality
```

---

## HERO-02 — Mobile Hero

| Property | Detail |
|---|---|
| **File name** | `hero-mobile.webp` |
| **Upload path** | `public/images/hero/` |
| **Resolution** | **1080 × 1350 px** |
| **Aspect ratio** | 4:5 (portrait — vertical) |
| **Format** | WebP (JPG acceptable) |
| **Max file size** | 250 KB |
| **Critical requirement** | UPPER 60% must be darker — headline text overlays that area |

> ⚠️ This is NOT a crop of the desktop hero. It is a different, purpose-built vertical composition.

**ChatGPT Prompt:**
```
Photorealistic cinematic portrait-orientation travel photograph.
Exact size: 1080 pixels wide × 1350 pixels tall. Vertical/portrait orientation.

SCENE:
Pre-dawn golden light over the Tirumala hills, Tirupati. Low angle shot looking 
slightly upward at a polished white Toyota Innova Crysta parked on a stone 
pilgrimage road. The car sits in the lower 35% of the frame.
Above the car, the winding mountain road rises dramatically into misty golden 
Tirumala hills. Near the top of the frame — a faint temple gopuram silhouette 
in golden atmospheric haze.

LIGHTING:
Warm golden-hour sunrise from the right side. Amber and gold tones.
Deep navy-blue sky at the very top of the frame gradually warming to amber 
near the center. Morning mist in the valleys below the hills.

COMPOSITION:
- Bottom 35%: White Innova Crysta on stone road, warm golden light. 
  No license plate visible.
- Middle 25%: Winding road rising into the hills — transition zone.
- Top 40%: Tirumala hills, misty sky, gopuram silhouette — THIS AREA MUST 
  BE NOTICEABLY DARKER so white headline text is readable over it.

CAMERA: Sony A7R IV, 35mm lens. Ultra-realistic. Rich cinematic color grade.
Portrait/vertical orientation. NOT landscape. NOT a crop of another image.

IMPORTANT:
No text. No watermarks. No people. Vertical/portrait 1080×1350.
Top half must be significantly darker than bottom half.
```

---
---

# SECTION 4 — VEHICLE IMAGES

> **Style rules for ALL vehicle images — read once, apply to every prompt:**
> - All vehicles are **WHITE** in color
> - **3/4 front-left angle** — left headlight, grille, and left side body visible
> - **Golden-hour lighting** — warm, soft amber/gold from the right side
> - **Outdoor background** — soft-focus Tirupati/South India landscape with bokeh
> - **No license plates** — either not visible or completely blurred
> - **No people** — exterior view only
> - **Professional commercial fleet photography** — aspirational, clean, premium

**Negative prompt to add to ALL vehicle images:**
```
No text, no watermarks, no people, no license plate visible, no interior shots, 
no studio white background, no dirty or damaged vehicle, no neon colors, 
no cartoon, no illustration, no painting, no generic stock photo quality
```

---

## VEH-01 — Maruti Suzuki Dzire

| File | `dzire.webp` | Path | `public/images/vehicles/` |
|---|---|---|---|
| **Resolution** | 1600 × 1000 px | **Ratio** | 8:5 |
| **Seating** | 4 + 1 driver | **Category** | Sedan / Compact |

**ChatGPT Prompt:**
```
Photorealistic premium commercial automotive photograph.
Exact size: 1600 × 1000 pixels. Landscape orientation.

SUBJECT: White Maruti Suzuki Dzire compact sedan, current generation (2022-24 model).
4-door compact sedan. Showroom-perfect condition, immaculate white paint.
ANGLE: 3/4 front-left angle — left headlight, front grille, and left body panel 
clearly visible. Car faces slightly toward the viewer from the left side.

SETTING: Parked on a smooth stone-paved road in Tirupati, Andhra Pradesh.
Background: soft-focus South Indian landscape — rolling green hills, distant 
hints of temple architecture, warm golden atmospheric haze. Natural depth.

LIGHTING: Warm golden-hour sunlight from the right. White car catches warm 
golden-amber reflections on the hood and doors. Professional body-reflection 
automotive lighting. No harsh glare.

CAMERA: Canon EOS R5, 70-200mm, f/5.6. Car perfectly sharp. Background 
pleasantly blurred (bokeh).

STYLE: Premium commercial travel fleet photography. Clean, aspirational.
The Dzire should look like the perfect compact cab for Tirupati pilgrims.
```

---

## VEH-02 — Toyota Etios

| File | `etios.webp` | Path | `public/images/vehicles/` |
|---|---|---|---|
| **Resolution** | 1600 × 1000 px | **Ratio** | 8:5 |
| **Seating** | 4 + 1 driver | **Category** | Sedan / Compact |

**ChatGPT Prompt:**
```
Photorealistic premium commercial automotive photograph.
Exact size: 1600 × 1000 pixels. Landscape orientation.

SUBJECT: White Toyota Etios compact sedan (4-door). Crisp, clean condition.
ANGLE: 3/4 front-left angle — left headlight, grille, and left body panel visible.

SETTING: Smooth road in scenic Tirupati / Andhra Pradesh. Soft-focus background —
green hills, warm golden haze, South Indian landscape with natural depth.

LIGHTING: Warm golden-hour sunlight from the right. White body with warm golden 
reflections. Professional automotive photography standard.

CAMERA: Canon EOS R5, 70-200mm, f/5.6. Sharp car, blurred background.

STYLE: Premium travel fleet photography. Clean, trustworthy, professional.
```

---

## VEH-03 — Honda Amaze

| File | `amaze.webp` | Path | `public/images/vehicles/` |
|---|---|---|---|
| **Resolution** | 1600 × 1000 px | **Ratio** | 8:5 |
| **Seating** | 4 + 1 driver | **Category** | Sedan / Compact |

**ChatGPT Prompt:**
```
Photorealistic premium commercial automotive photograph.
Exact size: 1600 × 1000 pixels. Landscape orientation.

SUBJECT: White Honda Amaze compact sedan, current generation (2023-24 model).
4-door, rounded modern styling. Immaculate white paint, showroom condition.
ANGLE: 3/4 front-left angle — front face and left body clearly visible.

SETTING: Scenic road near Tirupati, Andhra Pradesh. Soft-focus green hills 
and warm golden atmosphere in background.

LIGHTING: Warm golden-hour light from the right. White car with warm reflections.
Professional automotive photography.

CAMERA: Canon EOS R5, 70-200mm, f/5.6. Car sharp, bokeh background.

STYLE: Premium commercial fleet photography. Family-friendly, comfortable feel.
```

---

## VEH-04 — Maruti Suzuki Ertiga

| File | `ertiga.webp` | Path | `public/images/vehicles/` |
|---|---|---|---|
| **Resolution** | 1600 × 1000 px | **Ratio** | 8:5 |
| **Seating** | 6 + 1 driver | **Category** | MPV / 7-seater |

**ChatGPT Prompt:**
```
Photorealistic premium commercial automotive photograph.
Exact size: 1600 × 1000 pixels. Landscape orientation.

SUBJECT: White Maruti Suzuki Ertiga MPV, current generation. 
A 7-seater multi-purpose vehicle — noticeably TALLER and longer than a sedan. 
Three rows of seating. Boxy, practical, family-friendly profile. 
Immaculate white paint. Showroom condition.
ANGLE: 3/4 front-left angle — the tall MPV body and extra rear length clearly visible.

SETTING: Scenic road in Tirupati / Andhra Pradesh. Soft-focus green hills, 
warm golden haze background.

LIGHTING: Warm golden-hour sunlight from the right. Clean white body reflections.
Professional automotive photography.

CAMERA: Canon EOS R5, 70-200mm, f/5.6. Car sharp, background pleasantly blurred.

STYLE: Premium fleet photography. Spacious, family-comfortable feel — 
perfect for group pilgrimages.
```

---

## VEH-05 — Toyota Innova

| File | `innova.webp` | Path | `public/images/vehicles/` |
|---|---|---|---|
| **Resolution** | 1600 × 1000 px | **Ratio** | 8:5 |
| **Seating** | 7 + 1 driver | **Category** | SUV / 7-8 seater |

**ChatGPT Prompt:**
```
Photorealistic premium commercial automotive photograph.
Exact size: 1600 × 1000 pixels. Landscape orientation.

SUBJECT: White Toyota Innova (older/classic generation — boxy, upright SUV body, 
7-8 seater). Strong, squared-off SUV silhouette. Powerful and reliable appearance.
Immaculate white paint. Perfect condition.
ANGLE: 3/4 front-left angle — the strong upright grille and tall boxy body visible.

SETTING: Winding mountain road near Tirumala, Tirupati. Background shows lush 
green Tirumala hills, soft morning mist, golden atmospheric light.
Slightly dramatic mountain-road setting to reflect the vehicle's purpose.

LIGHTING: Warm golden-hour sunlight. The white Innova gleams powerfully.
Strong, trustworthy premium feel.

CAMERA: Canon EOS R5, 70-200mm, f/5.6. Sharp vehicle, soft background.

STYLE: Premium pilgrimage fleet photography. This Innova should look powerful, 
reliable, and comfortable — the classic Tirumala darshan vehicle.
```

---

## VEH-06 — Toyota Innova Crysta

| File | `innova-crysta.webp` | Path | `public/images/vehicles/` |
|---|---|---|---|
| **Resolution** | 1600 × 1000 px | **Ratio** | 8:5 |
| **Seating** | 7 + 1 driver | **Category** | Luxury SUV / Flagship |

**ChatGPT Prompt:**
```
Photorealistic PREMIUM commercial automotive photograph.
Exact size: 1600 × 1000 pixels. Landscape orientation.

SUBJECT: White Toyota Innova Crysta — CURRENT GENERATION (2022-24).
The Innova Crysta is DISTINCTLY MORE PREMIUM than the standard Innova:
- Sharper, more angular body lines
- Wider, more aggressive front grille with chrome detailing
- Wider stance
- More sculpted body with character lines on doors
- Chrome door handles and trim
Immaculate white paint. Showroom-perfect.
ANGLE: 3/4 front-left angle — showcase the premium sculpted front face and body.

SETTING: Elevated scenic viewpoint overlooking the Tirumala valley. 
Background: breathtaking view of misty green Tirumala hills, soft golden 
morning sky — a premium location that matches the premium vehicle.

LIGHTING: Beautiful golden-hour sunrise from the right. The Crysta's sculpted 
body panels catch gorgeous golden-amber reflections. This is the HERO vehicle 
— the photography must feel aspirational and premium.

CAMERA: Canon EOS R5, 70-200mm, f/4 (slightly wider aperture for beautiful depth).
Crysta perfectly sharp with stunning background bokeh.

STYLE: Luxury travel fleet photography. The Innova Crysta is the flagship — 
the image must feel PREMIUM, aspirational, and elite.
```

---

## VEH-07 — Chevrolet Tavera

| File | `tavera.webp` | Path | `public/images/vehicles/` |
|---|---|---|---|
| **Resolution** | 1600 × 1000 px | **Ratio** | 8:5 |
| **Seating** | 8 + 1 driver | **Category** | Large MPV / Group |

**ChatGPT Prompt:**
```
Photorealistic commercial automotive photograph.
Exact size: 1600 × 1000 pixels. Landscape orientation.

SUBJECT: White Chevrolet Tavera — large 8-9 seater MPV. 
Boxy, tall, wide-body van-style people carrier. Practical, spacious profile.
Perfect condition, well-maintained white paint.
ANGLE: 3/4 front-left angle showing the wide boxy body and tall roofline.

SETTING: Open road in Tirupati / Andhra Pradesh. Soft-focus rolling green 
terrain and warm golden atmosphere in background.

LIGHTING: Warm golden-hour sunlight from the right. White vehicle with 
clean reflections. Professional automotive photography.

CAMERA: Canon EOS R5, 70-200mm, f/5.6. Sharp vehicle, soft background.

STYLE: Professional group-travel fleet photography. Spacious, reliable, 
trustworthy — ideal for group pilgrim trips.
```

---

## VEH-08 — Tempo Traveller 12-Seater

| File | `tempo-traveller-12.webp` | Path | `public/images/vehicles/` |
|---|---|---|---|
| **Resolution** | 1600 × 1000 px | **Ratio** | 8:5 |
| **Seating** | 12 + 1 driver | **Category** | Mini-bus / Group |

**ChatGPT Prompt:**
```
Photorealistic commercial vehicle photograph.
Exact size: 1600 × 1000 pixels. Landscape orientation.

SUBJECT: White Force Tempo Traveller mini-bus, 12-seater capacity + driver.
Physical characteristics:
- Medium-length body (shorter than the 17-seater)
- Elevated roof height (push-up/high-roof)
- Two clear rows of large rectangular windows visible on the side
- Wide entrance door on the left side
- Modern, well-maintained mini-bus appearance
Spotless white paint. Freshly maintained. Premium condition — NOT a dilapidated bus.
ANGLE: 3/4 front-left angle showing full vehicle length and window layout.

SETTING: Scenic road near Tirupati — temple road or viewpoint overlooking 
Tirumala hills. Background: soft-focus green hills, warm golden light, 
South Indian landscape.

LIGHTING: Warm golden-hour morning light from the right. White vehicle gleams 
cleanly. Professional commercial vehicle photography.

CAMERA: Canon EOS R5, 24-70mm (wider to capture full vehicle length), f/5.6.
Vehicle sharp, background slightly soft.

STYLE: Premium group pilgrimage travel fleet photography. Modern, clean, 
comfortable — high-quality group transport.
```

---

## VEH-09 — Tempo Traveller 17-Seater

| File | `tempo-traveller-17.webp` | Path | `public/images/vehicles/` |
|---|---|---|---|
| **Resolution** | 1600 × 1000 px | **Ratio** | 8:5 |
| **Seating** | 17 + 1 driver | **Category** | Large Mini-bus / Large Group |

**ChatGPT Prompt:**
```
Photorealistic commercial vehicle photograph.
Exact size: 1600 × 1000 pixels. Landscape orientation.

SUBJECT: White Force Tempo Traveller large mini-bus, 17-seater capacity + driver.
Physical characteristics — MUST be visibly LARGER than the 12-seater:
- LONGER wheelbase and body (more length than the 12-seater)
- Three clear rows of large rectangular windows visible on the side
- High roof (push-up/high-roof)
- Wide entrance door on the left side
- The extra length must be clearly apparent
Spotless white paint. Premium maintained condition.
ANGLE: 3/4 front-left angle — the extended length of the vehicle is clearly visible.

SETTING: Wide open road near Tirupati — highway or Tirumala entrance road.
Background: soft-focus Andhra Pradesh landscape, hills, warm golden atmosphere.

LIGHTING: Warm golden-hour light from the right. White vehicle with clean reflections.
Professional commercial vehicle photography.

CAMERA: Canon EOS R5, 24-70mm (wide enough to capture the full long vehicle), f/5.6.
Sharp vehicle, soft background.

STYLE: Premium large-group travel fleet photography. Spacious, modern, trustworthy 
for large pilgrim groups.

CRITICAL: The 17-seater MUST look clearly LARGER and LONGER than the 12-seater.
Show three rows of windows — not two.
```

---
---

# SECTION 5 — TOUR PACKAGE IMAGES

> Each image is destination-specific. No generic stock photos.
> All images: **1600 × 1000 px | 8:5 ratio | WebP format**

**Global negative prompt for ALL package images:**
```
No text, no watermarks, no extreme close-up people, no religious poster style, 
no neon colors, no cartoon, no illustration, no CGI/fake temple, 
no generic stock photo quality
```

---

## PKG-01 — SVTT0001: Tirupati - Tirumala Local Temples

**File:** `public/images/packages/svtt0001-tirupati-tirumala-local.webp`

**ChatGPT Prompt:**
```
Photorealistic cinematic travel photograph. 1600 × 1000 pixels. Landscape.

SCENE: The Tirumala Venkateswara Temple gopuram (main tower) at golden sunrise.
The tall ancient Dravidian stone gopuram rises dramatically against a rich 
amber-and-navy sky. Intricate carvings visible on the stone tower surface.
The wide stone temple courtyard/plaza stretches in the foreground.
A few tiny human silhouettes at the base of the gopuram show its immense scale.
Soft golden morning mist adds depth and atmosphere.

LIGHTING: Golden-hour sunrise. Rich amber and warm gold sky. Deep blue upper sky.
Long golden light across the ancient stone surface.

COMPOSITION: The gopuram dominates upper-right two-thirds. Stone plaza in the 
foreground lower portion. Wide, majestic, cinematic composition.

STYLE: National Geographic-quality premium pilgrimage travel photography.
Ultra-realistic. NOT a painting, NOT a religious poster.
```

---

## PKG-02 — SVTT0002: Tirumala Local Temples (Aakasaganga, Papavinasanam)

**File:** `public/images/packages/svtt0002-tirumala-local-temples.webp`

**ChatGPT Prompt:**
```
Photorealistic cinematic travel photograph. 1600 × 1000 pixels. Landscape.

SCENE: The Aakasaganga sacred waterfall on the Tirumala hills, Andhra Pradesh.
A beautiful natural waterfall cascading down ancient black volcanic rocks,
surrounded by dense lush tropical green forest.
Ancient carved stone steps lead down to the sacred pool below the waterfall.
Crystal-clear water. Rich green tropical vegetation everywhere.
Soft morning mist hangs in the forest. Sacred, serene atmosphere.

LIGHTING: Soft filtered morning light through tropical forest canopy.
The waterfall water sparkles in dappled light. Misty, green, atmospheric.

COMPOSITION: Waterfall centered or slightly right. Dense green forest 
on both sides. Ancient stone steps in lower foreground. Immersive, serene.

STYLE: Premium spiritual nature photography. Lush, misty, magical.
National Geographic quality. Ultra-realistic.
```

---

## PKG-03 — SVTT0003: Tirumala + Kanipakam + Padmavathi

**File:** `public/images/packages/svtt0003-tirumala-kanipakam-padmavathi.webp`

**ChatGPT Prompt:**
```
Photorealistic cinematic travel photograph. 1600 × 1000 pixels. Landscape.

SCENE: Sri Varasiddhi Vinayaka Swamy Temple at Kanipakam, Andhra Pradesh.
A colorful South Indian Dravidian temple gopuram perfectly reflected in 
the absolutely still sacred temple tank (pushkarini) in front of it.
The water creates a flawless mirror reflection of the colorful tower.
Saffron, gold, cream, green, and blue colors on the sculpted gopuram.
Tropical trees frame the left and right sides.
Golden morning light makes the colors vivid and rich.

LIGHTING: Warm golden morning light. Temple tank perfectly still and mirror-like.
Rich colors on the gopuram. Deep blue sky.

COMPOSITION: Perfectly symmetric. Gopuram rises in center, its full reflection 
below in the still water. Tropical trees frame both sides. Serene and beautiful.

STYLE: Premium sacred travel photography. Serene, colorful, authentic.
NOT a religious poster. Ultra-realistic.
```

---

## PKG-04 — SVTT0004: Tirumala + Sri Kalahasti + Padmavathi

**File:** `public/images/packages/svtt0004-tirumala-srikalahasti-padmavathi.webp`

**ChatGPT Prompt:**
```
Photorealistic cinematic travel photograph. 1600 × 1000 pixels. Landscape.

SCENE: Sri Kalahasteeswara Temple, Sri Kalahasti, Andhra Pradesh.
An ancient, magnificent Shiva temple dramatically located on a rocky hill 
beside the Swarnamukhi River. The tall multi-tiered Dravidian gopuram towers 
against a dramatic sky. The river flows in the foreground, shimmering golden.
Rocky boulders and tropical trees surround the ancient structure.
Lush green hills in the background.

LIGHTING: Dramatic golden-hour late afternoon light. Warm amber tones.
The river shimmers in golden light. Long dramatic shadows.

COMPOSITION: Wide landscape. Gopuram on the right-center rising high.
The Swarnamukhi river winds through the foreground, reflecting light.
Rocky terrain and trees frame the scene. Grand and dramatic.

STYLE: Dramatic cinematic travel photography. Majestic, grand, authentic.
NOT a religious poster. Ultra-realistic.
```

---

## PKG-05 — SVTT0005: Tirumala + Padmavathi (7 Hours)

**File:** `public/images/packages/svtt0005-tirumala-padmavathi.webp`

**ChatGPT Prompt:**
```
Photorealistic cinematic travel photograph. 1600 × 1000 pixels. Landscape.

SCENE: Padmavathi Ammavari Temple, Tiruchanur, near Tirupati, Andhra Pradesh.
A beautiful, elegant whitewashed South Indian temple with a graceful tall gopuram
decorated with colorful stucco deity sculptures in vivid traditional colors.
Well-manicured gardens and a wide stone-paved plaza surround the temple.
Warm golden afternoon light bathes the white walls. Serene and devotional.
A few tiny human silhouettes at the base show the temple's scale.

LIGHTING: Warm golden late-afternoon light. White temple walls glow warmly.
Gopuram illuminated against a rich blue-orange sky. Serene, peaceful.

COMPOSITION: Temple and gopuram centered or slightly right. Wide open plaza 
in the foreground. Spacious, inviting, serene composition.

STYLE: Premium pilgrimage travel photography. Warm, serene, authentic.
```

---

## PKG-06 — SVTT0006: Tirumala + Kanipakam (5 Hours)

**File:** `public/images/packages/svtt0006-tirumala-kanipakam.webp`

**ChatGPT Prompt:**
```
Photorealistic cinematic travel photograph. 1600 × 1000 pixels. Landscape.

SCENE: A journey along a scenic rural Andhra Pradesh highway at golden hour.
A white Toyota Innova Crysta cab is traveling on a straight tree-lined highway.
The road stretches ahead through flat green farmland dotted with coconut palms.
The golden afternoon sky is dramatic with warm cloud formations.
The cab moves slightly toward the horizon — conveying a sense of comfortable travel.

LIGHTING: Beautiful golden late-afternoon sunlight. Long shadows across the road.
Rich warm amber tones. The white cab glows in the golden light.

COMPOSITION: White cab in the lower-center of the frame, traveling into the frame.
The road stretches ahead into the warm golden horizon.
Coconut palms and green fields frame both sides. Wide and cinematic.

STYLE: Premium travel journey photography. Comfortable, scenic, aspirational.
No license plate visible or completely blurred.
```

---

## PKG-07 — SVTT0007: Kanipakam + Golden Temple + Arunachalam (1 Day)

**File:** `public/images/packages/svtt0007-kanipakam-golden-temple-arunachalam.webp`

**ChatGPT Prompt:**
```
Photorealistic cinematic travel photograph. 1600 × 1000 pixels. Landscape.

SCENE: Sripuram Golden Temple (Lakshmi Narayani Temple), Vellore, Tamil Nadu.
This extraordinary temple is covered in pure 24-karat gold and GENUINELY gleams.
The golden temple complex rises against a deep blue sky with soft white clouds.
Intricate gold-covered gopurams and mandapams (pillared halls) glitter brilliantly 
in bright midday sunlight — every surface covered in gleaming gold.
Surrounding green manicured gardens and stone pathways lead to the golden structure.
Reflecting pool in the foreground catches the golden glimmer.

LIGHTING: Bright midday sunlight makes the gold surfaces sparkle spectacularly.
Contrast between deep blue sky and the brilliant gold is dramatic and stunning.

COMPOSITION: Wide landscape. Golden temple centered and prominent.
Green manicured gardens in the foreground. Gold towers rise majestically.

STYLE: Premium travel photography. This temple IS genuinely gold-covered —
capture that extraordinary magnificence photorealistically. Spectacular.
```

---

## PKG-08 — SVTT0008: Kanipakam + Golden Temple + Arunachalam + Tiruthani (2 Days)

**File:** `public/images/packages/svtt0008-kanipakam-golden-arunachalam-tiruthani.webp`

**ChatGPT Prompt:**
```
Photorealistic cinematic travel photograph. 1600 × 1000 pixels. Landscape.

SCENE: Arunachaleswarar Temple complex, Thiruvannamalai, Tamil Nadu.
One of India's greatest and most ancient temple complexes.
Show an ULTRA-WIDE perspective revealing the ENORMOUS SCALE of this vast 
ancient temple. The massive Eastern Rajagopuram (one of the tallest gopurams 
in the world at ~66 meters) rises dramatically high into the frame.
Other gopurams visible at different distances convey the vast scale.
Ancient stone walls and temple corridors visible below the towers.
Dramatic golden late-afternoon light. Long shadows add depth.

LIGHTING: Dramatic golden late-afternoon light. Warm amber glow on the 
massive ancient stone towers. Deep blue sky contrasting with warm stone.
Long dramatic shadows across the temple complex.

COMPOSITION: Ultra-wide perspective. Eastern gopuram dominates the right side,
rising high above the frame edges. Other towers in middle-ground. 
The vast scale and great antiquity must be unmistakably apparent.

STYLE: National Geographic-quality dramatic travel photography. Grand, majestic.
The image must convey the incredible scale of this ancient wonder.
```

---

## PKG-09 — SVTT0009: Tirupati Local Temples (City Sightseeing)

**File:** `public/images/packages/svtt0009-tirupati-local-temples.webp`

**ChatGPT Prompt:**
```
Photorealistic cinematic travel photograph. 1600 × 1000 pixels. Landscape.

SCENE: Govindaraja Swamy Temple, Tirupati city, Andhra Pradesh.
A beautiful ancient South Indian Dravidian temple in the heart of Tirupati city.
The tall, colorfully painted gopuram is decorated with thousands of intricate 
sculpted deities in vivid saffron, gold, red, green, and cream colors.
The gopuram rises above the surrounding traditional temple street.
Whitewashed traditional structures and tropical trees surround it.
Warm golden morning light makes the colors rich and vibrant.

LIGHTING: Warm golden morning light illuminating the colorful gopuram from front.
Colors of the sculpture work are vivid and rich — saffron, gold, green, blue.
Warm, vibrant, inviting atmosphere.

COMPOSITION: Colorful gopuram rises center-left. Temple street in lower foreground.
Wide, inviting composition. Vibrant colors fill the frame beautifully.

STYLE: Vibrant, warm, premium travel photography. Color-rich but never garish.
Ultra-realistic. NOT a religious poster.
```

---

## PKG-10 — SVTT0010: Padmavathi Temple + Sri Kalahasti (5 Hours)

**File:** `public/images/packages/svtt0010-padmavathi-srikalahasti.webp`

**ChatGPT Prompt:**
```
Photorealistic cinematic travel photograph. 1600 × 1000 pixels. Landscape.

SCENE: A single cinematic frame showing two sacred sites connected by a journey.

LEFT HALF (45%): Padmavathi Ammavari Temple, Tiruchanur — elegant white temple 
with a graceful gopuram in soft warm golden afternoon light. Serene, peaceful.
Manicured temple gardens visible.

RIGHT HALF (45%): Sri Kalahasteeswara Temple, Sri Kalahasti — dramatic ancient 
stone temple on a rocky hill, Swarnamukhi River visible in the foreground, 
richer golden afternoon tones. Grand and dramatic.

CENTER (10%): A natural visual transition — trees, hillside, or landscape 
element that connects the two scenes seamlessly without a hard cut.

COLOR GRADING: Consistent warm golden amber tones across the entire image.
Both sides use the same warm golden-hour light — this unifies the composition.

STYLE: Premium split-scene pilgrimage travel photography. Both temples 
photorealistic and warm. Unified by consistent warm golden color grading.
```

---
---

# SECTION 6 — DESTINATION IMAGES

> These are standalone destination images used in the Tirupati destination story section on the homepage and the services page. They are DIFFERENT from the package images — they are smaller, more focused, emotional destination cards.
> All images: **800 × 600 px | 4:3 ratio | WebP format**

---

## DEST-01 — Tirumala Venkateswara Temple

**File:** `public/images/destinations/tirumala-venkateswara.webp`
**Size:** 800 × 600 px

**ChatGPT Prompt:**
```
Photorealistic cinematic destination card photograph. 800 × 600 pixels. 4:3 ratio.

SCENE: Close-medium shot of the Tirumala Venkateswara Temple gopuram at dusk.
The ancient stone gopuram glows warmly against a deep blue twilight sky.
Subtle warm orange/gold light illuminates the stone carvings.
A few lit lamps or diyas (oil lamps) visible at the base add a sacred atmosphere.
The composition is tighter than a wide landscape — intimate and evocative.

LIGHTING: Dusk/twilight. Deep blue sky. Warm amber/gold temple lighting.
Sacred, peaceful, spiritual atmosphere without being poster-like.

STYLE: Premium destination travel photography. Intimate, evocative, sacred.
```

---

## DEST-02 — Kanipakam Temple

**File:** `public/images/destinations/kanipakam-temple.webp`
**Size:** 800 × 600 px

**ChatGPT Prompt:**
```
Photorealistic cinematic destination card photograph. 800 × 600 pixels. 4:3 ratio.

SCENE: The colorful gopuram of Sri Varasiddhi Vinayaka Swamy Temple, Kanipakam,
beautifully reflected in the sacred temple tank. Tight, beautiful composition
focusing on the reflection. Still water, vivid colors, golden morning light.

LIGHTING: Warm golden morning light. Colors vivid and rich. Still water reflection.

STYLE: Premium destination travel photography. Beautiful, serene, colorful.
```

---

## DEST-03 — Sri Kalahasti Temple

**File:** `public/images/destinations/sri-kalahasti-temple.webp`
**Size:** 800 × 600 px

**ChatGPT Prompt:**
```
Photorealistic cinematic destination card photograph. 800 × 600 pixels. 4:3 ratio.

SCENE: The Sri Kalahasteeswara Temple gopuram rising dramatically against a 
golden-hour sky. Rocky hills frame the sides. The Swarnamukhi River visible 
in the lower foreground, shimmering golden. Medium-wide composition.

LIGHTING: Golden-hour afternoon light. Dramatic warm amber tones. Long shadows.

STYLE: Dramatic, premium destination photography. Grand and atmospheric.
```

---

## DEST-04 — Padmavathi Temple

**File:** `public/images/destinations/padmavathi-temple.webp`
**Size:** 800 × 600 px

**ChatGPT Prompt:**
```
Photorealistic cinematic destination card photograph. 800 × 600 pixels. 4:3 ratio.

SCENE: The Padmavathi Ammavari Temple, Tiruchanur — white temple with graceful 
gopuram in warm golden afternoon light. Manicured garden in foreground.
Serene, peaceful, welcoming composition.

LIGHTING: Warm golden afternoon light. White temple walls glow softly.
Serene, peaceful atmosphere.

STYLE: Serene, warm, premium destination travel photography.
```

---

## DEST-05 — Golden Temple Vellore

**File:** `public/images/destinations/golden-temple-vellore.webp`
**Size:** 800 × 600 px

**ChatGPT Prompt:**
```
Photorealistic destination card photograph. 800 × 600 pixels. 4:3 ratio.

SCENE: Sripuram Golden Temple, Vellore — the gleaming gold-covered temple 
structure in bright sunlight. Tighter composition than the package image —
focusing on the main golden temple structure and its extraordinary golden surface.
Reflecting pool in the foreground. Blue sky with soft clouds.

LIGHTING: Bright sunlight. Brilliant gold sparkle. Deep blue sky.

STYLE: Premium destination photography. The gold must look spectacular and real.
```

---

## DEST-06 — Arunachalam Temple

**File:** `public/images/destinations/arunachalam-temple.webp`
**Size:** 800 × 600 px

**ChatGPT Prompt:**
```
Photorealistic cinematic destination card photograph. 800 × 600 pixels. 4:3 ratio.

SCENE: Arunachaleswarar Temple, Thiruvannamalai — the massive Eastern gopuram 
at golden hour. Medium-wide shot showing the immense tower against a dramatic 
amber-blue sky. Ancient stone walls in the lower foreground.

LIGHTING: Dramatic golden late-afternoon light. Warm amber sky. Long shadows.

STYLE: Dramatic, majestic premium destination photography. Grand and ancient.
```

---
---

# SECTION 7 — ABOUT & SUPPORTING IMAGES

---

## ABOUT-01 — Business / Welcome Scene

| File | `tirupati-travel-service.webp` | Path | `public/images/about/` |
|---|---|---|---|
| **Resolution** | 1200 × 800 px | **Ratio** | 3:2 |

**ChatGPT Prompt:**
```
Photorealistic travel business photograph. 1200 × 800 pixels. Landscape.

SCENE: Early morning at a professional travel business in Tirupati.
A polished white Toyota Innova Crysta is parked in front of a warm-lit 
travel office building. The building has warm interior lighting glowing through 
glass windows in the early morning light. Tropical plants and South Indian 
architectural details add local character. The atmosphere is professional, 
welcoming, and trustworthy.

LIGHTING: Warm morning light mixed with warm interior building light.
Golden tones. Inviting and professional.

COMPOSITION: Innova Crysta prominently parked outside on the left.
Welcoming lit office behind. Tropical greenery softens the edges.
Professional and trustworthy.

STYLE: Premium travel business photography. Warm, trustworthy, professional.
No text, no watermarks, no license plate visible, no people.
```

---

## ABOUT-02 — Professional Driver (Side/Back View — No Face)

| File | `professional-driver-tirupati.webp` | Path | `public/images/about/` |
|---|---|---|---|
| **Resolution** | 1200 × 800 px | **Ratio** | 3:2 |

**ChatGPT Prompt:**
```
Photorealistic travel business photograph. 1200 × 800 pixels. Landscape.

SCENE: A professional Indian male cab driver seen ONLY FROM BEHIND OR SIDE PROFILE
— face must NOT be clearly visible. Wearing a neat formal uniform (white formal 
shirt, dark trousers). Standing beside a polished white Toyota Innova Crysta at 
sunrise on a Tirupati road. He is opening the rear passenger door in a welcoming 
gesture showing attentive professional service.
The warm Tirumala hills are visible in the golden background.

LIGHTING: Golden-hour sunrise from behind the driver. Long warm shadows.
Professional, aspirational, warm.

COMPOSITION: Driver on left beside open car door. Car center-right.
Tirumala hills in warm golden background.

CRITICAL: The driver's face must NOT be visible — show from behind or a 
3/4 back angle. No clear face. No watermarks. No license plate.

STYLE: Premium travel company photography. Aspirational, professional.
```

---

## ABOUT-03 — Tirupati Scenic Road (Wide Banner)

| File | `tirupati-scenic-road.webp` | Path | `public/images/about/` |
|---|---|---|---|
| **Resolution** | 1920 × 600 px | **Ratio** | 16:5 ultra-wide |

**ChatGPT Prompt:**
```
Photorealistic cinematic ultra-wide panoramic photograph.
Exact size: 1920 × 600 pixels. Ultra-wide panoramic landscape orientation.

SCENE: The famous ghat road (winding mountain road) leading from Tirupati 
up to Tirumala, Andhra Pradesh. The road winds dramatically up richly green 
forested hills in sweeping curves. Captured from an elevated viewpoint.
A white cab is visible as a tiny speck far below on the winding road below.
The Tirumala hills are lush, dense, and green. Golden-hour sky.

LIGHTING: Late afternoon golden-hour. Long shadows across the mountain.
Rich green forest. Warm gold-amber sky.

COMPOSITION: Ultra-wide panoramic. The winding road snakes from lower-left 
up into the forested hills toward upper-right. Dramatic mountain scale visible.
Must look correct as a 1920×600 ultra-wide banner — very wide, shallow height.

STYLE: Cinematic landscape photography — premium travel brand banner quality.
No text, no watermarks, no people visible clearly.
```

---

## ABOUT-04 — Airport Transfer Banner

| File | `tirupati-airport-transfer.webp` | Path | `public/images/about/` |
|---|---|---|---|
| **Resolution** | 1920 × 600 px | **Ratio** | 16:5 ultra-wide |

**ChatGPT Prompt:**
```
Photorealistic commercial travel photograph.
Exact size: 1920 × 600 pixels. Ultra-wide panoramic landscape orientation.

SCENE: Premium white Toyota Innova Crysta parked at an airport pickup/drop zone.
Clean modern airport terminal exterior with glass facade visible in the background.
The cab is positioned for passenger pickup — rear passenger door slightly open 
invitingly. Clean airport tarmac. A couple of neat suitcases beside the car 
suggest airport travel. Warm afternoon light. Professional, efficient, premium.

LIGHTING: Bright, clean afternoon light. Professional commercial photography.

COMPOSITION: Ultra-wide panoramic. Cab in lower-center-left.
Airport terminal in right background. Wide, clean, professional banner composition.

STYLE: Premium airport transfer service photography.
No text, no watermarks, no license plate, no close-up faces. Clean and professional.
```

---
---

# SECTION 8 — BLOG IMAGES

> All blog images: **1600 × 900 px | 16:9 ratio | WebP format**

**Base template for all blog images:**
```
Photorealistic travel blog header photograph. 1600 × 900 pixels. 16:9 landscape.
Lighting: Warm golden-hour light. Cinematic color grading. Rich and warm tones.
Composition: Wide, inviting header image. Left one-third darker for text overlay.
Style: Premium travel editorial photography. Warm, inviting, authentic.
IMPORTANT: No text, no watermarks, no extreme close-up faces, no poster style.
```

---

## BLOG-01 — Tirupati Darshan Guide

**File:** `public/images/blog/tirupati-darshan-guide.webp`

**ChatGPT Prompt:**
```
Photorealistic travel blog header. 1600 × 900 pixels. 16:9 landscape.

SCENE: The Tirumala Venkateswara Temple gopuram at golden dawn light.
Wide cinematic view showing the full majestic height of the ancient stone tower
against a rich amber-and-navy dawn sky. Tiny devotee silhouettes at the base
showing the tower's immense scale. Misty golden atmosphere. Sacred and grand.

Warm golden-hour dawn lighting. Wide, cinematic, majestic composition.
Left one-third slightly darker. No text, no watermarks, no close-up faces.
```

---

## BLOG-02 — Tirumala Travel Guide

**File:** `public/images/blog/tirumala-travel-guide.webp`

**ChatGPT Prompt:**
```
Photorealistic travel blog header. 1600 × 900 pixels. 16:9 landscape.

SCENE: The famous ghat road from Tirupati to Tirumala seen from an elevated 
viewpoint. The road snakes dramatically up through dense tropical green forest.
A white cab is visible far below as a tiny speck on the winding road.
Golden morning light filters through the forest canopy. Breathtaking scale.

Warm morning light. Dramatic winding road composition. Left third darker.
No text, no watermarks, no people close-up.
```

---

## BLOG-03 — Best Places to Visit in Tirupati

**File:** `public/images/blog/best-places-tirupati.webp`

**ChatGPT Prompt:**
```
Photorealistic travel blog header. 1600 × 900 pixels. 16:9 landscape.

SCENE: Elevated view of Tirupati city at golden hour. The colorful Govindaraja 
Temple gopuram rises prominently above the Tirupati city roofscape.
Palm trees and South Indian urban landscape spread across the mid-ground.
Rich amber and warm sky behind. Vibrant and inviting city-travel feel.

Warm golden-hour light. Wide city panoramic composition. Left third darker.
No text, no watermarks.
```

---

## BLOG-04 — Tirupati to Kanipakam Travel Guide

**File:** `public/images/blog/tirupati-kanipakam-travel.webp`

**ChatGPT Prompt:**
```
Photorealistic travel blog header. 1600 × 900 pixels. 16:9 landscape.

SCENE: The sacred temple tank at Kanipakam. The colorful gopuram of Sri 
Varasiddhi Vinayaka Swamy Temple perfectly reflected in the still water.
Golden afternoon light. Rich colors in the reflection. Tropical trees frame 
both sides. Serene and beautiful.

Golden afternoon light. Symmetric reflection composition. Left third slightly darker.
No text, no watermarks, no people close-up.
```

---

## BLOG-05 — Tirupati to Sri Kalahasti Travel Guide

**File:** `public/images/blog/tirupati-srikalahasti-travel.webp`

**ChatGPT Prompt:**
```
Photorealistic travel blog header. 1600 × 900 pixels. 16:9 landscape.

SCENE: Sri Kalahasteeswara Temple set dramatically on rocky hill with the 
Swarnamukhi River in the foreground shimmering in golden light.
Wide landscape composition. Dramatic late-afternoon sky.
Ancient temple, river, rocky hills, tropical trees.

Dramatic golden late-afternoon light. Wide landscape composition. Left third darker.
No text, no watermarks, no people close-up.
```

---

## BLOG-06 — Tirupati to Golden Temple Vellore

**File:** `public/images/blog/tirupati-golden-temple.webp`

**ChatGPT Prompt:**
```
Photorealistic travel blog header. 1600 × 900 pixels. 16:9 landscape.

SCENE: Sripuram Golden Temple, Vellore, gleaming spectacularly in bright sunlight.
The gold-covered gopurams and structures sparkle brilliantly against a deep blue 
sky with dramatic white clouds. The gold is extraordinarily brilliant.
Reflecting pool in the foreground mirrors the gold glimmer.

Bright midday sunlight. Gold sparkle and blue sky contrast. Left third darker.
No text, no watermarks.
```

---

## BLOG-07 — Tirupati Temple Tour Guide

**File:** `public/images/blog/tirupati-temple-tour.webp`

**ChatGPT Prompt:**
```
Photorealistic travel blog header. 1600 × 900 pixels. 16:9 landscape.

SCENE: A dramatic golden-hour skyline of Tirupati showing multiple temple 
gopuram silhouettes against a fiery orange, amber, and gold sunset sky.
Several towers visible at different heights and distances.
Silhouettes of gopurams create a beautiful skyline composition.
Romantic, evocative, spiritual feeling — the city of temples.

Fiery orange and amber sunset sky. Silhouette temple skyline composition.
Left third slightly darker. No text, no watermarks.
```

---

## BLOG-08 — Tirupati Airport to Tirumala Travel Guide

**File:** `public/images/blog/tirupati-airport-tirumala.webp`

**ChatGPT Prompt:**
```
Photorealistic travel blog header. 1600 × 900 pixels. 16:9 landscape.

SCENE: Tirupati Airport (Renigunta Airport) terminal exterior at golden sunrise.
Clean, modern airport terminal building in the background.
A white Toyota Innova Crysta cab parked at the terminal pickup zone in foreground.
Warm golden sunrise sky behind the terminal. Professional and welcoming.

Warm golden sunrise light. Airport terminal and cab composition. Left third darker.
No text, no watermarks, no license plate, no close-up faces.
```

---
---

# SECTION 9 — OPEN GRAPH / SOCIAL PREVIEW IMAGE

## OG-01 — Open Graph Social Share Image

| File | `og-image.jpg` | Path | `public/images/logo/` |
|---|---|---|---|
| **Resolution** | **1200 × 630 px** | **Ratio** | 1.91:1 |
| **Format** | JPG |
| **Use** | WhatsApp share, Facebook, X, LinkedIn previews |

**ChatGPT Prompt:**
```
Professional social media preview card. Exactly 1200 × 630 pixels.

LAYOUT:
- Left 35%: Deep maroon background (#7B1C2E). In the center of this section,
  a clean warm-gold rounded rectangle (#C9922B) serves as a PLACEHOLDER 
  where the SVTT logo SVG will be placed by the developer.
  Label the placeholder clearly with the text "LOGO" in small white letters.
  
- Right 65%: A beautiful BLURRED soft-focus photograph of the Tirumala Temple
  gopuram at golden sunrise as the background image.
  Over this blurred photo, apply a semi-transparent deep maroon overlay 
  (approximately 65% opacity) so text is readable over it.
  
  In the right section, in clean white typography centered vertically:
  - Line 1 (Large): "Sri Vinayaka Tours & Travels"
  - Line 2 (Small, gold color #C9922B): "Tirupati's Trusted Travel Partner"  
  - A thin gold horizontal rule below line 2
  - Line 3 (Small, white): "+91 9652240674 | svtttirupati.com"

TYPOGRAPHY: Clean modern sans-serif. "Sri Vinayaka Tours & Travels" is the 
biggest and most prominent text.

COLOR PALETTE: Deep maroon (#7B1C2E) background, warm gold (#C9922B) accents, 
white text, soft Tirumala background photo.

STYLE: Premium travel brand social card. Professional, recognizable even at 
thumbnail size. Like a luxury travel company's link preview.

No watermarks. No borders. Exactly 1200 × 630 pixels.
```

---
---

# SECTION 10 — ICONS

> These are SVG icons used throughout the site. They should be created as clean SVG files, not generated by AI image tools.

## ICONS — Create in Canva, Figma, or use from a free icon library

| File | Path | Use | Style |
|---|---|---|---|
| `whatsapp-icon.svg` | `public/images/icons/` | WhatsApp buttons | Green #25D366, flat |
| `phone-icon.svg` | `public/images/icons/` | Call buttons | Maroon #7B1C2E, flat |
| `location-pin.svg` | `public/images/icons/` | Address display | Gold #C9922B, flat |

> **Recommended source for icons:** [Heroicons](https://heroicons.com) or [Lucide Icons](https://lucide.dev) — both have clean SVG phone and location pin icons. For the WhatsApp icon specifically, use the official WhatsApp brand icon (white on green background).

---
---

# COMPLETE UPLOAD CHECKLIST

Mark each asset ⬜ → ✅ as you upload it.

## 🎨 Logo & Icons (11 files) — ✅ COMPLETE
| # | Filename | Upload Path | Status |
|---|---|---|---|
| L-01 | `svtt-logo.svg` | `public/images/logo/` | ✅ User uploaded |
| L-02 | `svtt-logo-dark.svg` | `public/images/logo/` | ✅ User uploaded |
| L-03 | `svtt-logo-light.svg` | `public/images/logo/` | ✅ User uploaded |
| L-04 | `svtt-logo-white.svg` | `public/images/logo/` | ✅ User uploaded |
| L-05 | `svtt-icon.svg` | `public/images/logo/` | ✅ User uploaded |
| L-06 | `favicon.ico` | `public/` (root) | ✅ Generated (ICO, 32×32) |
| L-07 | `icon.png` (192×192) | `public/` (root) | ✅ Generated |
| L-08 | `apple-icon.png` (180×180) | `public/` (root) | ✅ Generated |
| L-09 | `svtt-icon-192.png` | `public/images/logo/` | ✅ Generated |
| L-10 | `svtt-icon-512.png` | `public/images/logo/` | ✅ Generated |
| L-11 | `og-image.jpg` (1200×630) | `public/images/logo/` | ✅ Generated (premium) |

## 👤 Owner Photo (1 file) — ✅ COMPLETE
| # | Filename | Upload Path | Status |
|---|---|---|---|
| O-01 | `ravilla-hemanth-naidu.jpg` | `public/images/owner/` | ✅ 1254×1254px — real photo — approved |

## 🖼️ Hero Images (2 files) — ✅ COMPLETE
| # | Filename | Resolution | Upload Path | Status |
|---|---|---|---|---|
| H-01 | `hero-desktop.webp` | 1920×900 | `public/images/hero/` | ✅ Uploaded — approved |
| H-02 | `hero-mobile.webp` | 1080×1350 | `public/images/hero/` | ✅ Uploaded — approved |

## 🚗 Vehicle Images (9 files) — ✅ COMPLETE
| # | Filename | Vehicle | Upload Path | Status |
|---|---|---|---|---|
| V-01 | `dzire.webp` | Maruti Dzire | `public/images/vehicles/` | ✅ Approved |
| V-02 | `etios.webp` | Toyota Etios | `public/images/vehicles/` | ✅ Approved |
| V-03 | `amaze.webp` | Honda Amaze | `public/images/vehicles/` | ✅ Approved |
| V-04 | `ertiga.webp` | Maruti Ertiga | `public/images/vehicles/` | ✅ Approved |
| V-05 | `innova.webp` | Toyota Innova | `public/images/vehicles/` | ✅ Approved |
| V-06 | `innova-crysta.webp` | Innova Crysta | `public/images/vehicles/` | ✅ Approved |
| V-07 | `tavera.webp` | Chevrolet Tavera | `public/images/vehicles/` | ✅ Approved |
| V-08 | `tempo-traveller-12.webp` | Tempo 12-seater | `public/images/vehicles/` | ✅ Renamed → approved |
| V-09 | `tempo-traveller-17.webp` | Tempo 17-seater | `public/images/vehicles/` | ✅ Approved |

## 🛕 Tour Package Images (10 files) — ✅ COMPLETE
| # | Filename | Package | Upload Path | Status |
|---|---|---|---|---|
| P-01 | `svtt0001-tirupati-tirumala-local.webp` | SVTT0001 | `public/images/packages/` | ✅ Tirumala gopuram at golden sunrise |
| P-02 | `svtt0002-tirumala-local-temples.webp` | SVTT0002 | `public/images/packages/` | ✅ Aakasaganga waterfall + sacred steps |
| P-03 | `svtt0003-tirumala-kanipakam-padmavathi.webp` | SVTT0003 | `public/images/packages/` | ✅ Kanipakam temple tank reflection |
| P-04 | `svtt0004-tirumala-srikalahasti-padmavathi.webp` | SVTT0004 | `public/images/packages/` | ✅ Sri Kalahasti temple with river |
| P-05 | `svtt0005-tirumala-padmavathi.webp` | SVTT0005 | `public/images/packages/` | ✅ Padmavathi temple white gopuram |
| P-06 | `svtt0006-tirumala-kanipakam.webp` | SVTT0006 | `public/images/packages/` | ✅ Innova Crysta on Andhra highway |
| P-07 | `svtt0007-kanipakam-golden-temple-arunachalam.webp` | SVTT0007 | `public/images/packages/` | ✅ Golden Temple Vellore gleaming |
| P-08 | `svtt0008-kanipakam-golden-arunachalam-tiruthani.webp` | SVTT0008 | `public/images/packages/` | ✅ Arunachaleswarar aerial panorama |
| P-09 | `svtt0009-tirupati-local-temples.webp` | SVTT0009 | `public/images/packages/` | ✅ Colorful Tirupati city temples |
| P-10 | `svtt0010-padmavathi-srikalahasti.webp` | SVTT0010 | `public/images/packages/` | ✅ Twin-temple panorama, river in foreground |

## 🗺️ Destination Images (6 files) — ✅ COMPLETE
| # | Filename | Destination | Upload Path | Status |
|---|---|---|---|---|
| D-01 | `tirumala-venkateswara.webp` | Tirumala | `public/images/destinations/` | ✅ Illuminated at twilight — stunning |
| D-02 | `kanipakam-temple.webp` | Kanipakam | `public/images/destinations/` | ✅ Colorful gopuram reflected in tank |
| D-03 | `sri-kalahasti-temple.webp` | Sri Kalahasti | `public/images/destinations/` | ✅ Temple + river at golden sunset |
| D-04 | `padmavathi-temple.webp` | Tiruchanur | `public/images/destinations/` | ✅ White temple, manicured gardens |
| D-05 | `golden-temple-vellore.webp` | Vellore | `public/images/destinations/` | ✅ All-gold structure with reflection pool |
| D-06 | `arunachalam-temple.webp` | Thiruvannamalai | `public/images/destinations/` | ✅ Grand gopuram + Arunachala hill |

## 🏢 About & Supporting Images (4 files) — ✅ COMPLETE
| # | Filename | Resolution | Upload Path | Status |
|---|---|---|---|---|
| A-01 | `tirupati-travel-service.webp` | 1200×800 | `public/images/about/` | ✅ Innova Crysta at warm-lit building |
| A-02 | `professional-driver-tirupati.webp` | 1200×800 | `public/images/about/` | ✅ Driver (back view) opening door, Tirupati backdrop |
| A-03 | `tirupati-scenic-road.webp` | 1920×600 | `public/images/about/` | ✅ Ultra-wide ghat road to Tirumala, city below |
| A-04 | `tirupati-airport-transfer.webp` | 1920×600 | `public/images/about/` | ✅ Airport pickup — Innova + luggage + terminal |

## 📝 Blog Images (8 files) — ✅ COMPLETE
| # | Filename | Topic | Upload Path | Status |
|---|---|---|---|---|
| B-01 | `tirupati-darshan-guide.webp` | Darshan Guide | `public/images/blog/` | ✅ Tirumala gopuram at dramatic sunrise |
| B-02 | `tirumala-travel-guide.webp` | Tirumala Guide | `public/images/blog/` | ✅ Aerial ghat road with white car, Tirupati city below |
| B-03 | `best-places-tirupati.webp` | Best Places | `public/images/blog/` | ✅ Tirupati city skyline panorama at sunset |
| B-04 | `tirupati-kanipakam-travel.webp` | Kanipakam Guide | `public/images/blog/` | ✅ Kanipakam temple tank golden reflection |
| B-05 | `tirupati-srikalahasti-travel.webp` | Sri Kalahasti Guide | `public/images/blog/` | ✅ Sri Kalahasti temple + rocky hill + river |
| B-06 | `tirupati-golden-temple.webp` | Golden Temple | `public/images/blog/` | ✅ Sripuram gold temple with lotus pond |
| B-07 | `tirupati-temple-tour.webp` | Temple Tour | `public/images/blog/` | ✅ Multiple gopurams at fiery sunset panorama |
| B-08 | `tirupati-airport-tirumala.webp` | Airport Guide | `public/images/blog/` | ✅ Innova at airport departure, plane taking off |

---

## 📊 Asset Count Summary

| Category | Files | Status |
|---|---|---|
| Logo + Icons | 11 | ✅ COMPLETE (2026-10-02) |
| Owner Photo | 1 | ✅ COMPLETE (2026-10-02) |
| Hero Images | 2 | ✅ COMPLETE (2026-10-02) |
| Vehicle Images | 9 | ✅ COMPLETE (2026-10-02) |
| Package Images | 10 | ✅ COMPLETE (2026-10-02) |
| Destination Images | 6 | ✅ COMPLETE (2026-10-02) |
| About/Supporting | 4 | ✅ COMPLETE (2026-10-02) |
| Blog Images | 8 | ✅ COMPLETE (2026-10-02) |
| **TOTAL** | **51 files** | **🎉 51/51 — ALL ASSETS COMPLETE** |

---

*ASSET_REQUIREMENTS.md v2.0 — Sri Vinayaka Tours & Travels — svtttirupati.com*
*Last updated: 2026-10-02*
*Do not generate the owner's face. Do not include Weganor anywhere.*
