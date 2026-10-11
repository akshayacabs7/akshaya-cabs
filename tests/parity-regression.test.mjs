import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { VEHICLES } from '../src/data/vehicles.ts';
import { PACKAGES } from '../src/data/packages.ts';
import { SERVICES } from '../src/data/services.ts';
import { CAB_ROUTES } from '../src/data/routes.ts';
import { BLOG_POSTS } from '../src/data/blog.ts';

const appDir = path.resolve('.next/server/app');

test('Parity 1: Vehicle Fleet (7 categories, 9 variants, approved baselines)', () => {
  assert.equal(VEHICLES.length, 7, 'Must have exactly 7 vehicle categories');

  const expectedVariants = {
    'dzire-amaze-etios': 3,
    'ertiga': 1,
    'innova': 1,
    'innova-crysta': 1,
    'tavera': 1,
    'tempo-traveller-12': 1,
    'force-urbania-12': 1,
  };

  let totalVariants = 0;
  for (const v of VEHICLES) {
    assert.equal(v.variants.length, expectedVariants[v.id], `Variant count mismatch for ${v.id}`);
    totalVariants += v.variants.length;
    // Banned vehicle
    for (const variant of v.variants) {
      assert.doesNotMatch(variant, /wagon\s*r/i, `WagonR banned rule violated in ${v.id}`);
    }
  }
  assert.equal(totalVariants, 9, 'Must have exactly 9 vehicle variants');
});

test('Parity 2: Tour Packages (10 packages, baseline prices, 0 SVTT leaks)', () => {
  assert.equal(PACKAGES.length, 10, 'Must have exactly 10 tour packages');

  const expectedPrices = {
    AKC0001: 3600,
    AKC0002: 3300,
    AKC0003: 5200,
    AKC0004: 4300,
    AKC0005: 3000,
    AKC0006: 4500,
    AKC0007: 8000,
    AKC0008: 9000,
    AKC0009: 2300,
    AKC0010: 2500,
  };

  for (const p of PACKAGES) {
    assert.equal(p.startingPrice, expectedPrices[p.code], `Price mismatch for ${p.code}`);
    assert.doesNotMatch(p.code, /SVTT/i, `SVTT code leak in ${p.code}`);
    assert.doesNotMatch(p.title, /SVTT|Sri Vinayaka/i, `Brand leak in ${p.title}`);
    assert.doesNotMatch(p.slug, /svtt/i, `Slug leak in ${p.slug}`);

    // Verify detail pages exist in build
    const enPage = path.join(appDir, 'en', 'tour-packages', `${p.slug}.html`);
    const tePage = path.join(appDir, 'te', 'tour-packages', `${p.slug}.html`);
    assert.ok(fs.existsSync(enPage), `Missing EN package detail page: ${p.slug}`);
    assert.ok(fs.existsSync(tePage), `Missing TE package detail page: ${p.slug}`);
  }
});

test('Parity 3: Service Categories (all 9 services bilingual)', () => {
  assert.equal(SERVICES.length, 9, 'Must have exactly 9 service categories');

  for (const s of SERVICES) {
    assert.ok(s.id && s.title && s.titleTe, `Missing title in service ${s.id}`);
    assert.ok(s.description && s.descriptionTe, `Missing description in service ${s.id}`);
    assert.ok(Array.isArray(s.features) && s.features.length > 0, `Missing features in service ${s.id}`);
    assert.ok(Array.isArray(s.featuresTe) && s.featuresTe.length > 0, `Missing featuresTe in service ${s.id}`);
  }
});

test('Parity 4: Route Landing Pages (8 distinct destination routes)', () => {
  assert.equal(CAB_ROUTES.length, 8, 'Must have exactly 8 route landing pages');

  for (const r of CAB_ROUTES) {
    assert.ok(r.slug && r.title && r.titleTe, `Missing title in route ${r.slug}`);
    assert.ok(r.distanceKm > 0, `distanceKm must be positive for ${r.slug}`);
    assert.ok(r.durationApprox && r.durationApproxTe, `durationApprox must exist for ${r.slug}`);

    // Verify detail pages exist in build
    const enPage = path.join(appDir, 'en', 'routes', `${r.slug}.html`);
    const tePage = path.join(appDir, 'te', 'routes', `${r.slug}.html`);
    assert.ok(fs.existsSync(enPage), `Missing EN route page: ${r.slug}`);
    assert.ok(fs.existsSync(tePage), `Missing TE route page: ${r.slug}`);
  }
});

test('Parity 5: Travel Blog Articles (8 full bilingual pilgrimage guides)', () => {
  assert.equal(BLOG_POSTS.length, 8, 'Must have exactly 8 travel blog articles');

  for (const post of BLOG_POSTS) {
    assert.ok(post.slug && post.title && post.titleTe, `Missing title in blog ${post.slug}`);
    assert.ok(post.readingTime && post.readingTime.length > 0, `readingTime missing for ${post.slug}`);

    // Verify detail pages exist in build
    const enPage = path.join(appDir, 'en', 'blog', `${post.slug}.html`);
    const tePage = path.join(appDir, 'te', 'blog', `${post.slug}.html`);
    assert.ok(fs.existsSync(enPage), `Missing EN blog page: ${post.slug}`);
    assert.ok(fs.existsSync(tePage), `Missing TE blog page: ${post.slug}`);
  }
});

test('Originality 1: Zero SVTT or Sri Vinayaka brand leakage in build output', () => {
  function getHtmlFiles(dir) {
    let files = [];
    for (const item of fs.readdirSync(dir)) {
      const full = path.join(dir, item);
      if (fs.statSync(full).isDirectory()) files = files.concat(getHtmlFiles(full));
      else if (item.endsWith('.html')) files.push(full);
    }
    return files;
  }

  const htmlFiles = getHtmlFiles(appDir);
  assert.ok(htmlFiles.length >= 83, `Expected at least 83 HTML files, found ${htmlFiles.length}`);

  for (const f of htmlFiles) {
    const html = fs.readFileSync(f, 'utf8');
    assert.doesNotMatch(html, /\bSVTT\b/i, `SVTT leak in ${f}`);
    assert.doesNotMatch(html, /Sri Vinayaka/i, `Sri Vinayaka leak in ${f}`);
    assert.doesNotMatch(html, /svtttirupati/i, `svtttirupati leak in ${f}`);
    assert.doesNotMatch(html, /"aggregateRating"/i, `Fake aggregateRating schema leak in ${f}`);
    assert.doesNotMatch(html, /"reviewRating"/i, `Fake reviewRating schema leak in ${f}`);
  }
});

test('Originality 2: Zero .svtt-* CSS classes in globals.css', () => {
  const css = fs.readFileSync(path.resolve('src/app/globals.css'), 'utf8');
  assert.doesNotMatch(css, /\.svtt-[a-zA-Z0-9_-]+/, '.svtt-* CSS classes must not exist in globals.css');
});

test('Originality 3: Netlify Static Forms Definition in public/__forms.html', () => {
  const formsHtmlPath = path.resolve('public/__forms.html');
  assert.ok(fs.existsSync(formsHtmlPath), 'public/__forms.html must exist for Netlify form detection');

  const formsHtml = fs.readFileSync(formsHtmlPath, 'utf8');
  assert.match(formsHtml, /name="akshaya-enquiry"/, 'akshaya-enquiry form must be defined');
  assert.match(formsHtml, /name="akshaya-quote"/, 'akshaya-quote form must be defined');
  assert.match(formsHtml, /name="akshaya-trip"/, 'akshaya-trip form must be defined');
  assert.doesNotMatch(formsHtml, /svtt/i, 'No SVTT references in __forms.html');
});

test('Security & Accessibility: Skip link and honeypot present in application', () => {
  const enHome = fs.readFileSync(path.join(appDir, 'en.html'), 'utf8');
  assert.match(enHome, /akc-skip-link/, 'Skip link must be rendered in en.html');

  const teHome = fs.readFileSync(path.join(appDir, 'te.html'), 'utf8');
  assert.match(teHome, /akc-skip-link/, 'Skip link must be rendered in te.html');

  const plannerForm = fs.readFileSync(path.resolve('src/components/ui/TripPlannerForm.tsx'), 'utf8');
  assert.match(plannerForm, /name="bot-field"/, 'TripPlannerForm must include honeypot bot-field');

  const contactForm = fs.readFileSync(path.resolve('src/components/ui/ContactEnquiryForm.tsx'), 'utf8');
  assert.match(contactForm, /name="bot-field"/, 'ContactEnquiryForm must include honeypot bot-field');
});
