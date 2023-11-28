export class Network {
    constructor(session: any);
    enabled: boolean;
    _onRequest(eventName: any, httpChannel: any, data: any): void;
    _onResponse(eventName: any, httpChannel: any, data: any): void;
    destructor(): void;
    enable(): void;
    disable(): void;
    /**
     * Deletes browser cookies with matching name and url or domain/path pair.
     *
     * @param {object} options
     * @param {string} options.name
     *     Name of the cookies to remove.
     * @param {string=} options.url
     *     If specified, deletes all the cookies with the given name
     *     where domain and path match provided URL.
     * @param {string=} options.domain
     *     If specified, deletes only cookies with the exact domain.
     * @param {string=} options.path
     *     If specified, deletes only cookies with the exact path.
     */
    deleteCookies(options?: {
        name: string;
        url?: string | undefined;
        domain?: string | undefined;
        path?: string | undefined;
    }): Promise<void>;
    /**
     * Activates emulation of network conditions.
     *
     * @param {object} options
     * @param {boolean} options.offline
     *     True to emulate internet disconnection.
     */
    emulateNetworkConditions(options?: {
        offline: boolean;
    }): void;
    /**
     * Returns all browser cookies.
     *
     * Depending on the backend support, will return detailed cookie information in the cookies field.
     *
     * @param {object} options
     *
     * @returns {Array<Cookie>}
     *     Array of cookie objects.
     */
    getAllCookies(options?: object): Array<Cookie>;
    /**
     * Returns all browser cookies for the current URL.
     *
     * @param {object} options
     * @param {Array<string>=} options.urls
     *     The list of URLs for which applicable cookies will be fetched.
     *     Defaults to the currently open URL.
     *
     * @returns {Array<Cookie>}
     *     Array of cookie objects.
     */
    getCookies(options?: {
        urls?: Array<string> | undefined;
    }): Array<Cookie>;
    /**
     * Sets a cookie with the given cookie data.
     *
     * Note that it may overwrite equivalent cookies if they exist.
     *
     * @param {object} cookie
     * @param {string} cookie.name
     *     Cookie name.
     * @param {string} cookie.value
     *     Cookie value.
     * @param {string=} cookie.domain
     *     Cookie domain.
     * @param {number=} cookie.expires
     *     Cookie expiration date, session cookie if not set.
     * @param {boolean=} cookie.httpOnly
     *     True if cookie is http-only.
     * @param {string=} cookie.path
     *     Cookie path.
     * @param {string=} cookie.sameSite
     *     Cookie SameSite type.
     * @param {boolean=} cookie.secure
     *     True if cookie is secure.
     * @param {string=} cookie.url
     *     The request-URI to associate with the setting of the cookie.
     *     This value can affect the default domain and path values of the
     *     created cookie.
     *
     * @returns {boolean}
     *     True if successfully set cookie.
     */
    setCookie(cookie: {
        name: string;
        value: string;
        domain?: string | undefined;
        expires?: number | undefined;
        httpOnly?: boolean | undefined;
        path?: string | undefined;
        sameSite?: string | undefined;
        secure?: boolean | undefined;
        url?: string | undefined;
    }): boolean;
    /**
     * Sets given cookies.
     *
     * @param {object} options
     * @param {Array.<Cookie>} options.cookies
     *     Cookies to be set.
     */
    setCookies(options?: {
        cookies: Array<Cookie>;
    }): void;
    /**
     * Toggles ignoring cache for each request. If true, cache will not be used.
     *
     * @param {object} options
     * @param {boolean} options.cacheDisabled
     *     Cache disabled state.
     */
    setCacheDisabled(options?: {
        cacheDisabled: boolean;
    }): Promise<void>;
    /**
     * Allows overriding user agent with the given string.
     *
     * Redirected to Emulation.setUserAgentOverride.
     */
    setUserAgentOverride(options?: {}): void;
    /**
     * Creates an array of all Urls in the page context
     *
     * @returns {Array<string>=}
     */
    _getDefaultUrls(): Array<string> | undefined;
}
