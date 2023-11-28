/**
 * setAndLockPref
 *
 * Sets the _default_ value of a pref, and locks it (meaning that
 * the default value will always be returned, independent from what
 * is stored as the user value).
 * The value is only changed in memory, and not stored to disk.
 *
 * @param {string} prefName
 *        The pref to be changed
 * @param {boolean,number,string} prefValue
 *        The value to set and lock
 */
export function setAndLockPref(prefName: string, prefValue: any): void;
/**
 * runOnce
 *
 * Helper function to run a callback only once per policy.
 *
 * @param {string} actionName
 *        A given name which will be used to track if this callback has run.
 * @param {Functon} callback
 *        The callback to run only once.
 */
export function runOnce(actionName: string, callback: Functon): void;
export const Policies: {
    _cleanup: {
        onBeforeAddons(manager: any): void;
        onProfileAfterChange(manager: any): void;
        onBeforeUIStartup(manager: any): void;
        onAllWindowsRestored(manager: any): void;
    };
    "3rdparty": {
        onBeforeAddons(manager: any, param: any): void;
    };
    AllowedDomainsForApps: {
        onBeforeAddons(manager: any, param: any): void;
    };
    AppAutoUpdate: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    AppUpdatePin: {
        validate(param: any): boolean;
    };
    AppUpdateURL: {};
    Authentication: {
        onBeforeAddons(manager: any, param: any): void;
    };
    AutoLaunchProtocolsFromOrigins: {
        onBeforeAddons(manager: any, param: any): void;
    };
    BackgroundAppUpdate: {
        onBeforeAddons(manager: any, param: any): void;
    };
    BlockAboutAddons: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    BlockAboutConfig: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    BlockAboutProfiles: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    BlockAboutSupport: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    Bookmarks: {
        onAllWindowsRestored(manager: any, param: any): void;
    };
    CaptivePortal: {
        onBeforeAddons(manager: any, param: any): void;
    };
    Certificates: {
        onBeforeAddons(manager: any, param: any): void;
    };
    Containers: {};
    Cookies: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    DefaultDownloadDirectory: {
        onBeforeAddons(manager: any, param: any): void;
    };
    DisableAccounts: {
        onBeforeAddons(manager: any, param: any): void;
    };
    DisableAppUpdate: {
        onBeforeAddons(manager: any, param: any): void;
    };
    DisableBuiltinPDFViewer: {
        onBeforeAddons(manager: any, param: any): void;
    };
    DisabledCiphers: {
        onBeforeAddons(manager: any, param: any): void;
    };
    DisableDefaultBrowserAgent: {};
    DisableDeveloperTools: {
        onBeforeAddons(manager: any, param: any): void;
    };
    DisableFeedbackCommands: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    DisableFirefoxAccounts: {
        onBeforeAddons(manager: any, param: any): void;
    };
    DisableFirefoxScreenshots: {
        onBeforeAddons(manager: any, param: any): void;
    };
    DisableFirefoxStudies: {
        onBeforeAddons(manager: any, param: any): void;
    };
    DisableForgetButton: {
        onProfileAfterChange(manager: any, param: any): void;
    };
    DisableFormHistory: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    DisableMasterPasswordCreation: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    DisablePasswordReveal: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    DisablePocket: {
        onBeforeAddons(manager: any, param: any): void;
    };
    DisablePrivateBrowsing: {
        onBeforeAddons(manager: any, param: any): void;
    };
    DisableProfileImport: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    DisableProfileRefresh: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    DisableSafeMode: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    DisableSecurityBypass: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    DisableSetDesktopBackground: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    DisableSystemAddonUpdate: {
        onBeforeAddons(manager: any, param: any): void;
    };
    DisableTelemetry: {
        onBeforeAddons(manager: any, param: any): void;
    };
    DisableThirdPartyModuleBlocking: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    DisplayBookmarksToolbar: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    DisplayMenuBar: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    DNSOverHTTPS: {
        onBeforeAddons(manager: any, param: any): void;
    };
    DontCheckDefaultBrowser: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    DownloadDirectory: {
        onBeforeAddons(manager: any, param: any): void;
    };
    EnableTrackingProtection: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    EncryptedMediaExtensions: {
        onBeforeAddons(manager: any, param: any): void;
    };
    ExemptDomainFileTypePairsFromFileTypeDownloadWarnings: {};
    Extensions: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    ExtensionSettings: {
        onBeforeAddons(manager: any, param: any): void;
        onBeforeUIStartup(manager: any, param: any): Promise<void>;
    };
    ExtensionUpdate: {
        onBeforeAddons(manager: any, param: any): void;
    };
    FirefoxHome: {
        onBeforeAddons(manager: any, param: any): void;
    };
    FirefoxSuggest: {
        onBeforeAddons(manager: any, param: any): void;
    };
    GoToIntranetSiteForSingleWordEntryInAddressBar: {
        onBeforeAddons(manager: any, param: any): void;
    };
    Handlers: {
        onBeforeAddons(manager: any, param: any): void;
    };
    HardwareAcceleration: {
        onBeforeAddons(manager: any, param: any): void;
    };
    Homepage: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    InstallAddonsPermission: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    LegacyProfiles: {};
    LegacySameSiteCookieBehaviorEnabled: {
        onBeforeAddons(manager: any, param: any): void;
    };
    LegacySameSiteCookieBehaviorEnabledForDomainList: {
        onBeforeAddons(manager: any, param: any): void;
    };
    LocalFileLinks: {
        onBeforeAddons(manager: any, param: any): void;
    };
    ManagedBookmarks: {};
    ManualAppUpdateOnly: {
        onBeforeAddons(manager: any, param: any): void;
    };
    NetworkPrediction: {
        onBeforeAddons(manager: any, param: any): void;
    };
    NewTabPage: {
        onBeforeAddons(manager: any, param: any): void;
    };
    NoDefaultBookmarks: {
        onProfileAfterChange(manager: any, param: any): void;
    };
    OfferToSaveLogins: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    OfferToSaveLoginsDefault: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    OverrideFirstRunPage: {
        onProfileAfterChange(manager: any, param: any): void;
    };
    OverridePostUpdatePage: {
        onProfileAfterChange(manager: any, param: any): void;
    };
    PasswordManagerEnabled: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    PasswordManagerExceptions: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    PDFjs: {
        onBeforeAddons(manager: any, param: any): void;
    };
    Permissions: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    PictureInPicture: {
        onBeforeAddons(manager: any, param: any): void;
    };
    PopupBlocking: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    Preferences: {
        onBeforeAddons(manager: any, param: any): void;
    };
    PrimaryPassword: {
        onAllWindowsRestored(manager: any, param: any): void;
    };
    PrintingEnabled: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    PromptForDownloadLocation: {
        onBeforeAddons(manager: any, param: any): void;
    };
    Proxy: {
        onBeforeAddons(manager: any, param: any): void;
    };
    RequestedLocales: {
        onBeforeAddons(manager: any, param: any): void;
    };
    SanitizeOnShutdown: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    SearchBar: {
        onAllWindowsRestored(manager: any, param: any): void;
    };
    SearchEngines: {
        onBeforeUIStartup(manager: any, param: any): void;
        onAllWindowsRestored(manager: any, param: any): void;
    };
    SearchSuggestEnabled: {
        onBeforeAddons(manager: any, param: any): void;
    };
    SecurityDevices: {
        onProfileAfterChange(manager: any, param: any): void;
    };
    ShowHomeButton: {
        onBeforeAddons(manager: any, param: any): void;
        onAllWindowsRestored(manager: any, param: any): void;
    };
    SSLVersionMax: {
        onBeforeAddons(manager: any, param: any): void;
    };
    SSLVersionMin: {
        onBeforeAddons(manager: any, param: any): void;
    };
    StartDownloadsInTempDirectory: {
        onBeforeAddons(manager: any, param: any): void;
    };
    SupportMenu: {
        onProfileAfterChange(manager: any, param: any): void;
    };
    UserMessaging: {
        onBeforeAddons(manager: any, param: any): void;
    };
    UseSystemPrintDialog: {
        onBeforeAddons(manager: any, param: any): void;
    };
    WebsiteFilter: {
        onBeforeUIStartup(manager: any, param: any): void;
    };
    WindowsSSO: {
        onBeforeAddons(manager: any, param: any): void;
    };
};
export namespace PoliciesUtils {
    function setDefaultPref(prefName: any, prefValue: any, locked: any): void;
}
