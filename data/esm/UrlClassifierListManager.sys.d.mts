export function RegistrationData(): PROT_ListManager;
/**
 * A ListManager keeps track of exception and block lists and knows
 * how to update them.
 *
 * @constructor
 */
declare function PROT_ListManager(): void;
declare class PROT_ListManager {
    tablesData: {};
    needsUpdate_: {};
    updateCheckers_: {};
    requestBackoffs_: {};
    registered: boolean;
    dbService_: any;
    idleService_: any;
    /**
     * Register a new table table
     * @param tableName - the name of the table
     * @param updateUrl - the url for updating the table
     * @param gethashUrl - the url for fetching hash completions
     * @returns true if the table could be created; false otherwise
     */
    registerTable(tableName: any, providerName: any, updateUrl: any, gethashUrl: any): boolean;
    /**
     * Unregister a table table from list
     */
    unregisterTable(tableName: any): void;
    /**
     * Delete all of our data tables which seem to leak otherwise.
     * Remove observers
     */
    shutdown_(): void;
    /**
     * xpcom-shutdown callback
     */
    observe(aSubject: any, aTopic: any, aData: any): void;
    getGethashUrl(tableName: any): any;
    getUpdateUrl(tableName: any): any;
    /**
     * Enable updates for a single table.
     */
    enableUpdate(tableName: any): void;
    isRegistered(): boolean;
    /**
     * Returns true if any table associated with the updateUrl requires updates.
     * @param updateUrl - the updateUrl
     */
    updatesNeeded_(updateUrl: any): boolean;
    /**
     * Disable updates for all tables.
     */
    disableAllUpdates(): void;
    /**
     * Disables updates for a single table. Avoid this internal function
     * and use disableAllUpdates() instead.
     */
    disableUpdate(tableName: any): void;
    /**
     * Determine if we have some tables that need updating.
     */
    requireTableUpdates(): boolean;
    /**
     *  Set timer to check update after delay
     */
    setUpdateCheckTimer(updateUrl: any, delay: any): void;
    /**
     * Acts as a nsIUrlClassifierCallback for getTables.
     */
    kickoffUpdate_(): void;
    startingUpdate_: boolean;
    stopUpdateCheckers(): void;
    /**
     * Determine if we have any tables that require updating.  Different
     * Wardens may call us with new tables that need to be updated.
     */
    maybeToggleUpdateChecking(): void;
    /**
     * Force updates for the given tables. This API may trigger more than one update
     * if the table lists provided belong to multiple updateurl (multiple provider).
     * Return false when any update is fail due to back-off algorithm.
     */
    forceUpdates(tables: any): boolean;
    /**
     * Updates our internal tables from the update server
     *
     * @param updateUrl: request updates for tables associated with that url, or
     * for all tables if the url is empty.
     * @param manual: the update is triggered manually
     */
    checkForUpdates(updateUrl: any, manual?: boolean): boolean;
    /**
     * Method that fires the actual HTTP update request.
     * First we reset any tables that have disappeared.
     * @param tableData List of table data already in the database, in the form
     *        tablename;<chunk ranges>\n
     */
    makeUpdateRequest_(updateUrl: any, tableData: any): void;
    makeUpdateRequestForEntry_(updateUrl: any, tableList: any, requestPayload: any, isPostRequest: any): void;
    /**
     * Callback function if the update request succeeded.
     * @param waitForUpdate String The number of seconds that the client should
     *        wait before requesting again.
     */
    updateSuccess_(tableList: any, updateUrl: any, waitForUpdateSec: any): void;
    /**
     * Callback function if the update request succeeded.
     * @param result String The error code of the failure
     */
    updateError_(table: any, updateUrl: any, result: any): void;
    /**
     * Callback function when the download failed
     * @param status String http status or an empty string if connection refused.
     */
    downloadError_(table: any, updateUrl: any, status: any): void;
    /**
     * Get back-off time for the given provider.
     * Return 0 if we are not in back-off mode.
     */
    getBackOffTime(provider: any): any;
    QueryInterface: any;
}
export {};
