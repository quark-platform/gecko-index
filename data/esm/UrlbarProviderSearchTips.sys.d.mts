export const UrlbarProviderSearchTips: ProviderSearchTips;
/**
 * A provider that sometimes returns a tip result when the user visits the
 * newtab page or their default search engine's homepage.
 */
declare class ProviderSearchTips {
    disableTipsForCurrentSession: boolean;
    showedTipTypeInCurrentEngagement: string;
    _seenWindows: WeakSet<WeakKey>;
    /**
     * Enum of the types of search tips.
     *
     * @returns {{ NONE: string; ONBOARD: string; PERSIST: string; REDIRECT: string; }}
     */
    get TIP_TYPE(): {
        NONE: string;
        ONBOARD: string;
        PERSIST: string;
        REDIRECT: string;
    };
    get PRIORITY(): any;
    get SHOW_PERSIST_TIP_DELAY_MS(): number;
    /**
     * Unique name for the provider, used by the context to filter on providers.
     * Not using a unique name will cause the newest registration to win.
     *
     * @returns {string}
     */
    get name(): string;
    /**
     * The type of the provider.
     *
     * @returns {UrlbarUtils.PROVIDER_TYPE}
     */
    get type(): UrlbarUtils.PROVIDER_TYPE;
    /**
     * Whether this provider should be invoked for the given context.
     * If this method returns false, the providers manager won't start a query
     * with this provider, to save on resources.
     *
     * @param {UrlbarQueryContext} queryContext The query context object
     * @returns {boolean} Whether this provider should be invoked for the search.
     */
    isActive(queryContext: UrlbarQueryContext): boolean;
    /**
     * Gets the provider's priority.
     *
     * @param {UrlbarQueryContext} queryContext The query context object
     * @returns {number} The provider's priority for the given query.
     */
    getPriority(queryContext: UrlbarQueryContext): number;
    /**
     * Starts querying. Extended classes should return a Promise resolved when the
     * provider is done searching AND returning results.
     *
     * @param {UrlbarQueryContext} queryContext The query context object
     * @param {Function} addCallback Callback invoked by the provider to add a new
     *        result. A UrlbarResult should be passed to it.
     * @returns {Promise}
     */
    startQuery(queryContext: UrlbarQueryContext, addCallback: Function): Promise<any>;
    currentTip: any;
    onEngagement(state: any, queryContext: any, details: any, controller: any): void;
    /**
     * Called from `onLocationChange` in browser.js.
     *
     * @param {window} window
     *  The browser window where the location change happened.
     * @param {nsIURI} uri
     *  The URI being navigated to.
     * @param {nsIURI | null} originalUri
     *  The original URI being navigated to.
     * @param {nsIWebProgress} webProgress
     *   The progress object, which can have event listeners added to it.
     * @param {number} flags
     *   Load flags. See nsIWebProgressListener.idl for possible values.
     */
    onLocationChange(window: Window & typeof globalThis, uri: nsIURI, originalUri: nsIURI | null, webProgress: nsIWebProgress, flags: number): Promise<void>;
    _onLocationChangeInstance: {};
    /**
     * Determines whether we should show a tip for the current tab, sets
     * this.currentTip, and starts a search on an empty string.
     *
     * @param {string} urlStr
     *   The URL of the page being loaded, in string form.
     * @param {nsIURI | null} originalUri
     *   The original URI of the page being loaded.
     * @param {window} window
     *   The browser window in which the tip is being displayed.
     */
    _maybeShowTipForUrl(urlStr: string, originalUri: nsIURI | null, window: Window & typeof globalThis): Promise<void>;
    _maybeShowTipForUrlInstance: {};
    #private;
}
export {};
