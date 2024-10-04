/**
 * This file can be used to define Prettier configuration,
 * more info in https://prettier.io/docs/en/configuration/
 */

/** @type {import("prettier").Options} */
export default {
  /**
   * Astro config dependencies
   * - prettier-plugin-astro
   */
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  plugins: ['prettier-plugin-astro'],
};
