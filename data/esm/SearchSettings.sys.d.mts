/**
 * This class manages the saves search settings.
 *
 * Global settings can be saved and obtained from this class via the
 * `*Attribute` methods.
 */
export class SearchSettings {
    static SETTINGS_INVALIDATION_DELAY: number;
    constructor(searchService: any);
    QueryInterface: any;
    /**
     * A reference to the pending DeferredTask, if there is one.
     */
    _batchTask: any;
    addObservers(): void;
    /**
     * Cleans up, removing observers.
     */
    removeObservers(): void;
    /**
     * Reads the settings file.
     *
     * @param {string} origin
     *   If this parameter is "test", then the settings will not be written. As
     *   some tests manipulate the settings directly, we allow turning off writing to
     *   avoid writing stale settings data.
     * @returns {object}
     *   Returns the settings file data.
     */
    get(origin?: string): object;
    /**
     * Queues writing the settings until after SETTINGS_INVALIDATION_DELAY. If there
     * is a currently queued task then it will be restarted.
     */
    _delayedWrite(): void;
    /**
     * Ensures any pending writes of the settings are completed.
     *
     * @param {string} origin
     *   If this parameter is "test", then the settings will not be written. As
     *   some tests manipulate the settings directly, we allow turning off writing to
     *   avoid writing stale settings data.
     */
    _ensurePendingWritesCompleted(origin?: string): Promise<void>;
    /**
     * Writes the settings to disk (no delay).
     */
    _write(): Promise<void>;
    /**
     * Sets an attribute without verification.
     *
     * @param {string} name
     *   The name of the attribute to set.
     * @param {*} val
     *   The value to set.
     */
    setMetaDataAttribute(name: string, val: any): void;
    /**
     * Sets a verified attribute. This will save an additional hash
     * value, that can be verified when reading back.
     *
     * @param {string} name
     *   The name of the attribute to set.
     * @param {*} val
     *   The value to set.
     */
    setVerifiedMetaDataAttribute(name: string, val: any): void;
    /**
     * Gets an attribute without verification.
     *
     * @param {string} name
     *   The name of the attribute to get.
     * @returns {*}
     *   The value of the attribute, or undefined if not known.
     */
    getMetaDataAttribute(name: string): any;
    /**
     * Gets a copy of the settings metadata.
     *
     * @returns {*}
     *   A copy of the settings metadata object.
     *
     */
    getSettingsMetaData(): any;
    /**
     * Gets a verified attribute.
     *
     * @param {string} name
     *   The name of the attribute to get.
     * @param {boolean} isAppProvided
     *   |true| if the engine associated with the attribute is an application
     *          provided engine.
     * @returns {*}
     *   The value of the attribute.
     *   We return undefined if the value of the attribute is not known or does
     *   not match the verification hash.
     *
     */
    getVerifiedMetaDataAttribute(name: string, isAppProvided: boolean): any;
    /**
     * Sets an attribute in #settings.engines._metaData
     *
     * @param {string} engineName
     *   The name of the engine.
     * @param {string} property
     *   The name of the attribute to set.
     * @param {*} value
     *   The value to set.
     */
    setEngineMetaDataAttribute(engineName: string, property: string, value: any): void;
    /**
     * Gets an attribute from #settings.engines._metaData
     *
     * @param {string} engineName
     *   The name of the engine.
     * @param {string} property
     *   The name of the attribute to get.
     * @returns {*}
     *   The value of the attribute, or undefined if not known.
     */
    getEngineMetaDataAttribute(engineName: string, property: string): any;
    /**
     * Returns the name for the hash for a particular attribute. This is
     * necessary because the default engine ID property is named `current`
     * with its hash as `hash`. All other hashes are in the `<name>Hash` format.
     *
     * @param {string} name
     *   The name of the attribute to get the hash name for.
     * @returns {string}
     *   The hash name to use.
     */
    getHashName(name: string): string;
    /**
     * Handles shutdown; writing the settings if necessary.
     *
     * @param {object} state
     *   The shutdownState object that is used to help analyzing the shutdown
     *   state in case of a crash or shutdown timeout.
     */
    shutdown(state: object): Promise<void>;
    observe(engine: any, topic: any, verb: any): void;
    /**
     * Compares the #settings and #cachedSettings objects.
     *
     * @returns {boolean}
     *   True if the objects have the same property and values.
     */
    isCurrentAndCachedSettingsEqual(): boolean;
    /**
     * This function writes to settings versions 6 and below. It does two
     * updates:
     *   1) Store engine ids.
     *   2) Store "defaultEngineId" and "privateDefaultEngineId" to replace
     *      "current" and "private" because we are no longer referencing the
     *      "current" and "private" attributes with engine names as their values.
     *
     * @param {object} clonedSettings
     *   The SearchService holds a deep copy of the settings file object. This
     *   clonedSettings is passed in as an argument from SearchService.
     */
    migrateEngineIds(clonedSettings: object): void;
    #private;
}
