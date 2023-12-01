/// <reference types="gecko-types" />
/**
 * Trackers are associated with a single engine and deal with
 * listening for changes to their particular data type.
 *
 * The base `Tracker` only supports listening for changes, and bumping the score
 * to indicate how urgently the engine wants to sync. It does not persist any
 * data. Engines that track changes directly in the storage layer (like
 * bookmarks, bridged engines, addresses, and credit cards) or only upload a
 * single record (tabs and preferences) should subclass `Tracker`.
 */
export function Tracker(name: any, engine: any): void;
export class Tracker {
    /**
     * Trackers are associated with a single engine and deal with
     * listening for changes to their particular data type.
     *
     * The base `Tracker` only supports listening for changes, and bumping the score
     * to indicate how urgently the engine wants to sync. It does not persist any
     * data. Engines that track changes directly in the storage layer (like
     * bookmarks, bridged engines, addresses, and credit cards) or only upload a
     * single record (tabs and preferences) should subclass `Tracker`.
     */
    constructor(name: any, engine: any);
    name: any;
    engine: any;
    _log: any;
    _score: number;
    asyncObserver: any;
    set ignoreAll(value: boolean);
    get ignoreAll(): boolean;
    set score(value: any);
    get score(): any;
    resetScore(): void;
    getChangedIDs(): Promise<never>;
    addChangedID(id: any, when: any): Promise<never>;
    removeChangedID(...ids: any[]): Promise<never>;
    clearChangedIDs(): void;
    _now(): number;
    _isTracking: boolean;
    start(): void;
    stop(): Promise<void>;
    onStart(): void;
    onStop(): void;
    observe(subject: any, topic: any, data: any): Promise<void>;
    engineIsEnabled(): any;
    /**
     * Starts or stops listening for changes depending on the associated engine's
     * enabled state.
     *
     * @param {Boolean} engineEnabled Whether the engine was enabled.
     */
    onEngineEnabledChanged(engineEnabled: boolean): Promise<void>;
    finalize(): Promise<void>;
}
export function LegacyTracker(name: any, engine: any): void;
export class LegacyTracker {
    constructor(name: any, engine: any);
    _ignored: any[];
    file: any;
    _storage: JSONFile;
    _ignoreAll: boolean;
    set ignoreAll(value: any);
    get ignoreAll(): any;
    _dataPostProcessor(json: any): any;
    _beforeSave(): Promise<undefined>;
    getChangedIDs(): Promise<any>;
    _saveChangedIDs(): void;
    ignoreID(id: any): void;
    unignoreID(id: any): void;
    _saveChangedID(id: any, when: any): Promise<void>;
    addChangedID(id: any, when: any): Promise<boolean>;
    removeChangedID(...ids: any[]): Promise<boolean>;
    clearChangedIDs(): void;
    finalize(): Promise<void>;
}
/**
 * The Store serves as the interface between Sync and stored data.
 *
 * The name "store" is slightly a misnomer because it doesn't actually "store"
 * anything. Instead, it serves as a gateway to something that actually does
 * the "storing."
 *
 * The store is responsible for record management inside an engine. It tells
 * Sync what items are available for Sync, converts items to and from Sync's
 * record format, and applies records from Sync into changes on the underlying
 * store.
 *
 * Store implementations require a number of functions to be implemented. These
 * are all documented below.
 *
 * For stores that deal with many records or which have expensive store access
 * routines, it is highly recommended to implement a custom applyIncomingBatch
 * and/or applyIncoming function on top of the basic APIs.
 */
export function Store(name: any, engine: any): void;
export class Store {
    /**
     * The Store serves as the interface between Sync and stored data.
     *
     * The name "store" is slightly a misnomer because it doesn't actually "store"
     * anything. Instead, it serves as a gateway to something that actually does
     * the "storing."
     *
     * The store is responsible for record management inside an engine. It tells
     * Sync what items are available for Sync, converts items to and from Sync's
     * record format, and applies records from Sync into changes on the underlying
     * store.
     *
     * Store implementations require a number of functions to be implemented. These
     * are all documented below.
     *
     * For stores that deal with many records or which have expensive store access
     * routines, it is highly recommended to implement a custom applyIncomingBatch
     * and/or applyIncoming function on top of the basic APIs.
     */
    constructor(name: any, engine: any);
    name: any;
    engine: any;
    _log: any;
    /**
     * Apply multiple incoming records against the store.
     *
     * This is called with a set of incoming records to process. The function
     * should look at each record, reconcile with the current local state, and
     * make the local changes required to bring its state in alignment with the
     * record.
     *
     * The default implementation simply iterates over all records and calls
     * applyIncoming(). Store implementations may overwrite this function
     * if desired.
     *
     * @param  records Array of records to apply
     * @param  a SyncedRecordsTelemetry obj that will keep track of failed reasons
     * @return Array of record IDs which did not apply cleanly
     */
    applyIncomingBatch(records: any, countTelemetry: any): Promise<any[]>;
    /**
     * Apply a single record against the store.
     *
     * This takes a single record and makes the local changes required so the
     * local state matches what's in the record.
     *
     * The default implementation calls one of remove(), create(), or update()
     * depending on the state obtained from the store itself. Store
     * implementations may overwrite this function if desired.
     *
     * @param record
     *        Record to apply
     */
    applyIncoming(record: any): Promise<void>;
    /**
     * Create an item in the store from a record.
     *
     * This is called by the default implementation of applyIncoming(). If using
     * applyIncomingBatch(), this won't be called unless your store calls it.
     *
     * @param record
     *        The store record to create an item from
     */
    create(record: any): Promise<never>;
    /**
     * Remove an item in the store from a record.
     *
     * This is called by the default implementation of applyIncoming(). If using
     * applyIncomingBatch(), this won't be called unless your store calls it.
     *
     * @param record
     *        The store record to delete an item from
     */
    remove(record: any): Promise<never>;
    /**
     * Update an item from a record.
     *
     * This is called by the default implementation of applyIncoming(). If using
     * applyIncomingBatch(), this won't be called unless your store calls it.
     *
     * @param record
     *        The record to use to update an item from
     */
    update(record: any): Promise<never>;
    /**
     * Determine whether a record with the specified ID exists.
     *
     * Takes a string record ID and returns a booleans saying whether the record
     * exists.
     *
     * @param  id
     *         string record ID
     * @return boolean indicating whether record exists locally
     */
    itemExists(id: any): Promise<never>;
    /**
     * Create a record from the specified ID.
     *
     * If the ID is known, the record should be populated with metadata from
     * the store. If the ID is not known, the record should be created with the
     * delete field set to true.
     *
     * @param  id
     *         string record ID
     * @param  collection
     *         Collection to add record to. This is typically passed into the
     *         constructor for the newly-created record.
     * @return record type for this engine
     */
    createRecord(id: any, collection: any): Promise<never>;
    /**
     * Change the ID of a record.
     *
     * @param  oldID
     *         string old/current record ID
     * @param  newID
     *         string new record ID
     */
    changeItemID(oldID: any, newID: any): Promise<never>;
    /**
     * Obtain the set of all known record IDs.
     *
     * @return Object with ID strings as keys and values of true. The values
     *         are ignored.
     */
    getAllIDs(): Promise<never>;
    /**
     * Wipe all data in the store.
     *
     * This function is called during remote wipes or when replacing local data
     * with remote data.
     *
     * This function should delete all local data that the store is managing. It
     * can be thought of as clearing out all state and restoring the "new
     * browser" state.
     */
    wipe(): Promise<never>;
}
export function EngineManager(service: any): void;
export class EngineManager {
    constructor(service: any);
    service: any;
    _engines: {};
    _altEngineInfo: {};
    _declined: Set<any>;
    _log: any;
    get(name: any): any;
    getAll(): any[];
    /**
     * If a user has changed a pref that controls which variant of a sync engine
     * for a given collection we use, unregister the old engine and register the
     * new one.
     *
     * This is called by EngineSynchronizer before every sync.
     */
    switchAlternatives(): Promise<void>;
    registerAlternatives(name: any, pref: any, whenTrue: any, whenFalse: any): Promise<void>;
    /**
     * N.B., does not pay attention to the declined list.
     */
    getEnabled(): any[];
    get enabledEngineNames(): any[];
    persistDeclined(): void;
    /**
     * Returns an array.
     */
    getDeclined(): any[];
    setDeclined(engines: any): void;
    isDeclined(engineName: any): boolean;
    /**
     * Accepts a Set or an array.
     */
    decline(engines: any): void;
    undecline(engines: any): void;
    /**
     * Register an Engine to the service. Alternatively, give an array of engine
     * objects to register.
     *
     * @param engineObject
     *        Engine object used to get an instance of the engine
     * @return The engine object if anything failed
     */
    register(engineObject: any): Promise<void>;
    unregister(val: any): Promise<void>;
    _removeAndFinalize(name: any): Promise<void>;
    clear(): Promise<void>;
}
export function SyncEngine(name: any, service: any): void;
export class SyncEngine {
    constructor(name: any, service: any);
    Name: any;
    name: any;
    service: any;
    _notify: any;
    _log: any;
    _modified: Changeset;
    _toFetchStorage: JSONFile;
    _previousFailedStorage: JSONFile;
    asyncObserver: any;
    _recordObj: any;
    _storeObj: typeof Store;
    _trackerObj: typeof Tracker;
    version: number;
    eEngineAbortApplyIncoming: string;
    allowSkippedRecord: boolean;
    _defaultSort: undefined;
    _hasSyncedThisSession: boolean;
    _metadataPostProcessor(json: any): any;
    _beforeSaveMetadata(): Promise<void>;
    syncPriority: number;
    downloadLimit: null;
    guidFetchBatchSize: any;
    downloadBatchSize: any;
    initialize(): Promise<void>;
    get prefName(): any;
    set enabled(val: any);
    get enabled(): any;
    get score(): any;
    get _store(): Store;
    get _tracker(): Tracker;
    get storageURL(): any;
    get engineURL(): any;
    get cryptoKeysURL(): string;
    get metaURL(): string;
    startTracking(): void;
    stopTracking(): Promise<void>;
    observe(subject: any, topic: any, data: any): Promise<void>;
    sync(): Promise<any>;
    emptyChangeset(): Changeset;
    /**
     * Returns the local sync ID for this engine, or `""` if the engine hasn't
     * synced for the first time. This is exposed for tests.
     *
     * @return the current sync ID.
     */
    getSyncID(): Promise<any>;
    /**
     * Ensures that the local sync ID for the engine matches the sync ID for the
     * collection on the server. A mismatch indicates that another client wiped
     * the collection; we're syncing after a node reassignment, and another
     * client synced before us; or the store was replaced since the last sync.
     * In case of a mismatch, we need to reset all local Sync state and start
     * over as a first sync.
     *
     * In most cases, this method should return the new sync ID as-is. However, an
     * engine may ignore the given ID and assign a different one, if it determines
     * that the sync ID on the server is out of date. The bookmarks engine uses
     * this to wipe the server and other clients on the first sync after the user
     * restores from a backup.
     *
     * @param  newSyncID
     *         The new sync ID for the collection from `meta/global`.
     * @return The assigned sync ID. If this doesn't match `newSyncID`, we'll
     *         replace the sync ID in `meta/global` with the assigned ID.
     */
    ensureCurrentSyncID(newSyncID: any): Promise<any>;
    /**
     * Resets the local sync ID for the engine, wipes the server, and resets all
     * local Sync state to start over as a first sync.
     *
     * @return the new sync ID.
     */
    resetSyncID(): Promise<any>;
    /**
     * Resets the local sync ID for the engine, signaling that we're starting over
     * as a first sync.
     *
     * @return the new sync ID.
     */
    resetLocalSyncID(): Promise<any>;
    /**
     * Allows overriding scheduler logic -- added to help reduce kinto server
     * getting hammered because our scheduler never got tuned for it.
     *
     * Note: Overriding engines must take resyncs into account -- score will not
     * be cleared.
     */
    shouldSkipSync(syncReason: any): boolean;
    getLastSync(): Promise<any>;
    setLastSync(lastSync: any): Promise<void>;
    resetLastSync(): Promise<void>;
    set hasSyncedThisSession(hasSynced: boolean);
    get hasSyncedThisSession(): boolean;
    set toFetch(ids: any);
    get toFetch(): any;
    set previousFailed(ids: any);
    get previousFailed(): any;
    getChangedIDs(): Promise<never>;
    _createRecord(id: any): Promise<never>;
    _createTombstone(id: any): any;
    _syncStartup(): Promise<void>;
    _delete: {};
    pullChanges(): Promise<{}>;
    /**
     * A tiny abstraction to make it easier to test incoming record
     * application.
     */
    itemSource(): any;
    /**
     * Download and apply remote records changed since the last sync. This
     * happens in three stages.
     *
     * In the first stage, we fetch full records for all changed items, newest
     * first, up to the download limit. The limit lets us make progress for large
     * collections, where the sync is likely to be interrupted before we
     * can fetch everything.
     *
     * In the second stage, we fetch the IDs of any remaining records changed
     * since the last sync, add them to our backlog, and fast-forward our last
     * sync time.
     *
     * In the third stage, we fetch and apply records for all backlogged IDs,
     * as well as any records that failed to apply during the last sync. We
     * request records for the IDs in chunks, to avoid exceeding URL length
     * limits, then remove successfully applied records from the backlog, and
     * record IDs of any records that failed to apply to retry on the next sync.
     */
    _processIncoming(): Promise<void>;
    _maybeReconcile(item: any): Promise<{
        shouldApply: boolean;
        error: any;
    }>;
    lastModified: any;
    _applyRecords(records: any, countTelemetry: any): Promise<any[]>;
    _shouldDeleteRemotely(remoteItem: any): boolean;
    /**
     * Find a GUID of an item that is a duplicate of the incoming item but happens
     * to have a different GUID
     *
     * @return GUID of the similar item; falsy otherwise
     */
    _findDupe(item: any): Promise<void>;
    /**
     * Called before a remote record is discarded due to failed reconciliation.
     * Used by bookmark sync to merge folder child orders.
     */
    beforeRecordDiscard(localRecord: any, remoteRecord: any, remoteIsNewer: any): void;
    _shouldReviveRemotelyDeletedRecord(remoteItem: any): Promise<boolean>;
    _deleteId(id: any): Promise<void>;
    _noteDeletedId(id: any): void;
    _switchItemToDupe(localDupeGUID: any, incomingItem: any): Promise<never>;
    /**
     * Reconcile incoming record with local state.
     *
     * This function essentially determines whether to apply an incoming record.
     *
     * @param  item
     *         Record from server to be tested for application.
     * @return boolean
     *         Truthy if incoming record should be applied. False if not.
     */
    _reconcile(item: any): Promise<boolean>;
    _uploadOutgoing(): Promise<void>;
    _onRecordsWritten(succeeded: any, failed: any, serverModifiedTime: any): Promise<void>;
    _syncFinish(): Promise<void>;
    _syncCleanup(): Promise<void>;
    _sync(): Promise<void>;
    canDecrypt(): Promise<boolean>;
    /**
     * Deletes the collection for this engine on the server, and removes all local
     * Sync metadata for this engine. This does *not* remove any existing data on
     * other clients. This is called when we reset the sync ID.
     */
    wipeServer(): Promise<void>;
    /**
     * Deletes the collection for this engine on the server, without removing
     * any local Sync metadata or user data. Deleting the collection will not
     * remove any user data on other clients, but will force other clients to
     * start over as a first sync.
     */
    _deleteServerCollection(): Promise<void>;
    removeClientData(): Promise<void>;
    handleHMACMismatch(item: any, mayRetry: any): Promise<string>;
    /**
     * Returns a changeset containing all items in the store. The default
     * implementation returns a changeset with timestamps from long ago, to
     * ensure we always use the remote version if one exists.
     *
     * This function is only called for the first sync. Subsequent syncs call
     * `pullNewChanges`.
     *
     * @return A `Changeset` object.
     */
    pullAllChanges(): Promise<{}>;
    pullNewChanges(): Promise<never>;
    /**
     * Adds all remaining changeset entries back to the tracker, typically for
     * items that failed to upload. This method is called at the end of each sync.
     *
     */
    trackRemainingChanges(): Promise<void>;
    /**
     * Removes all local Sync metadata for this engine, but keeps all existing
     * local user data.
     */
    resetClient(): Promise<any>;
    _resetClient(): Promise<void>;
    /**
     * Removes all local Sync metadata and user data for this engine.
     */
    wipeClient(): Promise<any>;
    _wipeClient(): Promise<void>;
    /**
     * If one exists, initialize and return a validator for this engine (which
     * must have a `validate(engine)` method that returns a promise to an object
     * with a getSummary method). Otherwise return null.
     */
    getValidator(): any;
    finalize(): Promise<void>;
    _newWatchdog(): any;
}
export namespace SyncEngine {
    namespace kRecoveryStrategy {
        let ignore: string;
        let retry: string;
        let error: string;
    }
}
/**
 * A changeset is created for each sync in `Engine::get{Changed, All}IDs`,
 * and stores opaque change data for tracked IDs. The default implementation
 * only records timestamps, though engines can extend this to store additional
 * data for each entry.
 */
export class Changeset {
    changes: {};
    getModifiedTimestamp(id: any): any;
    set(id: any, change: any): void;
    insert(changes: any): void;
    replace(changes: any): void;
    has(id: any): boolean;
    delete(id: any): void;
    changeID(oldID: any, newID: any): void;
    ids(): string[];
    entries(): [string, any][];
    count(): number;
    clear(): void;
}
import { JSONFile } from "resource://gre/modules/JSONFile.sys.mjs";
