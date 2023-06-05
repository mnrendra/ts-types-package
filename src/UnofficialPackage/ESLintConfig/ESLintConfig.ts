import type ECMAFeatures from './ECMAFeatures'
import type ENV from './ENV'
import type Extends from './Extends'
import type Globals from './Globals'
import type IgnorePatterns from './IgnorePatterns'
import type Overrides from './Overrides'
import type ParserOptions from './ParserOptions'
import type Plugins from './Plugins'
import type Rules from './Rules'
import type Settings from './Settings'

/**
 * JSON schema for ESLint configuration files.
 *
 * ESLint configuration.
 *
 * @note This is not a `package.json` official field.
 */
export interface ESLintConfig {
  /**
   * By default, ESLint supports only ECMAScript 5 syntax. You can override
   * that setting to enable support for ECMAScript 6 as well as JSX by using
   * configuration settings.
   */
  ecmaFeatures?: ECMAFeatures

  /**
   * An environment defines global variables that are predefined.
   */
  env?: ENV

  /**
   * If you want to extend a specific configuration file, you can use the
   * extends property and specify the path to the file. The path can be either
   * relative or absolute.
   */
  extends?: Extends

  /**
   * Set each global variable name equal to true to allow the variable to be
   * overwritten or false to disallow overwriting.
   */
  globals?: Globals

  /**
   * Tell ESLint to ignore specific files and directories. Each value uses the
   * same pattern as the `.eslintignore` file.
   */
  ignorePatterns?: IgnorePatterns

  /**
   * Prevent comments from changing config or rules.
   */
  noInlineConfig?: boolean

  /**
   * Allows to override configuration for files and folders, specified by glob
   * patterns.
   */
  overrides?: Overrides

  parser?: string

  /**
   * The JavaScript language options to be supported.
   */
  parserOptions?: ParserOptions

  /**
   * ESLint supports the use of third-party plugins. Before using the plugin,
   * you have to install it using npm.
   */
  plugins?: Plugins

  /**
   * By default, ESLint will look for configuration files in all parent folders
   * up to the root directory. This can be useful if you want all of your
   * projects to follow a certain convention, but can sometimes lead to
   * unexpected results. To limit ESLint to a specific project, set this to
   * `true` in a configuration in the root of your project.
   */
  root?: boolean

  /**
   * ESLint comes with a large number of rules. You can modify which rules your
   * project uses either using configuration comments or configuration files.
   */
  rules?: Rules

  /**
   * ESLint supports adding shared settings into configuration file. You can
   * add settings object to ESLint configuration file and it will be supplied
   * to every rule that will be executed. This may be useful if you are adding
   * custom rules and want them to have access to the same information and be
   * easily configurable.
   */
  settings?: Settings
}

export default ESLintConfig
