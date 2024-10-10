/**
 * This file can be used to define Vitest configuration,
 * more info in https://vitest.dev/config/
 */

import { resolve } from 'path';
import { defineConfig, mergeConfig } from 'vitest/config';

import sharedConfig from './shared/vitest/react.config.js';

export default mergeConfig(
  sharedConfig,
  defineConfig({
    test: {
      alias: {
        '@': resolve(__dirname, './src/'),
        '@shared': resolve(__dirname, './shared/'),
      },
      coverage: {
        // exclude: [
        //   ...coverageConfigDefaults.exclude,
        //   // 'shared/react/providers/services/__test__/test.utils.ts',
        // ],
        // include: ['src/**', 'shared/react/**'],
        include: ['src/components/**'],
      },
      include: [
        'src/**/*.{test,spec}.?(c|m)[jt]s?(x)',
        // 'shared/react/**/*.{test,spec}.?(c|m)[jt]s?(x)',
      ],
    },
  }),
);
