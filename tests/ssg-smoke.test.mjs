import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const appOutputDir = path.resolve('.next/server/app');

function getAllHtmlFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getAllHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

test('SSG Smoke: Pre-rendered HTML files exist in build output', () => {
  assert.ok(fs.existsSync(appOutputDir), '.next/server/app build directory must exist');
  const htmlFiles = getAllHtmlFiles(appOutputDir);
  assert.ok(htmlFiles.length >= 80, `Expected at least 80 pre-rendered HTML files, found ${htmlFiles.length}`);
});

test('SSG Brand Isolation: Zero SVTT or Sri Vinayaka references in any pre-rendered HTML', () => {
  const htmlFiles = getAllHtmlFiles(appOutputDir);
  const bannedPatterns = [
    /\bSVTT\b/i,
    /Sri Vinayaka/i,
    /svtttirupati/i,
  ];

  for (const filePath of htmlFiles) {
    const content = fs.readFileSync(filePath, 'utf8');
    const relPath = path.relative(appOutputDir, filePath);
    for (const pattern of bannedPatterns) {
      assert.doesNotMatch(
        content,
        pattern,
        `Prohibited brand token matching ${pattern} found in prerendered HTML: ${relPath}`
      );
    }
  }
});

test('SSG Homepage: English homepage has required metadata, skip link, and phone', () => {
  const enHomePath = path.join(appOutputDir, 'en.html');
  assert.ok(fs.existsSync(enHomePath), 'en.html must exist');
  const enContent = fs.readFileSync(enHomePath, 'utf8');

  // Skip link
  assert.match(enContent, /akc-skip-link/, 'en.html must contain skip link');
  assert.match(enContent, /Skip to main content/, 'en.html must contain English skip link text');

  // Phone number
  assert.match(enContent, /72888\s*76667/, 'en.html must contain primary phone number');

  // Founder
  assert.match(enContent, /S\.R\.\s*Kumar/i, 'en.html must reference founder S.R. Kumar');

  // Canonical & hreflang
  assert.match(enContent, /rel="canonical"[^>]*href="https:\/\/akshayacabs\.com\/en"/i, 'Canonical URL must point to /en');
  assert.match(enContent, /hreflang="x-default"[^>]*href="https:\/\/akshayacabs\.com\/en"/i, 'x-default hreflang must exist');
});

test('SSG Homepage: Telugu homepage has authentic Telugu metadata and skip link', () => {
  const teHomePath = path.join(appOutputDir, 'te.html');
  assert.ok(fs.existsSync(teHomePath), 'te.html must exist');
  const teContent = fs.readFileSync(teHomePath, 'utf8');

  // Telugu skip link
  assert.match(teContent, /ప్రధాన విషయానికి వెళ్లండి/, 'te.html must contain Telugu skip link text');

  // Canonical
  assert.match(teContent, /rel="canonical"[^>]*href="https:\/\/akshayacabs\.com\/te"/i, 'Canonical URL must point to /te');
});

test('SSG Core Pages: Major English and Telugu routes exist', () => {
  const coreRoutes = [
    'about.html',
    'fleet.html',
    'tour-packages.html',
    'services.html',
    'pickup-drop.html',
    'compare.html',
    'routes.html',
    'blog.html',
    'contact.html',
    'why-choose-us.html',
    'terms-and-conditions.html',
    'privacy-policy.html',
    'request-a-quote.html',
  ];

  for (const route of coreRoutes) {
    const enFile = path.join(appOutputDir, 'en', route);
    const teFile = path.join(appOutputDir, 'te', route);
    assert.ok(fs.existsSync(enFile), `Missing SSG file: en/${route}`);
    assert.ok(fs.existsSync(teFile), `Missing SSG file: te/${route}`);
  }
});

test('SSG Robots & Sitemap: robots.txt and sitemap.xml generated with akshayacabs.com', () => {
  const robotsBody = path.join(appOutputDir, 'robots.txt.body');
  const sitemapBody = path.join(appOutputDir, 'sitemap.xml.body');

  assert.ok(fs.existsSync(robotsBody), 'robots.txt.body must exist');
  assert.ok(fs.existsSync(sitemapBody), 'sitemap.xml.body must exist');

  const robots = fs.readFileSync(robotsBody, 'utf8');
  assert.match(robots, /https:\/\/akshayacabs\.com\/sitemap\.xml/, 'robots.txt must declare canonical sitemap');

  const sitemap = fs.readFileSync(sitemapBody, 'utf8');
  assert.match(sitemap, /https:\/\/akshayacabs\.com\/en/, 'sitemap.xml must declare /en routes');
  assert.match(sitemap, /https:\/\/akshayacabs\.com\/te/, 'sitemap.xml must declare /te routes');
});
