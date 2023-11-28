/**
 * A feature that periodically fetches weather suggestions from Merino.
 */
export class Weather {
    get shouldEnable(): any;
    get enablingPreferences(): string[];
    /**
     * @returns {object}
     *   The last weather suggestion fetched from Merino or null if none.
     */
    get suggestion(): any;
    /**
     * @returns {Set}
     *   The set of keywords that should trigger the weather suggestion. This will
     *   be null when no config is defined.
     */
    get keywords(): Set<any>;
    /**
     * @returns {number}
     *   The minimum prefix length of a weather keyword the user must type to
     *   trigger the suggestion. Note that the strings returned from `keywords`
     *   already take this into account. The min length is determined from the
     *   first config source below whose value is non-zero. If no source has a
     *   non-zero value, zero will be returned, and `this.keywords` will contain
     *   only full keywords.
     *
     *   1. The `weather.minKeywordLength` pref, which is set when the user
     *      increments the min length
     *   2. `weatherKeywordsMinimumLength` in Nimbus
     *   3. `min_keyword_length` in remote settings
     */
    get minKeywordLength(): number;
    /**
     * @returns {boolean}
     *   Weather the min keyword length can be incremented. A cap on the min
     *   length can be set in remote settings and Nimbus.
     */
    get canIncrementMinKeywordLength(): boolean;
    update(): void;
    enable(enabled: any): void;
    /**
     * Increments the minimum prefix length of a weather keyword the user must
     * type to trigger the suggestion, if possible. A cap on the min length can be
     * set in remote settings and Nimbus, and if the cap has been reached, the
     * length is not incremented.
     */
    incrementMinKeywordLength(): void;
    /**
     * Returns a promise that resolves when all pending fetches finish, if there
     * are pending fetches. If there aren't, the promise resolves when all pending
     * fetches starting with the next fetch finish.
     *
     * @returns {Promise}
     */
    waitForFetches(): Promise<any>;
    onRemoteSettingsSync(rs: any): Promise<void>;
    _test_fetchTimerMs: number;
    onPrefChanged(pref: any): void;
    observe(subject: any, topic: any, data: any): void;
    set _test_fetchDelayAfterComingOnlineMs(ms: number);
    get _test_fetchDelayAfterComingOnlineMs(): number;
    set _test_fetchIntervalMs(ms: number);
    get _test_fetchIntervalMs(): number;
    get _test_fetchTimer(): number;
    get _test_lastFetchTimeMs(): number;
    get _test_merino(): any;
    get _test_pendingFetchCount(): number;
    _test_fetch(): Promise<void>;
    _test_setSuggestionToNull(): void;
    _test_setTimeoutMs(ms: any): void;
    #private;
}
