/**
 * This file can be used to define Astro configuration,
 * more info in https://astro.build/config
 */

import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import svgr from 'vite-plugin-svgr';

/**
 * Astro React config dependencies
 * - @astrojs/react
 * - vite-plugin-svgr
 */
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [svgr()],
  },
});
