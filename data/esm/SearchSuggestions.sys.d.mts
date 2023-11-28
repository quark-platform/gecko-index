/**
 * SearchSuggestAutoComplete is a service implementation that handles suggest
 * results specific to web searches.
 *
 * @class
 */
export class SearchSuggestAutoComplete extends SuggestAutoComplete {
    classID: any;
    serviceURL: string;
}
/**
 * SuggestAutoComplete is a base class that implements nsIAutoCompleteSearch
 * and can collect results for a given search by using this.#suggestionController.
 * We do it this way since the AutoCompleteController in Mozilla requires a
 * unique XPCOM Service for every search provider, even if the logic for two
 * providers is identical.
 *
 * @class
 */
declare class SuggestAutoComplete {
    /**
     * Notifies the front end of new results.
     *
     * @param {FormAutoCompleteResult} result
     *   Any previous form history result.
     * @private
     */
    private onResultsReady;
    /**
     * Initiates the search result gathering process. Part of
     * nsIAutoCompleteSearch implementation.
     *
     * @param {string} searchString
     *   The user's query string.
     * @param {string} searchParam
     *   unused, "an extra parameter"; even though this parameter and the
     *   next are unused, pass them through in case the form history
     *   service wants them
     * @param {object} previousResult
     *   unused, a client-cached store of the previous generated resultset
     *   for faster searching.
     * @param {object} listener
     *   object implementing nsIAutoCompleteObserver which we notify when
     *   results are ready.
     */
    startSearch(searchString: string, searchParam: string, previousResult: object, listener: object): void;
    /**
     * Ends the search result gathering process. Part of nsIAutoCompleteSearch
     * implementation.
     */
    stopSearch(): void;
    QueryInterface: any;
    #private;
}
export {};
