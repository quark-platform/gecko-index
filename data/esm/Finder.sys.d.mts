export function Finder(docShell: any): void;
export class Finder {
    constructor(docShell: any);
    _fastFind: any;
    _currentFoundRange: any;
    _docShell: any;
    _listeners: any[];
    _previousLink: any;
    _searchString: any;
    _highlighter: any;
    get iterator(): any;
    _iterator: any;
    destroy(): void;
    listeners: any[];
    addResultListener(aListener: any): void;
    removeResultListener(aListener: any): void;
    _setResults(options: any, mode: any): void;
    set clipboardSearchString(aSearchString: string);
    get clipboardSearchString(): string;
    get searchString(): any;
    set caseSensitive(aSensitive: any);
    set matchDiacritics(aMatchDiacritics: any);
    set entireWord(aEntireWord: any);
    get highlighter(): any;
    get matchesCountLimit(): any;
    _matchesCountLimit: any;
    _lastFindResult: null;
    /**
     * Used for normal search operations, highlights the first match.
     * This method is used only for compatibility with non-remote browsers.
     *
     * @param aSearchString String to search for.
     * @param aLinksOnly Only consider nodes that are links for the search.
     * @param aDrawOutline Puts an outline around matched links.
     */
    fastFind(aSearchString: any, aLinksOnly: any, aDrawOutline: any): any;
    /**
     * Repeat the previous search. Should only be called after a previous
     * call to Finder.fastFind.
     * This method is used only for compatibility with non-remote browsers.
     *
     * @param aSearchString String to search for.
     * @param aFindBackwards Controls the search direction:
     *    true: before current match, false: after current match.
     * @param aLinksOnly Only consider nodes that are links for the search.
     * @param aDrawOutline Puts an outline around matched links.
     */
    findAgain(aSearchString: any, aFindBackwards: any, aLinksOnly: any, aDrawOutline: any): any;
    /**
     * Used for normal search operations, highlights the first or
     * subsequent match depending on the mode.
     *
     * Options are:
     *  searchString String to search for.
     *  findAgain True if this a find again operation.
     *  mode Search mode from nsITypeAheadFind.
     *  linksOnly Only consider nodes that are links for the search.
     *  drawOutline Puts an outline around matched links.
     *  useSubFrames True to iterate over subframes.
     *  caseSensitive True for case sensitive searching.
     *  entireWord True to match entire words.
     *  matchDiacritics True to match diacritics.
     */
    find(options: any): Promise<any>;
    /**
     * Forcibly set the search string of the find clipboard to the currently
     * selected text in the window, on supported platforms (i.e. OSX).
     */
    setSearchStringToSelection(): {
        focusedChildBrowserContextId: any;
        selectedText: string;
    } | {
        selectedText: any;
        focusedChildBrowserContextId?: undefined;
    };
    highlight(aHighlight: any, aWord: any, aLinksOnly: any, aUseSubFrames?: boolean): Promise<any>;
    updateHighlightAndMatchCount(aArgs: any): Promise<any>;
    getInitialSelection(): void;
    getActiveSelectionText(): {
        focusedChildBrowserContextId: any;
        selectedText: string;
    } | {
        selectedText: any;
        focusedChildBrowserContextId?: undefined;
    };
    enableSelection(): void;
    removeSelection(keepHighlight: any): void;
    focusContent(): void;
    onFindbarClose(): void;
    onFindbarOpen(): void;
    onModalHighlightChange(useModalHighlight: any): void;
    onHighlightAllChange(highlightAll: any): void;
    keyPress(aEvent: any): void;
    _notifyMatchesCount(aWord: any, result?: any): any;
    _currentMatchesCountResult: {
        total: number;
        current: number;
        _currentFound: boolean;
    };
    requestMatchesCount(aWord: any, aLinksOnly: any, aUseSubFrames?: boolean): Promise<any>;
    onIteratorRangeFound(range: any): void;
    onIteratorReset(): void;
    onIteratorRestart({ word, linksOnly, useSubFrames }: {
        word: any;
        linksOnly: any;
        useSubFrames: any;
    }): void;
    onIteratorStart(): void;
    _getWindow(): any;
    /**
     * Get the bounding selection rect in CSS px relative to the origin of the
     * top-level content document.
     */
    _getResultRect(): any;
    _outlineLink(aDrawOutline: any): void;
    _tmpOutline: any;
    _tmpOutlineOffset: any;
    _restoreOriginalOutline(): void;
    _getSelectionController(aWindow: any): any;
    onLocationChange(aWebProgress: any, aRequest: any, aLocation: any, aFlags: any): void;
    QueryInterface: any;
}
export namespace Finder {
    function isFindbarVisible(docShell: any): boolean;
}
export function GetClipboardSearchString(aLoadContext: any): string;
export function SetClipboardSearchString(aSearchString: any): void;
