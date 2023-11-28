export namespace BrowserUIUtils {
    /**
     * Check whether a page can be considered as 'empty', that its URI
     * reflects its origin, and that if it's loaded in a tab, that tab
     * could be considered 'empty' (e.g. like the result of opening
     * a 'blank' new tab).
     *
     * We have to do more than just check the URI, because especially
     * for things like about:blank, it is possible that the opener or
     * some other page has control over the contents of the page.
     *
     * @param {Browser} browser
     *        The browser whose page we're checking.
     * @param {nsIURI} [uri]
     *        The URI against which we're checking (the browser's currentURI
     *        if omitted).
     *
     * @return {boolean} false if the page was opened by or is controlled by
     *         arbitrary web content, unless that content corresponds with the URI.
     *         true if the page is blank and controlled by a principal matching
     *         that URI (or the system principal if the principal has no URI)
     */
    function checkEmptyPageOrigin(browser: Browser, uri?: nsIURI): boolean;
    /**
     * Generate a document fragment for a localized string that has DOM
     * node replacements. This avoids using getFormattedString followed
     * by assigning to innerHTML. Fluent can probably replace this when
     * it is in use everywhere.
     *
     * @param {Document} doc
     * @param {String}   msg
     *                   The string to put replacements in. Fetch from
     *                   a stringbundle using getString or GetStringFromName,
     *                   or even an inserted dtd string.
     * @param {Node|String} nodesOrStrings
     *                   The replacement items. Can be a mix of Nodes
     *                   and Strings. However, for correct behaviour, the
     *                   number of items provided needs to exactly match
     *                   the number of replacement strings in the l10n string.
     * @returns {DocumentFragment}
     *                   A document fragment. In the trivial case (no
     *                   replacements), this will simply be a fragment with 1
     *                   child, a text node containing the localized string.
     */
    function getLocalizedFragment(doc: Document, msg: string, ...nodesOrStrings: string | Node): DocumentFragment;
    function removeSingleTrailingSlashFromURL(aURL: any): any;
    const trimURLProtocol: "https://" | "http://";
    /**
     * Returns a URL which has been trimmed by removing 'http://' or 'https://',
     * when the pref 'trimHttps' is set to true, and any trailing slash
     * (in http/https/ftp urls). Note that a trimmed url may not load the same
     * page as the original url, so before loading it, it must be passed through
     * URIFixup, to check trimming doesn't change its destination. We don't run
     * the URIFixup check here, because trimURL is in the page load path
     * (see onLocationChange), so it must be fast and simple.
     *
     * @param {string} aURL The URL to trim.
     * @returns {string} The trimmed string.
     */
    function trimURL(aURL: string): string;
}
