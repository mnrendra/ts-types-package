/**
 * Timeouts in AVA behave differently than in other test frameworks. AVA resets
 * a timer after each test, forcing tests to quit if no new test results were
 * received within the specified timeout. This can be used to handle stalled
 * tests. See our timeout documentation for more options.
 */
export type Timeout =
| number
| `${number}s`
| `${number}m`

export default Timeout
