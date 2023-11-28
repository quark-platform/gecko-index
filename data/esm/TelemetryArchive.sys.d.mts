export namespace TelemetryArchive {
    /**
     * Get a list of the archived pings, sorted by the creation date.
     * Note that scanning the archived pings on disk is delayed on startup,
     * use promizeInitialized() to access this after scanning.
     *
     * @return {Promise<sequence<Object>>}
     *                    A list of the archived ping info in the form:
     *                    { id: <string>,
     *                      timestampCreated: <number>,
     *                      type: <string> }
     */
    function promiseArchivedPingList(): Promise<sequence<any>>;
    /**
     * Load an archived ping from disk by id, asynchronously.
     *
     * @param id {String} The pings UUID.
     * @return {Promise<PingData>} A promise resolved with the pings data on success.
     */
    function promiseArchivedPingById(id: string): Promise<PingData>;
    /**
     * Archive a ping and persist it to disk.
     *
     * @param {object} ping The ping data to archive.
     * @return {promise} Promise that is resolved when the ping is successfully archived.
     */
    function promiseArchivePing(ping: any): Promise<any>;
}
