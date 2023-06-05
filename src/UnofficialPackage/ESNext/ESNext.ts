/**
 * A module ID with untranspiled code that is the primary entry point to your
 * program.
 *
 * @note This is not a `package.json` official field.
 */
export type ESNext =
| {
  main?: string
  browser?: string
}
| string

export default ESNext
