/**
 * @see {@link https://github.com/okonet/lint-staged#configuration}
 */
module.exports = {
  '**/*.[j,t]s': ['prettier --write', 'eslint'],
  '**/*.json': ['prettier --write'],
};
