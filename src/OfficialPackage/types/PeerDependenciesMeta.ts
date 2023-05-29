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
type PeerDependenciesMeta = Record<string, { optional?: boolean }>

export default PeerDependenciesMeta
