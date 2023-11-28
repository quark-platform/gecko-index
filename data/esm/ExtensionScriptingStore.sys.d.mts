export function makeInternalContentScript(extension: Extension, options: object, prependBaseURL?: boolean): object;
export function makePublicContentScript(extension: Extension, internalScript: object): object;
export namespace ExtensionScriptingStore {
    function initExtension(extension: any): Promise<void>;
    function getInitialScriptIdsMap(extension: any): Map<any, any>;
    function persistAll(extension: any): Promise<void>;
    function clearOnUninstall(extensionId: any): Promise<void>;
    function _getStoreForTesting(): Store;
}
declare class Store {
    _init(): Promise<void>;
    _store: any;
    lazyInit(): Promise<void>;
    _initPromise: Promise<void>;
    /**
     * Returns all the stored scripts for a given extension (ID).
     *
     * @param {string} extensionId An extension ID
     * @returns {Array} An array of scripts
     */
    getAll(extensionId: string): any[];
    /**
     * Writes all the scripts provided for a given extension (ID) to the internal
     * store (which is eventually stored on disk).
     *
     * We store each script of an extension as a key/value pair where the key is
     * `<extensionId>/<scriptId>` and the value is the corresponding script
     * details as a JSON string.
     *
     * The format on disk should look like this one:
     *
     * ```
     * {
     *   "@extension-id/script-1": {"id: "script-1", <other props>},
     *   "@extension-id/script-2": {"id: "script-2", <other props>}
     * }
     * ```
     *
     * @param {string} extensionId An extension ID
     * @param {Array} scripts An array of scripts to store on disk
     */
    writeMany(extensionId: string, scripts: any[]): Promise<any>;
    /**
     * Deletes all the stored scripts for a given extension (ID).
     *
     * @param {string} extensionId An extension ID
     */
    deleteAll(extensionId: string): Promise<any>;
    /**
     * Returns an array of key/script pairs from the internal store belonging to
     * the given extension (ID).
     *
     * The data returned by this method should look like this (assuming we have
     * two scripts named `script-1` and `script-2` for the extension with ID
     * `@extension-id`):
     *
     * ```
     * [
     *   ["@extension-id/script-1", {"id: "script-1", <other props>}],
     *   ["@extension-id/script-2", {"id: "script-2", <other props>}]
     * ]
     * ```
     *
     * @param {string} extensionId An extension ID
     * @returns {Array} An array of key/script pairs
     */
    getByExtensionId(extensionId: string): any[];
}
export {};
