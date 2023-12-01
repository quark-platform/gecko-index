/**
 * ViewSourcePageParent manages the view source <browser> from the chrome side.
 */
export class ViewSourcePageParent extends JSWindowActorParent {
    /**
     * Holds the value of the last line found via the "Go to line"
     * command, to pre-populate the prompt the next time it is
     * opened.
     */
    lastLineFound: any;
    /**
     * Anything added to the messages array will get handled here, and should
     * get dispatched to a specific function for the message name.
     */
    receiveMessage(message: any): void;
    /**
     * A getter for the view source string bundle.
     */
    get bundle(): nsIStringBundleType;
    _bundle: nsIStringBundleType;
    /**
     * Opens the "Go to line" prompt for a user to hop to a particular line
     * of the source code they're viewing. This will keep prompting until the
     * user either cancels out of the prompt, or enters a valid line number.
     */
    promptAndGoToLine(): void;
    /**
     * Go to a particular line of the source code. This act is asynchronous.
     *
     * @param lineNumber
     *        The line number to try to go to to.
     */
    goToLine(lineNumber: any): void;
    /**
     * Called when the frame script reports that a line was successfully gotten
     * to.
     *
     * @param lineNumber
     *        The line number that we successfully got to.
     */
    onGoToLineSuccess(lineNumber: any): void;
    /**
     * Called when the child reports that we failed to go to a particular
     * line. This informs the user that their selection was likely out of range,
     * and then reprompts the user to try again.
     */
    onGoToLineFailed(): void;
    /**
     * @return {boolean} the wrapping state
     */
    queryIsWrapping(): boolean;
    /**
     * @return {boolean} the syntax highlighting state
     */
    queryIsSyntaxHighlighting(): boolean;
    /**
     * Update the wrapping pref based on the child's current state.
     * @param state
     *        Whether wrapping is currently enabled in the child.
     */
    storeWrapping(state: any): void;
    /**
     * Update the syntax highlighting pref based on the child's current state.
     * @param state
     *        Whether syntax highlighting is currently enabled in the child.
     */
    storeSyntaxHighlighting(state: any): void;
}
