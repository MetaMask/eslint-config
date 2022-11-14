const { ESLint } = require('eslint');

const config = require('.');

describe('index', () => {
  it('is a valid ESLint config', async () => {
    const api = new ESLint({
      baseConfig: config,
      useEslintrc: false,
    });

    const result = await api.lintText(`console.log('Hello, world!');\n`);

    expect(result[0].messages).toStrictEqual([]);
    expect(result[0].warningCount).toBe(0);
    expect(result[0].errorCount).toBe(0);
  });
});
