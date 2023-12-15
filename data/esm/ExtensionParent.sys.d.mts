/// <reference types="gecko-types" />
export namespace ExtensionParent {
    export { GlobalManager };
    export { HiddenExtensionPage };
    export { IconDetails };
    export { ParentAPIManager };
    export { StartupCache };
    export let WebExtensionPolicy: any;
    export { apiManager };
    export { promiseBackgroundViewLoaded };
    export { watchExtensionProxyContextLoad };
    export { watchExtensionWorkerContextLoaded };
    export { DebugUtils };
}
declare let GlobalManager: any;
/**
 * This is a base class used by the ext-backgroundPage and ext-devtools API implementations
 * to inherits the shared boilerplate code needed to create a parent document for the hidden
 * extension pages (e.g. the background page, the devtools page) in the BackgroundPage and
 * DevToolsPage classes.
 *
 * @param {Extension} extension
 *        The Extension which owns the hidden extension page created (used to decide
 *        if the hidden extension page parent doc is going to be a windowlessBrowser or
 *        a visible XUL window).
 * @param {string} viewType
 *        The viewType of the WebExtension page that is going to be loaded
 *        in the created browser element (e.g. "background" or "devtools_page").
 */
declare class HiddenExtensionPage {
    constructor(extension: any, viewType: any);
    extension: any;
    viewType: any;
    browser: any;
    unloaded: boolean;
    /**
     * Destroy the created parent document.
     */
    shutdown(): void;
    _releaseBrowser(): void;
    /**
     * Creates the browser XUL element that will contain the WebExtension Page.
     *
     * @returns {Promise<XULElement>}
     *          A Promise which resolves to the newly created browser XUL element.
     */
    createBrowserElement(): Promise<XULElement>;
}
declare namespace IconDetails {
    let DEFAULT_ICON: string;
    let iconCache: ExtensionUtils.DefaultWeakMap;
    function normalize(details: any, extension: any, context?: any): any;
    function _normalize(details: any, extension: any, context?: any): {};
    function _checkURL(url: any, extension: any): void;
    function getPreferredIcon(icons: any, extension?: any, size?: number): {
        size: number;
        icon: any;
    };
    function escapeUrl(url: any): any;
}
declare let ParentAPIManager: any;
declare let StartupCache: any;
declare let apiManager: {
    [x: string]: any;
    initialized: Promise<any>;
    getModuleJSONURLs(): any[];
    lazyInit(): Promise<any>;
    receiveMessage({ target }: {
        target: any;
    }): any;
    _callHandlers(ids: any, event: any, method: any): void;
};
declare function promiseBackgroundViewLoaded(browser: any): Promise<any>;
/**
 * This helper is used to subscribe a listener (e.g. in the ext-devtools API implementation)
 * to be called for every ExtensionProxyContext created for an extension page given
 * its related extension, viewType and browser element (both the top level context and any context
 * created for the extension urls running into its iframe descendants).
 *
 * @param {object} params
 * @param {object} params.extension
 *        The Extension on which we are going to listen for the newly created ExtensionProxyContext.
 * @param {string} params.viewType
 *        The viewType of the WebExtension page that we are watching (e.g. "background" or
 *        "devtools_page").
 * @param {XULElement} params.browser
 *        The browser element of the WebExtension page that we are watching.
 * @param {Function} onExtensionProxyContextLoaded
 *        The callback that is called when a new context has been loaded (as `callback(context)`);
 *
 * @returns {Function}
 *          Unsubscribe the listener.
 */
declare function watchExtensionProxyContextLoad({ extension, viewType, browser }: {
    extension: object;
    viewType: string;
    browser: XULElement;
}, onExtensionProxyContextLoaded: Function): Function;
/**
 * This helper is used to subscribe a listener (e.g. in the ext-backgroundPage)
 * to be called for every ExtensionProxyContext created for an extension
 * background service worker given its related extension.
 *
 * @param {object} params
 * @param {object} params.extension
 *        The Extension on which we are going to listen for the newly created ExtensionProxyContext.
 * @param {Function} onExtensionWorkerContextLoaded
 *        The callback that is called when the worker script has been fully loaded (as `callback(context)`);
 *
 * @returns {Function}
 *          Unsubscribe the listener.
 */
declare function watchExtensionWorkerContextLoaded({ extension }: {
    extension: object;
}, onExtensionWorkerContextLoaded: Function): Function;
declare namespace DebugUtils {
    let hiddenXULWindow: any;
    let debugBrowserPromises: Map<any, any>;
    let debugActors: ExtensionUtils.DefaultWeakMap;
    let _extensionUpdatedWatcher: any;
    function watchExtensionUpdated(): void;
    function unwatchExtensionUpdated(): void;
    function getExtensionManifestWarnings(id: any): any;
    /**
     * Determine if the extension does have a non-persistent background script
     * (either an event page or a background service worker):
     *
     * Based on this the DevTools client will determine if this extension should provide
     * to the extension developers a button to forcefully terminate the background
     * script.
     *
     * @param {string} addonId
     *   The id of the addon
     *
     * @returns {void|boolean}
     *   - undefined => does not apply (no background script in the manifest)
     *   - true => the background script is persistent.
     *   - false => the background script is an event page or a service worker.
     */
    function hasPersistentBackgroundScript(addonId: string): boolean | void;
    /**
     * Determine if the extension background page is running.
     *
     * Based on this the DevTools client will show the status of the background
     * script in about:debugging.
     *
     * @param {string} addonId
     *   The id of the addon
     *
     * @returns {void|boolean}
     *   - undefined => does not apply (no background script in the manifest)
     *   - true => the background script is running.
     *   - false => the background script is stopped.
     */
    function isBackgroundScriptRunning(addonId: string): boolean | void;
    function terminateBackgroundScript(addonId: any): Promise<any>;
    /**
     * Determine whether a devtools toolbox attached to the extension.
     *
     * This method is called by the background page idle timeout handler,
     * to inhibit terminating the event page when idle while the extension
     * developer is debugging the extension through the Addon Debugging window
     * (similarly to how service workers are kept alive while the devtools are
     * attached).
     *
     * @param {string} id
     *        The id of the extension.
     *
     * @returns {boolean}
     *          true when a devtools toolbox is attached to an extension with
     *          the given id, false otherwise.
     */
    function hasDevToolsAttached(id: string): boolean;
    /**
     * Retrieve a XUL browser element which has been configured to be able to connect
     * the devtools actor with the process where the extension is running.
     *
     * @param {WebExtensionParentActor} webExtensionParentActor
     *        The devtools actor that is retrieving the browser element.
     *
     * @returns {Promise<XULElement>}
     *          A promise which resolves to the configured browser XUL element.
     */
    function getExtensionProcessBrowser(webExtensionParentActor: WebExtensionParentActor): Promise<XULElement>;
    function getFrameLoader(extensionId: any): any;
    /**
     * Given the devtools actor that has retrieved an addon debug browser element,
     * it destroys the XUL browser element, and it also destroy the hidden XUL window
     * if it is not currently needed.
     *
     * @param {WebExtensionParentActor} webExtensionParentActor
     *        The devtools actor that has retrieved an addon debug browser element.
     */
    function releaseExtensionProcessBrowser(webExtensionParentActor: WebExtensionParentActor): Promise<void>;
}
import { ExtensionUtils } from "resource://gre/modules/ExtensionUtils.sys.mjs";
export {};
