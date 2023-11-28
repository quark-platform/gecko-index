export namespace NetworkHelper {
    /**
     * Converts text with a given charset to unicode.
     *
     * @param string text
     *        Text to convert.
     * @param string charset
     *        Charset to convert the text to.
     * @returns string
     *          Converted text.
     */
    function convertToUnicode(text: any, charset: any): any;
    /**
     * Reads all available bytes from stream and converts them to charset.
     *
     * @param nsIInputStream stream
     * @param string charset
     * @returns string
     *          UTF-16 encoded string based on the content of stream and charset.
     */
    function readAndConvertFromStream(stream: any, charset: any): any;
    /**
     * Reads the posted text from request.
     *
     * @param nsIHttpChannel request
     * @param string charset
     *        The content document charset, used when reading the POSTed data.
     * @returns string or null
     *          Returns the posted string if it was possible to read from request
     *          otherwise null.
     */
    function readPostTextFromRequest(request: any, charset: any): any;
    /**
     * Reads the posted text from the page's cache.
     *
     * @param nsIDocShell docShell
     * @param string charset
     * @returns string or null
     *          Returns the posted string if it was possible to read from
     *          docShell otherwise null.
     */
    function readPostTextFromPage(docShell: any, charset: any): any;
    /**
     * Reads the posted text from the page's cache, given an nsIWebNavigation
     * object.
     *
     * @param nsIWebNavigation webNav
     * @param string charset
     * @returns string or null
     *          Returns the posted string if it was possible to read from
     *          webNav, otherwise null.
     */
    function readPostTextFromPageViaWebNav(webNav: any, charset: any): any;
    /**
     * Gets the topFrameElement that is associated with request. This
     * works in single-process and multiprocess contexts. It may cross
     * the content/chrome boundary.
     *
     * @param nsIHttpChannel request
     * @returns Element|null
     *          The top frame element for the given request.
     */
    function getTopFrameForRequest(request: any): any;
    /**
     * Gets the nsIDOMWindow that is associated with request.
     *
     * @param nsIHttpChannel request
     * @returns nsIDOMWindow or null
     */
    function getWindowForRequest(request: any): any;
    /**
     * Gets the nsILoadContext that is associated with request.
     *
     * @param nsIHttpChannel request
     * @returns nsILoadContext or null
     */
    function getRequestLoadContext(request: any): any;
    /**
     * Determines whether the request has been made for the top level document.
     *
     * @param nsIHttpChannel request
     * @returns Boolean True if the request represents the top level document.
     */
    function isTopLevelLoad(request: any): number | false;
    /**
     * Loads the content of url from the cache.
     *
     * @param string url
     *        URL to load the cached content for.
     * @param string charset
     *        Assumed charset of the cached content. Used if there is no charset
     *        on the channel directly.
     * @param function callback
     *        Callback that is called with the loaded cached content if available
     *        or null if something failed while getting the cached content.
     */
    function loadFromCache(url: any, charset: any, callback: any): void;
    /**
     * Parse a raw Cookie header value.
     *
     * @param string header
     *        The raw Cookie header value.
     * @return array
     *         Array holding an object for each cookie. Each object holds the
     *         following properties: name and value.
     */
    function parseCookieHeader(header: any): any[];
    /**
     * Parse a raw Set-Cookie header value.
     *
     * @param array headers
     *        Array of raw Set-Cookie header values.
     * @return array
     *         Array holding an object for each cookie. Each object holds the
     *         following properties: name, value, secure (boolean), httpOnly
     *         (boolean), path, domain, samesite and expires (ISO date string).
     */
    function parseSetCookieHeaders(headers: any): any[];
    let mimeCategoryMap: {
        "text/plain": string;
        "text/html": string;
        "text/xml": string;
        "text/xsl": string;
        "text/xul": string;
        "text/css": string;
        "text/sgml": string;
        "text/rtf": string;
        "text/x-setext": string;
        "text/richtext": string;
        "text/javascript": string;
        "text/jscript": string;
        "text/tab-separated-values": string;
        "text/rdf": string;
        "text/xif": string;
        "text/ecmascript": string;
        "text/vnd.curl": string;
        "text/x-json": string;
        "text/x-js": string;
        "text/js": string;
        "text/vbscript": string;
        "view-source": string;
        "view-fragment": string;
        "application/xml": string;
        "application/xhtml+xml": string;
        "application/atom+xml": string;
        "application/rss+xml": string;
        "application/vnd.mozilla.maybe.feed": string;
        "application/javascript": string;
        "application/x-javascript": string;
        "application/x-httpd-php": string;
        "application/rdf+xml": string;
        "application/ecmascript": string;
        "application/http-index-format": string;
        "application/json": string;
        "application/x-js": string;
        "application/x-mpegurl": string;
        "application/vnd.apple.mpegurl": string;
        "multipart/mixed": string;
        "multipart/x-mixed-replace": string;
        "image/svg+xml": string;
        "application/octet-stream": string;
        "image/jpeg": string;
        "image/jpg": string;
        "image/gif": string;
        "image/png": string;
        "image/bmp": string;
        "application/x-shockwave-flash": string;
        "video/x-flv": string;
        "audio/mpeg3": string;
        "audio/x-mpeg-3": string;
        "video/mpeg": string;
        "video/x-mpeg": string;
        "video/vnd.mpeg.dash.mpd": string;
        "audio/ogg": string;
        "application/ogg": string;
        "application/x-ogg": string;
        "application/x-midi": string;
        "audio/midi": string;
        "audio/x-mid": string;
        "audio/x-midi": string;
        "music/crescendo": string;
        "audio/wav": string;
        "audio/x-wav": string;
        "text/json": string;
        "application/x-json": string;
        "application/json-rpc": string;
        "application/x-web-app-manifest+json": string;
        "application/manifest+json": string;
    };
    /**
     * Check if the given MIME type is a text-only MIME type.
     *
     * @param string mimeType
     * @return boolean
     */
    function isTextMimeType(mimeType: any): boolean;
    /**
     * Takes a securityInfo object of nsIRequest, the nsIRequest itself and
     * extracts security information from them.
     *
     * @param object securityInfo
     *        The securityInfo object of a request. If null channel is assumed
     *        to be insecure.
     * @param object originAttributes
     *        The OriginAttributes of the request.
     * @param object httpActivity
     *        The httpActivity object for the request with at least members
     *        { private, hostname }.
     * @param Map decodedCertificateCache
     *        A Map of certificate fingerprints to decoded certificates, to avoid
     *        repeatedly decoding previously-seen certificates.
     *
     * @return object
     *         Returns an object containing following members:
     *          - state: The security of the connection used to fetch this
     *                   request. Has one of following string values:
     *                    * "insecure": the connection was not secure (only http)
     *                    * "weak": the connection has minor security issues
     *                    * "broken": secure connection failed (e.g. expired cert)
     *                    * "secure": the connection was properly secured.
     *          If state == broken:
     *            - errorMessage: error code string.
     *          If state == secure:
     *            - protocolVersion: one of TLSv1, TLSv1.1, TLSv1.2, TLSv1.3.
     *            - cipherSuite: the cipher suite used in this connection.
     *            - cert: information about certificate used in this connection.
     *                    See parseCertificateInfo for the contents.
     *            - hsts: true if host uses Strict Transport Security,
     *                    false otherwise
     *            - hpkp: true if host uses Public Key Pinning, false otherwise
     *          If state == weak: Same as state == secure and
     *            - weaknessReasons: list of reasons that cause the request to be
     *                               considered weak. See getReasonsForWeakness.
     */
    function parseSecurityInfo(securityInfo: any, originAttributes: any, httpActivity: any, decodedCertificateCache: any): Promise<{
        state: string;
    }>;
    /**
     * Takes an nsIX509Cert and returns an object with certificate information.
     *
     * @param nsIX509Cert cert
     *        The certificate to extract the information from.
     * @param Map decodedCertificateCache
     *        A Map of certificate fingerprints to decoded certificates, to avoid
     *        repeatedly decoding previously-seen certificates.
     * @return object
     *         An object with following format:
     *           {
     *             subject: { commonName, organization, organizationalUnit },
     *             issuer: { commonName, organization, organizationUnit },
     *             validity: { start, end },
     *             fingerprint: { sha1, sha256 }
     *           }
     */
    function parseCertificateInfo(cert: any, decodedCertificateCache: any): Promise<{
        subject: {
            commonName: any;
            organization: any;
            organizationalUnit: any;
        };
        issuer: {
            commonName: any;
            organization: any;
            organizationUnit: any;
        };
        validity: {
            start: any;
            end: any;
        };
        fingerprint: {
            sha1: any;
            sha256: any;
        };
    }>;
    /**
     * Takes protocolVersion of TransportSecurityInfo object and returns
     * human readable description.
     *
     * @param Number version
     *        One of nsITransportSecurityInfo version constants.
     * @return string
     *         One of TLSv1, TLSv1.1, TLSv1.2, TLSv1.3 if @param version
     *         is valid, Unknown otherwise.
     */
    function formatSecurityProtocol(version: any): "Unknown" | "TLSv1" | "TLSv1.1" | "TLSv1.2" | "TLSv1.3";
    /**
     * Takes the securityState bitfield and returns reasons for weak connection
     * as an array of strings.
     *
     * @param Number state
     *        nsITransportSecurityInfo.securityState.
     *
     * @return Array[String]
     *         List of weakness reasons. A subset of { cipher } where
     *         * cipher: The cipher suite is consireded to be weak (RC4).
     */
    function getReasonsForWeakness(state: any): string[];
    /**
     * Parse a url's query string into its components
     *
     * @param string queryString
     *        The query part of a url
     * @return array
     *         Array of query params {name, value}
     */
    function parseQueryString(queryString: any): any;
}
