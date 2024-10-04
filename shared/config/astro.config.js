/**
 * This file can be used to define Astro configuration,
 * more info in https://astro.build/config
 */

// import sitemap from '@astrojs/sitemap';
// import tailwind from '@astrojs/tailwind';
// import criticalCSS from '@playform/inline';
import { defineConfig } from 'astro/config';

export default defineConfig({
  build: {
    assets: 'assets',
  },
  // integrations: [tailwind(), criticalCSS(), sitemap()],
  outDir: './build',
  publicDir: './static',
});
