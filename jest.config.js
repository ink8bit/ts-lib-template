const jestCommonConfig = require('./jest.config.common');

/**
 * @see {@link https://jestjs.io/docs/en/configuration}
 */
module.exports = {
  ...jestCommonConfig,
  displayName: 'local',
  notify: false,
  bail: true,
  verbose: false,
};
