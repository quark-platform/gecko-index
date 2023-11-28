/**
 * StyleEditorUI is controls and builds the UI of the Style Editor, including
 * maintaining a list of editors for each stylesheet on a debuggee.
 *
 * Emits events:
 *   'editor-added': A new editor was added to the UI
 *   'editor-selected': An editor was selected
 *   'error': An error occured
 *
 */
export class StyleEditorUI {
    /**
     * @param {Toolbox} toolbox
     * @param {Object} commands Object defined from devtools/shared/commands to interact with the devtools backend
     * @param {Document} panelDoc
     *        Document of the toolbox panel to populate UI in.
     * @param {CssProperties} A css properties database.
     */
    constructor(toolbox: Toolbox, commands: any, panelDoc: Document, cssProperties: any);
    editors: any[];
    selectedEditor: any;
    savedLocations: {};
    get cssProperties(): any;
    get currentTarget(): any;
    get selectedStyleSheetIndex(): any;
    /**
     * Initiates the style editor ui creation, and start to track TargetCommand updates.
     *
     * @params {Object} options
     * @params {Object} options.stylesheetToSelect
     * @params {StyleSheetResource} options.stylesheetToSelect.stylesheet
     * @params {Integer} options.stylesheetToSelect.line
     * @params {Integer} options.stylesheetToSelect.column
     */
    initialize(options?: {}): Promise<void>;
    /**
     * Build the initial UI and wire buttons with event handlers.
     */
    createUI(): void;
    /**
     * Switch to the editor that has been marked to be selected.
     *
     * @return {Promise}
     *         Promise that will resolve when the editor is selected.
     */
    switchToSelectedSheet(): Promise<any>;
    getEditorSummary(editor: any): Promise<any>;
    getEditorDetails(editor: any): Promise<any>;
    /**
     * Returns an identifier for the given style sheet.
     *
     * @param {StyleSheet} styleSheet
     *        The style sheet to be identified.
     */
    getStyleSheetIdentifier(styleSheet: StyleSheet): string;
    /**
     * Get the OriginalSource object for a given original sourceId returned from
     * the sourcemap worker service.
     *
     * @param {string} sourceId
     *        The ID to search for from the sourcemap worker.
     *
     * @return {OriginalSource | null}
     */
    getOriginalSourceSheet(sourceId: string): OriginalSource | null;
    /**
     * Given an URL, find a stylesheet resource with that URL, if one has been
     * loaded into the editor.js
     *
     * Do not use this unless you have no other way to get a StyleSheet resource
     * multiple sheets could share the same URL, so this will give you _one_
     * of possibly many sheets with that URL.
     *
     * @param {string} url
     *        An arbitrary URL to search for.
     *
     * @return {StyleSheetResource|null}
     */
    getStylesheetResourceForGeneratedURL(url: string): StyleSheetResource | null;
    /**
     * selects a stylesheet and optionally moves the cursor to a selected line
     *
     * @param {StyleSheetResource} stylesheet
     *        Stylesheet to select or href of stylesheet to select
     * @param {Number} line
     *        Line to which the caret should be moved (zero-indexed).
     * @param {Number} col
     *        Column to which the caret should be moved (zero-indexed).
     * @return {Promise}
     *         Promise that will resolve when the editor is selected and ready
     *         to be used.
     */
    selectStyleSheet(stylesheet: StyleSheetResource, line: number, col: number): Promise<any>;
    /**
     * Set the active item's summary element.
     *
     * @param DOMElement summary
     * @param {Object} options
     * @param {String=} options.reason: Indicates why the summary was selected. It's set to
     *                  "filter-auto" when the summary was automatically selected as the result
     *                  of the previous active summary being filtered out.
     */
    setActiveSummary(summary: any, options?: {
        reason?: string | undefined;
    }): void;
    /**
     * Show summary's associated editor
     *
     * @param DOMElement summary
     * @param {Object} options
     * @param {String=} options.reason: Indicates why the summary was selected. It's set to
     *                  "filter-auto" when the summary was automatically selected as the result
     *                  of the previous active summary being filtered out.
     */
    showSummaryEditor(summary: any, options: {
        reason?: string | undefined;
    }): Promise<void>;
    /**
     * Remove an item from the split view.
     *
     * @param DOMElement summary
     *        Summary element of the item to remove.
     */
    removeSplitViewItem(summary: any): void;
    /**
     * Make the passed element visible or not, depending if it matches the current filter
     *
     * @param {Element} summary
     * @param {Object} options
     * @param {Boolean} options.triggerOnFilterStateChange: Set to false to avoid calling
     *                  #onFilterStateChange directly here. This can be useful when this
     *                  function is called for every item of the list, like in `setFilter`.
     */
    handleSummaryVisibility(summary: Element, { triggerOnFilterStateChange }?: {
        triggerOnFilterStateChange: boolean;
    }): void;
    destroy(): void;
    #private;
}
