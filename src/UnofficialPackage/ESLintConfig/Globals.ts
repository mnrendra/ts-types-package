/**
 * Set each global variable name equal to true to allow the variable to be
 * overwritten or false to disallow overwriting.
 */
export type Globals = Record<string, 'off' | 'readonly' | 'writable'>

export default Globals
