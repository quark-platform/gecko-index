export let FormAutofillUtils: any;
export namespace AddressDataLoader {
    namespace _dataLoaded {
        let country: boolean;
        let level1: Set<any>;
    }
    /**
     * Load address data and extension script into a sandbox from different paths.
     *
     * @param   {string} path
     *          The path for address data and extension script. It could be root of the address
     *          metadata folder(addressmetadata/) or under specific country(addressmetadata/TW/).
     * @returns {object}
     *          A sandbox that contains address data object with properties from extension.
     */
    function _loadScripts(path: string): any;
    /**
     * Convert certain properties' string value into array. We should make sure
     * the cached data is parsed.
     *
     * @param   {object} data Original metadata from addressReferences.
     * @returns {object} parsed metadata with property value that converts to array.
     */
    function _parse(data: any): any;
    /**
     * We'll cache addressData in the loader once the data loaded from scripts.
     * It'll become the example below after loading addressReferences with extension:
     * addressData: {
     *               "data/US": {"lang": ["en"], ...// Data defined in libaddressinput metadata
     *                           "alternative_names": ... // Data defined in extension }
     *               "data/CA": {} // Other supported country metadata
     *               "data/TW": {} // Other supported country metadata
     *               "data/TW/台北市": {} // Other supported country level 1 metadata
     *              }
     *
     * @param   {string} country
     * @param   {string?} level1
     * @returns {object} Default locale metadata
     */
    function _loadData(country: string, level1?: string): any;
    /**
     * Return the region metadata with default locale and other locales (if exists).
     *
     * @param   {string} country
     * @param   {string?} level1
     * @returns {object} Return default locale and other locales metadata.
     */
    function getData(country: string, level1?: string): any;
}
