/**
 * The name of the package.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#name
 */
export type Name = `${
| '~'
| number
| '='
| 'a'
| 'b'
| 'c'
| 'd'
| 'e'
| 'f'
| 'g'
| 'h'
| 'i'
| 'j'
| 'k'
| 'l'
| 'm'
| 'n'
| 'o'
| 'p'
| 'q'
| 'r'
| 's'
| 't'
| 'u'
| 'v'
| 'w'
| 'x'
| 'y'
| 'z'
}${string}`

export default Name
