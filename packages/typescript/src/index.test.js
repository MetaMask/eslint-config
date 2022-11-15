const { ESLint } = require('eslint');
const { resolve } = require('path');

const config = require('.');

describe('index', () => {
  it('is a valid ESLint config', async () => {
    const api = new ESLint({
      baseConfig: config,
      useEslintrc: false,
      overrideConfig: {
        env: {
          node: true,
        },
        parserOptions: {
          tsconfigRootDir: resolve(__dirname, '..'),
          project: 'tsconfig.json',
        },
      },
    });

    // In order to test rules that require type information, we need to actually
    // compile the file with TypeScript, so rather than using `api.lintText()`,
    // we use `api.lintFiles()` and pass in a file that we know will pass.
    const result = await api.lintFiles(resolve(__dirname, '__test__/dummy.ts'));

    expect(result[0].messages).toStrictEqual([]);
    expect(result[0].warningCount).toBe(0);
    expect(result[0].errorCount).toBe(0);
  });
});
