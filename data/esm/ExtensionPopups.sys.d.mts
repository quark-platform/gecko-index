export class BasePopup {
    static for(extension: any, window: any): any;
    constructor(extension: any, viewNode: any, popupURL: any, browserStyle: any, fixedWidth?: boolean, blockParser?: boolean);
    extension: any;
    popupURL: any;
    viewNode: any;
    browserStyle: any;
    window: any;
    destroyed: boolean;
    fixedWidth: boolean;
    blockParser: boolean;
    contentReady: Promise<any>;
    _resolveContentReady: (value: any) => void;
    browser: any;
    browserLoaded: Promise<any>;
    browserLoadedDeferred: {
        resolve: (value: any) => void;
        reject: (reason?: any) => void;
    };
    browserReady: any;
    close(): void;
    destroy(): any;
    stack: any;
    destroyBrowser(browser: any, finalize?: boolean): void;
    receiveMessage({ name, data }: {
        name: any;
        data: any;
    }): void;
    get DESTROY_EVENT(): void;
    get STYLESHEETS(): any[];
    get panel(): any;
    dimensions: any;
    handleEvent(event: any): void;
    createBrowser(viewNode: any, popupURL?: any): any;
    unblockParser(): void;
    resizeBrowser({ width, height, detail }: {
        width: any;
        height: any;
        detail: any;
    }): void;
    lastCalculatedInViewHeight: number;
    setBackground(background: any): void;
    background: any;
}
export namespace BasePopup {
    let instances: any;
}
export class PanelPopup extends BasePopup {
    constructor(extension: any, document: any, popupURL: any, browserStyle: any);
    get DESTROY_EVENT(): string;
    destroy(): void;
    closePopup(): void;
}
export class ViewPopup extends BasePopup {
    constructor(extension: any, window: any, popupURL: any, browserStyle: any, fixedWidth: any, blockParser: any);
    ignoreResizes: boolean;
    attached: boolean;
    shown: boolean;
    tempPanel: any;
    tempBrowser: any;
    /**
     * Attaches the pre-loaded browser to the given view node, and reserves a
     * promise which resolves when the browser is ready.
     *
     * @param {Element} viewNode
     *        The node to attach the browser to.
     * @returns {Promise<boolean>}
     *        Resolves when the browser is ready. Resolves to `false` if the
     *        browser was destroyed before it was fully loaded, and the popup
     *        should be closed, or `true` otherwise.
     */
    attach(viewNode: Element): Promise<boolean>;
    viewHeight: number;
    extraHeight: {
        bottom: number;
        top: number;
    };
    removeTempPanel(): void;
    get DESTROY_EVENT(): string;
    closePopup(): void;
}
