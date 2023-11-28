export const QuickSuggest: _QuickSuggest;
/**
 * This class manages the quick suggest feature (a.k.a Firefox Suggest) and has
 * related helpers.
 */
declare class _QuickSuggest {
    /**
     * @returns {string}
     *   The name of the quick suggest telemetry event category.
     */
    get TELEMETRY_EVENT_CATEGORY(): string;
    /**
     * @returns {string}
     *   The timestamp template string used in quick suggest URLs.
     */
    get TIMESTAMP_TEMPLATE(): string;
    /**
     * @returns {number}
     *   The length of the timestamp in quick suggest URLs.
     */
    get TIMESTAMP_LENGTH(): number;
    /**
     * @returns {string}
     *   The help URL for the Quick Suggest feature.
     */
    get HELP_URL(): string;
    get ONBOARDING_CHOICE(): {
        ACCEPT_2: string;
        CLOSE_1: string;
        DISMISS_1: string;
        DISMISS_2: string;
        LEARN_MORE_1: string;
        LEARN_MORE_2: string;
        NOT_NOW_2: string;
        REJECT_2: string;
    };
    get ONBOARDING_URI(): string;
    /**
     * @returns {SuggestBackendJs|SuggestBackendRust}
     *   The currently active backend.
     */
    get backend(): any;
    /**
     * @returns {SuggestBackendRust}
     *   The Rust backend. Not used when the JS backend is enabled.
     */
    get rustBackend(): SuggestBackendRust;
    /**
     * @returns {SuggestBackendJs}
     *   The JS backend. Not used when the Rust backend is enabled.
     */
    get jsBackend(): SuggestBackendJs;
    /**
     * @returns {BlockedSuggestions}
     *   The blocked suggestions feature.
     */
    get blockedSuggestions(): BlockedSuggestions;
    /**
     * @returns {ImpressionCaps}
     *   The impression caps feature.
     */
    get impressionCaps(): ImpressionCaps;
    /**
     * @returns {Weather}
     *   A feature that periodically fetches weather suggestions from Merino.
     */
    get weather(): Weather;
    /**
     * @returns {Iterator}
     *   An iterator over the names of all Rust suggestion types ("Adm",
     *   "Wikipedia", etc.) that are managed by registered features (as defined by
     *   `feature.rustSuggestionTypes`).
     */
    get registeredRustSuggestionTypes(): Iterator<any, any, undefined>;
    get logger(): any;
    _logger: any;
    /**
     * Initializes the quick suggest feature. This must be called before using
     * quick suggest. It's safe to call more than once.
     */
    init(): void;
    /**
     * Returns a quick suggest feature by name.
     *
     * @param {string} name
     *   The name of the feature's JS class.
     * @returns {BaseFeature}
     *   The feature object, an instance of a subclass of `BaseFeature`.
     */
    getFeature(name: string): BaseFeature;
    /**
     * Returns a quick suggest feature by the name of the Merino provider that
     * serves its suggestions (as defined by `feature.merinoProvider`). Not all
     * features correspond to a Merino provider.
     *
     * @param {string} provider
     *   The name of a Merino provider.
     * @returns {BaseFeature}
     *   The feature object, an instance of a subclass of `BaseFeature`, or null
     *   if no feature corresponds to the Merino provider.
     */
    getFeatureByMerinoProvider(provider: string): BaseFeature;
    /**
     * Returns a Suggest feature by the type of Rust suggestion it manages (as
     * defined by `feature.rustSuggestionTypes`). Not all features correspond to a
     * Rust suggestion type.
     *
     * @param {string} type
     *   The name of a Rust suggestion type.
     * @returns {BaseFeature}
     *   The feature object, an instance of a subclass of `BaseFeature`, or null
     *   if no feature corresponds to the type.
     */
    getFeatureByRustSuggestionType(type: string): BaseFeature;
    /**
     * Called when a urlbar pref changes.
     *
     * @param {string} pref
     *   The name of the pref relative to `browser.urlbar`.
     */
    onPrefChanged(pref: string): void;
    /**
     * Returns whether a given URL and quick suggest's URL are equivalent. URLs
     * are equivalent if they are identical except for substrings that replaced
     * templates in the original suggestion URL.
     *
     * For example, a suggestion URL from the backing suggestions source might
     * include a timestamp template "%YYYYMMDDHH%" like this:
     *
     *   http://example.com/foo?bar=%YYYYMMDDHH%
     *
     * When a quick suggest result is created from this suggestion URL, it's
     * created with a URL that is a copy of the suggestion URL but with the
     * template replaced with a real timestamp value, like this:
     *
     *   http://example.com/foo?bar=2021111610
     *
     * All URLs created from this single suggestion URL are considered equivalent
     * regardless of their real timestamp values.
     *
     * @param {string} url
     *   The URL to check.
     * @param {UrlbarResult} result
     *   The quick suggest result. Will compare {@link url} to `result.payload.url`
     * @returns {boolean}
     *   Whether `url` is equivalent to `result.payload.url`.
     */
    isURLEquivalentToResultURL(url: string, result: UrlbarResult): boolean;
    /**
     * Some suggestion properties like `url` and `click_url` include template
     * substrings that must be replaced with real values. This method replaces
     * templates with appropriate values in place.
     *
     * @param {object} suggestion
     *   A suggestion object fetched from remote settings or Merino.
     */
    replaceSuggestionTemplates(suggestion: object): void;
    /**
     * Records the Nimbus exposure event if it hasn't already been recorded during
     * the app session. This method actually queues the recording on idle because
     * it's potentially an expensive operation.
     */
    ensureExposureEventRecorded(): void;
    _recordedExposureEvent: boolean;
    /**
     * An onboarding dialog can be shown to the users who are enrolled into
     * the QuickSuggest experiments or rollouts. This behavior is controlled
     * by the pref `browser.urlbar.quicksuggest.shouldShowOnboardingDialog`
     * which can be remotely configured by Nimbus.
     *
     * Given that the release may overlap with another onboarding dialog, we may
     * wait for a few restarts before showing the QuickSuggest dialog. This can
     * be remotely configured by Nimbus through
     * `quickSuggestShowOnboardingDialogAfterNRestarts`, the default is 0.
     *
     * @returns {boolean}
     *   True if the dialog was shown and false if not.
     */
    maybeShowOnboardingDialog(): boolean;
    /**
     * Updates state based on whether quick suggest and its features are enabled.
     */
    _updateFeatureState(): void;
    #private;
}
export {};
