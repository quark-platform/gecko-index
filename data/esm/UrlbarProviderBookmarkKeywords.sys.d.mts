export const UrlbarProviderBookmarkKeywords: ProviderBookmarkKeywords;
/**
 * Class used to create the provider.
 */
declare class ProviderBookmarkKeywords {
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
     * Starts querying.
     *
     * @param {object} queryContext The query context object
     * @param {Function} addCallback Callback invoked by the provider to add a new
     *        result.
     */
    startQuery(queryContext: object, addCallback: Function): Promise<void>;
}
export {};
