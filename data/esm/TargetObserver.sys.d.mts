/**
 * Observe Firefox tabs as they open and close.
 *
 * "open" fires when a tab opens.
 * "close" fires when a tab closes.
 */
export class TabObserver {
    /**
     * @param {boolean?} [false] registerExisting
     *     Events will be fired for ChromeWIndows and their respective tabs
     *     at the time when the observer is started.
     */
    constructor({ registerExisting }?: boolean | null);
    registerExisting: any;
    onTabOpen({ target }: {
        target: any;
    }): void;
    onTabClose({ target }: {
        target: any;
    }): void;
    start(): Promise<void>;
    stop(): void;
    _registerDOMWindow(win: any): void;
    _unregisterDOMWindow(win: any): void;
    onOpenWindow(xulWindow: any): Promise<void>;
    onCloseWindow(xulWindow: any): void;
    get QueryInterface(): MozQueryInterface;
}
