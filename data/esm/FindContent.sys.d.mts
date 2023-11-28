export class FindContent {
    constructor(docShell: any);
    finder: any;
    get iterator(): any;
    _iterator: any;
    get highlighter(): any;
    _highlighter: any;
    /**
     * findRanges
     *
     * Performs a search which will cache found ranges in `iterator._previousRanges`.  Cached
     * data can then be used by `highlightResults`, `_collectRectData` and `_serializeRangeData`.
     *
     * @param {object} params - the params.
     * @param {string} params.queryphrase - the text to search for.
     * @param {boolean} params.caseSensitive - whether to use case sensitive matches.
     * @param {boolean} params.includeRangeData - whether to collect and return range data.
     * @param {boolean} params.matchDiacritics - whether diacritics must match.
     * @param {boolean} params.searchString - whether to collect and return rect data.
     *
     * @returns {object} that includes:
     *   {number} count - number of results found.
     *   {array} rangeData (if opted) - serialized representation of ranges found.
     *   {array} rectData (if opted) - rect data of ranges found.
     */
    findRanges(params: {
        queryphrase: string;
        caseSensitive: boolean;
        includeRangeData: boolean;
        matchDiacritics: boolean;
        searchString: boolean;
    }): object;
    /**
     * _serializeRangeData
     *
     * Optionally returned by `findRanges`.
     * Collects DOM data from ranges found on the most recent search made by `findRanges`
     * and encodes it into a serializable form.  Useful to extensions for custom UI presentation
     * of search results, eg, getting surrounding context of results.
     *
     * @returns {Array} - serializable range data.
     */
    _serializeRangeData(): any[];
    /**
     * _collectRectData
     *
     * Optionally returned by `findRanges`.
     * Collects rect data of ranges found by most recent search made by `findRanges`.
     * Useful to extensions for custom highlighting of search results.
     *
     * @returns {Array} rectData - serializable rect data.
     */
    _collectRectData(): any[];
    /**
     * highlightResults
     *
     * Highlights range(s) found in previous browser.find.find.
     *
     * @param {object} params - may contain any of the following properties:
     *   all of which are optional:
     *   {number} rangeIndex -
     *            Found range to be highlighted held in API's ranges array for the tabId.
     *            Default highlights all ranges.
     *   {number} tabId - Tab to highlight.  Defaults to the active tab.
     *   {boolean} noScroll - Don't scroll to highlighted item.
     *
     * @returns {string} - a string describing the resulting status of the highlighting,
     *   which will be used as criteria for resolving or rejecting the promise.
     *   This can be:
     *   "Success" - Highlighting succeeded.
     *   "OutOfRange" - The index supplied was out of range.
     *   "NoResults" - There were no search results to highlight.
     */
    highlightResults(params: object): string;
}
