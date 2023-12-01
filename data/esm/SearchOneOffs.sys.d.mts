/**
 * Defines the search one-off button elements. These are displayed at the bottom
 * of the address bar and search bar. The address bar buttons are a subclass in
 * browser/components/urlbar/UrlbarSearchOneOffs.jsm. If you are adding a new
 * subclass, see "Methods for subclasses to override" below.
 */
export class SearchOneOffs {
    constructor(container: any);
    container: any;
    window: any;
    document: any;
    _popup: any;
    _textbox: any;
    _textboxWidth: number;
    /**
     * Set this to a string that identifies your one-offs consumer.  It'll
     * be appended to telemetry recorded with maybeRecordTelemetry().
     */
    telemetryOrigin: string;
    _query: string;
    _selectedButton: any;
    buttons: any;
    header: any;
    settingsButton: any;
    contextMenuPopup: any;
    _engineInfo: {};
    /**
     * `_rebuild()` is async, because it queries the Search Service, which means
     * there is a potential for a race when it's called multiple times in succession.
     */
    _rebuilding: boolean;
    QueryInterface: MozQueryInterface;
    disableOneOffsHorizontalKeyNavigation: boolean;
    addEventListener(...args: any[]): void;
    removeEventListener(...args: any[]): void;
    dispatchEvent(...args: any[]): void;
    getAttribute(...args: any[]): any;
    hasAttribute(...args: any[]): any;
    setAttribute(...args: any[]): void;
    querySelector(...args: any[]): any;
    handleEvent(event: any): void;
    /**
     * @returns {boolean}
     *   True if we will hide the one-offs when they are requested.
     */
    willHide(): boolean;
    /**
     * Invalidates the engine cache. After invalidating the cache, the one-offs
     * will be rebuilt the next time they are shown.
     */
    invalidateCache(): void;
    /**
     * Width in pixels of the one-off buttons.
     * NOTE: Used in browser/components/search/content/searchbar.js only.
     *
     * @returns {number}
     */
    get buttonWidth(): number;
    /**
     * The popup that contains the one-offs.
     *
     * @param {DOMElement} val
     *        The new value to set.
     */
    set popup(val: DOMElement);
    get popup(): DOMElement;
    /**
     * The textbox associated with the one-offs.  Set this to a textbox to
     * automatically keep the related one-offs UI up to date.  Otherwise you
     * can leave it null/undefined, and in that case you should update the
     * query property manually.
     *
     * @param {DOMElement} val
     *        The new value to set.
     */
    set textbox(val: DOMElement);
    get textbox(): DOMElement;
    get style(): any;
    /**
     * The query string currently shown in the one-offs.  If the textbox
     * property is non-null, then this is automatically updated on
     * input.
     *
     * @param {string} val
     *        The new query string to set.
     */
    set query(val: string);
    get query(): string;
    /**
     * The selected one-off, a xul:button, including the add-engine button
     * and the search-settings button.
     *
     * @param {DOMElement|null} val
     *        The selected one-off button. Null if no one-off is selected.
     */
    set selectedButton(val: any);
    get selectedButton(): any;
    /**
     * The index of the selected one-off, including the add-engine button
     * and the search-settings button.
     *
     * @param {number} val
     *        The new index to set, -1 for nothing selected.
     */
    set selectedButtonIndex(val: number);
    get selectedButtonIndex(): number;
    getEngineInfo(): Promise<{}>;
    observe(aEngine: any, aTopic: any, aData: any): void;
    _getAddEngines(): any;
    get _maxInlineAddEngines(): number;
    /**
     * Infallible, non-re-entrant version of `__rebuild()`.
     */
    _rebuild(): Promise<void>;
    /**
     * Builds all the UI.
     */
    __rebuild(): Promise<void>;
    _addEngines: any;
    /**
     * Adds one-offs for the given engines to the DOM.
     *
     * @param {Array} engines
     *        The engines to add.
     * @param {Array} addEngines
     *        The engines that can be added.
     */
    _rebuildEngineList(engines: any[], addEngines: any[]): void;
    _buttonIDForEngine(engine: any): string;
    getSelectableButtons(aIncludeNonEngineButtons: any): any[];
    /**
     * Returns information on where a search results page should be loaded: in the
     * current tab or a new tab.
     *
     * @param {event} aEvent
     *        The event that triggered the page load.
     * @param {boolean} [aForceNewTab]
     *        True to force the load in a new tab.
     * @returns {object} An object { where, params }.  `where` is a string:
     *          "current" or "tab".  `params` is an object further describing how
     *          the page should be loaded.
     */
    _whereToOpen(aEvent: Event, aForceNewTab?: boolean): object;
    /**
     * Increments or decrements the index of the currently selected one-off.
     *
     * @param {boolean} aForward
     *        If true, the index is incremented, and if false, the index is
     *        decremented.
     * @param {boolean} aIncludeNonEngineButtons
     *        If true, buttons that do not have engines are included.
     *        These buttons include the OpenSearch and settings buttons.  For
     *        example, if the currently selected button is an engine button,
     *        the next button is the settings button, and you pass true for
     *        aForward, then passing true for this value would cause the
     *        settings to be selected.  Passing false for this value would
     *        cause the selection to clear or wrap around, depending on what
     *        value you passed for the aWrapAround parameter.
     * @param {boolean} aWrapAround
     *        If true, the selection wraps around between the first and last
     *        buttons.
     */
    advanceSelection(aForward: boolean, aIncludeNonEngineButtons: boolean, aWrapAround: boolean): void;
    /**
     * This handles key presses specific to the one-off buttons like Tab and
     * Alt+Up/Down, and Up/Down keys within the buttons.  Since one-off buttons
     * are always used in conjunction with a list of some sort (in this.popup),
     * it also handles Up/Down keys that cross the boundaries between list
     * items and the one-off buttons.
     *
     * If this method handles the key press, then it will call
     * event.preventDefault() and return true.
     *
     * @param {Event} event
     *        The key event.
     * @param {number} numListItems
     *        The number of items in the list.  The reason that this is a
     *        parameter at all is that the list may contain items at the end
     *        that should be ignored, depending on the consumer.  That's true
     *        for the urlbar for example.
     * @param {boolean} allowEmptySelection
     *        Pass true if it's OK that neither the list nor the one-off
     *        buttons contains a selection.  Pass false if either the list or
     *        the one-off buttons (or both) should always contain a selection.
     * @param {string} [textboxUserValue]
     *        When the last list item is selected and the user presses Down,
     *        the first one-off becomes selected and the textbox value is
     *        restored to the value that the user typed.  Pass that value here.
     *        However, if you pass true for allowEmptySelection, you don't need
     *        to pass anything for this parameter.  (Pass undefined or null.)
     * @returns {boolean} True if the one-offs handled the key press.
     */
    handleKeyDown(event: Event, numListItems: number, allowEmptySelection: boolean, textboxUserValue?: string): boolean;
    _handleKeyDown(event: any, numListItems: any, allowEmptySelection: any, textboxUserValue: any): boolean;
    /**
     * Sets the selected index in the view.
     *
     * @param {number} val
     *        The selected index or -1 if no selection.
     */
    set selectedViewIndex(val: number);
    /**
     * @returns {number} The selected index in the view or -1 if no selection.
     */
    get selectedViewIndex(): number;
    /**
     * Determines if the target of the event is a one-off button or
     * context menu on a one-off button.
     *
     * @param {Event} event
     *        An event, like a click on a one-off button.
     * @returns {boolean} True if telemetry was recorded and false if not.
     */
    eventTargetIsAOneOff(event: Event): boolean;
    /**
     * @returns {boolean} True if the one-offs are connected to a view.
     */
    get hasView(): boolean;
    /**
     * @returns {boolean} True if the view is open.
     */
    get isViewOpen(): boolean;
    /**
     * Closes the view.
     */
    closeView(): void;
    /**
     * Called when a one-off is clicked or the "Search in New Tab" context menu
     * item is picked.  This is not called for the settings button.
     *
     * @param {event} event
     *        The event that triggered the pick.
     * @param {nsISearchEngine|SearchEngine} engine
     *        The engine that was picked.
     * @param {boolean} forceNewTab
     *        True if the search results page should be loaded in a new tab.
     */
    handleSearchCommand(event: Event, engine: nsISearchEngine | SearchEngine, forceNewTab?: boolean): void;
    /**
     * Sets the tooltip for a one-off button with an engine.  This should set
     * either the `tooltiptext` attribute or the relevant l10n ID.
     *
     * @param {element} button
     *        The one-off button.
     */
    setTooltipForEngineButton(button: element): void;
    _on_mousedown(event: any): void;
    _on_click(event: any): void;
    _on_command(event: any): void;
    _on_contextmenu(event: any): void;
    _on_input(event: any): void;
    _on_popupshowing(): void;
    _on_popuphidden(): void;
}
