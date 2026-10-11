import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const cssPath = path.resolve('src/app/globals.css');
const cssContent = fs.readFileSync(cssPath, 'utf8');

test('CSS Audit: globals.css exists and is non-empty', () => {
  assert.ok(cssContent.length > 5000, 'globals.css should have comprehensive styles');
});

test('Responsive Layout: Viewport breakpoints exist for mobile and desktop', () => {
  assert.match(cssContent, /@media\s*\(\s*(min|max)-width:\s*(640|768|1024|1280)px\s*\)/i, 'Responsive media queries should exist');
  assert.match(cssContent, /--akc-max-w:\s*1280px/, 'Max container width token should be 1280px');
});

test('Mobile Safety: overflow-x hidden is enforced on root container', () => {
  assert.match(cssContent, /html\s*\{[^}]*overflow-x:\s*hidden/s, 'html must have overflow-x: hidden');
  assert.match(cssContent, /(\.akc-body|body)[^{]*\{[^}]*overflow-x:\s*hidden/s, 'body or .akc-body must have overflow-x: hidden');
});

test('WCAG Accessibility: Focus visible outline is implemented', () => {
  assert.match(cssContent, /:focus-visible\s*\{[^}]*outline:/s, 'High contrast focus-visible outline required');
});

test('WCAG Accessibility: Skip to main content link styles are implemented', () => {
  assert.match(cssContent, /\.akc-skip-link\s*\{/, '.akc-skip-link styling required');
  assert.match(cssContent, /\.akc-skip-link:(focus|focus-visible)\s*\{/, '.akc-skip-link:focus visible styling required');
});

test('WCAG Accessibility: prefers-reduced-motion is respected', () => {
  assert.match(cssContent, /@media\s*\(\s*prefers-reduced-motion:\s*reduce\s*\)/, 'prefers-reduced-motion media query required');
});

test('Design Tokens: Brand color palette tokens exist', () => {
  assert.match(cssContent, /--akc-primary:\s*#102B46/i, 'Primary Navy brand token should exist');
  assert.match(cssContent, /--akc-accent:\s*#0FAF9D/i, 'Teal accent brand token should exist');
  assert.match(cssContent, /--akc-gold:\s*#F2B75C/i, 'Gold brand token should exist');
  assert.match(cssContent, /--akc-wa:\s*#25D366/i, 'WhatsApp green token should exist');
});

test('Mobile Usability: Sticky mobile bottom bar height token exists', () => {
  assert.match(cssContent, /--akc-sticky-bar-h:/, 'Sticky bottom bar reservation token required');
});
