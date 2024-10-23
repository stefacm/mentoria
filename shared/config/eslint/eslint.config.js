/**
 * This file can be used to define Eslint configuration,
 * more info in https://eslint.org/docs/latest/use/configure/configuration-files/
 */

import pluginJs from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import eslintPluginImportX from 'eslint-plugin-import-x';
import perfectionist from 'eslint-plugin-perfectionist';
import prettier from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import { configs } from 'typescript-eslint';

/** @type {import("eslint").Linter.Config} */
export default [
  /**
   * Base config with Typescript dependencies
   * - eslint
   * - globals
   * - typescript-eslint
   * - @eslint/js
   * - @types/eslint__js
   * - eslint-plugin-import-x
   * - eslint-import-resolver-typescript
   * - @typescript-eslint/parser
   */
  ...[
    ...configs.strictTypeChecked,
    ...configs.stylisticTypeChecked,
    eslintPluginImportX.flatConfigs.recommended,
    eslintPluginImportX.flatConfigs.typescript,
    {
      files: ['**/*.{js,ts,jsx,tsx,astro}'],
      ignores: ['build/**', 'dist/**', 'static/**'],
      languageOptions: {
        globals: { ...globals.browser, ...globals.node },
        parser: tsParser,
        parserOptions: {
          ecmaVersion: 'latest',
          projectService: true,
          sourceType: 'module',
          tsconfigRootDir: '../../../.',
          warnOnUnsupportedTypeScriptVersion: false,
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
        'import-x/no-named-as-default-member': 'off',
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
          internalPattern: ['@shared/**', '@/**'],
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
