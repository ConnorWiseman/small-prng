/**
 * @file test/seed.spec.js
 */
'use strict';

const test = require('ava');

const seed = require('../src/seed');

test('should be a function', t => {
  t.true(typeof seed === 'function');
});

test('should return a number', t => {
  t.true(typeof seed() === 'number');
});
