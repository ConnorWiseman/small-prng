/**
 * @file src/index.js
 * @license MIT
 */
'use strict';

const prng = require('./prng');

module.exports = {
  prng,
  random: prng()
};
