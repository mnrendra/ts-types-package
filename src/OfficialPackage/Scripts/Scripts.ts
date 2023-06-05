import type PreScripts from './PreScripts'
import type RunScripts from './RunScripts'
import type PostScripts from './PostScripts'

/**
 * The 'scripts' member is an object hash of script commands that are run at
 * various times in the lifecycle of your package. The key is the lifecycle
 * event, and the value is the command to run at that point.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#scripts
 */
export interface Scripts {
  /**
   * install scripts
   */

  /**
   * Run BEFORE the package is installed.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-install
   */
  preinstall?: PreScripts['preinstall']

  /**
   * Run AFTER the package is installed.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-install
   */
  install?: RunScripts['install']

  /**
   * Run AFTER the package is installed.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-install
   */
  postinstall?: PostScripts['postinstall']

  /**
   * pack scripts
   */

  /**
   * Run BEFORE a tarball is packed (on npm pack, npm publish, and when
   * installing git dependencies).
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-pack
   */
  prepack?: PreScripts['prepack']

  /**
   * Run both BEFORE the package is packed and published, and on local npm
   * install without any arguments. This is run AFTER prepublish, but BEFORE
   * prepublishOnly.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-pack
   */
  prepare?: RunScripts['prepare']

  /**
   * Run AFTER the tarball has been generated and moved to its final
   * destination.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-pack
   */
  postpack?: PostScripts['postpack']

  /**
   * publish scripts
   */

  /**
   * @deprecated
   *
   * Run BEFORE the package is published (Also run on local npm install
   * without any arguments).
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#prepare-and-prepublish
   */
  prepublish?: PreScripts['prepublish']

  /**
   * Run BEFORE the package is prepared and packed, ONLY on npm publish.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-publish
   */
  prepublishOnly?: PreScripts['prepublishOnly']

  /**
   * Publishes a package to the registry so that it can be installed by name.
   * See https://docs.npmjs.com/cli/v8/commands/npm-publish
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-publish
   */
  publish?: RunScripts['publish']

  /**
   * Run AFTER the package is published.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-publish
   */
  postpublish?: PostScripts['postpublish']

  /**
   * restart scripts
   */

  /**
   * Run by the 'npm restart' command. Note: 'npm restart' will run the stop
   * and start scripts if no restart script is provided.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-restart
   */
  prerestart?: PreScripts['prerestart']

  /**
   * Run by the 'npm restart' command. Note: 'npm restart' will run the stop
   * and start scripts if no restart script is provided.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-restart
   */
  restart?: RunScripts['restart']

  /**
   * Run by the 'npm restart' command. Note: 'npm restart' will run the stop
   * and start scripts if no restart script is provided.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-restart
   */
  postrestart?: PostScripts['postrestart']

  /**
   * start scripts
   */

  /**
   * Run by the 'npm start' command.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-start
   */
  prestart?: PreScripts['prestart']

  /**
   * Run by the 'npm start' command.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-start
   */
  start?: RunScripts['start']

  /**
   * Run by the 'npm start' command.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-start
   */
  poststart?: PostScripts['poststart']

  /**
   * stop scripts
   */

  /**
   * Run by the 'npm stop' command.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-stop
   */
  prestop?: PreScripts['prestop']

  /**
   * Run by the 'npm stop' command.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-stop
   */
  stop?: RunScripts['stop']

  /**
   * Run by the 'npm stop' command.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-stop
   */
  poststop?: PostScripts['poststop']

  /**
   * test scripts
   */

  /**
   * Run by the 'npm test' command.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-test
   */
  pretest?: PreScripts['pretest']

  /**
   * Run by the 'npm test' command.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-test
   */
  test?: RunScripts['test']

  /**
   * Run by the 'npm test' command.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-test
   */
  posttest?: PostScripts['posttest']

  /**
   * uninstall scripts
   */

  /**
   * @warning https://docs.npmjs.com/cli/v9/using-npm/scripts#a-note-on-a-lack-of-npm-uninstall-scripts
   *
   * Run BEFORE the package is uninstalled.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#a-note-on-a-lack-of-npm-uninstall-scripts
   */
  preuninstall?: PreScripts['preuninstall']

  /**
   * @warning https://docs.npmjs.com/cli/v9/using-npm/scripts#a-note-on-a-lack-of-npm-uninstall-scripts
   *
   * Run BEFORE the package is uninstalled.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#a-note-on-a-lack-of-npm-uninstall-scripts
   */
  uninstall?: RunScripts['uninstall']

  /**
   * @warning https://docs.npmjs.com/cli/v9/using-npm/scripts#a-note-on-a-lack-of-npm-uninstall-scripts
   *
   * Run AFTER the package is uninstalled.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#a-note-on-a-lack-of-npm-uninstall-scripts
   */
  postuninstall?: PostScripts['postuninstall']

  /**
   * version scripts
   */

  /**
   * Run BEFORE bump the package version.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-version
   */
  preversion?: PreScripts['preversion']

  /**
   * Run BEFORE bump the package version.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-version
   */
  version?: RunScripts['version']

  /**
   * Run AFTER bump the package version.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-version
   */
  postversion?: PostScripts['postversion']
}

export default Scripts
