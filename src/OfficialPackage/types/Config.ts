/**
 * A 'config' hash can be used to set configuration parameters used in package
 * scripts that persist across upgrades.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#config
 */
type Config = Record<string, unknown>

export default Config
