/**
 * Extension of PlacesQuery which provides additional caches for Firefox View.
 */
export class FirefoxViewPlacesQuery {
    get visitsFromToday(): any;
    get visitsFromYesterday(): any;
    /**
     * Get a list of visits per day for each day on this month, excluding today
     * and yesterday.
     *
     * @returns {HistoryVisit[][]}
     *   A list of visits for each day.
     */
    get visitsByDay(): HistoryVisit[][];
    /**
     * Get a list of visits per month for each month, excluding this one, and
     * excluding yesterday's visits if yesterday happens to fall on the previous
     * month.
     *
     * @returns {HistoryVisit[][]}
     *   A list of visits for each month.
     */
    get visitsByMonth(): HistoryVisit[][];
    appendToCache(visit: any): void;
    insertSortedIntoCache(visit: any): void;
    fetchHistory(): Promise<void>;
    handlePageVisited(event: any): void;
    #private;
}
