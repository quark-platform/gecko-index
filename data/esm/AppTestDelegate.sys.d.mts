export const AppTestDelegate: AppTestDelegateImplementation;
/**
 * This file offers the test helpers that are directly exposed to mochitests.
 * Their implementations are in app-specific "AppUiTestDelegate.sys.mjs" files.
 *
 * For documentation, see AppTestDelegateParent.sys.mjs.
 * For documentation on the methods of AppUiTestDelegate, see below.
 */
declare class AppTestDelegateImplementation {
    actor(window: any): any;
    /**
     * Click on the pageAction button, to open its popup, or to trigger
     * pageAction.onClicked if there is no popup.
     */
    clickPageAction(window: any, extension: any): any;
    /**
     * Click on the browserAction button, to open its popup, or to trigger
     * browserAction.onClicked if there is no popup.
     */
    clickBrowserAction(window: any, extension: any): any;
    /**
     * Close the browserAction popup, if any.
     * Do not use this for pageAction popups, use closePageAction instead.
     */
    closeBrowserAction(window: any, extension: any): any;
    /**
     * Close the pageAction popup, if any.
     * Do not use this for browserAction popups, use closeBrowserAction instead.
     */
    closePageAction(window: any, extension: any): any;
    /**
     * Wait for the pageAction or browserAction/action popup panel to open.
     * This must be called BEFORE any attempt to open the popup.
     */
    awaitExtensionPanel(window: any, extension: any): any;
    /**
     * Open a tab with the given url in the given window.
     * Returns an opaque object that can be passed to AppTestDelegate.removeTab.
     */
    openNewForegroundTab(window: any, url: any, waitForLoad?: boolean): Promise<{
        id: any;
    }>;
    /**
     * Close a tab opened by AppTestDelegate.openNewForegroundTab.
     */
    removeTab(window: any, tab: any): any;
}
export {};
