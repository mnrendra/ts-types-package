import type ActivationEvents from './ActivationEvents'
import type API from './API'
import type {
  EnvironmentVariables as AVAEnvironmentVariables,
  Extensions as AVAExtensions,
  Files as AVAFiles,
  IgnoredByWatcher as AVAIgnoredByWatcher,
  Match as AVAMatch,
  NodeArguments as AVANodeArguments,
  Require as AVARequire,
  Timeout as AVATimeout,
  TypeScriptCompile as AVATypeScriptCompile,
  TypeScriptExtensions as AVATypeScriptExtensions,
  TypeScriptRewritePaths as AVATypeScriptRewritePaths,
  TypeScript as AVATypeScript
} from './AVA'
import type AVA from './AVA'
import type Badges from './Badges'
import type BundledDependencies from './BundledDependencies'
import type {
  UntrustedWorkspacesSupported as CapabilitiesUntrustedWorkspacesSupported,
  UntrustedWorkspacesRestrictedConfigurations
  as CapabilitiesUntrustedWorkspacesRestrictedConfigurations,
  UntrustedWorkspaces as CapabilitiesUntrustedWorkspaces,
  VirtualWorkspacesSupported as CapabilitiesVirtualWorkspacesSupported,
  VirtualWorkspaces as CapabilitiesVirtualWorkspaces
} from './Capabilities'
import type Capabilities from './Capabilities'
import type Categories from './Categories'
import type Contributes from './Contributes'
import type Directories from './Directories'
import type Dist from './Dist'
import type EnabledApiProposals from './EnabledApiProposals'
import type Engines from './Engines'
import type {
  ECMAFeatures as ESLintConfigECMAFeatures,
  ENV as ESLintConfigENV,
  Extends as ESLintConfigExtends,
  Globals as ESLintConfigGlobals,
  IgnorePatterns as ESLintConfigIgnorePatterns,
  Overrides as ESLintConfigOverrides,
  ParserOptionsECMAFeatures as ESLintConfigParserOptionsECMAFeatures,
  ParserOptionsECMAVersion as ESLintConfigParserOptionsECMAVersion,
  ParserOptionsSourceType as ESLintConfigParserOptionsSourceType,
  ParserOptions as ESLintConfigParserOptions,
  Plugins as ESLintConfigPlugins,
  Rules as ESLintConfigRules,
  Settings as ESLintConfigSettings
} from './ESLintConfig'
import type ESLintConfig from './ESLintConfig'
import type ESNext from './ESNext'
import type Exports from './Exports'
import type ExtensionDependencies from './ExtensionDependencies'
import type ExtensionKind from './ExtensionKind'
import type ExtensionPack from './ExtensionPack'
import type {
  Theme as GalleryBannerTheme
} from './GalleryBanner'
import type GalleryBanner from './GalleryBanner'
import type Icon from './Icon'
import type {
  Format as JSCPDFormat,
  FormatsExts as JSCPDFormatsExts,
  Ignore as JSCPDIgnore,
  IgnorePattern as JSCPDIgnorePattern,
  MaxSize as JSCPDMaxSize,
  Mode as JSCPDMode,
  Output as JSCPDOutput,
  Path as JSCPDPath,
  Reporters as JSCPDReporters,
  ReportersOptionsBadgeColor as JSCPDReportersOptionsBadgeColor,
  ReportersOptionsBadgeLabelColor as JSCPDReportersOptionsBadgeLabelColor,
  ReportersOptionsBadgeStyle as JSCPDReportersOptionsBadgeStyle,
  ReportersOptionsBadge as JSCPDReportersOptionsBadge,
  ReportersOptions as JSCPDReportersOptions,
  Store as JSCPDStore
} from './JSCPD'
import type JSCPD from './JSCPD'
import type JSPM from './JSPM'
import type Licenses from './Licenses'
import type Maintainers from './Maintainers'
import type Markdown from './Markdown'
import type PackageManager from './PackageManager'
import type Prettier from './Prettier'
import type QnA from './QnA'
import type {
  Branches as ReleaseBranches,
  Extends as ReleaseExtends,
  Plugins as ReleasePlugins
} from './Release'
import type Release from './Release'
import type Resolutions from './Resolutions'
import type { RunScripts } from './Scripts'
import type Scripts from './Scripts'
import type Sponsor from './Sponsor'
import type {
  Severity as StylelintSeverity,
  Extends as StylelintExtends,
  IgnoreFiles as StylelintIgnoreFiles,
  Rules as StylelintRules,
  Overrides as StylelintOverrides,
  Plugins as StylelintPlugins,
  Processors as StylelintProcessors,
  RuleObject as StylelintRuleObject,
  Report as StylelintReport
} from './Stylelint'
import type Stylelint from './Stylelint'
import type Type from './Type'
import type TypesVersions from './TypesVersions'

import UnofficialPackage from './UnofficialPackage'

export type {
  ActivationEvents,
  API,
  AVAEnvironmentVariables,
  AVAExtensions,
  AVAFiles,
  AVAIgnoredByWatcher,
  AVAMatch,
  AVANodeArguments,
  AVARequire,
  AVATimeout,
  AVATypeScriptCompile,
  AVATypeScriptExtensions,
  AVATypeScriptRewritePaths,
  AVATypeScript,
  AVA,
  Badges,
  BundledDependencies,
  CapabilitiesUntrustedWorkspacesSupported,
  CapabilitiesUntrustedWorkspacesRestrictedConfigurations,
  CapabilitiesUntrustedWorkspaces,
  CapabilitiesVirtualWorkspacesSupported,
  CapabilitiesVirtualWorkspaces,
  Capabilities,
  Categories,
  Contributes,
  Directories,
  Dist,
  EnabledApiProposals,
  Engines,
  ESLintConfigECMAFeatures,
  ESLintConfigENV,
  ESLintConfigExtends,
  ESLintConfigGlobals,
  ESLintConfigIgnorePatterns,
  ESLintConfigOverrides,
  ESLintConfigParserOptionsECMAFeatures,
  ESLintConfigParserOptionsECMAVersion,
  ESLintConfigParserOptionsSourceType,
  ESLintConfigParserOptions,
  ESLintConfigPlugins,
  ESLintConfigRules,
  ESLintConfigSettings,
  ESLintConfig,
  ESNext,
  Exports,
  ExtensionDependencies,
  ExtensionKind,
  ExtensionPack,
  GalleryBannerTheme,
  GalleryBanner,
  Icon,
  JSCPDFormat,
  JSCPDFormatsExts,
  JSCPDIgnore,
  JSCPDIgnorePattern,
  JSCPDMaxSize,
  JSCPDMode,
  JSCPDOutput,
  JSCPDPath,
  JSCPDReporters,
  JSCPDReportersOptionsBadgeColor,
  JSCPDReportersOptionsBadgeLabelColor,
  JSCPDReportersOptionsBadgeStyle,
  JSCPDReportersOptionsBadge,
  JSCPDReportersOptions,
  JSCPDStore,
  JSCPD,
  JSPM,
  Licenses,
  Maintainers,
  Markdown,
  PackageManager,
  Prettier,
  QnA,
  ReleaseBranches,
  ReleaseExtends,
  ReleasePlugins,
  Release,
  Resolutions,
  RunScripts,
  Scripts,
  Sponsor,
  StylelintSeverity,
  StylelintExtends,
  StylelintIgnoreFiles,
  StylelintRules,
  StylelintOverrides,
  StylelintPlugins,
  StylelintProcessors,
  StylelintRuleObject,
  StylelintReport,
  Stylelint,
  Type,
  TypesVersions,
  // default
  UnofficialPackage
}

export default UnofficialPackage
