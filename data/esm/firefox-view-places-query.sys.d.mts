/// <reference types="gecko-types" />
/**
 * Extension of PlacesQuery which provides additional caches for Firefox View.
 */
export class FirefoxViewPlacesQuery extends PlacesQuery {
    get visitsFromToday(): import("resource://gre/modules/PlacesQuery.sys.mjs").HistoryVisit[];
    get visitsFromYesterday(): import("resource://gre/modules/PlacesQuery.sys.mjs").HistoryVisit[];
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
    formatRowAsVisit(row: any): any;
    formatEventAsVisit(event: any): any;
    handlePageVisited(event: any): void;
    #private;
}
import { PlacesQuery } from "resource://gre/modules/PlacesQuery.sys.mjs";
