/**
 * Target for a local tab or a remoted frame.
 */
export class TabTarget {
    /**
     * @param {TargetList} targetList
     * @param {BrowserElement} browser
     */
    constructor(targetList: TargetList, browser: BrowserElement);
    browser: BrowserElement;
    id: any;
    path: string;
    destructor(): void;
    get browserContextId(): number;
    get browsingContext(): any;
    get mm(): any;
    get window(): any;
    get tab(): any;
    /**
     * Determines if the content browser remains attached
     * to its parent chrome window.
     *
     * We determine this by checking if the <browser> element
     * is still attached to the DOM.
     *
     * @returns {boolean}
     *     True if target's browser is still attached,
     *     false if it has been disconnected.
     */
    get closed(): boolean;
    get description(): string;
    get frontendURL(): any;
    /** @returns {Promise<string|null>} */
    get faviconUrl(): Promise<string>;
    get title(): any;
    get type(): string;
    get url(): any;
    get wsDebuggerURL(): string;
    toString(): string;
    toJSON(): {
        description: string;
        devtoolsFrontendUrl: any;
        faviconUrl: string;
        id: any;
        type: string;
        url: any;
        webSocketDebuggerUrl: string;
    };
    observe(subject: any, topic: any, data: any): void;
    get QueryInterface(): MozQueryInterface;
}
