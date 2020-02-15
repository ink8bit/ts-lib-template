/**
 * Configuring ESLint
 * @see {@link https://eslint.org/docs/user-guide/configuring}
 */
module.exports = {
  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#specifying-environments}
   */
  env: {
    browser: true,
    es6: true,
    node: true,
  },

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#extending-configuration-files}
   */
  extends: ['eslint:recommended', 'eslint-config-prettier'],

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#specifying-globals}
   */
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#specifying-parser}
   */
  parser: 'babel-eslint',

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#specifying-parser-options}
   */
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#configuring-plugins}
   */
  plugins: ['@typescript-eslint'],

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#configuring-rules}
   */
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },

  overrides: [
    {
      files: '**/*.ts',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'eslint-config-prettier/@typescript-eslint',
      ],
    },
  ],
};
