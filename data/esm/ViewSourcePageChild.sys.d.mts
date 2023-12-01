export class ViewSourcePageChild extends JSWindowActorChild {
    static setNeedsDrawSelection(value: any): void;
    static setInitialLineNumber(value: any): void;
    receiveMessage(msg: any): boolean;
    /**
     * Any events should get handled here, and should get dispatched to
     * a specific function for the event type.
     */
    handleEvent(event: any): void;
    /**
     * A shortcut to the nsISelectionController for the content.
     */
    get selectionController(): any;
    /**
     * A shortcut to the nsIWebBrowserFind for the content.
     */
    get webBrowserFind(): any;
    /**
     * This handler is for click events from:
     *   * error page content, which can show up if the user attempts to view the
     *     source of an attack page.
     */
    onClick(event: any): void;
    /**
     * Handler for the pageshow event.
     *
     * @param event
     *        The pageshow event being handled.
     */
    onPageShow(event: any): void;
    /**
     * Attempts to go to a particular line in the source code being
     * shown. If it succeeds in finding the line, it will fire a
     * "ViewSource:GoToLine:Success" message, passing up an object
     * with the lineNumber we just went to. If it cannot find the line,
     * it will fire a "ViewSource:GoToLine:Failed" message.
     *
     * @param lineNumber
     *        The line number to attempt to go to.
     */
    goToLine(lineNumber: any): void;
    /**
     * Some old code from the original view source implementation. Original
     * documentation follows:
     *
     * "Loops through the text lines in the pre element. The arguments are either
     *  (pre, line) or (node, offset, interlinePosition). result is an out
     *  argument. If (pre, line) are specified (and node == null), result.range is
     *  a range spanning the specified line. If the (node, offset,
     *  interlinePosition) are specified, result.line and result.col are the line
     *  and column number of the specified offset in the specified node relative to
     *  the whole file."
     */
    findLocation(pre: any, lineNumber: any, node: any, offset: any, interlinePosition: any, result: any): boolean;
    /**
     * @return {boolean} whether the "wrap" class exists on the document body.
     */
    get isWrapping(): boolean;
    /**
     * @return {boolean} whether the "highlight" class exists on the document body.
     */
    get isSyntaxHighlighting(): boolean;
    /**
     * Toggles the "wrap" class on the document body, which sets whether
     * or not long lines are wrapped.  Notifies parent to update the pref.
     */
    toggleWrapping(): void;
    /**
     * Toggles the "highlight" class on the document body, which sets whether
     * or not syntax highlighting is displayed.  Notifies parent to update the
     * pref.
     */
    toggleSyntaxHighlighting(): void;
    /**
     * Using special markers left in the serialized source, this helper makes the
     * underlying markup of the selected fragment to automatically appear as
     * selected on the inflated view-source DOM.
     */
    drawSelection(): void;
}
