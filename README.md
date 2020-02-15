# TS Library template

TypeScript library template for creating **npm** packages.

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

1. Change `private` property in _package.json_ to `false`.
2. Check what's inside your future package:

   ```sh
   npm pack --dry-run
   ```
