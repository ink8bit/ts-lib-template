const isTest = process.env.NODE_ENV === 'test';

/**
 * @see {@link https://babeljs.io/docs/en/config-files}
 */
module.exports = {
  presets: [
    [
      /**
       * @see {@link https://babeljs.io/docs/en/babel-preset-env}
       */
      '@babel/preset-env',
      {
        modules: isTest ? 'commonjs' : false,
        targets: {
          node: '12',
        },
      },
    ],

    /**
     * @see {@link https://babeljs.io/docs/en/babel-preset-typescript}
     */
    '@babel/preset-typescript',
  ],

  /**
   * @see {@link https://babeljs.io/docs/en/babel-plugin-transform-runtime}
   */
  plugins: ['@babel/plugin-transform-runtime'],
};
