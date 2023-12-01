export class LinkHandlerParent extends JSWindowActorParent {
    static addListenerForTests(listener: any): void;
    static removeListenerForTests(listener: any): void;
    receiveMessage(aMsg: any): void;
    icon: any;
    richIcon: any;
    notifyTestListeners(name: any, data: any): void;
    clearPendingIcon(gBrowser: any, aBrowser: any): void;
    setIconFromLink(gBrowser: any, browser: any, { pageURL, originalURL, canUseForTab, expiration, iconURL, canStoreIcon }: {
        pageURL: any;
        originalURL: any;
        canUseForTab: any;
        expiration: any;
        iconURL: any;
        canStoreIcon: any;
    }): void;
}
