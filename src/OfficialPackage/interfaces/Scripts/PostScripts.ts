/**
 * `package.json` post scripts.
 */
interface PostScripts {
  /**
   * Run AFTER the package is installed.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-install
   */
  postinstall?: string

  /**
   * Run AFTER the tarball has been generated and moved to its final
   * destination.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-pack
   */
  postpack?: string

  /**
   * Run AFTER the package is published.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-publish
   */
  postpublish?: string

  /**
   * Run by the 'npm restart' command. Note: 'npm restart' will run the stop
   * and start scripts if no restart script is provided.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-restart
   */
  postrestart?: string

  /**
   * Run by the 'npm start' command.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-start
   */
  poststart?: string

  /**
   * Run by the 'npm stop' command.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-stop
   */
  poststop?: string

  /**
   * Run by the 'npm test' command.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-test
   */
  posttest?: string

  /**
   * @warning https://docs.npmjs.com/cli/v9/using-npm/scripts#a-note-on-a-lack-of-npm-uninstall-scripts
   *
   * Run AFTER the package is uninstalled.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#a-note-on-a-lack-of-npm-uninstall-scripts
   */
  postuninstall?: string

  /**
   * Run AFTER bump the package version.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-version
   */
  postversion?: string
}

export default PostScripts
