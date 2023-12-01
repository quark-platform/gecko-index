export const OPEN_H264_ID: "gmp-gmpopenh264";
export const WIDEVINE_ID: "gmp-widevinecdm";
export const GMP_PLUGIN_IDS: string[];
export namespace GMPUtils {
    /**
     * Checks whether or not a given plugin is hidden. Hidden plugins are neither
     * downloaded nor displayed in the addons manager.
     * @param   aPlugin
     *          The plugin to check.
     */
    function isPluginHidden(aPlugin: any): boolean;
    /**
     * Checks whether or not a given plugin is supported by the current OS.
     * @param   aPlugin
     *          The plugin to check.
     */
    function _isPluginSupported(aPlugin: any): boolean;
    /**
     * Checks whether or not a given plugin is visible in the addons manager
     * UI and the "enable DRM" notification box. This can be used to test
     * plugins that aren't yet turned on in the mozconfig.
     * @param   aPlugin
     *          The plugin to check.
     */
    function _isPluginVisible(aPlugin: any): boolean;
    /**
     * Checks whether or not a given plugin is forced-supported. This is used
     * in automated tests to override the checks that prevent GMPs running on an
     * unsupported platform.
     * @param   aPlugin
     *          The plugin to check.
     */
    function _isPluginForceSupported(aPlugin: any): boolean;
    function _isWindowsOnARM64(): any;
    function _expectedABI(aPlugin: any): string;
}
export namespace GMPPrefs {
    let KEY_EME_ENABLED: string;
    let KEY_PLUGIN_ENABLED: string;
    let KEY_PLUGIN_LAST_DOWNLOAD: string;
    let KEY_PLUGIN_LAST_DOWNLOAD_FAILED: string;
    let KEY_PLUGIN_LAST_DOWNLOAD_FAIL_REASON: string;
    let KEY_PLUGIN_LAST_INSTALL_FAILED: string;
    let KEY_PLUGIN_LAST_INSTALL_FAIL_REASON: string;
    let KEY_PLUGIN_LAST_INSTALL_START: string;
    let KEY_PLUGIN_LAST_UPDATE: string;
    let KEY_PLUGIN_HASHVALUE: string;
    let KEY_PLUGIN_VERSION: string;
    let KEY_PLUGIN_AUTOUPDATE: string;
    let KEY_PLUGIN_VISIBLE: string;
    let KEY_PLUGIN_ABI: string;
    let KEY_PLUGIN_FORCE_SUPPORTED: string;
    let KEY_PLUGIN_ALLOW_X64_ON_ARM64: string;
    let KEY_URL: string;
    let KEY_URL_OVERRIDE: string;
    let KEY_CERT_CHECKATTRS: string;
    let KEY_CERT_REQUIREBUILTIN: string;
    let KEY_CHECK_CONTENT_SIGNATURE: string;
    let KEY_UPDATE_LAST_CHECK: string;
    let KEY_UPDATE_LAST_EMPTY_CHECK: string;
    let KEY_SECONDS_BETWEEN_CHECKS: string;
    let KEY_UPDATE_ENABLED: string;
    let KEY_APP_DISTRIBUTION: string;
    let KEY_APP_DISTRIBUTION_VERSION: string;
    let KEY_BUILDID: string;
    let KEY_CERTS_BRANCH: string;
    let KEY_PROVIDER_ENABLED: string;
    let KEY_LOG_BASE: string;
    let KEY_LOGGING_LEVEL: string;
    let KEY_LOGGING_DUMP: string;
    /**
     * Obtains the specified string preference in relation to the specified plugin.
     * @param aKey The preference key value to use.
     * @param aDefaultValue The default value if no preference exists.
     * @param aPlugin The plugin to scope the preference to.
     * @return The obtained preference value, or the defaultValue if none exists.
     */
    function getString(aKey: any, aDefaultValue: any, aPlugin: any): string;
    /**
     * Obtains the specified int preference in relation to the specified plugin.
     * @param aKey The preference key value to use.
     * @param aDefaultValue The default value if no preference exists.
     * @param aPlugin The plugin to scope the preference to.
     * @return The obtained preference value, or the defaultValue if none exists.
     */
    function getInt(aKey: any, aDefaultValue: any, aPlugin: any): number;
    /**
     * Obtains the specified bool preference in relation to the specified plugin.
     * @param aKey The preference key value to use.
     * @param aDefaultValue The default value if no preference exists.
     * @param aPlugin The plugin to scope the preference to.
     * @return The obtained preference value, or the defaultValue if none exists.
     */
    function getBool(aKey: any, aDefaultValue: any, aPlugin: any): boolean;
    /**
     * Sets the specified string preference in relation to the specified plugin.
     * @param aKey The preference key value to use.
     * @param aVal The value to set.
     * @param aPlugin The plugin to scope the preference to.
     */
    function setString(aKey: any, aVal: any, aPlugin: any): void;
    /**
     * Sets the specified bool preference in relation to the specified plugin.
     * @param aKey The preference key value to use.
     * @param aVal The value to set.
     * @param aPlugin The plugin to scope the preference to.
     */
    function setBool(aKey: any, aVal: any, aPlugin: any): void;
    /**
     * Sets the specified int preference in relation to the specified plugin.
     * @param aKey The preference key value to use.
     * @param aVal The value to set.
     * @param aPlugin The plugin to scope the preference to.
     */
    function setInt(aKey: any, aVal: any, aPlugin: any): void;
    /**
     * Checks whether or not the specified preference is set in relation to the
     * specified plugin.
     * @param aKey The preference key value to use.
     * @param aPlugin The plugin to scope the preference to.
     * @return true if the preference is set, false otherwise.
     */
    function isSet(aKey: any, aPlugin: any): boolean;
    /**
     * Resets the specified preference in relation to the specified plugin to its
     * default.
     * @param aKey The preference key value to use.
     * @param aPlugin The plugin to scope the preference to.
     */
    function reset(aKey: any, aPlugin: any): void;
    /**
     * Scopes the specified preference key to the specified plugin.
     * @param aKey The preference key value to use.
     * @param aPlugin The plugin to scope the preference to.
     * @return A preference key scoped to the specified plugin.
     */
    function getPrefKey(aKey: any, aPlugin: any): any;
}
