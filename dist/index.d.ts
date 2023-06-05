import { Merge } from '@mnrendra/ts-types-merge';

type URL<Protocol extends string = string> = `${Protocol}:${string}`;

type Email<Domain extends string = string, DomainName extends string = string> = `${string}@${DomainName}.${Domain}`;

/**
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#people-fields-author-contributors
 */
type People = string | {
    name: string;
    email?: Email;
    url?: URL;
};

/**
 * Dependencies are specified with a simple hash of package name to version
 * range. The version range is a string which has one or more space-separated
 * descriptors. Dependencies can also be identified with a tarball or git URL.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#dependencies
 */
type Dependencies = Record<string, string>;

/**
 * The name of the package.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#name
 */
type Name = `${'~' | number | '=' | 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z'}${string}`;

/**
 * This helps people discover your package as it's listed in 'npm search'.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#keywords
 */
type Keywords = string[];

/**
 * The url to your project's issue tracker and / or the email address to which
 * issues should be reported. These are helpful for people who encounter issues
 * with your package.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#bugs
 */
type Bugs = URL | Email | {
    /**
     * The url to your project's issue tracker.
     */
    url?: URL;
    /**
     * The email address to which issues should be reported.
     */
    email?: Email;
};

/**
 * A list of people who contributed to this package.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#people-fields-author-contributors
 */
type Contributors = People[];

type Fund = URL | {
    /**
     * URL to a website with details about how to fund the package.
     */
    url: URL;
    /**
     * The type of funding or the platform through which funding can be provided,
     * e.g. patreon, opencollective, tidelift or github.
     */
    type?: string;
};
/**
 * Used to inform about ways to help fund development of the package.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#funding
 */
type Funding = Fund | Fund[];

/**
 * The 'files' field is an array of files to include in your project. If you
 * name a folder in the array, then it will also include the files inside that
 * folder.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#files
 */
type Files$1 = string[];

/**
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#browser
 */
type Browser = string | Record<string, unknown>;

/**
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#bin
 */
type Bin = string | Record<string, string>;

/**
 * Specify either a single file or an array of filenames to put in place for
 * the man program to find.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#man
 */
type Man = string | string[];

/**
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#directories
 */
interface Directories$1 {
    /**
     * If you specify a 'bin' directory, then all the files in that folder will
     * be used as the 'bin' hash.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#directoriesbin
     */
    bin?: string;
    /**
     * A folder that is full of man pages. Sugar to generate a 'man' array by
     * walking the folder.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#directoriesman
     */
    man?: string;
}

/**
 * Specify the place where your code lives. This is helpful for people who want
 * to contribute.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#repository
 */
type Repository = URL | {
    type?: string;
    url?: URL;
    directory?: string;
};

/**
 * `package.json` pre scripts.
 */
interface PreScripts {
    /**
     * Run BEFORE the package is installed.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-install
     */
    preinstall?: string;
    /**
     * Run BEFORE a tarball is packed (on npm pack, npm publish, and when
     * installing git dependencies).
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-pack
     */
    prepack?: string;
    /**
     * @deprecated
     *
     * Run BEFORE the package is published (Also run on local npm install
     * without any arguments).
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#prepare-and-prepublish
     */
    prepublish?: string;
    /**
     * Run BEFORE the package is prepared and packed, ONLY on npm publish.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-publish
     */
    prepublishOnly?: string;
    /**
     * Run by the 'npm restart' command. Note: 'npm restart' will run the stop
     * and start scripts if no restart script is provided.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-restart
     */
    prerestart?: string;
    /**
     * Run by the 'npm start' command.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-start
     */
    prestart?: string;
    /**
     * Run by the 'npm stop' command.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-stop
     */
    prestop?: string;
    /**
     * Run by the 'npm test' command.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-test
     */
    pretest?: string;
    /**
     * @warning https://docs.npmjs.com/cli/v9/using-npm/scripts#a-note-on-a-lack-of-npm-uninstall-scripts
     *
     * Run BEFORE the package is uninstalled.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#a-note-on-a-lack-of-npm-uninstall-scripts
     */
    preuninstall?: string;
    /**
     * Run BEFORE bump the package version.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-version
     */
    preversion?: string;
}

/**
 * `package.json` run scripts.
 */
interface RunScripts$1 {
    /**
     * Run AFTER the package is installed.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-install
     */
    install?: string;
    /**
     * Run both BEFORE the package is packed and published, and on local npm
     * install without any arguments. This is run AFTER prepublish, but BEFORE
     * prepublishOnly.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-pack
     */
    prepare?: string;
    /**
     * Publishes a package to the registry so that it can be installed by name.
     * See https://docs.npmjs.com/cli/v8/commands/npm-publish
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-publish
     */
    publish?: string;
    /**
     * Run by the 'npm restart' command. Note: 'npm restart' will run the stop
     * and start scripts if no restart script is provided.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-restart
     */
    restart?: string;
    /**
     * Run by the 'npm start' command.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-start
     */
    start?: string;
    /**
     * Run by the 'npm stop' command.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-stop
     */
    stop?: string;
    /**
     * Run by the 'npm test' command.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-test
     */
    test?: string;
    /**
     * @warning https://docs.npmjs.com/cli/v9/using-npm/scripts#a-note-on-a-lack-of-npm-uninstall-scripts
     *
     * Run BEFORE the package is uninstalled.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#a-note-on-a-lack-of-npm-uninstall-scripts
     */
    uninstall?: string;
    /**
     * Run BEFORE bump the package version.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-version
     */
    version?: string;
}

/**
 * `package.json` post scripts.
 */
interface PostScripts {
    /**
     * Run AFTER the package is installed.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-install
     */
    postinstall?: string;
    /**
     * Run AFTER the tarball has been generated and moved to its final
     * destination.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-pack
     */
    postpack?: string;
    /**
     * Run AFTER the package is published.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-publish
     */
    postpublish?: string;
    /**
     * Run by the 'npm restart' command. Note: 'npm restart' will run the stop
     * and start scripts if no restart script is provided.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-restart
     */
    postrestart?: string;
    /**
     * Run by the 'npm start' command.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-start
     */
    poststart?: string;
    /**
     * Run by the 'npm stop' command.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-stop
     */
    poststop?: string;
    /**
     * Run by the 'npm test' command.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-test
     */
    posttest?: string;
    /**
     * @warning https://docs.npmjs.com/cli/v9/using-npm/scripts#a-note-on-a-lack-of-npm-uninstall-scripts
     *
     * Run AFTER the package is uninstalled.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#a-note-on-a-lack-of-npm-uninstall-scripts
     */
    postuninstall?: string;
    /**
     * Run AFTER bump the package version.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-version
     */
    postversion?: string;
}

/**
 * The 'scripts' member is an object hash of script commands that are run at
 * various times in the lifecycle of your package. The key is the lifecycle
 * event, and the value is the command to run at that point.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#scripts
 */
interface Scripts$1 {
    /**
     * install scripts
     */
    /**
     * Run BEFORE the package is installed.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-install
     */
    preinstall?: PreScripts['preinstall'];
    /**
     * Run AFTER the package is installed.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-install
     */
    install?: RunScripts$1['install'];
    /**
     * Run AFTER the package is installed.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-install
     */
    postinstall?: PostScripts['postinstall'];
    /**
     * pack scripts
     */
    /**
     * Run BEFORE a tarball is packed (on npm pack, npm publish, and when
     * installing git dependencies).
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-pack
     */
    prepack?: PreScripts['prepack'];
    /**
     * Run both BEFORE the package is packed and published, and on local npm
     * install without any arguments. This is run AFTER prepublish, but BEFORE
     * prepublishOnly.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-pack
     */
    prepare?: RunScripts$1['prepare'];
    /**
     * Run AFTER the tarball has been generated and moved to its final
     * destination.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-pack
     */
    postpack?: PostScripts['postpack'];
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
    prepublish?: PreScripts['prepublish'];
    /**
     * Run BEFORE the package is prepared and packed, ONLY on npm publish.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-publish
     */
    prepublishOnly?: PreScripts['prepublishOnly'];
    /**
     * Publishes a package to the registry so that it can be installed by name.
     * See https://docs.npmjs.com/cli/v8/commands/npm-publish
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-publish
     */
    publish?: RunScripts$1['publish'];
    /**
     * Run AFTER the package is published.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-publish
     */
    postpublish?: PostScripts['postpublish'];
    /**
     * restart scripts
     */
    /**
     * Run by the 'npm restart' command. Note: 'npm restart' will run the stop
     * and start scripts if no restart script is provided.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-restart
     */
    prerestart?: PreScripts['prerestart'];
    /**
     * Run by the 'npm restart' command. Note: 'npm restart' will run the stop
     * and start scripts if no restart script is provided.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-restart
     */
    restart?: RunScripts$1['restart'];
    /**
     * Run by the 'npm restart' command. Note: 'npm restart' will run the stop
     * and start scripts if no restart script is provided.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-restart
     */
    postrestart?: PostScripts['postrestart'];
    /**
     * start scripts
     */
    /**
     * Run by the 'npm start' command.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-start
     */
    prestart?: PreScripts['prestart'];
    /**
     * Run by the 'npm start' command.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-start
     */
    start?: RunScripts$1['start'];
    /**
     * Run by the 'npm start' command.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-start
     */
    poststart?: PostScripts['poststart'];
    /**
     * stop scripts
     */
    /**
     * Run by the 'npm stop' command.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-stop
     */
    prestop?: PreScripts['prestop'];
    /**
     * Run by the 'npm stop' command.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-stop
     */
    stop?: RunScripts$1['stop'];
    /**
     * Run by the 'npm stop' command.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-stop
     */
    poststop?: PostScripts['poststop'];
    /**
     * test scripts
     */
    /**
     * Run by the 'npm test' command.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-test
     */
    pretest?: PreScripts['pretest'];
    /**
     * Run by the 'npm test' command.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-test
     */
    test?: RunScripts$1['test'];
    /**
     * Run by the 'npm test' command.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-test
     */
    posttest?: PostScripts['posttest'];
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
    preuninstall?: PreScripts['preuninstall'];
    /**
     * @warning https://docs.npmjs.com/cli/v9/using-npm/scripts#a-note-on-a-lack-of-npm-uninstall-scripts
     *
     * Run BEFORE the package is uninstalled.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#a-note-on-a-lack-of-npm-uninstall-scripts
     */
    uninstall?: RunScripts$1['uninstall'];
    /**
     * @warning https://docs.npmjs.com/cli/v9/using-npm/scripts#a-note-on-a-lack-of-npm-uninstall-scripts
     *
     * Run AFTER the package is uninstalled.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#a-note-on-a-lack-of-npm-uninstall-scripts
     */
    postuninstall?: PostScripts['postuninstall'];
    /**
     * version scripts
     */
    /**
     * Run BEFORE bump the package version.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-version
     */
    preversion?: PreScripts['preversion'];
    /**
     * Run BEFORE bump the package version.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-version
     */
    version?: RunScripts$1['version'];
    /**
     * Run AFTER bump the package version.
     *
     * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-version
     */
    postversion?: PostScripts['postversion'];
}

/**
 * A 'config' hash can be used to set configuration parameters used in package
 * scripts that persist across upgrades.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#config
 */
type Config = Record<string, unknown>;

/**
 * When a user installs your package, warnings are emitted if packages
 * specified in "peerDependencies" are not already installed. The
 * "peerDependenciesMeta" field serves to provide more information on how your
 * peer dependencies are utilized. Most commonly, it allows peer dependencies
 * to be marked as optional. Metadata for this field is specified with a simple
 * hash of the package name to a metadata object.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#peerdependenciesmeta
 */
type PeerDependenciesMeta = Record<string, {
    /**
     * Specifies that this peer dependency is optional and should not be
     * installed automatically.
     */
    optional?: boolean;
}>;

/**
 * @deprecated This field is honored, but "bundledDependencies" is the correct
 * field name.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#bundledependencies
 */
type BundleDependencies = string[] | boolean;

/**
 * Overrides is used to support selective version overrides using npm, which
 * lets you define custom package versions or ranges inside your dependencies.
 * For yarn, use resolutions instead.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#overrides
 */
type Overrides$2 = Record<string, unknown>;

/**
 * Engine compatibility.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#engines
 */
interface Engines$1 {
    node?: string;
}

/**
 * Specify which operating systems your module will run on.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#os
 */
type OS = string[];

/**
 * Specify that your code only runs on certain cpu architectures.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#cpu
 */
type CPU = string[];

/**
 * If set to true, then npm will refuse to publish it.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#private
 */
type Private = boolean | 'false' | 'true';

type Access = 'public' | 'restricted';

/**
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#publishconfig
 */
interface PublishConfig {
    access?: Access;
    registry?: URL;
    tag?: string;
}

/**
 * Allows packages within a directory to depend on one another using direct
 * linking of local files. Additionally, dependencies within a workspace are
 * hoisted to the workspace root when possible to reduce duplication. Note:
 * It's also a good idea to set "private" to true when using this feature.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#workspaces
 */
type Workspaces = string[] | {
    /**
     * Workspace package paths. Glob patterns are supported.
     */
    packages?: string[];
    /**
     * Packages to block from hoisting to the workspace root. Currently only
     * supported in Yarn only.
     */
    nohoist?: string[];
};

/**
 * Official `package.json` fields.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json
 */
interface OfficialPackage {
    /**
     * The name of the package.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#name
     */
    name: Name;
    /**
     * Version must be parseable by node-semver, which is bundled with npm as a
     * dependency.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#version
     */
    version: string;
    /**
     * This helps people discover your package, as it's listed in 'npm search'.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#description
     */
    description?: string;
    /**
     * This helps people discover your package as it's listed in 'npm search'.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#keywords
     */
    keywords?: Keywords;
    /**
     * The url to the project homepage.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#homepage
     */
    homepage?: URL;
    /**
     * The url to your project's issue tracker and / or the email address to
     * which issues should be reported. These are helpful for people who
     * encounter issues with your package.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#bugs
     */
    bugs?: Bugs;
    /**
     * You should specify a license for your package so that people know how they
     * are permitted to use it, and any restrictions you're placing on it.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#license
     */
    license?: string;
    /**
     * A person who has been involved in creating or maintaining this package.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#people-fields-author-contributors
     */
    author?: People;
    /**
     * A list of people who contributed to this package.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#people-fields-author-contributors
     */
    contributors?: Contributors;
    /**
     * Used to inform about ways to help fund development of the package.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#funding
     */
    funding?: Funding;
    /**
     * The 'files' field is an array of files to include in your project. If you
     * name a folder in the array, then it will also include the files inside
     * that folder.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#files
     */
    files?: Files$1;
    /**
     * The main field is a module ID that is the primary entry point to your
     * program.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#main
     */
    main?: string;
    /**
     * @note There is no this field in vscode.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#browser
     */
    browser?: Browser;
    /**
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#bin
     */
    bin?: Bin;
    /**
     * Specify either a single file or an array of filenames to put in place for
     * the man program to find.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#man
     */
    man?: Man;
    /**
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#directories
     */
    directories?: Directories$1;
    /**
     * Specify the place where your code lives. This is helpful for people who
     * want to contribute.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#repository
     */
    repository?: Repository;
    /**
     * The 'scripts' member is an object hash of script commands that are run at
     * various times in the lifecycle of your package. The key is the lifecycle
     * event, and the value is the command to run at that point.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#scripts
     */
    scripts?: Scripts$1;
    /**
     * A 'config' hash can be used to set configuration parameters used in
     * package scripts that persist across upgrades.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#config
     */
    config?: Config;
    /**
     * Dependencies are specified with a simple hash of package name to version
     * range. The version range is a string which has one or more space-separated
     * descriptors. Dependencies can also be identified with a tarball or git URL.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#dependencies
     */
    dependencies?: Dependencies;
    /**
     * Dependencies are specified with a simple hash of package name to version
     * range. The version range is a string which has one or more space-separated
     * descriptors. Dependencies can also be identified with a tarball or git URL.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#devdependencies
     */
    devDependencies?: Dependencies;
    /**
     * Dependencies are specified with a simple hash of package name to version
     * range. The version range is a string which has one or more space-separated
     * descriptors. Dependencies can also be identified with a tarball or git URL.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#peerdependencies
     */
    peerDependencies?: Dependencies;
    /**
     * When a user installs your package, warnings are emitted if packages
     * specified in "peerDependencies" are not already installed. The
     * "peerDependenciesMeta" field serves to provide more information on how
     * your peer dependencies are utilized. Most commonly, it allows peer
     * dependencies to be marked as optional. Metadata for this field is
     * specified with a simple hash of the package name to a metadata object.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#peerdependenciesmeta
     */
    peerDependenciesMeta?: PeerDependenciesMeta;
    /**
     * @deprecated This field is honored, but "bundledDependencies" is the
     * correct field name.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#bundledependencies
     */
    bundleDependencies?: BundleDependencies;
    /**
     * Dependencies are specified with a simple hash of package name to version
     * range. The version range is a string which has one or more space-separated
     * descriptors. Dependencies can also be identified with a tarball or git URL.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#optionaldependencies
     */
    optionalDependencies?: Dependencies;
    /**
     * Overrides is used to support selective version overrides using npm, which
     * lets you define custom package versions or ranges inside your
     * dependencies. For yarn, use resolutions instead.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#overrides
     */
    overrides?: Overrides$2;
    /**
     * Engine compatibility.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#engines
     */
    engines?: Engines$1;
    /**
     * Specify which operating systems your module will run on.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#os
     */
    os?: OS;
    /**
     * Specify that your code only runs on certain cpu architectures.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#cpu
     */
    cpu?: CPU;
    /**
     * If set to true, then npm will refuse to publish it.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#private
     */
    private?: Private;
    /**
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#publishconfig
     */
    publishConfig?: PublishConfig;
    /**
     * Allows packages within a directory to depend on one another using direct
     * linking of local files. Additionally, dependencies within a workspace are
     * hoisted to the workspace root when possible to reduce duplication. Note:
     * It's also a good idea to set "private" to true when using this feature.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#workspaces
     */
    workspaces?: Workspaces;
}

/**
 * Activation events for the VS Code extension.
 *
 * @note This is not a `package.json` official field.
 */
type ActivationEvents = Array<'*' | 'onAuthenticationRequest:authenticationProviderId' | 'onCommand:commandId' | 'onCustomEditor:viewType' | 'onDebug' | 'onDebugAdapterProtocolTracker:type' | 'onDebugDynamicConfigurations' | 'onDebugInitialConfigurations' | 'onDebugResolve:type' | 'onEditSession:scheme' | 'onFileSystem:scheme' | 'onLanguage:languageId' | 'onNotebook:type' | 'onOpenExternalUri' | 'onRenderer:rendererId' | 'onSearch:scheme' | 'onStartupFinished' | 'onTaskType:taskType' | 'onTerminalProfile:terminalId' | 'onTerminalQuickFixRequest:quickFixId' | 'onUri' | 'onView:viewId' | 'onWalkthrough:walkthroughID' | 'onWebviewPanel:viewType' | 'workspaceContains:filePattern'>;

/**
 * Describe the API provided by this extension. For more details visit:
 * https://code.visualstudio.com/api/advanced-topics/remote-extensions#handling-dependencies-with-remote-extensions
 *
 * `none`: Give up entirely the ability to export any APIs. This allows other
 * extensions that depend on this extension to run in a separate extension host
 * process or in a remote machine.
 *
 * @note This is not a `package.json` official field.
 */
type API = 'none';

/**
 * Environment variables
 *
 * Specifies environment variables to be made available to the tests. The
 * environment variables defined here override the ones from `process.env`.
 */
type EnvironmentVariables = Record<string, string>;

/**
 * Extensions of test files. Setting this overrides the default
 * `["cjs", "mjs", "js"]` value, so make sure to include those extensions in
 * the list. Experimentally you can configure how files are loaded.
 */
type Extensions = string[] | Record<string, ('commonjs' | 'module')>;

/**
 * An array of glob patterns to select test files. Files with an underscore
 * prefix are ignored. By default only selects files with `cjs`, `mjs` & `js`
 * extensions, even if the pattern matches other files. Specify `extensions` to
 * allow other file extensions.
 */
type Files = string[];

/**
 * An array of glob patterns to match files that, even if changed, are ignored
 * by the watcher.
 */
type IgnoredByWatcher = string[];

/**
 * Not typically useful in the `package.json` configuration, but equivalent to
 * specifying `--match` on the CLI.
 */
type Match = string[];

/**
 * Configure Node.js arguments used to launch worker processes.
 */
type NodeArguments = string[];

/**
 * Extra modules to require before tests are run. Modules are required in the
 * worker processes.
 */
type Require = string[];

/**
 * Timeouts in AVA behave differently than in other test frameworks. AVA resets
 * a timer after each test, forcing tests to quit if no new test results were
 * received within the specified timeout. This can be used to handle stalled
 * tests. See our timeout documentation for more options.
 */
type Timeout = number | `${number}s` | `${number}m`;

/**
 * If `false`, AVA will assume you have already compiled your project. If set
 * to `'tsc'`, AVA will run the TypeScript compiler before running your tests.
 * This can be inefficient when using AVA in watch mode.
 */
type TypeScriptCompile = false | 'tsc';
/**
 * You can configure AVA to recognize additional file extensions as TypeScript
 * (e.g., `["ts", "tsx"]` to add partial JSX support). Note that the preserve
 * mode for JSX is not (yet) supported. See also AVA's `extensions` object.
 */
type TypeScriptExtensions = string[];
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
type TypeScriptRewritePaths = Record<string, unknown>;
/**
 * configuration
 *
 * Configures @ava/typescript for projects that precompile TypeScript.
 * Alternatively, you can use `ts-node` to do live testing without transpiling,
 * in which case you shouldn't use the `typescript` property.
 */
interface TypeScript {
    /**
     * If `false`, AVA will assume you have already compiled your project. If set
     * to `'tsc'`, AVA will run the TypeScript compiler before running your
     * tests. This can be inefficient when using AVA in watch mode.
     */
    compile?: TypeScriptCompile;
    /**
     * You can configure AVA to recognize additional file extensions as
     * TypeScript (e.g., `["ts", "tsx"]` to add partial JSX support). Note that
     * the preserve mode for JSX is not (yet) supported. See also AVA's
     * `extensions` object.
     */
    extensions?: TypeScriptExtensions;
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
    rewritePaths?: TypeScriptRewritePaths;
}

/**
 * AVA Config Schema
 *
 * Configuration Schema for the JavaScript test runner AVA.
 *
 * @note This is not a `package.json` official field.
 */
interface AVA {
    /**
     * Defaults to `true` to cache compiled files under
     * `node_modules/.cache/ava.` If `false`, files are cached in a temporary
     * directory instead.
     */
    cache?: boolean;
    /**
     * Max number of test files running at the same time (default: CPU cores).
     */
    concurrency?: number;
    /**
     * Environment variables
     *
     * Specifies environment variables to be made available to the tests. The
     * environment variables defined here override the ones from `process.env`.
     */
    environmentVariables?: EnvironmentVariables;
    /**
     * Extensions of test files. Setting this overrides the default
     * `["cjs", "mjs", "js"]` value, so make sure to include those extensions in
     * the list. Experimentally you can configure how files are loaded.
     */
    extensions?: Extensions;
    /**
     * Stop running further tests once a test fails.
     */
    failFast?: boolean;
    /**
     * If `false`, does not fail a test if it doesn't run assertions.
     */
    failWithoutAssertions?: boolean;
    /**
     * An array of glob patterns to select test files. Files with an underscore
     * prefix are ignored. By default only selects files with `cjs`, `mjs` &
     * `js` extensions, even if the pattern matches other files. Specify
     * `extensions` to allow other file extensions.
     */
    files?: Files;
    /**
     * An array of glob patterns to match files that, even if changed, are
     * ignored by the watcher.
     */
    ignoredByWatcher?: IgnoredByWatcher;
    /**
     * Not typically useful in the `package.json` configuration, but equivalent
     * to specifying `--match` on the CLI.
     */
    match?: Match;
    /**
     * Configure Node.js arguments used to launch worker processes.
     */
    nodeArguments?: NodeArguments;
    /**
     * Extra modules to require before tests are run. Modules are required in
     * the worker processes.
     */
    require?: Require;
    /**
     * Specifies a fixed location for storing snapshot files. Use this if your
     * snapshots are ending up in the wrong location.
     */
    snapshotDir?: string;
    /**
     * If `true`, enables the TAP reporter.
     */
    tap?: boolean;
    /**
     * Timeouts in AVA behave differently than in other test frameworks. AVA
     * resets a timer after each test, forcing tests to quit if no new test
     * results were received within the specified timeout. This can be used to
     * handle stalled tests. See our timeout documentation for more options.
     */
    timeout?: Timeout;
    /**
     * Configuration
     *
     * Configures @ava/typescript for projects that precompile TypeScript.
     * Alternatively, you can use `ts-node` to do live testing without
     * transpiling, in which case you shouldn't use the `typescript` property.
     */
    typescript?: TypeScript;
    /**
     * If `false`, disable parallel builds (default: `true`).
     */
    utilizeParallelBuilds?: boolean;
    /**
     * If `true`, enables verbose output (though currently non-verbose output
     * is not supported).
     */
    verbose?: boolean;
    /**
     * Use worker threads to run tests (enabled by default). If `false`, tests
     * will run in child processes.
     */
    workerThreads?: boolean;
}

/**
 * Array of badges to display in the sidebar of the Marketplace's extension
 * page.
 *
 * @note This is not a `package.json` official field.
 */
type Badges = Array<{
    /**
     * Badge description.
     */
    description: string;
    /**
     * Badge link.
     */
    href: URL;
    /**
     * Badge image URL.
     */
    url: URL<'https'>;
}>;

/**
 * Array of package names that will be bundled when publishing the package.
 *
 * @note This is not a `package.json` official field.
 */
type BundledDependencies = string[] | boolean;

/**
 * Declares the level of support for untrusted workspaces by the extension.
 *
 * `limited`: The extension will be enabled in untrusted workspaces with some
 * functionality disabled.
 */
type UntrustedWorkspacesSupported = 'limited' | boolean;
/**
 * A list of configuration keys contributed by the extension that should not
 * use workspace values in untrusted workspaces.
 */
type UntrustedWorkspacesRestrictedConfigurations = string[];
/**
 * Declares how the extension should be handled in untrusted workspaces.
 */
interface UntrustedWorkspaces {
    /**
     * Declares the level of support for untrusted workspaces by the
     * extension.
     *
     * `limited`: The extension will be enabled in untrusted workspaces with
     * some functionality disabled.
     */
    supported: UntrustedWorkspacesSupported;
    /**
     * A description of how workspace trust affects the extensions behavior
     * and why it is needed. This only applies when `supported` is not `true`.
     */
    description?: string;
    /**
     * A list of configuration keys contributed by the extension that should
     * not use workspace values in untrusted workspaces.
     */
    restrictedConfigurations?: UntrustedWorkspacesRestrictedConfigurations;
}

/**
 * Declares the level of support for virtual workspaces by the extension.
 *
 * `limited`: The extension will be enabled in untrusted workspaces with some
 * functionality disabled.
 *
 * `false`: The extension will not be enabled in virtual workspaces.
 * `true`: The extension will be enabled in virtual workspaces with all
 * functionality enabled.
 */
type VirtualWorkspacesSupported = 'limited' | boolean;
/**
 * Declares whether the extension should be enabled in virtual workspaces. A
 * virtual workspace is a workspace which is not backed by any on-disk
 * resources. When false, this extension will be automatically disabled in
 * virtual workspaces. Default is true.
 */
type VirtualWorkspaces = {
    /**
     * Declares the level of support for virtual workspaces by the
     * extension.
     *
     * `limited`: The extension will be enabled in untrusted workspaces with
     * some functionality disabled.
     *
     * `false`: The extension will not be enabled in virtual workspaces.
     *
     * `true`: The extension will be enabled in virtual workspaces with all
     * functionality enabled.
     */
    supported?: VirtualWorkspacesSupported;
    /**
     * A description of how virtual workspaces affects the extensions behavior
     * and why it is needed. This only applies when `supported` is not `true`.
     */
    description?: string;
} | boolean;

/**
 * Declare the set of supported capabilities by the extension.
 *
 * @note This is not a `package.json` official field.
 */
interface Capabilities {
    /**
     * Declares how the extension should be handled in untrusted workspaces.
     */
    untrustedWorkspaces?: UntrustedWorkspaces;
    /**
     * Declares whether the extension should be enabled in virtual workspaces. A
     * virtual workspace is a workspace which is not backed by any on-disk
     * resources. When false, this extension will be automatically disabled in
     * virtual workspaces. Default is true.
     */
    virtualWorkspaces?: VirtualWorkspaces;
}

/**
 * The categories used by the VS Code gallery to categorize the extension.
 *
 * @note This is not a `package.json` official field.
 */
type Categories = Array<'Azure' | 'Data Science' | 'Debuggers' | 'Education' | 'Extension Packs' | 'Formatters' | 'Keymaps' | 'Language Packs' | 'Linters' | 'Machine Learning' | 'Notebooks' | 'Other' | 'Programming Languages' | 'SCM Providers' | 'Snippets' | 'Testing' | 'Themes' | 'Visualization'>;

/**
 * All contributions of the VS Code extension represented by this package.
 *
 * @note This is not a `package.json` official field.
 */
type Contributes = Record<string, unknown>;

/**
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#directories
 */
interface Directories {
    /**
       * Put markdown files in here. Eventually, these will be displayed nicely,
       * maybe, someday.
       *
       * @note This is not a `package.json` official field.
       */
    doc?: string;
    /**
     * Put example scripts in here. Someday, it might be exposed in some clever
     * way.
     *
     * @note This is not a `package.json` official field.
     */
    example?: string;
    /**
     * Tell people where the bulk of your library is. Nothing special is done
     * with the lib folder in any way, but it's useful meta info.
     *
     * @note This is not a `package.json` official field.
     */
    lib?: string;
    /**
     * @note This is not a `package.json` official field.
     */
    test?: string;
}

/**
 * @note This is not a `package.json` official field.
 */
interface Dist {
    shasum?: string;
    tarball?: string;
}

/**
 * Enable API proposals to try them out. Only valid during development.
 * Extensions cannot be published with this property. For more details visit:
 * https://code.visualstudio.com/api/advanced-topics/using-proposed-api
 *
 * @note This is not a `package.json` official field.
 */
type EnabledApiProposals = Array<'authSession' | 'codiconDecoration' | 'commentsDraftState' | 'contribCommentEditorActionsMenu' | 'contribCommentPeekContext' | 'contribCommentThreadAdditionalMenu' | 'contribEditorContentMenu' | 'contribEditSessions' | 'contribLabelFormatterWorkspaceTooltip' | 'contribMenuBarHome' | 'contribMergeEditorMenus' | 'contribNotebookStaticPreloads' | 'contribRemoteHelp' | 'contribShareMenu' | 'contribViewsRemote' | 'contribViewsWelcome' | 'customEditorMove' | 'debugFocus' | 'diffCommand' | 'diffContentOptions' | 'documentFiltersExclusive' | 'documentPaste' | 'dropMetadata' | 'editorInsets' | 'editSessionIdentityProvider' | 'envCollectionWorkspace' | 'envShellEvent' | 'extensionRuntime' | 'extensionsAny' | 'externalUriOpener' | 'fileComments' | 'fileSearchProvider' | 'findTextInFiles' | 'formatMultipleRanges' | 'fsChunks' | 'getSessions' | 'handleIssueUri' | 'idToken' | 'indentSize' | 'inlineCompletionsAdditions' | 'interactive' | 'interactiveWindow' | 'ipc' | 'notebookCellExecutionState' | 'notebookControllerAffinityHidden' | 'notebookDeprecated' | 'notebookExecution' | 'notebookKernelSource' | 'notebookLiveShare' | 'notebookMessaging' | 'notebookMime' | 'portsAttributes' | 'profileContentHandlers' | 'quickDiffProvider' | 'quickPickItemTooltip' | 'quickPickSortByLabel' | 'resolvers' | 'saveEditor' | 'scmActionButton' | 'scmSelectedProvider' | 'scmTextDocument' | 'scmValidation' | 'semanticSimilarity' | 'showLocal' | 'tabInputTextMerge' | 'taskPresentationGroup' | 'telemetry' | 'terminalDataWriteEvent' | 'terminalDimensions' | 'terminalQuickFixProvider' | 'testCoverage' | 'testObserver' | 'textSearchProvider' | 'timeline' | 'tokenInformation' | 'treeItemCheckbox' | 'treeViewReveal' | 'tunnels' | 'workspaceTrust'>;

/**
 * Engine compatibility.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#engines
 */
interface Engines {
    /**
     * For VS Code extensions, specifies the VS Code version that the extension
     * is compatible with. Cannot be *. For example: ^0.10.5 indicates
     * compatibility with a minimum VS Code version of 0.10.5.
     */
    vscode?: string;
}

/**
 * By default, ESLint supports only ECMAScript 5 syntax. You can override that
 * setting to enable support for ECMAScript 6 as well as JSX by using
 * configuration settings.
 */
type ECMAFeatures = Record<string, unknown>;

/**
 * An environment defines global variables that are predefined.
 */
type ENV = Record<string, unknown>;

/**
 * If you want to extend a specific configuration file, you can use the extends
 * property and specify the path to the file. The path can be either relative
 * or absolute.
 */
type Extends$2 = string | string[];

/**
 * Set each global variable name equal to true to allow the variable to be
 * overwritten or false to disallow overwriting.
 */
type Globals = Record<string, 'off' | 'readonly' | 'writable'>;

/**
 * Tell ESLint to ignore specific files and directories. Each value uses the
 * same pattern as the `.eslintignore` file.
 */
type IgnorePatterns = string | string[];

/**
 * Allows to override configuration for files and folders, specified by glob
 * patterns.
 */
type Overrides$1 = Array<Record<string, unknown>>;

/**
 * By default, ESLint supports only ECMAScript 5 syntax. You can override that
 * setting to enable support for ECMAScript 6 as well as JSX by using
 * configuration settings.
 */
type ParserOptionsECMAFeatures = ECMAFeatures;
/**
 * Set to 3, 5, 6, 7, 8, 9, 10, 11 (default), 12, 13, 14 or "latest" to specify
 * the version of ECMAScript syntax you want to use. You can also set to 2015
 * (same as 6), 2016 (same as 7), 2017 (same as 8), 2018 (same as 9), 2019
 * (same as 10), 2020 (same as 11), 2021 (same as 12), 2022 (same as 13) or
 * 2023 (same as 14) to use the year-based naming. "latest" always enables the
 * latest supported ECMAScript version.
 */
type ParserOptionsECMAVersion = 'latest' | 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023;
/**
 * Set to "script" (default) or "module" if your code is in ECMAScript modules.
 */
type ParserOptionsSourceType = 'script' | 'module';
/**
 * The JavaScript language options to be supported.
 */
interface ParserOptions {
    /**
     * By default, ESLint supports only ECMAScript 5 syntax. You can override
     * that setting to enable support for ECMAScript 6 as well as JSX by using
     * configuration settings.
     */
    ecmaFeatures?: ParserOptionsECMAFeatures;
    /**
     * Set to 3, 5, 6, 7, 8, 9, 10, 11 (default), 12, 13, 14 or "latest" to
     * specify the version of ECMAScript syntax you want to use. You can also set
     * to 2015 (same as 6), 2016 (same as 7), 2017 (same as 8), 2018 (same as 9),
     * 2019 (same as 10), 2020 (same as 11), 2021 (same as 12), 2022 (same as 13)
     * or 2023 (same as 14) to use the year-based naming. "latest" always enables
     * the latest supported ECMAScript version.
     */
    ecmaVersion?: ParserOptionsECMAVersion;
    /**
     * Set to "script" (default) or "module" if your code is in ECMAScript
     * modules.
     */
    sourceType?: ParserOptionsSourceType;
}

/**
 * ESLint supports the use of third-party plugins. Before using the plugin, you
 * have to install it using npm.
 */
type Plugins$2 = string[];

/**
 * ESLint comes with a large number of rules. You can modify which rules your
 * project uses either using configuration comments or configuration files.
 */
type Rules$1 = Record<string, unknown>;

/**
 * ESLint supports adding shared settings into configuration file. You can add
 * settings object to ESLint configuration file and it will be supplied to
 * every rule that will be executed. This may be useful if you are adding
 * custom rules and want them to have access to the same information and be
 * easily configurable.
 */
type Settings = Record<string, unknown>;

/**
 * JSON schema for ESLint configuration files.
 *
 * ESLint configuration.
 *
 * @note This is not a `package.json` official field.
 */
interface ESLintConfig {
    /**
     * By default, ESLint supports only ECMAScript 5 syntax. You can override
     * that setting to enable support for ECMAScript 6 as well as JSX by using
     * configuration settings.
     */
    ecmaFeatures?: ECMAFeatures;
    /**
     * An environment defines global variables that are predefined.
     */
    env?: ENV;
    /**
     * If you want to extend a specific configuration file, you can use the
     * extends property and specify the path to the file. The path can be either
     * relative or absolute.
     */
    extends?: Extends$2;
    /**
     * Set each global variable name equal to true to allow the variable to be
     * overwritten or false to disallow overwriting.
     */
    globals?: Globals;
    /**
     * Tell ESLint to ignore specific files and directories. Each value uses the
     * same pattern as the `.eslintignore` file.
     */
    ignorePatterns?: IgnorePatterns;
    /**
     * Prevent comments from changing config or rules.
     */
    noInlineConfig?: boolean;
    /**
     * Allows to override configuration for files and folders, specified by glob
     * patterns.
     */
    overrides?: Overrides$1;
    parser?: string;
    /**
     * The JavaScript language options to be supported.
     */
    parserOptions?: ParserOptions;
    /**
     * ESLint supports the use of third-party plugins. Before using the plugin,
     * you have to install it using npm.
     */
    plugins?: Plugins$2;
    /**
     * By default, ESLint will look for configuration files in all parent folders
     * up to the root directory. This can be useful if you want all of your
     * projects to follow a certain convention, but can sometimes lead to
     * unexpected results. To limit ESLint to a specific project, set this to
     * `true` in a configuration in the root of your project.
     */
    root?: boolean;
    /**
     * ESLint comes with a large number of rules. You can modify which rules your
     * project uses either using configuration comments or configuration files.
     */
    rules?: Rules$1;
    /**
     * ESLint supports adding shared settings into configuration file. You can
     * add settings object to ESLint configuration file and it will be supplied
     * to every rule that will be executed. This may be useful if you are adding
     * custom rules and want them to have access to the same information and be
     * easily configurable.
     */
    settings?: Settings;
}

/**
 * A module ID with untranspiled code that is the primary entry point to your
 * program.
 *
 * @note This is not a `package.json` official field.
 */
type ESNext = {
    main?: string;
    browser?: string;
} | string;

/**
 * Used to specify conditional exports, note that Conditional exports are
 * unsupported in older environments, so it's recommended to use the fallback
 * array option if support for those environments is a concern.
 *
 * @note This is not a `package.json` official field.
 */
type Exports = null | `./${string}` | {
    /**
     * The module path that is resolved when this specifier is imported. Set to
     * `null` to disallow importing this module.
     */
    '.'?: Exports;
    /**
     * The module path that is resolved when this specifier is imported. Set to
     * `null` to disallow importing this module.
     */
    default?: Exports;
    /**
     * The module path that is resolved when this specifier is imported. Set to
     * `null` to disallow importing this module.
     */
    import?: Exports;
    /**
     * The module path that is resolved when this specifier is imported. Set to
     * `null` to disallow importing this module.
     */
    node?: Exports;
    /**
     * The module path that is resolved when this specifier is imported. Set to
     * `null` to disallow importing this module.
     */
    require?: Exports;
    /**
     * The module path that is resolved when this specifier is imported. Set to
     * `null` to disallow importing this module.
     */
    types?: Exports;
} | Exports[];

/**
 * Dependencies to other extensions. The identifier of an extension is always
 * ${publisher}.${name}. For example: vscode.csharp.
 *
 * @note This is not a `package.json` official field.
 */
type ExtensionDependencies = Array<`${string}.${string}`>;

/**
 * Define the kind of an extension. `ui` extensions are installed and run on
 * the local machine while `workspace` extensions run on the remote.
 *
 * @note This is not a `package.json` official field.
 */
type ExtensionKind = Array<'ui' | 'workspace'>;

/**
 * A set of extensions that can be installed together. The identifier of an
 * extension is always ${publisher}.${name}. For example: vscode.csharp.
 *
 * @note This is not a `package.json` official field.
 */
type ExtensionPack = Array<`${string}.${string}`>;

/**
 * The color theme for the font used in the banner.
 */
type Theme = 'dark' | 'light';

/**
 * Banner used in the VS Code marketplace.
 *
 * @note This is not a `package.json` official field.
 */
interface GalleryBanner {
    /**
     * The banner color on the VS Code marketplace page header.
     */
    color?: string;
    /**
     * The color theme for the font used in the banner.
     */
    theme?: Theme;
}

/**
 * The path to a 128x128 pixel icon.
 *
 * @note This is not a `package.json` official field.
 */
type Icon = URL<'https'>;

/**
 * list of formats for which to detect duplication (default: all);
 *
 * see https://github.com/kucherenko/jscpd/blob/master/supported_formats.md
 */
type Format = Array<'abap' | 'actionscript' | 'ada' | 'apacheconf' | 'apl' | 'applescript' | 'arduino' | 'arff' | 'asciidoc' | 'asm6502' | 'aspnet' | 'autohotkey' | 'autoit' | 'bash' | 'basic' | 'batch' | 'bison' | 'brainfuck' | 'bro' | 'c' | 'c-header' | 'clike' | 'clojure' | 'coffeescript' | 'comments' | 'cpp' | 'cpp-header' | 'crystal' | 'csharp' | 'csp' | 'css' | 'css-extras' | 'd' | 'dart' | 'diff' | 'django' | 'docker' | 'eiffel' | 'elixir' | 'elm' | 'erb' | 'erlang' | 'flow' | 'fortran' | 'fsharp' | 'gedcom' | 'gherkin' | 'git' | 'glsl' | 'go' | 'graphql' | 'groovy' | 'haml' | 'handlebars' | 'haskell' | 'haxe' | 'hpkp' | 'hsts' | 'http' | 'ichigojam' | 'icon' | 'inform7' | 'ini' | 'io' | 'j' | 'java' | 'javascript' | 'jolie' | 'json' | 'jsx' | 'julia' | 'keymap' | 'kotlin' | 'latex' | 'less' | 'liquid' | 'lisp' | 'livescript' | 'lolcode' | 'lua' | 'makefile' | 'markdown' | 'markup' | 'matlab' | 'mel' | 'mizar' | 'monkey' | 'n4js' | 'nasm' | 'nginx' | 'nim' | 'nix' | 'nsis' | 'objectivec' | 'ocaml' | 'opencl' | 'oz' | 'parigp' | 'pascal' | 'perl' | 'php' | 'plsql' | 'powershell' | 'processing' | 'prolog' | 'properties' | 'protobuf' | 'pug' | 'puppet' | 'pure' | 'python' | 'q' | 'qore' | 'r' | 'reason' | 'renpy' | 'rest' | 'rip' | 'roboconf' | 'ruby' | 'rust' | 'sas' | 'sass' | 'scala' | 'scheme' | 'scss' | 'smalltalk' | 'smarty' | 'soy' | 'sql' | 'stylus' | 'swift' | 'tap' | 'tcl' | 'textile' | 'tsx' | 'tt2' | 'twig' | 'typescript' | 'url' | 'vbnet' | 'velocity' | 'verilog' | 'vhdl' | 'vim' | 'visual-basic' | 'wasm' | 'wiki' | 'xeora' | 'xojo' | 'xquery' | 'yaml'>;

/**
 * custom mapping from formats to file extensions (default: https://github.com/kucherenko/jscpd/blob/master/packages/tokenizer/src/formats.ts\);
 *
 * see https://github.com/kucherenko/jscpd/blob/master/supported_formats.md
 */
type FormatsExts = Record<string, string[]>;

/**
 * Glob pattern for files that should be excluded from duplicate detection.
 */
type Ignore = string[];

/**
 * Ignore code blocks matching these regular expressions.
 */
type IgnorePattern = string[];

/**
 * Maximum size of source file in bytes to check for duplication (e.g.,: 1kb,
 * 1mb, 120kb).
 */
type MaxSize = number | `${number}kb` | `${number}kB` | `${number}Kb` | `${number}KB` | `${number}mb` | `${number}mB` | `${number}Mb` | `${number}MB` | `${number}gb` | `${number}gB` | `${number}Gb` | `${number}GB` | `${number}tb` | `${number}tB` | `${number}Tb` | `${number}TB` | `${number}pb` | `${number}pB` | `${number}Pb` | `${number}PB`;

/**
 * Mode of detection quality;
 *
 * see https://github.com/kucherenko/jscpd/blob/master/packages/jscpd/README.md#mode
 */
type Mode = 'mild' | 'strict' | 'weak';

/**
 * Path to directory for non-console reports.
 */
type Output = `./${string}`;

/**
 * Paths that should be included in duplicate detection (default:
 * [process.cwd()]).
 */
type Path = string[];

/**
 * A list of reporters to use to output information about duplication;
 *
 * see https://github.com/kucherenko/jscpd/blob/master/packages/jscpd/README.md#reporters
 */
type Reporters = Array<'console' | 'consoleFull' | 'csv' | 'html' | 'json' | 'markdown' | 'silent' | 'threshold' | 'xcode' | 'xml'>;

/**
 * Badge color (name or RGB code without #, default: green if beneath
 * threshold, red if above threshold, grey if threshold not set);
 *
 * see https://github.com/badgen/badgen/blob/master/src/color-presets.ts
 */
type BadgeColor = 'black' | 'blue' | 'cyan' | 'gray' | 'green' | 'grey' | 'orange' | 'pink' | 'purple' | 'red' | 'yellow';
/**
 * Badge label color (name or RGB code without #);
 *
 * see https://github.com/badgen/badgen/blob/master/src/color-presets.ts
 */
type BadgeLabelColor = '555' | 'black' | 'blue' | 'cyan' | 'gray' | 'green' | 'grey' | 'orange' | 'pink' | 'purple' | 'red' | 'yellow';
type BadgeStyle = 'classic' | 'flat';
interface Badge {
    /**
     * Badge color (name or RGB code without #, default: green if beneath
     * threshold, red if above threshold, grey if threshold not set);
     *
     * see https://github.com/badgen/badgen/blob/master/src/color-presets.ts
     */
    color?: BadgeColor;
    /**
     * URL for icon to display in front of badge subject text (e.g.,
     * data:image/svg+xml;base64,...).
     */
    icon?: string;
    /**
     * SVG width of icon to display in front of badge subject text; set this
     * if icon is not square.
     */
    iconWidth?: number;
    /**
     * Badge subject text (URL-encoding needed for spaces or special
     * characters).
     */
    label?: string;
    /**
     * Badge label color (name or RGB code without #);
     *
     * see https://github.com/badgen/badgen/blob/master/src/color-presets.ts
     */
    labelColor?: BadgeLabelColor;
    /**
     * Output path for duplication level badge (default: path.join(output,
     * 'jscpd-badge.svg')).
     */
    path?: string;
    /**
     * Size of badge relative to default of 1.
     */
    scale?: number;
    /**
     * Badge value text (URL-encoding needed for spaces or special
     * characters, default: duplication %)
     */
    status?: string;
    style?: BadgeStyle;
}
interface ReportersOptions {
    badge?: Badge;
}

/**
 * Store used to collect information about code (default: in-memory store);
 * install @jscpd/leveldb-store and use leveldb for big repositories.
 */
type Store = 'leveldb' | 'redis';

/**
 * @note This is not a `package.json` official field.
 */
interface JSCPD {
    /**
     * Use absolute paths in report.
     */
    absolute?: boolean;
    /**
     * Get information about authors and dates of duplicated blocks from Git.
     */
    blame?: boolean;
    /**
     * Exit code to use when at least one duplicate code block is detected but
     * threshold is not exceeded.
     */
    exitCode?: number;
    /**
     * list of formats for which to detect duplication (default: all);
     *
     * see https://github.com/kucherenko/jscpd/blob/master/supported_formats.md
     */
    format?: Format;
    /**
     * custom mapping from formats to file extensions (default: https://github.com/kucherenko/jscpd/blob/master/packages/tokenizer/src/formats.ts\);
     *
     * see https://github.com/kucherenko/jscpd/blob/master/supported_formats.md
     */
    formatsExts?: FormatsExts;
    /**
     * Ignore all files from `.gitignore` file.
     */
    gitignore?: boolean;
    /**
     * Glob pattern for files that should be excluded from duplicate detection.
     */
    ignore?: Ignore;
    /**
     * Ignore case of symbols in code (experimental).
     */
    ignoreCase?: boolean;
    /**
     * Ignore code blocks matching these regular expressions.
     */
    ignorePattern?: IgnorePattern;
    /**
     * Maximum size of source file in lines to check for duplication.
     */
    maxLines?: number;
    /**
     * Maximum size of source file in bytes to check for duplication (e.g.,: 1kb,
     * 1mb, 120kb).
     */
    maxSize?: MaxSize;
    /**
     * Minimum size of code block in lines to check for duplication.
     */
    minLines?: number;
    /**
     * Minimum size of code block in tokens to check for duplication.
     */
    minTokens?: number;
    /**
     * Mode of detection quality;
     *
     * see https://github.com/kucherenko/jscpd/blob/master/packages/jscpd/README.md#mode
     */
    mode?: Mode;
    /**
     * Do not follow symlinks.
     */
    noSymLinks?: boolean;
    /**
     * Path to directory for non-console reports.
     */
    output?: Output;
    /**
     * Paths that should be included in duplicate detection (default:
     * [process.cwd()]).
     */
    path?: Path;
    /**
     * Glob pattern for files that should be included in duplicate detection
     * (e.g., **\/*.txt); only used to filter directories configured via path
     * option.
     */
    pattern?: string;
    /**
     * A list of reporters to use to output information about duplication;
     *
     * see https://github.com/kucherenko/jscpd/blob/master/packages/jscpd/README.md#reporters
     */
    reporters?: Reporters;
    reportersOptions?: ReportersOptions;
    /**
     * Do not write duplicate detection progress and result to console.
     */
    silent?: boolean;
    /**
     * Skip duplicates within folders; just detect cross-folder duplicates.
     */
    skipLocal?: boolean;
    /**
     * Store used to collect information about code (default: in-memory store);
     * install @jscpd/leveldb-store and use leveldb for big repositories.
     */
    store?: Store;
}

/**
 * JSON schema for NPM package.json files.
 *
 * @note This is not a `package.json` official field.
 */
type JSPM = unknown;

/**
 * @deprecated Instead, use SPDX expressions, like this: { "license": "ISC" }
 * or { "license": "(MIT OR Apache-2.0)" }
 *
 * see: https://docs.npmjs.com/files/package.json#license.
 *
 * @note This is not a `package.json` official field.
 */
type Licenses = Array<{
    type?: string;
    url?: URL;
}>;

/**
 * A list of people who maintains this package.
 *
 * @note This is not a `package.json` official field.
 */
type Maintainers = string[] | People[];

/**
 * Controls the Markdown rendering engine used in the Marketplace. Either
 * github (default) or standard.
 *
 * @note This is not a `package.json` official field.
 */
type Markdown = 'github' | 'standard';

/**
 * Defines which package manager is expected to be used when working on the
 * current project. This field is currently experimental and needs to be
 * opted-in; see https://nodejs.org/api/corepack.html
 *
 * @note This is not a `package.json` official field.
 */
type PackageManager = `${'npm' | 'pnpm' | 'yarn'}@${number}.${number}.${number}`;

/**
 * Schema for .prettierrc
 *
 * Prettier configuration.
 *
 * @note This is not a `package.json` official field.
 */
type Prettier = Record<string, unknown> | string;

/**
 * Controls the Q&A link in the Marketplace. Set to marketplace to enable the
 * default Marketplace Q & A site. Set to a string to provide the URL of a
 * custom Q & A site. Set to false to disable Q & A altogether.
 *
 * @note This is not a `package.json` official field.
 */
type QnA = string | false;

/**
 * The branches on which releases should happen.
 */
type Branches = string | Array<string | {
    name: string;
    prerelease?: boolean | string;
    channel?: string;
    range?: string;
}>;

/**
 * List of modules or file paths containing a shareable configuration. If
 * multiple shareable configurations are set, they will be imported in the
 * order defined with each configuration option taking precedence over the
 * options defined in a previous shareable configuration.
 */
type Extends$1 = string | string[];

/**
 * Define the list of plugins to use. Plugins will run in series, in the order
 * defined.
 */
type Plugins$1 = string[];

/**
 * semantic-release Schema.
 *
 * @note This is not a `package.json` official field.
 */
interface Release {
    /**
     * The branches on which releases should happen.
     */
    branches?: Branches;
    /**
     * Set to false to skip Continuous Integration environment verifications.
     * This allows for making releases from a local machine.
     */
    ci?: boolean;
    /**
     * The objective of the dry-run mode is to get a preview of the pending
     * release. Dry-run mode skips the following steps: prepare, publish, success
     * and fail. In addition to this it prints the next version and release notes
     * to the console.
     */
    dryRun?: boolean;
    /**
     * List of modules or file paths containing a shareable configuration. If
     * multiple shareable configurations are set, they will be imported in the
     * order defined with each configuration option taking precedence over the
     * options defined in a previous shareable configuration.
     */
    extends?: Extends$1;
    /**
     * Define the list of plugins to use. Plugins will run in series, in the
     * order defined.
     */
    plugins?: Plugins$1;
    /**
     * The git repository URL.
     */
    repositoryUrl?: URL;
    /**
     * The Git tag format used by semantic-release to identify releases. The tag
     * name is generated with Lodash template and will be compiled with the
     * version variable.
     */
    tagFormat?: string;
}

/**
 * Resolutions is used to support selective version resolutions using yarn,
 * which lets you define custom package versions or ranges inside your
 * dependencies. For npm, use overrides instead.
 *
 * See: https://classic.yarnpkg.com/en/docs/selective-version-resolutions
 *
 * @note This is not a `package.json` official field.
 */
type Resolutions = Record<string, unknown>;

/**
 * `package.json` run scripts.
 */
interface RunScripts {
    /**
     * Run code quality tools, e.g. ESLint, TSLint, etc.
     *
     * @note This is not a `package.json` official field.
     */
    lint?: string;
    /**
     * Start dev server to serve application files
     *
     * @note This is not a `package.json` official field.
     */
    serve?: string;
    /**
     * Usually used to run in development mode. It can also be substituted by
     * `serve` script.
     *
     * @note This is not a `package.json` official field.
     */
    dev?: string;
    /**
     * Usually used to run builder script, like `tsc`.
     *
     * @note This is not a `package.json` official field.
     */
    build?: string;
    /**
     * Usually used to run committer script, like `commitizen`.
     *
     * @note This is not a `package.json` official field.
     */
    commit?: string;
    /**
     * Usually used to run release script, like `semantic-release`.
     *
     * @note This is not a `package.json` official field.
     */
    release?: string;
    /**
     * Script executed before the package is published as a VS Code extension.
     *
     * @note This is not a `package.json` official field.
     */
    ['vscode:prepublish']?: string;
    /**
     * Uninstall hook for VS Code extension. Script that gets executed when the
     * extension is completely uninstalled from VS Code which is when VS Code is
     * restarted (shutdown and start) after the extension is uninstalled. Only
     * Node scripts are supported.
     *
     * @note This is not a `package.json` official field.
     */
    ['vscode:uninstall']?: string;
}

/**
 * The 'scripts' member is an object hash of script commands that are run at
 * various times in the lifecycle of your package. The key is the lifecycle
 * event, and the value is the command to run at that point.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#scripts
 */
interface Scripts {
    /**
     * Run code quality tools, e.g. ESLint, TSLint, etc.
     *
     * @note This is not a `package.json` official field.
     */
    lint?: RunScripts['lint'];
    /**
     * Start dev server to serve application files
     *
     * @note This is not a `package.json` official field.
     */
    serve?: RunScripts['serve'];
    /**
     * Usually used to run in development mode. It can also be substituted by
     * `serve` script.
     *
     * @note This is not a `package.json` official field.
     */
    dev?: RunScripts['dev'];
    /**
     * Usually used to run builder script, like `tsc`.
     *
     * @note This is not a `package.json` official field.
     */
    build?: RunScripts['build'];
    /**
     * Usually used to run committer script, like `commitizen`.
     *
     * @note This is not a `package.json` official field.
     */
    commit?: RunScripts['commit'];
    /**
     * Usually used to run release script, like `semantic-release`.
     *
     * @note This is not a `package.json` official field.
     */
    release?: RunScripts['release'];
    /**
     * Script executed before the package is published as a VS Code extension.
     *
     * @note This is not a `package.json` official field.
     */
    ['vscode:prepublish']?: RunScripts['vscode:prepublish'];
    /**
     * Uninstall hook for VS Code extension. Script that gets executed when the
     * extension is completely uninstalled from VS Code which is when VS Code is
     * restarted (shutdown and start) after the extension is uninstalled. Only
     * Node scripts are supported.
     *
     * @note This is not a `package.json` official field.
     */
    ['vscode:uninstall']?: RunScripts['vscode:uninstall'];
}

/**
 * Specify the location from where users can sponsor your extension.
 *
 * @note This is not a `package.json` official field.
 */
interface Sponsor {
    /**
     * URL from where users can sponsor your extension. It must be a valid URL
     * with a HTTP or HTTPS protocol.
     *
     * Example value: https://github.com/sponsors/nvaccess
     */
    url?: URL;
}

/**
 * Severity level for all rules that do not have a severity specified in their
 * secondary options.
 */
type Severity = 'warning' | 'error';

/**
 * Your configuration can extend an existing configuration(s) (whether your own
 * or a third-party config).
 */
type Extends = string | string[];

/**
 * Provide a glob or array of globs to ignore specific files.
 */
type IgnoreFiles = string | string[];

type Rules = Record<string, unknown>;

/**
 * Provide rule and behavior overrides for files that match particular glob
 * patterns.
 */
type Overrides = Array<{
    customSyntax?: string;
    rules?: Rules;
    files?: string[];
}>;

/**
 * Plugins are rules or sets of rules built by the community that support
 * methodologies, toolsets, non-standard CSS features, or very specific use
 * cases.
 */
type Plugins = string[];

/**
 * Processors are functions that hook into stylelint's pipeline, modifying code
 * on its way into stylelint and modifying results on their way out.
 */
type Processors = string[];

interface RuleObject {
    disableFix?: boolean;
    message?: string;
    reportDisables?: boolean;
    severity?: Severity;
}
type Report = null | true | [false, true] | [false, RuleObject] | [true, false] | [true, RuleObject];

/**
 * JSON schema for the Stylelint configuration files.
 *
 * @note This is not a `package.json` official field.
 */
interface Stylelint {
    /**
     * Specify a custom syntax to use on your code.
     */
    customSyntax?: string;
    /**
     * The default severity level for all rules that do not have a severity
     * specified in their secondary options.
     */
    defaultSeverity?: Severity;
    /**
     * Your configuration can extend an existing configuration(s) (whether your
     * own or a third-party config).
     */
    extends?: Extends;
    /**
     * Ignore stylelint-disable (e.g. \/* stylelint-disable block-no-empty *\/)
     * comments.
     */
    ignoreDisables?: boolean;
    /**
     * Provide a glob or array of globs to ignore specific files.
     */
    ignoreFiles?: IgnoreFiles;
    /**
     * Provide rule and behavior overrides for files that match particular glob
     * patterns.
     */
    overrides?: Overrides;
    /**
     * Plugins are rules or sets of rules built by the community that support
     * methodologies, toolsets, non-standard CSS features, or very specific use
     * cases.
     */
    plugins?: Plugins;
    /**
     * Processors are functions that hook into stylelint's pipeline, modifying
     * code on its way into stylelint and modifying results on their way out.
     */
    processors?: Processors;
    /**
     * Report stylelint-disable comments without a description.
     */
    reportDescriptionlessDisables?: Report;
    /**
     * Report stylelint-disable comments that don't match rules that are
     * specified in the configuration object.
     */
    reportInvalidScopeDisables?: Report;
    /**
     * Report stylelint-disable comments that don't actually match any lints that
     * need to be disabled.
     */
    reportNeedlessDisables?: Report;
    rules?: Rules;
}

/**
 * When set to "module", the type field allows a package to specify all .js
 * files within are ES modules. If the "type" field is omitted or set to
 * "commonjs", all .js files are treated as CommonJS.
 *
 * @note This is not a `package.json` official field.
 */
type Type = 'commonjs' | 'module';

/**
 * The "typesVersions" field is used since TypeScript 3.1 to support features
 * that were only made available in newer TypeScript versions.
 *
 * @note This is not a `package.json` official field.
 */
type TypesVersions = Record<string, Record<string, string[]>>;

/**
 * Unofficial `package.json` fields.
 */
interface UnofficialPackage {
    /**
     * Activation events for the VS Code extension.
     *
     * @note This is not a `package.json` official field.
     */
    activationEvents?: ActivationEvents;
    /**
     * Describe the API provided by this extension. For more details visit:
     * https://code.visualstudio.com/api/advanced-topics/remote-extensions#handling-dependencies-with-remote-extensions
     *
     * `none`: Give up entirely the ability to export any APIs. This allows other
     * extensions that depend on this extension to run in a separate extension
     * host process or in a remote machine.
     *
     * @note This is not a `package.json` official field.
     */
    api?: API;
    /**
     * AVA Config Schema
     *
     * Configuration Schema for the JavaScript test runner AVA.
     *
     * @note This is not a `package.json` official field.
     */
    ava?: AVA;
    /**
     * Array of badges to display in the sidebar of the Marketplace's extension
     * page.
     *
     * @note This is not a `package.json` official field.
     */
    badges?: Badges;
    /**
     * Array of package names that will be bundled when publishing the package.
     *
     * @note This is not a `package.json` official field.
     */
    bundledDependencies?: BundledDependencies;
    /**
     * Declare the set of supported capabilities by the extension.
     *
     * @note This is not a `package.json` official field.
     */
    capabilities?: Capabilities;
    /**
     * The categories used by the VS Code gallery to categorize the extension.
     *
     * @note This is not a `package.json` official field.
     */
    categories?: Categories;
    /**
     * All contributions of the VS Code extension represented by this package.
     *
     * @note This is not a `package.json` official field.
     */
    contributes?: Contributes;
    /**
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#directories
     */
    directories?: Directories;
    /**
     * The display name for the extension used in the VS Code gallery.
     *
     * @note This is not a `package.json` official field.
     */
    displayName?: string;
    /**
     * @note This is not a `package.json` official field.
     */
    dist?: Dist;
    /**
     * Enable API proposals to try them out. Only valid during development.
     * Extensions cannot be published with this property. For more details visit:
     * https://code.visualstudio.com/api/advanced-topics/using-proposed-api
     *
     * @note This is not a `package.json` official field.
     */
    enabledApiProposals?: EnabledApiProposals;
    /**
     * Engine compatibility.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#engines
     */
    engines?: Engines;
    /**
     * @note This is not a `package.json` official field.
     */
    engineStrict?: boolean;
    /**
     * JSON schema for ESLint configuration files.
     *
     * ESLint configuration.
     *
     * @note This is not a `package.json` official field.
     */
    eslintConfig?: ESLintConfig;
    /**
     * A module ID with untranspiled code that is the primary entry point to your
     * program.
     *
     * @note This is not a `package.json` official field.
     */
    esnext?: ESNext;
    /**
     * Used to specify conditional exports, note that Conditional exports are
     * unsupported in older environments, so it's recommended to use the fallback
     * array option if support for those environments is a concern.
     *
     * @note This is not a `package.json` official field.
     */
    exports?: Exports;
    /**
     * Dependencies to other extensions. The identifier of an extension is always
     * ${publisher}.${name}. For example: vscode.csharp.
     *
     * @note This is not a `package.json` official field.
     */
    extensionDependencies?: ExtensionDependencies;
    /**
     * Define the kind of an extension. `ui` extensions are installed and run on
     * the local machine while `workspace` extensions run on the remote.
     *
     * @note This is not a `package.json` official field.
     */
    extensionKind?: ExtensionKind;
    /**
     * A set of extensions that can be installed together. The identifier of an
     * extension is always ${publisher}.${name}. For example: vscode.csharp.
     *
     * @note This is not a `package.json` official field.
     */
    extensionPack?: ExtensionPack;
    /**
     * Banner used in the VS Code marketplace.
     *
     * @note This is not a `package.json` official field.
     */
    galleryBanner?: GalleryBanner;
    /**
     * The path to a 128x128 pixel icon.
     *
     * @note This is not a `package.json` official field.
     */
    icon?: Icon;
    /**
     * @note This is not a `package.json` official field.
     */
    jscpd?: JSCPD;
    /**
     * JSON schema for NPM package.json files.
     *
     * @note This is not a `package.json` official field.
     */
    jspm?: JSPM;
    /**
     * The relative path to a folder containing localization (bundle.l10n.*.json)
     * files. Must be specified if you are using the vscode.l10n API.
     *
     * @note This is not a `package.json` official field.
     */
    l10n?: string;
    /**
     * @deprecated Instead, use SPDX expressions, like this: { "license": "ISC" }
     * or { "license": "(MIT OR Apache-2.0)" }
     *
     * see: https://docs.npmjs.com/files/package.json#license.
     *
     * @note This is not a `package.json` official field.
     */
    licenses?: Licenses;
    /**
     * A list of people who maintains this package.
     *
     * @note This is not a `package.json` official field.
     */
    maintainers?: Maintainers;
    /**
     * Controls the Markdown rendering engine used in the Marketplace. Either
     * github (default) or standard.
     *
     * @note This is not a `package.json` official field.
     */
    markdown?: Markdown;
    /**
     * An ECMAScript module ID that is the primary entry point to your program.
     *
     * @note This is not a `package.json` official field.
     */
    module?: string;
    /**
     * Defines which package manager is expected to be used when working on the
     * current project. This field is currently experimental and needs to be
     * opted-in; see https://nodejs.org/api/corepack.html
     *
     * @note This is not a `package.json` official field.
     */
    packageManager?: PackageManager;
    /**
     * @deprecated This option used to trigger an npm warning, but it will no
     * longer warn. It is purely there for informational purposes. It is now
     * recommended that you install any binaries as local devDependencies
     * wherever possible.
     *
     * @note This is not a `package.json` official field.
     */
    preferGlobal?: boolean;
    /**
     * Schema for .prettierrc
     *
     * Prettier configuration.
     *
     * @note This is not a `package.json` official field.
     */
    prettier?: Prettier;
    /**
     * Sets the extension to be flagged as a Preview in the Marketplace.
     *
     * @note This is not a `package.json` official field.
     */
    preview?: boolean;
    /**
     * The publisher of the VS Code extension.
     *
     * @note This is not a `package.json` official field.
     */
    publisher?: string;
    /**
     * Controls the Q&A link in the Marketplace. Set to marketplace to enable the
     * default Marketplace Q & A site. Set to a string to provide the URL of a
     * custom Q & A site. Set to false to disable Q & A altogether.
     *
     * @note This is not a `package.json` official field.
     */
    qna?: QnA;
    /**
     * @note This is not a `package.json` official field.
     */
    readme?: string;
    /**
     * semantic-release Schema.
     *
     * @note This is not a `package.json` official field.
     */
    release?: Release;
    /**
     * Resolutions is used to support selective version resolutions using yarn,
     * which lets you define custom package versions or ranges inside your
     * dependencies. For npm, use overrides instead.
     *
     * See: https://classic.yarnpkg.com/en/docs/selective-version-resolutions
     *
     * @note This is not a `package.json` official field.
     */
    resolutions?: Resolutions;
    /**
     * The 'scripts' member is an object hash of script commands that are run at
     * various times in the lifecycle of your package. The key is the lifecycle
     * event, and the value is the command to run at that point.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#scripts
     */
    scripts?: Scripts;
    /**
     * Specify the location from where users can sponsor your extension.
     *
     * @note This is not a `package.json` official field.
     */
    sponsor?: Sponsor;
    /**
     * JSON schema for the Stylelint configuration files.
     *
     * @note This is not a `package.json` official field.
     */
    stylelint?: Stylelint;
    /**
     * When set to "module", the type field allows a package to specify all .js
     * files within are ES modules. If the "type" field is omitted or set to
     * "commonjs", all .js files are treated as CommonJS.
     *
     * @note This is not a `package.json` official field.
     */
    type?: Type;
    /**
     * Set the types property to point to your bundled declaration file.
     *
     * @note This is not a `package.json` official field.
     */
    types?: string;
    /**
     * The "typesVersions" field is used since TypeScript 3.1 to support features
     * that were only made available in newer TypeScript versions.
     *
     * @note This is not a `package.json` official field.
     */
    typesVersions?: TypesVersions;
    /**
     * Note that the "typings" field is synonymous with "types", and could be
     * used as well.
     *
     * @note This is not a `package.json` official field.
     */
    typings?: string;
}

/**
 * `package.json` base fields.
 *
 * @see https://www.npmjs.com/package/@mnrendra/ts-types-package
 */
type Base = Merge<OfficialPackage, Merge<UnofficialPackage, {
    /**
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#directories
     */
    directories?: Merge<Directories$1, Directories>;
    /**
     * Engine compatibility.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#engines
     */
    engines?: Merge<Engines$1, Engines>;
    /**
     * The 'scripts' member is an object hash of script commands that are run at
     * various times in the lifecycle of your package. The key is the lifecycle
     * event, and the value is the command to run at that point.
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#scripts
     */
    scripts?: Merge<Scripts$1, Scripts>;
}>>;

/**
 * TypeScript utility type to validate `package.json` fields.
 *
 * @see https://www.npmjs.com/package/@mnrendra/ts-types-package
 */
type Package<Custom extends object = {}> = Merge<Base, Custom>;

export { API, AVA, EnvironmentVariables as AVAEnvironmentVariables, Extensions as AVAExtensions, Files as AVAFiles, IgnoredByWatcher as AVAIgnoredByWatcher, Match as AVAMatch, NodeArguments as AVANodeArguments, Require as AVARequire, Timeout as AVATimeout, TypeScript as AVATypeScript, TypeScriptCompile as AVATypeScriptCompile, TypeScriptExtensions as AVATypeScriptExtensions, TypeScriptRewritePaths as AVATypeScriptRewritePaths, ActivationEvents, Badges, Base as BasePackage, Bin, Browser, Bugs, BundleDependencies, BundledDependencies, CPU, Capabilities, UntrustedWorkspaces as CapabilitiesUntrustedWorkspaces, UntrustedWorkspacesRestrictedConfigurations as CapabilitiesUntrustedWorkspacesRestrictedConfigurations, UntrustedWorkspacesSupported as CapabilitiesUntrustedWorkspacesSupported, VirtualWorkspaces as CapabilitiesVirtualWorkspaces, VirtualWorkspacesSupported as CapabilitiesVirtualWorkspacesSupported, Categories, Config, Contributes, Contributors, Dependencies, Dist, ESLintConfig, ECMAFeatures as ESLintConfigECMAFeatures, ENV as ESLintConfigENV, Extends$2 as ESLintConfigExtends, Globals as ESLintConfigGlobals, IgnorePatterns as ESLintConfigIgnorePatterns, Overrides$1 as ESLintConfigOverrides, ParserOptions as ESLintConfigParserOptions, ParserOptionsECMAFeatures as ESLintConfigParserOptionsECMAFeatures, ParserOptionsECMAVersion as ESLintConfigParserOptionsECMAVersion, ParserOptionsSourceType as ESLintConfigParserOptionsSourceType, Plugins$2 as ESLintConfigPlugins, Rules$1 as ESLintConfigRules, Settings as ESLintConfigSettings, ESNext, Email, EnabledApiProposals, Exports, ExtensionDependencies, ExtensionKind, ExtensionPack, Files$1 as Files, Funding, Fund as FundingFund, GalleryBanner, Theme as GalleryBannerTheme, Icon, JSCPD, Format as JSCPDFormat, FormatsExts as JSCPDFormatsExts, Ignore as JSCPDIgnore, IgnorePattern as JSCPDIgnorePattern, MaxSize as JSCPDMaxSize, Mode as JSCPDMode, Output as JSCPDOutput, Path as JSCPDPath, Reporters as JSCPDReporters, ReportersOptions as JSCPDReportersOptions, Badge as JSCPDReportersOptionsBadge, BadgeColor as JSCPDReportersOptionsBadgeColor, BadgeLabelColor as JSCPDReportersOptionsBadgeLabelColor, BadgeStyle as JSCPDReportersOptionsBadgeStyle, Store as JSCPDStore, JSPM, Keywords, Licenses, Maintainers, Man, Markdown, Name, OS, Directories$1 as OfficialDirectories, Engines$1 as OfficialEngines, OfficialPackage, RunScripts$1 as OfficialRunScripts, Scripts$1 as OfficialScripts, Overrides$2 as Overrides, Package, PackageManager, PeerDependenciesMeta, People, PostScripts, PreScripts, Prettier, Private, PublishConfig, Access as PublishConfigAccess, QnA, Release, Branches as ReleaseBranches, Extends$1 as ReleaseExtends, Plugins$1 as ReleasePlugins, Repository, Resolutions, Sponsor, Stylelint, Extends as StylelintExtends, IgnoreFiles as StylelintIgnoreFiles, Overrides as StylelintOverrides, Plugins as StylelintPlugins, Processors as StylelintProcessors, Report as StylelintReport, RuleObject as StylelintRuleObject, Rules as StylelintRules, Severity as StylelintSeverity, Type, TypesVersions, URL, Directories as UnofficialDirectories, Engines as UnofficialEngines, UnofficialPackage, RunScripts as UnofficialRunScripts, Scripts as UnofficialScripts, Workspaces, Package as default };
