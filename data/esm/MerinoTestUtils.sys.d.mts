export const MerinoTestUtils: _MerinoTestUtils;
/**
 * Test utils for Merino.
 */
declare class _MerinoTestUtils {
    /**
     * Initializes the utils.
     *
     * @param {object} scope
     *   The global JS scope where tests are being run. This allows the instance
     *   to access test helpers like `Assert` that are available in the scope.
     */
    init(scope: object): void;
    /**
     * Uninitializes the utils. If they were created with a test scope that
     * defines `registerCleanupFunction()`, you don't need to call this yourself
     * because it will automatically be called as a cleanup function. Otherwise
     * you'll need to call this.
     */
    uninit(): void;
    /**
     * @returns {object}
     *   The names of URL search params.
     */
    get SEARCH_PARAMS(): any;
    /**
     * @returns {string}
     *   The weather keyword in `WEATHER_RS_DATA`. Can be used as a search string
     *   to match the weather suggestion.
     */
    get WEATHER_KEYWORD(): string;
    /**
     * @returns {object}
     *   Default remote settings data that sets up `WEATHER_KEYWORD` as the
     *   keyword for the weather suggestion.
     */
    get WEATHER_RS_DATA(): any;
    /**
     * @returns {object}
     *   A mock weather suggestion.
     */
    get WEATHER_SUGGESTION(): any;
    /**
     * @returns {MockMerinoServer}
     *   The mock Merino server. The server isn't started until its `start()`
     *   method is called.
     */
    get server(): MockMerinoServer;
    /**
     * Clears the Merino-related histograms and returns them.
     *
     * @param {object} options
     *   Options
     * @param {string} options.extraLatency
     *   The name of another latency histogram you expect to be updated.
     * @param {string} options.extraResponse
     *   The name of another response histogram you expect to be updated.
     * @returns {object}
     *   An object of histograms: `{ latency, response }`
     *   `latency` and `response` are both arrays of Histogram objects.
     */
    getAndClearHistograms({ extraLatency, extraResponse, }?: {
        extraLatency: string;
        extraResponse: string;
    }): object;
    /**
     * Asserts the Merino-related histograms are updated as expected. Clears the
     * histograms before returning.
     *
     * @param {object} options
     *   Options object
     * @param {MerinoClient} options.client
     *   The relevant `MerinoClient` instance. This is used to check the latency
     *   stopwatch.
     * @param {object} options.histograms
     *   The histograms object returned from `getAndClearHistograms()`.
     * @param {string} options.response
     *   The expected string label for the `response` histogram. If the histogram
     *   should not be recorded, pass null.
     * @param {boolean} options.latencyRecorded
     *   Whether the latency histogram is expected to contain a value.
     * @param {boolean} options.latencyStopwatchRunning
     *   Whether the latency stopwatch is expected to be running.
     */
    checkAndClearHistograms({ client, histograms, response, latencyRecorded, latencyStopwatchRunning, }: {
        client: MerinoClient;
        histograms: object;
        response: string;
        latencyRecorded: boolean;
        latencyStopwatchRunning: boolean;
    }): void;
    /**
     * Initializes the quick suggest weather feature and mock Merino server.
     */
    initWeather(): Promise<void>;
    #private;
}
/**
 * A mock Merino server with useful helper methods.
 */
declare class MockMerinoServer {
    /**
     * Until `start()` is called the server isn't started and `this.url` is null.
     *
     * @param {object} scope
     *   The global JS scope where tests are being run. This allows the instance
     *   to access test helpers like `Assert` that are available in the scope.
     */
    constructor(scope: object);
    /**
     * Uninitializes the server.
     */
    uninit(): void;
    /**
     * @returns {nsIHttpServer}
     *   The underlying HTTP server.
     */
    get httpServer(): nsIHttpServer;
    /**
     * @returns {URL}
     *   The server's endpoint URL or null if the server isn't running.
     */
    get url(): URL;
    /**
     * @returns {Array}
     *   Array of received nsIHttpRequest objects. Requests are continually
     *   collected, and the list can be cleared with `reset()`.
     */
    get requests(): any[];
    set response(value: any);
    /**
     * @returns {object}
     *   An object that describes the response that the server will return. Can be
     *   modified or set to a different object to change the response. Can be
     *   reset to the default reponse by calling `reset()`. For details see
     *   `makeDefaultResponse()` and `#handleRequest()`. In summary:
     *
     *   {
     *     status,
     *     contentType,
     *     delay,
     *     body: {
     *       request_id,
     *       suggestions,
     *     },
     *   }
     */
    get response(): any;
    /**
     * Starts the server and sets `this.url`. If the server was created with a
     * test scope that defines `registerCleanupFunction()`, you don't need to call
     * `stop()` yourself because it will automatically be called as a cleanup
     * function. Otherwise you'll need to call `stop()`.
     */
    start(): Promise<void>;
    _originalEndpointURL: any;
    /**
     * Stops the server and cleans up other state.
     */
    stop(): Promise<void>;
    /**
     * Returns a new object that describes the default response the server will
     * return.
     *
     * @returns {object}
     */
    makeDefaultResponse(): object;
    /**
     * Clears the received requests and sets the response to the default.
     */
    reset(): void;
    /**
     * Asserts a given list of requests has been received. Clears the list of
     * received requests before returning.
     *
     * @param {Array} expected
     *   The expected requests. Each item should be an object: `{ params }`
     */
    checkAndClearRequests(expected: any[]): void;
    /**
     * Temporarily creates the conditions for a network error. Any Merino fetches
     * that occur during the callback will fail with a network error.
     *
     * @param {Function} callback
     *   Callback function.
     */
    withNetworkError(callback: Function): Promise<void>;
    /**
     * Returns a promise that will resolve when the next request is received.
     *
     * @returns {Promise}
     */
    waitForNextRequest(): Promise<any>;
    #private;
}
export {};
