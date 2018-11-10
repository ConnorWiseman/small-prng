# small-prng
> A fast, seedable replacement for `Math.random()`.

[![npm](https://img.shields.io/npm/v/small-prng.svg?style=flat-square)](https://www.npmjs.com/package/small-prng) ![Node.js](https://img.shields.io/badge/node.js-%3E=_8.12.0-blue.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/com/ConnorWiseman/small-prng/master.svg?style=flat-square)](https://travis-ci.com/ConnorWiseman/small-prng)
[![Code Coverage](https://img.shields.io/codeclimate/coverage/ConnorWiseman/small-prng.svg?style=flat-square)](https://codeclimate.com/github/ConnorWiseman/small-prng)
[![Maintainability](https://img.shields.io/codeclimate/maintainability/ConnorWiseman/small-prng.svg?style=flat-square)](https://codeclimate.com/github/ConnorWiseman/small-prng)
[![Dependencies Status](https://david-dm.org/ConnorWiseman/small-prng/status.svg?style=flat-square)](https://david-dm.org/ConnorWiseman/small-prng)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/ConnorWiseman/small-prng/blob/master/LICENSE)


## Installation

```shell
npm i small-prng
```


## Usage
### Exported global function

The seed for the exported function `random()` is based on `process.hrtime()` when the module is first required.

```javascript
const { random } = require('small-prng');

random();
```


### Creating a seeded PRNG

To create a seeded PRNG, use the exported function `prng()`. Calling `prng()` without any arguments will use `process.hrtime()` as the seed.

```javascript
const { prng } = require('small-prng');

const mySeed = 1;
const random = prng(mySeed);

random();
```


## License

The majority of the code in this repository is released under the MIT license. However, the JavaScript port of Bob Jenkins's [small noncryptographic PRNG](http://www.burtleburtle.net/bob/rand/smallprng.html) in `src/prng.js` is public domain.
