/**
 * A list of reporters to use to output information about duplication;
 *
 * see https://github.com/kucherenko/jscpd/blob/master/packages/jscpd/README.md#reporters
 */
export type Reporters = Array<
| 'console'
| 'consoleFull'
| 'csv'
| 'html'
| 'json'
| 'markdown'
| 'silent'
| 'threshold'
| 'xcode'
| 'xml'
>

export default Reporters
