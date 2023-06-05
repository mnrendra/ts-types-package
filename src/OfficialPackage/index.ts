import type Name from './Name'
import type Keywords from './Keywords'
import type Bugs from './Bugs'
import type Contributors from './Contributors'
import type { Fund as FundingFund } from './Funding'
import type Funding from './Funding'
import type Files from './Files'
import type Browser from './Browser'
import type Bin from './Bin'
import type Man from './Man'
import type Directories from './Directories'
import type Repository from './Repository'
import type { PreScripts, RunScripts, PostScripts } from './Scripts'
import type Scripts from './Scripts'
import type Config from './Config'
import type PeerDependenciesMeta from './PeerDependenciesMeta'
import type BundleDependencies from './BundleDependencies'
import type Overrides from './Overrides'
import type Engines from './Engines'
import type OS from './OS'
import type CPU from './CPU'
import type Private from './Private'
import type { Access as PublishConfigAccess } from './PublishConfig'
import type PublishConfig from './PublishConfig'
import type Workspaces from './Workspaces'

import type OfficialPackage from './OfficialPackage'

export type {
  Name,
  Keywords,
  Bugs,
  Contributors,
  FundingFund,
  Funding,
  Files,
  Browser,
  Bin,
  Man,
  Directories,
  Repository,
  PreScripts,
  RunScripts,
  PostScripts,
  Scripts,
  Config,
  PeerDependenciesMeta,
  BundleDependencies,
  Overrides,
  Engines,
  OS,
  CPU,
  Private,
  PublishConfigAccess,
  PublishConfig,
  Workspaces,
  // default
  OfficialPackage
}

export default OfficialPackage
