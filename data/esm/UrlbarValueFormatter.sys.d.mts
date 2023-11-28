/**
 * Applies URL highlighting and other styling to the text in the urlbar input,
 * depending on the text.
 */
export class UrlbarValueFormatter {
    /**
     * @param {UrlbarInput} urlbarInput
     *   The parent instance of UrlbarInput
     */
    constructor(urlbarInput: UrlbarInput);
    urlbarInput: UrlbarInput;
    window: any;
    document: any;
    _formattingApplied: boolean;
    get inputField(): any;
    get scheme(): any;
    update(): Promise<void>;
    _updateInstance: {};
    _ensureFormattedHostVisible(urlMetaData: any): void;
    _formatURLInstance: {};
    _getUrlMetaData(): any;
    _inGetUrlMetaData: boolean;
    _removeURLFormat(): void;
    /**
     * If the input value is a URL and the input is not focused, this
     * formatter method highlights the domain, and if mixed content is present,
     * it crosses out the https scheme.  It also ensures that the host is
     * visible (not scrolled out of sight).
     *
     * @returns {boolean}
     *   True if formatting was applied and false if not.
     */
    _formatURL(): boolean;
    _formatScheme(selectionType: any, clear: any): void;
    _removeSearchAliasFormat(): void;
    /**
     * If the input value starts with an @engine search alias, this highlights it.
     *
     * @returns {boolean}
     *   True if formatting was applied and false if not.
     */
    _formatSearchAlias(): boolean;
    _getSearchAlias(): any;
    _selectedResult: any;
    /**
     * Passes DOM events to the _on_<event type> methods.
     *
     * @param {Event} event
     *   DOM event.
     */
    handleEvent(event: Event): void;
    _on_resize(event: any): void;
    _resizeThrottleTimeout: any;
}
