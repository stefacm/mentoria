/**
 * This file can be used to define Prettier configuration,
 * more info in https://prettier.io/docs/en/configuration/
 */

import sharedAstro from './shared/config/astro.prettier.config.js';
import sharedConfig from './shared/config/prettier.config.js';
import sharedTailwind from './shared/config/tailwind.prettier.config.js';

/** @type {import("prettier").Options} */
export default {
  ...sharedConfig,
  ...sharedAstro,
  ...sharedTailwind,
  plugins: [...sharedAstro.plugins, ...sharedTailwind.plugins],
};
