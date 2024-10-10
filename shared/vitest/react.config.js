/**
 * This file can be used to define Vitest configuration,
 * more info in https://vitest.dev/config/
 */

import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig, mergeConfig } from 'vitest/config';

import sharedConfig from './vitest.config.js';

/**
 * Vitest React config dependencies
 * - @vitejs/plugin-react
 * - vite
 * - @testing-library/dom
 * - @testing-library/jest-dom
 * - @testing-library/react
 * - @testing-library/user-event
 */
export default mergeConfig(
  sharedConfig,
  defineConfig({
    plugins: [react()],
    test: {
      setupFiles: [resolve(__dirname, './react.setup.tsx')],
    },
  }),
);
