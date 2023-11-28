export namespace ExtensionStorage {
    export let jsonFilePromises: Map<any, any>;
    export let listeners: Map<any, any>;
    /**
     * Asynchronously reads the storage file for the given extension ID
     * and returns a Promise for its initialized JSONFile object.
     *
     * @param {string} extensionId
     *        The ID of the extension for which to return a file.
     * @returns {Promise<JSONFile>}
     */
    export function _readFile(extensionId: string): Promise<JSONFile>;
    export function _serializableMap(data: any): SerializeableMap;
    /**
     * Returns a Promise for initialized JSONFile instance for the
     * extension's storage file.
     *
     * @param {string} extensionId
     *        The ID of the extension for which to return a file.
     * @returns {Promise<JSONFile>}
     */
    export function getFile(extensionId: string): Promise<JSONFile>;
    /**
     * Clear the cached jsonFilePromise for a given extensionId
     * (used by ExtensionStorageIDB to free the jsonFile once the data migration
     * has been completed).
     *
     * @param {string} extensionId
     *        The ID of the extension for which to return a file.
     */
    export function clearCachedFile(extensionId: string): Promise<void>;
    /**
     * Sanitizes the given value, and returns a JSON-compatible
     * representation of it, based on the privileges of the given global.
     *
     * @param {value} value
     *        The value to sanitize.
     * @param {Context} context
     *        The extension context in which to sanitize the value
     * @returns {value}
     *        The sanitized value.
     */
    export function sanitize(value: any, context: Context): any;
    /**
     * Returns the path to the storage directory within the profile for
     * the given extension ID.
     *
     * @param {string} extensionId
     *        The ID of the extension for which to return a directory path.
     * @returns {string}
     */
    export function getExtensionDir(extensionId: string): string;
    /**
     * Returns the path to the JSON storage file for the given extension
     * ID.
     *
     * @param {string} extensionId
     *        The ID of the extension for which to return a file path.
     * @returns {string}
     */
    export function getStorageFile(extensionId: string): string;
    /**
     * Asynchronously sets the values of the given storage items for the
     * given extension.
     *
     * @param {string} extensionId
     *        The ID of the extension for which to set storage values.
     * @param {object} items
     *        The storage items to set. For each property in the object,
     *        the storage value for that property is set to its value in
     *        said object. Any values which are StructuredCloneHolder
     *        instances are deserialized before being stored.
     * @returns {Promise<void>}
     */
    export function set(extensionId: string, items: any): Promise<void>;
    /**
     * Asynchronously removes the given storage items for the given
     * extension ID.
     *
     * @param {string} extensionId
     *        The ID of the extension for which to remove storage values.
     * @param {Array<string>} items
     *        A list of storage items to remove.
     * @returns {Promise<void>}
     */
    export function remove(extensionId: string, items: string[]): Promise<void>;
    /**
     * Asynchronously clears all storage entries for the given extension
     * ID.
     *
     * @param {string} extensionId
     *        The ID of the extension for which to clear storage.
     * @param {object} options
     * @param {boolean} [options.shouldNotifyListeners = true]
     *         Whether or not collect and send the changes to the listeners,
     *         used when the extension data is being cleared on uninstall.
     * @returns {Promise<void>}
     */
    export function clear(extensionId: string, { shouldNotifyListeners }?: {
        shouldNotifyListeners?: boolean;
    }): Promise<void>;
    /**
     * Asynchronously retrieves the values for the given storage items for
     * the given extension ID.
     *
     * @param {string} extensionId
     *        The ID of the extension for which to get storage values.
     * @param {Array<string>|object|null} [keys]
     *        The storage items to get. If an array, the value of each key
     *        in the array is returned. If null, the values of all items
     *        are returned. If an object, the value for each key in the
     *        object is returned, or that key's value if the item is not
     *        set.
     * @returns {Promise<object>}
     *        An object which a property for each requested key,
     *        containing that key's storage value. Values are
     *        StructuredCloneHolder objects which can be deserialized to
     *        the original storage value.
     */
    export function get(extensionId: string, keys?: any): Promise<any>;
    export function _filterProperties(extensionId: any, data: any, keys: any): Promise<{}>;
    export function addOnChangedListener(extensionId: any, listener: any): void;
    export function removeOnChangedListener(extensionId: any, listener: any): void;
    export function notifyListeners(extensionId: any, changes: any): void;
    export function init(): void;
    export function observe(subject: any, topic: any, data: any): void;
    export { serialize };
    /**
     * Serializes the given storage items for transporting between processes.
     *
     * @param {BaseContext} context
     *        The context to use for the created StructuredCloneHolder
     *        objects.
     * @param {Array<string>|object} items
     *        The items to serialize. If an object is provided, its
     *        values are serialized to StructuredCloneHolder objects.
     *        Otherwise, it is returned as-is.
     * @returns {Array<string>|object}
     */
    export function serializeForContext(context: BaseContext, items: any): any;
    /**
     * Deserializes the given storage items into the given extension context.
     *
     * @param {BaseContext} context
     *        The context to use to deserialize the StructuredCloneHolder objects.
     * @param {object} items
     *        The items to deserialize. Any property of the object which
     *        is a StructuredCloneHolder instance is deserialized into
     *        the extension scope. Any other object is cloned into the
     *        extension scope directly.
     * @returns {object}
     */
    export function deserializeForContext(context: BaseContext, items: any): any;
}
export namespace extensionStorageSession {
    export let buckets: WeakMap<Extension, Map<string, any>>;
    let listeners_1: WeakMap<Extension, Set<callback>>;
    export { listeners_1 as listeners };
    /**
     * @param {Extension} extension
     * @param {null | undefined | string | string[] | object} items
     * Schema normalization ensures items are normalized to one of above types.
     */
    export function get(extension: Extension, items: any): {};
    export function set(extension: any, items: any): void;
    export function remove(extension: any, keys: any): void;
    export function clear(extension: any): void;
    export function registerListener(extension: any, listener: any): () => void;
    export function notifyListeners(extension: any, changes: any): void;
}
declare class SerializeableMap extends Map<any, any> {
    constructor();
    constructor(entries?: readonly (readonly [any, any])[]);
    constructor();
    constructor(iterable?: Iterable<readonly [any, any]>);
    toJSON(): {};
    /**
     * Like toJSON, but attempts to serialize every value separately, and
     * elides any which fail to serialize. Should only be used if initial
     * JSON serialization fails.
     *
     * @returns {object}
     */
    toJSONSafe(): object;
}
/**
 * Serializes an arbitrary value into a StructuredCloneHolder, if
 * appropriate. Existing StructuredCloneHolders are returned unchanged.
 * Non-object values are also returned unchanged. Anything else is
 * serialized, and a new StructuredCloneHolder returned.
 *
 * This allows us to avoid a second structured clone operation after
 * sending a storage value across a message manager, before cloning it
 * into an extension scope.
 *
 * @param {string} name
 *        A debugging name for the value, which will appear in the
 *        StructuredCloneHolder's about:memory path.
 * @param {string?} anonymizedName
 *        An anonymized version of `name`, to be used in anonymized memory
 *        reports. If `null`, then `name` will be used instead.
 * @param {StructuredCloneHolder|*} value
 *        A value to serialize.
 * @returns {*}
 */
declare function serialize(name: string, anonymizedName: string | null, value: StructuredCloneHolder | any): any;
export {};
