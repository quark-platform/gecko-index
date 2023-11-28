export namespace SearchTestUtils {
    function init(testScope: any): void;
    /**
     * Adds an OpenSearch based engine to the search service. It will remove
     * the engine at the end of the test.
     *
     * @param {object} options
     *   The options for the new search engine.
     * @param {string} options.url
     *   The URL of the engine to add.
     * @param {boolean} [options.setAsDefault]
     *   Whether or not to set the engine as default automatically. If this is
     *   true, the engine will be set as default, and the previous default engine
     *   will be restored when the test exits.
     * @param {boolean} [options.setAsDefaultPrivate]
     *   Whether or not to set the engine as default automatically for private mode.
     *   If this is true, the engine will be set as default, and the previous default
     *   engine will be restored when the test exits.
     * @returns {Promise} Returns a promise that is resolved with the new engine
     *                    or rejected if it fails.
     */
    function promiseNewSearchEngine({ url, setAsDefault, setAsDefaultPrivate, }: {
        url: string;
        setAsDefault?: boolean;
        setAsDefaultPrivate?: boolean;
    }): Promise<any>;
    /**
     * Returns a promise that is resolved when an observer notification from the
     * search service fires with the specified data.
     *
     * @param {*} expectedData
     *        The value the observer notification sends that causes us to resolve
     *        the promise.
     * @param {string} topic
     *        The notification topic to observe. Defaults to 'browser-search-service'.
     * @returns {Promise}
     *        Returns a promise that is resolved with the subject of the
     *        topic once the topic with the data has been observed.
     */
    function promiseSearchNotification(expectedData: any, topic?: string): Promise<any>;
    /**
     * Load engines from test data located in particular folders.
     *
     * @param {string} [folder]
     *   The folder name to use.
     * @param {string} [subFolder]
     *   The subfolder to use, if any.
     * @param {Array} [config]
     *   An array which contains the configuration to set.
     * @returns {object}
     *   An object that is a sinon stub for the configuration getter.
     */
    function useTestEngines(folder?: string, subFolder?: string, config?: any[]): any;
    function useMochitestEngines(testDir: any): Promise<void>;
    /**
     * Convert a list of engine configurations into engine objects.
     *
     * @param {Array} engineConfigurations
     *   An array of engine configurations.
     */
    function searchConfigToEngines(engineConfigurations: any[]): Promise<any[]>;
    /**
     * Provides various setup for xpcshell-tests installing WebExtensions. Should
     * be called from the global scope of the test.
     *
     * @param {object} scope
     *  The global scope of the test being run.
     * @param {*} usePrivilegedSignatures
     *  How to sign created addons.
     */
    function initXPCShellAddonManager(scope: any, usePrivilegedSignatures?: any): void;
    /**
     * Add a search engine as a WebExtension.
     *
     * Note: for tests, the extension must generally be unloaded before
     * `registerCleanupFunction`s are triggered. See bug 1694409.
     *
     * This function automatically registers an unload for the extension, this
     * may be skipped with the skipUnload argument.
     *
     * @param {object} [manifest]
     *   See {@link createEngineManifest}
     * @param {object} [options]
     *   Options for how the engine is installed and uninstalled.
     * @param {boolean} [options.setAsDefault]
     *   Whether or not to set the engine as default automatically. If this is
     *   true, the engine will be set as default, and the previous default engine
     *   will be restored when the test exits.
     * @param {boolean} [options.setAsDefaultPrivate]
     *   Whether or not to set the engine as default automatically for private mode.
     *   If this is true, the engine will be set as default, and the previous default
     *   engine will be restored when the test exits.
     * @param {boolean} [options.skipUnload]
     *   If true, this will skip the automatic unloading of the extension.
     * @param {object} [files]
     *   A key value object where the keys are the filenames and their contents are
     *   the values. Used for simulating locales and other files in the WebExtension.
     * @returns {object}
     *   The loaded extension.
     */
    function installSearchExtension(manifest?: any, { setAsDefault, setAsDefaultPrivate, skipUnload, }?: {
        setAsDefault?: boolean;
        setAsDefaultPrivate?: boolean;
        skipUnload?: boolean;
    }, files?: any): any;
    /**
     * Install a search engine as a system extension to simulate
     * Normandy updates. For xpcshell-tests only.
     *
     * @param {object} [options]
     *   See {@link createEngineManifest}
     */
    function installSystemSearchExtension(options?: any): Promise<any>;
    /**
     * Create a search engine extension manifest.
     *
     * @param {object} [options]
     *   The options for the manifest.
     * @param {string} [options.id]
     *   The id to use for the WebExtension.
     * @param {string} [options.name]
     *   The display name to use for the WebExtension.
     * @param {string} [options.version]
     *   The version to use for the WebExtension.
     * @param {string} [options.favicon_url]
     *   The favicon to use for the search engine in the WebExtension.
     * @param {string} [options.keyword]
     *   The keyword to use for the search engine.
     * @param {string} [options.encoding]
     *   The encoding to use for the search engine.
     * @param {string} [options.search_url]
     *   The search URL to use for the search engine.
     * @param {string} [options.search_url_get_params]
     *   The GET search URL parameters to use for the search engine
     * @param {string} [options.search_url_post_params]
     *   The POST search URL parameters to use for the search engine
     * @param {string} [options.suggest_url]
     *   The suggestion URL to use for the search engine.
     * @param {string} [options.suggest_url_get_params]
     *   The suggestion URL parameters to use for the search engine.
     * @param {string} [options.search_form]
     *   The search form to use for the search engine.
     * @returns {object}
     *   The generated manifest.
     */
    function createEngineManifest(options?: {
        id?: string;
        name?: string;
        version?: string;
        favicon_url?: string;
        keyword?: string;
        encoding?: string;
        search_url?: string;
        search_url_get_params?: string;
        search_url_post_params?: string;
        suggest_url?: string;
        suggest_url_get_params?: string;
        search_form?: string;
    }): any;
    namespace idleService {
        let _observers: Set<any>;
        function _reset(): void;
        function _fireObservers(state: any): void;
        let QueryInterface: any;
        let idleTime: number;
        function addIdleObserver(observer: any, time: any): void;
        function removeIdleObserver(observer: any, time: any): void;
    }
    /**
     * Register the mock idleSerice.
     */
    function useMockIdleService(): void;
    /**
     * Simulates an update to the RemoteSettings configuration.
     *
     * @param {object} [config]
     *  The new configuration.
     */
    function updateRemoteSettingsConfig(config?: any): Promise<void>;
}
