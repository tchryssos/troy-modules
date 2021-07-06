/**
 * @remarks Ensures that typescript-eslint's parser only runs for the correct files.
 * Taken from https://github.com/Codecademy/client-modules/blob/main/packages/eslint-config/rules/typescript.js
 */
const tsConfig = {
  extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
  files: ['*.tsx', '*.ts'],
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
};

module.exports = {
  overrides: [tsConfig],
};
