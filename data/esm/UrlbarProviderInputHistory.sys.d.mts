export const UrlbarProviderInputHistory: ProviderInputHistory;
/**
 * Class used to create the provider.
 */
declare class ProviderInputHistory {
    /**
     * Unique name for the provider, used by the context to filter on providers.
     *
     * @returns {string}
     */
    get name(): string;
    /**
     * The type of the provider, must be one of UrlbarUtils.PROVIDER_TYPE.
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
     * @returns {Promise}
     */
    startQuery(queryContext: UrlbarQueryContext, addCallback: Function): Promise<any>;
    onEngagement(state: any, queryContext: any, details: any, controller: any): void;
    /**
     * Obtains the query to search for adaptive results.
     *
     * @param {UrlbarQueryContext} queryContext
     *   The current queryContext.
     * @returns {Array} Contains the optimized query with which to search the
     *  database and an object containing the params to bound.
     */
    _getAdaptiveQuery(queryContext: UrlbarQueryContext): any[];
}
export {};
