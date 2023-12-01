export function LoginManager(): void;
export class LoginManager {
    classID: unknown;
    QueryInterface: MozQueryInterface;
    getInterface(aIID: any): any;
    _storage: null;
    /**
     * Initialize the Login Manager. Automatically called when service
     * is created.
     *
     * Note: Service created in BrowserGlue#_scheduleStartupIdleTasks()
     */
    init(): void;
    _initStorage(): void;
    initializationPromise: Promise<any>;
    _observer: {
        _pwmgr: null;
        QueryInterface: MozQueryInterface;
        observe(subject: any, topic: any, data: any): void;
    };
    /**
     * Collects statistics about the current logins and settings. The telemetry
     * histograms used here are not accumulated, but are reset each time this
     * function is called, since it can be called multiple times in a session.
     *
     * This function might also not be called at all in the current session.
     *
     * @param referenceTimeMs
     *        Current time used to calculate time-based statistics, expressed as
     *        the number of milliseconds since January 1, 1970, 00:00:00 UTC.
     *        This is set to a fake value during unit testing.
     */
    _gatherTelemetry(referenceTimeMs: any): Promise<void>;
    /**
     * Ensures that a login isn't missing any necessary fields.
     *
     * @param login
     *        The login to check.
     */
    _checkLogin(login: any): void;
    /**
     * Add a new login to login storage.
     */
    addLoginAsync(login: any): Promise<any>;
    /**
     * Add multiple logins to login storage.
     * TODO: rename to `addLoginsAsync` https://bugzilla.mozilla.org/show_bug.cgi?id=1832757
     */
    addLogins(logins: any): Promise<any>;
    /**
     * Remove the specified login from the stored logins.
     */
    removeLogin(login: any): any;
    /**
     * Change the specified login to match the new login or new properties.
     */
    modifyLogin(oldLogin: any, newLogin: any): any;
    /**
     * Record that the password of a saved login was used (e.g. submitted or copied).
     */
    recordPasswordUse(login: any, privateContextWithoutExplicitConsent: any, loginType: any, filled: any): void;
    /**
     * Get a dump of all stored logins asynchronously. Used by the login manager UI.
     *
     * @return {nsILoginInfo[]} - If there are no logins, the array is empty.
     */
    getAllLogins(): nsILoginInfo[];
    /**
     * Get a dump of all stored logins asynchronously. Used by the login detection service.
     */
    getAllLoginsWithCallback(aCallback: any): void;
    /**
     * Remove all user facing stored logins.
     *
     * This will not remove the FxA Sync key, which is stored with the rest of a user's logins.
     */
    removeAllUserFacingLogins(): void;
    /**
     * Remove all logins from data store, including the FxA Sync key.
     *
     * NOTE: You probably want `removeAllUserFacingLogins()` instead of this function.
     * This function will remove the FxA Sync key, which will break syncing of saved user data
     * e.g. bookmarks, history, open tabs, logins and passwords, add-ons, and options
     */
    removeAllLogins(): void;
    /**
     * Get a list of all origins for which logins are disabled.
     *
     * @param {Number} count - only needed for XPCOM.
     *
     * @return {String[]} of disabled origins. If there are no disabled origins,
     *                    the array is empty.
     */
    getAllDisabledHosts(): string[];
    /**
     * Search for the known logins for entries matching the specified criteria.
     */
    findLogins(origin: any, formActionOrigin: any, httpRealm: any): any;
    searchLoginsAsync(matchData: any): Promise<any>;
    /**
     * @return {nsILoginInfo[]} which are decrypted.
     */
    searchLogins(matchData: any): nsILoginInfo[];
    /**
     * Search for the known logins for entries matching the specified criteria,
     * returns only the count.
     */
    countLogins(origin: any, formActionOrigin: any, httpRealm: any): any;
    getSyncID(): Promise<any>;
    setSyncID(id: any): Promise<void>;
    getLastSync(): Promise<any>;
    setLastSync(timestamp: any): Promise<void>;
    ensureCurrentSyncID(newSyncID: any): Promise<any>;
    get uiBusy(): any;
    get isLoggedIn(): any;
    /**
     * Check to see if user has disabled saving logins for the origin.
     */
    getLoginSavingEnabled(origin: any): boolean;
    /**
     * Enable or disable storing logins for the specified origin.
     */
    setLoginSavingEnabled(origin: any, enabled: any): void;
}
