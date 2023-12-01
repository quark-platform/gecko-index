export function PlacesDBUtilsIdleMaintenance(): void;
export class PlacesDBUtilsIdleMaintenance {
    observe(subject: any, topic: any, data: any): void;
    classID: unknown;
    QueryInterface: MozQueryInterface;
}
export namespace PlacesDBUtils {
    let _isShuttingDown: boolean;
    let _clearTaskQueue: boolean;
    function clearPendingTasks(): void;
    /**
     * Executes integrity check and common maintenance tasks.
     *
     * @return a Map[taskName(String) -> Object]. The Object has the following properties:
     *         - succeeded: boolean
     *         - logs: an array of strings containing the messages logged by the task.
     */
    function maintenanceOnIdle(): Promise<any>;
    /**
     * Executes integrity check, common and advanced maintenance tasks (like
     * expiration and vacuum).  Will also collect statistics on the database.
     *
     * Note: although this function isn't actually async, we keep it async to
     * allow us to maintain a simple, consistent API for the tasks within this object.
     *
     * @return {Promise}
     *        A promise that resolves with a Map[taskName(String) -> Object].
     *        The Object has the following properties:
     *         - succeeded: boolean
     *         - logs: an array of strings containing the messages logged by the task.
     */
    function checkAndFixDatabase(): Promise<any>;
    /**
     * Forces a full refresh of Places views.
     *
     * Note: although this function isn't actually async, we keep it async to
     * allow us to maintain a simple, consistent API for the tasks within this object.
     *
     * @returns {Array} An empty array.
     */
    function _refreshUI(): any[];
    /**
     * Checks integrity and tries to fix the database through a reindex.
     *
     * @return {Promise} resolves if database is sane or is made sane.
     * @resolves to an array of logs for this task.
     * @rejects if we're unable to fix corruption or unable to check status.
     */
    function checkIntegrity(): Promise<any>;
    /**
     * Checks data coherence and tries to fix most common errors.
     *
     * @return {Promise} resolves when coherence is checked.
     * @resolves to an array of logs for this task.
     * @rejects if database is not coherent.
     */
    function checkCoherence(): Promise<any>;
    /**
     * Runs incremental vacuum on databases supporting it.
     *
     * @return {Promise} resolves when done.
     * @resolves to an array of logs for this task.
     * @rejects if we were unable to vacuum.
     */
    function incrementalVacuum(): Promise<any>;
    /**
     * Expire orphan previews that don't have a Places entry anymore.
     *
     * @return {Promise} resolves when done.
     * @resolves to an array of logs for this task.
     */
    function deleteOrphanPreviews(): Promise<any>;
    function _getCoherenceStatements(): Promise<({
        query: string;
        params?: undefined;
    } | {
        query: string;
        params: {
            tags_folder: any;
            bookmark_type: any;
            rootGuid: any;
            menuGuid: any;
            toolbarGuid: any;
            unfiledGuid: any;
            tagsGuid: any;
            dateRemoved?: undefined;
            syncStatus?: undefined;
            folder_type?: undefined;
            separator_type?: undefined;
            empty_title?: undefined;
        };
    } | {
        query: string;
        params: {
            tags_folder: any;
            rootGuid: any;
            menuGuid: any;
            toolbarGuid: any;
            unfiledGuid: any;
            tagsGuid: any;
            bookmark_type?: undefined;
            dateRemoved?: undefined;
            syncStatus?: undefined;
            folder_type?: undefined;
            separator_type?: undefined;
            empty_title?: undefined;
        };
    } | {
        query: string;
        params: {
            rootGuid: any;
            menuGuid: any;
            toolbarGuid: any;
            unfiledGuid: any;
            tagsGuid: any;
            tags_folder?: undefined;
            bookmark_type?: undefined;
            dateRemoved?: undefined;
            syncStatus?: undefined;
            folder_type?: undefined;
            separator_type?: undefined;
            empty_title?: undefined;
        };
    } | {
        query: string;
        params: {
            dateRemoved: any;
            syncStatus: any;
            bookmark_type: any;
            folder_type: any;
            separator_type: any;
            tags_folder?: undefined;
            rootGuid?: undefined;
            menuGuid?: undefined;
            toolbarGuid?: undefined;
            unfiledGuid?: undefined;
            tagsGuid?: undefined;
            empty_title?: undefined;
        };
    } | {
        query: string;
        params: {
            bookmark_type: any;
            folder_type: any;
            separator_type: any;
            rootGuid: any;
            menuGuid: any;
            toolbarGuid: any;
            unfiledGuid: any;
            tagsGuid: any;
            tags_folder?: undefined;
            dateRemoved?: undefined;
            syncStatus?: undefined;
            empty_title?: undefined;
        };
    } | {
        query: string;
        params: {
            bookmark_type: any;
            folder_type: any;
            rootGuid: any;
            menuGuid: any;
            toolbarGuid: any;
            unfiledGuid: any;
            tagsGuid: any;
            tags_folder?: undefined;
            dateRemoved?: undefined;
            syncStatus?: undefined;
            separator_type?: undefined;
            empty_title?: undefined;
        };
    } | {
        query: string;
        params: {
            bookmark_type: any;
            separator_type: any;
            rootGuid: any;
            menuGuid: any;
            toolbarGuid: any;
            unfiledGuid: any;
            tagsGuid: any;
            tags_folder?: undefined;
            dateRemoved?: undefined;
            syncStatus?: undefined;
            folder_type?: undefined;
            empty_title?: undefined;
        };
    } | {
        query: string;
        params: {
            bookmark_type: any;
            rootGuid: any;
            menuGuid: any;
            toolbarGuid: any;
            unfiledGuid: any;
            tagsGuid: any;
            tags_folder?: undefined;
            dateRemoved?: undefined;
            syncStatus?: undefined;
            folder_type?: undefined;
            separator_type?: undefined;
            empty_title?: undefined;
        };
    } | {
        query: string;
        params: {
            folder_type: any;
            tags_folder: any;
            bookmark_type?: undefined;
            rootGuid?: undefined;
            menuGuid?: undefined;
            toolbarGuid?: undefined;
            unfiledGuid?: undefined;
            tagsGuid?: undefined;
            dateRemoved?: undefined;
            syncStatus?: undefined;
            separator_type?: undefined;
            empty_title?: undefined;
        };
    } | {
        query: string;
        params: {
            empty_title: string;
            folder_type: any;
            tags_folder: any;
            bookmark_type?: undefined;
            rootGuid?: undefined;
            menuGuid?: undefined;
            toolbarGuid?: undefined;
            unfiledGuid?: undefined;
            tagsGuid?: undefined;
            dateRemoved?: undefined;
            syncStatus?: undefined;
            separator_type?: undefined;
        };
    } | {
        query: string;
        params: {
            dateRemoved: any;
            syncStatus: any;
            tags_folder?: undefined;
            bookmark_type?: undefined;
            rootGuid?: undefined;
            menuGuid?: undefined;
            toolbarGuid?: undefined;
            unfiledGuid?: undefined;
            tagsGuid?: undefined;
            folder_type?: undefined;
            separator_type?: undefined;
            empty_title?: undefined;
        };
    } | {
        query: string;
        params: {
            syncStatus: any;
            tags_folder?: undefined;
            bookmark_type?: undefined;
            rootGuid?: undefined;
            menuGuid?: undefined;
            toolbarGuid?: undefined;
            unfiledGuid?: undefined;
            tagsGuid?: undefined;
            dateRemoved?: undefined;
            folder_type?: undefined;
            separator_type?: undefined;
            empty_title?: undefined;
        };
    })[]>;
    /**
     * Tries to vacuum the database.
     *
     * Note: although this function isn't actually async, we keep it async to
     * allow us to maintain a simple, consistent API for the tasks within this object.
     *
     * @return {Promise} resolves when database is vacuumed.
     * @resolves to an array of logs for this task.
     * @rejects if we are unable to vacuum database.
     */
    function vacuum(): Promise<any>;
    /**
     * Forces a full expiration on the database.
     *
     * Note: although this function isn't actually async, we keep it async to
     * allow us to maintain a simple, consistent API for the tasks within this object.
     *
     * @return {Promise} resolves when the database in cleaned up.
     * @resolves to an array of logs for this task.
     */
    function expire(): Promise<any>;
    /**
     * Collects statistical data on the database.
     *
     * @return {Promise} resolves when statistics are collected.
     * @resolves to an array of logs for this task.
     * @rejects if we are unable to collect stats for some reason.
     */
    function stats(): Promise<any>;
    /**
     * Collects telemetry data and reports it to Telemetry.
     *
     * Note: although this function isn't actually async, we keep it async to
     * allow us to maintain a simple, consistent API for the tasks within this object.
     *
     */
    function telemetry(): Promise<void>;
    /**
     * Remove old and useless places.sqlite.corrupt files.
     *
     * @resolves to an array of logs for this task.
     *
     */
    function removeOldCorruptDBs(): Promise<any[]>;
    /**
     * Gets detailed statistics about database entities like tables and indices.
     * @returns {Map} a Map by table name, containing an object with the following
     *          properties:
     *            - efficiencyPerc: percentage filling of pages, an high
     *              efficiency means most pages are filled up almost completely.
     *              This value is not particularly useful with a low number of
     *              pages.
     *            - sizeBytes: size of the entity in bytes
     *            - pages: number of pages of the entity
     *            - sizePerc: percentage of the total database size
     *            - sequentialityPerc: percentage of sequential pages, this is
     *              a global value of the database, thus it's the same for every
     *              entity, and it can be used to evaluate fragmentation and the
     *              need for vacuum.
     */
    function getEntitiesStats(): Map<any, any>;
    /**
     * Gets detailed statistics about database entities and their respective row
     * counts.
     * @returns {Array} An array that augments each object returned by
     *          {@link getEntitiesStats} with the following extra properties:
     *            - entity: name of the entity
     *            - count: row count of the entity
     */
    function getEntitiesStatsAndCounts(): any[];
    /**
     * Runs a list of tasks, returning a Map when done.
     *
     * @param tasks
     *        Array of tasks to be executed, in form of pointers to methods in
     *        this module.
     * @return {Promise}
     *        A promise that resolves with a Map[taskName(String) -> Object].
     *        The Object has the following properties:
     *         - succeeded: boolean
     *         - logs: an array of strings containing the messages logged by the task
     */
    function runTasks(tasks: any): Promise<any>;
}
