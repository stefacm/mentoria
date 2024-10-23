/**
 * This file can be used to define Eslint configuration,
 * more info in https://eslint.org/docs/latest/use/configure/configuration-files/
 */

import { configs } from 'eslint-plugin-astro';
import { configs as tsConfigs } from 'typescript-eslint';

/** @type {import("eslint").Linter.Config} */
export default [
  /**
   * Astro config
   * - eslint-plugin-astro
   * - astro-eslint-parser
   */
  ...configs['flat/jsx-a11y-strict'],
  {
    files: ['**/*.astro'],
    ...tsConfigs.disableTypeChecked,
  },
];
