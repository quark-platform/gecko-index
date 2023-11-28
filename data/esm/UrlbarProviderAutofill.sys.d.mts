export const UrlbarProviderAutofill: ProviderAutofill;
/**
 * Class used to create the provider.
 */
declare class ProviderAutofill {
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
    _autofillData: {
        result: any;
        instance: any;
    };
    _strippedPrefix: any;
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
    /**
     * Cancels a running query.
     *
     * @param {object} queryContext The query context object
     */
    cancelQuery(queryContext: object): void;
    /**
     * Filters hosts by retaining only the ones over the autofill threshold, then
     * sorts them by their frecency, and extracts the one with the highest value.
     *
     * @param {UrlbarQueryContext} queryContext The current queryContext.
     * @param {Array} hosts Array of host names to examine.
     * @returns {Promise<string?>}
     *   Resolved when the filtering is complete. Resolves with the top matching
     *   host, or null if not found.
     */
    getTopHostOverThreshold(queryContext: UrlbarQueryContext, hosts: any[]): Promise<string | null>;
    /**
     * Obtains the query to search for autofill origin results.
     *
     * @param {UrlbarQueryContext} queryContext
     *   The current queryContext.
     * @returns {Array} consisting of the correctly optimized query to search the
     *         database with and an object containing the params to bound.
     */
    _getOriginQuery(queryContext: UrlbarQueryContext): any[];
    /**
     * Obtains the query to search for autoFill url results.
     *
     * @param {UrlbarQueryContext} queryContext
     *   The current queryContext.
     * @returns {Array} consisting of the correctly optimized query to search the
     *         database with and an object containing the params to bound.
     */
    _getUrlQuery(queryContext: UrlbarQueryContext): any[];
    _getAdaptiveHistoryQuery(queryContext: any): (string | {
        queryType: number;
        fullSearchString: any;
        searchString: any;
        strippedPrefix: any;
        useCountThreshold: any;
    })[];
    /**
     * Processes a matched row in the Places database.
     *
     * @param {object} row
     *   The matched row.
     * @param {UrlbarQueryContext} queryContext
     *   The query context.
     * @returns {UrlbarResult} a result generated from the matches row.
     */
    _processRow(row: object, queryContext: UrlbarQueryContext): UrlbarResult;
    _getAutofillResult(queryContext: any): Promise<any>;
    _matchAboutPageForAutofill(queryContext: any): any;
    _matchKnownUrl(queryContext: any): Promise<any>;
}
export {};
