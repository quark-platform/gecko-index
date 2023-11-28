export const UrlbarSearchUtils: SearchUtils;
/**
 * Search service utilities for urlbar.
 */
declare class SearchUtils {
    _refreshEnginesByAliasPromise: Promise<void>;
    QueryInterface: any;
    /**
     * Initializes the instance and also Services.search.
     */
    init(): Promise<void>;
    _initPromise: Promise<void>;
    /**
     * Gets the engines whose domains match a given prefix.
     *
     * @param {string} prefix
     *   String containing the first part of the matching domain name(s).
     * @param {object} [options]
     *   Options object.
     * @param {boolean} [options.matchAllDomainLevels]
     *   Match at each sub domain, for example "a.b.c.com" will be matched at
     *   "a.b.c.com", "b.c.com", and "c.com". Partial matches are always returned
     *   after perfect matches.
     * @param {boolean} [options.onlyEnabled]
     *   Match only engines that have not been disabled on the Search Preferences
     *   list.
     * @returns {Array<nsISearchEngine>}
     *   An array of all matching engines. An empty array if there are none.
     */
    enginesForDomainPrefix(prefix: string, { matchAllDomainLevels, onlyEnabled }?: {
        matchAllDomainLevels?: boolean;
        onlyEnabled?: boolean;
    }): Array<nsISearchEngine>;
    /**
     * Gets the engine with a given alias.
     *
     * @param {string} alias
     *   A search engine alias.  The alias string comparison is case insensitive.
     * @param {string} [searchString]
     *   Optional. If provided, we also enforce that there must be a space after
     *   the alias in the search string.
     * @returns {nsISearchEngine}
     *   The matching engine or null if there isn't one.
     */
    engineForAlias(alias: string, searchString?: string): nsISearchEngine;
    /**
     * The list of engines with token ("@") aliases.
     *
     * @returns {Array}
     *   Array of objects { engine, tokenAliases } for token alias engines or
     *   null if SearchService has not initialized.
     */
    tokenAliasEngines(): any[];
    /**
     * @param {nsISearchEngine} engine
     *   The engine to get the root domain of
     * @returns {string}
     *   The root domain of a search engine. e.g. If `engine` has the domain
     *   www.subdomain.rootdomain.com, `rootdomain` is returned. Returns the
     *   engine's domain if the engine's URL does not have a valid TLD.
     */
    getRootDomainFromEngine(engine: nsISearchEngine): string;
    /**
     * @param {boolean} [isPrivate]
     *   True if in a private context.
     * @returns {nsISearchEngine}
     *   The default engine or null if SearchService has not initialized.
     */
    getDefaultEngine(isPrivate?: boolean): nsISearchEngine;
    /**
     * To make analysis easier, we sanitize some engine names when
     * recording telemetry about search mode. This function returns the sanitized
     * key name to record in telemetry.
     *
     * @param {object} searchMode
     *   A search mode object. See UrlbarInput.setSearchMode.
     * @returns {string}
     *   A sanitized scalar key, used to access Telemetry data.
     */
    getSearchModeScalarKey(searchMode: object): string;
    _initInternal(): Promise<void>;
    _refreshEnginesByAlias(): Promise<void>;
    _enginesByAlias: Map<any, any>;
    /**
     * Checks if the given uri is constructed by the default search engine.
     * When passing URI's to check against, it's best to use the "original" URI
     * that was requested, as the server may have redirected the request.
     *
     * @param {nsIURI | string} uri
     *   The uri to check.
     * @returns {string}
     *   The search terms used.
     *   Will return an empty string if it's not a default SERP, the string
     *   exceeds the maximum characters, or the default engine hasn't been
     *   initialized.
     */
    getSearchTermIfDefaultSerpUri(uri: nsIURI | string): string;
    /**
     * Compares the query parameters of two SERPs to see if one is equivalent to
     * the other. URL `x` is equivalent to URL `y` if
     *   (a) `y` contains at least all the query parameters contained in `x`, and
     *   (b) The values of the query parameters contained in both `x` and `y `are
     *       the same.
     *
     * This function does not compare the SERPs' origins or pathnames.
     * `historySerp` can have a different origin and/or pathname than
     * `generatedSerp` and still be considered equivalent.
     *
     * @param {string} historySerp
     *   The SERP from history whose params should be contained in
     *   `generatedSerp`.
     * @param {string} generatedSerp
     *   The search URL we would generate for a search result with the same search
     *   string used in `historySerp`.
     * @param {Array} [ignoreParams]
     *   A list of params to ignore in the matching, i.e. params that can be
     *   contained in `historySerp` but not be in `generatedSerp`.
     * @returns {boolean} True if `historySerp` can be deduped by `generatedSerp`.
     */
    serpsAreEquivalent(historySerp: string, generatedSerp: string, ignoreParams?: any[]): boolean;
    /**
     * Gets the aliases of an engine.  For the user's convenience, we recognize
     * token versions of all non-token aliases.  For example, if the user has an
     * alias of "foo", then we recognize both "foo" and "@foo" as aliases for
     * foo's engine.  The returned list is therefore a superset of
     * `engine.aliases`.  Additionally, the returned aliases will be lower-cased
     * to make lookups and comparisons easier.
     *
     * @param {nsISearchEngine} engine
     *   The aliases of this search engine will be returned.
     * @returns {Array}
     *   An array of lower-cased string aliases as described above.
     */
    _aliasesForEngine(engine: nsISearchEngine): any[];
    /**
     * @param {string} engineName
     *   Name of the search engine.
     * @returns {nsISearchEngine}
     *   The engine based on engineName or null if SearchService has not
     *   initialized.
     */
    getEngineByName(engineName: string): nsISearchEngine;
    observe(subject: any, topic: any, data: any): void;
}
export {};
