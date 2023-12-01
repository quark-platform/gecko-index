export class ViewSourceChild extends JSWindowActorChild {
    receiveMessage(message: any): {
        URL: string;
        drawSelection: any;
        baseURI: any;
    };
    /**
     * Called when the parent sends a message to view some source code.
     *
     * @param URL (required)
     *        The URL string of the source to be shown.
     * @param outerWindowID (optional)
     *        The outerWindowID of the content window that has hosted
     *        the document, in case we want to retrieve it from the network
     *        cache.
     * @param lineNumber (optional)
     *        The line number to focus as soon as the source has finished
     *        loading.
     */
    viewSource(URL: any, outerWindowID: any, lineNumber: any): void;
    /**
     * Loads a view source selection showing the given view-source url and
     * highlight the selection.
     *
     * @param uri view-source uri to show
     * @param drawSelection true to highlight the selection
     * @param baseURI base URI of the original document
     */
    viewSourceWithSelection(uri: any, drawSelection: any, baseURI: any): void;
    /**
     * Common utility function used by both the current and deprecated APIs
     * for loading source.
     *
     * @param URL (required)
     *        The URL string of the source to be shown.
     * @param otherDocShell (optional)
     *        The docshell of the content window that is hosting the document.
     * @param lineNumber (optional)
     *        The line number to focus as soon as the source has finished
     *        loading.
     * @param forceEncodingDetection (optional)
     *        Force autodetection of the character encoding.
     */
    loadSource(URL: any, otherDocShell: any, lineNumber: any, forceEncodingDetection: any): void;
    /**
     * Load some URL in the browser.
     *
     * @param URL
     *        The URL string to load.
     */
    loadSourceFromURL(URL: any): void;
    /**
     * A helper to get a path like FIXptr, but with an array instead of the
     * "tumbler" notation.
     * See FIXptr: http://lists.w3.org/Archives/Public/www-xml-linking-comments/2001AprJun/att-0074/01-NOTE-FIXptr-20010425.htm
     */
    getPath(ancestor: any, node: any): number[];
    getSelection(global: any): {
        URL: string;
        drawSelection: any;
        baseURI: any;
    };
    get wrapLongLines(): boolean;
}
