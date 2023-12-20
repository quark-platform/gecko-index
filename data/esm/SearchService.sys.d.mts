/**
 * The search service handles loading and maintaining of search engines. It will
 * also work out the default lists for each locale/region.
 *
 * @implements {nsISearchService}
 */
export class SearchService implements nsISearchService {
    /**
     * A map of engine display names to `SearchEngine`.
     *
     * @type {Map<string, object>|null}
     */
    _engines: Map<string, object> | null;
    _settings: any;
    classID: unknown;
    set defaultEngine(newEngine: any);
    get defaultEngine(): any;
    set defaultPrivateEngine(newEngine: any);
    get defaultPrivateEngine(): any;
    getDefault(): Promise<any>;
    setDefault(engine: any, changeSource: any): Promise<void>;
    getDefaultPrivate(): Promise<any>;
    setDefaultPrivate(engine: any, changeSource: any): Promise<void>;
    /**
     * @returns {SearchEngine}
     *   The engine that is the default for this locale/region, ignoring any
     *   user changes to the default engine.
     */
    get appDefaultEngine(): SearchEngine;
    /**
     * @returns {SearchEngine}
     *   The engine that is the default for this locale/region in private browsing
     *   mode, ignoring any user changes to the default engine.
     *   Note: if there is no default for this locale/region, then the non-private
     *   browsing engine will be returned.
     */
    get appPrivateDefaultEngine(): SearchEngine;
    /**
     * Determine whether initialization has been completed.
     *
     * Clients of the service can use this attribute to quickly determine whether
     * initialization is complete, and decide to trigger some immediate treatment,
     * to launch asynchronous initialization or to bailout.
     *
     * Note that this attribute does not indicate that initialization has
     * succeeded, use hasSuccessfullyInitialized() for that.
     *
     * @returns {boolean}
     *  |true | if the search service has finished its attempt to initialize and
     *          we have an outcome. It could have failed or succeeded during this
     *          process.
     *  |false| if initialization has not been triggered yet or initialization is
     *          still ongoing.
     */
    get isInitialized(): boolean;
    /**
     * Determine whether initialization has been successfully completed.
     *
     * @returns {boolean}
     *  |true | if the search service has succesfully initialized.
     *  |false| if initialization has not been started yet, initialization is
     *          still ongoing or initializaiton has failed.
     */
    get hasSuccessfullyInitialized(): boolean;
    /**
     * A promise that is resolved when initialization has finished. This does not
     * trigger initialization to begin.
     *
     * @returns {Promise}
     *   Resolved when initalization has successfully finished, and rejected if it
     *   has failed.
     */
    get promiseInitialized(): Promise<any>;
    getDefaultEngineInfo(): {
        defaultSearchEngine: any;
        defaultSearchEngineData: any;
    };
    /**
     * If possible, please call getEngineById() rather than getEngineByName()
     * because engines are stored as { id: object } in this._engine Map.
     *
     * Returns the engine associated with the name.
     *
     * @param {string} engineName
     *   The name of the engine.
     * @returns {SearchEngine}
     *   The associated engine if found, null otherwise.
     */
    getEngineByName(engineName: string): SearchEngine;
    /**
     * Returns the engine associated with the id.
     *
     * @param {string} engineId
     *   The id of the engine.
     * @returns {SearchEngine}
     *   The associated engine if found, null otherwise.
     */
    getEngineById(engineId: string): SearchEngine;
    getEngineByAlias(alias: any): Promise<any>;
    getEngines(): Promise<any[]>;
    getVisibleEngines(): Promise<SearchEngine[]>;
    getAppProvidedEngines(): Promise<any[]>;
    getEnginesByExtensionID(extensionID: any): Promise<any[]>;
    /**
     * This function calls #init to start initialization when it has not been
     * started yet. Otherwise, it returns the pending promise.
     *
     * @returns {Promise}
     *   Returns the pending Promise when #init has started but not yet finished.
     *   | Resolved | when initialization has successfully finished.
     *   | Rejected | when initialization has failed.
     *
     */
    init(): Promise<any>;
    /**
     * Runs background checks for the search service. This is called from
     * BrowserGlue and may be run once per session if the user is idle for
     * long enough.
     */
    runBackgroundChecks(): Promise<void>;
    /**
     * Test only - reset SearchService data. Ideally this should be replaced
     */
    reset(): void;
    /**
     * An array of engine short names sorted into display order.
     *
     * @type {Array}
     */
    _cachedSortedEngines: any[];
    /**
     * An object containing the {id, locale} of the WebExtension for the default
     * engine, as suggested by the configuration.
     * For the legacy configuration, this is the user visible name.
     *
     * @type {object}
     *
     * This is prefixed with _ rather than # because it is
     * called in a test.
     */
    _searchDefault: object;
    forceInitializationStatusForTests(status: any): void;
    /**
     * Test only variable to indicate an error should occur during
     * search service initialization.
     *
     * @type {string}
     */
    errorToThrowInTest: string;
    resetEngineSelector(): void;
    resetToAppDefaultEngine(): void;
    maybeSetAndOverrideDefault(extension: any): Promise<{
        canChangeToAppProvided: boolean;
        canInstallEngine: boolean;
    }>;
    /**
     * Adds a search engine that is specified by the user.
     *
     * @param {string} name
     *   The name of the search engine
     * @param {string} url
     *   The url that the search engine uses for searches
     * @param {string} alias
     *   An alias for the search engine
     */
    addUserEngine(name: string, url: string, alias: string): Promise<void>;
    /**
     * Called from the AddonManager when it either installs a new
     * extension containing a search engine definition or an upgrade
     * to an existing one.
     *
     * @param {object} extension
     *   An Extension object containing data about the extension.
     */
    addEnginesFromExtension(extension: object): Promise<any[]>;
    addOpenSearchEngine(engineURL: any, iconURL: any): Promise<any>;
    removeWebExtensionEngine(id: any): Promise<void>;
    removeEngine(engine: any): Promise<void>;
    moveEngine(engine: any, newIndex: any): Promise<void>;
    restoreDefaultEngines(): void;
    parseSubmissionURL(url: any): Readonly<ParseSubmissionResult>;
    /**
     * This is a nsITimerCallback for the timerManager notification that is
     * registered for handling updates to search engines. Only OpenSearch engines
     * have these updates and hence, only those are handled here.
     */
    notify(): void;
    /**
     * Indicates if we're currently in maybeReloadEngines.
     *
     * This is prefixed with _ rather than # because it is
     * called in a test.
     *
     * @type {boolean}
     */
    _reloadingEngines: boolean;
    /**
     * Helper function to get the current default engine.
     *
     * This is prefixed with _ rather than # because it is
     * called in test_remove_engine_notification_box.js
     *
     * @param {boolean} privateMode
     *   If true, returns the default engine for private browsing mode, otherwise
     *   the default engine for the normal mode. Note, this function does not
     *   check the "separatePrivateDefault" preference - that is up to the caller.
     * @returns {nsISearchEngine|null}
     *   The appropriate search engine, or null if one could not be determined.
     */
    _getEngineDefault(privateMode: boolean): nsISearchEngine | null;
    ignoreListListener: any;
    /**
     * Reloads engines asynchronously, but only when
     * the service has already been initialized.
     *
     * This is prefixed with _ rather than # because it is
     * called in test_reload_engines.js
     *
     * @param {integer} changeReason
     *   The reason reload engines is being called, one of
     *   Ci.nsISearchService.CHANGE_REASON*
     */
    _maybeReloadEngines(changeReason: integer): Promise<void>;
    _reloadEngines(settings: any, changeReason: any): Promise<void>;
    _fetchEngineSelectorEngines(): Promise<{
        engines: any;
        privateDefault: any;
    }>;
    /**
     * Sorts engines by the default settings (prefs, configuration values).
     *
     * @param {Array} engines
     *   An array of engine objects to sort.
     * @returns {Array}
     *   The sorted array of engine objects.
     *
     * This is a private method with _ rather than # because it is
     * called in a test.
     */
    _sortEnginesByDefaults(engines: any[]): any[];
    /**
     * Creates and adds a WebExtension based engine.
     *
     * @param {object} options
     *   Options for the engine.
     * @param {Extension} options.extension
     *   An Extension object containing data about the extension.
     * @param {string} [options.locale]
     *   The locale to use within the WebExtension. Defaults to the WebExtension's
     *   default locale.
     * @param {initEngine} [options.initEngine]
     *   Set to true if this engine is being loaded during initialization.
     */
    _createAndAddEngine({ extension, locale, initEngine, }: {
        extension: Extension;
        locale?: string;
        initEngine?: any;
    }): Promise<any>;
    _removeObservers(): void;
    QueryInterface: MozQueryInterface;
    observe(engine: any, topic: any, verb: any): void;
    /**
     * Create an engine object from the search configuration details.
     *
     * This method is prefixed with _ rather than # because it is
     * called in a test.
     *
     * @param {object} config
     *   The configuration object that defines the details of the engine
     *   webExtensionId etc.
     * @returns {nsISearchEngine}
     *   Returns the search engine object.
     */
    _makeEngineFromConfig(config: object): nsISearchEngine;
    /**
     * Shows an infobar to notify the user their default search engine has been
     * removed and replaced by a new default search engine.
     *
     * This method is prefixed with _ rather than # because it is
     * called in a test.
     *
     * @param {string} prevCurrentEngineName
     *   The name of the previous default engine that will be replaced.
     * @param {string} newCurrentEngineName
     *   The name of the engine that will be the new default engine.
     *
     */
    _showRemovalOfSearchEngineNotificationBox(prevCurrentEngineName: string, newCurrentEngineName: string): void;
    #private;
}
/**
 * The ParseSubmissionResult contains getter methods that return attributes
 * about the parsed submission url.
 *
 * @implements {nsIParseSubmissionResult}
 */
declare class ParseSubmissionResult implements nsIParseSubmissionResult {
    constructor(engine: any, terms: any, termsParameterName: any);
    get engine(): any;
    get terms(): string;
    get termsParameterName(): string;
    QueryInterface: MozQueryInterface;
    #private;
}
export {};
