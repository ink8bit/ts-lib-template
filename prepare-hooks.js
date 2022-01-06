const isLocalEnv = !process.env.CI;

if (isLocalEnv) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('husky').install();
}
