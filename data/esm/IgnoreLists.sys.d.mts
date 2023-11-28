export const IgnoreLists: IgnoreListsManager;
declare class IgnoreListsManager {
    init(): Promise<void>;
    _ignoreListSettings: any;
    getAndSubscribe(listener: any): Promise<any[]>;
    unsubscribe(listener: any): void;
    _getIgnoreList(): Promise<any[]>;
    _getSettingsPromise: any[];
    /**
     * Obtains the current ignore list from remote settings. This includes
     * verifying the signature of the ignore list within the database.
     *
     * If the signature in the database is invalid, the database will be wiped
     * and the stored dump will be used, until the settings next update.
     *
     * Note that this may cause a network check of the certificate, but that
     * should generally be quick.
     *
     * @param {boolean} [firstTime]
     *   Internal boolean to indicate if this is the first time check or not.
     * @returns {array}
     *   An array of objects in the database, or an empty array if none
     *   could be obtained.
     */
    _getIgnoreListSettings(firstTime?: boolean): any[];
}
export {};
