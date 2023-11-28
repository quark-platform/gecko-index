/**
 * See nsIAutoCompleteSimpleSearch
 */
export class AutoCompleteSimpleSearch {
    classID: any;
    QueryInterface: any;
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
