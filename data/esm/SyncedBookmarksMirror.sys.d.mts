/**
 * A mirror maintains a copy of the complete tree as stored on the Sync server.
 * It is persistent.
 *
 * The mirror schema is a hybrid of how Sync and Places represent bookmarks.
 * The `items` table contains item attributes (title, kind, URL, etc.), while
 * the `structure` table stores parent-child relationships and position.
 * This is similar to how iOS encodes "value" and "structure" state,
 * though we handle these differently when merging. See `BookmarkMerger` for
 * details.
 *
 * There's no guarantee that the remote state is consistent. We might be missing
 * parents or children, or a bookmark and its parent might disagree about where
 * it belongs. This means we need a strategy to handle missing parents and
 * children.
 *
 * We treat the `children` of the last parent we see as canonical, and ignore
 * the child's `parentid` entirely. We also ignore missing children, and
 * temporarily reparent bookmarks with missing parents to "unfiled". When we
 * eventually see the missing items, either during a later sync or as part of
 * repair, we'll fill in the mirror's gaps and fix up the local tree.
 *
 * During merging, we won't intentionally try to fix inconsistencies on the
 * server, and opt to build as complete a tree as we can from the remote state,
 * even if we diverge from what's in the mirror. See bug 1433512 for context.
 *
 * If a sync is interrupted, we resume downloading from the server collection
 * last modified time, or the server last modified time of the most recent
 * record if newer. New incoming records always replace existing records in the
 * mirror.
 *
 * We delete the mirror database on client reset, including when the sync ID
 * changes on the server, and when the user is node reassigned, disables the
 * bookmarks engine, or signs out.
 */
export class SyncedBookmarksMirror {
    /**
     * Sets up the mirror database connection and upgrades the mirror to the
     * newest schema version. Automatically recreates the mirror if it's corrupt;
     * throws on failure.
     *
     * @param  {String} options.path
     *         The path to the mirror database file, either absolute or relative
     *         to the profile path.
     * @param  {Function} options.recordStepTelemetry
     *         A function with the signature `(name: String, took: Number,
     *         counts: Array?)`, where `name` is the name of the merge step,
     *         `took` is the time taken in milliseconds, and `counts` is an
     *         array of named counts (`{ name, count }` tuples) with additional
     *         counts for the step to record in the telemetry ping.
     * @param  {Function} options.recordValidationTelemetry
     *         A function with the signature `(took: Number, checked: Number,
     *         problems: Array)`, where `took` is the time taken to run
     *         validation in milliseconds, `checked` is the number of items
     *         checked, and `problems` is an array of named problem counts.
     * @param  {AsyncShutdown.Barrier} [options.finalizeAt]
     *         A shutdown phase, barrier, or barrier client that should
     *         automatically finalize the mirror when triggered. Exposed for
     *         testing.
     * @return {SyncedBookmarksMirror}
     *         A mirror ready for use.
     */
    static open(options: any): SyncedBookmarksMirror;
    constructor(db: any, wasCorrupt?: boolean, { recordStepTelemetry, recordValidationTelemetry, finalizeAt, }?: {
        recordStepTelemetry: any;
        recordValidationTelemetry: any;
        finalizeAt?: any;
    });
    db: any;
    wasCorrupt: boolean;
    recordValidationTelemetry: any;
    merger: any;
    progress: ProgressTracker;
    finalizeController: AbortController;
    finalizeAt: any;
    finalizeBound: () => Promise<void>;
    /**
     * Returns the newer of the bookmarks collection last modified time, or the
     * server modified time of the newest record. The bookmarks engine uses this
     * timestamp as the "high water mark" for all downloaded records. Each sync
     * downloads and stores records that are strictly newer than this time.
     *
     * @return {Number}
     *         The high water mark time, in seconds.
     */
    getCollectionHighWaterMark(): number;
    /**
     * Updates the bookmarks collection last modified time. Note that this may
     * be newer than the modified time of the most recent record.
     *
     * @param {Number|String} lastModifiedSeconds
     *        The collection last modified time, in seconds.
     */
    setCollectionLastModified(lastModifiedSeconds: number | string): Promise<void>;
    /**
     * Returns the bookmarks collection sync ID. This corresponds to
     * `PlacesSyncUtils.bookmarks.getSyncId`.
     *
     * @return {String}
     *         The sync ID, or `""` if one isn't set.
     */
    getSyncId(): string;
    /**
     * Ensures that the sync ID in the mirror is up-to-date with the server and
     * Places, and discards the mirror on mismatch.
     *
     * The bookmarks engine store the same sync ID in Places and the mirror to
     * "tie" the two together. This allows Sync to do the right thing if the
     * database files are copied between profiles connected to different accounts.
     *
     * See `PlacesSyncUtils.bookmarks.ensureCurrentSyncId` for an explanation of
     * how Places handles sync ID mismatches.
     *
     * @param {String} newSyncId
     *        The server's sync ID.
     */
    ensureCurrentSyncId(newSyncId: string): Promise<void>;
    /**
     * Stores incoming or uploaded Sync records in the mirror. Rejects if any
     * records are invalid.
     *
     * @param {PlacesItem[]} records
     *        Sync records to store in the mirror.
     * @param {Boolean} [options.needsMerge]
     *        Indicates if the records were changed remotely since the last sync,
     *        and should be merged into the local tree. This option is set to
     *        `true` for incoming records, and `false` for successfully uploaded
     *        records. Tests can also pass `false` to set up an existing mirror.
     * @param {AbortSignal} [options.signal]
     *        An abort signal that can be used to interrupt the operation. If
     *        omitted, storing incoming items can still be interrupted when the
     *        mirror is finalized.
     */
    store(records: PlacesItem[], { needsMerge, signal }?: boolean): Promise<void>;
    /**
     * Builds a complete merged tree from the local and remote trees, resolves
     * value and structure conflicts, dedupes local items, applies the merged
     * tree back to Places, and notifies observers about the changes.
     *
     * Merging and application happen in a transaction, meaning code that uses the
     * main Places connection, including the UI, will fail to write to the
     * database until the transaction commits. Asynchronous consumers will retry
     * on `SQLITE_BUSY`; synchronous consumers will fail after waiting for 100ms.
     * See bug 1305563, comment 122 for details.
     *
     * @param  {Number} [options.localTimeSeconds]
     *         The current local time, in seconds.
     * @param  {Number} [options.remoteTimeSeconds]
     *         The current server time, in seconds.
     * @param  {Boolean} [options.notifyInStableOrder]
     *         If `true`, fire observer notifications for items in the same folder
     *         in a stable order. This is disabled by default, to avoid the cost
     *         of sorting the notifications, but enabled in some tests to simplify
     *         their checks.
     * @param  {AbortSignal} [options.signal]
     *         An abort signal that can be used to interrupt a merge when its
     *         associated `AbortController` is aborted. If omitted, the merge can
     *         still be interrupted when the mirror is finalized.
     * @return {Object.<String, BookmarkChangeRecord>}
     *         A changeset containing locally changed and reconciled records to
     *         upload to the server, and to store in the mirror once upload
     *         succeeds.
     */
    apply({ localTimeSeconds, remoteTimeSeconds, notifyInStableOrder, signal, }?: number): any;
    tryApply(signal: any, localTimeSeconds: any, remoteTimeSeconds: any, notifyInStableOrder?: boolean): Promise<any>;
    merge(signal: any, localTimeSeconds?: number, remoteTimeSeconds?: number): Promise<any>;
    /**
     * Discards the mirror contents. This is called when the user is node
     * reassigned, disables the bookmarks engine, or signs out.
     */
    reset(): Promise<void>;
    /**
     * Fetches the GUIDs of all items in the remote tree that need to be merged
     * into the local tree.
     *
     * @return {String[]}
     *         Remotely changed GUIDs that need to be merged into Places.
     */
    fetchUnmergedGuids(): string[];
    storeRemoteBookmark(record: any, { needsMerge, signal }: {
        needsMerge: any;
        signal: any;
    }): Promise<void>;
    storeRemoteQuery(record: any, { needsMerge }: {
        needsMerge: any;
    }): Promise<void>;
    storeRemoteFolder(record: any, { needsMerge, signal }: {
        needsMerge: any;
        signal: any;
    }): Promise<void>;
    storeRemoteLivemark(record: any, { needsMerge }: {
        needsMerge: any;
    }): Promise<void>;
    storeRemoteSeparator(record: any, { needsMerge }: {
        needsMerge: any;
    }): Promise<void>;
    storeRemoteTombstone(record: any, { needsMerge }: {
        needsMerge: any;
    }): Promise<void>;
    maybeStoreRemoteURL(url: any): Promise<void>;
    /**
     * Inflates Sync records for all staged outgoing items.
     *
     * @param  {AbortSignal} signal
     *         Stops fetching records when the associated `AbortController`
     *         is aborted.
     * @return {Object}
     *         A `{ changeRecords, count }` tuple, where `changeRecords` is a
     *         changeset containing Sync record cleartexts for outgoing items and
     *         tombstones, keyed by their Sync record IDs, and `count` is the
     *         number of records.
     */
    fetchLocalChangeRecords(signal: AbortSignal): any;
    /**
     * Closes the mirror database connection. This is called automatically on
     * shutdown, but may also be called explicitly when the mirror is no longer
     * needed.
     *
     * @param {Boolean} [options.alsoCleanup]
     *                  If specified, drop all temp tables, views, and triggers,
     *                  and detach from the mirror database before closing the
     *                  connection. Defaults to `true`.
     */
    finalize({ alsoCleanup }?: boolean): Promise<void>;
    finalizePromise: Promise<void>;
}
export namespace SyncedBookmarksMirror {
    export namespace META_KEY {
        let LAST_MODIFIED: string;
        let SYNC_ID: string;
    }
    export { InterruptedError };
    export { MergeError };
    export { MergeConflictError };
}
/**
 * A helper to track the progress of a merge for telemetry and shutdown hang
 * reporting.
 */
declare class ProgressTracker {
    constructor(recordStepTelemetry: any);
    recordStepTelemetry: any;
    steps: any[];
    /**
     * Records a merge step, updating the shutdown blocker state.
     *
     * @param {String} name A step name from `ProgressTracker.STEPS`. This is
     *        included in shutdown hang crash reports, along with the timestamp
     *        the step was recorded.
     * @param {Number} [took] The time taken, in milliseconds.
     * @param {Array} [counts] An array of additional counts to report in the
     *        shutdown blocker state.
     */
    step(name: string, took?: number, counts?: any[]): void;
    /**
     * Records a merge step with timings and counts for telemetry.
     *
     * @param {String} name The step name.
     * @param {Number} took The time taken, in milliseconds.
     * @param {Array} [counts] An array of additional `{ name, count }` tuples to
     *        record in telemetry for this step.
     */
    stepWithTelemetry(name: string, took: number, counts?: any[]): void;
    /**
     * Records a merge step with the time taken and item count.
     *
     * @param {String} name The step name.
     * @param {Number} took The time taken, in milliseconds.
     * @param {Number} count The number of items handled in this step.
     */
    stepWithItemCount(name: string, took: number, count: number): void;
    /**
     * Clears all recorded merge steps.
     */
    reset(): void;
    /**
     * Returns the shutdown blocker state. This is included in shutdown hang
     * crash reports, in the `AsyncShutdownTimeout` annotation.
     *
     * @see    `fetchState` in `AsyncShutdown` for more details.
     * @return {Object} A stringifiable object with the recorded steps.
     */
    fetchState(): any;
}
declare namespace ProgressTracker {
    namespace STEPS {
        let FETCH_LOCAL_TREE: string;
        let FETCH_REMOTE_TREE: string;
        let MERGE: string;
        let APPLY: string;
        let NOTIFY_OBSERVERS: string;
        let FETCH_LOCAL_CHANGE_RECORDS: string;
        let FINALIZE: string;
    }
}
/**
 * An error thrown when the merge was interrupted.
 */
declare class InterruptedError extends Error {
    constructor(message: any);
}
/**
 * An error thrown when the merge failed for an unexpected reason.
 */
declare class MergeError extends Error {
    constructor(message: any);
}
/**
 * An error thrown when the merge can't proceed because the local tree
 * changed during the merge.
 */
declare class MergeConflictError extends Error {
    constructor(message: any);
}
export {};
