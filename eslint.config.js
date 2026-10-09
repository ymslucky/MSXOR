import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginAstro from 'eslint-plugin-astro';

export default tseslint.config(
  { ignores: ['dist/**', '.astro/**', 'node_modules/**'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginAstro.configs.recommended,
  {
    languageOptions: {
      globals: { ...globals.browser },
    },
  },
  {
    files: ['scripts/**'],
    languageOptions: {
      globals: { ...globals.node },
    },
  },
);
