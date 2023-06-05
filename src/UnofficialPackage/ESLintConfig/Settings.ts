/**
 * ESLint supports adding shared settings into configuration file. You can add
 * settings object to ESLint configuration file and it will be supplied to
 * every rule that will be executed. This may be useful if you are adding
 * custom rules and want them to have access to the same information and be
 * easily configurable.
 */
export type Settings = Record<string, unknown>

export default Settings
