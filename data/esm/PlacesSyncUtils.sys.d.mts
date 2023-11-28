export namespace PlacesSyncUtils {
    let history: Readonly<{
        SYNC_ID_META_KEY: "sync/history/syncId";
        LAST_SYNC_META_KEY: "sync/history/lastSync";
        /**
         * Returns the current history sync ID, or `""` if one isn't set.
         */
        getSyncId(): any;
        /**
         * Assigns a new sync ID. This is called when we sync for the first time with
         * a new account, and when we're the first to sync after a node reassignment.
         *
         * @return {Promise} resolved once the ID has been updated.
         * @resolves to the new sync ID.
         */
        resetSyncId(): Promise<any>;
        /**
         * Ensures that the existing local sync ID, if any, is up-to-date with the
         * server. This is called when we sync with an existing account.
         *
         * @param newSyncId
         *        The server's sync ID.
         * @return {Promise} resolved once the ID has been updated.
         */
        ensureCurrentSyncId(newSyncId: any): Promise<any>;
        /**
         * Returns the last sync time, in seconds, for the history collection, or 0
         * if history has never synced before.
         */
        getLastSync(): Promise<number>;
        /**
         * Updates the history collection last sync time.
         *
         * @param lastSyncSeconds
         *        The collection last sync time, in seconds, as a number or string.
         */
        setLastSync(lastSyncSeconds: any): Promise<void>;
        /**
         * Removes all history visits and pages from the database. Sync calls this
         * method when it receives a command from a remote client to wipe all stored
         * data.
         *
         * @return {Promise} resolved once all pages and visits have been removed.
         */
        wipe(): Promise<any>;
        /**
         * Removes the sync ID and last sync time for the history collection. Unlike
         * `wipe`, this keeps all existing history pages and visits.
         *
         * @return {Promise} resolved once the metadata have been removed.
         */
        reset(): Promise<any>;
        /**
         * Clamps a history visit date between the current date and the earliest
         * sensible date.
         *
         * @param {Date} visitDate
         *        The visit date.
         * @return {Date} The clamped visit date.
         */
        clampVisitDate(visitDate: Date): Date;
        /**
         * Fetches the frecency for the URL provided
         *
         * @param url
         * @returns {Number} The frecency of the given url
         */
        fetchURLFrecency(url: any): number;
        /**
         * Filters syncable places from a collection of places guids.
         *
         * @param guids
         *
         * @returns {Array} new Array with the guids that aren't syncable
         */
        determineNonSyncableGuids(guids: any): any[];
        /**
         * Change the guid of the given uri
         *
         * @param uri
         * @param guid
         */
        changeGuid(uri: any, guid: any): any;
        /**
         * Fetch the last 20 visits (date and type of it) corresponding to a given url
         *
         * @param url
         * @returns {Array} Each element of the Array is an object with members: date and type
         */
        fetchVisitsForURL(url: any): any[];
        /**
         * Fetches the guid of a uri
         *
         * @param uri
         * @returns {String} The guid of the given uri
         */
        fetchGuidForURL(url: any): string;
        /**
         * Fetch information about a guid (url, title and frecency)
         *
         * @param guid
         * @returns {Object} Object with three members: url, title and frecency of the given guid
         */
        fetchURLInfoForGuid(guid: any): any;
        /**
         * Get all URLs filtered by the limit and since members of the options object.
         *
         * @param options
         *        Options object with two members, since and limit. Both of them must be provided
         * @returns {Array} - Up to limit number of URLs starting from the date provided by since
         *
         * Note that some visit types are explicitly excluded - downloads and framed
         * links.
         */
        getAllURLs(options: any): any[];
        /**
         * Insert or update the unknownFields that this client doesn't understand (yet)
         * but stores & roundtrips them to prevent other clients from losing that data
         *
         * @param updates array of objects
         *  an update object needs to have either a:
         *  placeId: if we're putting unknownFields for a moz_places item
         *  visitId: if we're putting unknownFields for a moz_historyvisits item
         *  Note: Supplying none or both will result in that record being ignored
         *  unknownFields: the stringified json to insert
         */
        updateUnknownFieldsBatch(updates: any): Promise<any>;
    }>;
    let bookmarks: any;
    namespace test {
        let bookmarks_1: Readonly<{
            /**
             * Inserts a synced bookmark into the tree. Only SYNC TESTS should call this
             * method; other callers should use `PlacesUtils.bookmarks.insert`.
             *
             * It is in this file rather than a test-only file because it makes use of
             * other internal functions here, so moving is not trivial - see bug 1662602.
             *
             * The following properties are supported:
             *  - kind: Required.
             *  - guid: Required.
             *  - parentGuid: Required.
             *  - url: Required for bookmarks.
             *  - tags: An optional array of tag strings.
             *  - keyword: An optional keyword string.
             *
             * Sync doesn't set the index, since it appends and reorders children
             * after applying all incoming items.
             *
             * @param info
             *        object representing a synced bookmark.
             *
             * @return {Promise} resolved when the creation is complete.
             * @resolves to an object representing the created bookmark.
             * @rejects if it's not possible to create the requested bookmark.
             * @throws if the arguments are invalid.
             */
            insert(info: any): Promise<any>;
        }>;
        export { bookmarks_1 as bookmarks };
    }
    /**
     * Other clients might have new fields we don't quite understand yet,
     * so we add it to a "unknownFields" field to roundtrip back to the server
     * so other clients don't experience data loss
     * @param record: an object, usually from the server, and will iterate through the
     *  the keys and extract any fields that are unknown to this client
     * @param validFields: an array of keys we know are valid and should ignore
     * @returns {String} json object containing unknownfields, null if none found
     */
    function extractUnknownFields(record: any, validFields: any): string;
}
