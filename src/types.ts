import type { Merge } from '@mnrendra/ts-types-merge'
import type OfficialPackage from './OfficialPackage'

type BasePackage = Merge<OfficialPackage, {}>

type Package<Custom extends object = {}> = Merge<BasePackage, Custom>

export type { BasePackage }

export default Package
