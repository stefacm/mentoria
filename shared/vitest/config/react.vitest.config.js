/**
 * This file can be used to define Vitest configuration,
 * more info in https://vitest.dev/config/
 */

import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vitest/config';

/**
 * Vitest React config dependencies
 * - @vitejs/plugin-react
 * - vite
 * - vite-plugin-svgr
 * - @testing-library/dom
 * - @testing-library/jest-dom
 * - @testing-library/react
 * - @testing-library/user-event
 */
export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    setupFiles: [resolve(__dirname, './react.setup.tsx')],
  },
});
