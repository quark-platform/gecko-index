export namespace LoginManagerContextMenu {
    /**
     * Look for login items and add them to the contextual menu.
     *
     * @param {Object} inputElementIdentifier
     *        An identifier generated for the input element via ContentDOMReference.
     * @param {xul:browser} browser
     *        The browser for the document the context menu was open on.
     * @param {string} formOrigin
     *        The origin of the document that the context menu was activated from.
     *        This isn't the same as the browser's top-level document origin
     *        when subframes are involved.
     * @returns {DocumentFragment} a document fragment with all the login items.
     */
    function addLoginsToMenu(inputElementIdentifier: any, browser: any, formOrigin: string): DocumentFragment;
    /**
     * Undoes the work of addLoginsToMenu for the same menu.
     *
     * @param {Document}
     *        The context menu owner document.
     */
    function clearLoginsFromMenu(document: any): void;
    /**
     * Show the password autocomplete UI with the generation option forced to appear.
     */
    function useGeneratedPassword(inputElementIdentifier: any, documentURI: any, browser: any): Promise<void>;
    /**
     * Find logins for the specified origin..
     *
     * @param {string} formOrigin
     *        Origin of the logins we want to find that has be sanitized by `getLoginOrigin`.
     *        This isn't the same as the browser's top-level document URI
     *        when subframes are involved.
     *
     * @returns {nsILoginInfo[]} a login list
     */
    function _findLogins(formOrigin: string): nsILoginInfo[];
    /**
     * Find duplicate usernames in a login list.
     *
     * @param {nsILoginInfo[]} loginList
     *        A list of logins we want to look for duplicate usernames.
     *
     * @returns {Set} a set with the duplicate usernames.
     */
    function _findDuplicates(loginList: nsILoginInfo[]): Set<any>;
    /**
     * @param {nsILoginInfo} login
     *        The login we want to fill the form with.
     * @param {Object} inputElementIdentifier
     *        An identifier generated for the input element via ContentDOMReference.
     * @param {xul:browser} browser
     *        The target tab browser.
     * @param {string} formOrigin
     *        Origin of the document we're filling after sanitization via
     *        `getLoginOrigin`.
     *        This isn't the same as the browser's top-level
     *        origin when subframes are involved.
     */
    function _fillTargetField(login: nsILoginInfo, inputElementIdentifier: any, browser: any, formOrigin: string): void;
    /**
     * @param {string} key
     *        The localized string key
     * @param {string[]} formatArgs
     *        An array of formatting argument string
     *
     * @returns {string} the localized string for the specified key,
     *          formatted with arguments if required.
     */
    function _getLocalizedString(key: string, formatArgs: string[]): string;
}
