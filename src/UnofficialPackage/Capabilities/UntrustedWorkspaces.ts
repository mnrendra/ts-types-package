/**
 * Declares the level of support for untrusted workspaces by the extension.
 *
 * `limited`: The extension will be enabled in untrusted workspaces with some
 * functionality disabled.
 */
export type UntrustedWorkspacesSupported = 'limited' | boolean

/**
 * A list of configuration keys contributed by the extension that should not
 * use workspace values in untrusted workspaces.
 */
export type UntrustedWorkspacesRestrictedConfigurations = string[]

/**
 * Declares how the extension should be handled in untrusted workspaces.
 */
export interface UntrustedWorkspaces {
  /**
   * Declares the level of support for untrusted workspaces by the
   * extension.
   *
   * `limited`: The extension will be enabled in untrusted workspaces with
   * some functionality disabled.
   */
  supported: UntrustedWorkspacesSupported

  /**
   * A description of how workspace trust affects the extensions behavior
   * and why it is needed. This only applies when `supported` is not `true`.
   */
  description?: string

  /**
   * A list of configuration keys contributed by the extension that should
   * not use workspace values in untrusted workspaces.
   */
  restrictedConfigurations?:
  UntrustedWorkspacesRestrictedConfigurations
}

export default UntrustedWorkspaces
