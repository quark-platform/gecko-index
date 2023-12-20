/**
 * The one-off search buttons in the urlbar.
 */
export class UrlbarSearchOneOffs {
    /**
     * Constructor.
     *
     * @param {UrlbarView} view
     *   The parent UrlbarView.
     */
    constructor(view: UrlbarView);
    view: UrlbarView;
    input: any;
    disableOneOffsHorizontalKeyNavigation: boolean;
    _webEngines: any[];
    /**
     * Returns the local search mode one-off buttons.
     *
     * @returns {Array}
     *   The local one-off buttons.
     */
    get localButtons(): any[];
    /**
     * Invoked when Web provided search engines list changes.
     *
     * @param {Array} engines Array of Web provided search engines. Each engine
     *        is defined as  { icon, name, tooltip, uri }.
     */
    updateWebEngines(engines: any[]): void;
    /**
     * Enables (shows) or disables (hides) the one-offs.
     *
     * @param {boolean} enable
     *   True to enable, false to disable.
     */
    enable(enable: boolean): void;
    telemetryOrigin: string;
    textbox: any;
    /**
     * Query listener method.  Delegates to the superclass.
     */
    onViewOpen(): void;
    onQueryStarted(queryContext: any): void;
    onQueryFinished(queryContext: any): void;
    /**
     * Query listener method.  Delegates to the superclass.
     */
    onViewClose(): void;
    /**
     * @returns {boolean}
     *   True if the one-offs are connected to a view.
     */
    get hasView(): boolean;
    /**
     * @returns {boolean}
     *   True if the view is open.
     */
    get isViewOpen(): boolean;
    /**
     * The selected one-off including the search-settings button.
     *
     * @param {DOMElement|null} button
     *   The selected one-off button. Null if no one-off is selected.
     */
    set selectedButton(button: any);
    get selectedButton(): any;
    getSelectableButtons(aIncludeNonEngineButtons: any): any;
    set selectedViewIndex(val: number);
    /**
     * The selected index in the view or -1 if there is no selection.
     *
     * @returns {number}
     */
    get selectedViewIndex(): number;
    /**
     * Closes the view.
     */
    closeView(): void;
    /**
     * Called when a one-off is clicked.
     *
     * @param {event} event
     *   The event that triggered the pick.
     * @param {object} searchMode
     *   Used by UrlbarInput.setSearchMode to enter search mode. See setSearchMode
     *   documentation for details.
     */
    handleSearchCommand(event: Event, searchMode: object): void;
    /**
     * Sets the tooltip for a one-off button with an engine.  This should set
     * either the `tooltiptext` attribute or the relevant l10n ID.
     *
     * @param {element} button
     *   The one-off button.
     */
    setTooltipForEngineButton(button: element): void;
    /**
     * Overrides the willHide method in the superclass to account for the local
     * search mode buttons.
     *
     * @returns {boolean}
     *   True if we will hide the one-offs when they are requested.
     */
    willHide(): boolean;
    /**
     * Called when a pref tracked by UrlbarPrefs changes.
     *
     * @param {string} changedPref
     *   The name of the pref, relative to `browser.urlbar.` if the pref is in
     *   that branch.
     */
    onPrefChanged(changedPref: string): void;
    /**
     * Overrides _getAddEngines to return engines that can be added.
     *
     * @returns {Array} engines
     */
    _getAddEngines(): any[];
    /**
     * Overrides _rebuildEngineList to add the local one-offs.
     *
     * @param {Array} engines
     *    The search engines to add.
     * @param {Array} addEngines
     *        The engines that can be added.
     */
    _rebuildEngineList(engines: any[], addEngines: any[]): void;
    /**
     * Overrides the superclass's click listener to handle clicks on local
     * one-offs in addition to engine one-offs.
     *
     * @param {event} event
     *   The click event.
     */
    _on_click(event: Event): void;
    /**
     * Overrides the superclass's contextmenu listener to handle the context menu.
     *
     * @param {event} event
     *   The contextmenu event.
     */
    _on_contextmenu(event: Event): void;
    _on_rebuild(): void;
    #private;
}
