
/**
 * @file test/random/prng.spec.js
 */
'use strict';

const test = require('ava');

const prng = require('../src/prng');

test('should be a function', t => {
  t.true(typeof prng === 'function');
});

test('should return a function', t => {
  t.true(typeof prng() === 'function');
});

test('returned function should return a number >= 0 && < 1', t => {
  const rand = prng();

  for (let i = 0; i < 100000; i++) {
    const num = rand();
    t.true(typeof num === 'number');
    t.true(num >= 0 && num < 1);
  }
});

test('should always return consistent results for known seeds', t => {
  for (let i = 0; i < 20000; i++) {
    const rand = prng(1);

    t.true(rand() === 0.918905695900321);
    t.true(rand() === 0.3551357937976718);
    t.true(rand() === 0.3446009934414178);
    t.true(rand() === 0.2596622540149838);
    t.true(rand() === 0.22396136890165508);
  }
});

test('should always return identical results for identical seeds', t => {
  for (let i = 0; i < 25000; i++) {
    const rand1 = prng(1);
    const rand2 = prng(1);
    const rand3 = prng(1);
    const rand4 = prng(1);

    const results = [ rand1(), rand2(), rand3(), rand4() ];

    t.true(results.every(value => value === results[0]));
  }
});
