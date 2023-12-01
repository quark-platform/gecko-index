export const UrlbarPrefs: Preferences;
/**
 * Preferences class.  The exported object is a singleton instance.
 */
declare class Preferences {
    _map: Map<any, any>;
    QueryInterface: MozQueryInterface;
    _observerWeakRefs: any[];
    shouldHandOffToSearchModePrefs: string[];
    _firefoxSuggestScenarioStartupPromise: Promise<any>;
    _resolveFirefoxSuggestScenarioStartupPromise: (value: any) => void;
    _updatingFirefoxSuggestScenario: boolean;
    /**
     * Returns the value for the preference with the given name.
     * For preferences in the "browser.urlbar."" branch, the passed-in name
     * should be relative to the branch. It's also possible to get prefs from the
     * PREF_OTHER_DEFAULTS Map, specifying their full name.
     *
     * @param {string} pref
     *        The name of the preference to get.
     * @returns {*} The preference value.
     */
    get(pref: string): any;
    /**
     * Sets the value for the preference with the given name.
     * For preferences in the "browser.urlbar."" branch, the passed-in name
     * should be relative to the branch. It's also possible to set prefs from the
     * PREF_OTHER_DEFAULTS Map, specifying their full name.
     *
     * @param {string} pref
     *        The name of the preference to set.
     * @param {*} value The preference value.
     */
    set(pref: string, value: any): void;
    /**
     * Clears the value for the preference with the given name.
     *
     * @param {string} pref
     *        The name of the preference to clear.
     */
    clear(pref: string): void;
    /**
     * Builds the standard result groups.  See makeResultGroups.
     *
     * @param {object} options
     *   See makeResultGroups.
     * @returns {object}
     *   The root group.
     */
    makeResultGroups(options: object): object;
    get resultGroups(): any;
    /**
     * Sets the appropriate Firefox Suggest scenario based on the current Nimbus
     * rollout (if any) and "hardcoded" rollouts (if any). The possible scenarios
     * are:
     *
     * history
     *   This is the scenario when the user is not in any rollouts. Firefox
     *   Suggest suggestions are disabled.
     * offline
     *   This is the scenario for the "offline" rollout. Firefox Suggest
     *   suggestions are enabled by default. Data collection is not enabled by
     *   default, but the user can opt in in about:preferences. The onboarding
     *   dialog is not shown.
     * online
     *   This is the scenario for the "online" rollout. Firefox Suggest
     *   suggestions are enabled by default. Data collection is not enabled by
     *   default, and the user will be shown an onboarding dialog that prompts
     *   them to opt in to it. The user can also opt in in about:preferences.
     *
     * @param {string} [testOverrides]
     *   This is intended for tests only. Pass to force the following:
     *   `{ scenario, migrationVersion, defaultPrefs, isStartup }`
     */
    updateFirefoxSuggestScenario(testOverrides?: string): Promise<void>;
    _updateFirefoxSuggestScenarioCalled: boolean;
    _updateFirefoxSuggestScenarioHelper(isStartup: any, testOverrides: any): void;
    /**
     * Returns the Firefox Suggest scenario the user should be enrolled in. This
     * does *not* return the scenario they are currently enrolled in.
     *
     * @returns {string}
     *   The scenario the user should be enrolled in.
     */
    _getIntendedFirefoxSuggestScenario(): string;
    /**
     * Prefs that are exposed in the UI and whose default-branch values are
     * configurable via Nimbus variables. This getter returns an object that maps
     * from variable names to pref names relative to `browser.urlbar`. See point 3
     * in the comment inside `_updateFirefoxSuggestScenarioHelper()` for more.
     *
     * @returns {{ quickSuggestNonSponsoredEnabled: string; quickSuggestSponsoredEnabled: string; quickSuggestDataCollectionEnabled: string; }}
     */
    get FIREFOX_SUGGEST_UI_PREFS_BY_VARIABLE(): {
        quickSuggestNonSponsoredEnabled: string;
        quickSuggestSponsoredEnabled: string;
        quickSuggestDataCollectionEnabled: string;
    };
    /**
     * Default prefs relative to `browser.urlbar` per Firefox Suggest scenario.
     *
     * @returns {Record<Record<string, boolean>>}
     */
    get FIREFOX_SUGGEST_DEFAULT_PREFS(): any;
    /**
     * The current version of the Firefox Suggest prefs.
     *
     * @returns {number}
     */
    get FIREFOX_SUGGEST_MIGRATION_VERSION(): number;
    /**
     * Migrates Firefox Suggest prefs to the current version if they haven't been
     * migrated already.
     *
     * @param {string} scenario
     *   The current Firefox Suggest scenario.
     * @param {string} testOverrides
     *   This is intended for tests only. Pass to force a migration version:
     *   `{ migrationVersion }`
     */
    _ensureFirefoxSuggestPrefsMigrated(scenario: string, testOverrides: string): void;
    /**
     * Migrates unversioned Firefox Suggest prefs to version 2 but only when the
     * user's current scenario is online. This case requires special handling that
     * isn't covered by the usual migration path from unversioned to 2.
     */
    _migrateFirefoxSuggestPrefsUnversionedTo2Online(): void;
    _migrateFirefoxSuggestPrefsTo_1(scenario: any): void;
    _migrateFirefoxSuggestPrefsTo_2(scenario: any): void;
    /**
     * @returns {Promise}
     *   This can be used to wait until the initial Firefox Suggest scenario has
     *   been set on startup. It's resolved when the first call to
     *   `updateFirefoxSuggestScenario()` finishes.
     */
    get firefoxSuggestScenarioStartupPromise(): Promise<any>;
    /**
     * @returns {boolean}
     *   Whether the Firefox Suggest scenario is being updated. While true,
     *   changes to related prefs should be ignored, depending on the observer.
     *   Telemetry intended to capture user changes to the prefs should not be
     *   recorded, for example.
     */
    get updatingFirefoxSuggestScenario(): boolean;
    /**
     * Adds a preference observer.  Observers are held weakly.
     *
     * @param {object} observer
     *        An object that may optionally implement one or both methods:
     *         - `onPrefChanged` invoked when one of the preferences listed here
     *           change. It will be passed the pref name.  For prefs in the
     *           `browser.urlbar.` branch, the name will be relative to the branch.
     *           For other prefs, the name will be the full name.
     *         - `onNimbusChanged` invoked when a Nimbus value changes. It will be
     *           passed the name of the changed Nimbus variable.
     */
    addObserver(observer: object): void;
    /**
     * Removes a preference observer.
     *
     * @param {object} observer
     *   An observer previously added with `addObserver()`.
     */
    removeObserver(observer: object): void;
    /**
     * Observes preference changes.
     *
     * @param {nsISupports} subject
     *   The subject of the notification.
     * @param {string} topic
     *   The topic of the notification.
     * @param {string} data
     *   The data attached to the notification.
     */
    observe(subject: nsISupports, topic: string, data: string): void;
    /**
     * Called when a pref tracked by UrlbarPrefs changes.
     *
     * @param {string} pref
     *        The name of the pref, relative to `browser.urlbar.` if the pref is
     *        in that branch.
     */
    onPrefChanged(pref: string): void;
    /**
     * Called when the `NimbusFeatures.urlbar` value changes.
     */
    _onNimbusUpdate(): void;
    /**
     * Clears cached Nimbus variables. The cache will be repopulated the next time
     * `_nimbus` is accessed.
     *
     * @returns {object}
     *   The value of the cache before it was cleared. It's an object that maps
     *   from variable names to values.
     */
    _clearNimbusCache(): object;
    __nimbus: any;
    get _nimbus(): any;
    /**
     * Returns the raw value of the given preference straight from Services.prefs.
     *
     * @param {string} pref
     *        The name of the preference to get.
     * @returns {*} The raw preference value.
     */
    _readPref(pref: string): any;
    /**
     * Returns a validated and/or fixed-up value of the given preference.  The
     * value may be validated for correctness, or it might be converted into a
     * different value that is easier to work with than the actual value stored in
     * the preferences branch.  Not all preferences require validation or fixup.
     *
     * The values returned from this method are the values that are made public by
     * this module.
     *
     * @param {string} pref
     *        The name of the preference to get.
     * @returns {*} The validated and/or fixed-up preference value.
     */
    _getPrefValue(pref: string): any;
    /**
     * Returns a descriptor of the given preference.
     *
     * @param {string} pref The preference to examine.
     * @returns {object} An object describing the pref with the following shape:
     *          { defaultValue, get, set, clear }
     */
    _getPrefDescriptor(pref: string): object;
    /**
     * Returns a descriptor for the given Nimbus property, if it exists.
     *
     * @param {string} name
     *   The name of the desired property in the object returned from
     *   NimbusFeatures.urlbar.getAllVariables().
     * @returns {object}
     *   An object describing the property's value with the following shape (same
     *   as _getPrefDescriptor()):
     *     { defaultValue, get, set, clear }
     *   If the property doesn't exist, null is returned.
     */
    _getNimbusDescriptor(name: string): object;
    /**
     * Initializes the showSearchSuggestionsFirst pref based on the matchGroups
     * pref.  This function can be removed when the corresponding UI migration in
     * BrowserGlue.sys.mjs is no longer needed.
     */
    initializeShowSearchSuggestionsFirstPref(): void;
    /**
     * Return whether or not persisted search terms is enabled.
     *
     * @returns {boolean} true: if enabled.
     */
    isPersistedSearchTermsEnabled(): boolean;
    #private;
}
export {};
