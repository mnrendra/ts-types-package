import type { Merge } from '@mnrendra/ts-types-merge'

import type {
  Directories as OfficialDirectories,
  Engines as OfficialEngines,
  Scripts as OfficialScripts
} from '../OfficialPackage'
import type OfficialPackage from '../OfficialPackage'

import type {
  Directories as UnofficialDirectories,
  Engines as UnofficialEngines,
  Scripts as UnofficialScripts
} from '../UnofficialPackage'
import type UnofficialPackage from '../UnofficialPackage'

/**
 * `package.json` base fields.
 *
 * @see https://www.npmjs.com/package/@mnrendra/ts-types-package
 */
export type Base = Merge<
OfficialPackage,
Merge<UnofficialPackage, {
  /**
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#directories
   */
  directories?: Merge<OfficialDirectories, UnofficialDirectories>

  /**
   * Engine compatibility.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#engines
   */
  engines?: Merge<OfficialEngines, UnofficialEngines>

  /**
   * The 'scripts' member is an object hash of script commands that are run at
   * various times in the lifecycle of your package. The key is the lifecycle
   * event, and the value is the command to run at that point.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#scripts
   */
  scripts?: Merge<OfficialScripts, UnofficialScripts>
}>
>

export default Base
