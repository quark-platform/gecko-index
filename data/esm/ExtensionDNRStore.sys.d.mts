export namespace ExtensionDNRStore {
    function clearOnUninstall(extensionUUID: any): Promise<void>;
    function initExtension(extension: any): Promise<void>;
    function updateDynamicRules(extension: any, updateRuleOptions: any): Promise<void>;
    function updateEnabledStaticRulesets(extension: any, updateRulesetOptions: any): Promise<void>;
    function _getLastUpdateTag(extensionUUID: any): any;
    function _getStoreForTesting(): RulesetsStore;
    function _getStoreDataClassForTesting(): typeof StoreData;
    function _recreateStoreForTesting(): RulesetsStore;
    function _storeLastUpdateTag(extensionUUID: any, lastUpdateTag: any): void;
}
/**
 * Internal representation of the enabled static rulesets (used in StoreData
 * and Store methods type signatures).
 */
export type EnabledStaticRuleset = object;
/**
 * Class managing the rulesets persisted across browser sessions.
 *
 * The data gets stored in two per-extension files:
 *
 * - `ProfD/extension-dnr/EXT_UUID.json.lz4` is a lz4-compressed JSON file that is expected to include
 *   the ruleset ids for the enabled static rulesets and the dynamic rules.
 *
 * All browser data stored is expected to be persisted across browser updates, but the enabled static ruleset
 * ids are expected to be reset and reinitialized from the extension manifest.json properties when the
 * add-on is being updated (either downgraded or upgraded).
 *
 * In case of unexpected data schema downgrades (which may be hit if the user explicit pass --allow-downgrade
 * while using an older browser version than the one used when the data has been stored), the entire stored
 * data is reset and re-initialized from scratch based on the manifest.json file.
 */
declare class RulesetsStore {
    _data: Map<any, any>;
    _dataPromises: Map<any, any>;
    _savePromises: Map<any, any>;
    _dataUpdateQueues: any;
    _ensureStoreDirectoryPromise: any;
    _ensureCacheDirectoryPromise: any;
    _ensureCacheLoaded: Promise<void>;
    _saveCacheTask: any;
    _startupCacheData: Map<any, any>;
    /**
     * Wait for the startup cache data to be stored on disk.
     *
     * NOTE: Only meant to be used in xpcshell tests.
     *
     * @returns {Promise<void>}
     */
    waitSaveCacheDataForTesting(): Promise<void>;
    /**
     * Remove store file for the given extension UUId from disk (used to remove all
     * data on addon uninstall).
     *
     * @param {string} extensionUUID
     * @returns {Promise<void>}
     */
    clearOnUninstall(extensionUUID: string): Promise<void>;
    /**
     * Load (or initialize) the store file data for the given extension and
     * return an Array of the dynamic rules.
     *
     * @param {Extension} extension
     *
     * @returns {Promise<Array<Rule>>}
     *          Resolve to a reference to the dynamic rules array.
     *          NOTE: the caller should never mutate the content of this array,
     *          updates to the dynamic rules should always go through
     *          the `updateDynamicRules` method.
     */
    getDynamicRules(extension: Extension): Promise<Array<Rule>>;
    /**
     * Load (or initialize) the store file data for the given extension and
     * return a Map of the enabled static rulesets and their related rules.
     *
     * - if the extension manifest doesn't have any static rulesets declared in the
     *   manifest, returns null
     *
     * - if the extension version from the stored data doesn't match the current
     *   extension versions, the static rules are being reloaded from the manifest.
     *
     * @param {Extension} extension
     *
     * @returns {Promise<Map<ruleset_id, EnabledStaticRuleset>>}
     *          Resolves to a reference to the static rulesets map.
     *          NOTE: the caller should never mutate the content of this map,
     *          updates to the enabled static rulesets should always go through
     *          the `updateEnabledStaticRulesets` method.
     */
    getEnabledStaticRulesets(extension: Extension): Promise<Map<ruleset_id, EnabledStaticRuleset>>;
    getAvailableStaticRuleCount(extension: any): Promise<any>;
    /**
     * Initialize the DNR store for the given extension, it does also queue the task to make
     * sure that extension DNR API calls triggered while the initialization may still be
     * in progress will be executed sequentially.
     *
     * @param {Extension}     extension
     *
     * @returns {Promise<void>} A promise resolved when the async initialization has been
     *                          completed.
     */
    initExtension(extension: Extension): Promise<void>;
    /**
     * Update the dynamic rules, queue changes to prevent races between calls
     * that may be triggered while an update is still in process.
     *
     * @param {Extension}     extension
     * @param {object}        params
     * @param {Array<string>} [params.removeRuleIds=[]]
     * @param {Array<Rule>} [params.addRules=[]]
     *
     * @returns {Promise<void>} A promise resolved when the dynamic rules async update has
     *                          been completed.
     */
    updateDynamicRules(extension: Extension, { removeRuleIds, addRules }: {
        removeRuleIds?: Array<string>;
        addRules?: Array<Rule>;
    }): Promise<void>;
    /**
     * Update the enabled rulesets, queue changes to prevent races between calls
     * that may be triggered while an update is still in process.
     *
     * @param {Extension}     extension
     * @param {object}        params
     * @param {Array<string>} [params.disableRulesetIds=[]]
     * @param {Array<string>} [params.enableRulesetIds=[]]
     *
     * @returns {Promise<void>} A promise resolved when the enabled static rulesets async
     *                          update has been completed.
     */
    updateEnabledStaticRulesets(extension: Extension, { disableRulesetIds, enableRulesetIds }: {
        disableRulesetIds?: Array<string>;
        enableRulesetIds?: Array<string>;
    }): Promise<void>;
    /**
     * Update DNR RulesetManager rules to match the current DNR rules enabled in the DNRStore.
     *
     * @param {Extension} extension
     * @param {object}    [params]
     * @param {boolean}   [params.updateStaticRulesets=true]
     * @param {boolean}   [params.updateDynamicRuleset=true]
     */
    updateRulesetManager(extension: Extension, { updateStaticRulesets, updateDynamicRuleset }?: {
        updateStaticRulesets?: boolean;
        updateDynamicRuleset?: boolean;
    }): void;
    /**
     * Return the store file path for the given the extension's uuid and the cache
     * file with startupCache data for all the extensions.
     *
     * @param {string} extensionUUID
     * @returns {{ storeFile: string | void, cacheFile: string}}
     *          An object including the full paths to both the per-extension store file
     *          for the given extension UUID and the full path to the single startupCache
     *          file (which would include the cached data for all the extensions).
     */
    getFilePaths(extensionUUID: string): {
        storeFile: string | void;
        cacheFile: string;
    };
    /**
     * Save the data for the given extension on disk.
     *
     * @param {Extension} extension
     */
    save(extension: Extension): Promise<any>;
    /**
     * Register an onClose shutdown handler to cleanup the data from memory when
     * the extension is shutting down.
     *
     * @param {Extension} extension
     * @returns {void}
     */
    unloadOnShutdown(extension: Extension): void;
    scheduleCacheDataSave(): Promise<any>;
    getStartupCacheData(): {
        seenLastUpdateTags: Set<any>;
        filteredData: Map<any, any>;
    };
    detectStartupCacheDataChanged(seenLastUpdateTags: any): boolean;
    #private;
}
/**
 * Internal representation of the enabled static rulesets (used in StoreData
 * and Store methods type signatures).
 *
 * @typedef {object} EnabledStaticRuleset
 * @inner
 * @property {number} idx
 *           Represent the position of the static ruleset in the manifest
 *           `declarative_net_request.rule_resources` array.
 * @property {Array<Rule>} rules
 *           Represent the array of the DNR rules associated with the static
 *           ruleset.
 */
declare class StoreData {
    static VERSION: number;
    static getLastUpdateTagPref(extensionUUID: any): string;
    static getLastUpdateTag(extensionUUID: any): any;
    static storeLastUpdateTag(extensionUUID: any, lastUpdateTag: any): void;
    static clearLastUpdateTagPref(extensionUUID: any): void;
    static isStaleCacheEntry(extensionUUID: any, cacheStoreData: any): boolean;
    static fromJSON(paramsFromJSON: any, extension: any): StoreData;
    /**
     * @param {Extension} extension
     *        The extension the StoreData is associated to.
     * @param {object} params
     * @param {string} params.extVersion
     *        extension version
     * @param {string} [params.lastUpdateTag]
     *        a tag associated to the data. It is only passed when we are loading the data
     *        from the StartupCache file, while a new tag uuid string will be generated
     *        for brand new data (and then new ones generated on each calls to the `updateRulesets`
     *        method).
     * @param {number} [params.schemaVersion=StoreData.VERSION]
     *        file schema version
     * @param {Map<string, EnabledStaticRuleset>} [params.staticRulesets=new Map()]
     *        map of the enabled static rulesets by ruleset_id, as resolved by
     *        `Store.prototype.#getManifestStaticRulesets`.
     *        NOTE: This map is converted in an array of the ruleset_id strings when the StoreData
     *        instance is being stored on disk (see `toJSON` method) and then converted back to a Map
     *        by `Store.prototype.#getManifestStaticRulesets` when the data is loaded back from disk.
     * @param {Array<Rule>} [params.dynamicRuleset=[]]
     *        array of dynamic rules stored by the extension.
     */
    constructor(extension: Extension, { extVersion, lastUpdateTag, dynamicRuleset, staticRulesets, schemaVersion, }?: {
        extVersion: string;
        lastUpdateTag?: string;
        schemaVersion?: number;
        staticRulesets?: Map<string, EnabledStaticRuleset>;
        dynamicRuleset?: Array<Rule>;
    });
    schemaVersion: any;
    extVersion: any;
    lastUpdateTag: any;
    isFromStartupCache(): boolean;
    isFromTemporarilyInstalled(): any;
    get isEmpty(): boolean;
    /**
     * Updates the static and or dynamic rulesets stored for the related
     * extension.
     *
     * NOTE: This method also:
     * - regenerates the lastUpdateTag associated as an unique identifier
     *   of the revision for the stored data (used to detect stale startup
     *   cache data)
     * - stores the lastUpdateTag into an about:config pref associated to
     *   the extension uuid (also used as part of detecting stale startup
     *   cache data), unless the extension is installed temporarily.
     *
     * @param {object} params
     * @param {Map<string, EnabledStaticRuleset>} [params.staticRulesets]
     *        optional new updated Map of static rulesets
     *        (static rulesets are unchanged if not passed).
     * @param {Array<Rule>} [params.dynamicRuleset=[]]
     *        optional array of updated dynamic rules
     *        (dynamic rules are unchanged if not passed).
     */
    updateRulesets({ staticRulesets, dynamicRuleset }?: {
        staticRulesets?: Map<string, EnabledStaticRuleset>;
        dynamicRuleset?: Array<Rule>;
    }): void;
    staticRulesets: any;
    dynamicRuleset: any;
    toJSON(): {
        schemaVersion: any;
        extVersion: any;
        staticRulesets: any[];
        dynamicRuleset: any;
    };
    #private;
}
export {};
