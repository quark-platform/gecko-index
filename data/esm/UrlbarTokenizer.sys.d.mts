export namespace UrlbarTokenizer {
    let REGEXP_SPACES: RegExp;
    let REGEXP_SPACES_START: RegExp;
    let REGEXP_LIKE_PROTOCOL: RegExp;
    let REGEXP_USERINFO_INVALID_CHARS: RegExp;
    let REGEXP_HOSTPORT_INVALID_CHARS: RegExp;
    let REGEXP_SINGLE_WORD_HOST: RegExp;
    let REGEXP_HOSTPORT_IP_LIKE: RegExp;
    let REGEXP_HOSTPORT_INVALID_IP: RegExp;
    let REGEXP_HOSTPORT_IPV4: RegExp;
    let REGEXP_HOSTPORT_IPV6: RegExp;
    let REGEXP_COMMON_EMAIL: RegExp;
    let REGEXP_HAS_PORT: RegExp;
    let REGEXP_PERCENT_ENCODED_START: RegExp;
    let REGEXP_PREFIX: RegExp;
    namespace TYPE {
        let TEXT: number;
        let POSSIBLE_ORIGIN: number;
        let POSSIBLE_URL: number;
        let RESTRICT_HISTORY: number;
        let RESTRICT_BOOKMARK: number;
        let RESTRICT_TAG: number;
        let RESTRICT_OPENPAGE: number;
        let RESTRICT_SEARCH: number;
        let RESTRICT_TITLE: number;
        let RESTRICT_URL: number;
        let RESTRICT_ACTION: number;
    }
    namespace RESTRICT {
        let HISTORY: string;
        let BOOKMARK: string;
        let TAG: string;
        let OPENPAGE: string;
        let SEARCH: string;
        let TITLE: string;
        let URL: string;
        let ACTION: string;
    }
    const SEARCH_MODE_RESTRICT: Set<string>;
    /**
     * Returns whether the passed in token looks like a URL.
     * This is based on guessing and heuristics, that means if this function
     * returns false, it's surely not a URL, if it returns true, the result must
     * still be verified through URIFixup.
     *
     * @param {string} token
     *        The string token to verify
     * @param {boolean} [requirePath] The url must have a path
     * @returns {boolean} whether the token looks like a URL.
     */
    function looksLikeUrl(token: string, { requirePath }?: boolean): boolean;
    /**
     * Returns whether the passed in token looks like an origin.
     * This is based on guessing and heuristics, that means if this function
     * returns false, it's surely not an origin, if it returns true, the result
     * must still be verified through URIFixup.
     *
     * @param {string} token
     *        The string token to verify
     * @param {object} options Options object
     * @param {boolean} [options.ignoreKnownDomains] If true, the origin doesn't have to be
     *        in the known domain list
     * @param {boolean} [options.noIp] If true, the origin cannot be an IP address
     * @param {boolean} [options.noPort] If true, the origin cannot have a port number
     * @returns {boolean} whether the token looks like an origin.
     */
    function looksLikeOrigin(token: string, { ignoreKnownDomains, noIp, noPort }?: {
        ignoreKnownDomains?: boolean;
        noIp?: boolean;
        noPort?: boolean;
    }): boolean;
    /**
     * Tokenizes the searchString from a UrlbarQueryContext.
     *
     * @param {UrlbarQueryContext} queryContext
     *        The query context object to tokenize
     * @returns {UrlbarQueryContext} the same query context object with a new
     *          tokens property.
     */
    function tokenize(queryContext: UrlbarQueryContext): UrlbarQueryContext;
    /**
     * Given a token, tells if it's a restriction token.
     *
     * @param {object} token
     *   The token to check.
     * @returns {boolean} Whether the token is a restriction character.
     */
    function isRestrictionToken(token: any): boolean;
}
