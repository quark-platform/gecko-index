/**
 * An abstraction to talk with the FormHistory database over
 * the message layer. FormHistoryClient will take care of
 * figuring out the most appropriate message manager to use,
 * and what things to send.
 *
 * It is assumed that nsFormAutoComplete will only ever use
 * one instance at a time, and will not attempt to perform more
 * than one search request with the same instance at a time.
 * However, nsFormAutoComplete might call remove() any number of
 * times with the same instance of the client.
 *
 * @param {object} clientInfo
 *        Info required to build the FormHistoryClient
 * @param {Node} clientInfo.formField
 *        A DOM node that we're requesting form history for.
 * @param {string} clientInfo.inputName
 *        The name of the input to do the FormHistory look-up with.
 *        If this is searchbar-history, then formField needs to be null,
 *        otherwise constructing will throw.
 */
export class FormHistoryClient {
    static nextRequestID: number;
    constructor({ formField, inputName }: {
        formField: any;
        inputName: any;
    });
    windowGlobal: any;
    inputName: string;
    id: number;
    SEARCHBAR_ID: string;
    cancelled: boolean;
    getActor(): any;
    /**
     * Query FormHistory for some results.
     *
     * @param {string} searchString
     *        The string to search FormHistory for. See
     *        FormHistory.getAutoCompleteResults.
     * @param {object} params
     *        An Object with search properties. See
     *        FormHistory.getAutoCompleteResults.
     * @param {string} scenarioName
     *        Optional autocompletion scenario name.
     * @param {Function} callback
     *        A callback function that will take a single
     *        argument (the found entries).
     */
    requestAutoCompleteResults(searchString: string, params: object, scenarioName: string, callback: Function): void;
    callback: Function;
    handleAutoCompleteResults(results: any, callback: any): void;
    /**
     * Cancel an in-flight results request. This ensures that the
     * callback that requestAutoCompleteResults was passed is never
     * called from this FormHistoryClient.
     */
    cancel(): void;
    /**
     * Remove an item from FormHistory.
     *
     * @param {string} value
     *
     *        The value to remove for this particular
     *        field.
     *
     * @param {string} guid
     *
     *        The guid for the item being removed.
     */
    remove(value: string, guid: string): void;
    receiveMessage(msg: any): void;
}
/**
 * This autocomplete result combines 3 arrays of entries, fixedEntries and
 * externalEntries.
 * Entries are Form History entries, they can be removed.
 * Fixed entries are "appended" to entries, they are used for datalist items,
 * search suggestions and extra items from integrations.
 * External entries are meant for integrations, like Firefox Relay.
 * Internally entries and fixed entries are kept separated so we can
 * reuse and filter them.
 *
 * @implements {nsIAutoCompleteResult}
 */
export class FormAutoCompleteResult implements nsIAutoCompleteResult {
    constructor(client: any, entries: any, fieldName: any, searchString: any);
    client: any;
    entries: any;
    fieldName: any;
    searchString: string;
    QueryInterface: any;
    externalEntries: any[];
    set fixedEntries(value: any);
    canSearchIncrementally(searchString: any): any;
    incrementalSearch(searchString: any): void;
    /**
     * Remove items from history list that are already present in fixed list.
     * We do this rather than the opposite ( i.e. remove items from fixed list)
     * to reflect the order that is specified in the fixed list.
     */
    removeDuplicateHistoryEntries(): void;
    getAt(index: any): any;
    get wrappedJSObject(): this;
    errorDescription: string;
    get defaultIndex(): 0 | -1;
    get searchResult(): any;
    get matchCount(): any;
    getValueAt(index: any): any;
    getLabelAt(index: any): any;
    getCommentAt(index: any): any;
    getStyleAt(index: any): any;
    getImageAt(_index: any): string;
    getFinalCompleteValueAt(index: any): any;
    isRemovableAt(index: any): any;
    removeValueAt(index: any): void;
    #private;
}
export class FormAutoComplete {
    _prefBranch: any;
    _debug: any;
    _enabled: any;
    classID: any;
    QueryInterface: any;
    fillRequestId: number;
    observer: {
        _self: any;
        QueryInterface: any;
        observe(_subject: any, topic: any, data: any): void;
    };
    get wrappedJSObject(): this;
    log(message: any): void;
    autoCompleteSearchAsync(aInputName: any, aUntrimmedSearchString: any, aField: any, aPreviousResult: any, aAddDataList: any, aListener: any): void;
    getDataListSuggestions(aField: any): any[];
    stopAutoCompleteSearch(): void;
    getAutoCompleteValues(client: any, fieldname: any, searchString: any, scenarioName: any, callback: any): void;
    observe(subject: any, topic: any, data: any): Promise<void>;
    sendFillRequestToFormHistoryParent(input: any, comment: any): Promise<void>;
    #private;
}
