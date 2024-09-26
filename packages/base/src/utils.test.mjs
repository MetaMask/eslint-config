import { describe, it, expect } from 'vitest';

import { createConfig } from './utils.mjs';

describe('createConfig', () => {
  it('returns a config array for a single config', () => {
    const configs = { files: ['**/*.js'] };

    const result = createConfig(configs);
    expect(result).toStrictEqual([configs]);
  });

  it('returns a config array for an array of configs', () => {
    const configs = [{ files: ['**/*.js'] }, { ignores: ['node_modules'] }];

    const result = createConfig(configs);
    expect(result).toStrictEqual(configs);
  });

  it('adds the `files` value to extended configurations', () => {
    const baseConfig = { rules: {} };
    const extendedConfig = { extends: [baseConfig], files: ['**/*.js'] };

    const result = createConfig(extendedConfig);
    expect(result).toStrictEqual([
      { files: ['**/*.js'], rules: {} },
      { files: ['**/*.js'] },
    ]);
  });

  it('adds the `ignore` value to extended configurations', () => {
    const baseConfig = { files: ['**/*.js'] };
    const extendedConfig = { extends: [baseConfig], ignores: ['node_modules'] };

    const result = createConfig(extendedConfig);
    expect(result).toStrictEqual([
      { files: ['**/*.js'], ignores: ['node_modules'] },
      { ignores: ['node_modules'] },
    ]);
  });

  it('supports a config object as `extends` value', () => {
    const baseConfig = { rules: {} };
    const extendedConfig = { extends: baseConfig, files: ['**/*.js'] };

    const result = createConfig(extendedConfig);
    expect(result).toStrictEqual([
      { files: ['**/*.js'], rules: {} },
      { files: ['**/*.js'] },
    ]);
  });

  it('supports a nested config array as `extends` value', () => {
    const baseConfig = [
      { rules: { 'foo/bar': 'error' } },
      { languageOptions: {} },
    ];

    const extendedConfig = { extends: [baseConfig], files: ['**/*.js'] };

    const result = createConfig(extendedConfig);
    expect(result).toStrictEqual([
      { files: ['**/*.js'], rules: { 'foo/bar': 'error' } },
      { files: ['**/*.js'], languageOptions: {} },
      { files: ['**/*.js'] },
    ]);
  });
});
