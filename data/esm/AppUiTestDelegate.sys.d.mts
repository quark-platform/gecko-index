export namespace AppUiTestInternals {
    export { awaitBrowserLoaded };
    export { getBrowserActionWidget };
    export { getBrowserActionWidgetId };
    export { getPageActionButton };
    export { getPageActionPopup };
    export { getPanelForNode };
    export { makeWidgetId };
    export { promiseAnimationFrame };
    export { promisePopupShown };
    export { showBrowserAction };
}
export namespace AppUiTestDelegate {
    export { awaitExtensionPanel };
    export { clickBrowserAction };
    export { clickPageAction };
    export { closeBrowserAction };
    export { closePageAction };
    export { openNewForegroundTab };
    export { removeTab };
}
declare function awaitBrowserLoaded(browser: any): Promise<any>;
declare function getBrowserActionWidget(extensionId: any): any;
declare function getBrowserActionWidgetId(extensionId: any): string;
declare function getPageActionButton(window: any, extensionId: any): Promise<any>;
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
