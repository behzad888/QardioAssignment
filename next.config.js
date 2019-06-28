'use strict';

const withOptimizedImages = require('next-optimized-images');
const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts');

module.exports =withFonts(withSass(withOptimizedImages({
  /* config for next-optimized-images */

  // your config for other plugins or the general next.js here...
})));