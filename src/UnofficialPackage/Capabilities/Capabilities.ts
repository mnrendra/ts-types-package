import type UntrustedWorkspaces from './UntrustedWorkspaces'
import type VirtualWorkspaces from './VirtualWorkspaces'

/**
 * Declare the set of supported capabilities by the extension.
 *
 * @note This is not a `package.json` official field.
 */
export interface Capabilities {
  /**
   * Declares how the extension should be handled in untrusted workspaces.
   */
  untrustedWorkspaces?: UntrustedWorkspaces

  /**
   * Declares whether the extension should be enabled in virtual workspaces. A
   * virtual workspace is a workspace which is not backed by any on-disk
   * resources. When false, this extension will be automatically disabled in
   * virtual workspaces. Default is true.
   */
  virtualWorkspaces?: VirtualWorkspaces
}

export default Capabilities
