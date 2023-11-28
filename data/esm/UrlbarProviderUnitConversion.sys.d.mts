export const UrlbarProviderUnitConversion: ProviderUnitConversion;
/**
 * Provide a feature that converts given units.
 */
declare class ProviderUnitConversion {
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
     * Whether the provider should be invoked for the given context.  If this
     * method returns false, the providers manager won't start a query with this
     * provider, to save on resources.
     *
     * @param {UrlbarQueryContext} queryContext
     *   The query context object.
     * @returns {boolean}
     *   Whether this provider should be invoked for the search.
     */
    isActive({ searchString }: UrlbarQueryContext): boolean;
    _activeResult: any;
    /**
     * This is called only for dynamic result types, when the urlbar view updates
     * the view of one of the results of the provider.  It should return an object
     * describing the view update.
     *
     * @param {UrlbarResult} result The result whose view will be updated.
     * @returns {object} An object describing the view update.
     */
    getViewUpdate(result: UrlbarResult): object;
    /**
     * This method is called by the providers manager when a query starts to fetch
     * each extension provider's results.  It fires the resultsRequested event.
     *
     * @param {UrlbarQueryContext} queryContext
     *   The query context object.
     * @param {Function} addCallback
     *   The callback invoked by this method to add each result.
     */
    startQuery(queryContext: UrlbarQueryContext, addCallback: Function): void;
    onEngagement(state: any, queryContext: any, details: any, controller: any): void;
}
export {};
