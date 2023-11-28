export namespace ChromeMigrationUtils {
    let CONTEXTUAL_LOGIN_IMPORT_BROWSERS: string[];
    let _extensionVersionDirectoryNames: {};
    let _extensionLocaleStrings: {};
    const supportsLoginsForPlatform: boolean;
    /**
     * Get all extensions installed in a specific profile.
     *
     * @param {string} profileId - A Chrome user profile ID. For example, "Profile 1".
     * @returns {Array} All installed Chrome extensions information.
     */
    function getExtensionList(profileId: string): any[];
    /**
     * Get information of a specific Chrome extension.
     *
     * @param {string} extensionId - The extension ID.
     * @param {string} profileId - The user profile's ID.
     * @returns {object} The Chrome extension information.
     */
    function getExtensionInformation(extensionId: string, profileId: string): any;
    /**
     * Get the manifest's locale string.
     *
     * @param {string} key - The key of a locale string, for example __MSG_name__.
     * @param {string} locale - The specific language of locale string.
     * @param {string} extensionId - The extension ID.
     * @param {string} profileId - The user profile's ID.
     * @returns {string|null} The locale string.
     */
    function _getLocaleString(key: string, locale: string, extensionId: string, profileId: string): string;
    /**
     * Check that a specific extension is installed or not.
     *
     * @param {string} extensionId - The extension ID.
     * @param {string} profileId - The user profile's ID.
     * @returns {boolean} Return true if the extension is installed otherwise return false.
     */
    function isExtensionInstalled(extensionId: string, profileId: string): boolean;
    /**
     * Get the last used user profile's ID.
     *
     * @returns {string} The last used user profile's ID.
     */
    function getLastUsedProfileId(): string;
    /**
     * Get the local state file content.
     *
     * @param {string} chromeProjectName
     *   The type of Chrome data we're looking for (Chromium, Canary, etc.)
     * @param {string} [dataPath=undefined]
     *   The data path that should be used as the parent directory when getting
     *   the local state. If not supplied, the data path is calculated using
     *   getDataPath and the chromeProjectName.
     * @returns {object} The JSON-based content.
     */
    function getLocalState(chromeProjectName?: string, dataPath?: string): any;
    /**
     * Get the path of Chrome extension directory.
     *
     * @param {string} profileId - The user profile's ID.
     * @returns {string} The path of Chrome extension directory.
     */
    function getExtensionPath(profileId: string): string;
    /**
     * Get the path of an application data directory.
     *
     * @param {string} chromeProjectName - The Chrome project name, e.g. "Chrome", "Canary", etc.
     *                                     Defaults to "Chrome".
     * @returns {string} The path of application data directory.
     */
    function getDataPath(chromeProjectName?: string): string;
    /**
     * Get the directory objects sorted by version number.
     *
     * @param {string} path - The path to the extension directory.
     * otherwise return all file/directory object.
     * @returns {Array} The file/directory object array.
     */
    function _getSortedByVersionSubDirectoryNames(path: string): any[];
    /**
     * Convert Chrome time format to Date object. Google Chrome uses FILETIME / 10 as time.
     * FILETIME is based on the same structure of Windows.
     *
     * @param {number} aTime Chrome time
     * @param {string|number|Date} aFallbackValue a date or timestamp (valid argument
     *   for the Date constructor) that will be used if the chrometime value passed is
     *   invalid.
     * @returns {Date} converted Date object
     */
    function chromeTimeToDate(aTime: number, aFallbackValue: string | number | Date): Date;
    /**
     * Convert Date object to Chrome time format. For details on Chrome time, see
     * chromeTimeToDate.
     *
     * @param {Date|number} aDate Date object or integer equivalent
     * @returns {number} Chrome time
     */
    function dateToChromeTime(aDate: number | Date): number;
    let _importableLoginsCache: any;
    function getImportableLogins(formOrigin: any): Promise<any>;
}
