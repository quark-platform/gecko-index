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
     * Sets up local remote settings and Merino servers, registers test
     * suggestions, and initializes Suggest.
     *
     * @param {object} options
     *   Options object
     * @param {Array} options.remoteSettingsRecords
     *   Array of remote settings records. Each item in this array should be a
     *   realistic remote settings record with some exceptions, e.g.,
     *   `record.attachment`, if defined, should be the attachment itself and not
     *   its metadata. For details see `RemoteSettingsServer.addRecords()`.
     * @param {Array} options.merinoSuggestions
     *   Array of Merino suggestion objects. If given, this function will start
     *   the mock Merino server and set `quicksuggest.dataCollection.enabled` to
     *   true so that `UrlbarProviderQuickSuggest` will fetch suggestions from it.
     *   Otherwise Merino will not serve suggestions, but you can still set up
     *   Merino without using this function by using `MerinoTestUtils` directly.
     * @param {object} options.config
     *   The Suggest configuration object. This should not be the full remote
     *   settings record; only pass the object that should be set to the nested
     *   `configuration` object inside the record.
     * @param {Array} options.prefs
     *   An array of Suggest-related prefs to set. This is useful because setting
     *   some prefs, like feature gates, can cause Suggest to sync from remote
     *   settings; this function will set them, wait for sync to finish, and clear
     *   them when the cleanup function is called. Each item in this array should
     *   itself be a two-element array `[prefName, prefValue]` similar to the
     *   `set` array passed to `SpecialPowers.pushPrefEnv()`, except here pref
     *   names are relative to `browser.urlbar`.
     * @returns {Function}
     *   An async cleanup function. This function is automatically registered as a
     *   cleanup function, so you only need to call it if your test needs to clean
     *   up Suggest before it ends, for example if you have a small number of
     *   tasks that need Suggest and it's not enabled throughout your test. The
     *   cleanup function is idempotent so there's no harm in calling it more than
     *   once. Be sure to `await` it.
     */
    ensureQuickSuggestInit({ remoteSettingsRecords, merinoSuggestions, config, prefs, }?: {
        remoteSettingsRecords: any[];
        merinoSuggestions: any[];
        config: object;
        prefs: any[];
    }): Function;
    /**
     * Removes all records from the local remote settings server and adds a new
     * batch of records.
     *
     * @param {Array} records
     *   Array of remote settings records. See `ensureQuickSuggestInit()`.
     * @param {object} options
     *   Options object.
     * @param {boolean} options.forceSync
     *   Whether to force Suggest to sync after updating the records.
     */
    setRemoteSettingsRecords(records: any[], { forceSync }?: {
        forceSync: boolean;
    }): Promise<void>;
    /**
     * Sets the quick suggest configuration. You should call this again with
     * `DEFAULT_CONFIG` before your test finishes. See also `withConfig()`.
     *
     * @param {object} config
     *   The quick suggest configuration object. This should not be the full
     *   remote settings record; only pass the object that should be set to the
     *   `configuration` nested object inside the record.
     */
    setConfig(config: object): Promise<void>;
    /**
     * Forces Suggest to sync with remote settings. This can be used to ensure
     * Suggest has finished all sync activity.
     */
    forceSync(): Promise<void>;
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
