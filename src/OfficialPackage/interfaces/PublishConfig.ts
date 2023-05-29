import type { URL } from '../types'

/**
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#publishconfig
 */
interface PublishConfig {
  access?: 'public' | 'restricted'
  registry?: URL
  tag?: string
}

export default PublishConfig
