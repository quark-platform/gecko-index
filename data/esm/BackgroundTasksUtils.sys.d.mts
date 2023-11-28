export namespace BackgroundTasksUtils {
    let _defaultProfileInitialized: boolean;
    let _defaultProfile: any;
    function getDefaultProfile(): any;
    function hasDefaultProfile(): boolean;
    function currentProfileIsDefaultProfile(): boolean;
    function _throwIfNotLocked(lock: any): void;
    /**
     * Locks the given profile and provides the path to it to the callback.
     * The callback should return a promise and once settled the profile is
     * unlocked and then the promise returned back to the caller of this function.
     *
     * @template T
     * @param {(lock: nsIProfileLock) => Promise<T>} callback
     * @param {nsIToolkitProfile} [profile] defaults to default profile
     * @return {Promise<T>}
     */
    function withProfileLock<T>(callback: (lock: nsIProfileLock) => Promise<T>, profile?: nsIToolkitProfile): Promise<T>;
    /**
     * Reads the preferences from "prefs.js" out of a profile, optionally
     * returning only names satisfying a given predicate.
     *
     * If no `lock` is given, the default profile is locked and the preferences
     * read from it.  If `lock` is given, read from the given lock's directory.
     *
     * @param {(name: string) => boolean} [predicate] a predicate to filter
     * preferences by; if not given, all preferences are accepted.
     * @param {nsIProfileLock} [lock] optional lock to use
     * @returns {object} with keys that are string preference names and values
     * that are string|number|boolean preference values.
     */
    function readPreferences(predicate?: (name: string) => boolean, lock?: nsIProfileLock): any;
    /**
     * Reads the snapshotted Firefox Messaging System targeting out of a profile.
     *
     * If no `lock` is given, the default profile is locked and the preferences
     * read from it.  If `lock` is given, read from the given lock's directory.
     *
     * @param {nsIProfileLock} [lock] optional lock to use
     * @returns {object}
     */
    function readFirefoxMessagingSystemTargetingSnapshot(lock?: nsIProfileLock): any;
    /**
     * Reads the Telemetry Client ID out of a profile.
     *
     * If no `lock` is given, the default profile is locked and the preferences
     * read from it.  If `lock` is given, read from the given lock's directory.
     *
     * @param {nsIProfileLock} [lock] optional lock to use
     * @returns {string}
     */
    function readTelemetryClientID(lock?: nsIProfileLock): string;
    /**
     * Enable the Nimbus experimentation framework.
     *
     * @param {nsICommandLine} commandLine if given, accept command line parameters
     *                                     like `--url about:studies?...` or
     *                                     `--url file:path/to.json` to explicitly
     *                                     opt-on to experiment branches.
     * @param {object} defaultProfile      snapshot of Firefox Messaging System
     *                                     targeting from default browsing profile.
     */
    function enableNimbus(commandLine: nsICommandLine, defaultProfile?: any): Promise<void>;
    /**
     * Enable the Firefox Messaging System and, when successfully initialized,
     * trigger a message with trigger id `backgroundTask`.
     *
     * @param {object} defaultProfile - snapshot of Firefox Messaging System
     *                                  targeting from default browsing profile.
     */
    function enableFirefoxMessagingSystem(defaultProfile?: any): Promise<void>;
}
