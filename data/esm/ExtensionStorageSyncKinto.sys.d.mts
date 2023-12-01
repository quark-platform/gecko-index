export const extensionStorageSyncKinto: any;
export class ExtensionStorageSyncKinto {
    /**
     * @param {FXAccounts} fxaService (Optional) If not
     *    present, trying to sync will fail.
     */
    constructor(fxaService: FXAccounts);
    _fxaService: FXAccounts;
    cryptoCollection: CryptoCollection;
    listeners: WeakMap<WeakKey, any>;
    /**
     * Get a set of extensions to sync (including the ones with an
     * active extension context that used the storage.sync API and
     * the extensions that are enabled and have been synced before).
     *
     * @returns {Promise<Set<Extension>>}
     *   A promise which resolves to the set of the extensions to sync.
     */
    getExtensions(): Promise<Set<Extension>>;
    syncAll(): Promise<void>;
    sync(extension: any, collection: any): Promise<void>;
    /**
     * Utility function that handles the common stuff about syncing all
     * Kinto collections (including "meta" collections like the crypto
     * one).
     *
     * @param {Collection} collection
     * @param {object} options
     *                 Additional options to be passed to sync().
     * @returns {Promise<SyncResultObject>}
     */
    _syncCollection(collection: Collection, options: object): Promise<SyncResultObject>;
    _requestWithToken(description: any, f: any): Promise<any>;
    /**
     * Helper similar to _syncCollection, but for deleting the user's bucket.
     *
     * @returns {Promise<void>}
     */
    _deleteBucket(): Promise<void>;
    ensureSaltsFor(keysRecord: any, extIds: any): Promise<any>;
    /**
     * Check whether the keys record (provided) already has salts for
     * all the extensions given in extIds.
     *
     * @param {object} keysRecord A previously-retrieved keys record.
     * @param {Array<string>} extIds The IDs of the extensions which
     *                need salts.
     * @returns {boolean}
     */
    hasSaltsFor(keysRecord: object, extIds: Array<string>): boolean;
    /**
     * Recursive promise that terminates when our local collectionKeys,
     * as well as that on the server, have keys for all the extensions
     * in extIds.
     *
     * @param {Array<string>} extIds
     *                        The IDs of the extensions which need keys.
     * @returns {Promise<CollectionKeyManager>}
     */
    ensureCanSync(extIds: Array<string>): Promise<CollectionKeyManager>;
    /**
     * Update the kB in the crypto record.
     */
    updateKeyRingKB(): Promise<void>;
    /**
     * Make sure the keyring is up to date and synced.
     *
     * This is called on syncs to make sure that we don't sync anything
     * to any collection unless the key for that collection is on the
     * server.
     */
    checkSyncKeyRing(): Promise<void>;
    _syncKeyRing(cryptoKeyRecord: any): Promise<any>;
    registerInUse(extension: any, context: any): void;
    /**
     * Get the collection for an extension, and register the extension
     * as being "in use".
     *
     * @param {Extension} extension
     *                    The extension for which we are seeking
     *                    a collection.
     * @param {Context} context
     *                  The context of the extension, so that we can
     *                  stop syncing the collection when the extension ends.
     * @returns {Promise<Collection>}
     */
    getCollection(extension: Extension, context: Context): Promise<Collection>;
    set(extension: any, items: any, context: any): Promise<void>;
    remove(extension: any, keys: any, context: any): Promise<void>;
    clearAll(): Promise<void>;
    clear(extension: any, context: any): Promise<void>;
    get(extension: any, spec: any, context: any): Promise<any>;
    getBytesInUse(extension: any, keys: any, context: any): Promise<number>;
    addOnChangedListener(extension: any, listener: any, context: any): void;
    removeOnChangedListener(extension: any, listener: any): void;
    notifyListeners(extension: any, changes: any): void;
}
export namespace KintoStorageTestUtils {
    export { CollectionKeyEncryptionRemoteTransformer };
    export { CryptoCollection };
    export { EncryptionRemoteTransformer };
    export { KeyRingEncryptionRemoteTransformer };
    export { cleanUpForContext };
    export { idToKey };
    export { keyToId };
}
/**
 * Wrapper around the crypto collection providing some handy utilities.
 */
declare class CryptoCollection {
    constructor(fxaService: any);
    _fxaService: any;
    getCollection(): Promise<any>;
    /**
     * Generate a new salt for use in hashing extension and record
     * IDs.
     *
     * @returns {string} A base64-encoded string of the salt
     */
    getNewSalt(): string;
    /**
     * Retrieve the keyring record from the crypto collection.
     *
     * You can use this if you want to check metadata on the keyring
     * record rather than use the keyring itself.
     *
     * The keyring record, if present, should have the structure:
     *
     * - kbHash: a hash of the user's kB. When this changes, we will
     *   try to sync the collection.
     * - uuid: a record identifier. This will only change when we wipe
     *   the collection (due to kB getting reset).
     * - keys: a "WBO" form of a CollectionKeyManager.
     * - salts: a normal JS Object with keys being collection IDs and
     *   values being base64-encoded salts to use when hashing IDs
     *   for that collection.
     *
     * @returns {Promise<object>}
     */
    getKeyRingRecord(): Promise<object>;
    getSalts(): Promise<any>;
    /**
     * Used for testing with a known salt.
     *
     * @param {string} extensionId  The extension ID for which to set a
     *     salt.
     * @param {string} salt  The salt to use for this extension, as a
     *     base64-encoded salt.
     */
    _setSalt(extensionId: string, salt: string): Promise<void>;
    /**
     * Hash an extension ID for a given user so that an attacker can't
     * identify the extensions a user has installed.
     *
     * The extension ID is assumed to be a string (i.e. series of
     * code points), and its UTF8 encoding is prefixed with the salt
     * for that collection and hashed.
     *
     * The returned hash must conform to the syntax for Kinto
     * identifiers, which (as of this writing) must match
     * [a-zA-Z0-9][a-zA-Z0-9_-]*. We thus encode the hash using
     * "base64-url" without padding (so that we don't get any equals
     * signs (=)). For fear that a hash could start with a hyphen
     * (-) or an underscore (_), prefix it with "ext-".
     *
     * @param {string} extensionId The extension ID to obfuscate.
     * @returns {Promise<bytestring>} A collection ID suitable for use to sync to.
     */
    extensionIdToCollectionId(extensionId: string): Promise<bytestring>;
    /**
     * Hash some value with the salt for the given extension.
     *
     * The value should be a "bytestring", i.e. a string whose
     * "characters" are values, each within [0, 255]. You can produce
     * such a bytestring using e.g. CommonUtils.encodeUTF8.
     *
     * The returned value is a base64url-encoded string of the hash.
     *
     * @param {bytestring} value The value to be hashed.
     * @param {string} extensionId The ID of the extension whose salt
     *                             we should use.
     * @returns {Promise<bytestring>} The hashed value.
     */
    hashWithExtensionSalt(value: bytestring, extensionId: string): Promise<bytestring>;
    /**
     * Retrieve the actual keyring from the crypto collection.
     *
     * @returns {Promise<CollectionKeyManager>}
     */
    getKeyRing(): Promise<CollectionKeyManager>;
    updateKBHash(kbHash: any): Promise<void>;
    upsert(record: any): Promise<void>;
    sync(extensionStorageSyncKinto: any): Promise<any>;
    /**
     * Reset sync status for ALL collections by directly
     * accessing the FirefoxAdapter.
     */
    resetSyncStatus(): Promise<void>;
    _clear(): Promise<void>;
}
/**
 * An EncryptionRemoteTransformer for extension records.
 *
 * It uses the special "keys" record to find a key for a given
 * extension, thus its name
 * CollectionKeyEncryptionRemoteTransformer.
 *
 * Also, during encryption, it will replace the ID of the new record
 * with a hashed ID, using the salt for this collection.
 *
 * @param {string} extensionId The extension ID for which to find a key.
 */
declare let CollectionKeyEncryptionRemoteTransformer: {
    new (cryptoCollection: any, keyring: any, extensionId: any): {
        cryptoCollection: any;
        keyring: any;
        extensionId: any;
        getKeys(): Promise<any>;
        getEncodedRecordId(record: any): any;
        encode(record: any): Promise<{
            ciphertext: any;
            IV: any;
            hmac: string;
            id: string;
        }>;
        decode(record: any): Promise<any>;
    };
};
/**
 * A "remote transformer" that the Kinto library will use to
 * encrypt/decrypt records when syncing.
 *
 * This is an "abstract base class". Subclass this and override
 * getKeys() to use it.
 */
declare class EncryptionRemoteTransformer {
    encode(record: any): Promise<{
        ciphertext: any;
        IV: any;
        hmac: string;
        id: string;
    }>;
    decode(record: any): Promise<any>;
    /**
     * Retrieve keys to use during encryption.
     *
     * Returns a Promise<KeyBundle>.
     */
    getKeys(): void;
    /**
     * Compute the record ID to use for the encoded version of the
     * record.
     *
     * The default version just re-uses the record's ID.
     *
     * @param {object} record The record being encoded.
     * @returns {Promise<string>} The ID to use.
     */
    getEncodedRecordId(record: object): Promise<string>;
}
/**
 * An EncryptionRemoteTransformer that provides a keybundle derived
 * from the user's kB, suitable for encrypting a keyring.
 */
declare class KeyRingEncryptionRemoteTransformer extends EncryptionRemoteTransformer {
    static throwOutdatedKB(shouldBe: any, is: any): void;
    static isOutdatedKB(exc: any): boolean;
    constructor(fxaService: any);
    _fxaService: any;
    getKeys(): Promise<any>;
}
/**
 * Clean up now that one context is no longer using this extension's collection.
 *
 * @param {Extension} extension
 *                    The extension whose context just ended.
 * @param {Context} context
 *                  The context that just ended.
 */
declare function cleanUpForContext(extension: Extension, context: Context): void;
declare function idToKey(id: any): any;
declare function keyToId(key: any): string;
export {};
