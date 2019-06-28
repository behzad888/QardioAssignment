'use strict';

const withOptimizedImages = require('next-optimized-images');
const withSass = require('@zeit/next-sass')

module.exports =withSass(withOptimizedImages({
  /* config for next-optimized-images */

  // your config for other plugins or the general next.js here...
}));