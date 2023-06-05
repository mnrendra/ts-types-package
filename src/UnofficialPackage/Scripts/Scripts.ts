import type RunScripts from './RunScripts'

/**
 * The 'scripts' member is an object hash of script commands that are run at
 * various times in the lifecycle of your package. The key is the lifecycle
 * event, and the value is the command to run at that point.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#scripts
 */
export interface Scripts {
  /**
   * Run code quality tools, e.g. ESLint, TSLint, etc.
   *
   * @note This is not a `package.json` official field.
   */
  lint?: RunScripts['lint']

  /**
   * Start dev server to serve application files
   *
   * @note This is not a `package.json` official field.
   */
  serve?: RunScripts['serve']

  /**
   * Usually used to run in development mode. It can also be substituted by
   * `serve` script.
   *
   * @note This is not a `package.json` official field.
   */
  dev?: RunScripts['dev']

  /**
   * Usually used to run builder script, like `tsc`.
   *
   * @note This is not a `package.json` official field.
   */
  build?: RunScripts['build']

  /**
   * Usually used to run committer script, like `commitizen`.
   *
   * @note This is not a `package.json` official field.
   */
  commit?: RunScripts['commit']

  /**
   * Usually used to run release script, like `semantic-release`.
   *
   * @note This is not a `package.json` official field.
   */
  release?: RunScripts['release']

  /**
   * Script executed before the package is published as a VS Code extension.
   *
   * @note This is not a `package.json` official field.
   */
  ['vscode:prepublish']?: RunScripts['vscode:prepublish']

  /**
   * Uninstall hook for VS Code extension. Script that gets executed when the
   * extension is completely uninstalled from VS Code which is when VS Code is
   * restarted (shutdown and start) after the extension is uninstalled. Only
   * Node scripts are supported.
   *
   * @note This is not a `package.json` official field.
   */
  ['vscode:uninstall']?: RunScripts['vscode:uninstall']
}

export default Scripts
