export const DownloadTracker: {
    _downloads: Map<any, any>;
    onEvent(event: any, data: any, callback: any): void;
    addDownloadItem(item: any): void;
    /**
     * Finds and returns a DownloadItem with a certain numeric ID
     *
     * @param {number} id
     * @returns {DownloadItem} download item
     */
    getDownloadItemById(id: number): DownloadItem;
};
/** Provides common logic between page and browser actions */
export class ExtensionActionHelper {
    constructor({ tabTracker, windowTracker, tabContext, properties, extension, }: {
        tabTracker: any;
        windowTracker: any;
        tabContext: any;
        properties: any;
        extension: any;
    });
    tabTracker: any;
    windowTracker: any;
    tabContext: any;
    properties: any;
    extension: any;
    getTab(aTabId: any): any;
    getWindow(aWindowId: any): any;
    extractProperties(aAction: any): {};
    eventDispatcherFor(aTabId: any): any;
    sendRequest(aTabId: any, aData: any): any;
}
export class GeckoViewConnection {
    constructor(sender: any, target: any, nativeApp: any, allowContentMessaging: any);
    sender: any;
    target: any;
    nativeApp: any;
    allowContentMessaging: any;
    get dispatcher(): any;
    _sendMessage({ type, portId, data }: {
        type: any;
        portId: any;
        data: any;
    }): any;
    sendMessage(data: any): any;
    onConnect(portId: any, messenger: any): EmbedderPort;
}
export const mobileWindowTracker: MobileWindowTracker;
export namespace GeckoViewWebExtension {
    let browserActions: WeakMap<WeakKey, any>;
    let pageActions: WeakMap<WeakKey, any>;
}
declare class EmbedderPort {
    constructor(portId: any, messenger: any);
    id: any;
    messenger: any;
    dispatcher: any;
    close(): void;
    onPortDisconnect(): void;
    onPortMessage(holder: any): void;
    onEvent(aEvent: any, aData: any, aCallback: any): void;
}
declare class MobileWindowTracker {
    _topWindow: any;
    _topNonPBWindow: any;
    get topWindow(): any;
    get topNonPBWindow(): any;
    setTabActive(aWindow: any, aActive: any): void;
}
export {};
