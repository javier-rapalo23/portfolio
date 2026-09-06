import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // Sin eslint-plugin-react, ESLint no marca como usados los identificadores
      // que solo aparecen en JSX. Los componentes en mayuscula ya quedan cubiertos
      // por el patron; 'motion' (framer-motion) es minuscula y hay que anadirlo.
      'no-unused-vars': ['error', { varsIgnorePattern: '^([A-Z_]|motion$)' }],
    },
  },
])
