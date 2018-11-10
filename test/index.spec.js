/**
 * @file test/index.spec.js
 */
'use strict';

const test = require('ava');

const { prng, random } = require('../src');

test('prng should be a function', t => {
  t.true(typeof prng === 'function');
});

test('random should be a function', t => {
  t.true(typeof random === 'function');
});
