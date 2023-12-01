/**
 * See nsIAutoCompleteSimpleSearch
 */
export class AutoCompleteSimpleSearch {
    classID: unknown;
    QueryInterface: MozQueryInterface;
    _result: any;
    /**
     * See nsIAutoCompleteSimpleSearch
     */
    overrideNextResult(result: any): void;
    /**
     * See nsIAutoCompleteSearch
     */
    startSearch(searchString: any, searchParam: any, previousResult: any, listener: any): void;
    /**
     * See nsIAutoCompleteSearch
     */
    stopSearch(): void;
}
