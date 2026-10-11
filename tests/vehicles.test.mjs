import { test } from 'node:test';
import assert from 'node:assert/strict';
import { VEHICLES } from '../src/data/vehicles.ts';

test('Vehicle Categories: exactly 7 approved categories exist', () => {
  assert.equal(VEHICLES.length, 7);
});

test('Vehicle Rates & Baselines match approved pricing matrix', () => {
  const expected = {
    'dzire-amaze-etios': { perKm: 15, localBase: 2000, seats: 4, capacity: '4+1' },
    'ertiga': { perKm: 19, localBase: 2300, seats: 6, capacity: '6+1' },
    'innova': { perKm: 21, localBase: 2500, seats: 7, capacity: '7+1' },
    'innova-crysta': { perKm: 23, localBase: 3000, seats: 7, capacity: '7+1' },
    'tavera': { perKm: 20, localBase: 3000, seats: 8, capacity: '8+1' },
    'tempo-traveller-12': { perKm: 27, localBase: 3000, seats: 12, capacity: '12+1' },
    'force-urbania-12': { perKm: 35, localBase: 5000, seats: 12, capacity: '12+1' },
  };

  for (const v of VEHICLES) {
    const exp = expected[v.id];
    assert.ok(exp, `Unexpected vehicle id: ${v.id}`);
    assert.equal(v.price.perKm, exp.perKm, `perKm mismatch for ${v.id}`);
    assert.equal(v.price.localDay, exp.localBase, `localDay mismatch for ${v.id}`);
    assert.equal(v.seats, exp.seats, `seats mismatch for ${v.id}`);
    assert.equal(v.capacity, exp.capacity, `capacity mismatch for ${v.id}`);
    assert.equal(v.price.kmLimit, 300, `kmLimit must be 300km for ${v.id}`);
  }
});

test('Driver allowance included: all rates note included driver charges', () => {
  for (const v of VEHICLES) {
    // In Akshaya Cabs, driver allowance is included in localDay/perKm fares
    assert.ok(v.price.driverCharges !== undefined, `driverCharges reference missing for ${v.id}`);
  }
});

test('Bilingual Telugu Coverage: all vehicles have authentic Telugu fields', () => {
  for (const v of VEHICLES) {
    assert.ok(v.nameTe && v.nameTe.length > 0, `nameTe missing for ${v.id}`);
    assert.ok(v.labelTe && v.labelTe.length > 0, `labelTe missing for ${v.id}`);
    assert.ok(Array.isArray(v.featuresTe) && v.featuresTe.length > 0, `featuresTe missing for ${v.id}`);
    assert.ok(v.bestForTe && v.bestForTe.length > 0, `bestForTe missing for ${v.id}`);
  }
});

test('Banned Vehicles Rule: WagonR is never present in any variant', () => {
  for (const v of VEHICLES) {
    for (const variant of v.variants) {
      assert.doesNotMatch(variant, /wagon\s*r/i, `WagonR found in variant list for ${v.id}`);
    }
  }
});
