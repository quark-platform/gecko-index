export const UrlbarProviderContextualSearch: ProviderContextualSearch;
/**
 * A provider that returns an option for using the search engine provided
 * by the active view if it utilizes OpenSearch.
 */
declare class ProviderContextualSearch {
    engines: Map<any, any>;
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
     * Starts querying. Extended classes should return a Promise resolved when the
     * provider is done searching AND returning results.
     *
     * @param {UrlbarQueryContext} queryContext The query context object
     * @param {Function} addCallback Callback invoked by the provider to add a new
     *        result. A UrlbarResult should be passed to it.
     */
    startQuery(queryContext: UrlbarQueryContext, addCallback: Function): Promise<void>;
    makeResult({ engine, icon, url, input, hostname, shouldNavigate, shouldAddEngine, }: {
        engine: any;
        icon: any;
        url: any;
        input: any;
        hostname: any;
        shouldNavigate?: boolean;
        shouldAddEngine?: boolean;
    }): any;
    /**
     * This is called when the urlbar view updates the view of one of the results
     * of the provider.  It should return an object describing the view update.
     * See the base UrlbarProvider class for more.
     *
     * @param {UrlbarResult} result The result whose view will be updated.
     * @param {Map} idsByName
     *   A Map from an element's name, as defined by the provider; to its ID in
     *   the DOM, as defined by the browser.
     * @returns {object} An object describing the view update.
     */
    getViewUpdate(result: UrlbarResult, idsByName: Map<any, any>): object;
    onEngagement(state: any, queryContext: any, details: any, controller: any): void;
    #private;
}
export {};
