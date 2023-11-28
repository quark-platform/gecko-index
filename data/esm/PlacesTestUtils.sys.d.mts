export const PlacesTestUtils: Readonly<{
    /**
     * Asynchronously adds visits to a page.
     *
     * @param {*} aPlaceInfo
     *        A string URL, nsIURI, Window.URL object, info object (explained
     *        below), or an array of any of those.  Info objects describe the
     *        visits to add more fully than URLs/URIs alone and look like this:
     *
     *          {
     *            uri|url: href, URL or nsIURI of the page,
     *            [optional] transition: one of the TRANSITION_* from nsINavHistoryService,
     *            [optional] title: title of the page,
     *            [optional] visitDate: visit date, either in microseconds from the epoch or as a date object
     *            [optional] referrer: nsIURI of the referrer for this visit
     *          }
     *
     * @return {Promise}
     * @resolves When all visits have been added successfully.
     * @rejects JavaScript exception.
     */
    addVisits(placeInfo: any): Promise<any>;
    addFavicons(faviconURLs: any): Promise<void>;
    /**
     * Clears any favicons stored in the database.
     */
    clearFavicons(): Promise<any>;
    /**
     * Adds a bookmark to the database. This should only be used when you need to
     * add keywords. Otherwise, use `PlacesUtils.bookmarks.insert()`.
     * @param {string} aBookmarkObj.uri
     * @param {string} [aBookmarkObj.title]
     * @param {string} [aBookmarkObj.keyword]
     */
    addBookmarkWithDetails(aBookmarkObj: any): Promise<void>;
    /**
     * Waits for all pending async statements on the default connection.
     *
     * @return {Promise}
     * @resolves When all pending async statements finished.
     * @rejects Never.
     *
     * @note The result is achieved by asynchronously executing a query requiring
     *       a write lock.  Since all statements on the same connection are
     *       serialized, the end of this write operation means that all writes are
     *       complete.  Note that WAL makes so that writers don't block readers, but
     *       this is a problem only across different connections.
     */
    promiseAsyncUpdates(): Promise<any>;
    /**
     * Asynchronously checks if an address is found in the database.
     * @param aURI
     *        nsIURI or address to look for.
     *
     * @return {Promise}
     * @resolves Returns true if the page is found.
     * @rejects JavaScript exception.
     */
    isPageInDB(aURI: any): Promise<any>;
    /**
     * Asynchronously checks how many visits exist for a specified page.
     * @param aURI
     *        nsIURI or address to look for.
     *
     * @return {Promise}
     * @resolves Returns the number of visits found.
     * @rejects JavaScript exception.
     */
    visitsInDB(aURI: any): Promise<any>;
    /**
     * Marks all syncable bookmarks as synced by setting their sync statuses to
     * "NORMAL", resetting their change counters, and removing all tombstones.
     * Used by tests to avoid calling `PlacesSyncUtils.bookmarks.pullChanges`
     * and `PlacesSyncUtils.bookmarks.pushChanges`.
     *
     * @resolves When all bookmarks have been updated.
     * @rejects JavaScript exception.
     */
    markBookmarksAsSynced(): any;
    /**
     * Sets sync fields for multiple bookmarks.
     * @param aStatusInfos
     *        One or more objects with the following properties:
     *          { [required] guid: The bookmark's GUID,
     *            syncStatus: An `nsINavBookmarksService::SYNC_STATUS_*` constant,
     *            syncChangeCounter: The sync change counter value,
     *            lastModified: The last modified time,
     *            dateAdded: The date added time.
     *          }
     *
     * @resolves When all bookmarks have been updated.
     * @rejects JavaScript exception.
     */
    setBookmarkSyncFields(...aFieldInfos: any[]): any;
    fetchBookmarkSyncFields(...aGuids: any[]): Promise<{
        guid: any;
        syncStatus: any;
        syncChangeCounter: any;
        lastModified: any;
        dateAdded: any;
    }[]>;
    fetchSyncTombstones(): Promise<any>;
    /**
     * Returns a promise that waits until happening Places events specified by
     * notification parameter.
     *
     * @param {string} notification
     *        Available values are:
     *          bookmark-added
     *          bookmark-removed
     *          bookmark-moved
     *          bookmark-guid_changed
     *          bookmark-keyword_changed
     *          bookmark-tags_changed
     *          bookmark-time_changed
     *          bookmark-title_changed
     *          bookmark-url_changed
     *          favicon-changed
     *          history-cleared
     *          page-removed
     *          page-title-changed
     *          page-visited
     *          pages-rank-changed
     *          purge-caches
     * @param {Function} conditionFn [optional]
     *        If need some more condition to wait, please use conditionFn.
     *        This is an optional, but if set, should returns true when the wait
     *        condition is met.
     * @return {Promise}
     *         A promise that resolved if the wait condition is met.
     *         The resolved value is an array of PlacesEvent object.
     */
    waitForNotification(notification: string, conditionFn: Function): Promise<any>;
    /**
     * A debugging helper that dumps the contents of an SQLite table.
     *
     * @param {String} table
     *        The table name.
     * @param {Sqlite.OpenedConnection} [db]
     *        The mirror database connection.
     * @param {String[]} [columns]
     *        Clumns to be printed, defaults to all.
     */
    dumpTable({ table, db, columns }: string): Promise<void>;
    /**
     * Removes all stored metadata.
     */
    clearMetadata(): any;
    /**
     * Clear moz_inputhistory table.
     */
    clearInputHistory(): Promise<void>;
    /**
     * Clear moz_historyvisits table.
     */
    clearHistoryVisits(): Promise<void>;
    /**
     * Compares 2 place: URLs ignoring the order of their params.
     * @param url1 First URL to compare
     * @param url2 Second URL to compare
     * @return whether the URLs are the same
     */
    ComparePlacesURIs(url1: any, url2: any): boolean;
    /**
     * Retrieves a single value from a specified field in a database table, based
     * on the given conditions.
     * @param {string} table - The name of the database table to query.
     * @param {string} field - The name of the field to retrieve a value from.
     * @param {Object} [conditions] - An object containing the conditions to
     * filter the query results. The keys represent the names of the columns to
     * filter by, and the values represent the filter values.
     * @return {Promise} A Promise that resolves to the value of the specified
     * field from the database table, or null if the query returns no results.
     * @throws If more than one result is found for the given conditions.
     */
    getDatabaseValue(table: string, field: string, conditions?: any): Promise<any>;
    /**
     * Updates specified fields in a database table, based on the given
     * conditions.
     * @param {string} table - The name of the database table to add to.
     * @param {string} fields - an object with field, value pairs
     * @param {Object} [conditions] - An object containing the conditions to filter
     * the query results. The keys represent the names of the columns to filter
     * by, and the values represent the filter values.
     * @return {Promise} A Promise that resolves to the number of affected rows.
     * @throws If no rows were affected.
     */
    updateDatabaseValues(table: string, fields: string, conditions?: any): Promise<any>;
    promiseItemId(guid: any): Promise<any>;
    promiseItemGuid(id: any): Promise<any>;
    promiseManyItemIds(guids: any): Promise<Map<any, any>>;
    _buildWhereClause(table: any, conditions: any): {
        fragment: string;
        params: {};
    };
}>;
