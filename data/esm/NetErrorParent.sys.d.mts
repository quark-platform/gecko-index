export class NetErrorParent extends JSWindowActorParent {
    captivePortalObserver: CaptivePortalObserver;
    didDestroy(): void;
    get browser(): any;
    hasChangedCertPrefs(): boolean;
    ReportBlockingError(bcID: any, scheme: any, host: any, port: any, path: any, xfoAndCspInfo: any): Promise<void>;
    /**
     * Return the default start page for the cases when the user's own homepage is
     * infected, so we can get them somewhere safe.
     */
    getDefaultHomePage(win: any): any;
    /**
     * Re-direct the browser to the previous page or a known-safe page if no
     * previous page is found in history.  This function is used when the user
     * browses to a secure page with certificate issues and is presented with
     * about:certerror.  The "Go Back" button should take the user to the previous
     * or a default start page so that even when their own homepage is on a server
     * that has certificate errors, we can get them somewhere safe.
     */
    goBackFromErrorPage(browser: any): void;
    /**
     * This function does a canary request to a reliable, maintained endpoint, in
     * order to help network code detect a system-wide man-in-the-middle.
     */
    primeMitm(browser: any): void;
    displayOfflineSupportPage(supportPageSlug: any): void;
    receiveMessage(message: any): void;
}
declare class CaptivePortalObserver {
    constructor(actor: any);
    actor: any;
    stop(): void;
    observe(aSubject: any, aTopic: any, aData: any): void;
}
export {};
