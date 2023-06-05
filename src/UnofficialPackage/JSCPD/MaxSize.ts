/**
 * Maximum size of source file in bytes to check for duplication (e.g.,: 1kb,
 * 1mb, 120kb).
 */
export type MaxSize =
| number
| `${number}kb`
| `${number}kB`
| `${number}Kb`
| `${number}KB`
| `${number}mb`
| `${number}mB`
| `${number}Mb`
| `${number}MB`
| `${number}gb`
| `${number}gB`
| `${number}Gb`
| `${number}GB`
| `${number}tb`
| `${number}tB`
| `${number}Tb`
| `${number}TB`
| `${number}pb`
| `${number}pB`
| `${number}Pb`
| `${number}PB`

export default MaxSize
