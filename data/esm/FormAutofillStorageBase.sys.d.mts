export const ADDRESS_SCHEMA_VERSION: 1;
export const CREDIT_CARD_SCHEMA_VERSION: 3;
export class AddressesBase extends AutofillRecords {
    constructor(store: any);
    computeFields(address: any): Promise<boolean>;
    _normalizeFields(address: any): void;
    _normalizeNameFields(address: any): void;
    _normalizeAddressFields(address: any): void;
    _normalizeCountryFields(address: any): void;
    _normalizeTelFields(address: any): void;
}
export class CreditCardsBase extends AutofillRecords {
    constructor(store: any);
    computeFields(creditCard: any): Promise<boolean>;
    _encryptNumber(creditCard: any): Promise<void>;
    _computeMigratedRecord(creditCard: any): Promise<any>;
    _normalizeFields(creditCard: any): void;
    _validateFields(creditCard: any): void;
    _ensureMatchingVersion(record: any): true | void;
    /**
     * Find a match credit card record in storage that is either exactly the same
     * as the given record or a superset of the given record.
     *
     * See the comments in `getDuplicateRecords` to see the difference between
     * `getDuplicateRecords` and `getMatchRecords`
     *
     * @param {object} record
     *        The credit card for match checking. please make sure the
     *        record is normalized.
     * @returns {object}
     *          Return the first matched record found in storage, null otherwise.
     */
    getMatchRecords(record: object): object;
    /**
     * Find a duplicate credit card record in the storage.
     *
     * A record is considered as a duplicate of another record when two records
     * are the "same". This might be true even when some of their fields are
     * different. For example, one record has the same credit card number but has
     * different expiration date as the other record are still considered as
     * "duplicate".
     * This is different from `getMatchRecords`, which ensures all the fields with
     * value in the the record is equal to the returned record.
     *
     * @param {object} record
     *        The credit card for duplication checking. please make sure the
     *        record is normalized.
     * @returns {object}
     *          Return the first duplicated record found in storage, null otherwise.
     */
    getDuplicateRecords(record: object): object;
}
export class FormAutofillStorageBase {
    constructor(path: any);
    _path: any;
    _initializePromise: any;
    INTERNAL_FIELDS: string[];
    get version(): number;
    get addresses(): void;
    get creditCards(): void;
    getAddresses(): void;
    getCreditCards(): void;
    /**
     * Initialize storage to memory.
     *
     * @returns {Promise} When the operation finished successfully.
     * @throws  JavaScript exception.
     */
    initialize(): Promise<any>;
    _store: void;
    _initializeStore(): void;
    _saveImmediately(): any;
    _finalize(): any;
}
/**
 * Class that manipulates records in a specified collection.
 *
 * Note that it is responsible for converting incoming data to a consistent
 * format in the storage. For example, computed fields will be transformed to
 * the original fields and 2-digit years will be calculated into 4 digits.
 */
declare class AutofillRecords {
    /**
     * Creates an AutofillRecords.
     *
     * @param {JSONFile} store
     *        An instance of JSONFile.
     * @param {string} collectionName
     *        A key of "store.data".
     * @param {Array.<string>} validFields
     *        A list containing non-metadata field names.
     * @param {Array.<string>} validComputedFields
     *        A list containing computed field names.
     * @param {number} schemaVersion
     *        The schema version for the new record.
     */
    constructor(store: JSONFile, collectionName: string, validFields: Array<string>, validComputedFields: Array<string>, schemaVersion: number);
    log: any;
    VALID_FIELDS: string[];
    VALID_COMPUTED_FIELDS: string[];
    _store: JSONFile;
    _collectionName: string;
    _schemaVersion: number;
    _initialize(): void;
    _initializePromise: Promise<void>;
    observe(subject: any, topic: any, data: any): void;
    /**
     * Gets the schema version number.
     *
     * @returns {number}
     *          The current schema version number.
     */
    get version(): number;
    /**
     * Gets the data of this collection.
     *
     * @returns {Array}
     *          The data object.
     */
    get _data(): any[];
    _getData(): any;
    _ensureMatchingVersion(record: any): void;
    /**
     * Initialize the records in the collection, resolves when the migration completes.
     *
     * @returns {Promise}
     */
    initialize(): Promise<any>;
    /**
     * Adds a new record.
     *
     * @param {object} record
     *        The new record for saving.
     * @param {object} options
     * @param {boolean} [options.sourceSync = false]
     *        Did sync generate this addition?
     * @returns {Promise<string>}
     *          The GUID of the newly added item..
     */
    add(record: object, { sourceSync }?: {
        sourceSync?: boolean;
    }): Promise<string>;
    _saveRecord(record: any, { sourceSync }?: {
        sourceSync?: boolean;
    }): Promise<any>;
    _generateGUID(): any;
    /**
     * Update the specified record.
     *
     * @param  {string} guid
     *         Indicates which record to update.
     * @param  {object} record
     *         The new record used to overwrite the old one.
     * @param  {Promise<boolean>} [preserveOldProperties = false]
     *         Preserve old record's properties if they don't exist in new record.
     */
    update(guid: string, record: object, preserveOldProperties?: Promise<boolean>): Promise<void>;
    /**
     * Notifies the storage of the use of the specified record, so we can update
     * the metadata accordingly. This does not bump the Sync change counter, since
     * we don't sync `timesUsed` or `timeLastUsed`.
     *
     * @param  {string} guid
     *         Indicates which record to be notified.
     */
    notifyUsed(guid: string): void;
    updateUseCountTelemetry(): void;
    /**
     * Removes the specified record. No error occurs if the record isn't found.
     *
     * @param  {string} guid
     *         Indicates which record to remove.
     * @param  {object} options
     * @param  {boolean} [options.sourceSync = false]
     *         Did Sync generate this removal?
     */
    remove(guid: string, { sourceSync }?: {
        sourceSync?: boolean;
    }): void;
    /**
     * Returns the record with the specified GUID.
     *
     * @param   {string} guid
     *          Indicates which record to retrieve.
     * @param   {object} options
     * @param   {boolean} [options.rawData = false]
     *          Returns a raw record without modifications and the computed fields
     *          (this includes private fields)
     * @returns {Promise<object>}
     *          A clone of the record.
     */
    get(guid: string, { rawData }?: {
        rawData?: boolean;
    }): Promise<object>;
    /**
     * Returns all records.
     *
     * @param   {object} options
     * @param   {boolean} [options.rawData = false]
     *          Returns raw records without modifications and the computed fields.
     * @param   {boolean} [options.includeDeleted = false]
     *          Also return any tombstone records.
     * @returns {Promise<Array.<object>>}
     *          An array containing clones of all records.
     */
    getAll({ rawData, includeDeleted }?: {
        rawData?: boolean;
        includeDeleted?: boolean;
    }): Promise<Array<object>>;
    /**
     * Returns true if the data set is empty. If the `includeDeleted` option is set to true,
     * it will also consider items that are marked as deleted.
     *
     * @param   {object}  [options={}] options
     * @param   {boolean} [options.includeDeleted = false]
     *                    Indicates whether to include deleted items in the check.
     * @returns {boolean} Returns `true` if the data set is empty, otherwise `false`.
     */
    isEmpty({ includeDeleted }?: {
        includeDeleted?: boolean;
    }): boolean;
    /**
     * Return all saved field names in the collection.
     *
     * @returns {Promise<Set>} Set containing saved field names.
     */
    getSavedFieldNames(): Promise<Set<any>>;
    /**
     * Functions intended to be used in the support of Sync.
     */
    /**
     * Stores a hash of the last synced value for a field in a locally updated
     * record. We use this value to rebuild the shared parent, or base, when
     * reconciling incoming records that may have changed on another device.
     *
     * Storing the hash of the values that we last wrote to the Sync server lets
     * us determine if a remote change conflicts with a local change. If the
     * hashes for the base, current local value, and remote value all differ, we
     * have a conflict.
     *
     * These fields are not themselves synced, and will be removed locally as
     * soon as we have successfully written the record to the Sync server - so
     * it is expected they will not remain for long, as changes which cause a
     * last synced field to be written will itself cause a sync.
     *
     * We also skip this for updates made by Sync, for internal fields, for
     * records that haven't been uploaded yet, and for fields which have already
     * been changed since the last sync.
     *
     * @param   {object} record
     *          The updated local record.
     * @param   {string} field
     *          The field name.
     * @param   {string} lastSyncedValue
     *          The last synced field value.
     */
    _maybeStoreLastSyncedField(record: object, field: string, lastSyncedValue: string): void;
    /**
     * Attempts a three-way merge between a changed local record, an incoming
     * remote record, and the shared parent that we synthesize from the last
     * synced fields - see _maybeStoreLastSyncedField.
     *
     * @param   {object} strippedLocalRecord
     *          The changed local record, currently in storage. Computed fields
     *          are stripped.
     * @param   {object} remoteRecord
     *          The remote record.
     * @returns {object | null}
     *          The merged record, or `null` if there are conflicts and the
     *          records can't be merged.
     */
    _mergeSyncedRecords(strippedLocalRecord: object, remoteRecord: object): object | null;
    /**
     * Replaces a local record with a remote or merged record, copying internal
     * fields and Sync metadata.
     *
     * @param   {number} index
     * @param   {object} remoteRecord
     * @param   {object} options
     * @param   {Promise<boolean>} [options.keepSyncMetadata = false]
     *          Should we copy Sync metadata? This is true if `remoteRecord` is a
     *          merged record with local changes that we need to upload. Passing
     *          `keepSyncMetadata` retains the record's change counter and
     *          last synced fields, so that we don't clobber the local change if
     *          the sync is interrupted after the record is merged, but before
     *          it's uploaded.
     */
    _replaceRecordAt(index: number, remoteRecord: object, { keepSyncMetadata }?: {
        keepSyncMetadata?: Promise<boolean>;
    }): Promise<void>;
    /**
     * Clones a local record, giving the clone a new GUID and Sync metadata. The
     * original record remains unchanged in storage.
     *
     * @param   {object} strippedLocalRecord
     *          The local record. Computed fields are stripped.
     * @returns {string}
     *          A clone of the local record with a new GUID.
     */
    _forkLocalRecord(strippedLocalRecord: object): string;
    /**
     * Reconciles an incoming remote record into the matching local record. This
     * method is only used by Sync; other callers should use `merge`.
     *
     * @param   {object} remoteRecord
     *          The incoming record. `remoteRecord` must not be a tombstone, and
     *          must have a matching local record with the same GUID. Use
     *          `add` to insert remote records that don't exist locally, and
     *          `remove` to apply remote tombstones.
     * @returns {Promise<object>}
     *          A `{forkedGUID}` tuple. `forkedGUID` is `null` if the merge
     *          succeeded without conflicts, or a new GUID referencing the
     *          existing locally modified record if the conflicts could not be
     *          resolved.
     */
    reconcile(remoteRecord: object): Promise<object>;
    _removeSyncedRecord(guid: any): void;
    /**
     * Provide an object that describes the changes to sync.
     *
     * This is called at the start of the sync process to determine what needs
     * to be updated on the server. As the server is updated, sync will update
     * entries in the returned object, and when sync is complete it will pass
     * the object to pushSyncChanges, which will apply the changes to the store.
     *
     * @returns {object}
     *          An object describing the changes to sync.
     */
    pullSyncChanges(): object;
    /**
     * Apply the metadata changes made by Sync.
     *
     * This is called with metadata about what was synced - see pullSyncChanges.
     *
     * @param {object} changes
     *        The possibly modified object obtained via pullSyncChanges.
     */
    pushSyncChanges(changes: object): void;
    /**
     * Reset all sync metadata for all items.
     *
     * This is called when Sync is disconnected from this device. All sync
     * metadata for all items is removed.
     */
    resetSync(): void;
    /**
     * Changes the GUID of an item. This should be called only by Sync. There
     * must be an existing record with oldID and it must never have been synced
     * or an error will be thrown. There must be no existing record with newID.
     *
     * No tombstone will be created for the old GUID - we check it hasn't
     * been synced, so no tombstone is necessary.
     *
     * @param   {string} oldID
     *          GUID of the existing item to change the GUID of.
     * @param   {string} newID
     *          The new GUID for the item.
     */
    changeGUID(oldID: string, newID: string): void;
    _getSyncMetaData(record: any, forceCreate?: boolean): any;
    /**
     * Finds a local record with matching common fields and a different GUID.
     * Sync uses this method to find and update unsynced local records with
     * fields that match incoming remote records. This avoids creating
     * duplicate profiles with the same information.
     *
     * @param   {object} remoteRecord
     *          The remote record.
     * @returns {Promise<string|null>}
     *          The GUID of the matching local record, or `null` if no records
     *          match.
     */
    findDuplicateGUID(remoteRecord: object): Promise<string | null>;
    /**
     * Internal helper functions.
     */
    _clone(record: any): any;
    _cloneAndCleanUp(record: any): {};
    _findByGUID(guid: any, { includeDeleted }?: {
        includeDeleted?: boolean;
    }): any;
    _findIndexByGUID(guid: any, { includeDeleted }?: {
        includeDeleted?: boolean;
    }): number;
    _migrateRecord(record: any, index: any): Promise<boolean>;
    _normalizeRecord(record: any, preserveEmptyFields?: boolean): void;
    /**
     * Unconditionally remove all data and tombstones for this collection.
     */
    removeAll({ sourceSync }?: {
        sourceSync?: boolean;
    }): void;
    _isMigrationNeeded(recordVersion: any): boolean;
    /**
     * Strip the computed fields based on the record version.
     *
     * @param   {object} record      The record to migrate
     * @returns {object}             Migrated record.
     *                               Record is always cloned, with version updated,
     *                               with computed fields stripped.
     *                               Could be a tombstone record, if the record
     *                               should be discorded.
     */
    _computeMigratedRecord(record: object): object;
    _stripComputedFields(record: any): Promise<void>;
    _recordReadProcessor(record: any): void;
    computeFields(record: any): Promise<void>;
    /**
     * An interface to be inherited to mutate the argument to normalize it.
     *
     * @param {object} partialRecord containing the record passed by the consumer of
     *                               storage and in the case of `update` with
     *                               `preserveOldProperties` will only include the
     *                               properties that the user is changing so the
     *                               lack of a field doesn't mean that the record
     *                               won't have that field.
     */
    _normalizeFields(partialRecord: object): void;
    /**
     * An interface to be inherited to validate that the complete record is
     * consistent and isn't missing required fields. Overrides should throw for
     * invalid records.
     *
     * @param {object} record containing the complete record that would be stored
     *                        if this doesn't throw due to an error.
     * @throws
     */
    _validateFields(record: object): void;
}
export {};
