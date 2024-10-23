/**
 * This file can be used to define Vitest configuration,
 * more info in https://vitest.dev/config/
 */

import { resolve } from 'path';
import { defineConfig, mergeConfig } from 'vitest/config';

import sharedReactConfig from './shared/vitest/config/react.vitest.config.js';
import sharedConfig from './shared/vitest/config/vitest.config.js';

/**
 * Vitest config dependencies
 * - jsdom
 */
export default mergeConfig(
  sharedConfig,
  mergeConfig(
    sharedReactConfig,
    defineConfig({
      test: {
        alias: {
          '@': resolve(__dirname, './src/'),
          '@shared': resolve(__dirname, './shared/'),
          '@static': resolve(__dirname, './static/'),
        },
        coverage: {
          include: ['src/**'],
          // include: ['src/**', 'shared/react/**', 'shared/utils/**'],
        },
        environment: 'jsdom',
        include: [
          'src/**/*.test.?(c|m)[jt]s?(x)',
          // 'shared/react/**/*.test.?(c|m)[jt]s?(x)',
          // 'shared/utils/**/*.test.?(c|m)[jt]s?(x)',
        ],
      },
    }),
  ),
);
