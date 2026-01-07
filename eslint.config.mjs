// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import sortImports from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

export default defineConfig(eslint.configs.recommended, prettier, {
  ignores: ['node_modules', 'dist'],
  languageOptions: {
    globals: {
      ...globals.browser,
    },
  },
  plugins: {
    prettier: prettierPlugin,
    'simple-import-sort': sortImports,
  },
  rules: {
    'prettier/prettier': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^node:'],
          ['^@?\\w'],
          ['^@/'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'no-console': 'error',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_$',
        varsIgnorePattern: '^_$',
        caughtErrorsIgnorePattern: '^_$',
        destructuredArrayIgnorePattern: '^_$',
        ignoreRestSiblings: true,
      },
    ],
  },
});
