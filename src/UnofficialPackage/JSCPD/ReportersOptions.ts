/**
 * Badge color (name or RGB code without #, default: green if beneath
 * threshold, red if above threshold, grey if threshold not set);
 *
 * see https://github.com/badgen/badgen/blob/master/src/color-presets.ts
 */
export type BadgeColor =
| 'black'
| 'blue'
| 'cyan'
| 'gray'
| 'green'
| 'grey'
| 'orange'
| 'pink'
| 'purple'
| 'red'
| 'yellow'

/**
 * Badge label color (name or RGB code without #);
 *
 * see https://github.com/badgen/badgen/blob/master/src/color-presets.ts
 */
export type BadgeLabelColor =
| '555'
| 'black'
| 'blue'
| 'cyan'
| 'gray'
| 'green'
| 'grey'
| 'orange'
| 'pink'
| 'purple'
| 'red'
| 'yellow'

export type BadgeStyle =
| 'classic'
| 'flat'

export interface Badge {
  /**
   * Badge color (name or RGB code without #, default: green if beneath
   * threshold, red if above threshold, grey if threshold not set);
   *
   * see https://github.com/badgen/badgen/blob/master/src/color-presets.ts
   */
  color?: BadgeColor

  /**
   * URL for icon to display in front of badge subject text (e.g.,
   * data:image/svg+xml;base64,...).
   */
  icon?: string

  /**
   * SVG width of icon to display in front of badge subject text; set this
   * if icon is not square.
   */
  iconWidth?: number

  /**
   * Badge subject text (URL-encoding needed for spaces or special
   * characters).
   */
  label?: string

  /**
   * Badge label color (name or RGB code without #);
   *
   * see https://github.com/badgen/badgen/blob/master/src/color-presets.ts
   */
  labelColor?: BadgeLabelColor

  /**
   * Output path for duplication level badge (default: path.join(output,
   * 'jscpd-badge.svg')).
   */
  path?: string

  /**
   * Size of badge relative to default of 1.
   */
  scale?: number

  /**
   * Badge value text (URL-encoding needed for spaces or special
   * characters, default: duplication %)
   */
  status?: string

  style?: BadgeStyle
}

export interface ReportersOptions {
  badge?: Badge
}

export default ReportersOptions
