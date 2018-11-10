/**
 * @file src/seed.js
 * @license MIT
 */
'use strict';

/**
 * Converts a call to `process.hrtime()` to nanoseconds. Suitable as a basic
 * seed value for noncryptographic pseudorandom number generators.
 * @param  {Array.<number>} - The result of a call to `process.hrtime()`.
 * @return {number}
 * @private
 */
module.exports = ([ s, n ] = process.hrtime()) => (s * 1e9) + n;
