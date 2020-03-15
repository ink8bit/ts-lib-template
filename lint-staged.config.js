/**
 * @see {@link https://github.com/okonet/lint-staged#configuration}
 */
module.exports = {
  '**/*.ts': ['tsc', 'prettier --write', 'eslint --fix'],
  '**/*.js': ['prettier --write', 'eslint --fix'],
  '**/*.json': ['prettier --write'],
};
