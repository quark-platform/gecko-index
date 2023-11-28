export namespace SelectionUtils {
    /**
     * Trim the selection text to a reasonable size and sanitize it to make it
     * safe for search query input.
     *
     * @param aSelection
     *        The selection text to trim.
     * @param aMaxLen
     *        The maximum string length, defaults to a reasonable size if undefined.
     * @return The trimmed selection text.
     */
    function trimSelection(aSelection: any, aMaxLen: any): any;
    /**
     * Retrieve the text selection details for the given window.
     *
     * @param  aTopWindow
     *         The top window of the element containing the selection.
     * @param  aCharLen
     *         The maximum string length for the selection text.
     * @return The selection details containing the full and trimmed selection text
     *         and link details for link selections.
     */
    function getSelectionDetails(aTopWindow: any, aCharLen: any): {
        text: any;
        docSelectionIsCollapsed: any;
        isDocumentLevelSelection: boolean;
        fullText: any;
        linkURL: any;
        linkText: any;
    };
}
