/**
 * List of modules or file paths containing a shareable configuration. If
 * multiple shareable configurations are set, they will be imported in the
 * order defined with each configuration option taking precedence over the
 * options defined in a previous shareable configuration.
 */
export type Extends =
| string
| string[]

export default Extends
