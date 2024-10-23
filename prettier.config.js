/**
 * This file can be used to define Prettier configuration,
 * more info in https://prettier.io/docs/en/configuration/
 */

import sharedAstroConfig from './shared/config/prettier/astro.prettier.config.js';
import sharedConfig from './shared/config/prettier/prettier.config.js';
import sharedTailwindConfig from './shared/config/prettier/tailwind.prettier.config.js';

/** @type {import("prettier").Options} */
export default {
  ...sharedConfig,
  ...sharedAstroConfig,
  ...sharedTailwindConfig,
  plugins: [...sharedConfig.plugins, ...sharedAstroConfig.plugins, ...sharedTailwindConfig.plugins],
};
