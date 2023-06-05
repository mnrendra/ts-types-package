/**
 * `package.json` run scripts.
 */
export interface RunScripts {
  /**
   * Run code quality tools, e.g. ESLint, TSLint, etc.
   *
   * @note This is not a `package.json` official field.
   */
  lint?: string

  /**
   * Start dev server to serve application files
   *
   * @note This is not a `package.json` official field.
   */
  serve?: string

  /**
   * Usually used to run in development mode. It can also be substituted by
   * `serve` script.
   *
   * @note This is not a `package.json` official field.
   */
  dev?: string

  /**
   * Usually used to run builder script, like `tsc`.
   *
   * @note This is not a `package.json` official field.
   */
  build?: string

  /**
   * Usually used to run committer script, like `commitizen`.
   *
   * @note This is not a `package.json` official field.
   */
  commit?: string

  /**
   * Usually used to run release script, like `semantic-release`.
   *
   * @note This is not a `package.json` official field.
   */
  release?: string

  /**
   * Script executed before the package is published as a VS Code extension.
   *
   * @note This is not a `package.json` official field.
   */
  ['vscode:prepublish']?: string

  /**
   * Uninstall hook for VS Code extension. Script that gets executed when the
   * extension is completely uninstalled from VS Code which is when VS Code is
   * restarted (shutdown and start) after the extension is uninstalled. Only
   * Node scripts are supported.
   *
   * @note This is not a `package.json` official field.
   */
  ['vscode:uninstall']?: string
}

export default RunScripts
