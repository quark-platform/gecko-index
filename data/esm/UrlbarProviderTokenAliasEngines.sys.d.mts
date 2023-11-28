export const UrlbarProviderTokenAliasEngines: ProviderTokenAliasEngines;
/**
 * Class used to create the provider.
 */
declare class ProviderTokenAliasEngines {
    _engines: any[];
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
    get PRIORITY(): number;
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
    /**
     * Starts querying.
     *
     * @param {object} queryContext The query context object
     * @param {Function} addCallback Callback invoked by the provider to add a new
     *        result.
     */
    startQuery(queryContext: object, addCallback: Function): Promise<void>;
    /**
     * Gets the provider's priority.
     *
     * @param {UrlbarQueryContext} queryContext The query context object
     * @returns {number} The provider's priority for the given query.
     */
    getPriority(queryContext: UrlbarQueryContext): number;
    /**
     * Cancels a running query.
     *
     * @param {object} queryContext The query context object
     */
    cancelQuery(queryContext: object): void;
    _getAutofillResult(queryContext: any): any;
}
export {};
