/**
 * @return {String} This returns a string with the gzip compressed data.
 */
export function gzipCompressString(string: any): string;
export function sendStandalonePing(endpoint: any, payload: any, extraHeaders?: {}): Promise<any>;
export const PING_SUBMIT_TIMEOUT_MS: number;
export namespace Policy {
    function now(): Date;
    function midnightPingFuzzingDelay(): number;
    function pingSubmissionTimeout(): number;
    function setSchedulerTickTimeout(callback: any, delayMs: any): any;
    function clearSchedulerTickTimeout(id: any): any;
    function gzipCompressString(data: any): string;
}
export namespace TelemetrySend {
    const pendingPingCount: any;
    /**
     * Partial setup that runs immediately at startup. This currently triggers
     * the crash report annotations.
     */
    function earlyInit(): void;
    /**
     * Initializes this module.
     *
     * @param {Boolean} testing Whether this is run in a test. This changes some behavior
     * to enable proper testing.
     * @return {Promise} Resolved when setup is finished.
     */
    function setup(testing?: boolean): Promise<any>;
    /**
     * Shutdown this module - this will cancel any pending ping tasks and wait for
     * outstanding async activity like network and disk I/O.
     *
     * @return {Promise} Promise that is resolved when shutdown is finished.
     */
    function shutdown(): Promise<any>;
    /**
     * Flushes all pings to pingsender that were both
     *   1. submitted after profile-change-net-teardown, and
     *   2. wanting to be sent using pingsender.
     */
    function flushPingSenderBatch(): void;
    /**
     * Submit a ping for sending. This will:
     * - send the ping right away if possible or
     * - save the ping to disk and send it at the next opportunity
     *
     * @param {Object} ping The ping data to send, must be serializable to JSON.
     * @param {Object} [aOptions] Options object.
     * @param {Boolean} [options.usePingSender=false] if true, send the ping using the PingSender.
     * @return {Promise} Test-only - a promise that is resolved when the ping is sent or saved.
     */
    function submitPing(ping: any, options?: {}): Promise<any>;
    /**
     * Check if sending is disabled. If Telemetry is not allowed to upload,
     * pings are not sent to the server.
     * If trying to send a deletion-request ping, don't block it.
     *
     * @param {Object} [ping=null] A ping to be checked.
     * @return {Boolean} True if pings can be send to the servers, false otherwise.
     */
    function sendingEnabled(ping?: any): boolean;
    /**
     * Notify that we can start submitting data to the servers.
     */
    function notifyCanUpload(): any;
    /**
     * Only used in tests. Used to reset the module data to emulate a restart.
     */
    function reset(): Promise<void>;
    /**
     * Only used in tests.
     */
    function setServer(server: any): void;
    /**
     * Clear out unpersisted, yet to be sent, pings and cancel outgoing ping requests.
     */
    function clearCurrentPings(): Promise<void>;
    /**
     * Only used in tests to wait on outgoing pending pings.
     */
    function testWaitOnOutgoingPings(): any;
    /**
     * Only used in tests to set whether it is too late in shutdown to send pings.
     */
    function testTooLateToSend(tooLate: any): void;
    /**
     * Test-only - this allows overriding behavior to enable ping sending in debug builds.
     */
    function setTestModeEnabled(testing: any): void;
    /**
     * This returns state info for this module for AsyncShutdown timeout diagnostics.
     */
    function getShutdownState(): {
        sendingEnabled: boolean;
        pendingPingRequestCount: number;
        pendingPingActivityCount: number;
        unpersistedPingCount: number;
        persistedPingCount: any;
        schedulerState: {
            shutdown: boolean;
            hasSendTask: boolean;
            sendsFailed: boolean;
            sendTaskState: any;
            backoffDelay: number;
        };
    };
    /**
     * Send a ping using the ping sender.
     * This method will not wait for the ping to be sent, instead it will return
     * as soon as the pingsender program has been launched.
     *
     * This method is currently exposed here only for testing purposes as it's
     * only used internally.
     *
     * @param {Array}<Object> pings An array of objects holding url / path pairs
     *        for each ping to be sent. The URL represent the telemetry server the
     *        ping will be sent to and the path points to the ping data. The ping
     *        data files will be deleted if the pings have been submitted
     *        successfully.
     * @param {callback} observer A function called with parameters
     *        (subject, topic, data) and a topic of "process-finished" or
     *        "process-failed" after pingsender completion.
     *
     * @throws NS_ERROR_FAILURE if we couldn't find or run the pingsender
     *         executable.
     * @throws NS_ERROR_NOT_IMPLEMENTED on Android as the pingsender is not
     *         available.
     */
    function testRunPingSender(pings: any, observer: callback): void;
}
export namespace SendScheduler {
    export let _sendsFailed: boolean;
    export { SEND_TICK_DELAY as _backoffDelay };
    export let _shutdown: boolean;
    export let _sendTask: any;
    export let _sendTaskState: any;
    export let _logger: any;
    export const _log: any;
    export function shutdown(): Promise<any>;
    export function start(): void;
    /**
     * Only used for testing, resets the state to emulate a restart.
     */
    export function reset(): Promise<void>;
    /**
     * Notify the scheduler of a failure in sending out pings that warrants retrying.
     * This will trigger the exponential backoff timer behavior on the next tick.
     */
    export function notifySendsFailed(): void;
    /**
     * Returns whether ping submissions are currently throttled.
     */
    export function isThrottled(): boolean;
    export function waitOnSendTask(): Promise<any>;
    export function triggerSendingPings(immediately: any): any;
    export function _doSendTask(): Promise<void>;
    /**
     * This helper calculates the next time that we can send pings at.
     * Currently this mostly redistributes ping sends from midnight until one hour after
     * to avoid submission spikes around local midnight for daily pings.
     *
     * @param now Date The current time.
     * @return Number The next time (ms from UNIX epoch) when we can send pings.
     */
    export function _getNextPingSendTime(now: any): any;
    export function getShutdownState(): {
        shutdown: boolean;
        hasSendTask: boolean;
        sendsFailed: boolean;
        sendTaskState: any;
        backoffDelay: number;
    };
}
export namespace TelemetrySendImpl {
    export let _sendingEnabled: boolean;
    let _shutdown_1: boolean;
    export { _shutdown_1 as _shutdown };
    let _logger_1: any;
    export { _logger_1 as _logger };
    export let _pendingPingRequests: Map<any, any>;
    export let _pendingPingActivity: Set<any>;
    export let _testMode: boolean;
    export let _currentPings: Map<any, any>;
    export let _isOSShutdown: boolean;
    export let _tooLateToSend: boolean;
    export let _pingSenderBatch: any[];
    export let OBSERVER_TOPICS: string[];
    export let OBSERVED_PREFERENCES: any[];
    export const _overrideOfficialCheck: any;
    const _log_1: any;
    export { _log_1 as _log };
    export const pendingPingRequests: Map<any, any>;
    const pendingPingCount_1: any;
    export { pendingPingCount_1 as pendingPingCount };
    export function setTestModeEnabled(testing: any): void;
    export function earlyInit(): void;
    export let QueryInterface: any;
    export function setup(testing: any): Promise<void>;
    /**
     * Triggers the crash report annotations depending on the current
     * configuration. This communicates to the crash reporter if it can send a
     * crash ping or not. This method can be called safely before setup() has
     * been called.
     */
    export function _annotateCrashReport(): void;
    /**
     * Discard old pings from the pending pings and detect overdue ones.
     * @return {Boolean} True if we have overdue pings, false otherwise.
     */
    export function _checkPendingPings(): boolean;
    export function shutdown(): Promise<void>;
    export function flushPingSenderBatch(): void;
    export function reset(): Promise<void>;
    /**
     * Notify that we can start submitting data to the servers.
     */
    export function notifyCanUpload(): any;
    export function observe(subject: any, topic: any, data: any): void;
    /**
     * Spawn the PingSender process that sends a ping. This function does
     * not return an error or throw, it only logs an error.
     *
     * Even if the function doesn't fail, it doesn't mean that the ping was
     * successfully sent, as we have no control over the spawned process. If it,
     * succeeds, the ping is eventually removed from the disk to prevent duplicated
     * submissions.
     *
     * @param {String} pingId The id of the ping to send.
     * @param {String} submissionURL The complete Telemetry-compliant URL for the ping.
     */
    export function _sendWithPingSender(pingId: string, submissionURL: string): void;
    export function submitPing(ping: any, options: any): Promise<any>;
    /**
     * Only used in tests.
     */
    export function setServer(server: any): void;
    /**
     * Clear out unpersisted, yet to be sent, pings and cancel outgoing ping requests.
     */
    export function clearCurrentPings(): Promise<void>;
    export function _cancelOutgoingRequests(): void;
    export function sendPings(currentPings: any, persistedPingIds: any): Promise<void[]>;
    /**
     * Send the persisted pings to the server.
     *
     * @param {Array<string>} List of ping ids that should be sent.
     *
     * @return Promise A promise that is resolved when all pings finished sending or failed.
     */
    export function _sendPersistedPings(pingIds: any): Promise<void>;
    export function _onPingRequestFinished(success: any, startTime: any, id: any, isPersisted: any): any;
    export function _buildSubmissionURL(ping: any): string;
    export function _getSubmissionPath(ping: any): string;
    export function _doPingRequest(ping: any, id: any, url: any, options: any, errorHandler: any, onloadHandler: any): {
        promise: any;
        payloadStream?: undefined;
    } | {
        payloadStream: any;
        promise?: undefined;
    };
    export function _doPing(ping: any, id: any, isPersisted: any): any;
    export const canSendNow: boolean;
    /**
     * Check if sending is disabled. If Telemetry is not allowed to upload,
     * pings are not sent to the server.
     * If trying to send a "deletion-request" ping, don't block it.
     * If unified telemetry is off, don't send pings if Telemetry is disabled.
     *
     * @param {Object} [ping=null] A ping to be checked.
     * @return {Boolean} True if pings can be send to the servers, false otherwise.
     */
    export function sendingEnabled(ping?: any): boolean;
    /**
     * Track any pending ping send and save tasks through the promise passed here.
     * This is needed to block shutdown on any outstanding ping activity.
     */
    export function _trackPendingPingTask(promise: any): void;
    /**
     * Return a promise that allows to wait on pending pings.
     * @return {Object<Promise>} A promise resolved when all the pending pings promises
     *         are resolved.
     */
    export function promisePendingPingActivity(): any;
    export function _persistCurrentPings(): Promise<void>;
    /**
     * Returns the current pending, not yet persisted, pings, newest first.
     */
    export function getUnpersistedPings(): any[];
    export function getShutdownState(): {
        sendingEnabled: boolean;
        pendingPingRequestCount: number;
        pendingPingActivityCount: number;
        unpersistedPingCount: number;
        persistedPingCount: any;
        schedulerState: {
            shutdown: boolean;
            hasSendTask: boolean;
            sendsFailed: boolean;
            sendTaskState: any;
            backoffDelay: number;
        };
    };
    export function runPingSender(pings: any, observer: any): void;
}
declare const SEND_TICK_DELAY: number;
export {};
