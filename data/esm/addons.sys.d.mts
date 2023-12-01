/**
 * The AddonsEngine handles synchronization of add-ons between clients.
 *
 * The engine maintains an instance of an AddonsReconciler, which is the entity
 * maintaining state for add-ons. It provides the history and tracking APIs
 * that AddonManager doesn't.
 *
 * The engine instance overrides a handful of functions on the base class. The
 * rationale for each is documented by that function.
 */
export function AddonsEngine(service: any): void;
export class AddonsEngine {
    /**
     * The AddonsEngine handles synchronization of add-ons between clients.
     *
     * The engine maintains an instance of an AddonsReconciler, which is the entity
     * maintaining state for add-ons. It provides the history and tracking APIs
     * that AddonManager doesn't.
     *
     * The engine instance overrides a handful of functions on the base class. The
     * rationale for each is documented by that function.
     */
    constructor(service: any);
    _reconciler: null;
    _storeObj: typeof AddonsStore;
    _trackerObj: typeof AddonsTracker;
    _recordObj: typeof AddonRecord;
    version: number;
    syncPriority: number;
    initialize(): Promise<void>;
    /**
     * Override parent method to find add-ons by their public ID, not Sync GUID.
     */
    _findDupe(item: any): Promise<any>;
    /**
     * Override getChangedIDs to pull in tracker changes plus changes from the
     * reconciler log.
     */
    getChangedIDs(): Promise<{}>;
    /**
     * Override start of sync function to refresh reconciler.
     *
     * Many functions in this class assume the reconciler is refreshed at the
     * top of a sync. If this ever changes, those functions should be revisited.
     *
     * Technically speaking, we don't need to refresh the reconciler on every
     * sync since it is installed as an AddonManager listener. However, add-ons
     * are complicated and we force a full refresh, just in case the listeners
     * missed something.
     */
    _syncStartup(): Promise<any>;
    /**
     * Override end of sync to perform a little housekeeping on the reconciler.
     *
     * We prune changes to prevent the reconciler state from growing without
     * bound. Even if it grows unbounded, there would have to be many add-on
     * changes (thousands) for it to slow things down significantly. This is
     * highly unlikely to occur. Still, we exercise defense just in case.
     */
    _syncCleanup(): Promise<any>;
    /**
     * Helper function to ensure reconciler is up to date.
     *
     * This will load the reconciler's state from the file
     * system (if needed) and refresh the state of the reconciler.
     */
    _refreshReconcilerState(): Promise<any>;
    isAddonSyncable(addon: any, ignoreRepoCheck: any): any;
}
export class AddonValidator {
    constructor(engine?: any);
    engine: any;
    getClientItems(): Promise<any>;
    normalizeClientItem(item: any): {
        enabled: boolean;
        id: any;
        addonID: any;
        applicationID: any;
        source: string;
        original: any;
    };
    normalizeServerItem(item: any): Promise<any>;
    clientUnderstands(item: any): boolean;
    syncedByClient(item: any): Promise<any>;
}
/**
 * This is the primary interface between Sync and the Addons Manager.
 *
 * In addition to the core store APIs, we provide convenience functions to wrap
 * Add-on Manager APIs with Sync-specific semantics.
 */
declare function AddonsStore(name: any, engine: any): void;
declare class AddonsStore {
    /**
     * This is the primary interface between Sync and the Addons Manager.
     *
     * In addition to the core store APIs, we provide convenience functions to wrap
     * Add-on Manager APIs with Sync-specific semantics.
     */
    constructor(name: any, engine: any);
    _syncableTypes: string[];
    _extensionsPrefs: any;
    get reconciler(): any;
    /**
     * Override applyIncoming to filter out records we can't handle.
     */
    applyIncoming(record: any): Promise<void>;
    /**
     * Provides core Store API to create/install an add-on from a record.
     */
    create(record: any): Promise<void>;
    /**
     * Provides core Store API to remove/uninstall an add-on from a record.
     */
    remove(record: any): Promise<void>;
    /**
     * Provides core Store API to update an add-on from a record.
     */
    update(record: any): Promise<void>;
    /**
     * Provide core Store API to determine if a record exists.
     */
    itemExists(guid: any): Promise<boolean>;
    /**
     * Create an add-on record from its GUID.
     *
     * @param guid
     *        Add-on GUID (from extensions DB)
     * @param collection
     *        Collection to add record to.
     *
     * @return AddonRecord instance
     */
    createRecord(guid: any, collection: any): Promise<AddonRecord>;
    /**
     * Changes the id of an add-on.
     *
     * This implements a core API of the store.
     */
    changeItemID(oldID: any, newID: any): Promise<void>;
    /**
     * Obtain the set of all syncable add-on Sync GUIDs.
     *
     * This implements a core Store API.
     */
    getAllIDs(): Promise<{}>;
    /**
     * Wipe engine data.
     *
     * This uninstalls all syncable addons from the application. In case of
     * error, it logs the error and keeps trying with other add-ons.
     */
    wipe(): Promise<void>;
    /** *************************************************************************
     * Functions below are unique to this store and not part of the Store API  *
     ***************************************************************************/
    /**
     * Obtain an add-on from its public ID.
     *
     * @param id
     *        Add-on ID
     * @return Addon or undefined if not found
     */
    getAddonByID(id: any): Promise<any>;
    /**
     * Obtain an add-on from its Sync GUID.
     *
     * @param  guid
     *         Add-on Sync GUID
     * @return DBAddonInternal or null
     */
    getAddonByGUID(guid: any): Promise<any>;
    /**
     * Determines whether an add-on is suitable for Sync.
     *
     * @param  addon
     *         Addon instance
     * @param ignoreRepoCheck
     *         Should we skip checking the Addons repository (primarially useful
     *         for testing and validation).
     * @return Boolean indicating whether it is appropriate for Sync
     */
    isAddonSyncable(addon: any, ignoreRepoCheck?: boolean): Promise<boolean>;
    isSourceURITrusted: (uri: any) => boolean;
    /**
     * Update the userDisabled flag on an add-on.
     *
     * This will enable or disable an add-on. It has no return value and does
     * not catch or handle exceptions thrown by the addon manager. If no action
     * is needed it will return immediately.
     *
     * @param addon
     *        Addon instance to manipulate.
     * @param value
     *        Boolean to which to set userDisabled on the passed Addon.
     */
    updateUserDisabled(addon: any, value: any): Promise<void>;
}
/**
 * The add-ons tracker keeps track of real-time changes to add-ons.
 *
 * It hooks up to the reconciler and receives notifications directly from it.
 */
declare function AddonsTracker(name: any, engine: any): void;
declare class AddonsTracker {
    /**
     * The add-ons tracker keeps track of real-time changes to add-ons.
     *
     * It hooks up to the reconciler and receives notifications directly from it.
     */
    constructor(name: any, engine: any);
    get reconciler(): any;
    get store(): any;
    /**
     * This callback is executed whenever the AddonsReconciler sends out a change
     * notification. See AddonsReconciler.addChangeListener().
     */
    changeListener(date: any, change: any, addon: any): Promise<void>;
    onStart(): void;
    onStop(): void;
}
/**
 * AddonRecord represents the state of an add-on in an application.
 *
 * Each add-on has its own record for each application ID it is installed
 * on.
 *
 * The ID of add-on records is a randomly-generated GUID. It is random instead
 * of deterministic so the URIs of the records cannot be guessed and so
 * compromised server credentials won't result in disclosure of the specific
 * add-ons present in a Sync account.
 *
 * The record contains the following fields:
 *
 *  addonID
 *    ID of the add-on. This correlates to the "id" property on an Addon type.
 *
 *  applicationID
 *    The application ID this record is associated with.
 *
 *  enabled
 *    Boolean stating whether add-on is enabled or disabled by the user.
 *
 *  source
 *    String indicating where an add-on is from. Currently, we only support
 *    the value "amo" which indicates that the add-on came from the official
 *    add-ons repository, addons.mozilla.org. In the future, we may support
 *    installing add-ons from other sources. This provides a future-compatible
 *    mechanism for clients to only apply records they know how to handle.
 */
declare function AddonRecord(collection: any, id: any): void;
declare class AddonRecord {
    /**
     * AddonRecord represents the state of an add-on in an application.
     *
     * Each add-on has its own record for each application ID it is installed
     * on.
     *
     * The ID of add-on records is a randomly-generated GUID. It is random instead
     * of deterministic so the URIs of the records cannot be guessed and so
     * compromised server credentials won't result in disclosure of the specific
     * add-ons present in a Sync account.
     *
     * The record contains the following fields:
     *
     *  addonID
     *    ID of the add-on. This correlates to the "id" property on an Addon type.
     *
     *  applicationID
     *    The application ID this record is associated with.
     *
     *  enabled
     *    Boolean stating whether add-on is enabled or disabled by the user.
     *
     *  source
     *    String indicating where an add-on is from. Currently, we only support
     *    the value "amo" which indicates that the add-on came from the official
     *    add-ons repository, addons.mozilla.org. In the future, we may support
     *    installing add-ons from other sources. This provides a future-compatible
     *    mechanism for clients to only apply records they know how to handle.
     */
    constructor(collection: any, id: any);
    _logName: string;
}
export {};
