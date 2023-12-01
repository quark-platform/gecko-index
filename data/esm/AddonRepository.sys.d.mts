export namespace AddonRepository {
    const homepageURL: string;
    const appIsShuttingDown: boolean;
    /**
     * Retrieves the url that can be visited to see search results for the given
     * terms. If the corresponding preference is not defined, defaults to
     * about:blank.
     *
     * @param  aSearchTerms
     *         Search terms used to search the repository
     */
    function getSearchURL(aSearchTerms: any): string;
    const cacheEnabled: any;
    /**
     * Shut down AddonRepository
     * return: promise{integer} resolves with the result of flushing
     *         the AddonRepository database
     */
    function shutdown(): any;
    function metadataAge(): number;
    function isMetadataStale(): boolean;
    /**
     * Asynchronously get a cached add-on by id. The add-on (or null if the
     * add-on is not found) is passed to the specified callback. If caching is
     * disabled, null is passed to the specified callback.
     *
     * The callback variant exists only for existing code in XPIProvider.jsm
     * and XPIDatabase.jsm that requires a synchronous callback, yuck.
     *
     * @param  aId
     *         The id of the add-on to get
     */
    function getCachedAddonByID(aId: any, aCallback: any): Promise<any>;
    function _clearCache(): any;
    function _createServiceRequest(): any;
    /**
     * Fetch data from an API where the results may span multiple "pages".
     * This function will take care of issuing multiple requests until all
     * the results have been fetched, and will coalesce them all into a
     * single return value.  The handling here is specific to the way AMO
     * implements paging (ie a JSON result with a "next" property).
     *
     * @param {string} pref
     *                 The pref name that contains the API URL to call.
     * @param {object} params
     *                 A key-value object that contains the parameters to replace
     *                 in the API URL.
     * @param {function} handler
     *                   This function will be called once per page of results,
     *                   it should return an array of objects (the type depends
     *                   on the particular API being called of course).
     *
     * @returns Promise{array} An array of all the individual results from
     *                         the API call(s).
     */
    function _fetchPaged(pref: string, params: any, handler: Function): Promise<any>;
    /**
     * Fetch metadata for a given set of addons from AMO.
     *
     * @param  aIDs
     *         The array of ids to retrieve metadata for.
     * @returns {array<AddonSearchResult>}
     */
    function getAddonsByIDs(aIDs: any): array<AddonSearchResult>;
    /**
     * Fetch the Firefox add-ons mapped to the list of extension IDs for the
     * browser ID passed to this method.
     *
     * See: https://addons-server.readthedocs.io/en/latest/topics/api/addons.html#browser-mappings
     *
     * @param browserID
     *        The browser ID used to retrieve the mapping of IDs.
     * @param extensionIDs
     *        The array of browser (non-Firefox) extension IDs to retrieve
     *        metadata for.
     * @returns {object} result
     *        The result of the mapping.
     * @returns {array<AddonSearchResult>} result.addons
     *        The AddonSearchResults for the addons that were successfully mapped.
     * @returns {array<string>} result.matchedIDs
     *        The IDs of the extensions that were successfully matched to
     *        equivalents that can be installed in this browser. These are
     *        the IDs before matching to equivalents.
     * @returns {array<string>} result.unmatchedIDs
     *        The IDs of the extensions that were not matched to equivalents.
     */
    function getMappedAddons(browserID: any, extensionIDs: any): any;
    /**
     * Fetch addon metadata for a set of addons.
     *
     * @param {array<string>} aIDs
     *                        A list of addon IDs to fetch information about.
     *
     * @returns {array<AddonSearchResult>}
     */
    function _getFullData(aIDs: array<string>): array<AddonSearchResult>;
    /**
     * Asynchronously add add-ons to the cache corresponding to the specified
     * ids. If caching is disabled, the cache is unchanged.
     *
     * @param  aIds
     *         The array of add-on ids to add to the cache
     */
    function cacheAddons(aIds: any): Promise<any[]>;
    /**
     * Get all installed addons from the AddonManager singleton.
     *
     * @return Promise{array<AddonWrapper>} Resolves to an array of AddonWrapper instances.
     */
    function _getAllInstalledAddons(): any;
    /**
     * Performs the periodic background update check.
     *
     * In Firefox Desktop builds, the background update check is triggered on a
     * daily basis as part of the AOM background update check and registered
     * from: `toolkit/mozapps/extensions/extensions.manifest`
     *
     * In GeckoView builds, add-ons are checked for updates individually. The
     * `AddonRepository.backgroundUpdateCheck()` method is called by the
     * `updateWebExtension()` method defined in `GeckoViewWebExtensions.sys.mjs`
     * but only when `AddonRepository.isMetadataStale()` returns true.
     *
     * @return Promise{null} Resolves when the metadata update is complete.
     */
    function backgroundUpdateCheck(): Promise<void>;
    function _parseAddon(aEntry: any): AddonSearchResult;
    function _formatURLPref(aPreference: any, aSubstitutions?: {}): string;
    function flush(): any;
    function getAvailableLangpacks(): Promise<{
        target_locale: any;
        url: any;
        hash: any;
    }[]>;
}
declare function AddonSearchResult(aId: any): void;
declare class AddonSearchResult {
    constructor(aId: any);
    id: null;
    icons: null;
    _unsupportedProperties: {};
    type: null;
    name: null;
    version: null;
    creator: null;
    developers: null;
    description: null;
    fullDescription: null;
    eula: null;
    /**
     * The url of the add-on's icon
     */
    get iconURL(): any;
    screenshots: null;
    homepageURL: null;
    supportURL: null;
    contributionURL: null;
    averageRating: null;
    reviewCount: null;
    reviewURL: null;
    weeklyDownloads: null;
    amoListingURL: null;
    install: null;
    sourceURI: null;
    updateDate: null;
    toJSON(): {
        sourceURI: any;
        updateDate: any;
    };
}
export {};
