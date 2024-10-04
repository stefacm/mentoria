/**
 * This file can be used to define Eslint configuration,
 * more info in https://eslint.org/docs/latest/use/configure/configuration-files/
 */

import pluginJs from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist';
import prettier from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import("eslint").Linter.Config} */
export default [
  /**
   * Base config with Typescript dependencies
   * - eslint
   * - typescript-eslint
   * - @eslint/js
   * - @types/eslint__js
   */
  ...[
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
      files: ['**/*.{js,ts,jsx,tsx,astro}'],
      ignores: ['build/*', 'static/*'],
      languageOptions: {
        globals: { ...globals.browser, ...globals.node },
        parserOptions: {
          ecmaVersion: 'latest',
          project: true,
          sourceType: 'module',
          tsconfigRootDir: './tsconfig.json',
        },
      },
      ...pluginJs.configs.recommended,
      linterOptions: {
        reportUnusedDisableDirectives: 'warn',
      },
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
        'no-console': 'warn',
        'no-nested-ternary': 'warn',
      },
    },
  ],

  /**
   * Codes Styles config dependencies
   * - eslint-plugin-prettier
   * - eslint-config-prettier
   * - eslint-plugin-perfectionist
   */
  {
    ...perfectionist.configs['recommended-alphabetical'],
    rules: {
      'jsx-sort-props': 'off',
      'perfectionist/sort-imports': [
        'warn',
        {
          customGroups: {
            type: {
              react: ['react', 'react-*'],
            },
            value: {
              react: ['react', 'react-*'],
            },
          },
          environment: 'bun',
          groups: [
            'type',
            'react',
            ['builtin', 'external'],
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'object',
            'unknown',
          ],
          internalPattern: ['@shared/**', '@/**', '@static/**'],
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-interfaces': 'warn',
      'perfectionist/sort-intersection-types': 'warn',
      'perfectionist/sort-jsx-props': 'warn',
      'perfectionist/sort-named-imports': [
        'warn',
        {
          groupKind: 'types-first',
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-object-types': 'warn',
      'perfectionist/sort-objects': 'warn',
      'perfectionist/sort-union-types': [
        'warn',
        {
          groups: [
            'conditional',
            'function',
            'import',
            'intersection',
            'keyword',
            'literal',
            'named',
            'object',
            'operator',
            'tuple',
            'union',
            'unknown',
            'nullish',
          ],
          type: 'alphabetical',
        },
      ],
      'sort-imports': 'off',
      'sort-type-constituents': 'off',
    },
  },
  {
    ...prettier,
    rules: {
      'prettier/prettier': 'warn',
    },
  },
];
