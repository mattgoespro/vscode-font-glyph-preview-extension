import { GlobalWindow } from "";

declare global {
  /**
   * The `vscode` namespace provided by the webview host.
   */
  interface VsCodeApi {
    postMessage(message: any): void;
  }

  /**
   * Webview access to the `vscode` API for communicating with the extension.
   */
  interface Window {
    acquireVsCodeApi: () => VsCodeApi;
  }

  declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
  }
}
