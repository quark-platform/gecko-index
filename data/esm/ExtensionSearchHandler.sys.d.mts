export const ExtensionSearchHandler: Readonly<{
    MSG_INPUT_STARTED: "webext-omnibox-input-started";
    MSG_INPUT_CHANGED: "webext-omnibox-input-changed";
    MSG_INPUT_ENTERED: "webext-omnibox-input-entered";
    MSG_INPUT_CANCELLED: "webext-omnibox-input-cancelled";
    MSG_INPUT_DELETED: "webext-omnibox-input-deleted";
    /**
     * Registers a keyword.
     *
     * @param {string} keyword The keyword to register.
     * @param {Extension} extension The extension registering the keyword.
     */
    registerKeyword(keyword: string, extension: Extension): void;
    /**
     * Unregisters a keyword.
     *
     * @param {string} keyword The keyword to unregister.
     */
    unregisterKeyword(keyword: string): void;
    /**
     * Checks if a keyword is registered.
     *
     * @param {string} keyword The word to check.
     * @return {boolean} true if the word is a registered keyword.
     */
    isKeywordRegistered(keyword: string): boolean;
    /**
     * @return {boolean} true if there is an active input session.
     */
    hasActiveInputSession(): boolean;
    /**
     * @param {string} keyword The keyword to look up.
     * @return {string} the description to use for the heuristic result.
     */
    getDescription(keyword: string): string;
    /**
     * Sets the default suggestion for the registered keyword. The suggestion's
     * description will be used for the comment in the heuristic result.
     *
     * @param {string} keyword The keyword.
     * @param {string} description The description to use for the heuristic result.
     */
    setDefaultSuggestion(keyword: string, { description }: string): void;
    /**
     * Adds suggestions for the registered keyword. This function will throw if
     * the keyword provided is not registered or active, or if the callback ID
     * provided is no longer equal to the active callback ID.
     *
     * @param {string} keyword The keyword.
     * @param {integer} id The ID of the suggestion callback.
     * @param {Array<Object>} suggestions An array of suggestions to provide to the urlbar.
     */
    addSuggestions(keyword: string, id: integer, suggestions: Array<any>): void;
    /**
     * Called when the input in the urlbar begins with `<keyword><space>`.
     *
     * If the keyword is inactive, MSG_INPUT_STARTED is emitted and the
     * keyword is marked as active. If the keyword is followed by any text,
     * MSG_INPUT_CHANGED is fired with the current callback ID that can be
     * used to provide suggestions to the urlbar while the callback ID is active.
     * The callback is invalidated when either the input changes or the urlbar blurs.
     *
     * @param {object} data An object that contains
     *                 {string} keyword The keyword to handle.
     *                 {string} text The search text in the urlbar.
     *                 {boolean} inPrivateWindow privateness of window search
     *                           is occuring in.
     * @param {Function} callback The callback used to provide search suggestions.
     * @return {Promise} promise that resolves when the current search is complete.
     */
    handleSearch(data: object, callback: Function): Promise<any>;
    /**
     * Called when the user clicks on a suggestion that was added by
     * an extension. MSG_INPUT_ENTERED is emitted to the extension with
     * the keyword, the current search string, and info about how the
     * the search should be handled. This ends the active input session.
     *
     * @param {string} keyword The keyword associated to the suggestion.
     * @param {string} text The search text in the urlbar.
     * @param {string} where How the page should be opened. Accepted values are:
     *    "current": open the page in the same tab.
     *    "tab": open the page in a new foreground tab.
     *    "tabshifted": open the page in a new background tab.
     */
    handleInputEntered(keyword: string, text: string, where: string): void;
    /**
     * Called when the user deletes a suggestion that was added by
     * an extension. MSG_INPUT_DELETED is emitted to the extension with
     * the description of the suggestion that was deleted.
     *
     * @param {string} text The description of the suggestion.
     */
    handleInputDeleted(text: string): any;
    /**
     * If the user has ended the keyword input session without accepting the input,
     * MSG_INPUT_CANCELLED is emitted and the input session is ended.
     */
    handleInputCancelled(): void;
}>;
