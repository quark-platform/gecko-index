export function HistoryRec(collection: any, id: any): void;
export class HistoryRec {
    constructor(collection: any, id: any);
    _logName: string;
    ttl: number;
}
export function HistoryEngine(service: any): void;
export class HistoryEngine {
    constructor(service: any);
    _recordObj: typeof HistoryRec;
    _storeObj: typeof HistoryStore;
    _trackerObj: typeof HistoryTracker;
    downloadLimit: any;
    syncPriority: number;
    getSyncID(): Promise<any>;
    ensureCurrentSyncID(newSyncID: any): Promise<any>;
    resetSyncID(): Promise<any>;
    resetLocalSyncID(): Promise<any>;
    getLastSync(): Promise<any>;
    setLastSync(lastSync: any): Promise<void>;
    shouldSyncURL(url: any): boolean;
    pullNewChanges(): Promise<any>;
    _resetClient(): Promise<void>;
}
declare function HistoryStore(name: any, engine: any): void;
declare class HistoryStore {
    constructor(name: any, engine: any);
    MAX_VISITS_PER_INSERT: number;
    setGUID(uri: any, guid: any): Promise<any>;
    GUIDForUri(uri: any, create: any): Promise<any>;
    changeItemID(oldID: any, newID: any): Promise<void>;
    getAllIDs(): Promise<{}>;
    applyIncomingBatch(records: any, countTelemetry: any): Promise<any[]>;
    /**
     * Returns a generator that splits records into sanely sized chunks suitable
     * for passing to places to prevent places doing bad things at shutdown.
     */
    _generateChunks(records: any): Generator<any[], void, unknown>;
    _canAddURI(uri: any): any;
    /**
     * Converts a Sync history record to a mozIPlaceInfo.
     *
     * Throws if an invalid record is encountered (invalid URI, etc.),
     * returns a new PageInfo object if the record is to be applied, null
     * otherwise (no visits to add, etc.),
     */
    _recordToPlaceInfo(record: any): Promise<{
        title: any;
        url: any;
        guid: any;
        visits: any;
    }>;
    remove(record: any): Promise<void>;
    itemExists(id: any): Promise<boolean>;
    createRecord(id: any, collection: any): Promise<HistoryRec>;
    wipe(): Promise<any>;
}
declare function HistoryTracker(name: any, engine: any): void;
declare class HistoryTracker {
    constructor(name: any, engine: any);
    onStart(): void;
    _placesObserver: any;
    onStop(): void;
    QueryInterface: any;
    handlePlacesEvents(aEvents: any): void;
    _handlePlacesEvents(aEvents: any): Promise<void>;
}
export {};
