import { createRequire } from 'module';
import prettierConfig from 'eslint-config-prettier';

const require = createRequire(import.meta.url);

// eslint-config-next already ships native flat config arrays — no FlatCompat needed.
const nextCoreWebVitals = require('eslint-config-next/core-web-vitals');
const nextTypescript = require('eslint-config-next/typescript');

const eslintConfig = [
  {
    ignores: ['.next/**', 'node_modules/**', 'dist/**', 'build/**', 'out/**', 'scratch/**'],
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
  prettierConfig,
];

export default eslintConfig;
