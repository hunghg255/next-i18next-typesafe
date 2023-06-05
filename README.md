# i18next typesafe

[![npm version](https://badge.fury.io/js/next-i18next-typesafe.svg)](https://badge.fury.io/js/next-i18next-typesafe) [![npm](https://img.shields.io/npm/dw/next-i18next-typesafe.svg?logo=npm)](https://www.npmjs.com/package/next-i18next-typesafe) [![npm](https://img.shields.io/bundlephobia/minzip/next-i18next-typesafe)](https://www.npmjs.com/package/next-i18next-typesafe)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

## Demo
[i18next Typesafe Demo](https://github.com/hunghg255/next-i18next-typesafe-demo)


## Install

```bash
npm i next-i18next-typesafe@latest --save-dev
```

With `yarn`

```bash
yarn add next-i18next-typesafe@latest -D
```

## Setup

### Create file: `i18n-typesafe.config.ts` or `i18n-typesafe.config.mjs` or `i18n-typesafe.config.js`

```js
import { defineConfig } from 'next-i18next-typesafe';

export default defineConfig({
  input: 'public/locales/en/**/*.json',
  output: 'src/i18n',
})
```

## CLI (file package.json)
```
-p: Port
-w: Watch
-c: Config
```

```json
{
  ...
  "scripts": {
    ...
    // development
    "next-i18next-typesafe": "next-i18next-typesafe -w",
    // OR
    "next-i18next-typesafe-port": "next-i18next-typesafe -p 1234 -w",
  },
  ...
}
```

### Custom config file

- You can also use a custom config file instead of `i18n-typesafe.config.ts`. Just create `<FILE_NAME>.config.ts` to build command

```js
Exp: awesome.config.ts
```

```json
{
  ...
  "scripts": {
    ...
    // development
    "next-i18next-typesafe": "next-i18next-typesafe -w -c awesome",
    // OR
    "next-i18next-typesafe-port": "next-i18next-typesafe -p 1234 -w -c awesome",
  },
  ...
}
```

## Compile

```bash
npm run next-i18next-typesafe
```

# Demo

![](https://res.cloudinary.com/hunghg255/image/upload/v1685954603/i18next-typesafe_zvdq3u.gif)
