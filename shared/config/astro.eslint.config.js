/**
 * This file can be used to define Eslint configuration,
 * more info in https://eslint.org/docs/latest/use/configure/configuration-files/
 */

import astro from 'eslint-plugin-astro';

/** @type {import("eslint").Linter.Config} */
export default [
  /**
   * Astro config
   * - eslint-plugin-astro
   * - astro-eslint-parser
   */
  ...astro.configs['flat/jsx-a11y-strict'],
];
