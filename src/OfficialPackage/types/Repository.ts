import type URL from './URL'

/**
 * Specify the place where your code lives. This is helpful for people who want
 * to contribute.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#repository
 */
type Repository =
| URL
| {
  type?: string
  url?: URL
  directory?: string
}

export default Repository
