/**
 * An object that contains details of a page visit.
 *
 * @typedef {object} HistoryVisit
 *
 * @property {Date} date
 *   When this page was visited.
 * @property {string} title
 *   The page's title.
 * @property {string} url
 *   The page's URL.
 */
/**
 * Cache key type depends on how visits are currently being grouped.
 *
 * By date: number - The start of day timestamp of the visit.
 * By site: string - The domain name of the visit.
 *
 * @typedef {number | string} CacheKey
 */
/**
 * Queries the places database using an async read only connection. Maintains
 * an internal cache of query results which is live-updated by adding listeners
 * to `PlacesObservers`. When the results are no longer needed, call `close` to
 * remove the listeners.
 */
export class PlacesQuery {
    /** @type {Map<CacheKey, HistoryVisit[]>} */
    cachedHistory: Map<CacheKey, HistoryVisit[]>;
    /** @type {object} */
    cachedHistoryOptions: object;
    /**
     * Get a snapshot of history visits at this moment.
     *
     * @param {object} [options]
     *   Options to apply to the database query.
     * @param {number} [options.daysOld]
     *   The maximum number of days to go back in history.
     * @param {number} [options.limit]
     *   The maximum number of visits to return.
     * @param {string} [options.sortBy]
     *   The sorting order of history visits:
     *   - "date": Group visits based on the date they occur.
     *   - "site": Group visits based on host, excluding any "www." prefix.
     * @returns {Map<any, HistoryVisit[]>}
     *   History visits obtained from the database query.
     */
    getHistory({ daysOld, limit, sortBy }?: {
        daysOld?: number;
        limit?: number;
        sortBy?: string;
    }): Map<any, HistoryVisit[]>;
    /**
     * Clear existing cache and store options for the new query.
     *
     * @param {object} options
     *   The database query options.
     */
    initializeCache(options?: object): void;
    /**
     * Run the database query and populate the history cache.
     */
    fetchHistory(): Promise<void>;
    /**
     * Search the database for visits matching a search query. This does not
     * affect internal caches, and observers will not be notified of search
     * results obtained from this query.
     *
     * @param {string} query
     *   The search query.
     * @param {number} [limit]
     *   The maximum number of visits to return.
     * @returns {HistoryVisit[]}
     *   The matching visits.
     */
    searchHistory(query: string, limit?: number): HistoryVisit[];
    /**
     * Append a visit into the container it belongs to.
     *
     * @param {HistoryVisit} visit
     *   The visit to append.
     */
    appendToCache(visit: HistoryVisit): void;
    /**
     * Insert a visit into the container it belongs to, ensuring to maintain
     * sorted order. Used for handling `page-visited` events after the initial
     * fetch of history data.
     *
     * @param {HistoryVisit} visit
     *   The visit to insert.
     */
    insertSortedIntoCache(visit: HistoryVisit): void;
    /**
     * Observe changes to the visits table. When changes are made, the callback
     * is given the new list of visits. Only one callback can be active at a time
     * (per instance). If one already exists, it will be replaced.
     *
     * @param {function(HistoryVisit[])} callback
     *   The function to call when changes are made.
     */
    observeHistory(callback: (arg0: HistoryVisit[]) => any): void;
    /**
     * Close this query. Caches are cleared and listeners are removed.
     */
    close(): void;
    /**
     * Handle a page visited event.
     *
     * @param {PlacesEvent} event
     *   The event.
     * @return {HistoryVisit}
     *   The visit that was inserted, or `null` if no visit was inserted.
     */
    handlePageVisited(event: PlacesEvent): HistoryVisit;
    /**
     * Handle a page title changed event.
     *
     * @param {PlacesEvent} event
     *   The event.
     */
    handlePageTitleChanged(event: PlacesEvent): void;
    /**
     * Get timestamp from a date by only considering its year, month, and date
     * (so that it can be used as a date-based key).
     *
     * @param {Date} date
     *   The date to truncate.
     * @returns {number}
     *   The corresponding timestamp.
     */
    getStartOfDayTimestamp(date: Date): number;
    /**
     * Get timestamp from a date by only considering its year and month (so that
     * it can be used as a month-based key).
     *
     * @param {Date} date
     *   The date to truncate.
     * @returns {number}
     *   The corresponding timestamp.
     */
    getStartOfMonthTimestamp(date: Date): number;
    /**
     * Format a database row as a history visit.
     *
     * @param {mozIStorageRow} row
     *   The row to format.
     * @returns {HistoryVisit}
     *   The resulting history visit.
     */
    formatRowAsVisit(row: mozIStorageRow): HistoryVisit;
    /**
     * Format a page visited event as a history visit.
     *
     * @param {PlacesEvent} event
     *   The event to format.
     * @returns {HistoryVisit}
     *   The resulting history visit.
     */
    formatEventAsVisit(event: PlacesEvent): HistoryVisit;
    #private;
}
/**
 * An object that contains details of a page visit.
 */
export type HistoryVisit = {
    /**
     *   When this page was visited.
     */
    date: Date;
    /**
     *   The page's title.
     */
    title: string;
    /**
     *   The page's URL.
     */
    url: string;
};
/**
 * Cache key type depends on how visits are currently being grouped.
 *
 * By date: number - The start of day timestamp of the visit.
 * By site: string - The domain name of the visit.
 */
export type CacheKey = number | string;
