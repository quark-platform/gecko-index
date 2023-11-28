export namespace Policy {
    function now(): Date;
    function getArchiveQuota(): number;
    function getPendingPingsQuota(): number;
    function getUninstallPingPath(id: string): any;
}
export namespace TelemetryStorage {
    const pingDirectoryPath: any;
    const MAXIMUM_PING_SIZE: number;
    /**
     * Shutdown & block on any outstanding async activity in this module.
     *
     * @return {Promise} Promise that is resolved when shutdown is complete.
     */
    function shutdown(): Promise<any>;
    /**
     * Save an archived ping to disk.
     *
     * @param {object} ping The ping data to archive.
     * @return {promise} Promise that is resolved when the ping is successfully archived.
     */
    function saveArchivedPing(ping: any): Promise<any>;
    /**
     * Load an archived ping from disk.
     *
     * @param {string} id The pings id.
     * @return {promise<object>} Promise that is resolved with the ping data.
     */
    function loadArchivedPing(id: string): promise<any>;
    /**
     * Get a list of info on the archived pings.
     * This will scan the archive directory and grab basic data about the existing
     * pings out of their filename.
     *
     * @return {promise<sequence<object>>}
     */
    function loadArchivedPingList(): promise<sequence<any>>;
    /**
     * Clean the pings archive by removing old pings.
     * This will scan the archive directory.
     *
     * @return {Promise} Resolved when the cleanup task completes.
     */
    function runCleanPingArchiveTask(): Promise<any>;
    /**
     * Run the task to enforce the pending pings quota.
     *
     * @return {Promise} Resolved when the cleanup task completes.
     */
    function runEnforcePendingPingsQuotaTask(): Promise<any>;
    /**
     * Run the task to remove all the pending pings
     *
     * @return {Promise} Resolved when the pings are removed.
     */
    function runRemovePendingPingsTask(): Promise<any>;
    /**
     * Remove all pings that are stored in the userApplicationDataDir
     * under the "Pending Pings" sub-directory.
     */
    function removeAppDataPings(): Promise<void>;
    /**
     * Reset the storage state in tests.
     */
    function reset(): void;
    /**
     * Test method that allows waiting on the archive clean task to finish.
     */
    function testCleanupTaskPromise(): any;
    /**
     * Test method that allows waiting on the pending pings quota task to finish.
     */
    function testPendingQuotaTaskPromise(): any;
    /**
     * Save a pending - outgoing - ping to disk and track it.
     *
     * @param {Object} ping The ping data.
     * @return {Promise} Resolved when the ping was saved.
     */
    function savePendingPing(ping: any): Promise<any>;
    /**
     * Saves session data to disk.
     * @param {Object}  sessionData The session data.
     * @return {Promise} Resolved when the data was saved.
     */
    function saveSessionData(sessionData: any): Promise<any>;
    /**
     * Loads session data from a session data file.
     * @return {Promise<object>} Resolved with the session data in object form.
     */
    function loadSessionData(): Promise<any>;
    /**
     * Load a pending ping from disk by id.
     *
     * @param {String} id The pings id.
     * @return {Promise} Resolved with the loaded ping data.
     */
    function loadPendingPing(id: string): Promise<any>;
    /**
     * Remove a pending ping from disk by id.
     *
     * @param {String} id The pings id.
     * @return {Promise} Resolved when the ping was removed.
     */
    function removePendingPing(id: string): Promise<any>;
    /**
     * Returns a list of the currently pending pings in the format:
     * {
     *   id: <string>, // The pings UUID.
     *   lastModified: <number>, // Timestamp of the pings last modification.
     * }
     * This populates the list by scanning the disk.
     *
     * @return {Promise<sequence>} Resolved with the ping list.
     */
    function loadPendingPingList(): Promise<sequence>;
    /**
     * Returns a list of the currently pending pings in the format:
     * {
     *   id: <string>, // The pings UUID.
     *   lastModified: <number>, // Timestamp of the pings last modification.
     * }
     * This does not scan pending pings on disk.
     *
     * @return {sequence} The current pending ping list.
     */
    function getPendingPingList(): sequence;
    /**
     * Save an aborted-session ping to disk. This goes to a special location so
     * it is not picked up as a pending ping.
     *
     * @param {object} ping The ping data to save.
     * @return {promise} Promise that is resolved when the ping is successfully saved.
     */
    function saveAbortedSessionPing(ping: any): Promise<any>;
    /**
     * Load the aborted-session ping from disk if present.
     *
     * @return {promise<object>} Promise that is resolved with the ping data if found.
     *                           Otherwise returns null.
     */
    function loadAbortedSessionPing(): promise<any>;
    /**
     * Remove the aborted-session ping if present.
     *
     * @return {promise} Promise that is resolved once the ping is removed.
     */
    function removeAbortedSessionPing(): Promise<any>;
    /**
     * Save an uninstall ping to disk, removing any old ones from this
     * installation first.
     * This is stored independently from other pings, and only read by
     * the Windows uninstaller.
     *
     * WINDOWS ONLY, does nothing and resolves immediately on other platforms.
     *
     * @return {promise} Promise that is resolved when the ping has been saved.
     */
    function saveUninstallPing(ping: any): Promise<any>;
    /**
     * Remove all uninstall pings from this installation.
     *
     * WINDOWS ONLY, does nothing and resolves immediately on other platforms.
     *
     * @return {promise} Promise that is resolved when the pings have been removed.
     */
    function removeUninstallPings(): Promise<any>;
    /**
     * Save a single ping to a file.
     *
     * @param {object} ping The content of the ping to save.
     * @param {string} file The destination file.
     * @param {bool} overwrite If |true|, the file will be overwritten if it exists,
     * if |false| the file will not be overwritten and no error will be reported if
     * the file exists.
     * @returns {promise}
     */
    function savePingToFile(ping: any, file: string, overwrite: bool): Promise<any>;
    /**
     * Save a ping to its file.
     *
     * @param {object} ping The content of the ping to save.
     * @param {bool} overwrite If |true|, the file will be overwritten
     * if it exists.
     * @returns {promise}
     */
    function savePing(ping: any, overwrite: bool): Promise<any>;
    /**
     * Add a ping to the saved pings directory so that it gets saved
     * and sent along with other pings.
     *
     * @param {Object} pingData The ping object.
     * @return {Promise} A promise resolved when the ping is saved to the pings directory.
     */
    function addPendingPing(pingData: any): Promise<any>;
    /**
     * Remove the file for a ping
     *
     * @param {object} ping The ping.
     * @returns {promise}
     */
    function cleanupPingFile(ping: any): Promise<any>;
    /**
     * Loads a ping file.
     * @param {String} aFilePath The path of the ping file.
     * @return {Promise<Object>} A promise resolved with the ping content or rejected if the
     *                           ping contains invalid data.
     */
    function loadPingFile(aFilePath: string): Promise<any>;
    /**
     * Remove FHR database files. This is temporary and will be dropped in
     * the future.
     * @return {Promise} Resolved when the database files are deleted.
     */
    function removeFHRDatabase(): Promise<any>;
    /**
     * Only used in tests, builds an archived ping path from the ping metadata.
     * @param {String} aPingId The ping id.
     * @param {Object} aDate The ping creation date.
     * @param {String} aType The ping type.
     * @return {String} The full path to the archived ping.
     */
    function _testGetArchivedPingPath(aPingId: string, aDate: any, aType: string): string;
    /**
     * Only used in tests, this helper extracts ping metadata from a given filename.
     *
     * @param fileName {String} The filename.
     * @return {Object} Null if the filename didn't match the expected form.
     *                  Otherwise an object with the extracted data in the form:
     *                  { timestamp: <number>,
     *                    id: <string>,
     *                    type: <string> }
     */
    function _testGetArchivedPingDataFromFileName(aFileName: any): any;
    /**
     * Only used in tests, this helper allows cleaning up the pending ping storage.
     */
    function testClearPendingPings(): Promise<any>;
}
