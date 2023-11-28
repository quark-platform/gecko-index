export const UrlbarProviderHeuristicFallback: ProviderHeuristicFallback;
/**
 * Class used to create the provider.
 */
declare class ProviderHeuristicFallback {
    /**
     * Returns the name of this provider.
     *
     * @returns {string} the name of this provider.
     */
    get name(): string;
    /**
     * Returns the type of this provider.
     *
     * @returns {integer} one of the types from UrlbarUtils.PROVIDER_TYPE.*
     */
    get type(): integer;
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
     * Starts querying.
     *
     * @param {object} queryContext The query context object
     * @param {Function} addCallback Callback invoked by the provider to add a new
     *        result.
     * @returns {Promise} resolved when the query stops.
     */
    startQuery(queryContext: object, addCallback: Function): Promise<any>;
    _matchUnknownUrl(queryContext: any): any;
    _searchModeKeywordResult(queryContext: any): any;
    _engineSearchResult(queryContext: any, keyword?: any): any;
}
export {};
