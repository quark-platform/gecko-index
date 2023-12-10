/**
 * A base class used to plug a Rust engine into Sync, and have it work like any
 * other engine. The constructor takes a bridge as its first argument, which is
 * a "bridged sync engine", as defined by UniFFI in the application-services
 * crate.
 * For backwards compatibility, this can also be an instance of an XPCOM
 * component class that implements `mozIBridgedSyncEngine`, wrapped in
 * a `BridgeWrapperXPCOM` wrapper.
 * (Note that at time of writing, the above is slightly aspirational; the
 * actual definition of the UniFFI shared bridged engine is still in flux.)
 *
 * This class inherits from `SyncEngine`, which has a lot of machinery that we
 * don't need, but that's fairly easy to override. It would be harder to
 * reimplement the machinery that we _do_ need here. However, because of that,
 * this class has lots of methods that do nothing, or return empty data. The
 * docs above each method explain what it's overriding, and why.
 *
 * This class is designed to be subclassed, but the only part that your engine
 * may want to override is `_trackerObj`. Even then, using the default (no-op)
 * tracker is fine, because the shape of the `Tracker` interface may not make
 * sense for all engines.
 */
export function BridgedEngine(name: any, service: any): void;
export class BridgedEngine {
    /**
     * A base class used to plug a Rust engine into Sync, and have it work like any
     * other engine. The constructor takes a bridge as its first argument, which is
     * a "bridged sync engine", as defined by UniFFI in the application-services
     * crate.
     * For backwards compatibility, this can also be an instance of an XPCOM
     * component class that implements `mozIBridgedSyncEngine`, wrapped in
     * a `BridgeWrapperXPCOM` wrapper.
     * (Note that at time of writing, the above is slightly aspirational; the
     * actual definition of the UniFFI shared bridged engine is still in flux.)
     *
     * This class inherits from `SyncEngine`, which has a lot of machinery that we
     * don't need, but that's fairly easy to override. It would be harder to
     * reimplement the machinery that we _do_ need here. However, because of that,
     * this class has lots of methods that do nothing, or return empty data. The
     * docs above each method explain what it's overriding, and why.
     *
     * This class is designed to be subclassed, but the only part that your engine
     * may want to override is `_trackerObj`. Even then, using the default (no-op)
     * tracker is fine, because the shape of the `Tracker` interface may not make
     * sense for all engines.
     */
    constructor(name: any, service: any);
    _bridge: null;
    _trackerObj: any;
    set _recordObj(obj: typeof BridgedRecord);
    /** Returns the record class for all bridged engines. */
    get _recordObj(): typeof BridgedRecord;
    set _storeObj(obj: typeof BridgedStore);
    /** Returns the store class for all bridged engines. */
    get _storeObj(): typeof BridgedStore;
    /** Returns the storage version for this engine. */
    get version(): any;
    get allowSkippedRecord(): any;
    /**
     * Returns the sync ID for this engine. This is exposed for tests, but
     * Sync code always calls `resetSyncID()` and `ensureCurrentSyncID()`,
     * not this.
     *
     * @returns {String?} The sync ID, or `null` if one isn't set.
     */
    getSyncID(): string | null;
    resetSyncID(): Promise<any>;
    resetLocalSyncID(): Promise<any>;
    ensureCurrentSyncID(newSyncID: any): Promise<any>;
    getLastSync(): Promise<number>;
    setLastSync(lastSyncSeconds: any): Promise<void>;
    /**
     * Returns the initial changeset for the sync. Bridged engines handle
     * reconciliation internally, so we don't know what changed until after we've
     * stored and applied all incoming records. So we return an empty changeset
     * here, and replace it with the real one in `_processIncoming`.
     */
    pullChanges(): Promise<{}>;
    trackRemainingChanges(): Promise<void>;
    /**
     * Marks a record for a hard-`DELETE` at the end of the sync. The base method
     * also removes it from the tracker, but we don't use the tracker for that,
     * so we override the method to just mark.
     */
    _deleteId(id: any): void;
    /**
     * Always stage incoming records, bypassing the base engine's reconciliation
     * machinery.
     */
    _reconcile(): Promise<boolean>;
    _syncStartup(): Promise<void>;
    _processIncoming(newitems: any): Promise<void>;
    /**
     * Notify the bridged engine that we've successfully uploaded a batch, so
     * that it can update its local state. For example, if the engine uses a
     * mirror and a temp table for outgoing records, it can write the uploaded
     * records from the outgoing table back to the mirror.
     */
    _onRecordsWritten(succeeded: any, failed: any, serverModifiedTime: any): Promise<void>;
    _createTombstone(): Promise<never>;
    _createRecord(id: any): Promise<any>;
    _resetClient(): Promise<void>;
}
/**
 * Adapts a `Log.sys.mjs` logger to a `mozIServicesLogSink`. This class is copied
 * from `SyncedBookmarksMirror.jsm`.
 */
export class LogAdapter {
    constructor(log: any);
    log: any;
    get maxLevel(): 0 | 2 | 1 | 4 | 5;
    trace(message: any): void;
    debug(message: any): void;
    warn(message: any): void;
    error(message: any): void;
}
export class BridgeWrapperXPCOM {
    static "__#845829@#promisify"(func: any, ...params: any[]): Promise<any>;
    constructor(component: any);
    comp: any;
    get storageVersion(): any;
    get allowSkippedRecord(): any;
    get logger(): any;
    lastSync(): Promise<any>;
    setLastSync(lastSyncMillis: any): Promise<any>;
    getSyncId(): Promise<any>;
    resetSyncId(): Promise<any>;
    ensureCurrentSyncId(newSyncId: any): Promise<any>;
    syncStarted(): Promise<any>;
    storeIncoming(incomingEnvelopesAsJSON: any): Promise<any>;
    apply(): Promise<any>;
    setUploaded(newTimestampMillis: any, uploadedIds: any): Promise<any>;
    syncFinished(): Promise<any>;
    reset(): Promise<any>;
    wipe(): Promise<any>;
}
/**
 * A wrapper class to convert between BSOs on the JS side, and envelopes on the
 * Rust side. This class intentionally subclasses `RawCryptoWrapper`, because we
 * don't want the stringification and parsing machinery in `CryptoWrapper`.
 *
 * This class isn't meant to be subclassed, because bridged engines shouldn't
 * override their record classes in `_recordObj`.
 */
declare class BridgedRecord {
    /**
     * Creates an outgoing record from a BSO returned by a bridged engine.
     *
     * @param  {String} collection The collection name.
     * @param  {Object} bso   The outgoing bso (ie, a sync15::bso::OutgoingBso) returned from
     *                        `mozIBridgedSyncEngine::apply`.
     * @return {BridgedRecord}     A Sync record ready to encrypt and upload.
     */
    static fromOutgoingBso(collection: string, bso: any): BridgedRecord;
    transformBeforeEncrypt(cleartext: any): string;
    transformAfterDecrypt(cleartext: any): string;
    toIncomingBso(): {
        id: any;
        modified: any;
        payload: any;
    };
}
/**
 * A stub store that converts between raw decrypted incoming records and
 * envelopes. Since the interface we need is so minimal, this class doesn't
 * inherit from the base `Store` implementation...it would take more code to
 * override all those behaviors!
 *
 * This class isn't meant to be subclassed, because bridged engines shouldn't
 * override their store classes in `_storeObj`.
 */
declare class BridgedStore {
    constructor(name: any, engine: any);
    engine: any;
    _log: any;
    _batchChunkSize: number;
    applyIncomingBatch(records: any, countTelemetry: any): Promise<any[]>;
    wipe(): Promise<void>;
}
export {};
