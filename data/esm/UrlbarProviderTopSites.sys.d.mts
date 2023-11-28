export const UrlbarProviderTopSites: ProviderTopSites;
/**
 * A provider that returns the Top Sites shown on about:newtab.
 */
declare class ProviderTopSites {
    _topSitesListeners: any[];
    get PRIORITY(): number;
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
    sponsoredSites: any[];
    onEngagement(state: any, queryContext: any, details: any, controller: any): void;
    /**
     * Adds a listener function that will be called when the top sites change or
     * they are enabled/disabled. This class will hold a weak reference to the
     * listener, so you do not need to unregister it, but you or someone else must
     * keep a strong reference to it to keep it from being immediately garbage
     * collected.
     *
     * @param {Function} callback
     *   The listener function. This class will hold a weak reference to it.
     */
    addTopSitesListener(callback: Function): void;
    _callTopSitesListeners(): void;
}
export {};
