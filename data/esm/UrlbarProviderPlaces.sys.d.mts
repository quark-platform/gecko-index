export const UrlbarProviderPlaces: ProviderPlaces;
/**
 * Class used to create the provider.
 */
declare class ProviderPlaces {
    _promiseDatabase: any;
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
     * Gets a Sqlite database handle.
     *
     * @returns {Promise<OpenedConnection>}
     *   A connection to the Sqlite database handle (according to {@link Sqlite.sys.mjs}).
     * @throws A javascript exception
     */
    getDatabaseHandle(): Promise<OpenedConnection>;
    _currentSearch: Search;
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
     * Properly cleans up when searching is completed.
     *
     * @param {boolean} [notify]
     *        Indicates if we should notify the AutoComplete listener about our
     *        results or not. Default false.
     */
    finishSearch(notify?: boolean): void;
    _lastLowResultsSearchSuggestion: any;
    onEngagement(state: any, queryContext: any, details: any, controller: any): void;
    _startLegacyQuery(queryContext: any, callback: any): void;
    _deferred: any;
    _startSearch(searchString: any, listener: any, queryContext: any): void;
}
/**
 * Manages a single instance of a Places search.
 *
 * @param {UrlbarQueryContext} queryContext
 *   The query context.
 * @param {Function} listener
 *   Called as: `listener(matches, searchOngoing)`
 * @param {PlacesProvider} provider
 *   The singleton that contains Places information
 */
declare function Search(queryContext: UrlbarQueryContext, listener: Function, provider: PlacesProvider): void;
declare class Search {
    /**
     * Manages a single instance of a Places search.
     *
     * @param {UrlbarQueryContext} queryContext
     *   The query context.
     * @param {Function} listener
     *   Called as: `listener(matches, searchOngoing)`
     * @param {PlacesProvider} provider
     *   The singleton that contains Places information
     */
    constructor(queryContext: UrlbarQueryContext, listener: Function, provider: PlacesProvider);
    _originalSearchString: any;
    _trimmedOriginalSearchString: any;
    _searchString: any;
    _strippedPrefix: any;
    _matchBehavior: any;
    _behavior: any;
    _inPrivateWindow: any;
    _prohibitAutoFill: boolean;
    _maxResults: any;
    _userContextId: any;
    _currentPage: any;
    _searchModeEngine: any;
    _searchMode: any;
    _filterOnHost: any;
    _leadingRestrictionToken: any;
    _searchTokens: any;
    _heuristicToken: any;
    _listener: Function;
    _provider: PlacesProvider;
    _matches: any[];
    _usedURLs: any[];
    _usedPlaceIds: Set<any>;
    _counts: {};
    /**
     * Enables the desired AutoComplete behavior.
     *
     * @param {string} type
     *        The behavior type to set.
     */
    setBehavior(type: string): void;
    /**
     * Determines if the specified AutoComplete behavior is set.
     *
     * @param {string} type
     *        The behavior type to test for.
     * @returns {boolean} true if the behavior is set, false otherwise.
     */
    hasBehavior(type: string): boolean;
    /**
     * Given an array of tokens, this function determines which query should be
     * ran.  It also removes any special search tokens.
     *
     * @param {Array} tokens
     *        An array of search tokens.
     * @returns {Array} A new, filtered array of tokens.
     */
    filterTokens(tokens: any[]): any[];
    /**
     * Stop this search.
     * After invoking this method, we won't run any more searches or heuristics,
     * and no new matches may be added to the current result.
     */
    stop(): void;
    _notifyDelaysCount: number;
    pending: boolean;
    /**
     * Execute the search and populate results.
     *
     * @param {mozIStorageAsyncConnection} conn
     *        The Sqlite connection.
     */
    execute(conn: mozIStorageAsyncConnection): Promise<void>;
    interrupt: () => void;
    _firstTokenIsKeyword: any;
    _checkIfFirstTokenIsKeyword(): Promise<boolean>;
    _onResultRow(row: any, cancel: any): void;
    /**
     * Maybe restyle a SERP in history as a search-type result. To do this,
     * we extract the search term from the SERP in history then generate a search
     * URL with that search term. We restyle the SERP in history if its query
     * parameters are a subset of those of the generated SERP. We check for a
     * subset instead of exact equivalence since the generated URL may contain
     * attribution parameters while a SERP in history from an organic search would
     * not. We don't allow extra params in the history URL since they might
     * indicate the search is not a first-page web SERP (as opposed to a image or
     * other non-web SERP).
     *
     * Note: We will mistakenly dedupe SERPs for engines that have the same
     *   hostname as another engine. One example is if the user installed a
     *   Google Image Search engine. That engine's search URLs might only be
     *   distinguished by query params from search URLs from the default Google
     *   engine.
     *
     * @param {object} match
     *   The match to maybe restyle.
     * @returns {boolean} True if the match can be restyled, false otherwise.
     */
    _maybeRestyleSearchMatch(match: object): boolean;
    _addMatch(match: any): void;
    /**
     * @typedef {object} MatchPositionInformation
     * @property {number} index
     *   The index the match should take in the results. Return -1 if the match
     *   should be discarded.
     * @property {boolean} replace
     *   True if the match should replace the result already at
     *   matchPosition.index.
     */
    /**
     * Check for duplicates and either discard the duplicate or replace the
     * original match, in case the new one is more specific. For example,
     * a Remote Tab wins over History, and a Switch to Tab wins over a Remote Tab.
     * We must check both id and url for duplication, because keywords may change
     * the url by replacing the %s placeholder.
     *
     * @param {object} match
     *   The match to insert.
     * @returns {MatchPositionInformation}
     */
    _getInsertIndexForMatch(match: object): {
        /**
         *   The index the match should take in the results. Return -1 if the match
         *   should be discarded.
         */
        index: number;
        /**
         *   True if the match should replace the result already at
         *   matchPosition.index.
         */
        replace: boolean;
    };
    _groups: any[];
    _makeGroups(resultGroup: any, maxResultCount: any): void;
    _addFilteredQueryMatch(row: any): void;
    /**
     * @returns {string}
     * A string consisting of the search query to be used based on the previously
     * set urlbar suggestion preferences.
     */
    get _suggestionPrefQuery(): string;
    get _emptySearchDefaultBehavior(): any;
    /**
     * If the user-provided string starts with a keyword that gave a heuristic
     * result, this will strip it.
     *
     * @returns {string} The filtered search string.
     */
    get _keywordFilteredSearchString(): string;
    /**
     * Obtains the search query to be used based on the previously set search
     * preferences (accessed by this.hasBehavior).
     *
     * @returns {Array}
     *   An array consisting of the correctly optimized query to search the
     *   database with and an object containing the params to bound.
     */
    get _searchQuery(): any[];
    /**
     * Obtains the query to search for switch-to-tab entries.
     *
     * @returns {Array}
     *   An array consisting of the correctly optimized query to search the
     *   database with and an object containing the params to bound.
     */
    get _switchToTabQuery(): any[];
    _notifyTimer: null;
    notifyResult(searchOngoing: any): void;
}
export {};
