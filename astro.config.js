/**
 * This file can be used to define Astro configuration,
 * more info in https://astro.build/config
 */

import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

import sharedAstroConfig from './shared/config/astro.config.js';

// https://astro.build/config
export default defineConfig({
  ...sharedAstroConfig,
  integrations: [react()],
  site: 'https://localhost:4321/login',
});
