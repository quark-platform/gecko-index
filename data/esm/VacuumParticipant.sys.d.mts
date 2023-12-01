export class VacuumParticipant {
    /**
     * Build a VacuumParticipant instance.
     * Note: After creation you must await instance.promiseRegistered() to ensure
     * Category Caches have been updated.
     *
     * @param {mozIStorageAsyncConnection} databaseConnection
     *   The connection to be vacuumed.
     * @param {Number} [expectedPageSize]
     *   Used to change the database page size.
     * @param {boolean} [useIncrementalVacuum]
     *   Whether to enable incremental vacuum on the database.
     * @param {boolean} [grant]
     *   Whether the vacuum operation should be granted.
     */
    constructor(databaseConnection: mozIStorageAsyncConnection, { expectedPageSize, useIncrementalVacuum, grant }?: number);
    QueryInterface: MozQueryInterface;
    promiseRegistered(): any;
    dispose(): Promise<void>;
    get expectedDatabasePageSize(): number;
    get useIncrementalVacuum(): boolean;
    get databaseConnection(): mozIStorageAsyncConnection;
    onBeginVacuum(): boolean;
    onEndVacuum(succeeded: any): void;
    #private;
}
