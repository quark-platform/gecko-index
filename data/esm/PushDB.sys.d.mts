export function PushDB(dbName: any, dbVersion: any, dbStoreName: any, keyPath: any, model: any): void;
export class PushDB {
    constructor(dbName: any, dbVersion: any, dbStoreName: any, keyPath: any, model: any);
    _dbStoreName: any;
    _keyPath: any;
    _model: any;
    __proto__: any;
    toPushRecord(record: any): any;
    isValidRecord(record: any): boolean;
    upgradeSchema(aTransaction: any, aDb: any, aOldVersion: any, aNewVersion: any): void;
    put(aRecord: any): Promise<any>;
    delete(aKeyID: any): Promise<any>;
    clearIf(testFn: any): Promise<any>;
    getByPushEndpoint(aPushEndpoint: any): Promise<any>;
    getByKeyID(aKeyID: any): Promise<any>;
    /**
     * Iterates over all records associated with an origin.
     *
     * @param {String} origin The origin, matched as a prefix against the scope.
     * @param {String} originAttributes Additional origin attributes. Requires
     *  an exact match.
     * @param {Function} callback A function with the signature `(record,
     *  cursor)`, called for each record. `record` is the registration, and
     *  `cursor` is an `IDBCursor`.
     * @returns {Promise} Resolves once all records have been processed.
     */
    forEachOrigin(origin: string, originAttributes: string, callback: Function): Promise<any>;
    getByIdentifiers(aPageRecord: any): Promise<any>;
    _getAllByKey(aKeyName: any, aKeyValue: any): Promise<any>;
    getAllByOriginAttributes(aOriginAttributes: any): Promise<any>;
    getAllKeyIDs(): Promise<any>;
    _getAllByPushQuota(range: any): Promise<any>;
    getAllUnexpired(): Promise<any>;
    getAllExpired(): Promise<any>;
    /**
     * Updates an existing push registration.
     *
     * @param {String} aKeyID The registration ID.
     * @param {Function} aUpdateFunc A function that receives the existing
     *  registration record as its argument, and returns a new record.
     * @returns {Promise} A promise resolved with either the updated record.
     *  Rejects if the record does not exist, or the function returns an invalid
     *  record.
     */
    update(aKeyID: string, aUpdateFunc: Function): Promise<any>;
    drop(): Promise<any>;
}
