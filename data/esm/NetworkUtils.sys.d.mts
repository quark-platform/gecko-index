export namespace NetworkUtils {
    export { causeTypeToString };
    export { fetchRequestHeadersAndCookies };
    export { fetchResponseHeadersAndCookies };
    export { getCauseDetails };
    export { getChannelBrowsingContextID };
    export { getChannelInnerWindowId };
    export { getChannelPriority };
    export { getHttpVersion };
    export { getProtocol };
    export { getReferrerPolicy };
    export { getWebSocketChannel };
    export { isChannelFromSystemPrincipal };
    export { isChannelPrivate };
    export { isFromCache };
    export { isNavigationRequest };
    export { isPreloadRequest };
    export { isRedirectedChannel };
    export { isThirdPartyTrackingResource };
    export { matchRequest };
    export { stringToCauseType };
    export { getBlockedReason };
}
declare function causeTypeToString(causeType: any, loadFlags: any, internalContentPolicyType: any): string;
/**
 * For a given channel, fetch the request's headers and cookies.
 *
 * @param {nsIChannel} channel
 * @return {Object}
 *     An object with two properties:
 *     @property {Array<Object>} cookies
 *         Array of { name, value } objects.
 *     @property {Array<Object>} headers
 *         Array of { name, value } objects.
 */
declare function fetchRequestHeadersAndCookies(channel: nsIChannel): any;
/**
 * For a given channel, fetch the response's headers and cookies.
 *
 * @param {nsIChannel} channel
 * @return {Object}
 *     An object with two properties:
 *     @property {Array<Object>} cookies
 *         Array of { name, value } objects.
 *     @property {Array<Object>} headers
 *         Array of { name, value } objects.
 */
declare function fetchResponseHeadersAndCookies(channel: nsIChannel): any;
/**
 * Get the channel cause details.
 *
 * @param {nsIChannel} channel
 * @returns {Object}
 *          - loadingDocumentUri {string} uri of the document which created the
 *            channel
 *          - type {string} cause type as string
 */
declare function getCauseDetails(channel: nsIChannel): any;
/**
 * Get the browsing context id for the channel.
 *
 * @param {*} channel
 * @returns {number}
 */
declare function getChannelBrowsingContextID(channel: any): number;
/**
 * Get the innerWindowId for the channel.
 *
 * @param {*} channel
 * @returns {number}
 */
declare function getChannelInnerWindowId(channel: any): number;
/**
 * Get the channel priority. Priority is a number which typically ranges from
 * -20 (lowest priority) to 20 (highest priority). Can be null if the channel
 * does not implement nsISupportsPriority.
 *
 * @param {nsIChannel} channel
 * @returns {number|undefined}
 */
declare function getChannelPriority(channel: nsIChannel): number | undefined;
/**
 * Get the channel HTTP version as an uppercase string starting with "HTTP/"
 * (eg "HTTP/2").
 *
 * @param {nsIChannel} channel
 * @returns {string}
 */
declare function getHttpVersion(channel: nsIChannel): string;
/**
 * Get the protocol for the provided httpActivity. Either the ALPN negotiated
 * protocol or as a fallback a protocol computed from the scheme and the
 * response status.
 *
 * TODO: The `protocol` is similar to another response property called
 * `httpVersion`. `httpVersion` is uppercase and purely computed from the
 * response status, whereas `protocol` uses nsIHttpChannel.protocolVersion by
 * default and otherwise falls back on `httpVersion`. Ideally we should merge
 * the two properties.
 *
 * @param {Object} httpActivity
 *     The httpActivity object for which we need to get the protocol.
 *
 * @returns {string}
 *     The protocol as a string.
 */
declare function getProtocol(channel: any): string;
/**
 * Get the channel referrer policy as a string
 * (eg "strict-origin-when-cross-origin").
 *
 * @param {nsIChannel} channel
 * @returns {string}
 */
declare function getReferrerPolicy(channel: nsIChannel): string;
/**
 * Retrieve the websocket channel for the provided channel, if available.
 * Returns null otherwise.
 *
 * @param {nsIChannel} channel
 * @returns {nsIWebSocketChannel|null}
 */
declare function getWebSocketChannel(channel: nsIChannel): nsIWebSocketChannel | null;
declare function isChannelFromSystemPrincipal(channel: any): any;
/**
 * Check if the channel is private.
 *
 * @param {nsIChannel} channel
 * @returns {boolean}
 */
declare function isChannelPrivate(channel: nsIChannel): boolean;
/**
 * Check if the channel data is loaded from the cache or not.
 *
 * @param {nsIChannel} channel
 *     The channel for which we need to check the cache status.
 *
 * @returns {boolean}
 *     True if the channel data is loaded from the cache, false otherwise.
 */
declare function isFromCache(channel: nsIChannel): boolean;
/**
 * isNavigationRequest is true for the one request used to load a new top level
 * document of a given tab, or top level window. It will typically be false for
 * navigation requests of iframes, i.e. the request loading another document in
 * an iframe.
 *
 * @param {nsIChannel} channel
 * @return {boolean}
 */
declare function isNavigationRequest(channel: nsIChannel): boolean;
/**
 * Does this channel represent a Preload request.
 *
 * @param {*} channel
 * @returns {boolean}
 */
declare function isPreloadRequest(channel: any): boolean;
/**
 * Check if the channel's status corresponds to a known redirect status.
 *
 * @param {nsIChannel} channel
 *     The channel for which we need to check the redirect status.
 *
 * @returns {boolean}
 *     True if the channel data is a redirect, false otherwise.
 */
declare function isRedirectedChannel(channel: nsIChannel): boolean;
/**
 * Returns true  if the channel has been processed by URL-Classifier features
 * and is considered third-party with the top window URI, and if it has loaded
 * a resource that is classified as a tracker.
 *
 * @param {nsIChannel} channel
 * @return {boolean}
 */
declare function isThirdPartyTrackingResource(channel: nsIChannel): boolean;
/**
 * Check if a given network request should be logged by a network monitor
 * based on the specified filters.
 *
 * @param nsIHttpChannel channel
 *        Request to check.
 * @param filters
 *        NetworkObserver filters to match against. An object with one of the following attributes:
 *        - sessionContext: When inspecting requests from the parent process, pass the WatcherActor's session context.
 *          This helps know what is the overall debugged scope.
 *          See watcher actor constructor for more info.
 *        - targetActor: When inspecting requests from the content process, pass the WindowGlobalTargetActor.
 *          This helps know what exact subset of request we should accept.
 *          This is especially useful to behave correctly regarding EFT, where we should include or not
 *          iframes requests.
 *        - browserId, addonId, window: All these attributes are legacy.
 *          Only browserId attribute is still used by the legacy WebConsoleActor startListener API.
 * @return boolean
 *         True if the network request should be logged, false otherwise.
 */
declare function matchRequest(channel: any, filters: any): any;
declare function stringToCauseType(value: any): string;
declare function getBlockedReason(channel: any, fromCache?: boolean): {
    blockingExtension: any;
    blockedReason: any;
};
export {};
