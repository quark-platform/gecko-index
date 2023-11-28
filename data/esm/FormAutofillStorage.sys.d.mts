export class FormAutofillStorage {
    constructor(path: any);
    getAddresses(): Addresses;
    _addresses: Addresses;
    getCreditCards(): CreditCards;
    _creditCards: CreditCards;
    /**
     * Loads the profile data from file to memory.
     *
     * @returns {JSONFile}
     *          The JSONFile store.
     */
    _initializeStore(): JSONFile;
    _dataPostProcessor(data: any): any;
}
export const formAutofillStorage: FormAutofillStorage;
declare class Addresses {
}
declare class CreditCards {
    constructor(store: any);
    _encryptNumber(creditCard: any): Promise<void>;
}
export {};
ecord with the specified GUID.
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
     * Return all saved field names in the collection.
     *
     * @returns {Set} Set containing saved field names.
     */
    getSavedFieldNames(): Set<any>;
    reconcile(remoteRecord: any): Promise<void>;
    findDuplicateGUID(remoteRecord: any): Promise<void>;
}
declare class CreditCards {
    _encryptNumber(creditCard: any): Promise<void>;
    _initialize(): void;
    _initializePromise: Promise<void>;
    _saveRecord(record: any, { sourceSync }?: {
        sourceSync?: boolean;
    }): Promise<void>;
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
     * Return all saved field names in the collection.
     *
     * @returns {Set} Set containing saved field names.
     */
    getSavedFieldNames(): Set<any>;
    /**
     * Find a duplicate credit card record in the storage.
     *
     * A record is considered as a duplicate of another record when two records
     * are the "same". This might be true even when some of their fields are
     * different. For example, one record has the same credit card number but has
     * different expiration date as the other record are still considered as
     * "duplicate".
     * This is different from `getMatchRecord`, which ensures all the fields with
     * value in the the record is equal to the returned record.
     *
     * @param {object} record
     *        The credit card for duplication checking. please make sure the
     *        record is normalized.
     * @returns {object}
     *          Return the first duplicated record found in storage, null otherwise.
     */
    getDuplicateRecords(record: object): object;
    reconcile(remoteRecord: any): Promise<void>;
    findDuplicateGUID(remoteRecord: any): Promise<void>;
}
export {};
