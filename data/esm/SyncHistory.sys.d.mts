/**
 * A helper to keep track of synchronization statuses.
 *
 * We rely on a different storage backend than for storing Remote Settings data,
 * because the eventual goal is to be able to detect `IndexedDB` issues and act
 * accordingly.
 */
export class SyncHistory {
    /**
     * @param {String} source the synchronization source (eg. `"settings-sync"`)
     * @param {Object} options
     * @param {int} options.size Maximum number of entries per source.
     */
    constructor(source: string, { size }?: {
        size: int;
    });
    source: string;
    size: int;
    /**
     * Store the synchronization status. The ETag is converted and stored as
     * a millisecond epoch timestamp.
     * The entries with the oldest timestamps will be deleted to maintain the
     * history size under the configured maximum.
     *
     * @param {String} etag the ETag value from the server (eg. `"1647961052593"`)
     * @param {String} status the synchronization status (eg. `"success"`)
     * @param {Object} infos optional additional information to keep track of
     */
    store(etag: string, status: string, infos?: any): Promise<void>;
    /**
     * Retrieve the stored history entries for a certain source, sorted by
     * timestamp descending.
     *
     * @returns {Array<Object>} a list of objects
     */
    list(): Array<any>;
    /**
     * Return the most recent entry.
     */
    last(): Promise<any>;
    /**
     * Wipe out the **whole** store.
     */
    clear(): Promise<void>;
    #private;
}
