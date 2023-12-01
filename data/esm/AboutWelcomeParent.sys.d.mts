export class AboutWelcomeParent extends JSWindowActorParent {
    static doesAppNeedPin(): any;
    static isDefaultBrowser(): any;
    startAboutWelcomeObserver(): void;
    AboutWelcomeObserver: AboutWelcomeObserver;
    didDestroy(): void;
    /**
     * Handle messages from AboutWelcomeChild.jsm
     *
     * @param {string} type
     * @param {any=} data
     * @param {Browser} the xul:browser rendering the page
     */
    onContentMessage(type: string, data?: any | undefined, browser: any): Promise<any>;
    AWMessageId: any;
    /**
     * @param {{name: string, data?: any}} message
     * @override
     */
    override receiveMessage(message: {
        name: string;
        data?: any;
    }): Promise<any>;
}
export class AboutWelcomeShoppingParent extends AboutWelcomeParent {
}
declare class AboutWelcomeObserver {
    win: mozIDOMWindowProxy;
    terminateReason: string;
    onWindowClose: () => void;
    onTabClose: () => void;
    observe(aSubject: any, aTopic: any, aData: any): void;
    get AWTerminate(): {
        WINDOW_CLOSED: string;
        TAB_CLOSED: string;
        APP_SHUT_DOWN: string;
        ADDRESS_BAR_NAVIGATED: string;
    };
    stop(): void;
}
export {};
