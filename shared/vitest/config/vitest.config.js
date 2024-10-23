/**
 * This file can be used to define Vitest configuration,
 * more info in https://vitest.dev/config/
 */

import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

/**
 * Vitest Base config dependencies
 * - vitest
 * - @vitest/coverage-istanbul
 */
export default defineConfig({
  test: {
    coverage: {
      all: true,
      extension: ['.js', '.cjs', '.mjs', '.ts', '.mts', '.tsx', '.jsx'],
      provider: 'istanbul',
      reporter: ['html-spa', 'lcov', 'text'],
    },
    globals: true,
    outputFile: {
      junit: 'reports/junit.xml',
    },
    poolOptions: {
      threads: {
        singleThread: true,
      },
    },
    reporters: ['default', 'junit', ...(process.env.GITHUB_ACTIONS ? ['github-actions'] : [])],
    setupFiles: [resolve(__dirname, './test.setup.ts')],
  },
});
