export const InteractionsBlocklist: _InteractionsBlocklist;
/**
 * A class that maintains a blocklist of URLs. The class exposes a method to
 * check if a particular URL is contained on the blocklist.
 */
declare class _InteractionsBlocklist {
    /**
     * Only certain urls can be added as Interactions, either manually or
     * automatically.
     *
     * @returns {Map} A Map keyed by protocol, for each protocol an object may
     *          define stricter requirements, like extension.
     */
    get urlRequirements(): Map<any, any>;
    /**
     * Whether to record interactions for a given URL.
     * The rules are defined in InteractionsBlocklist.urlRequirements.
     *
     * @param {string|URL|nsIURI} url The URL to check.
     * @returns {boolean} whether the url can be recorded.
     */
    canRecordUrl(url: string | URL | nsIURI): boolean;
    /**
     * Checks a URL against a blocklist of URLs. If the URL is blocklisted, we
     * should not record an interaction.
     *
     * @param {string} urlToCheck
     *   The URL we are looking for on the blocklist.
     * @returns {boolean}
     *  True if `url` is on a blocklist. False otherwise.
     */
    isUrlBlocklisted(urlToCheck: string): boolean;
    /**
     * Adds a regex to HOST_BLOCKLIST. Since we can't parse the base host from
     * the regex, we add it to a list of wildcard regexes. All URLs are checked
     * against these wildcard regexes. Currently only exposed for tests and use in
     * the console. In the future we could hook this up to a UI component.
     *
     * @param {string|RegExp} regexToAdd
     *   The regular expression to add to our blocklist.
     */
    addRegexToBlocklist(regexToAdd: string | RegExp): void;
    /**
     * Removes a regex from HOST_BLOCKLIST. If `regexToRemove` is not in the
     * blocklist, this is a no-op. Currently only exposed for tests and use in the
     * console. In the future we could hook this up to a UI component.
     *
     * @param {string|RegExp} regexToRemove
     *   The regular expression to add to our blocklist.
     */
    removeRegexFromBlocklist(regexToRemove: string | RegExp): void;
}
export {};
