export namespace URILoadingHelper {
    function openLinkIn(window: any, url: any, where: any, params: any): void;
    /**
     * Finds a browser window suitable for opening a link matching the
     * requirements given in the `params` argument. If the current window matches
     * the requirements then it is returned otherwise the top-most window that
     * matches will be returned.
     *
     * @param {Window} window - The current window.
     * @param {Object} params - Parameters for selecting the window.
     * @param {boolean} params.skipPopups - Require a non-popup window.
     * @param {boolean} params.forceNonPrivate - Require a non-private window.
     * @returns {Window | null} A matching browser window or null if none matched.
     */
    function getTargetWindow(window: Window, { skipPopups, forceNonPrivate }?: {
        skipPopups: boolean;
        forceNonPrivate: boolean;
    }): Window;
    /**
     * openUILink handles clicks on UI elements that cause URLs to load.
     *
     * @param {string} url
     * @param {Event | Object} event Event or JSON object representing an Event
     * @param {Boolean | Object} aIgnoreButton
     *                           Boolean or object with the same properties as
     *                           accepted by openLinkIn, plus "ignoreButton"
     *                           and "ignoreAlt".
     * @param {Boolean} aIgnoreAlt
     * @param {Boolean} aAllowThirdPartyFixup
     * @param {Object} aPostData
     * @param {Object} aReferrerInfo
     */
    function openUILink(window: any, url: string, event: any, aIgnoreButton: any, aIgnoreAlt: boolean, aAllowThirdPartyFixup: boolean, aPostData: any, aReferrerInfo: any): void;
    function openTrustedLinkIn(window: any, url: any, where: any, params?: {}): void;
    function openWebLinkIn(window: any, url: any, where: any, params?: {}): void;
    /**
     * Given a URI, guess which container to use to open it. This is used for external
     * openers as a quality of life improvement (e.g. to open a document into the container
     * where you are logged in to the service that hosts it).
     * matches will be returned.
     * For now this can only use currently-open tabs, until history is tagged with the
     * container id (https://bugzilla.mozilla.org/show_bug.cgi?id=1283320).
     *
     * @param {nsIURI} aURI - The URI being opened.
     * @returns {number | null} The guessed userContextId, or null if none.
     */
    function guessUserContextId(aURI: nsIURI): number;
}
