/**
 * @see {@link https://jestjs.io/docs/en/configuration}
 */
module.exports = {
  displayName: 'ci',
  notify: false,
  bail: false,
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,ts}'],
};
