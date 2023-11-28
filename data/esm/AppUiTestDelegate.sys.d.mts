export const AppUiTestDelegate: Delegate;
/**
 * The implementation of AppUiTestDelegate. All implementations need to be kept
 * in sync. For details, see:
 * testing/specialpowers/content/AppTestDelegateParent.sys.mjs
 *
 * This implementation mostly forwards calls to TestRunnerApiEngine in
 * mobile/android/test_runner/src/main/java/org/mozilla/geckoview/test_runner/TestRunnerApiEngine.java
 */
declare class Delegate {
    _sendMessageToApp(data: any): any;
    clickPageAction(window: any, extensionId: any): any;
    clickBrowserAction(window: any, extensionId: any): any;
    closePageAction(window: any, extensionId: any): any;
    closeBrowserAction(window: any, extensionId: any): any;
    awaitExtensionPanel(window: any, extensionId: any): any;
    removeTab(tab: any): Promise<void>;
    openNewForegroundTab(window: any, url: any, waitForLoad?: boolean): Promise<any>;
}
export {};
n(window: any, extensionId: any): Promise<any>;
declare function getPageActionPopup(window: any, extensionId: any): any;
declare function getPanelForNode(node: any): any;
declare function makeWidgetId(id: any): any;
declare function promiseAnimationFrame(window: any): Promise<any>;
declare function promisePopupShown(popup: any): Promise<any>;
declare function showBrowserAction(window: any, extensionId: any): Promise<void>;
declare function awaitExtensionPanel(window: any, extensionId: any, awaitLoad?: boolean): Promise<any>;
declare function clickBrowserAction(window: any, extensionId: any, modifiers: any): Promise<void>;
declare function clickPageAction(window: any, extensionId: any, modifiers?: {}): Promise<any>;
declare function closeBrowserAction(window: any, extensionId: any): Promise<void>;
declare function closePageAction(window: any, extensionId: any): Promise<void>;
declare function openNewForegroundTab(window: any, url: any, waitForLoad?: boolean): any;
declare function removeTab(tab: any): Promise<void>;
export {};
