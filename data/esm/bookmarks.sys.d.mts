export function PlacesItem(collection: any, id: any, type: any): void;
export class PlacesItem {
    constructor(collection: any, id: any, type: any);
    type: any;
    decrypt(keyBundle: any): Promise<any>;
    getTypeObject: (type: any) => typeof import("./bookmarks.sys.mjs").Bookmark | typeof import("./bookmarks.sys.mjs").BookmarkQuery | typeof import("./bookmarks.sys.mjs").BookmarkFolder | typeof import("./bookmarks.sys.mjs").Livemark | typeof import("./bookmarks.sys.mjs").BookmarkSeparator | typeof import("./bookmarks.sys.mjs").PlacesItem;
    _logName: string;
    toSyncBookmark(): {
        kind: any;
        recordId: any;
        parentRecordId: any;
    };
    fromSyncBookmark(item: any): void;
    parentid: any;
    parentName: any;
    dateAdded: any;
}
export function Bookmark(collection: any, id: any, type: any): void;
export class Bookmark {
    constructor(collection: any, id: any, type: any);
    _logName: string;
    toSyncBookmark(): any;
    fromSyncBookmark(item: any): void;
    title: any;
    bmkUri: any;
    description: any;
    tags: any;
    keyword: any;
}
export function BookmarkQuery(collection: any, id: any): void;
export class BookmarkQuery {
    constructor(collection: any, id: any);
    _logName: string;
    toSyncBookmark(): any;
    fromSyncBookmark(item: any): void;
    folderName: any;
    queryId: any;
}
export function BookmarkFolder(collection: any, id: any, type: any): void;
export class BookmarkFolder {
    constructor(collection: any, id: any, type: any);
    _logName: string;
    toSyncBookmark(): any;
    fromSyncBookmark(item: any): void;
    title: any;
    description: any;
    children: any;
}
export function Livemark(collection: any, id: any): void;
export class Livemark {
    constructor(collection: any, id: any);
    _logName: string;
    toSyncBookmark(): any;
    fromSyncBookmark(item: any): void;
    feedUri: any;
    siteUri: any;
}
export function BookmarkSeparator(collection: any, id: any): void;
export class BookmarkSeparator {
    constructor(collection: any, id: any);
    _logName: string;
    fromSyncBookmark(item: any): void;
    pos: any;
}
/**
 * The bookmarks engine uses a different store that stages downloaded bookmarks
 * in a separate database, instead of writing directly to Places. The buffer
 * handles reconciliation, so we stub out `_reconcile`, and wait to pull changes
 * until we're ready to upload.
 */
export function BookmarksEngine(service: any): void;
export class BookmarksEngine {
    /**
     * The bookmarks engine uses a different store that stages downloaded bookmarks
     * in a separate database, instead of writing directly to Places. The buffer
     * handles reconciliation, so we stub out `_reconcile`, and wait to pull changes
     * until we're ready to upload.
     */
    constructor(service: any);
    _recordObj: typeof PlacesItem;
    _trackerObj: typeof BookmarksTracker;
    _storeObj: typeof BookmarksStore;
    version: number;
    overrideTelemetryName: string;
    _defaultSort: string;
    syncPriority: number;
    allowSkippedRecord: boolean;
    _ensureCurrentSyncID(newSyncID: any): Promise<void>;
    ensureCurrentSyncID(newSyncID: any): Promise<any>;
    getSyncID(): Promise<any>;
    resetSyncID(): Promise<any>;
    resetLocalSyncID(): Promise<any>;
    getLastSync(): Promise<any>;
    setLastSync(lastSync: any): Promise<void>;
    _syncStartup(): Promise<void>;
    _sync(): Promise<void>;
    _ranMaintenanceOnLastSync: boolean;
    _syncFinish(): Promise<void>;
    pullAllChanges(): Promise<any>;
    trackRemainingChanges(): Promise<void>;
    _deleteId(id: any): void;
    _resetClient(): Promise<void>;
    _shouldDeleteRemotely(incomingItem: any): boolean;
    emptyChangeset(): BookmarksChangeset;
    _apply(): Promise<void>;
    _processIncoming(newitems: any): Promise<void>;
    _reconcile(item: any): Promise<boolean>;
    _createRecord(id: any): Promise<Bookmark | BookmarkQuery | BookmarkFolder | Livemark | BookmarkSeparator | PlacesItem>;
    _doCreateRecord(id: any): Promise<Bookmark | BookmarkQuery | BookmarkFolder | Livemark | BookmarkSeparator | PlacesItem>;
    _recordFromCleartext(id: any, cleartext: any): Bookmark | BookmarkQuery | BookmarkFolder | Livemark | BookmarkSeparator | PlacesItem;
    pullChanges(): Promise<{}>;
    /**
     * Writes successfully uploaded records back to the mirror, so that the
     * mirror matches the server. We update the mirror before updating Places,
     * which has implications for interrupted syncs.
     *
     * 1. Sync interrupted during upload; server doesn't support atomic uploads.
     *    We'll download and reapply everything that we uploaded before the
     *    interruption. All locally changed items retain their change counters.
     * 2. Sync interrupted during upload; atomic uploads enabled. The server
     *    discards the batch. All changed local items retain their change
     *    counters, so the next sync resumes cleanly.
     * 3. Sync interrupted during upload; outgoing records can't fit in a single
     *    batch. We'll download and reapply all records through the most recent
     *    committed batch. This is a variation of (1).
     * 4. Sync interrupted after we update the mirror, but before cleanup. The
     *    mirror matches the server, but locally changed items retain their change
     *    counters. Reuploading them on the next sync should be idempotent, though
     *    unnecessary. If another client makes a conflicting remote change before
     *    we sync again, we may incorrectly prefer the local state.
     * 5. Sync completes successfully. We'll update the mirror, and reset the
     *    change counters for all items.
     */
    _onRecordsWritten(succeeded: any, failed: any, serverModifiedTime: any): Promise<void>;
    finalize(): Promise<void>;
}
declare function BookmarksTracker(name: any, engine: any): void;
declare class BookmarksTracker {
    constructor(name: any, engine: any);
    onStart(): void;
    _placesListener: any;
    onStop(): void;
    getChangedIDs(): Promise<any>;
    observe(subject: any, topic: any, data: any): void;
    QueryInterface: any;
    _upScore: () => void;
    handlePlacesEvents(events: any): void;
}
/**
 * The bookmarks store delegates to the mirror for staging and applying
 * records. Most `Store` methods intentionally remain abstract, so you can't use
 * this store to create or update bookmarks in Places. All changes must go
 * through the mirror, which takes care of merging and producing a valid tree.
 */
declare function BookmarksStore(name: any, engine: any): void;
declare class BookmarksStore {
    /**
     * The bookmarks store delegates to the mirror for staging and applying
     * records. Most `Store` methods intentionally remain abstract, so you can't use
     * this store to create or update bookmarks in Places. All changes must go
     * through the mirror, which takes care of merging and producing a valid tree.
     */
    constructor(name: any, engine: any);
    _openMirrorPromise: null;
    _batchChunkSize: number;
    createRecord(id: any, collection: any): Promise<Bookmark | BookmarkQuery | BookmarkFolder | Livemark | BookmarkSeparator | PlacesItem>;
    _calculateIndex(record: any): Promise<number>;
    wipe(): Promise<void>;
    ensureOpenMirror(): any;
    _openMirror(): Promise<any>;
    applyIncomingBatch(records: any, countTelemetry: any): Promise<any[]>;
    applyIncoming(record: any): Promise<void>;
    finalize(): Promise<void>;
}
/**
 * A changeset that stores extra metadata in a change record for each ID. The
 * engine updates this metadata when uploading Sync records, and writes it back
 * to Places in `BookmarksEngine#trackRemainingChanges`.
 *
 * The `synced` property on a change record means its corresponding item has
 * been uploaded, and we should pretend it doesn't exist in the changeset.
 */
declare class BookmarksChangeset {
    getModifiedTimestamp(id: any): void;
    has(id: any): void;
    delete(id: any): void;
    ids(): any[];
}
export {};
