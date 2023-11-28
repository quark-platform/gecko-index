export namespace Policy {
    function setSchedulerTickTimeout(callback: any, delayMs: any): any;
    function clearSchedulerTickTimeout(id: any): any;
}
export namespace TelemetryHealthPing {
    let Reason: Readonly<{
        IMMEDIATE: "immediate";
        DELAYED: "delayed";
        SHUT_DOWN: "shutdown";
    }>;
    let FailureType: Readonly<{
        DISCARDED_FOR_SIZE: "pingDiscardedForSize";
        SEND_FAILURE: "sendFailure";
    }>;
    let OsInfo: Readonly<{
        name: any;
        version: any;
    }>;
    let HEALTH_PING_TYPE: string;
    let _logger: any;
    let _lastSendTime: number;
    let _failures: {};
    let _timeoutId: any;
    /**
     * Record a failure to send a ping out.
     * @param {String} failureType The type of failure (e.g. "timeout", ...).
     * @returns {Promise} Test-only, resolved when the ping is stored or sent.
     */
    function recordSendFailure(failureType: string): Promise<any>;
    /**
     * Record that a ping was discarded and its type.
     * @param {String} pingType The type of discarded ping (e.g. "main", ...).
     * @returns {Promise} Test-only, resolved when the ping is stored or sent.
     */
    function recordDiscardedPing(pingType: string): Promise<any>;
    /**
     * Assemble payload.
     * @param {String} reason A string indicating the triggering reason (e.g. "immediate", "delayed", "shutdown").
     * @returns {Object} The assembled payload.
     */
    function _assemblePayload(reason: string): any;
    /**
     * Sort input dictionary descending by value.
     * @param {Object} failures A dictionary of failures subtype and count.
     * @returns {Object} Sorted failures by value.
     */
    function _getTopDiscardFailures(failures: any): any;
    /**
     * Assemble the failure information and submit it.
     * @param {String} reason A string indicating the triggering reason (e.g. "immediate", "delayed", "shutdown").
     * @returns {Promise} Test-only promise that resolves when the ping was stored or sent (if any).
     */
    function _submitPing(reason: string): Promise<any>;
    /**
     * Accumulate failure information and trigger a ping immediately or on timeout.
     * @param {String} failureType The type of failure (e.g. "timeout", ...).
     * @param {String} failureSubType The subtype of failure (e.g. ping type, ...).
     * @returns {Promise} Test-only, resolved when the ping is stored or sent.
     */
    function _addToFailure(failureType: string, failureSubType: string): Promise<any>;
    /**
     * @returns {boolean} Check the availability of recorded failures data.
     */
    function _hasDataToSend(): boolean;
    /**
     * Clear recorded failures data.
     */
    function _clearData(): void;
    /**
     * Clear and reset timeout.
     */
    function _resetTimeout(): void;
    /**
     * Submit latest ping on shutdown.
     * @returns {Promise} Test-only, resolved when the ping is stored or sent.
     */
    function shutdown(): Promise<any>;
    /**
     * Test-only, restore to initial state.
     */
    function testReset(): void;
    const _log: any;
}
