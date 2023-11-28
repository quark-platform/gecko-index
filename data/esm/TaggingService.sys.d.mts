/**
 * The Places Tagging Service
 */
export function TaggingService(): void;
export class TaggingService {
    handlePlacesEvents: any;
    _createTag: (aTagName: any, aSource: any) => any;
    _getItemIdForTaggedURI: (aURI: any, aTagName: any) => any;
    _getItemIdForTag: (aTagName: any) => number;
    /**
     * Makes a proper array of tag objects like  { id: number, name: string }.
     *
     * @param aTags
     *        Array of tags.  Entries can be tag names or concrete item id.
     * @param trim [optional]
     *        Whether to trim passed-in named tags. Defaults to false.
     * @return Array of tag objects like { id: number, name: string }.
     *
     * @throws Cr.NS_ERROR_INVALID_ARG if any element of the input array is not
     *         a valid tag.
     */
    _convertInputMixedTagsArray(aTags: any, trim?: boolean): any;
    tagURI: (aURI: any, aTags: any, aSource: any) => void;
    _removeTagIfEmpty: (aTagId: any, aSource: any) => void;
    untagURI: (aURI: any, aTags: any, aSource: any) => void;
    getTagsForURI: (aURI: any) => any[];
    __tagFolders: null;
    get _tagFolders(): any;
    observe: (aSubject: any, aTopic: any, aData: any) => void;
    _getTaggedItemIdsIfUnbookmarkedURI: (url: any) => any[];
    classID: any;
    QueryInterface: any;
}
export function TagAutoCompleteSearch(): void;
export class TagAutoCompleteSearch {
    startSearch(searchString: any, searchParam: any, previousResult: any, listener: any): void;
    _search: TagSearch;
    /**
     * Stop an asynchronous search that is in progress
     */
    stopSearch(): void;
    classID: any;
    QueryInterface: any;
}
/**
 * Class tracking a single tag autocomplete search.
 */
declare class TagSearch {
    constructor(searchString: any, autocompleteSearch: any, listener: any);
    _result: any;
    _autocompleteSearch: any;
    _listener: any;
    start(): Promise<void>;
    cancel(): void;
    _canceled: boolean;
    _notifyResult(searchOngoing: any): void;
}
export {};
