import type Severity from './Severity'

export interface RuleObject {
  disableFix?: boolean
  message?: string
  reportDisables?: boolean
  severity?: Severity
}

export type Report =
| null
| true
| [false, true]
| [false, RuleObject]
| [true, false]
| [true, RuleObject]

export default Report
