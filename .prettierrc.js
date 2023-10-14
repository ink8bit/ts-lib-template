/**
 * @see {@link https://prettier.io/docs/en/configuration.html}
 */
const config = {
  printWidth: 80,
  tabWidth: 2,
  overrides: [
    {
      files: ['*.js', '*.ts'],
      options: {
        arrowParens: 'avoid',
        trailingComma: 'all',
        singleQuote: true,
        semi: true,
        useTabs: false,
        bracketSpacing: true,
      },
    },

    {
      files: '*.json',
      options: {
        printWidth: 120,
      },
    },

    {
      files: '*.yml',
      options: {
        singleQuote: true,
      },
    },
  ],
};

module.exports = config;
