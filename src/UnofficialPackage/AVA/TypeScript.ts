/**
 * If `false`, AVA will assume you have already compiled your project. If set
 * to `'tsc'`, AVA will run the TypeScript compiler before running your tests.
 * This can be inefficient when using AVA in watch mode.
 */
export type TypeScriptCompile = false | 'tsc'

/**
 * You can configure AVA to recognize additional file extensions as TypeScript
 * (e.g., `["ts", "tsx"]` to add partial JSX support). Note that the preserve
 * mode for JSX is not (yet) supported. See also AVA's `extensions` object.
 */
export type TypeScriptExtensions = string[]

/**
 * paths
 *
 * AVA searches your entire project for `*.js`, `*.cjs`, `*.mjs` and `*.ts`
 * files (or other extensions you've configured). It will ignore such files
 * found in the `rewritePaths` targets (e.g. `build/`). If you use more
 * specific paths, for instance `build/main/`, you may need to change AVA's
 * `files` configuration to ignore other directories. Paths are relative to
 * your project directory.
 */
export type TypeScriptRewritePaths = Record<string, unknown>

/**
 * configuration
 *
 * Configures @ava/typescript for projects that precompile TypeScript.
 * Alternatively, you can use `ts-node` to do live testing without transpiling,
 * in which case you shouldn't use the `typescript` property.
 */
export interface TypeScript {
  /**
   * If `false`, AVA will assume you have already compiled your project. If set
   * to `'tsc'`, AVA will run the TypeScript compiler before running your
   * tests. This can be inefficient when using AVA in watch mode.
   */
  compile?: TypeScriptCompile

  /**
   * You can configure AVA to recognize additional file extensions as
   * TypeScript (e.g., `["ts", "tsx"]` to add partial JSX support). Note that
   * the preserve mode for JSX is not (yet) supported. See also AVA's
   * `extensions` object.
   */
  extensions?: TypeScriptExtensions

  /**
   * paths
   *
   * AVA searches your entire project for `*.js`, `*.cjs`, `*.mjs` and `*.ts`
   * files (or other extensions you've configured). It will ignore such files
   * found in the `rewritePaths` targets (e.g. `build/`). If you use more
   * specific paths, for instance `build/main/`, you may need to change AVA's
   * `files` configuration to ignore other directories. Paths are relative to
   * your project directory.
   */
  rewritePaths?: TypeScriptRewritePaths
}

export default TypeScript
