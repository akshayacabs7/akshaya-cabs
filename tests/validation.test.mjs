import { test } from 'node:test';
import assert from 'node:assert/strict';

function isPhoneValid(phone) {
  const cleaned = phone.replace(/[\s\-().]/g, '');
  return /^(\+91|91|0)?[6-9]\d{9}$/.test(cleaned);
}

function isDateInPast(dateStr) {
  const today = new Date().toISOString().split('T')[0];
  return dateStr < today;
}

function isReturnDateValid(travelDate, returnDate) {
  if (!returnDate) return true;
  return returnDate >= travelDate;
}

test('Phone Validation: accepts valid 10-digit Indian numbers with various prefixes', () => {
  const validNumbers = [
    '7288876667',
    '+917288876667',
    '+91 72888 76667',
    '919393900006',
    '+91 93939 00006',
    '09876543210',
    '9876543210',
    '8123456789',
    '6987654321',
  ];

  for (const num of validNumbers) {
    assert.ok(isPhoneValid(num), `Expected ${num} to be valid`);
  }
});

test('Phone Validation: rejects invalid mobile numbers', () => {
  const invalidNumbers = [
    '',
    '12345',
    '5555555555',       // Starts with 5 (invalid Indian mobile)
    '1234567890',       // Starts with 1
    'abcdefghij',       // Alphabetical
    '+1 555 123 4567',  // Non-Indian
    '98765',            // Too short
    '9876543210123',    // Too long
  ];

  for (const num of invalidNumbers) {
    assert.equal(isPhoneValid(num), false, `Expected ${num} to be invalid`);
  }
});

test('Date Validation: rejects past travel dates and accepts today or future dates', () => {
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
  const nextMonth = new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0];

  assert.equal(isDateInPast(yesterday), true, 'Yesterday must be identified as past');
  assert.equal(isDateInPast(today), false, 'Today must not be in the past');
  assert.equal(isDateInPast(tomorrow), false, 'Tomorrow must not be in the past');
  assert.equal(isDateInPast(nextMonth), false, 'Next month must not be in the past');
});

test('Round-trip Date Validation: return date must be on or after travel date', () => {
  assert.equal(isReturnDateValid('2026-10-15', '2026-10-15'), true, 'Same day return is valid');
  assert.equal(isReturnDateValid('2026-10-15', '2026-10-18'), true, 'Later return date is valid');
  assert.equal(isReturnDateValid('2026-10-15', '2026-10-14'), false, 'Earlier return date is invalid');
});
