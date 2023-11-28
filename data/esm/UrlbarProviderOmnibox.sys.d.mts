export const UrlbarProviderOmnibox: ProviderOmnibox;
/**
 * This provider handles results returned by extensions using the WebExtensions
 * Omnibox API. If the user types a registered keyword, we send subsequent
 * keystrokes to the extension.
 */
declare class ProviderOmnibox {
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
    isActive(queryContext: UrlbarQueryContext): boolean;
    /**
     * Gets the provider's priority.
     *
     * @param {UrlbarQueryContext} queryContext
     *   The query context object.
     * @returns {number}
     *   The provider's priority for the given query.
     */
    getPriority(queryContext: UrlbarQueryContext): number;
    /**
     * This method is called by the providers manager when a query starts to fetch
     * each extension provider's results.  It fires the resultsRequested event.
     *
     * @param {UrlbarQueryContext} queryContext
     *   The query context object.
     * @param {Function} addCallback
     *   The callback invoked by this method to add each result.
     */
    startQuery(queryContext: UrlbarQueryContext, addCallback: Function): Promise<void>;
    _resultsPromise: any;
    onEngagement(state: any, queryContext: any, details: any, controller: any): void;
}
export {};
