/**
 * Check if the given browsing context is valid for the message handler
 * to use.
 *
 * @param {BrowsingContext} browsingContext
 *     The browsing context to check.
 * @param {object=} options
 * @param {string=} options.browserId
 *    The id of the browser to filter the browsing contexts by (optional).
 * @returns {boolean}
 *     True if the browsing context is valid, false otherwise.
 */
export function isBrowsingContextCompatible(browsingContext: BrowsingContext, options?: object | undefined): boolean;
