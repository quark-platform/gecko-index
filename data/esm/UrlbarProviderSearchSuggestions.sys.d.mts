export const UrlbarProviderSearchSuggestions: ProviderSearchSuggestions;
/**
 * Class used to create the provider.
 */
declare class ProviderSearchSuggestions {
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
     * Returns whether the user typed a token alias or restriction token, or is in
     * search mode. We use this value to override the pref to disable search
     * suggestions in the Urlbar.
     *
     * @param {UrlbarQueryContext} queryContext  The query context object.
     * @returns {boolean} True if the user typed a token alias or search
     *   restriction token.
     */
    _isTokenOrRestrictionPresent(queryContext: UrlbarQueryContext): boolean;
    /**
     * Returns whether suggestions in general are allowed for a given query
     * context.  If this returns false, then we shouldn't fetch either form
     * history or remote suggestions.
     *
     * @param {object} queryContext The query context object
     * @returns {boolean} True if suggestions in general are allowed and false if
     *   not.
     */
    _allowSuggestions(queryContext: object): boolean;
    /**
     * Returns whether remote suggestions are allowed for a given query context.
     *
     * @param {object} queryContext The query context object
     * @param {string} [searchString] The effective search string without
     *        restriction tokens or aliases. Defaults to the context searchString.
     * @returns {boolean} True if remote suggestions are allowed and false if not.
     */
    _allowRemoteSuggestions(queryContext: object, searchString?: string): boolean;
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
    _suggestionsController: any;
    /**
     * Returns the menu commands to be shown for trending results.
     *
     * @param {UrlbarResult} result
     *   The result to get menu comands for.
     *
     * @returns {Array} The commands to be shown.
     */
    getResultCommands(result: UrlbarResult): any[];
    onEngagement(state: any, queryContext: any, details: any, controller: any): void;
    _fetchSearchSuggestions(queryContext: any, engine: any, searchString: any, alias: any): Promise<any[]>;
    _suggestionsFetchCompletePromise: any;
    _lastLowResultsSearchSuggestion: any;
    /**
     * @typedef {object} EngineAlias
     *
     * @property {nsISearchEngine} engine
     *   The search engine
     * @property {string} alias
     *   The search engine's alias
     * @property {string} query
     *   The remainder of the search engine string after the alias
     */
    /**
     * Searches for an engine alias given the queryContext.
     *
     * @param {UrlbarQueryContext} queryContext
     *   The query context object.
     * @returns {EngineAlias?} aliasEngine
     *   A representation of the aliased engine. Null if there's no match.
     */
    _maybeGetAlias(queryContext: UrlbarQueryContext): {
        /**
         *   The search engine
         */
        engine: nsISearchEngine;
        /**
         *   The search engine's alias
         */
        alias: string;
        /**
         *   The remainder of the search engine string after the alias
         */
        query: string;
    };
    #private;
}
export {};
