import { ESLint } from 'eslint';
import { describe, it, expect } from 'vitest';

import config from '.';

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
});
