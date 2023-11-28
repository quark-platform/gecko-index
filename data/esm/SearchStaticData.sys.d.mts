export namespace SearchStaticData {
    /**
     * Returns a list of alternate domains for a given search engine domain.
     *
     * @param {string} aDomain
     *   Lowercase host name to look up. For example, if this argument is
     *   "www.google.com" or "www.google.co.uk", the function returns the
     *   full list of supported Google domains.
     *
     * @returns {Array}
     *   Containing one entry for each alternate host name, or empty array
     *   if none is known.  The returned array should not be modified.
     */
    function getAlternateDomains(aDomain: string): any[];
}
