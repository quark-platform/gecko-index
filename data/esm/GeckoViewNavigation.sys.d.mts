export class GeckoViewNavigation {
    onInitBrowser(): void;
    onInit(): void;
    _initialAboutBlank: boolean;
    validateHeader(key: any, value: any, filter: any): boolean;
    onEvent(aEvent: any, aData: any, aCallback: any): Promise<void>;
    waitAndSetupWindow(aSessionId: any, aOpenWindowInfo: any, aName: any): Promise<any>;
    handleNewSession(aUri: any, aOpenWindowInfo: any, aWhere: any, aFlags: any, aName: any): any;
    createContentWindow(aUri: any, aOpenWindowInfo: any, aWhere: any, aFlags: any, aTriggeringPrincipal: any, aCsp: any): any;
    createContentWindowInFrame(aUri: any, aParams: any, aWhere: any, aFlags: any, aName: any): any;
    handleOpenUri({ uri, openWindowInfo, where, flags, triggeringPrincipal, csp, referrerInfo, name, }: {
        uri: any;
        openWindowInfo: any;
        where: any;
        flags: any;
        triggeringPrincipal: any;
        csp: any;
        referrerInfo?: any;
        name?: any;
    }): any;
    openURI(aUri: any, aOpenWindowInfo: any, aWhere: any, aFlags: any, aTriggeringPrincipal: any, aCsp: any): any;
    openURIInFrame(aUri: any, aParams: any, aWhere: any, aFlags: any, aName: any): any;
    canClose(): boolean;
    onEnable(): void;
    progressFilter: any;
    onDisable(): void;
    serializePermission({ type, capability, principal }: {
        type: any;
        capability: any;
        principal: any;
    }): {
        uri: any;
        principal: any;
        perm: any;
        value: any;
        contextId: any;
        privateMode: boolean;
    };
    isProductURL(aLocationURI: any): Promise<void>;
    onLocationChange(aWebProgress: any, aRequest: any, aLocationURI: any, aFlags: any): void;
}
