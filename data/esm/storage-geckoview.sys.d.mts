/// <reference types="gecko-types" />
export class LoginManagerStorage extends LoginManagerStorage_json {
    static "__#1121003@#storage": any;
    static create(callback: any): any;
    get _crypto(): void;
    /**
     * Internal method used by regression tests only.  It is called before
     * replacing this storage module with a new instance.
     */
    terminate(): void;
    addLoginsAsync(logins: any, continueOnDuplicates?: boolean): Promise<void>;
    removeLogin(login: any): void;
    modifyLogin(oldLogin: any, newLoginData: any): void;
    recordPasswordUse(login: any): void;
    /**
     * Returns a promise resolving to an array of all saved logins that can be decrypted.
     *
     * @resolve {nsILoginInfo[]}
     */
    getAllLogins(includeDeleted: any): Promise<any[]>;
    searchLoginsAsync(matchData: any, includeDeleted: any): Promise<any[]>;
    _baseHostnameFromOrigin(origin: any): string;
    _getLoginsAsync(matchData: any, includeDeleted: any): Promise<any[]>;
    /**
     * Convert a modern decrypted vanilla login object to one expected from logins.json.
     *
     * The storage login is usually encrypted but not in this case, this aligns
     * with the `_decryptLogins` method being a no-op.
     *
     * @param {object} vanillaLogin using `origin`/`formActionOrigin`/`username` properties.
     * @returns {object} a vanilla login for logins.json using
     *                   `hostname`/`formSubmitURL`/`encryptedUsername`.
     */
    _vanillaLoginToStorageLogin(vanillaLogin: object): object;
    /**
     * Use `searchLoginsAsync` instead.
     */
    searchLogins(matchData: any): void;
    countLogins(origin: any, formActionOrigin: any, httpRealm: any): void;
    get uiBusy(): boolean;
    get isLoggedIn(): boolean;
    /**
     * GeckoView will encrypt the login itself.
     */
    _encryptLogin(login: any): any;
    /**
     * GeckoView logins are already decrypted before this component receives them
     * so this method is a no-op for this backend.
     * @see _vanillaLoginToStorageLogin
     */
    _decryptLogins(logins: any): any;
    /**
     * Sync metadata, which isn't supported by GeckoView.
     */
    getSyncID(): Promise<void>;
    setSyncID(syncID: any): Promise<void>;
    getLastSync(): Promise<void>;
    setLastSync(timestamp: any): Promise<void>;
}
import { LoginManagerStorage_json } from "resource://gre/modules/storage-json.sys.mjs";
