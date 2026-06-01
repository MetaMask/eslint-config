import { ESLint } from 'eslint';
import globals from 'globals';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { describe, it, expect } from 'vitest';

import config from './index.mjs';

const testDir = dirname(fileURLToPath(import.meta.url));

describe('index', () => {
  it('is a valid ESLint config', async () => {
    const api = new ESLint({
      baseConfig: config,
      overrideConfig: {
        languageOptions: {
          globals: {
            ...globals.node,
          },
          parserOptions: {
            tsconfigRootDir: resolve(testDir, '..'),
          },
        },
      },
    });

    // In order to test rules that require type information, we need to actually
    // compile the file with TypeScript, so rather than using `api.lintText()`,
    // we use `api.lintFiles()` and pass in a file that we know will pass.
    const result = await api.lintFiles(resolve(testDir, '__test__/dummy.ts'));

    expect(result[0].messages).toStrictEqual([]);
    expect(result[0].warningCount).toBe(0);
    expect(result[0].errorCount).toBe(0);
  });
});
