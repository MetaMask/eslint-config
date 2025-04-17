import { ESLint } from 'eslint';
import globals from 'globals';
import { resolve } from 'path';
import { describe, it, expect } from 'vitest';

import config from './index.mjs';

describe('index', () => {
  it('is a valid ESLint config', async () => {
    const api = new ESLint({
      baseConfig: config,
    });

    const result = await api.lintText(`export {};\n`);

    expect(result[0].messages).toStrictEqual([]);
    expect(result[0].warningCount).toBe(0);
    expect(result[0].errorCount).toBe(0);
  });

  it('is a valid ESLint config for TypeScript files', async () => {
    const api = new ESLint({
      baseConfig: config,
      overrideConfig: {
        rules: {
          // This rule causes an error when importing `describe`, `it`, `expect`
          // from `vitest` in the `__test__/dummy.test.ts` file. It's not really
          // relevant to this test, so we disable it here.
          '@typescript-eslint/no-shadow': 'off',
        },

        languageOptions: {
          globals: {
            ...globals.node,
          },
          parserOptions: {
            tsconfigRootDir: resolve(import.meta.dirname, '..'),
            project: 'tsconfig.json',
          },
        },
      },
    });

    // In order to test rules that require type information, we need to actually
    // compile the file with TypeScript, so rather than using `api.lintText()`,
    // we use `api.lintFiles()` and pass in a file that we know will pass.
    const result = await api.lintFiles(
      resolve(import.meta.dirname, '__test__/dummy.test.ts'),
    );

    expect(result[0].messages).toStrictEqual([]);
    expect(result[0].warningCount).toBe(0);
    expect(result[0].errorCount).toBe(0);
  });
});
