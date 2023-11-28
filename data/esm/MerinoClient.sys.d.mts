/**
 * Client class for querying the Merino server. Each instance maintains its own
 * session state including a session ID and sequence number that is included in
 * its requests to Merino.
 */
export class MerinoClient {
    /**
     * @returns {object}
     *   The names of URL search params.
     */
    static get SEARCH_PARAMS(): any;
    /**
     * @param {string} name
     *   An optional name for the client. It will be included in log messages.
     */
    constructor(name?: string);
    /**
     * @returns {string}
     *   The name of the client.
     */
    get name(): string;
    set sessionTimeoutMs(value: number);
    /**
     * @returns {number}
     *   If `resetSession()` is not called within this timeout period after a
     *   session starts, the session will time out and the next fetch will begin a
     *   new session.
     */
    get sessionTimeoutMs(): number;
    /**
     * @returns {number}
     *   The current session ID. Null when there is no active session.
     */
    get sessionID(): number;
    /**
     * @returns {number}
     *   The current sequence number in the current session. Zero when there is no
     *   active session.
     */
    get sequenceNumber(): number;
    /**
     * @returns {string}
     *   A string that indicates the status of the last fetch. The values are the
     *   same as the labels used in the `FX_URLBAR_MERINO_RESPONSE` histogram:
     *   success, timeout, network_error, http_error
     */
    get lastFetchStatus(): string;
    /**
     * Fetches Merino suggestions.
     *
     * @param {object} options
     *   Options object
     * @param {string} options.query
     *   The search string.
     * @param {Array} options.providers
     *   Array of provider names to request from Merino. If this is given it will
     *   override the `merinoProviders` Nimbus variable and its fallback pref
     *   `browser.urlbar.merino.providers`.
     * @param {number} options.timeoutMs
     *   Timeout in milliseconds. This method will return once the timeout
     *   elapses, a response is received, or an error occurs, whichever happens
     *   first.
     * @param {string} options.extraLatencyHistogram
     *   If specified, the fetch's latency will be recorded in this histogram in
     *   addition to the usual Merino latency histogram.
     * @param {string} options.extraResponseHistogram
     *   If specified, the fetch's response will be recorded in this histogram in
     *   addition to the usual Merino response histogram.
     * @returns {Array}
     *   The Merino suggestions or null if there's an error or unexpected
     *   response.
     */
    fetch({ query, providers, timeoutMs, extraLatencyHistogram, extraResponseHistogram, }: {
        query: string;
        providers: any[];
        timeoutMs: number;
        extraLatencyHistogram: string;
        extraResponseHistogram: string;
    }): any[];
    /**
     * Resets the Merino session ID and related state.
     */
    resetSession(): void;
    /**
     * Cancels the timeout timer.
     */
    cancelTimeoutTimer(): void;
    /**
     * Returns a promise that's resolved when the next response is received or a
     * network error occurs.
     *
     * @returns {Promise}
     *   The promise is resolved with the `Response` object or undefined if a
     *   network error occurred.
     */
    waitForNextResponse(): Promise<any>;
    /**
     * Returns a promise that's resolved when the session is next reset, including
     * on session timeout.
     *
     * @returns {Promise}
     */
    waitForNextSessionReset(): Promise<any>;
    get _test_sessionTimer(): any;
    get _test_timeoutTimer(): any;
    get _test_fetchController(): any;
    get _test_latencyStopwatchInstance(): any;
    #private;
}
