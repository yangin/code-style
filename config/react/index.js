/**
 * For react in javaScript
 * dependency
 * es: eslint、eslint-plugin-import、eslint-plugin-jest、eslint-plugin-node、eslint-plugin-promise
 * babel: @babel/preset-env、 @babel/preset-react
 * react: eslint-plugin-react、eslint-plugin-react-hooks
 */
module.exports = {
  extends: [
    '../eslint/best-practices',
    '../eslint/errors',
    '../eslint/node',
    '../eslint/style',
    '../eslint/variables',
    '../eslint/es6',
    '../eslint/imports',
    './react',
    './react-hooks'
  ].map(require.resolve),
  presets: ['@babel/preset-env', '@babel/preset-react'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    requireConfigFile: false,
    ecmaFeatures: { jsx: true }
  },
  plugins: ['react', 'jest', 'react-hooks'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  rules: {}
}
