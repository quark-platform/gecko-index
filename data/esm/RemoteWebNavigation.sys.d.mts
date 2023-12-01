export class RemoteWebNavigation {
    constructor(aBrowser: any);
    _browser: any;
    _cancelContentJSEpoch: number;
    _currentURI: nsIURIType;
    _canGoBack: boolean;
    _canGoForward: boolean;
    referringURI: any;
    swapBrowser(aBrowser: any): void;
    maybeCancelContentJSExecution(aNavigationType: any, aOptions?: {}): number;
    get canGoBack(): boolean;
    get canGoForward(): boolean;
    goBack(requireUserInteraction?: boolean): void;
    goForward(requireUserInteraction?: boolean): void;
    gotoIndex(aIndex: any): void;
    _speculativeConnect(uri: any, loadURIOptions: any): void;
    loadURI(uri: any, loadURIOptions: any): void;
    fixupAndLoadURIString(uriString: any, loadURIOptions: any): void;
    reload(aReloadFlags: any): void;
    stop(aStopFlags: any): void;
    get document(): any;
    set currentURI(aURI: nsIURIType);
    get currentURI(): nsIURIType;
    set sessionHistory(aValue: void);
    get sessionHistory(): void;
    _sendMessage(aMessage: any, aData: any): void;
}
