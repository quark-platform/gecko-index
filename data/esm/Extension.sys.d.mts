export namespace ExtensionProcessCrashObserver {
    let initialized: boolean;
    let _appInForeground: boolean;
    let _isAndroid: boolean;
    let _processSpawningDisabled: boolean;
    let currentProcessChildID: any;
    let lastCrashedProcessChildID: any;
    let QueryInterface: MozQueryInterface;
    let lastCrashTimestamps: any[];
    function init(): void;
    function uninit(): void;
    function observe(subject: any, topic: any, data: any): void;
    function enableProcessSpawning(): void;
    const appInForeground: boolean;
    const processSpawningDisabled: boolean;
}
/**
 * Represents the data contained in an extension, contained either
 * in a directory or a zip file, which may or may not be installed.
 * This class implements the functionality of the Extension class,
 * primarily related to manifest parsing and localization, which is
 * useful prior to extension installation or initialization.
 *
 * No functionality of this class is guaranteed to work before
 * `loadManifest` has been called, and completed.
 */
export class ExtensionData {
    /**
     * A factory function that allows the construction of ExtensionData, with
     * the isPrivileged flag computed asynchronously.
     *
     * @param {object} options
     * @param {nsIURI} options.rootURI
     *  The URI pointing to the extension root.
     * @param {function(type, id)} options.checkPrivileged
     *  An (async) function that takes the addon type and addon ID and returns
     *  whether the given add-on is privileged.
     * @param {boolean} options.temporarilyInstalled
     *  whether the given add-on is installed as temporary.
     * @returns {ExtensionData}
     */
    static constructAsync({ rootURI, checkPrivileged, temporarilyInstalled, }: {
        rootURI: nsIURI;
        checkPrivileged: (arg0: any, arg1: any) => any;
        temporarilyInstalled: boolean;
    }): ExtensionData;
    static getIsPrivileged({ signedState, builtIn, temporarilyInstalled }: {
        signedState: any;
        builtIn: any;
        temporarilyInstalled: any;
    }): any;
    static shouldPromptFor(permission: any): Promise<boolean>;
    static comparePermissions(oldPermissions: any, newPermissions: any): {
        origins: any;
        permissions: any;
    };
    static intersectPermissions(oldPermissions: any, newPermissions: any): {
        origins: any;
        permissions: any;
    };
    /**
     * When updating the addon, find and migrate permissions that have moved from required
     * to optional.  This also handles any updates required for permission removal.
     *
     * @param {string} id The id of the addon being updated
     * @param {object} oldPermissions
     * @param {object} oldOptionalPermissions
     * @param {object} newPermissions
     * @param {object} newOptionalPermissions
     */
    static migratePermissions(id: string, oldPermissions: object, oldOptionalPermissions: object, newPermissions: object, newOptionalPermissions: object): Promise<void>;
    /**
     * @param {string} origin
     * @returns {boolean}       If this is one of the "all sites" permission.
     */
    static isAllSitesPermission(origin: string): boolean;
    /**
     * @typedef {object} HostPermissions
     * @param {string} allUrls   permission used to obtain all urls access
     * @param {Set} wildcards    set contains permissions with wildcards
     * @param {Set} sites        set contains explicit host permissions
     * @param {Map} wildcardsMap mapping origin wildcards to labels
     * @param {Map} sitesMap     mapping origin patterns to labels
     */
    /**
     * Classify host permissions
     *
     * @param {Array<string>} origins
     *                        permission origins
     * @param {boolean}       ignoreNonWebSchemes
     *                        return only these schemes: *, http, https, ws, wss
     *
     * @returns {HostPermissions}
     */
    static classifyOriginPermissions(origins?: Array<string>, ignoreNonWebSchemes?: boolean): any;
    /**
     * @typedef {object} Permissions
     * @property {Array<string>} origins Origin permissions.
     * @property {Array<string>} permissions Regular (non-origin) permissions.
     */
    /**
     * Formats all the strings for a permissions dialog/notification.
     *
     * @param {object} info Information about the permissions being requested.
     *
     * @param {object} [info.addon] Optional information about the addon.
     * @param {Permissions} [info.optionalPermissions]
     *                      Optional permissions listed in the manifest.
     * @param {Permissions} info.permissions Requested permissions.
     * @param {string} info.siteOrigin
     * @param {Array<string>} [info.sitePermissions]
     * @param {boolean} info.unsigned
     *                  True if the prompt is for installing an unsigned addon.
     * @param {string} info.type
     *                 The type of prompt being shown.  May be one of "update",
     *                 "sideload", "optional", or omitted for a regular
     *                 install prompt.
     * @param {object} options
     * @param {boolean} options.collapseOrigins
     *                  Wether to limit the number of displayed host permissions.
     *                  Default is false.
     * @param {boolean} options.buildOptionalOrigins
     *                  Wether to build optional origins Maps for permission
     *                  controls.  Defaults to false.
     *
     * @returns {object} An object with properties containing localized strings
     *                   for various elements of a permission dialog. The "header"
     *                   property on this object is the notification header text
     *                   and it has the string "<>" as a placeholder for the
     *                   addon name.
     *
     *                   "object.msgs" is an array of localized strings describing required permissions
     *
     *                   "object.optionalPermissions" is a map of permission name to localized
     *                   strings describing the permission.
     *
     *                   "object.optionalOrigins" is a map of a host permission to localized strings
     *                   describing the host permission, where appropriate.  Currently only
     *                   all url style permissions are included.
     */
    static formatPermissionStrings({ addon, optionalPermissions, permissions, siteOrigin, sitePermissions, type, unsigned, }: {
        addon?: object;
        optionalPermissions?: {
            /**
             * Origin permissions.
             */
            origins: Array<string>;
            /**
             * Regular (non-origin) permissions.
             */
            permissions: Array<string>;
        };
        permissions: {
            /**
             * Origin permissions.
             */
            origins: Array<string>;
            /**
             * Regular (non-origin) permissions.
             */
            permissions: Array<string>;
        };
        siteOrigin: string;
        sitePermissions?: Array<string>;
        unsigned: boolean;
        type: string;
    }, { collapseOrigins, buildOptionalOrigins }?: {
        collapseOrigins: boolean;
        buildOptionalOrigins: boolean;
    }): object;
    constructor(rootURI: any, isPrivileged?: boolean);
    rootURI: any;
    resourceURL: any;
    isPrivileged: boolean;
    manifest: any;
    type: any;
    id: any;
    uuid: any;
    localeData: any;
    fluentL10n: any;
    _promiseLocales: Promise<any>;
    apiNames: Set<any>;
    dependencies: Set<any>;
    permissions: Set<any>;
    startupData: {
        chromeEntries: any[][];
        langpackId: string;
        l10nRegistrySources: {};
        languages: string[];
        dictionaries?: undefined;
    } | {
        dictionaries: {};
        chromeEntries?: undefined;
        langpackId?: undefined;
        l10nRegistrySources?: undefined;
        languages?: undefined;
    };
    errors: any[];
    warnings: any[];
    eventPagesEnabled: any;
    get builtinMessages(): any;
    get logger(): any;
    /**
     * Report an error about the extension's manifest file.
     *
     * @param {string} message The error message
     */
    manifestError(message: string): void;
    /**
     * Report a warning about the extension's manifest file.
     *
     * @param {string} message The warning message
     */
    manifestWarning(message: string): void;
    packagingError(message: any): void;
    packagingWarning(message: any): void;
    logWarning(message: any): void;
    logError(message: any): void;
    _logMessage(message: any, severity: any): void;
    ensureNoErrors(): void;
    /**
     * Returns the moz-extension: URL for the given path within this
     * extension.
     *
     * Must not be called unless either the `id` or `uuid` property has
     * already been set.
     *
     * @param {string} path The path portion of the URL.
     * @returns {string}
     */
    getURL(path?: string): string;
    /**
     * Discovers the file names within a directory or JAR file.
     *
     * @param {Ci.nsIFileURL|Ci.nsIJARURI} path
     *   The path to the directory or jar file to look at.
     * @param {boolean} [directoriesOnly]
     *   If true, this will return only the directories present within the directory.
     * @returns {string[]}
     *   An array of names of files/directories (only the name, not the path).
     */
    _readDirectory(path: Ci.nsIFileURL | Ci.nsIJARURI, directoriesOnly?: boolean): string[];
    readJSON(path: any): Promise<any>;
    get restrictSchemes(): boolean;
    /**
     * Given an array of host and permissions, generate a structured permissions object
     * that contains seperate host origins and permissions arrays.
     *
     * @param {Array} permissionsArray
     * @param {Array} [hostPermissions]
     * @returns {object} permissions object
     */
    permissionsObject(permissionsArray?: any[], hostPermissions?: any[]): object;
    /**
     * Returns an object representing any capabilities that the extension
     * has access to based on fixed properties in the manifest.  The result
     * includes the contents of the "permissions" property as well as other
     * capabilities that are derived from manifest fields that users should
     * be informed of (e.g., origins where content scripts are injected).
     */
    get manifestPermissions(): {
        permissions: any[];
        origins: string[];
    };
    /**
     * @returns {string[]} all origins that are referenced in manifest via
     * permissions, host_permissions, or content_scripts keys.
     */
    getManifestOrigins(): string[];
    /**
     * Returns optional permissions from the manifest, including host permissions
     * if originControls is true.
     */
    get manifestOptionalPermissions(): {
        permissions: any[];
        origins: any[];
    };
    /**
     * Returns an object representing all capabilities this extension has
     * access to, including fixed ones from the manifest as well as dynamically
     * granted permissions.
     */
    get activePermissions(): {
        origins: any;
        apis: any[];
    };
    canUseAPIExperiment(): any;
    canUseThemeExperiment(): any;
    get manifestVersion(): any;
    get persistentBackground(): any;
    /**
     * backgroundState can be starting, running, suspending or stopped.
     * It is undefined if the extension has no background page.
     * See ext-backgroundPage.js for more details.
     *
     * @param {string} state starting, running, suspending or stopped
     */
    set backgroundState(state: string);
    get backgroundState(): string;
    _backgroundState: string;
    getExtensionVersionWithoutValidation(): Promise<any>;
    /**
     * Load a locale and return a localized manifest.  The extension must
     * be initialized, and manifest parsed prior to calling.
     *
     * @param {string} locale to load, if necessary.
     * @returns {object} normalized manifest.
     */
    getLocalizedManifest(locale: string): object;
    rawManifest: any;
    _getNormalizedManifest(locale: any): Promise<any>;
    initializeAddonTypeAndID(): Promise<void>;
    parseManifest(): any;
    loadManifest(): Promise<any>;
    contentScripts: any;
    schemaURLs: any;
    modules: any;
    apiManager: any;
    webAccessibleResources: any;
    originControls: any;
    allowedOrigins: any;
    hasPermission(perm: any, includeOptional?: boolean): boolean;
    getAPIManager(): any;
    experimentAPIManager: any;
    localizeMessage(...args: any[]): any;
    localize(str: any, locale: any): any;
    get defaultLocale(): any;
    get isAppProvided(): any;
    get isHidden(): any;
    normalizeLocaleCode(locale: any): any;
    readLocaleFile(locale: any): Promise<any>;
    _promiseLocaleMap(): Promise<Map<any, any>>;
    _setupLocaleData(locales: any): any;
    promiseLocales(): Promise<any>;
    initAllLocales(): Promise<any>;
    initLocale(locale?: any): Promise<any>;
    #private;
}
/**
 * This class is the main representation of an active WebExtension
 * in the main process.
 *
 * @augments ExtensionData
 */
export class Extension extends ExtensionData {
    static getBootstrapScope(): BootstrapScope;
    constructor(addonData: any, startupReason: any, updateReason: any);
    startupStates: Set<any>;
    set state(startupState: string);
    get state(): string;
    userContextIsolation: any;
    sharedDataKeys: Set<any>;
    instanceId: number;
    MESSAGE_EMIT_EVENT: string;
    cleanupFile: any;
    dontSaveStartupData: boolean;
    testNoDelayedStartup: boolean;
    addonData: any;
    startupData: any;
    startupReason: any;
    updateReason: any;
    startupClearCachePromise: any;
    remote: boolean;
    remoteType: any;
    parentMessageManager: any;
    version: any;
    baseURL: string;
    baseURI: any;
    principal: nsIPrincipalType;
    ignoreQuarantine: any;
    views: Set<any>;
    _backgroundPageFrameLoader: any;
    onStartup: any;
    hasShutdown: boolean;
    onShutdown: Set<any>;
    uninstallURL: any;
    _optionalOrigins: any;
    registeredContentScripts: Map<any, any>;
    emitter: any;
    addStartupStatePromise(name: any, fn: any): Promise<void>;
    get browsingContextGroupId(): any;
    get groupFrameLoader(): any;
    get backgroundContext(): any;
    on(hook: any, f: any): any;
    off(hook: any, f: any): any;
    once(hook: any, f: any): any;
    emit(event: any, ...args: any[]): any;
    receiveMessage({ name, data }: {
        name: any;
        data: any;
    }): void;
    testMessage(...args: any[]): void;
    createPrincipal(uri?: any, originAttributes?: {}): nsIPrincipalType;
    isExtensionURL(url: any): boolean;
    checkLoadURI(uri: any, options?: {}): any;
    checkLoadURL(url: any, options?: {}): any;
    promiseLocales(locale: any): Promise<any>;
    readLocaleFile(locale: any): any;
    get manifestCacheKey(): any[];
    get temporarilyInstalled(): boolean;
    saveStartupData(): void;
    parseManifest(): Promise<any>;
    cachePermissions(): Promise<any>;
    get extensionPageCSP(): any;
    get backgroundScripts(): any;
    get backgroundTypeModule(): boolean;
    get backgroundWorkerScript(): any;
    get optionalPermissions(): any;
    get privateBrowsingAllowed(): any;
    canAccessWindow(window: any): any;
    canAccessContainer(userContextId: any): boolean;
    serialize(): {
        id: any;
        uuid: any;
        name: any;
        type: any;
        manifestVersion: any;
        extensionPageCSP: any;
        instanceId: number;
        resourceURL: any;
        contentScripts: any;
        webAccessibleResources: any;
        allowedOrigins: any;
        permissions: Set<any>;
        optionalPermissions: any;
        isPrivileged: boolean;
        ignoreQuarantine: any;
        temporarilyInstalled: boolean;
    };
    serializeExtended(): {
        backgroundScripts: any;
        backgroundWorkerScript: any;
        backgroundTypeModule: boolean;
        childModules: any;
        dependencies: Set<any>;
        persistentBackground: any;
        schemaURLs: any;
    };
    broadcast(msg: any, data: any): Promise<any>;
    setSharedData(key: any, value: any): void;
    getSharedData(key: any, value: any): any;
    initSharedData(): void;
    updateContentScripts(): void;
    runManifest(manifest: any): Promise<any[]>;
    /**
     * Call the close() method on the given object when this extension
     * is shut down.  This can happen during browser shutdown, or when
     * an extension is manually disabled or uninstalled.
     *
     * @param {object} obj
     *        An object on which to call the close() method when this
     *        extension is shut down.
     */
    callOnClose(obj: object): void;
    forgetOnClose(obj: any): void;
    get builtinMessages(): Map<string, any>;
    /**
     * Clear cached resources associated to the extension principal
     * when an extension is installed (in case we were unable to do that at
     * uninstall time) or when it is being upgraded or downgraded.
     *
     * @param {string|undefined} reason
     *        BOOTSTRAP_REASON string, if provided. The value is expected to be
     *        `undefined` for extension objects without a corresponding AddonManager
     *        addon wrapper (e.g. test extensions created using `ExtensionTestUtils`
     *        without `useAddonManager` optional property).
     *
     * @returns {Promise<void>}
     *        Promise resolved when the nsIClearDataService async method call
     *        has been completed.
     */
    clearCache(reason: string | undefined): Promise<void>;
    /**
     * Update site permissions as necessary.
     *
     * @param {string|undefined} reason
     *        If provided, this is a BOOTSTRAP_REASON string.  If reason is undefined,
     *        addon permissions are being added or removed that may effect the site permissions.
     */
    updatePermissions(reason: string | undefined): void;
    startup(): Promise<void>;
    policy: any;
    _setupStartupPermissions(): void;
    cleanupGeneratedFile(): Promise<void>;
    shutdown(reason: any): Promise<void>;
    observe(subject: any, topic: any, data: any): void;
    get name(): any;
    get optionalOrigins(): any;
    get hasBrowserActionUI(): any;
    getPreferredIcon(size?: number): any;
}
export class Dictionary extends ExtensionData {
    static getBootstrapScope(): DictionaryBootstrapScope;
    constructor(addonData: any, startupReason: any);
    startupData: any;
    startup(reason: any): Promise<void>;
    dictionaries: {};
    shutdown(reason: any): Promise<void>;
}
export class Langpack extends ExtensionData {
    static getBootstrapScope(): LangpackBootstrapScope;
    constructor(addonData: any, startupReason: any);
    startupData: any;
    manifestCacheKey: any[];
    promiseLocales(locale: any): Promise<any>;
    startup(reason: any): Promise<void>;
    chromeRegistryHandle: any;
    shutdown(reason: any): Promise<void>;
}
export class SitePermission extends ExtensionData {
    static getBootstrapScope(): SitePermissionBootstrapScope;
    constructor(addonData: any, startupReason: any);
    hasShutdown: boolean;
    sitePermissions: any;
    siteOrigin: any;
    getSupportedPrincipals(): nsIPrincipalType[];
    startup(reason: any): Promise<void>;
    shutdown(reason: any): Promise<void>;
}
export var Management: {
    [x: string]: any;
    initialized: Promise<any>;
    getModuleJSONURLs(): any[];
    lazyInit(): Promise<any>;
    receiveMessage({ target }: {
        target: any;
    }): any;
    _callHandlers(ids: any, event: any, method: any): void;
};
declare class BootstrapScope {
    install(data: any, reason: any): void;
    uninstall(data: any, reason: any): void;
    fetchState(): {
        state: string;
    };
    update(data: any, reason: any): Promise<any>;
    updateReason: any;
    startup(data: any, reason: any): Promise<void>;
    extension: Extension;
    shutdown(data: any, reason: any): Promise<void>;
}
declare class DictionaryBootstrapScope extends BootstrapScope {
    dictionary: Dictionary;
    shutdown(data: any, reason: any): void;
}
declare class LangpackBootstrapScope extends BootstrapScope {
    update(data: any, reason: any): void;
    langpack: Langpack;
    shutdown(data: any, reason: any): void;
}
declare class SitePermissionBootstrapScope extends BootstrapScope {
    sitepermission: SitePermission;
    shutdown(data: any, reason: any): void;
}
export namespace ExtensionAddonObserver {
    let initialized_1: boolean;
    export { initialized_1 as initialized };
    export function init(): void;
    export function uninit(): void;
    export function onEnabling(addon: any): void;
    export function onDisabled(addon: any): void;
    export function onUninstalling(addon: any): void;
    export function onUninstalled(addon: any): void;
    export function onPropertyChanged(addon: any, properties: any): void;
}
export const PRIVILEGED_PERMS: Set<string>;
export {};
