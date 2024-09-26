# `@metamask/eslint-config-vitest`

MetaMask's [Vitest](https://vitest.dev/) ESLint configuration.

## Usage

```bash
yarn add --dev \
    @metamask/eslint-config@^13.0.0 \
    @metamask/eslint-config-vitest@^0.0.0 \
    @vitest/eslint-plugin@^1.1.4 \
    eslint@^9.11.0 \
    eslint-config-prettier@^9.1.0 \
    eslint-plugin-import-x@^4.3.0 \
    eslint-plugin-jsdoc@^50.2.4 \
    eslint-plugin-prettier@^5.2.1 \
    eslint-plugin-promise@^7.1.0 \
    prettier@^3.3.3
```

The order in which you extend ESLint rules matters.
The `@metamask/*` eslint configs should be added to the config array _last_,
with `@metamask/eslint-config` first, and `@metamask/eslint-config-*` in any
order thereafter.

```js
import base, { createConfig } from '@metamask/eslint-config';
import vitest from '@metamask/eslint-config-vitest';

const config = createConfig({
  {
    extends: [
      // Any custom shared config should be added here.
      // ...

      // This should be added last unless you know what you're doing.
      base,
      vitest,
    ],
  }
});
```
