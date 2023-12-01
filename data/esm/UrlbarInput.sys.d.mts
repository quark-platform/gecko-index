/**
 * Implements the text input part of the address bar UI.
 */
export class UrlbarInput {
    /**
     * @param {object} options
     *   The initial options for UrlbarInput.
     * @param {object} options.textbox
     *   The container element.
     */
    constructor(options?: {
        textbox: object;
    });
    textbox: any;
    window: any;
    isPrivate: any;
    document: any;
    panel: any;
    searchButton: any;
    controller: any;
    view: any;
    valueIsTyped: boolean;
    formHistoryName: string;
    lastQueryContextPromise: Promise<void>;
    _actionOverrideKeyCount: number;
    _autofillPlaceholder: {
        value: string;
        type: "origin" | "url" | "adaptive";
        adaptiveHistoryInput: string;
        selectionStart: integer;
        selectionEnd: integer;
    };
    _lastSearchString: string;
    _lastValidURLStr: string;
    _valueOnLastSearch: string;
    _resultForCurrentValue: any;
    _suppressStartQuery: boolean;
    _suppressPrimaryAdjustment: boolean;
    _untrimmedValue: string;
    _searchModesByBrowser: WeakMap<WeakKey, any>;
    QueryInterface: MozQueryInterface;
    _enableAutofillPlaceholder: boolean;
    inputField: any;
    _inputContainer: any;
    _identityBox: any;
    _searchModeIndicator: any;
    _searchModeIndicatorTitle: any;
    _searchModeIndicatorClose: any;
    _searchModeLabel: any;
    _toolbar: any;
    eventBufferer: any;
    _inputFieldEvents: string[];
    _compositionState: any;
    _compositionClosedPopup: boolean;
    /**
     * Applies styling to the text in the urlbar input, depending on the text.
     */
    formatValue(): void;
    focus(): void;
    select(): void;
    setSelectionRange(selectionStart: any, selectionEnd: any): void;
    /**
     * Sets the URI to display in the location bar.
     *
     * @param {nsIURI} [uri]
     *        If this is unspecified, the current URI will be used.
     * @param {boolean} [dueToTabSwitch]
     *        True if this is being called due to switching tabs and false
     *        otherwise.
     * @param {boolean} [dueToSessionRestore]
     *        True if this is being called due to session restore and false
     *        otherwise.
     * @param {boolean} [dontShowSearchTerms]
     *        True if userTypedValue should not be overidden by search terms
     *        and false otherwise.
     * @param {boolean} [isSameDocument]
     *        True if the caller of setURI loaded a new document and false
     *        otherwise (e.g. the location change was from an anchor scroll
     *        or a pushState event).
     */
    setURI(uri?: nsIURI, dueToTabSwitch?: boolean, dueToSessionRestore?: boolean, dontShowSearchTerms?: boolean, isSameDocument?: boolean): void;
    set value(val: any);
    get value(): any;
    set searchMode(searchMode: any);
    get searchMode(): any;
    /**
     * Converts an internal URI (e.g. a URI with a username or password) into one
     * which we can expose to the user.
     *
     * @param {nsIURI} uri
     *   The URI to be converted
     * @returns {nsIURI}
     *   The converted, exposable URI
     */
    makeURIReadable(uri: nsIURI): nsIURI;
    /**
     * Passes DOM events to the _on_<event type> methods.
     *
     * @param {Event} event The event to handle.
     */
    handleEvent(event: Event): void;
    /**
     * Handles an event which might open text or a URL. If the event requires
     * doing so, handleCommand forwards it to handleNavigation.
     *
     * @param {Event} [event] The event triggering the open.
     */
    handleCommand(event?: Event): void;
    /**
     * @typedef {object} HandleNavigationOneOffParams
     *
     * @property {string} openWhere
     *   Where we expect the result to be opened.
     * @property {object} openParams
     *   The parameters related to where the result will be opened.
     * @property {Node} engine
     *   The selected one-off's engine.
     */
    /**
     * Handles an event which would cause a URL or text to be opened.
     *
     * @param {object} [options]
     *   Options for the navigation.
     * @param {Event} [options.event]
     *   The event triggering the open.
     * @param {HandleNavigationOneOffParams} [options.oneOffParams]
     *   Optional. Pass if this navigation was triggered by a one-off. Practically
     *   speaking, UrlbarSearchOneOffs passes this when the user holds certain key
     *   modifiers while picking a one-off. In those cases, we do an immediate
     *   search using the one-off's engine instead of entering search mode.
     * @param {object} [options.triggeringPrincipal]
     *   The principal that the action was triggered from.
     */
    handleNavigation({ event, oneOffParams, triggeringPrincipal }?: {
        event?: Event;
        oneOffParams?: {
            /**
             *   Where we expect the result to be opened.
             */
            openWhere: string;
            /**
             *   The parameters related to where the result will be opened.
             */
            openParams: object;
            /**
             *   The selected one-off's engine.
             */
            engine: Node;
        };
        triggeringPrincipal?: object;
    }): void;
    handleRevert(dontShowSearchTerms?: boolean): void;
    maybeHandleRevertFromPopup(anchorElement: any): void;
    /**
     * Called by inputs that resemble search boxes, but actually hand input off
     * to the Urlbar. We use these fake inputs on the new tab page and
     * about:privatebrowsing.
     *
     * @param {string} searchString
     *   The search string to use.
     * @param {nsISearchEngine} [searchEngine]
     *   Optional. If included and the right prefs are set, we will enter search
     *   mode when handing `searchString` from the fake input to the Urlbar.
     * @param {string} newtabSessionId
     *   Optional. The id of the newtab session that handed off this search.
     *
     */
    handoff(searchString: string, searchEngine?: nsISearchEngine, newtabSessionId: string): void;
    _isHandoffSession: boolean;
    _handoffSession: string;
    /**
     * Called when an element of the view is picked.
     *
     * @param {Element} element The element that was picked.
     * @param {Event} event The event that picked the element.
     */
    pickElement(element: Element, event: Event): void;
    /**
     * Called when a result is picked.
     *
     * @param {UrlbarResult} result The result that was picked.
     * @param {Event} event The event that picked the result.
     * @param {DOMElement} element the picked view element, if available.
     * @param {object} browser The browser to use for the load.
     */
    pickResult(result: UrlbarResult, event: Event, element?: DOMElement, browser?: object): void;
    /**
     * Called by the view when moving through results with the keyboard, and when
     * picking a result.  This sets the input value to the value of the result and
     * invalidates the pageproxystate.  It also sets the result that is associated
     * with the current input value.  If you need to set this result but don't
     * want to also set the input value, then use setResultForCurrentValue.
     *
     * @param {object} options
     *   Options.
     * @param {UrlbarResult} [options.result]
     *   The result that was selected or picked, null if no result was selected.
     * @param {Event} [options.event]
     *   The event that picked the result.
     * @param {string} [options.urlOverride]
     *   Normally the URL is taken from `result.payload.url`, but if `urlOverride`
     *   is specified, it's used instead.
     * @returns {boolean}
     *   Whether the value has been canonized
     */
    setValueFromResult({ result, event, urlOverride }?: {
        result?: UrlbarResult;
        event?: Event;
        urlOverride?: string;
    }): boolean;
    /**
     * The input keeps track of the result associated with the current input
     * value.  This result can be set by calling either setValueFromResult or this
     * method.  Use this method when you need to set the result without also
     * setting the input value.  This can be the case when either the selection is
     * cleared and no other result becomes selected, or when the result is the
     * heuristic and we don't want to modify the value the user is typing.
     *
     * @param {UrlbarResult} result
     *   The result to associate with the current input value.
     */
    setResultForCurrentValue(result: UrlbarResult): void;
    /**
     * Called by the controller when the first result of a new search is received.
     * If it's an autofill result, then it may need to be autofilled, subject to a
     * few restrictions.
     *
     * @param {UrlbarResult} result
     *   The first result.
     */
    _autofillFirstResult(result: UrlbarResult): void;
    /**
     * Invoked by the controller when the first result is received.
     *
     * @param {UrlbarResult} firstResult
     *   The first result received.
     * @returns {boolean}
     *   True if this method canceled the query and started a new one.  False
     *   otherwise.
     */
    onFirstResult(firstResult: UrlbarResult): boolean;
    /**
     * Starts a query based on the current input value.
     *
     * @param {object} [options]
     *   Object options
     * @param {boolean} [options.allowAutofill]
     *   Whether or not to allow providers to include autofill results.
     * @param {boolean} [options.autofillIgnoresSelection]
     *   Normally we autofill only if the cursor is at the end of the string,
     *   if this is set we'll autofill regardless of selection.
     * @param {string} [options.searchString]
     *   The search string.  If not given, the current input value is used.
     *   Otherwise, the current input value must start with this value.
     * @param {boolean} [options.resetSearchState]
     *   If this is the first search of a user interaction with the input, set
     *   this to true (the default) so that search-related state from the previous
     *   interaction doesn't interfere with the new interaction.  Otherwise set it
     *   to false so that state is maintained during a single interaction.  The
     *   intended use for this parameter is that it should be set to false when
     *   this method is called due to input events.
     * @param {event} [options.event]
     *   The user-generated event that triggered the query, if any.  If given, we
     *   will record engagement event telemetry for the query.
     */
    startQuery({ allowAutofill, autofillIgnoresSelection, searchString, resetSearchState, event, }?: {
        allowAutofill?: boolean;
        autofillIgnoresSelection?: boolean;
        searchString?: string;
        resetSearchState?: boolean;
        event?: Event;
    }): void;
    _autofillIgnoresSelection: boolean;
    /**
     * Sets the input's value, starts a search, and opens the view.
     *
     * @param {string} value
     *   The input's value will be set to this value, and the search will
     *   use it as its query.
     * @param {object} [options]
     *   Object options
     * @param {nsISearchEngine} [options.searchEngine]
     *   Search engine to use when the search is using a known alias.
     * @param {UrlbarUtils.SEARCH_MODE_ENTRY} [options.searchModeEntry]
     *   If provided, we will record this parameter as the search mode entry point
     *   in Telemetry. Consumers should provide this if they expect their call
     *   to enter search mode.
     * @param {boolean} [options.focus]
     *   If true, the urlbar will be focused.  If false, the focus will remain
     *   unchanged.
     */
    search(value: string, { searchEngine, searchModeEntry, focus }?: {
        searchEngine?: nsISearchEngine;
        searchModeEntry?: UrlbarUtils.SEARCH_MODE_ENTRY;
        focus?: boolean;
    }): void;
    _revertOnBlurValue: string;
    selectionStart: number;
    /**
     * Focus without the focus styles.
     * This is used by Activity Stream and about:privatebrowsing for search hand-off.
     */
    setHiddenFocus(): void;
    _hideFocus: boolean;
    /**
     * Restore focus styles.
     * This is used by Activity Stream and about:privatebrowsing for search hand-off.
     *
     * @param {Browser} forceSuppressFocusBorder
     *   Set true to suppress-focus-border attribute if this flag is true.
     */
    removeHiddenFocus(forceSuppressFocusBorder?: Browser): void;
    /**
     * Gets the search mode for a specific browser instance.
     *
     * @param {Browser} browser
     *   The search mode for this browser will be returned.
     * @param {boolean} [confirmedOnly]
     *   Normally, if the browser has both preview and confirmed modes, preview
     *   mode will be returned since it takes precedence.  If this argument is
     *   true, then only confirmed search mode will be returned, or null if
     *   search mode hasn't been confirmed.
     * @returns {object}
     *   A search mode object.  See setSearchMode documentation.  If the browser
     *   is not in search mode, then null is returned.
     */
    getSearchMode(browser: Browser, confirmedOnly?: boolean): object;
    /**
     * Sets search mode for a specific browser instance.  If the given browser is
     * selected, then this will also enter search mode.
     *
     * @param {object} searchMode
     *   A search mode object.
     * @param {string} searchMode.engineName
     *   The name of the search engine to restrict to.
     * @param {UrlbarUtils.RESULT_SOURCE} searchMode.source
     *   A result source to restrict to.
     * @param {string} searchMode.entry
     *   How search mode was entered. This is recorded in event telemetry. One of
     *   the values in UrlbarUtils.SEARCH_MODE_ENTRY.
     * @param {boolean} [searchMode.isPreview]
     *   If true, we will preview search mode. Search mode preview does not record
     *   telemetry and has slighly different UI behavior. The preview is exited in
     *   favor of full search mode when a query is executed. False should be
     *   passed if the caller needs to enter search mode but expects it will not
     *   be interacted with right away. Defaults to true.
     * @param {Browser} browser
     *   The browser for which to set search mode.
     */
    setSearchMode(searchMode: {
        engineName: string;
        source: UrlbarUtils.RESULT_SOURCE;
        entry: string;
        isPreview?: boolean;
    }, browser: Browser): Promise<void>;
    /**
     * Restores the current browser search mode from a previously stored state.
     */
    restoreSearchModeState(): void;
    /**
     * Enters search mode with the default engine.
     */
    searchModeShortcut(): void;
    /**
     * Confirms the current search mode.
     */
    confirmSearchMode(): void;
    get editor(): any;
    get focused(): boolean;
    get goButton(): any;
    get untrimmedValue(): string;
    get lastSearchString(): string;
    updateLayoutBreakout(): Promise<void>;
    startLayoutExtend(): void;
    endLayoutExtend(): void;
    /**
     * Updates the user interface to indicate whether the URI in the address bar
     * is different than the loaded page, because it's being edited or because a
     * search result is currently selected and is displayed in the location bar.
     *
     * @param {string} state
     *        The string "valid" indicates that the security indicators and other
     *        related user interface elments should be shown because the URI in
     *        the location bar matches the loaded page. The string "invalid"
     *        indicates that the URI in the location bar is different than the
     *        loaded page.
     * @param {boolean} [updatePopupNotifications]
     *        Indicates whether we should update the PopupNotifications
     *        visibility due to this change, otherwise avoid doing so as it is
     *        being handled somewhere else.
     */
    setPageProxyState(state: string, updatePopupNotifications?: boolean): void;
    /**
     * When switching tabs quickly, TabSelect sometimes happens before
     * _adjustFocusAfterTabSwitch and due to the focus still being on the old
     * tab, we end up flickering the results pane briefly.
     */
    afterTabSwitchFocusChange(): void;
    _gotFocusChange: boolean;
    /**
     * Confirms search mode and starts a new search if appropriate for the given
     * result.  See also _searchModeForResult.
     *
     * @param {object} options
     *   Options object.
     * @param {string} options.entry
     *   The search mode entry point. See setSearchMode documentation for details.
     * @param {UrlbarResult} [options.result]
     *   The result to confirm. Defaults to the currently selected result.
     * @param {boolean} [options.checkValue]
     *   If true, the trimmed input value must equal the result's keyword in order
     *   to enter search mode.
     * @param {boolean} [options.startQuery]
     *   If true, start a query after entering search mode. Defaults to true.
     * @returns {boolean}
     *   True if we entered search mode and false if not.
     */
    maybeConfirmSearchModeFromResult({ entry, result, checkValue, startQuery, }: {
        entry: string;
        result?: UrlbarResult;
        checkValue?: boolean;
        startQuery?: boolean;
    }): boolean;
    observe(subject: any, topic: any, data: any): void;
    /**
     * Get search source.
     *
     * @param {Event} event
     *   The event that triggered this query.
     * @returns {string}
     *   The source name.
     */
    getSearchSource(event: Event): string;
    _addObservers(): void;
    _getURIFixupInfo(searchString: any): nsIURIFixupInfoType;
    _afterTabSelectAndFocusChange(): void;
    _gotTabSelect: boolean;
    _updateLayoutBreakoutDimensions(): Promise<void>;
    _layoutBreakoutUpdateKey: {};
    _setValue(val: any, allowTrim: any): any;
    _getValueFromResult(result: any, urlOverride?: any): any;
    /**
     * Resets some state so that searches from the user's previous interaction
     * with the input don't interfere with searches from a new interaction.
     */
    _resetSearchState(): void;
    /**
     * Autofills the autofill placeholder string if appropriate, and determines
     * whether autofill should be allowed for the new search started by an input
     * event.
     *
     * @param {string} value
     *   The new search string.
     * @returns {boolean}
     *   Whether autofill should be allowed in the new search.
     */
    _maybeAutofillPlaceholder(value: string): boolean;
    /**
     * Invoked on overflow/underflow/scrollend events to update attributes
     * related to the input text directionality. Overflow fade masks use these
     * attributes to appear at the proper side of the urlbar.
     */
    updateTextOverflow(): void;
    _updateUrlTooltip(): void;
    _getSelectedValueForClipboard(): any;
    _toggleActionOverride(event: any): void;
    _clearActionOverride(): void;
    /**
     * Get the url to load for the search query and records in telemetry that it
     * is being loaded.
     *
     * @param {nsISearchEngine} engine
     *   The engine to generate the query for.
     * @param {Event} event
     *   The event that triggered this query.
     * @param {object} searchActionDetails
     *   The details associated with this search query.
     * @param {boolean} searchActionDetails.isSuggestion
     *   True if this query was initiated from a suggestion from the search engine.
     * @param {boolean} searchActionDetails.alias
     *   True if this query was initiated via a search alias.
     * @param {boolean} searchActionDetails.isFormHistory
     *   True if this query was initiated from a form history result.
     * @param {string} searchActionDetails.url
     *   The url this query was triggered with.
     */
    _recordSearch(engine: nsISearchEngine, event: Event, searchActionDetails?: {
        isSuggestion: boolean;
        alias: boolean;
        isFormHistory: boolean;
        url: string;
    }): void;
    /**
     * Shortens the given value, usually by removing http:// and trailing slashes.
     *
     * @param {string} val
     *   The string to be trimmed if it appears to be URI
     * @returns {string}
     *   The trimmed string
     */
    _trimValue(val: string): string;
    /**
     * If appropriate, this prefixes a search string with 'www.' and suffixes it
     * with browser.fixup.alternate.suffix prior to navigating.
     *
     * @param {Event} event
     *   The event that triggered this query.
     * @param {string} value
     *   The search string that should be canonized.
     * @returns {string}
     *   Returns the canonized URL if available and null otherwise.
     */
    _maybeCanonizeURL(event: Event, value: string): string;
    /**
     * Autofills a value into the input.  The value will be autofilled regardless
     * of the input's current value.
     *
     * @param {object} options
     *   The options object.
     * @param {string} options.value
     *   The value to autofill.
     * @param {integer} options.selectionStart
     *   The new selectionStart.
     * @param {integer} options.selectionEnd
     *   The new selectionEnd.
     * @param {"origin" | "url" | "adaptive"} options.type
     *   The autofill type, one of: "origin", "url", "adaptive"
     * @param {string} options.adaptiveHistoryInput
     *   If the autofill type is "adaptive", this is the matching `input` value
     *   from adaptive history.
     */
    _autofillValue({ value, selectionStart, selectionEnd, type, adaptiveHistoryInput, }: {
        value: string;
        selectionStart: integer;
        selectionEnd: integer;
        type: "origin" | "url" | "adaptive";
        adaptiveHistoryInput: string;
    }): void;
    /**
     * Loads the url in the appropriate place.
     *
     * @param {string} url
     *   The URL to open.
     * @param {Event} event
     *   The event that triggered to load the url.
     * @param {string} openUILinkWhere
     *   Where we expect the result to be opened.
     * @param {object} params
     *   The parameters related to how and where the result will be opened.
     *   Further supported paramters are listed in utilityOverlay.js#openUILinkIn.
     * @param {object} params.triggeringPrincipal
     *   The principal that the action was triggered from.
     * @param {nsIInputStream} [params.postData]
     *   The POST data associated with a search submission.
     * @param {boolean} [params.allowInheritPrincipal]
     *   Whether the principal can be inherited.
     * @param {boolean} [params.wasSchemelessInput]
     *   Whether the search/URL term was without an explicit scheme.
     * @param {object} [resultDetails]
     *   Details of the selected result, if any.
     * @param {UrlbarUtils.RESULT_TYPE} [resultDetails.type]
     *   Details of the result type, if any.
     * @param {string} [resultDetails.searchTerm]
     *   Search term of the result source, if any.
     * @param {UrlbarUtils.RESULT_SOURCE} [resultDetails.source]
     *   Details of the result source, if any.
     * @param {object} browser [optional] the browser to use for the load.
     */
    _loadURL(url: string, event: Event, openUILinkWhere: string, params: {
        triggeringPrincipal: object;
        postData?: nsIInputStream;
        allowInheritPrincipal?: boolean;
        wasSchemelessInput?: boolean;
    }, resultDetails?: {
        type?: UrlbarUtils.RESULT_TYPE;
        searchTerm?: string;
        source?: UrlbarUtils.RESULT_SOURCE;
    }, browser?: object): void;
    /**
     * Determines where a URL/page should be opened.
     *
     * @param {Event} event the event triggering the opening.
     * @returns {"current" | "tabshifted" | "tab" | "save" | "window"}
     */
    _whereToOpen(event: Event): "current" | "tabshifted" | "tab" | "save" | "window";
    _initCopyCutController(): void;
    _copyCutController: CopyCutController;
    _initStripOnShare(): void;
    _initPasteAndGo(): void;
    /**
     * This notifies observers that the user has entered or selected something in
     * the URL bar which will cause navigation.
     *
     * We use the observer service, so that we don't need to load extra facilities
     * if they aren't being used, e.g. WebNavigation.
     *
     * @param {UrlbarResult} result
     *   Details of the result that was selected, if any.
     */
    _notifyStartNavigation(result: UrlbarResult): void;
    /**
     * Returns a search mode object if a result should enter search mode when
     * selected.
     *
     * @param {UrlbarResult} result
     *   The result to check.
     * @param {string} [entry]
     *   If provided, this will be recorded as the entry point into search mode.
     *   See setSearchMode() documentation for details.
     * @returns {object} A search mode object. Null if search mode should not be
     *   entered. See setSearchMode documentation for details.
     */
    _searchModeForResult(result: UrlbarResult, entry?: string): object;
    /**
     * Updates the UI so that search mode is either entered or exited.
     *
     * @param {object} searchMode
     *   See setSearchMode documentation.  If null, then search mode is exited.
     */
    _updateSearchModeUI(searchMode: object): void;
    /**
     * Determines if we should select all the text in the Urlbar based on the
     *  Urlbar state, and whether the selection is empty.
     */
    _maybeSelectAll(): void;
    _on_command(event: any): void;
    _on_blur(event: any): void;
    focusedViaMousedown: boolean;
    _focusUntrimmedValue: string;
    _keyDownEnterDeferred: any;
    _isKeyDownWithCtrl: boolean;
    _on_click(event: any): void;
    _on_contextmenu(event: any): void;
    _on_focus(event: any): void;
    _on_mouseover(event: any): void;
    _on_draggableregionleftmousedown(event: any): void;
    _on_mousedown(event: any): void;
    _mousedownOnUrlbarDescendant: boolean;
    _preventClickSelectsAll: boolean;
    _on_input(event: any): void;
    _on_selectionchange(event: any): void;
    _on_select(event: any): void;
    _on_overflow(event: any): void;
    _overflowing: boolean;
    _on_underflow(event: any): void;
    _on_paste(event: any): void;
    /**
     * Sanitize and process data retrieved from the clipboard
     *
     * @param {string} clipboardData
     *   The original data retrieved from the clipboard.
     * @returns {string}
     *   The sanitized paste data, ready to use.
     */
    sanitizeTextFromClipboard(clipboardData: string): string;
    _on_scrollend(event: any): void;
    _on_TabSelect(event: any): void;
    _on_beforeinput(event: any): void;
    _on_keydown(event: any): void;
    _on_keyup(event: any): Promise<void>;
    _on_compositionstart(event: any): void;
    _on_compositionend(event: any): void;
    _on_dragstart(event: any): void;
    _on_dragover(event: any): void;
    _on_drop(event: any): void;
    _on_customizationstarting(): void;
    _on_aftercustomization(): void;
    #private;
}
/**
 * Handles copy and cut commands for the urlbar.
 */
declare class CopyCutController {
    /**
     * @param {UrlbarInput} urlbar
     *   The UrlbarInput instance to use this controller for.
     */
    constructor(urlbar: UrlbarInput);
    urlbar: UrlbarInput;
    /**
     * @param {string} command
     *   The name of the command to handle.
     */
    doCommand(command: string): void;
    /**
     * @param {string} command
     *   The name of the command to check.
     * @returns {boolean}
     *   Whether the command is handled by this controller.
     */
    supportsCommand(command: string): boolean;
    /**
     * @param {string} command
     *   The name of the command to check.
     * @returns {boolean}
     *   Whether the command should be enabled.
     */
    isCommandEnabled(command: string): boolean;
    onEvent(): void;
}
export {};
