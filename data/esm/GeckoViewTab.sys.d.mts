/// <reference types="gecko-types" />
export namespace GeckoViewTabBridge {
    /**
     * Converts windowId to tabId as in GeckoView every browser window has exactly one tab.
     *
     * @param {number} windowId outerWindowId
     *
     * @returns {number} tabId
     */
    function windowIdToTabId(windowId: number): number;
    /**
     * Converts tabId to windowId.
     *
     * @param {number} tabId
     *
     * @returns {number}
     *          outerWindowId of browser window to which the tab belongs.
     */
    function tabIdToWindowId(tabId: number): number;
    /**
     * Delegates openOptionsPage handling to the app.
     *
     * @param {number} extensionId
     *        The ID of the extension requesting the options menu.
     *
     * @returns {Promise<Void>}
     *          A promise resolved after successful handling.
     */
    function openOptionsPage(extensionId: number): Promise<void>;
    /**
     * Request the GeckoView App to create a new tab (GeckoSession).
     *
     * @param {object} options
     * @param {string} options.extensionId
     *        The ID of the extension that requested a new tab.
     * @param {object} options.createProperties
     *        The properties for the new tab, see tabs.create reference for details.
     *
     * @returns {Promise<Tab>}
     *          A promise resolved to the newly created tab.
     * @throws {Error}
     *         Throws an error if the GeckoView app doesn't support tabs.create or fails to handle the request.
     */
    function createNewTab({ extensionId, createProperties }?: {
        extensionId: string;
        createProperties: any;
    }): Promise<Tab>;
    /**
     * Request the GeckoView App to close a tab (GeckoSession).
     *
     *
     * @param {object} options
     * @param {Window} options.window The window owning the tab to close
     * @param {string} options.extensionId
     *
     * @returns {Promise<Void>}
     *          A promise resolved after GeckoSession is closed.
     * @throws {Error}
     *         Throws an error if the GeckoView app doesn't allow extension to close tab.
     */
    function closeTab({ window, extensionId }?: {
        window: Window;
        extensionId: string;
    }): Promise<void>;
    function updateTab({ window, extensionId, updateProperties }?: {
        window: any;
        extensionId: any;
        updateProperties: any;
    }): Promise<void>;
}
export class GeckoViewTab extends GeckoViewModule {
    onEvent(aEvent: any, aData: any, aCallback: any): void;
}
declare class Tab {
    constructor(window: any);
    id: number;
    browser: any;
    active: boolean;
    get linkedBrowser(): any;
    getActive(): boolean;
    get userContextId(): any;
}
import { GeckoViewModule } from "resource://gre/modules/GeckoViewModule.sys.mjs";
export {};
