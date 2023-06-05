import type { Merge } from '@mnrendra/ts-types-merge'
import type BasePackage from './BasePackage'

/**
 * TypeScript utility type to validate `package.json` fields.
 *
 * @see https://www.npmjs.com/package/@mnrendra/ts-types-package
 */
export type Package<Custom extends object = {}> = Merge<BasePackage, Custom>

export default Package
