import { describe, it, expect, vi } from 'vitest';

import { getConfigFiles } from './file-system.mjs';
import { createConfig, createWorkspaceConfig } from './utils.mjs';

vi.mock('./file-system.mjs', {
  getConfigFiles: vi.fn(),
});

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

describe('createExtendableConfig', () => {
  it('returns a config array', async () => {
    vi.mocked(getConfigFiles).mockResolvedValue([]);
    const configs = { files: ['**/*.js'] };

    const result = await createWorkspaceConfig(configs);
    expect(result).toStrictEqual([configs]);
  });

  it('returns a config array with extended configs', async () => {
    vi.mocked(getConfigFiles).mockResolvedValue([
      {
        path: '/workspace/child-a/config.js',
        config: {
          files: ['**/*.js'],
          rules: {
            'some-rule': 'error',
          },
        },
      },
      {
        path: '/workspace/child-b/config.js',
        config: {
          files: ['**/*.ts', '**/*.tsx'],
          rules: {
            'some-other-rule': 'error',
          },
        },
      },
    ]);

    const configs = { extends: [{ files: ['**/*.js'] }], languageOptions: {} };

    const result = await createWorkspaceConfig(configs, '/workspace');
    expect(result).toStrictEqual([
      { files: ['**/*.js'] },
      { languageOptions: {} },
      {
        files: ['child-a/**/*.js'],
        rules: {
          'some-rule': 'error',
        },
      },
      {
        files: ['child-b/**/*.ts', 'child-b/**/*.tsx'],
        rules: {
          'some-other-rule': 'error',
        },
      },
    ]);
  });
});
