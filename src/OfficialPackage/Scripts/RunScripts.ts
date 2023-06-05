/**
 * `package.json` run scripts.
 */
export interface RunScripts {
  /**
   * Run AFTER the package is installed.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-install
   */
  install?: string

  /**
   * Run both BEFORE the package is packed and published, and on local npm
   * install without any arguments. This is run AFTER prepublish, but BEFORE
   * prepublishOnly.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-pack
   */
  prepare?: string

  /**
   * Publishes a package to the registry so that it can be installed by name.
   * See https://docs.npmjs.com/cli/v8/commands/npm-publish
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-publish
   */
  publish?: string

  /**
   * Run by the 'npm restart' command. Note: 'npm restart' will run the stop
   * and start scripts if no restart script is provided.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-restart
   */
  restart?: string

  /**
   * Run by the 'npm start' command.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-start
   */
  start?: string

  /**
   * Run by the 'npm stop' command.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-stop
   */
  stop?: string

  /**
   * Run by the 'npm test' command.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-test
   */
  test?: string

  /**
   * @warning https://docs.npmjs.com/cli/v9/using-npm/scripts#a-note-on-a-lack-of-npm-uninstall-scripts
   *
   * Run BEFORE the package is uninstalled.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#a-note-on-a-lack-of-npm-uninstall-scripts
   */
  uninstall?: string

  /**
   * Run BEFORE bump the package version.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-version
   */
  version?: string
}

export default RunScripts
