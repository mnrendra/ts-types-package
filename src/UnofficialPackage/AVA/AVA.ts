import type EnvironmentVariables from './EnvironmentVariables'
import type Extensions from './Extensions'
import type Files from './Files'
import type IgnoredByWatcher from './IgnoredByWatcher'
import type Match from './Match'
import type NodeArguments from './NodeArguments'
import type Require from './Require'
import type Timeout from './Timeout'
import type TypeScript from './TypeScript'

/**
 * AVA Config Schema
 *
 * Configuration Schema for the JavaScript test runner AVA.
 *
 * @note This is not a `package.json` official field.
 */
export interface AVA {
  /**
   * Defaults to `true` to cache compiled files under
   * `node_modules/.cache/ava.` If `false`, files are cached in a temporary
   * directory instead.
   */
  cache?: boolean

  /**
   * Max number of test files running at the same time (default: CPU cores).
   */
  concurrency?: number

  /**
   * Environment variables
   *
   * Specifies environment variables to be made available to the tests. The
   * environment variables defined here override the ones from `process.env`.
   */
  environmentVariables?: EnvironmentVariables

  /**
   * Extensions of test files. Setting this overrides the default
   * `["cjs", "mjs", "js"]` value, so make sure to include those extensions in
   * the list. Experimentally you can configure how files are loaded.
   */
  extensions?: Extensions

  /**
   * Stop running further tests once a test fails.
   */
  failFast?: boolean

  /**
   * If `false`, does not fail a test if it doesn't run assertions.
   */
  failWithoutAssertions?: boolean

  /**
   * An array of glob patterns to select test files. Files with an underscore
   * prefix are ignored. By default only selects files with `cjs`, `mjs` &
   * `js` extensions, even if the pattern matches other files. Specify
   * `extensions` to allow other file extensions.
   */
  files?: Files

  /**
   * An array of glob patterns to match files that, even if changed, are
   * ignored by the watcher.
   */
  ignoredByWatcher?: IgnoredByWatcher

  /**
   * Not typically useful in the `package.json` configuration, but equivalent
   * to specifying `--match` on the CLI.
   */
  match?: Match

  /**
   * Configure Node.js arguments used to launch worker processes.
   */
  nodeArguments?: NodeArguments

  /**
   * Extra modules to require before tests are run. Modules are required in
   * the worker processes.
   */
  require?: Require

  /**
   * Specifies a fixed location for storing snapshot files. Use this if your
   * snapshots are ending up in the wrong location.
   */
  snapshotDir?: string

  /**
   * If `true`, enables the TAP reporter.
   */
  tap?: boolean

  /**
   * Timeouts in AVA behave differently than in other test frameworks. AVA
   * resets a timer after each test, forcing tests to quit if no new test
   * results were received within the specified timeout. This can be used to
   * handle stalled tests. See our timeout documentation for more options.
   */
  timeout?: Timeout

  /**
   * Configuration
   *
   * Configures @ava/typescript for projects that precompile TypeScript.
   * Alternatively, you can use `ts-node` to do live testing without
   * transpiling, in which case you shouldn't use the `typescript` property.
   */
  typescript?: TypeScript

  /**
   * If `false`, disable parallel builds (default: `true`).
   */
  utilizeParallelBuilds?: boolean

  /**
   * If `true`, enables verbose output (though currently non-verbose output
   * is not supported).
   */
  verbose?: boolean

  /**
   * Use worker threads to run tests (enabled by default). If `false`, tests
   * will run in child processes.
   */
  workerThreads?: boolean
}

export default AVA
