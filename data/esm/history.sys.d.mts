export function DumpHistory(): Promise<void>;
export namespace HistoryEntry {
    /**
     * Add
     *
     * Adds visits for a uri to the history database.  Throws on error.
     *
     * @param item An object representing one or more visits to a specific uri
     * @param usSinceEpoch The number of microseconds from Epoch to
     *        the time the current Crossweave run was started
     * @return nothing
     */
    function Add(item: any, msSinceEpoch: any): Promise<any>;
    /**
     * Find
     *
     * Finds visits for a uri to the history database.  Throws on error.
     *
     * @param item An object representing one or more visits to a specific uri
     * @param usSinceEpoch The number of microseconds from Epoch to
     *        the time the current Crossweave run was started
     * @return true if all the visits for the uri are found, otherwise false
     */
    function Find(item: any, msSinceEpoch: any): Promise<boolean>;
    /**
     * Delete
     *
     * Removes visits from the history database. Throws on error.
     *
     * @param item An object representing items to delete
     * @param usSinceEpoch The number of microseconds from Epoch to
     *        the time the current Crossweave run was started
     * @return nothing
     */
    function Delete(item: any, msSinceEpoch: any): Promise<void>;
}
event places doing bad things at shutdown.
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
