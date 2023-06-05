/**
 * An array of glob patterns to select test files. Files with an underscore
 * prefix are ignored. By default only selects files with `cjs`, `mjs` & `js`
 * extensions, even if the pattern matches other files. Specify `extensions` to
 * allow other file extensions.
 */
export type Files = string[]

export default Files
