export namespace ExtensionPermissions {
    function _update(extensionId: any, perms: any): Promise<any>;
    function _get(extensionId: any): Promise<any>;
    function _getCached(extensionId: any): Promise<any>;
    /**
     * Retrieves the optional permissions for the given extension.
     * The information may be retrieved from the StartupCache, and otherwise fall
     * back to data from the disk (and cache the result in the StartupCache).
     *
     * @param {string} extensionId The extensionId
     * @returns {object} An object with "permissions" and "origins" array.
     *   The object may be a direct reference to the storage or cache, so its
     *   value should immediately be used and not be modified by callers.
     */
    function get(extensionId: string): any;
    function _fixupAllUrlsPerms(perms: any): void;
    /**
     * Add new permissions for the given extension.  `permissions` is
     * in the format that is passed to browser.permissions.request().
     *
     * @param {string} extensionId The extension id
     * @param {object} perms Object with permissions and origins array.
     * @param {EventEmitter} emitter optional object implementing emitter interfaces
     */
    function add(extensionId: string, perms: any, emitter: EventEmitter): Promise<void>;
    /**
     * Revoke permissions from the given extension.  `permissions` is
     * in the format that is passed to browser.permissions.request().
     *
     * @param {string} extensionId The extension id
     * @param {object} perms Object with permissions and origins array.
     * @param {EventEmitter} emitter optional object implementing emitter interfaces
     */
    function remove(extensionId: string, perms: any, emitter: EventEmitter): Promise<void>;
    function removeAll(extensionId: any): Promise<void>;
    function _has(extensionId: any): Promise<any>;
    function _resetVersion(): Promise<void>;
    let _useLegacyStorageBackend: boolean;
    function _uninit({ recreateStore }?: {
        recreateStore?: boolean;
    }): Promise<void>;
    function _getStore(): LegacyPermissionStore | PermissionStore;
    function addListener(listener: any): void;
    function removeListener(listener: any): void;
}
export namespace OriginControls {
    let allDomains: any;
    /**
     * @typedef {object} OriginControlState
     * @param {boolean} noAccess        no options, can never access host.
     * @param {boolean} whenClicked     option to access host when clicked.
     * @param {boolean} alwaysOn        option to always access this host.
     * @param {boolean} allDomains      option to access to all domains.
     * @param {boolean} hasAccess       extension currently has access to host.
     * @param {boolean} temporaryAccess extension has temporary access to the tab.
     */
    /**
     * Get origin controls state for a given extension on a given tab.
     *
     * @param {WebExtensionPolicy} policy
     * @param {NativeTab} nativeTab
     * @returns {OriginControlState} Extension origin controls for this host include:
     */
    function getState(policy: WebExtensionPolicy, nativeTab: NativeTab): any;
    /**
     * Whether to show the attention indicator for extension on current tab. We
     * usually show attention when:
     *
     * - some permissions are needed (in MV3+)
     * - the extension is not allowed on the domain (quarantined)
     *
     * @param {WebExtensionPolicy} policy an extension's policy
     * @param {Window} window The window for which we can get the attention state
     * @returns {{attention: boolean, quarantined: boolean}}
     */
    function getAttentionState(policy: WebExtensionPolicy, window: Window): {
        attention: boolean;
        quarantined: boolean;
    };
    function setAlwaysOn(policy: any, uri: any): Promise<void>;
    function setWhenClicked(policy: any, uri: any): Promise<void>;
    /**
     * @typedef {object} FluentIdInfo
     * @param {string} default      the message ID corresponding to the state
     *                              that should be displayed by default.
     * @param {string | null} onHover an optional message ID to be shown when
     *                              users hover interactive elements (e.g. a
     *                              button).
     */
    /**
     * Get origin controls messages (fluent IDs) to be shown to users for a given
     * extension on a given host. The messages might be different for extensions
     * with a browser action (that might or might not open a popup).
     *
     * @param {object} params
     * @param {WebExtensionPolicy} params.policy an extension's policy
     * @param {NativeTab} params.tab             the current tab
     * @param {boolean} params.isAction          this should be true for
     *                                           extensions with a browser
     *                                           action, false otherwise.
     * @param {boolean} params.hasPopup          this should be true when the
     *                                           browser action opens a popup,
     *                                           false otherwise.
     *
     * @returns {FluentIdInfo?} An object with origin controls message IDs or
     *                        `null` when there is no message for the state.
     */
    function getStateMessageIDs({ policy, tab, isAction, hasPopup }: {
        policy: WebExtensionPolicy;
        tab: NativeTab;
        isAction: boolean;
        hasPopup: boolean;
    }): any;
}
export namespace QuarantinedDomains {
    function getUserAllowedAddonIdPrefName(addonId: any): string;
    function isUserAllowedAddonId(addonId: any): boolean;
    function setUserAllowedAddonIdPref(addonId: any, userAllowed: any): void;
    function clearUserPref(addonId: any): void;
    let PREF_ADDONS_BRANCH_NAME: string;
    let PREF_DOMAINSLIST_NAME: string;
    let _initialized: boolean;
    function _init(): void;
    function _onAMRemoteSettingsSetPref(subject: any, _topic: any): Promise<void>;
    function _onUserAllowedPrefChanged(_subject: any, _topic: any, prefName: any): Promise<void>;
    function _onUpdatedDomainsListTelemetry(_subject: any, _topic: any, _prefName: any): void;
    function _transformDomainsListPrefValue(value: any): {
        hash: string;
        set: Set<any>;
    };
}
declare class LegacyPermissionStore {
    lazyInit(): Promise<void>;
    _initPromise: Promise<void>;
    _init(): Promise<void>;
    has(extensionId: any): Promise<boolean>;
    get(extensionId: any): Promise<any>;
    put(extensionId: any, permissions: any): Promise<void>;
    delete(extensionId: any): Promise<void>;
    uninitForTest(): Promise<void>;
    resetVersionForTest(): Promise<void>;
}
declare class PermissionStore {
    _shouldMigrateFromOldKVStorePath: any;
    _init(): Promise<void>;
    _store: any;
    lazyInit(): Promise<void>;
    _initPromise: Promise<void>;
    validateMigratedData(json: any): {};
    maybeMigrateDataFromOldJSONFile(): Promise<void>;
    maybeImportFromOldKVStorePath(): Promise<void>;
    migrateFrom(oldStore: any): Promise<void>;
    makeKey(extensionId: any): string;
    has(extensionId: any): Promise<any>;
    get(extensionId: any): Promise<any>;
    put(extensionId: any, permissions: any): Promise<any>;
    delete(extensionId: any): Promise<any>;
    resetVersionForTest(): Promise<any>;
    uninitForTest(): Promise<void>;
}
export const OLD_JSON_FILENAME: "extension-preferences.json";
export const OLD_RKV_DIRNAME: "extension-store";
export const RKV_DIRNAME: "extension-store-permissions";
export const VERSION_KEY: "_version";
export const VERSION_VALUE: 1;
export {};
