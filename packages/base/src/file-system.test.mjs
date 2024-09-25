import { describe, expect, it, vi } from 'vitest';

import { getConfigFiles } from './file-system.mjs';

vi.mock('fs/promises', (importOriginal) => ({
  ...importOriginal,
  readdir: async () => [
    { isFile: () => true, parentPath: '/foo/bar', name: 'eslint.config.js' },
    {
      isFile: () => true,
      parentPath: '/foo/bar/baz',
      name: 'eslint.config.cjs',
    },
    {
      isFile: () => true,
      parentPath: '/foo/bar/baz/qux',
      name: 'eslint.config.mjs',
    },
    {
      isFile: () => true,
      parentPath: '/foo/bar/node_modules/package',
      name: 'eslint.config.js',
    },
    {
      isFile: () => false,
      parentPath: '/not/a/file',
      name: 'eslint.config.js',
    },
  ],
}));

vi.mock('/foo/bar/eslint.config.js', () => ({
  default: {
    rules: {
      'no-console': 'error',
    },
  },
}));

vi.mock('/foo/bar/baz/eslint.config.cjs', () => ({
  default: {
    rules: {
      'no-console': 'warn',
    },
  },
}));

vi.mock('/foo/bar/baz/qux/eslint.config.mjs', () => ({
  default: {
    rules: {
      'no-console': 'off',
    },
  },
}));

describe('getConfigFiles', () => {
  it('returns an array of ESLint config files with their paths', async () => {
    const workspaceRoot = '/foo/bar';
    const configFiles = await getConfigFiles(workspaceRoot);

    expect(configFiles).toStrictEqual([
      {
        path: '/foo/bar/eslint.config.js',
        config: {
          rules: {
            'no-console': 'error',
          },
        },
      },
      {
        path: '/foo/bar/baz/eslint.config.cjs',
        config: {
          rules: {
            'no-console': 'warn',
          },
        },
      },
      {
        path: '/foo/bar/baz/qux/eslint.config.mjs',
        config: {
          rules: {
            'no-console': 'off',
          },
        },
      },
    ]);
  });
});
