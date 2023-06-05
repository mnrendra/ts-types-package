import type Severity from './Severity'
import type Extends from './Extends'
import type IgnoreFiles from './IgnoreFiles'
import type Rules from './Rules'
import type Overrides from './Overrides'
import type Plugins from './Plugins'
import type Processors from './Processors'
import type Report from './Report'

/**
 * JSON schema for the Stylelint configuration files.
 *
 * @note This is not a `package.json` official field.
 */
export interface Stylelint {
  /**
   * Specify a custom syntax to use on your code.
   */
  customSyntax?: string

  /**
   * The default severity level for all rules that do not have a severity
   * specified in their secondary options.
   */
  defaultSeverity?: Severity

  /**
   * Your configuration can extend an existing configuration(s) (whether your
   * own or a third-party config).
   */
  extends?: Extends

  /**
   * Ignore stylelint-disable (e.g. \/* stylelint-disable block-no-empty *\/)
   * comments.
   */
  ignoreDisables?: boolean

  /**
   * Provide a glob or array of globs to ignore specific files.
   */
  ignoreFiles?: IgnoreFiles

  /**
   * Provide rule and behavior overrides for files that match particular glob
   * patterns.
   */
  overrides?: Overrides

  /**
   * Plugins are rules or sets of rules built by the community that support
   * methodologies, toolsets, non-standard CSS features, or very specific use
   * cases.
   */
  plugins?: Plugins

  /**
   * Processors are functions that hook into stylelint's pipeline, modifying
   * code on its way into stylelint and modifying results on their way out.
   */
  processors?: Processors

  /**
   * Report stylelint-disable comments without a description.
   */
  reportDescriptionlessDisables?: Report

  /**
   * Report stylelint-disable comments that don't match rules that are
   * specified in the configuration object.
   */
  reportInvalidScopeDisables?: Report

  /**
   * Report stylelint-disable comments that don't actually match any lints that
   * need to be disabled.
   */
  reportNeedlessDisables?: Report

  rules?: Rules
}

export default Stylelint
