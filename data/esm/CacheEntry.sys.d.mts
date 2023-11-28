/**
 * Does the fetch for the cache entry from the session.
 *
 * @param {nsIRequest} request
 *     The request object.
 *
 * @returns {Promise}
 *     Promise which resolve a response cache object object, or null if none
 *     was available.
 */
export function getResponseCacheObject(request: nsIRequest): Promise<any>;
