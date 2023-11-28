/**
 * The external API as exposed by this module.
 */
export const PrivacyLevel: Readonly<{
    /**
     * Returns whether the current privacy level allows saving data for the given
     * |url|.
     *
     * @param url The URL we want to save data for.
     * @return bool
     */
    check(url: any): bool;
    /**
     * Checks whether we're allowed to save data for a specific site.
     *
     * @param isHttps A boolean that tells whether the site uses TLS.
     * @return {bool} Whether we can save data for the specified site.
     */
    canSave(isHttps: any): bool;
}>;
