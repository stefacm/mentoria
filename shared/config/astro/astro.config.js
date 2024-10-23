/**
 * This file can be used to define Astro configuration,
 * more info in https://astro.build/config
 */

import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

/**
 * Astro config dependencies
 * - @astrojs/tailwind
 */
export default defineConfig({
  build: {
    assets: 'assets',
  },
  integrations: [tailwind()],
  outDir: './build',
  publicDir: './static',
});
