/**
 * Extensions of test files. Setting this overrides the default
 * `["cjs", "mjs", "js"]` value, so make sure to include those extensions in
 * the list. Experimentally you can configure how files are loaded.
 */
export type Extensions =
| string[]
| Record<string, ('commonjs' | 'module')>

export default Extensions
