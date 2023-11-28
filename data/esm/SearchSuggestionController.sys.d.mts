/**
 *
 * The SearchSuggestionController class fetches search suggestions from two
 * sources: a remote search engine and the user's previous searches stored
 * locally in their profile (also called "form history").
 *
 * The number of each suggestion type is configurable, and the controller will
 * fetch and return both types at the same time. Instances of the class are
 * reusable, but one instance should be used per input. The fetch() method is
 * the main entry point. After creating an instance of the class, fetch() can
 * be called many times to fetch suggestions.
 *
 */
export class SearchSuggestionController {
    /**
     * The maximum length of a value to be stored in search history.
     *
     *  @type {number}
     */
    static SEARCH_HISTORY_MAX_VALUE_LENGTH: number;
    /**
     * Maximum time (ms) to wait before giving up on remote suggestions
     *
     *  @type {number}
     */
    static REMOTE_TIMEOUT_DEFAULT: number;
    /**
     * Determines whether the given engine offers search suggestions.
     *
     * @param {nsISearchEngine} engine - The search engine
     * @param {boolean} fetchTrending - Whether we should fetch trending suggestions.
     * @returns {boolean} True if the engine offers suggestions and false otherwise.
     */
    static engineOffersSuggestions(engine: nsISearchEngine, fetchTrending: boolean): boolean;
    /**
     * Constructor
     *
     * @param {string} [formHistoryParam]
     *   The form history type to use with this controller.
     */
    constructor(formHistoryParam?: string);
    /**
     * The additional parameter used when searching form history.
     *
     * @type {string}
     */
    formHistoryParam: string;
    /**
     * The maximum number of local form history results to return. This limit is
     * only enforced if remote results are also returned.
     *
     * @type {number}
     */
    maxLocalResults: number;
    /**
     * The maximum number of remote search engine results to return.
     * We'll actually only display at most
     * maxRemoteResults - <displayed local results count> remote results.
     *
     * @type {number}
     */
    maxRemoteResults: number;
    /**
     * The last form history result used to improve the performance of
     * subsequent searches. This shouldn't be used for any other purpose as it
     * is never cleared and therefore could be stale.
     *
     * @type {object|null}
     */
    formHistoryResult: object | null;
    /**
     * Gets the firstPartyDomains Map, useful for tests.
     *
     * @returns {Map} firstPartyDomains mapped by engine names.
     */
    get firstPartyDomains(): Map<any, any>;
    /**
     * @typedef {object} FetchResult
     * @property {Array<SearchSuggestionEntry>} local
     *   Contains local search suggestions.
     * @property {Array<SearchSuggestionEntry>} remote
     *   Contains remote search suggestions.
     */
    /**
     * Fetch search suggestions from all of the providers. Fetches in progress
     * will be stopped and results from them will not be provided.
     *
     * @param {string} searchTerm - the term to provide suggestions for
     * @param {boolean} privateMode - whether the request is being made in the
     *                                context of private browsing.
     * @param {nsISearchEngine} engine - search engine for the suggestions.
     * @param {int} userContextId - the userContextId of the selected tab.
     * @param {boolean} restrictToEngine - whether to restrict local historical
     *   suggestions to the ones registered under the given engine.
     * @param {boolean} dedupeRemoteAndLocal - whether to remove remote
     *   suggestions that dupe local suggestions
     * @param {boolean} fetchTrending - Whether we should fetch trending suggestions.
     *
     * @returns {Promise<FetchResult>}
     */
    fetch(searchTerm: string, privateMode: boolean, engine: nsISearchEngine, userContextId?: int, restrictToEngine?: boolean, dedupeRemoteAndLocal?: boolean, fetchTrending?: boolean): Promise<{
        /**
         *   Contains local search suggestions.
         */
        local: Array<SearchSuggestionEntry>;
        /**
         *   Contains remote search suggestions.
         */
        remote: Array<SearchSuggestionEntry>;
    }>;
    /**
     * Stop pending fetches so no results are returned from them.
     *
     * Note: If there was no remote results fetched, the fetching cannot be
     * stopped and local results will still be returned because stopping relies
     * on aborting the XMLHTTPRequest to reject the promise for Promise.all.
     */
    stop(): void;
    #private;
}
/**
 * Represents a search suggestion.
 * TODO: Support other Google tail fields: `a`, `dc`, `i`, `q`, `ansa`,
 * `ansb`, `ansc`, `du`. See bug 1626897 comment 2.
 */
declare class SearchSuggestionEntry {
    /**
     * Creates an entry.
     *
     * @param {string} value
     *   The suggestion as a full-text string. Suitable for display directly to
     *   the user.
     * @param {object} options
     *   An object with the following properties:
     * @param {string} [options.matchPrefix]
     *   Represents the part of a tail suggestion that is already typed. For
     *   example, Google returns "…" as the match prefix to replace
     *   "what time is it in" in a tail suggestion for the query
     *   "what time is it in t".
     * @param {string} [options.tail]
     *   Represents the suggested part of a tail suggestion. For example, Google
     *   might return "toronto" as the tail for the query "what time is it in t".
     * @param {string} [options.icon]
     *   An icon representing the result in a data uri format.
     * @param {string} [options.description]
     *   A description of the result.
     * @param {boolean} [options.trending]
     *   Whether this is a trending suggestion.
     */
    constructor(value: string, { matchPrefix, tail, icon, description, trending }?: {
        matchPrefix?: string;
        tail?: string;
        icon?: string;
        description?: string;
        trending?: boolean;
    });
    get value(): string;
    get matchPrefix(): string;
    get tail(): string;
    get trending(): boolean;
    get icon(): string;
    get description(): string;
    get tailOffsetIndex(): number;
    /**
     * Returns true if `otherEntry` is equivalent to this instance of
     * SearchSuggestionEntry.
     *
     * @param {SearchSuggestionEntry} otherEntry The entry to compare to.
     * @returns {boolean}
     */
    equals(otherEntry: SearchSuggestionEntry): boolean;
    #private;
}
export {};
