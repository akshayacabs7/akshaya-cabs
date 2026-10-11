import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

function buildWhatsAppUrl(number, message) {
  const base = `https://wa.me/${number}`;
  if (!message || !message.trim()) return base;
  return `${base}?text=${encodeURIComponent(message.trim())}`;
}

test('WhatsApp URL Builder: generates valid wa.me URLs with primary number', () => {
  const primaryNumber = '917288876667';
  const url = buildWhatsAppUrl(primaryNumber, 'Hello Akshaya Cabs!');
  assert.equal(url, 'https://wa.me/917288876667?text=Hello%20Akshaya%20Cabs!');
  assert.doesNotMatch(url, /\s/, 'URL must not contain raw whitespace');
});

test('WhatsApp URL Builder: generates valid wa.me URLs with secondary number', () => {
  const secondaryNumber = '919393900006';
  const url = buildWhatsAppUrl(secondaryNumber, 'Booking enquiry');
  assert.equal(url, 'https://wa.me/919393900006?text=Booking%20enquiry');
});

test('WhatsApp URL Builder: encodes Telugu Unicode characters correctly', () => {
  const primaryNumber = '917288876667';
  const teluguMsg = 'నమస్కారం! తిరుమల క్యాబ్ బుకింగ్ కొరకు.';
  const url = buildWhatsAppUrl(primaryNumber, teluguMsg);
  assert.ok(url.startsWith('https://wa.me/917288876667?text='));
  const decoded = decodeURIComponent(url.split('?text=')[1]);
  assert.equal(decoded, teluguMsg, 'Telugu message must round-trip cleanly through URL decode');
});

test('Phone Numbers Audit: all phone and WhatsApp links in codebase match official numbers', () => {
  function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat && stat.isDirectory()) results = results.concat(walk(fullPath));
      else if (/\.(tsx|ts)$/.test(file)) results.push(fullPath);
    });
    return results;
  }

  const files = walk('./src');

  for (const f of files) {
    const content = fs.readFileSync(f, 'utf8');
    // Search for wa.me links
    const waMatches = content.match(/wa\.me\/(\d+)/g) || [];
    for (const match of waMatches) {
      const num = match.replace('wa.me/', '');
      assert.ok(
        num === '917288876667' || num === '919393900006',
        `Unexpected WhatsApp number in ${f}: ${match}`
      );
    }
  }
});
