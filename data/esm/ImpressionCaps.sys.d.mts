/**
 * Impression caps and stats for quick suggest suggestions.
 */
export class ImpressionCaps {
    get shouldEnable(): any;
    enable(enabled: any): void;
    /**
     * Increments the user's impression stats counters for the given type of
     * suggestion. This should be called only when a suggestion impression is
     * recorded.
     *
     * @param {string} type
     *   The suggestion type, one of: "sponsored", "nonsponsored"
     */
    updateStats(type: string): void;
    /**
     * Returns a non-null value if an impression cap has been reached for the
     * given suggestion type and null otherwise. This method can therefore be used
     * to tell whether a cap has been reached for a given type. The actual return
     * value an object describing the impression stats that caused the cap to be
     * reached.
     *
     * @param {string} type
     *   The suggestion type, one of: "sponsored", "nonsponsored"
     * @returns {object}
     *   An impression stats object or null.
     */
    getHitStats(type: string): object;
    /**
     * Called when a urlbar pref changes.
     *
     * @param {string} pref
     *   The name of the pref relative to `browser.urlbar`.
     */
    onPrefChanged(pref: string): void;
    _onConfigSet: () => void;
    _shutdownBlocker: () => void;
    _impressionCountersResetInterval: any;
    /**
     * Gets the timestamp of app startup in ms since Unix epoch. This is only
     * defined as its own method so tests can override it to simulate arbitrary
     * startups.
     *
     * @returns {number}
     *   Startup timestamp in ms since Unix epoch.
     */
    _getStartupDateMs(): number;
    get _test_stats(): {};
    _test_reloadStats(): void;
    _test_resetElapsedCounters(): void;
    _test_setCountersResetInterval(ms: any): void;
    #private;
}
