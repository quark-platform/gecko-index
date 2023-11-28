/**
 * A helper module to collect all principals that have any of the following:
 *  * cookies
 *  * quota storage (indexedDB, localStorage)
 *  * service workers
 *
 *  Note that in case of cookies, because these are not strictly associated with a
 *  full origin (including scheme), the https:// scheme will be used as a convention,
 *  so when the cookie hostname is .example.com the principal will have the origin
 *  https://example.com. Origin Attributes from cookies are copied to the principal.
 *
 *  This class is not a singleton and needs to be instantiated using the constructor
 *  before usage. The class instance will cache the last list of principals.
 *
 *  There is currently no `refresh` method, though you are free to add one.
 */
export class PrincipalsCollector {
    /**
     * Checks whether the passed in principal has a scheme that is considered by the
     * PrincipalsCollector. This is used to avoid including principals for non-web
     * entities such as moz-extension.
     *
     * @param {nsIPrincipal} the principal to check
     * @returns {boolean}
     */
    static isSupportedPrincipal(principal: any): boolean;
    principals: any;
    /**
     * Fetches and collects all principals with cookies and/or site data (see module
     * description). Originally for usage in Sanitizer.jsm to compute principals to be
     * cleared on shutdown based on user settings.
     *
     * This operation might take a while to complete on big profiles.
     * DO NOT call or await this in a way that makes it block user interaction, or you
     * risk several painful seconds or possibly even minutes of lag.
     *
     * This function will cache its result and return the same list on second call,
     * even if the actual number of principals with cookies and site data changed.
     *
     * @param {Object} [optional] progress A Sanitizer.jsm progress object that will be
     *   updated to reflect the current step of fetching principals.
     * @returns {Array<nsIPrincipal>} the list of principals
     */
    getAllPrincipals(progress?: {}): Array<nsIPrincipal>;
    _getAllPrincipalsInternal(progress?: {}): Promise<any>;
    #private;
}
