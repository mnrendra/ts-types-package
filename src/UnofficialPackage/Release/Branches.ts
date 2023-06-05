/**
 * The branches on which releases should happen.
 */
export type Branches =
| string
| Array<string | {
  name: string
  prerelease?: boolean | string
  channel?: string
  range?: string
}>

export default Branches
