export namespace ForgetAboutSite {
    /**
     * Clear data associated with a base domain. This includes partitioned storage
     * associated with the domain. If a base domain can not be computed from
     * aDomainOrHost, data will be cleared by host instead.
     *
     * @param {string} aDomainOrHost - Domain or host to clear data for. Will be
     * converted to base domain if needed.
     * @returns {Promise} - Resolves once all matching data has been cleared.
     * Throws if any of the internal cleaners fail.
     */
    function removeDataFromBaseDomain(aDomainOrHost: string): Promise<any>;
    /**
     * @deprecated This is a legacy method which clears by host only. Also it does
     * not clear all storage partitioned via dFPI. Use removeDataFromBaseDomain
     * instead.
     */
    function removeDataFromDomain(aDomain: any): Promise<void>;
}
