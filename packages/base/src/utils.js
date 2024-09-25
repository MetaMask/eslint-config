/**
 * @typedef {import('eslint').Linter.Config} Config
 * @typedef {Config & { extends?: Config | Config[] | Config[][] }} ConfigWithExtends
 */

/**
 * Get an array from a value. If the value is already an array, it is returned
 * as is. Otherwise, the value is wrapped in an array.
 *
 * @template Type
 * @param {Type | Type[]} value - The value to convert to an array.
 * @returns {Type[]} The value as an array.
 */
function getArray(value) {
  return Array.isArray(value) ? value : [value];
}

/**
 * Get a config object that extends another config object.
 *
 * @param {Config | Config[]} baseConfig - The base config object.
 * @param {{ files?: string[]; ignores?: string[] }} extension - The extension
 * object.
 * @returns {Config | Config[]} The extended config object.
 */
function getExtendedConfig(baseConfig, extension) {
  if (Array.isArray(baseConfig)) {
    return baseConfig.map((base) => ({ ...base, ...extension }));
  }

  return { ...baseConfig, ...extension };
}

/**
 * Create a config object that extends other configs.
 *
 * ESLint 9 removed support for extending arrays of configs, so this function
 * provides a workaround. It takes an array of config objects, where each object
 * may have an `extends` property that is an array of other config objects.
 *
 * This function is inspired by the `config` function in the `typescript-eslint`
 * package, but to avoid a dependency on that package, this function is
 * implemented here.
 *
 * @param {ConfigWithExtends | ConfigWithExtends[]} configs - An array of config
 * objects.
 * @returns {Config[]} An array of config objects with all `extends` properties
 * resolved.
 * @example Basic usage.
 * import { createConfig } from '@metamask/eslint-config';
 * import typescript from '@metamask/eslint-config-typescript';
 *
 * const configs = createConfig([
 *   {
 *     files: ['**\/*.ts'],
 *     extends: typescript,
 *   },
 * ]);
 *
 * export default configs;
 *
 * @example Multiple extends are supported as well.
 * import { createConfig } from '@metamask/eslint-config';
 * import typescript from '@metamask/eslint-config-typescript';
 * import nodejs from '@metamask/eslint-config-nodejs';
 *
 * const configs = createConfig([
 *   {
 *     files: ['**\/*.ts'],
 *     extends: [typescript, nodejs],
 *   },
 * ]);
 *
 * export default configs;
 */
export function createConfig(configs) {
  const configsArray = getArray(configs);

  return configsArray.flatMap((configWithExtends) => {
    const { extends: extendsValue, ...originalConfig } = configWithExtends;
    if (extendsValue === undefined) {
      return originalConfig;
    }

    const extension = {
      ...(originalConfig.files && { files: originalConfig.files }),
      ...(originalConfig.ignores && { ignores: originalConfig.ignores }),
    };

    if (Array.isArray(extendsValue)) {
      if (extendsValue.length === 0) {
        return originalConfig;
      }

      return [
        ...extendsValue.flatMap((baseConfig) =>
          getExtendedConfig(baseConfig, extension),
        ),
        originalConfig,
      ];
    }

    return [getExtendedConfig(extendsValue, extension), originalConfig];
  });
}
