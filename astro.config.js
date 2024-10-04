// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  publicDir: './static',
  outDir: './build',
  site: 'https://localhost:4321/login'
});