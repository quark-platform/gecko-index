/**
 * StyleSheetEditor controls the editor linked to a particular StyleSheet
 * object.
 *
 * Emits events:
 *   'property-change': A property on the underlying stylesheet has changed
 *   'source-editor-load': The source editor for this editor has been loaded
 *   'error': An error has occured
 *
 * @param  {Resource} resource
 *         The STYLESHEET resource which is received from resource command.
 * @param {DOMWindow}  win
 *        panel window for style editor
 * @param {Number} styleSheetFriendlyIndex
 *        Optional Integer representing the index of the current stylesheet
 *        among all stylesheets of its type (inline or user-created)
 */
export function StyleSheetEditor(resource: Resource, win: DOMWindow, styleSheetFriendlyIndex: number): void;
export class StyleSheetEditor {
    /**
     * StyleSheetEditor controls the editor linked to a particular StyleSheet
     * object.
     *
     * Emits events:
     *   'property-change': A property on the underlying stylesheet has changed
     *   'source-editor-load': The source editor for this editor has been loaded
     *   'error': An error has occured
     *
     * @param  {Resource} resource
     *         The STYLESHEET resource which is received from resource command.
     * @param {DOMWindow}  win
     *        panel window for style editor
     * @param {Number} styleSheetFriendlyIndex
     *        Optional Integer representing the index of the current stylesheet
     *        among all stylesheets of its type (inline or user-created)
     */
    constructor(resource: Resource, win: DOMWindow, styleSheetFriendlyIndex: number);
    _resource: Resource;
    _inputElement: any;
    sourceEditor: any;
    _window: DOMWindow;
    _isNew: any;
    styleSheetFriendlyIndex: number;
    _justSetText: boolean;
    _state: {
        text: string;
        selection: {
            start: {
                line: number;
                ch: number;
            };
            end: {
                line: number;
                ch: number;
            };
        };
    };
    _styleSheetFilePath: any;
    onPropertyChange: any;
    onAtRulesChanged: any;
    checkLinkedFileForChanges: any;
    markLinkedFileBroken: any;
    saveToFile: any;
    updateStyleSheet: any;
    _updateStyleSheet: any;
    _onMouseMove: any;
    _focusOnSourceEditorReady: boolean;
    set savedFile(name: any);
    get savedFile(): any;
    emitAtRulesChanged: any;
    atRules: any[];
    get resourceId(): any;
    get styleSheet(): any;
    /**
     * Whether there are unsaved changes in the editor
     */
    get unsaved(): boolean;
    /**
     * Whether the editor is for a stylesheet created by the user
     * through the style editor UI.
     */
    get isNew(): any;
    /**
     * The style sheet or the generated style sheet for this source if it's an
     * original source.
     */
    get cssSheet(): any;
    _savedFile: any;
    /**
     * Get a user-friendly name for the style sheet.
     *
     * @return string
     */
    get friendlyName(): any;
    _friendlyName: any;
    /**
     * Check if transitions are enabled for style changes.
     *
     * @return Boolean
     */
    get transitionsEnabled(): any;
    /**
     * If this is an original source, get the path of the CSS file it generated.
     */
    linkCSSFile(): void;
    linkedCSSFile: any;
    linkedCSSFileError: any;
    _fileModDate: any;
    /**
     * A helper function that fetches the source text from the style
     * sheet.
     *
     * This will set |this._state.text| to the new text.
     */
    _fetchSourceText(options?: {}): Promise<void>;
    prettifySourceText(): void;
    /**
     * Attempt to prettify the current text if the corresponding stylesheet is not
     * an original source. The text will be read from |this._state.text|.
     *
     * This will set |this._state.text| to the prettified text if needed.
     *
     * @param {Boolean} force: Set to true to prettify the stylesheet, no matter if it's
     *                         minified or not.
     */
    _prettifySourceTextIfNeeded(force?: boolean): void;
    _mappings: any;
    /**
     * Start fetching the full text source for this editor's sheet.
     */
    fetchSource(): Promise<void>;
    sourceLoaded: boolean;
    /**
     * Set the cursor at the given line and column location within the code editor.
     *
     * @param {Number} line
     * @param {Number} column
     */
    setCursor(line: number, column: number): void;
    /**
     * If the stylesheet was automatically prettified, there should be a list of line
     * and column mappings from the original to the generated source that can be used
     * to translate the cursor position to the correct location in the prettified source.
     * If no mappings exist, return the original cursor position unchanged.
     *
     * @param  {Number} line
     * @param  {Numer} column
     *
     * @return {Object}
     */
    translateCursorPosition(line: number, column: Numer): any;
    /**
     * Called when the stylesheet text changes.
     * @param {Object} update: The stylesheet resource update packet.
     */
    onStyleApplied(update: any): Promise<void>;
    /**
     * Create source editor and load state into it.
     * @param  {DOMElement} inputElement
     *         Element to load source editor in
     * @param  {CssProperties} cssProperties
     *         A css properties database.
     *
     * @return {Promise}
     *         Promise that will resolve when the style editor is loaded.
     */
    load(inputElement: DOMElement, cssProperties: CssProperties): Promise<any>;
    _sourceEditor: any;
    /**
     * Get the source editor for this editor.
     *
     * @return {Promise}
     *         Promise that will resolve with the editor.
     */
    getSourceEditor(): Promise<any>;
    /**
     * Focus the Style Editor input.
     */
    focus(): void;
    /**
     * Event handler for when the editor is shown.
     *
     * @param {Object} options
     * @param {String} options.reason: Indicates why the editor is shown
     */
    onShow(options?: {
        reason: string;
    }): void;
    /**
     * Toggled the disabled state of the underlying stylesheet.
     */
    toggleDisabled(): Promise<void>;
    _updateTask: any;
    mouseMoveTimeout: any;
    /**
     * Highlight nodes matching the selector found at coordinates x,y in the
     * editor, if any.
     *
     * @param {Number} x
     * @param {Number} y
     */
    _highlightSelectorAt(x: number, y: number): Promise<void>;
    /**
     * Returns the walker front associated with this._resource target.
     *
     * @returns {Promise<WalkerFront>}
     */
    getWalker(): Promise<WalkerFront>;
    walker: any;
    /**
     * Returns or creates the selector highlighter associated with this._resource target.
     *
     * @returns {CustomHighlighterFront|null}
     */
    getHighlighter(): CustomHighlighterFront | null;
    highlighter: any;
    /**
     * Called when this source has been successfully saved to disk.
     */
    onFileSaved(returnFile: any): void;
    _modCheckCount: number;
    _timeout: any;
    /**
     * For original sources (e.g. Sass files). Fetch contents of linked CSS
     * file from disk and live update the stylesheet object with the contents.
     */
    updateLinkedStyleSheet(): void;
    /**
     * Retrieve custom key bindings objects as expected by Editor.
     * Editor action names are not displayed to the user.
     *
     * @return {array} key binding objects for the source editor
     */
    _getKeyBindings(): any[];
    _getStyleSheetsFront(): any;
    /**
     * Clean up for this editor.
     */
    destroy(): void;
    _isDestroyed: boolean;
}
