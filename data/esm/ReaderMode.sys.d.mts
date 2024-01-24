export namespace ReaderMode {
    let DEBUG: number;
    let enterTime: any;
    let leaveTime: any;
    /**
     * Enter the reader mode by going forward one step in history if applicable,
     * if not, append the about:reader page in the history instead.
     */
    function enterReaderMode(docShell: any, win: any): void;
    /**
     * Exit the reader mode by going back one step in history if applicable,
     * if not, append the original page in the history instead.
     */
    function leaveReaderMode(docShell: any, win: any): void;
    /**
     * Returns original URL from an about:reader URL.
     *
     * @param url An about:reader URL.
     * @return The original URL for the article, or null if we did not find
     *         a properly formatted about:reader URL.
     */
    function getOriginalUrl(url: any): string;
    function getOriginalUrlObjectForDisplay(url: any): nsIURIType;
    /**
     * Gets an article from a loaded browser's document. This method will not attempt
     * to parse certain URIs (e.g. about: URIs).
     *
     * @param doc A document to parse.
     * @return {Promise}
     * @resolves JS object representing the article, or null if no article is found.
     */
    function parseDocument(doc: any): Promise<any>;
    /**
     * Downloads and parses a document from a URL.
     *
     * @param url URL to download and parse.
     * @return {Promise}
     * @resolves JS object representing the article, or null if no article is found.
     */
    function downloadAndParseDocument(url: any, docContentType?: string): Promise<any>;
    function _downloadDocument(url: any, docContentType?: string): Promise<any>;
    function log(msg: any): void;
    /**
     * Attempts to parse a document into an article. Heavy lifting happens
     * in Reader.worker.js.
     *
     * @param doc The document to parse.
     * @return {Promise}
     * @resolves JS object representing the article, or null if no article is found.
     */
    function _readerParse(doc: any): Promise<any>;
    /**
     * Sets a global language string value if the result is confident
     *
     * @return Promise
     * @resolves when the language is detected
     */
    function _assignLanguage(article: any): any;
    function _maybeAssignTextDirection(article: any): void;
    /**
     * Assigns the estimated reading time range of the article to the article object.
     *
     * @param article the article object to assign the reading time estimate to.
     */
    function _assignReadTime(article: any): void;
    /**
     * Returns the reading speed of a selection of languages with likely variance.
     *
     * Reading speed estimated from a study done on reading speeds in various languages.
     * study can be found here: http://iovs.arvojournals.org/article.aspx?articleid=2166061
     *
     * @return object with characters per minute and variance. Defaults to English
     *         if no suitable language is found in the collection.
     */
    function _getReadingSpeedForLanguage(lang: any): {
        cpm: number;
        variance: number;
    };
    /**
     *
     * Check if the document to be parsed is text document.
     * @param doc the doc object to be parsed.
     * @return boolean
     *
     */
    function _isDocumentPlainText(doc: any): boolean;
    /**
     *
     * The document to be parsed is text document and is converted to HTML format.
     * @param doc the doc object to be parsed.
     * @return doc
     *
     */
    function _convertPlainTextDocument(doc: any): any;
}
