# TS Library template

TypeScript library template for creating **npm** packages.

## Getting started

1. Ensure that you have the right version of `node`:

   ```sh
   nvm use
   ```

2. Install packages:

   ```sh
   npm i
   ```

## Build

```sh
npm run build
```

## Testing

```sh
npm t
```

## Built with

- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Babel](https://babeljs.io/)
- [Jest](https://jestjs.io/)
- [husky](https://github.com/typicode/husky)
- [lint-staged](https://github.com/okonet/lint-staged)

## Before publishing

1. Change package `name`.
2. Fill out `keywords` section in your _package.json_.
3. Change `private` property in _package.json_ to `false`.
4. Change author's name.
5. Check the `license`.
6. Fill out the following sections:

   - `repository`
   - `bugs`
   - `homepage`

7. Don't forget to set a version.
8. Check your package content:

   ```sh
   npm pack --dry-run
   ```
