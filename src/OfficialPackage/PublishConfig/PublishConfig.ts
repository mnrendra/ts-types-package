import type { URL } from '../../utils'
import type Access from './Access'

/**
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#publishconfig
 */
export interface PublishConfig {
  access?: Access
  registry?: URL
  tag?: string
}

export default PublishConfig
