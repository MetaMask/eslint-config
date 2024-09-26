declare module '@metamask/eslint-config' {
  import type { Linter } from 'eslint';

  /**
   * An ESLint configuration object.
   */
  type Config = Linter.Config;

  /**
   * An ESLint configuration object that may extend other configurations. This
   * can only be used with the {@link createConfig} function.
   */
  type ConfigWithExtends = Config & {
    extends?: Config | Config[] | Config[][];
  };

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
   * @param configs - An array of config objects.
   * @returns An array of config objects with all `extends` properties
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
  export function createConfig(
    configs: ConfigWithExtends | ConfigWithExtends[],
  ): Config[];

  const config: Config[];
  export default config;
}
