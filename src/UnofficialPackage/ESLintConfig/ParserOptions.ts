import type ECMAFeatures from './ECMAFeatures'

/**
 * By default, ESLint supports only ECMAScript 5 syntax. You can override that
 * setting to enable support for ECMAScript 6 as well as JSX by using
 * configuration settings.
 */
export type ParserOptionsECMAFeatures = ECMAFeatures

/**
 * Set to 3, 5, 6, 7, 8, 9, 10, 11 (default), 12, 13, 14 or "latest" to specify
 * the version of ECMAScript syntax you want to use. You can also set to 2015
 * (same as 6), 2016 (same as 7), 2017 (same as 8), 2018 (same as 9), 2019
 * (same as 10), 2020 (same as 11), 2021 (same as 12), 2022 (same as 13) or
 * 2023 (same as 14) to use the year-based naming. "latest" always enables the
 * latest supported ECMAScript version.
 */
export type ParserOptionsECMAVersion =
| 'latest'
| 3
| 5
| 6
| 7
| 8
| 9
| 10
| 11
| 12
| 13
| 14
| 2015
| 2016
| 2017
| 2018
| 2019
| 2020
| 2021
| 2022
| 2023

/**
 * Set to "script" (default) or "module" if your code is in ECMAScript modules.
 */
export type ParserOptionsSourceType =
| 'script'
| 'module'

/**
 * The JavaScript language options to be supported.
 */
export interface ParserOptions {
  /**
   * By default, ESLint supports only ECMAScript 5 syntax. You can override
   * that setting to enable support for ECMAScript 6 as well as JSX by using
   * configuration settings.
   */
  ecmaFeatures?: ParserOptionsECMAFeatures

  /**
   * Set to 3, 5, 6, 7, 8, 9, 10, 11 (default), 12, 13, 14 or "latest" to
   * specify the version of ECMAScript syntax you want to use. You can also set
   * to 2015 (same as 6), 2016 (same as 7), 2017 (same as 8), 2018 (same as 9),
   * 2019 (same as 10), 2020 (same as 11), 2021 (same as 12), 2022 (same as 13)
   * or 2023 (same as 14) to use the year-based naming. "latest" always enables
   * the latest supported ECMAScript version.
   */
  ecmaVersion?: ParserOptionsECMAVersion

  /**
   * Set to "script" (default) or "module" if your code is in ECMAScript
   * modules.
   */
  sourceType?: ParserOptionsSourceType
}

export default ParserOptions
