import type Rules from './Rules'

/**
 * Provide rule and behavior overrides for files that match particular glob
 * patterns.
 */
export type Overrides = Array<{
  customSyntax?: string
  rules?: Rules
  files?: string[]
}>

export default Overrides
