export namespace SiteDataManager {
    let _sites: Map<any, any>;
    let _getCacheSizeObserver: any;
    let _getCacheSizePromise: any;
    let _getQuotaUsagePromise: any;
    let _quotaUsageRequest: any;
    /**
     *  Retrieve the latest site data and store it in SiteDataManager.
     *
     *  Updating site data is a *very* expensive operation. This method exists so that
     *  consumers can manually decide when to update, most methods on SiteDataManager
     *  will not trigger updates automatically.
     *
     *  It is *highly discouraged* to await on this function to finish before showing UI.
     *  Either trigger the update some time before the data is needed or use the
     *  entryUpdatedCallback parameter to update the UI async.
     *
     * @param {entryUpdatedCallback} a function to be called whenever a site is added or
     *        updated. This can be used to e.g. fill a UI that lists sites without
     *        blocking on the entire update to finish.
     * @returns a Promise that resolves when updating is done.
     **/
    function updateSites(entryUpdatedCallback: any): Promise<void>;
    /**
     * Get the base domain of a host on a best-effort basis.
     * @param {string} host - Host to convert.
     * @returns {string} Computed base domain. If the base domain cannot be
     * determined, because the host is an IP address or does not have enough
     * domain levels we will return the original host. This includes the empty
     * string.
     * @throws {Error} Throws for unexpected conversion errors from eTLD service.
     */
    function getBaseDomainFromHost(host: string): string;
    function _getOrInsertSite(baseDomainOrHost: any): any;
    function _getOrInsertContainersData(site: any, userContextId: any): any;
    /**
     * Retrieves the amount of space currently used by disk cache.
     *
     * You can use DownloadUtils.convertByteUnits to convert this to
     * a user-understandable size/unit combination.
     *
     * @returns a Promise that resolves with the cache size on disk in bytes.
     */
    function getCacheSize(): any;
    function _getQuotaUsage(entryUpdatedCallback: any): any;
    function _getAllCookies(entryUpdatedCallback: any): void;
    function _cancelGetQuotaUsage(): void;
    /**
     * Checks if the site with the provided ASCII host is using any site data at all.
     * This will check for:
     *   - Cookies (incl. subdomains)
     *   - Quota Usage
     * in that order. This function is meant to be fast, and thus will
     * end searching and return true once the first trace of site data is found.
     *
     * @param {String} the ASCII host to check
     * @returns {Boolean} whether the site has any data associated with it
     */
    function hasSiteData(asciiHost: any): boolean;
    function getTotalUsage(): any;
    /**
     * Gets all sites that are currently storing site data. Entries are grouped by
     * parent base domain if applicable. For example "foo.example.com",
     * "example.com" and "bar.example.com" will have one entry with the baseDomain
     * "example.com".
     * A base domain entry will represent all data of its storage jar. The storage
     * jar holds all first party data of the domain as well as any third party
     * data partitioned under the domain. Additionally we will add data which
     * belongs to the domain but is part of other domains storage jars . That is
     * data third-party partitioned under other domains.
     * Sites which cannot be associated with a base domain, for example IP hosts,
     * are not grouped.
     *
     * The list is not automatically up-to-date. You need to call
     * {@link updateSites} before you can use this method for the first time (and
     * whenever you want to get an updated set of list.)
     *
     * @returns {Promise} Promise that resolves with the list of all sites.
     */
    function getSites(): Promise<any>;
    /**
     * Get site, which stores data, by base domain or host.
     *
     * The list is not automatically up-to-date. You need to call
     * {@link updateSites} before you can use this method for the first time (and
     * whenever you want to get an updated set of list.)
     *
     * @param {String} baseDomainOrHost - Base domain or host of the site to get.
     *
     * @returns {Promise<Object|null>} Promise that resolves with the site object
     * or null if no site with given base domain or host stores data.
     */
    function getSite(baseDomainOrHost: string): Promise<any>;
    function _removePermission(site: any): void;
    function _removeCookies(site: any): void;
    function _getDeletablePermissions(): any[];
    /**
     * Removes all site data for the specified list of domains and hosts.
     * This includes site data of subdomains belonging to the domains or hosts and
     * partitioned storage. Data is cleared per storage jar, which means if we
     * clear "example.com", we will also clear third parties embedded on
     * "example.com". Additionally we will clear all data of "example.com" (as a
     * third party) from other jars.
     *
     * @param {string|string[]} domainsOrHosts - List of domains and hosts or
     * single domain or host to remove.
     * @returns {Promise} Promise that resolves when data is removed and the site
     * data manager has been updated.
     */
    function remove(domainsOrHosts: string | string[]): Promise<any>;
    /**
     * In the specified window, shows a prompt for removing all site data or the
     * specified list of base domains or hosts, warning the user that this may log
     * them out of websites.
     *
     * @param {mozIDOMWindowProxy} win - a parent DOM window to host the dialog.
     * @param {string[]} [removals] - an array of base domain or host strings that
     * will be removed.
     * @returns {boolean} whether the user confirmed the prompt.
     */
    function promptSiteDataRemoval(win: mozIDOMWindowProxy, removals?: string[]): boolean;
    /**
     * Clears all site data and cache
     *
     * @returns a Promise that resolves when the data is cleared.
     */
    function removeAll(): Promise<void>;
    /**
     * Clears all caches.
     *
     * @returns a Promise that resolves when the data is cleared.
     */
    function removeCache(): Promise<any>;
    /**
     * Clears all site data, but not cache, because the UI offers
     * that functionality separately.
     *
     * @returns a Promise that resolves when the data is cleared.
     */
    function removeSiteData(): Promise<void>;
}
