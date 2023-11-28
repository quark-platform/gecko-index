export namespace Policy {
    let _clientIDHash: any;
    function getClientID(): any;
    /**
     * Compute an integer in the range [0, 100) using a hash of the
     * client ID.
     *
     * This is useful for sampling clients when trying to report
     * telemetry only for a sample of clients.
     */
    function getClientIDHash(): Promise<any>;
    function _doComputeClientIDHash(): Promise<number>;
    function getChannel(): any;
}
/**
 * A Telemetry helper to report uptake of remote content.
 */
export class UptakeTelemetry {
    /**
     * Supported uptake statuses:
     *
     * - `UP_TO_DATE`: Local content was already up-to-date with remote content.
     * - `SUCCESS`: Local content was updated successfully.
     * - `BACKOFF`: Remote server asked clients to backoff.
     * - `PARSE_ERROR`: Parsing server response has failed.
     * - `CONTENT_ERROR`: Server response has unexpected content.
     * - `PREF_DISABLED`: Update is disabled in user preferences.
     * - `SIGNATURE_ERROR`: Signature verification after diff-based sync has failed.
     * - `SIGNATURE_RETRY_ERROR`: Signature verification after full fetch has failed.
     * - `CONFLICT_ERROR`: Some remote changes are in conflict with local changes.
     * - `CORRUPTION_ERROR`: Error related to corrupted local data.
     * - `SYNC_ERROR`: Synchronization of remote changes has failed.
     * - `APPLY_ERROR`: Application of changes locally has failed.
     * - `SERVER_ERROR`: Server failed to respond.
     * - `CERTIFICATE_ERROR`: Server certificate verification has failed.
     * - `DOWNLOAD_ERROR`: Data could not be fully retrieved.
     * - `TIMEOUT_ERROR`: Server response has timed out.
     * - `NETWORK_ERROR`: Communication with server has failed.
     * - `NETWORK_OFFLINE_ERROR`: Network not available.
     * - `SHUTDOWN_ERROR`: Error occuring during shutdown.
     * - `UNKNOWN_ERROR`: Uncategorized error.
     * - `CLEANUP_ERROR`: Clean-up of temporary files has failed.
     * - `SYNC_BROKEN_ERROR`: Synchronization is broken.
     * - `CUSTOM_1_ERROR`: Update source specific error #1.
     * - `CUSTOM_2_ERROR`: Update source specific error #2.
     * - `CUSTOM_3_ERROR`: Update source specific error #3.
     * - `CUSTOM_4_ERROR`: Update source specific error #4.
     * - `CUSTOM_5_ERROR`: Update source specific error #5.
     *
     * @type {Object}
     */
    static get STATUS(): any;
    static get Policy(): {
        _clientIDHash: any;
        getClientID(): any;
        /**
         * Compute an integer in the range [0, 100) using a hash of the
         * client ID.
         *
         * This is useful for sampling clients when trying to report
         * telemetry only for a sample of clients.
         */
        getClientIDHash(): Promise<any>;
        _doComputeClientIDHash(): Promise<number>;
        getChannel(): any;
    };
    /**
     * Reports the uptake status for the specified source.
     *
     * @param {string} component     the component reporting the uptake (eg. "normandy").
     * @param {string} status        the uptake status (eg. "network_error")
     * @param {Object} extra         extra values to report
     * @param {string} extra.source  the update source (eg. "recipe-42").
     * @param {string} extra.trigger what triggered the polling/fetching (eg. "broadcast", "timer").
     * @param {int}    extra.age     age of pulled data in seconds
     */
    static report(component: string, status: string, extra?: {
        source: string;
        trigger: string;
        age: int;
    }): Promise<void>;
}
