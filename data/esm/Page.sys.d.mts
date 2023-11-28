export class Page {
    constructor(session: any);
    /**
     * Emit the proper CDP event javascriptDialogOpening when a javascript dialog
     * opens for the current target.
     */
    _onDialogLoaded(e: any, data: any): void;
    /**
     * Handles HTTP request to propagate loaderId to events emitted from
     * content process
     */
    _onRequest(_type: any, _ch: any, data: any): void;
    enabled: boolean;
    destructor(): void;
    _isDestroyed: boolean;
    /**
     * Navigates current page to given URL.
     *
     * @param {object} options
     * @param {string} options.url
     *     destination URL
     * @param {string=} options.frameId
     *     frame id to navigate (not supported),
     *     if not specified navigate top frame
     * @param {string=} options.referrer
     *     referred URL (optional)
     * @param {string=} options.transitionType
     *     intended transition type
     * @returns {object}
     *         - frameId {string} frame id that has navigated (or failed to)
     *         - errorText {string=} error message if navigation has failed
     *         - loaderId {string} (not supported)
     */
    navigate(options?: {
        url: string;
        frameId?: string | undefined;
        referrer?: string | undefined;
        transitionType?: string | undefined;
    }): object;
    /**
     * Capture page screenshot.
     *
     * @param {object} options
     * @param {Viewport=} options.clip
     *     Capture the screenshot of a given region only.
     * @param {string=} options.format
     *     Image compression format. Defaults to "png".
     * @param {number=} options.quality
     *     Compression quality from range [0..100] (jpeg only). Defaults to 80.
     *
     * @returns {string}
     *     Base64-encoded image data.
     */
    captureScreenshot(options?: {
        clip?: Viewport | undefined;
        format?: string | undefined;
        quality?: number | undefined;
    }): string;
    enable(): Promise<void>;
    _dialogHandler: any;
    disable(): Promise<void>;
    bringToFront(): Promise<void>;
    /**
     * Return metrics relating to the layouting of the page.
     *
     * The returned object contains the following entries:
     *
     * layoutViewport:
     *     {number} pageX
     *         Horizontal offset relative to the document (CSS pixels)
     *     {number} pageY
     *         Vertical offset relative to the document (CSS pixels)
     *     {number} clientWidth
     *         Width (CSS pixels), excludes scrollbar if present
     *     {number} clientHeight
     *         Height (CSS pixels), excludes scrollbar if present
     *
     * visualViewport:
     *     {number} offsetX
     *         Horizontal offset relative to the layout viewport (CSS pixels)
     *     {number} offsetY
     *         Vertical offset relative to the layout viewport (CSS pixels)
     *     {number} pageX
     *         Horizontal offset relative to the document (CSS pixels)
     *     {number} pageY
     *         Vertical offset relative to the document (CSS pixels)
     *     {number} clientWidth
     *         Width (CSS pixels), excludes scrollbar if present
     *     {number} clientHeight
     *         Height (CSS pixels), excludes scrollbar if present
     *     {number} scale
     *         Scale relative to the ideal viewport (size at width=device-width)
     *     {number} zoom
     *         Page zoom factor (CSS to device independent pixels ratio)
     *
     * contentSize:
     *     {number} x
     *         X coordinate
     *     {number} y
     *         Y coordinate
     *     {number} width
     *         Width of scrollable area
     *     {number} height
     *         Height of scrollable area
     *
     * @returns {Promise<object>}
     *     Promise which resolves with an object with the following properties
     *     layoutViewport and contentSize
     */
    getLayoutMetrics(): Promise<object>;
    /**
     * Returns navigation history for the current page.
     *
     * @returns {Promise<object>}
     *     Promise which resolves with an object with the following properties
     *     currentIndex (number) and entries (Array<NavigationEntry>).
     */
    getNavigationHistory(): Promise<object>;
    /**
     * Interact with the currently opened JavaScript dialog (alert, confirm,
     * prompt) for this page. This will always close the dialog, either accepting
     * or rejecting it, with the optional prompt filled.
     *
     * @param {object} options
     * @param {boolean=} options.accept
     *    for "confirm", "prompt", "beforeunload" dialogs true will accept
     *    the dialog, false will cancel it. For "alert" dialogs, true or
     *    false closes the dialog in the same way.
     * @param {string=} options.promptText
     *    for "prompt" dialogs, used to fill the prompt input.
     */
    handleJavaScriptDialog(options?: {
        accept?: boolean | undefined;
        promptText?: string | undefined;
    }): Promise<void>;
    /**
     * Navigates current page to the given history entry.
     *
     * @param {object} options
     * @param {number} options.entryId
     *    Unique id of the entry to navigate to.
     */
    navigateToHistoryEntry(options?: {
        entryId: number;
    }): Promise<void>;
    /**
     * Print page as PDF.
     *
     * @param {object} options
     * @param {boolean=} options.displayHeaderFooter
     *     Display header and footer. Defaults to false.
     * @param {string=} options.footerTemplate (not supported)
     *     HTML template for the print footer.
     * @param {string=} options.headerTemplate (not supported)
     *     HTML template for the print header. Should use the same format
     *     as the footerTemplate.
     * @param {boolean=} options.ignoreInvalidPageRanges
     *     Whether to silently ignore invalid but successfully parsed page ranges,
     *     such as '3-2'. Defaults to false.
     * @param {boolean=} options.landscape
     *     Paper orientation. Defaults to false.
     * @param {number=} options.marginBottom
     *     Bottom margin in inches. Defaults to 1cm (~0.4 inches).
     * @param {number=} options.marginLeft
     *     Left margin in inches. Defaults to 1cm (~0.4 inches).
     * @param {number=} options.marginRight
     *     Right margin in inches. Defaults to 1cm (~0.4 inches).
     * @param {number=} options.marginTop
     *     Top margin in inches. Defaults to 1cm (~0.4 inches).
     * @param {string=} options.pageRanges (not supported)
     *     Paper ranges to print, e.g., '1-5, 8, 11-13'.
     *     Defaults to the empty string, which means print all pages.
     * @param {number=} options.paperHeight
     *     Paper height in inches. Defaults to 11 inches.
     * @param {number=} options.paperWidth
     *     Paper width in inches. Defaults to 8.5 inches.
     * @param {boolean=} options.preferCSSPageSize
     *     Whether or not to prefer page size as defined by CSS.
     *     Defaults to false, in which case the content will be scaled
     *     to fit the paper size.
     * @param {boolean=} options.printBackground
     *     Print background graphics. Defaults to false.
     * @param {number=} options.scale
     *     Scale of the webpage rendering. Defaults to 1.
     * @param {string=} options.transferMode
     *     Return as base64-encoded string (ReturnAsBase64),
     *     or stream (ReturnAsStream). Defaults to ReturnAsBase64.
     *
     * @returns {Promise<{data:string, stream:Stream}>}
     *     Based on the transferMode setting data is a base64-encoded string,
     *     or stream is a Stream.
     */
    printToPDF(options?: {
        displayHeaderFooter?: boolean | undefined;
        footerTemplate?: string | undefined;
        headerTemplate?: string | undefined;
        ignoreInvalidPageRanges?: boolean | undefined;
        landscape?: boolean | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        marginRight?: number | undefined;
        marginTop?: number | undefined;
        pageRanges?: string | undefined;
        paperHeight?: number | undefined;
        paperWidth?: number | undefined;
        preferCSSPageSize?: boolean | undefined;
        printBackground?: boolean | undefined;
        scale?: number | undefined;
        transferMode?: string | undefined;
    }): Promise<{
        data: string;
        stream: Stream;
    }>;
    /**
     * Intercept file chooser requests and transfer control to protocol clients.
     *
     * When file chooser interception is enabled,
     * the native file chooser dialog is not shown.
     * Instead, a protocol event Page.fileChooserOpened is emitted.
     *
     * @param {object} options
     * @param {boolean=} options.enabled
     *     Enabled state of file chooser interception.
     */
    setInterceptFileChooserDialog(options?: {
        enabled?: boolean | undefined;
    }): void;
    _getCurrentHistoryIndex(): Promise<any>;
    _getIndexForHistoryEntryId(id: any): Promise<any>;
}
