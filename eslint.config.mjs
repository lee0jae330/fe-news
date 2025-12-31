// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import prettier from 'eslint-config-prettier';

export default defineConfig(eslint.configs.recommended, prettier, {
  ignores: ['node_modules', 'dist'],
  languageOptions: {
    globals: {
      ...globals.browser,
    },
  },
  rules: {
    'prettier/prettier': 'error',
  },
});
