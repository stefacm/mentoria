/**
 * This file can be used to define Vitest configuration,
 * more info in https://vitest.dev/config/
 */

import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

/**
 * Vitest Base config dependencies
 * - vitest
 * - jsdom
 * - @vitest/coverage-istanbul
 */
export default defineConfig({
  test: {
    coverage: {
      all: true,
      provider: 'istanbul',
      reporter: ['html-spa', 'lcov', 'text'],
    },
    environment: 'jsdom',
    globals: true,
    outputFile: {
      junit: 'reports/junit.xml',
    },
    poolOptions: {
      threads: {
        singleThread: true,
      },
    },
    reporters: ['default', 'junit'],
    setupFiles: [resolve(__dirname, './test.setup.ts')],
  },
});
