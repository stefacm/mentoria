/**
 * This file can be used to define Astro configuration,
 * more info in https://astro.build/config
 */

import { defineConfig } from 'astro/config';

import sharedConfig from './shared/config/astro/astro.config.js';
import sharedReactConfig from './shared/config/astro/react.astro.config.js';

/**
 * Astro config dependencies
 * - astro
 */
export default defineConfig({
  ...sharedConfig,
  integrations: [
    ...sharedConfig.integrations,
    sharedReactConfig.integrations,
  ],
  site: 'https://local.host',
  vite: {
    ...sharedReactConfig.vite,
    plugins: [...sharedReactConfig.vite.plugins],
  },
});
