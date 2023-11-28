export class RemoteSettingsClient extends EventEmitter {
    static get APIError(): typeof APIError;
    static get NetworkError(): typeof NetworkError;
    static get NetworkOfflineError(): typeof NetworkOfflineError;
    static get ServerContentParseError(): typeof ServerContentParseError;
    static get BackendError(): typeof BackendError;
    static get BackoffError(): typeof BackoffError;
    static get TimeoutError(): typeof TimeoutError;
    static get StorageError(): typeof StorageError;
    static get InvalidSignatureError(): typeof InvalidSignatureError;
    static get MissingSignatureError(): typeof MissingSignatureError;
    static get CorruptedDataError(): typeof CorruptedDataError;
    static get UnknownCollectionError(): typeof UnknownCollectionError;
    constructor(collectionName: any, { bucketName, signerName, filterFunc, localFields, keepAttachmentsIds, lastCheckTimePref, }?: {
        bucketName?: any;
        signerName: any;
        filterFunc: any;
        localFields?: any[];
        keepAttachmentsIds?: any[];
        lastCheckTimePref: any;
    });
    collectionName: any;
    bucketName: any;
    signerName: any;
    filterFunc: any;
    localFields: any[];
    keepAttachmentsIds: any[];
    _lastCheckTimePref: any;
    _verifier: any;
    _syncRunning: boolean;
    verifySignature: any;
    /**
     * Internal method to refresh the client bucket name after the preview mode
     * was toggled.
     *
     * See `RemoteSettings.enabledPreviewMode()`.
     */
    refreshBucketName(): void;
    get identifier(): string;
    get lastCheckTimePref(): any;
    httpClient(): any;
    /**
     * Retrieve the collection timestamp for the last synchronization.
     * This is an opaque and comparable value assigned automatically by
     * the server.
     *
     * @returns {number}
     *          The timestamp in milliseconds, returns -1 if retrieving
     *          the timestamp from the kinto collection fails.
     */
    getLastModified(): number;
    /**
     * Lists settings.
     *
     * @param  {Object} options                    The options object.
     * @param  {Object} options.filters            Filter the results (default: `{}`).
     * @param  {String} options.order              The order to apply (eg. `"-last_modified"`).
     * @param  {boolean} options.dumpFallback      Fallback to dump data if read of local DB fails (default: `true`).
     * @param  {boolean} options.emptyListFallback Fallback to empty list if no dump data and read of local DB fails (default: `true`).
     * @param  {boolean} options.loadDumpIfNewer   Use dump data if it is newer than local data (default: `true`).
     * @param  {boolean} options.forceSync         Always synchronize from server before returning results (default: `false`).
     * @param  {boolean} options.syncIfEmpty       Synchronize from server if local data is empty (default: `true`).
     * @param  {boolean} options.verifySignature   Verify the signature of the local data (default: `false`).
     * @return {Promise}
     */
    get(options?: {
        filters: any;
        order: string;
        dumpFallback: boolean;
        emptyListFallback: boolean;
        loadDumpIfNewer: boolean;
        forceSync: boolean;
        syncIfEmpty: boolean;
        verifySignature: boolean;
    }): Promise<any>;
    _importingPromise: Promise<boolean>;
    /**
     * Synchronize the local database with the remote server.
     *
     * @param {Object} options See #maybeSync() options.
     */
    sync(options: any): Promise<any>;
    /**
     * Synchronize the local database with the remote server, **only if necessary**.
     *
     * @param {int}    expectedTimestamp  the lastModified date (on the server) for the remote collection.
     *                                    This will be compared to the local timestamp, and will be used for
     *                                    cache busting if local data is out of date.
     * @param {Object} options            additional advanced options.
     * @param {bool}   options.loadDump   load initial dump from disk on first sync (default: true if server is prod)
     * @param {bool}   options.sendEvents send `"sync"` events (default: `true`)
     * @param {string} options.trigger    label to identify what triggered this sync (eg. ``"timer"``, default: `"manual"`)
     * @return {Promise}                  which rejects on sync or process failure.
     */
    maybeSync(expectedTimestamp: int, options?: {
        loadDump: bool;
        sendEvents: bool;
        trigger: string;
    }): Promise<any>;
    /**
     * Return a more precise error instance, based on the specified
     * error and its message.
     * @param {Error} e the original error
     * @returns {Error}
     */
    _adjustedError(e: Error): Error;
    /**
     * Determine the Telemetry uptake status based on the specified
     * error.
     */
    _telemetryFromError(e: any, options?: {
        default: any;
    }): any;
    /**
     * Import the JSON files from services/settings/dump into the local DB.
     */
    _importJSONDump(): Promise<any>;
    /**
     * Fetch the signature info from the collection metadata and verifies that the
     * local set of records has the same.
     *
     * @param {Array<Object>} records The list of records to validate.
     * @param {int} timestamp         The timestamp associated with the list of remote records.
     * @param {Object} metadata       The collection metadata, that contains the signature payload.
     * @returns {Promise}
     */
    _validateCollectionSignature(records: Array<any>, timestamp: int, metadata: any): Promise<any>;
    /**
     * This method is in charge of fetching data from server, applying the diff-based
     * changes to the local DB, validating the signature, and computing a synchronization
     * result with the list of creation, updates, and deletions.
     *
     * @param {Array<Object>} localRecords      Current list of records in local DB.
     * @param {int}           localTimestamp    Current timestamp in local DB.
     * @param {Object}        localMetadata     Current metadata in local DB.
     * @param {int}           expectedTimestamp Cache busting of collection metadata
     * @param {Object}        options
     * @param {bool}          options.retry     Whether this method is called in the
     *                                          retry situation.
     *
     * @returns {Promise<Object>} the computed sync result.
     */
    _importChanges(localRecords: Array<any>, localTimestamp: int, localMetadata: any, expectedTimestamp: int, options?: {
        retry: bool;
    }): Promise<any>;
    /**
     * Fetch information from changeset endpoint.
     *
     * @param expectedTimestamp cache busting value
     * @param since timestamp of last sync (optional)
     */
    _fetchChangeset(expectedTimestamp: any, since: any): Promise<{
        remoteTimestamp: any;
        metadata: any;
        remoteRecords: any;
    }>;
    /**
     * Use the filter func to filter the lists of changes obtained from synchronization,
     * and return them along with the filtered list of local records.
     *
     * If the filtered lists of changes are all empty, we return null (and thus don't
     * bother listing local DB).
     *
     * @param {Object}     syncResult       Synchronization result without filtering.
     *
     * @returns {Promise<Object>} the filtered list of local records, plus the filtered
     *                            list of created, updated and deleted records.
     */
    _filterSyncResult(syncResult: any): Promise<any>;
    /**
     * Filter entries for which calls to `this.filterFunc` returns null.
     *
     * @param {Array<Objet>} data
     * @returns {Array<Object>}
     */
    _filterEntries(data: Array<Objet>): Array<any>;
    /**
     * Remove the fields from the specified record
     * that are not present on server.
     *
     * @param {Object} record
     */
    _cleanLocalFields(record: any): any;
}
/**
 * Minimalist event emitter.
 *
 * Note: we don't use `toolkit/modules/EventEmitter` because **we want** to throw
 * an error when a listener fails to execute.
 */
declare class EventEmitter {
    constructor(events: any);
    _listeners: Map<any, any>;
    /**
     * Event emitter: will execute the registered listeners in the order and
     * sequentially.
     *
     * @param {string} event    the event name
     * @param {Object} payload  the event payload to call the listeners with
     */
    emit(event: string, payload: any): Promise<void>;
    hasListeners(event: any): boolean;
    on(event: any, callback: any): void;
    off(event: any, callback: any): void;
}
declare class APIError extends Error {
}
declare class NetworkError extends APIError {
    constructor(e: any);
}
declare class NetworkOfflineError extends APIError {
    constructor();
}
declare class ServerContentParseError extends APIError {
    constructor(e: any);
}
declare class BackendError extends APIError {
    constructor(e: any);
}
declare class BackoffError extends APIError {
    constructor(e: any);
}
declare class TimeoutError extends APIError {
    constructor(e: any);
}
declare class StorageError extends Error {
    constructor(e: any);
}
declare class InvalidSignatureError extends Error {
    constructor(cid: any, x5u: any);
}
declare class MissingSignatureError extends InvalidSignatureError {
    constructor(cid: any);
}
declare class CorruptedDataError extends InvalidSignatureError {
    constructor(cid: any);
}
declare class UnknownCollectionError extends Error {
    constructor(cid: any);
}
export {};
