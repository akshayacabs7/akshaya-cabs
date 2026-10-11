import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PACKAGES } from '../src/data/packages.ts';

test('Package Baseline: exactly 10 tour packages exist', () => {
  assert.equal(PACKAGES.length, 10);
});

test('Package Codes & Starting Prices match approved master plan', () => {
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

  for (const pkg of PACKAGES) {
    const expStartingPrice = expectedPrices[pkg.code];
    assert.ok(expStartingPrice !== undefined, `Unknown package code: ${pkg.code}`);
    assert.equal(
      pkg.startingPrice,
      expStartingPrice,
      `startingPrice mismatch for ${pkg.code}`
    );
  }
});

test('Zero SVTT Leaks: SVTT identifiers never appear in public titles or descriptions', () => {
  for (const pkg of PACKAGES) {
    assert.doesNotMatch(pkg.title, /SVTT/i, `SVTT in title for ${pkg.id}`);
    assert.doesNotMatch(pkg.description, /SVTT|Sri Vinayaka/i, `SVTT in description for ${pkg.id}`);
    assert.doesNotMatch(pkg.slug, /svtt/i, `SVTT in slug for ${pkg.id}`);
  }
});

test('Vehicle Pricing Matrix: each package has prices for fleet classes', () => {
  for (const pkg of PACKAGES) {
    assert.ok(Array.isArray(pkg.prices) && pkg.prices.length >= 5, `Prices array missing or small for ${pkg.id}`);
    for (const pr of pkg.prices) {
      assert.ok(pr.vehicleId, `vehicleId missing in pricing of ${pkg.id}`);
      if (pr.price !== null) {
        assert.ok(pr.price >= pkg.startingPrice, `price ${pr.price} is below startingPrice for ${pkg.id}`);
      } else {
        assert.equal(pr.customQuote, true, `customQuote should be true when price is null for ${pkg.id} (${pr.vehicleId})`);
      }
    }
  }
});

test('Temple Stops & Itinerary: all packages specify destinations and temples', () => {
  for (const pkg of PACKAGES) {
    assert.ok(Array.isArray(pkg.temples) && pkg.temples.length > 0, `Temples missing for ${pkg.id}`);
    assert.ok(Array.isArray(pkg.destinations) && pkg.destinations.length > 0, `Destinations missing for ${pkg.id}`);
  }
});

test('Bilingual Telugu Coverage: all packages have authentic Telugu data', () => {
  for (const pkg of PACKAGES) {
    assert.ok(pkg.titleTe && pkg.titleTe.length > 0, `titleTe missing for ${pkg.id}`);
    assert.ok(pkg.descriptionTe && pkg.descriptionTe.length > 0, `descriptionTe missing for ${pkg.id}`);
    assert.ok(pkg.durationTe && pkg.durationTe.length > 0, `durationTe missing for ${pkg.id}`);
  }
});
