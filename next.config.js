'use strict';

const withOptimizedImages = require('next-optimized-images');
const withCSS = require('@zeit/next-css')
module.exports = withCSS(withOptimizedImages({
  /* config for next-optimized-images */

  // your config for other plugins or the general next.js here...
}));