/**
 * Chrome profile migrator. This can also be used as a parent class for
 * migrators for browsers that are variants of Chrome.
 */
export class ChromeProfileMigrator {
    static get key(): string;
    static get displayNameL10nID(): string;
    static get brandImage(): string;
    get _chromeUserDataPathSuffix(): string;
    hasPermissions(): Promise<boolean>;
    getPermissions(win: any): Promise<boolean>;
    canGetPermissions(): Promise<string | false>;
    _keychainServiceName: string;
    _keychainAccountName: string;
    /**
     * Returns a Promise that resolves to the data path containing the
     * Local State and profile directories for this browser.
     *
     * @param {boolean} [noRemapping=false]
     *   Set to true to bypass any remapping that might have occurred on
     *   platforms where the data path changes once permission has been
     *   granted.
     * @returns {Promise<string>}
     */
    _getChromeUserDataPathIfExists(noRemapping?: boolean): Promise<string>;
    _chromeUserDataPath: any;
    getResources(aProfile: any): Promise<any[]>;
    getLastUsedDate(): Promise<Date>;
    getSourceProfiles(): Promise<any>;
    __sourceProfiles: any[];
    _GetPasswordsResource(aProfileFolder: any): Promise<{
        type: any;
        migrate(aCallback: any): Promise<void>;
    }>;
    _GetPaymentMethodsResource(aProfileFolder: any): Promise<{
        type: any;
        migrate(aCallback: any): Promise<void>;
    }>;
    #private;
}
/**
 * Chromium migrator
 */
export class ChromiumProfileMigrator extends ChromeProfileMigrator {
    _chromeUserDataPathSuffix: string;
}
/**
 * Chrome Canary
 * Not available on Linux
 */
export class CanaryProfileMigrator extends ChromeProfileMigrator {
    get _keychainServiceName(): string;
    get _keychainAccountName(): string;
}
/**
 * Chrome Dev - Linux only (not available in Mac and Windows)
 */
export class ChromeDevMigrator extends ChromeProfileMigrator {
    _chromeUserDataPathSuffix: string;
}
/**
 * Chrome Beta migrator
 */
export class ChromeBetaMigrator extends ChromeProfileMigrator {
    _chromeUserDataPathSuffix: string;
}
/**
 * Brave migrator
 */
export class BraveProfileMigrator extends ChromeProfileMigrator {
    _chromeUserDataPathSuffix: string;
}
/**
 * Edge (Chromium-based) migrator
 */
export class ChromiumEdgeMigrator extends ChromeProfileMigrator {
    _chromeUserDataPathSuffix: string;
}
/**
 * Edge Beta (Chromium-based) migrator
 */
export class ChromiumEdgeBetaMigrator extends ChromeProfileMigrator {
    _chromeUserDataPathSuffix: string;
}
/**
 * Chromium 360 migrator
 */
export class Chromium360seMigrator extends ChromeProfileMigrator {
    _chromeUserDataPathSuffix: string;
}
/**
 * Opera migrator
 */
export class OperaProfileMigrator extends ChromeProfileMigrator {
    _chromeUserDataPathSuffix: string;
    getSourceProfiles(): any;
}
/**
 * Opera GX migrator
 */
export class OperaGXProfileMigrator extends ChromeProfileMigrator {
    _chromeUserDataPathSuffix: string;
    getSourceProfiles(): any;
}
/**
 * Vivaldi migrator
 */
export class VivaldiProfileMigrator extends ChromeProfileMigrator {
    _chromeUserDataPathSuffix: string;
}
