'use strict';

const withOptimizedImages = require('next-optimized-images');
const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts');
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');
dotenvLoad();
 
const withNextEnv = nextEnv();

module.exports =withNextEnv(withFonts(withSass(withOptimizedImages({
  /* config for next-optimized-images */

  // your config for other plugins or the general next.js here...
}))));