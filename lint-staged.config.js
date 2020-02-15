/**
 * @see {@link https://github.com/okonet/lint-staged#configuration}
 */
module.exports = {
  '**/*.ts': ['tsc', 'prettier --write', 'eslint'],
  '**/*.js': ['prettier --write', 'eslint'],
  '**/*.json': ['prettier --write'],
};
