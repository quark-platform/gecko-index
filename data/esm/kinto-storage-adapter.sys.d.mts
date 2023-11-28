/**
 * Firefox adapter.
 *
 * Uses Sqlite as a backing store.
 *
 * Options:
 *  - sqliteHandle: a handle to the Sqlite database this adapter will
 *    use as its backing store. To open such a handle, use the
 *    static openConnection() method.
 */
export class FirefoxAdapter {
    /**
     * Initialize a Sqlite connection to be suitable for use with Kinto.
     *
     * This will be called automatically by open().
     */
    static _init(connection: any): Promise<any>;
    /**
     * Open and initialize a Sqlite connection to a database that Kinto
     * can use. When you are done with this connection, close it by
     * calling close().
     *
     * Options:
     *   - path: The path for the Sqlite database
     *
     * @returns SqliteConnection
     */
    static openConnection(options: any): Promise<any>;
    constructor(collection: any, options?: {});
    collection: any;
    _connection: any;
    _options: {};
    _executeStatement(statement: any, params: any): any;
    clear(): any;
    execute(callback: any, options?: {
        preload: any[];
    }): any;
    get(id: any): any;
    list(params?: {
        filters: {};
        order: string;
    }): any;
    loadDump(records: any): Promise<any[]>;
    /**
     * Load a list of records into the local database.
     *
     * Note: The adapter is not in charge of filtering the already imported
     * records. This is done in `Collection#loadDump()`, as a common behaviour
     * between every adapters.
     *
     * @param  {Array} records.
     * @return {Array} imported records.
     */
    importBulk(records: any): any[];
    saveLastModified(lastModified: any): any;
    getLastModified(): any;
    saveMetadata(metadata: any): Promise<any>;
    getMetadata(): Promise<any>;
    calculateStorage(): any;
    /**
     * Reset the sync status of every record and collection we have
     * access to.
     */
    resetSyncStatus(): any;
}
