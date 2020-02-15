const isTest = process.env.NODE_ENV === 'test';

/**
 * @see {@link https://babeljs.io/docs/en/config-files}
 */
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: isTest ? 'commonjs' : false,
        targets: {
          node: '12',
        },
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: ['@babel/plugin-transform-runtime'],
};
