export const UrlbarProviderQuickSuggest: ProviderQuickSuggest;
/**
 * A provider that returns a suggested url to the user based on what
 * they have currently typed so they can navigate directly.
 */
declare class ProviderQuickSuggest {
    /**
     * Returns the name of this provider.
     *
     * @returns {string} the name of this provider.
     */
    get name(): string;
    /**
     * The type of the provider.
     *
     * @returns {UrlbarUtils.PROVIDER_TYPE}
     */
    get type(): UrlbarUtils.PROVIDER_TYPE;
    /**
     * @returns {number}
     *   The default score for suggestions that don't otherwise have one. All
     *   suggestions require scores so they can be ranked. Scores are numeric
     *   values in the range [0, 1].
     */
    get DEFAULT_SUGGESTION_SCORE(): number;
    /**
     * @returns {object} An object mapping from mnemonics to scalar names.
     */
    get TELEMETRY_SCALARS(): any;
    /**
     * Whether this provider should be invoked for the given context.
     * If this method returns false, the providers manager won't start a query
     * with this provider, to save on resources.
     *
     * @param {UrlbarQueryContext} queryContext The query context object
     * @returns {boolean} Whether this provider should be invoked for the search.
     */
    isActive(queryContext: UrlbarQueryContext): boolean;
    _trimmedSearchString: any;
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
     * This is called only for dynamic result types, when the urlbar view updates
     * the view of one of the results of the provider.  It should return an object
     * describing the view update.
     *
     * @param {UrlbarResult} result The result whose view will be updated.
     * @returns {object} An object describing the view update.
     */
    getViewUpdate(result: UrlbarResult): object;
    getResultCommands(result: any): any;
    /**
     * Cancels the current query.
     *
     * @param {UrlbarQueryContext} queryContext
     *   The query context.
     */
    cancelQuery(queryContext: UrlbarQueryContext): void;
    /**
     * Fetches Merino suggestions.
     *
     * @param {UrlbarQueryContext} queryContext
     *   The query context.
     * @param {string} searchString
     *   The search string.
     * @returns {Array}
     *   The Merino suggestions or null if there's an error or unexpected
     *   response.
     */
    _fetchMerinoSuggestions(queryContext: UrlbarQueryContext, searchString: string): any[];
    /**
     * Returns whether a given suggestion can be added for a query, assuming the
     * provider itself should be active.
     *
     * @param {object} suggestion
     *   The suggestion to check.
     * @returns {boolean}
     *   Whether the suggestion can be added.
     */
    _canAddSuggestion(suggestion: object): boolean;
    get _test_merino(): any;
    #private;
}
export {};
