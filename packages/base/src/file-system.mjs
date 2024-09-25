import { readdir } from 'fs/promises';
import { join, sep } from 'path';

/**
 * @typedef {import('eslint').Linter.Config} Config
 * @typedef {{ path: string; config: Config }} ConfigFile
 */

/**
 * Config file names for ESLint, that are supported by the config loading
 * functionality in this package.
 *
 * @type {string[]}
 */
const ESLINT_CONFIG_NAMES = [
  'eslint.config.js',
  'eslint.config.cjs',
  'eslint.config.mjs',
];

/**
 * Get all ESLint config files in the workspace.
 *
 * @param {string} workspaceRoot - The absolute path to the root directory of
 * the workspace.
 * @returns {Promise<ConfigFile[]>} A promise that resolves to an array of
 * ESLint configs with their paths.
 */
export async function getConfigFiles(workspaceRoot) {
  const files = await readdir(workspaceRoot, {
    recursive: true,
    withFileTypes: true,
  });

  return files.reduce(async (promise, file) => {
    const accumulator = await promise;
    if (!file.isFile() || !ESLINT_CONFIG_NAMES.includes(file.name)) {
      return accumulator;
    }

    const segments = file.parentPath.split(sep);
    if (segments.includes('node_modules')) {
      return accumulator;
    }

    const path = join(file.parentPath, file.name);
    const config = await import(path);

    return [...accumulator, { path, config: config.default }];
  }, Promise.resolve([]));
}
