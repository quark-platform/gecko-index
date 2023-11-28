/**
 * Mock `RustSuggest` implementation.
 *
 * @param {object} options
 *   Options object
 * @param {Array} options.data
 *   Mock remote settings records.
 */
export class MockRustSuggest {
    constructor({ data }: {
        data?: any[];
    });
    /**
     * Updates the mock data.
     *
     * @param {object} options
     *   Options object
     * @param {Array} options.data
     *   Mock remote settings records.
     */
    update({ data }: {
        data: any[];
    }): Promise<void>;
    cleanup(): void;
    ingest(): Promise<void>;
    interrupt(): void;
    clear(): void;
    query(query: any): Promise<any>;
    #private;
}
export const QuickSuggestTestUtils: _QuickSuggestTestUtils;
/**
 * Test utils for quick suggest.
 */
declare class _QuickSuggestTestUtils {
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
    get DEFAULT_CONFIG(): any;
    /**
     * Waits for quick suggest initialization to finish, ensures its data will not
     * be updated again during the test, and also optionally sets it up with mock
     * suggestions.
     *
     * @param {object} options
     *   Options object
     * @param {Array} options.remoteSettingsResults
     *   Array of remote settings result objects. If not given, no suggestions
     *   will be present in remote settings.
     * @param {Array} options.merinoSuggestions
     *   Array of Merino suggestion objects. If given, this function will start
     *   the mock Merino server and set `quicksuggest.dataCollection.enabled` to
     *   true so that `UrlbarProviderQuickSuggest` will fetch suggestions from it.
     *   Otherwise Merino will not serve suggestions, but you can still set up
     *   Merino without using this function by using `MerinoTestUtils` directly.
     * @param {object} options.config
     *   The quick suggest configuration object.
     * @param {object} options.rustEnabled
     *   Whether the Rust backend should be enabled. If false, the JS backend will
     *   be used. (There's no way to tell this function not to change the backend.
     *   If you need that, please modify this function to support it!)
     * @returns {Function}
     *   An async cleanup function. This function is automatically registered as
     *   a cleanup function, so you only need to call it if your test needs to
     *   clean up quick suggest before it ends, for example if you have a small
     *   number of tasks that need quick suggest and it's not enabled throughout
     *   your test. The cleanup function is idempotent so there's no harm in
     *   calling it more than once. Be sure to `await` it.
     */
    ensureQuickSuggestInit({ remoteSettingsResults, merinoSuggestions, config, rustEnabled, }?: {
        remoteSettingsResults: any[];
        merinoSuggestions: any[];
        config: object;
        rustEnabled: object;
    }): Function;
    /**
     * Clears the current remote settings data and adds a new set of data.
     * This can be used to add remote settings data after
     * `ensureQuickSuggestInit()` has been called.
     *
     * @param {Array} data
     *   Array of remote settings data objects.
     */
    setRemoteSettingsResults(data: any[]): Promise<void>;
    /**
     * Sets the quick suggest configuration. You should call this again with
     * `DEFAULT_CONFIG` before your test finishes. See also `withConfig()`.
     *
     * @param {object} config
     *   The config to be applied. See
     */
    setConfig(config: object): Promise<void>;
    /**
     * Sets the quick suggest configuration, calls your callback, and restores the
     * previous configuration.
     *
     * @param {object} options
     *   The options object.
     * @param {object} options.config
     *   The configuration that should be used with the callback
     * @param {Function} options.callback
     *   Will be called with the configuration applied
     *
     * @see {@link setConfig}
     */
    withConfig({ config, callback }: {
        config: object;
        callback: Function;
    }): Promise<void>;
    /**
     * Sets the Firefox Suggest scenario and waits for prefs to be updated.
     *
     * @param {string} scenario
     *   Pass falsey to reset the scenario to the default.
     */
    setScenario(scenario: string): Promise<void>;
    /**
     * Waits for any prior scenario update to finish.
     */
    waitForScenarioUpdated(): Promise<void>;
    /**
     * Asserts a result is a quick suggest result.
     *
     * @param {object} [options]
     *   The options object.
     * @param {string} options.url
     *   The expected URL. At least one of `url` and `originalUrl` must be given.
     * @param {string} options.originalUrl
     *   The expected original URL (the URL with an unreplaced timestamp
     *   template). At least one of `url` and `originalUrl` must be given.
     * @param {object} options.window
     *   The window that should be used for this assertion
     * @param {number} [options.index]
     *   The expected index of the quick suggest result. Pass -1 to use the index
     *   of the last result.
     * @param {boolean} [options.isSponsored]
     *   Whether the result is expected to be sponsored.
     * @param {boolean} [options.isBestMatch]
     *   Whether the result is expected to be a best match.
     * @returns {result}
     *   The quick suggest result.
     */
    assertIsQuickSuggest({ url, originalUrl, window, index, isSponsored, isBestMatch, }?: {
        url: string;
        originalUrl: string;
        window: object;
        index?: number;
        isSponsored?: boolean;
        isBestMatch?: boolean;
    }): any;
    /**
     * Asserts a result is not a quick suggest result.
     *
     * @param {object} window
     *   The window that should be used for this assertion
     * @param {number} index
     *   The index of the result.
     */
    assertIsNotQuickSuggest(window: object, index: number): Promise<void>;
    /**
     * Asserts that none of the results are quick suggest results.
     *
     * @param {object} window
     *   The window that should be used for this assertion
     */
    assertNoQuickSuggestResults(window: object): Promise<void>;
    /**
     * Checks the values of all the quick suggest telemetry keyed scalars and,
     * if provided, other non-quick-suggest keyed scalars. Scalar values are all
     * assumed to be 1.
     *
     * @param {object} expectedKeysByScalarName
     *   Maps scalar names to keys that are expected to be recorded. The value for
     *   each key is assumed to be 1. If you expect a scalar to be incremented,
     *   include it in this object; otherwise, don't include it.
     */
    assertScalars(expectedKeysByScalarName: object): void;
    /**
     * Checks quick suggest telemetry events. This is the same as
     * `TelemetryTestUtils.assertEvents()` except it filters in only quick suggest
     * events by default. If you are expecting events that are not in the quick
     * suggest category, use `TelemetryTestUtils.assertEvents()` directly or pass
     * in a filter override for `category`.
     *
     * @param {Array} expectedEvents
     *   List of expected telemetry events.
     * @param {object} filterOverrides
     *   Extra properties to set in the filter object.
     * @param {object} options
     *   The options object to pass to `TelemetryTestUtils.assertEvents()`.
     */
    assertEvents(expectedEvents: any[], filterOverrides?: object, options?: object): void;
    /**
     * Creates a `sinon.sandbox` and `sinon.spy` that can be used to instrument
     * the quick suggest custom telemetry pings. If `init` was called with a test
     * scope where `registerCleanupFunction` is defined, the sandbox will
     * automically be restored at the end of the test.
     *
     * @returns {object}
     *   An object: { sandbox, spy, spyCleanup }
     *   `spyCleanup` is a cleanup function that should be called if you're in a
     *   browser chrome test and you did not also call `init`, or if you need to
     *   remove the spy before the test ends for some other reason. You can ignore
     *   it otherwise.
     */
    createTelemetryPingSpy(): object;
    /**
     * Asserts that custom telemetry pings are recorded in the order they appear
     * in the given `pings` array and that no other pings are recorded.
     *
     * @param {object} spy
     *   A `sinon.spy` object. See `createTelemetryPingSpy()`. This method resets
     *   the spy before returning.
     * @param {Array} pings
     *   The expected pings in the order they are expected to be recorded. Each
     *   item in this array should be an object: `{ type, payload }`
     *
     *   {string} type
     *     The ping's expected type, one of the `CONTEXTUAL_SERVICES_PING_TYPES`
     *     values.
     *   {object} payload
     *     The ping's expected payload. For convenience, you can leave out
     *     properties whose values are expected to be the default values defined
     *     in `DEFAULT_PING_PAYLOADS`.
     */
    assertPings(spy: object, pings: any[]): void;
    /**
     * Helper for checking contextual services ping payloads.
     *
     * @param {object} actualPayload
     *   The actual payload in the ping.
     * @param {object} expectedPayload
     *   An object describing the expected payload. Non-function values in this
     *   object are checked for equality against the corresponding actual payload
     *   values. Function values are called and passed the corresponding actual
     *   values and should return true if the actual values are correct.
     */
    _assertPingPayload(actualPayload: object, expectedPayload: object): void;
    /**
     * Asserts that URLs in a result's payload have the timestamp template
     * substring replaced with real timestamps.
     *
     * @param {UrlbarResult} result The results to check
     * @param {object} urls
     *   An object that contains the expected payload properties with template
     *   substrings. For example:
     *   ```js
     *   {
     *     url: "http://example.com/foo-%YYYYMMDDHH%",
     *     sponsoredClickUrl: "http://example.com/bar-%YYYYMMDDHH%",
     *   }
     *   ```
     */
    assertTimestampsReplaced(result: UrlbarResult, urls: object): void;
    /**
     * Calls a callback while enrolled in a mock Nimbus experiment. The experiment
     * is automatically unenrolled and cleaned up after the callback returns.
     *
     * @param {object} options
     *   Options for the mock experiment.
     * @param {Function} options.callback
     *   The callback to call while enrolled in the mock experiment.
     * @param {object} options.options
     *   See {@link enrollExperiment}.
     */
    withExperiment({ callback, ...options }: {
        callback: Function;
        options: object;
    }): Promise<void>;
    /**
     * Enrolls in a mock Nimbus experiment.
     *
     * @param {object} options
     *   Options for the mock experiment.
     * @param {object} [options.valueOverrides]
     *   Values for feature variables.
     * @returns {Promise<Function>}
     *   The experiment cleanup function (async).
     */
    enrollExperiment({ valueOverrides }: {
        valueOverrides?: object;
    }): Promise<Function>;
    /**
     * Clears the Nimbus exposure event.
     */
    clearExposureEvent(): Promise<void>;
    /**
     * Asserts the Nimbus exposure event is recorded or not as expected.
     *
     * @param {boolean} expectedRecorded
     *   Whether the event is expected to be recorded.
     */
    assertExposureEvent(expectedRecorded: boolean): Promise<void>;
    /**
     * Sets the app's locales, calls your callback, and resets locales.
     *
     * @param {Array} locales
     *   An array of locale strings. The entire array will be set as the available
     *   locales, and the first locale in the array will be set as the requested
     *   locale.
     * @param {Function} callback
     *  The callback to be called with the {@link locales} set. This function can
     *  be async.
     */
    withLocales(locales: any[], callback: Function): Promise<void>;
    #private;
}
export {};
