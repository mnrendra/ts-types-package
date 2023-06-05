import type Format from './Format'
import type FormatsExts from './FormatsExts'
import type Ignore from './Ignore'
import type IgnorePattern from './IgnorePattern'
import type MaxSize from './MaxSize'
import type Mode from './Mode'
import type Output from './Output'
import type Path from './Path'
import type Reporters from './Reporters'
import type ReportersOptions from './ReportersOptions'
import type Store from './Store'

/**
 * @note This is not a `package.json` official field.
 */
export interface JSCPD {
  /**
   * Use absolute paths in report.
   */
  absolute?: boolean

  /**
   * Get information about authors and dates of duplicated blocks from Git.
   */
  blame?: boolean

  /**
   * Exit code to use when at least one duplicate code block is detected but
   * threshold is not exceeded.
   */
  exitCode?: number

  /**
   * list of formats for which to detect duplication (default: all);
   *
   * see https://github.com/kucherenko/jscpd/blob/master/supported_formats.md
   */
  format?: Format

  /**
   * custom mapping from formats to file extensions (default: https://github.com/kucherenko/jscpd/blob/master/packages/tokenizer/src/formats.ts\);
   *
   * see https://github.com/kucherenko/jscpd/blob/master/supported_formats.md
   */
  formatsExts?: FormatsExts

  /**
   * Ignore all files from `.gitignore` file.
   */
  gitignore?: boolean

  /**
   * Glob pattern for files that should be excluded from duplicate detection.
   */
  ignore?: Ignore

  /**
   * Ignore case of symbols in code (experimental).
   */
  ignoreCase?: boolean

  /**
   * Ignore code blocks matching these regular expressions.
   */
  ignorePattern?: IgnorePattern

  /**
   * Maximum size of source file in lines to check for duplication.
   */
  maxLines?: number

  /**
   * Maximum size of source file in bytes to check for duplication (e.g.,: 1kb,
   * 1mb, 120kb).
   */
  maxSize?: MaxSize

  /**
   * Minimum size of code block in lines to check for duplication.
   */
  minLines?: number

  /**
   * Minimum size of code block in tokens to check for duplication.
   */
  minTokens?: number

  /**
   * Mode of detection quality;
   *
   * see https://github.com/kucherenko/jscpd/blob/master/packages/jscpd/README.md#mode
   */
  mode?: Mode

  /**
   * Do not follow symlinks.
   */
  noSymLinks?: boolean

  /**
   * Path to directory for non-console reports.
   */
  output?: Output

  /**
   * Paths that should be included in duplicate detection (default:
   * [process.cwd()]).
   */
  path?: Path

  /**
   * Glob pattern for files that should be included in duplicate detection
   * (e.g., **\/*.txt); only used to filter directories configured via path
   * option.
   */
  pattern?: string

  /**
   * A list of reporters to use to output information about duplication;
   *
   * see https://github.com/kucherenko/jscpd/blob/master/packages/jscpd/README.md#reporters
   */
  reporters?: Reporters

  reportersOptions?: ReportersOptions

  /**
   * Do not write duplicate detection progress and result to console.
   */
  silent?: boolean

  /**
   * Skip duplicates within folders; just detect cross-folder duplicates.
   */
  skipLocal?: boolean

  /**
   * Store used to collect information about code (default: in-memory store);
   * install @jscpd/leveldb-store and use leveldb for big repositories.
   */
  store?: Store
}

export default JSCPD
