export namespace l10n {
    /**
     * Retrieve the localized string for the specified entity id.
     *
     * Example:
     *     localizeEntity(["chrome://branding/locale/brand.dtd"], "brandShortName")
     *
     * @param {Array.<string>} urls
     *     Array of .dtd URLs.
     * @param {string} id
     *     The ID of the entity to retrieve the localized string for.
     *
     * @returns {string}
     *     The localized string for the requested entity.
     */
    function localizeEntity(urls: string[], id: string): string;
    /**
     * Retrieve the localized string for the specified property id.
     *
     * Example:
     *
     *     localizeProperty(
     *         ["chrome://global/locale/findbar.properties"], "FastFind");
     *
     * @param {Array.<string>} urls
     *     Array of .properties URLs.
     * @param {string} id
     *     The ID of the property to retrieve the localized string for.
     *
     * @returns {string}
     *     The localized string for the requested property.
     */
    function localizeProperty(urls: string[], id: string): string;
}
