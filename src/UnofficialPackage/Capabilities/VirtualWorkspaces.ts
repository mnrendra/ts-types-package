/**
 * Declares the level of support for virtual workspaces by the extension.
 *
 * `limited`: The extension will be enabled in untrusted workspaces with some
 * functionality disabled.
 *
 * `false`: The extension will not be enabled in virtual workspaces.
 * `true`: The extension will be enabled in virtual workspaces with all
 * functionality enabled.
 */
export type VirtualWorkspacesSupported = 'limited' | boolean

/**
 * Declares whether the extension should be enabled in virtual workspaces. A
 * virtual workspace is a workspace which is not backed by any on-disk
 * resources. When false, this extension will be automatically disabled in
 * virtual workspaces. Default is true.
 */
export type VirtualWorkspaces =
| {
  /**
   * Declares the level of support for virtual workspaces by the
   * extension.
   *
   * `limited`: The extension will be enabled in untrusted workspaces with
   * some functionality disabled.
   *
   * `false`: The extension will not be enabled in virtual workspaces.
   *
   * `true`: The extension will be enabled in virtual workspaces with all
   * functionality enabled.
   */
  supported?: VirtualWorkspacesSupported

  /**
   * A description of how virtual workspaces affects the extensions behavior
   * and why it is needed. This only applies when `supported` is not `true`.
   */
  description?: string
}
| boolean

export default VirtualWorkspaces
