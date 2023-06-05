/**
 * `package.json` pre scripts.
 */
export interface PreScripts {
  /**
   * Run BEFORE the package is installed.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-install
   */
  preinstall?: string

  /**
   * Run BEFORE a tarball is packed (on npm pack, npm publish, and when
   * installing git dependencies).
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-pack
   */
  prepack?: string

  /**
   * @deprecated
   *
   * Run BEFORE the package is published (Also run on local npm install
   * without any arguments).
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#prepare-and-prepublish
   */
  prepublish?: string

  /**
   * Run BEFORE the package is prepared and packed, ONLY on npm publish.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-publish
   */
  prepublishOnly?: string

  /**
   * Run by the 'npm restart' command. Note: 'npm restart' will run the stop
   * and start scripts if no restart script is provided.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-restart
   */
  prerestart?: string

  /**
   * Run by the 'npm start' command.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-start
   */
  prestart?: string

  /**
   * Run by the 'npm stop' command.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-stop
   */
  prestop?: string

  /**
   * Run by the 'npm test' command.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-test
   */
  pretest?: string

  /**
   * @warning https://docs.npmjs.com/cli/v9/using-npm/scripts#a-note-on-a-lack-of-npm-uninstall-scripts
   *
   * Run BEFORE the package is uninstalled.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#a-note-on-a-lack-of-npm-uninstall-scripts
   */
  preuninstall?: string

  /**
   * Run BEFORE bump the package version.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-version
   */
  preversion?: string
}

export default PreScripts
