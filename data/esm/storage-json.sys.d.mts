export class LoginManagerStorage_json {
    __crypto: any;
    __decryptedPotentiallyVulnerablePasswords: any[];
    get _crypto(): any;
    get _decryptedPotentiallyVulnerablePasswords(): any[];
    initialize(): Promise<void>;
    _store: any;
    /**
     * Internal method used by regression tests only.  It is called before
     * replacing this storage module with a new instance.
     */
    terminate(): any;
    /**
     * Returns the "sync id" used by Sync to know whether the store is current with
     * respect to the sync servers. It is stored encrypted, but only so we
     * can detect failure to decrypt (for example, a "reset" of the primary
     * password will leave all logins alone, but they will fail to decrypt. We
     * also want this metadata to be unavailable in that scenario)
     *
     * Returns null if the data doesn't exist or if the data can't be
     * decrypted (including if the primary-password prompt is cancelled). This is
     * OK for Sync as it can't even begin syncing if the primary-password is
     * locked as the sync encrytion keys are stored in this login manager.
     */
    getSyncID(): Promise<any>;
    setSyncID(syncID: any): Promise<void>;
    getLastSync(): Promise<any>;
    setLastSync(timestamp: any): Promise<void>;
    resetSyncCounter(guid: any, value: any): Promise<void>;
    loginIsDeleted(guid: any): boolean;
    addLoginsAsync(logins: any, continueOnDuplicates?: boolean): Promise<any>;
    removeLogin(login: any, fromSync: any): void;
    modifyLogin(oldLogin: any, newLoginData: any, fromSync: any): void;
    recordPasswordUse(login: any): void;
    recordBreachAlertDismissal(loginGUID: any): Promise<any>;
    getBreachAlertDismissalsByLoginGUID(): any;
    /**
     * Returns an array of nsILoginInfo. If decryption of a login
     * fails due to a corrupt entry, the login is not included in
     * the resulting array.
     *
     * @resolve {nsILoginInfo[]}
     */
    getAllLogins(includeDeleted: any): Promise<any>;
    searchLoginsAsync(matchData: any, includeDeleted: any): Promise<nsILoginInfo[]>;
    /**
     * Public wrapper around _searchLogins to convert the nsIPropertyBag to a
     * JavaScript object and decrypt the results.
     *
     * @return {nsILoginInfo[]} which are decrypted.
     */
    searchLogins(matchData: any, includeDeleted: any): nsILoginInfo[];
    /**
     * Private method to perform arbitrary searches on any field. Decryption is
     * left to the caller.
     *
     * formActionOrigin is handled specially for compatibility. If a null string
     * is passed and other match fields are present, it is treated as if it was
     * not present.
     *
     * Returns [logins, ids] for logins that match the arguments, where logins
     * is an array of encrypted nsLoginInfo and ids is an array of associated
     * ids in the database.
     */
    _searchLogins(matchData: any, includeDeleted?: boolean, aOptions?: {
        schemeUpgrades: boolean;
        acceptDifferentSubdomains: boolean;
        acceptRelatedRealms: boolean;
        relatedRealms: any[];
    }, candidateLogins?: any): any[][];
    /**
     * Removes all logins from local storage, including FxA Sync key.
     *
     * NOTE: You probably want removeAllUserFacingLogins instead of this function.
     *
     */
    removeAllLogins(): void;
    /**
     * Removes all user facing logins from storage. e.g. all logins except the FxA Sync key
     *
     * If you need to remove the FxA key, use `removeAllLogins` instead
     *
     * @param fullyRemove remove the logins rather than mark them deleted.
     */
    removeAllUserFacingLogins(fullyRemove: any): void;
    findLogins(origin: any, formActionOrigin: any, httpRealm: any): any[];
    countLogins(origin: any, formActionOrigin: any, httpRealm: any): number;
    addPotentiallyVulnerablePassword(login: any): void;
    isPotentiallyVulnerablePassword(login: any): boolean;
    clearAllPotentiallyVulnerablePasswords(): void;
    get uiBusy(): any;
    get isLoggedIn(): any;
    /**
     * Returns an array with two items: [id, login]. If the login was not
     * found, both items will be null. The returned login contains the actual
     * stored login (useful for looking at the actual nsILoginMetaInfo values).
     */
    _getIdForLogin(login: any): any[];
    /**
     * Checks to see if the specified GUID already exists.
     */
    _isGuidUnique(guid: any): any;
    /**
     * Returns the encrypted username, password, and encrypton type for the specified
     * login. Can throw if the user cancels a primary password entry.
     */
    _encryptLogin(login: any): any[];
    /**
     * Decrypts username and password fields in the provided array of
     * logins.
     *
     * The entries specified by the array will be decrypted, if possible.
     * An array of successfully decrypted logins will be returned. The return
     * value should be given to external callers (since still-encrypted
     * entries are useless), whereas internal callers generally don't want
     * to lose unencrypted entries (eg, because the user clicked Cancel
     * instead of entering their primary password)
     */
    _decryptLogins(logins: any): any[];
    #private;
}
