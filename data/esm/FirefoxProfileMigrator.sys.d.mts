/**
 * Firefox profile migrator. Currently, this class only does "pave over"
 * migrations, where various parts of an old profile overwrite a new
 * profile. This is distinct from other migrators which attempt to import
 * old profile data into the existing profile.
 *
 * This migrator is what powers the "Profile Refresh" mechanism.
 */
export class FirefoxProfileMigrator {
    static get key(): string;
    static get displayNameL10nID(): string;
    static get brandImage(): string;
    _getAllProfiles(): Map<any, any>;
    getSourceProfiles(): {
        id: any;
        name: any;
    }[];
    _getFileObject(dir: any, fileName: any): any;
    getResources(aProfile: any): {
        type: any;
        migrate(aCallback: any): void;
    }[];
    getLastUsedDate(): Promise<Date>;
    _getResourcesInternal(sourceProfileDir: any, currentProfileDir: any): {
        type: any;
        migrate(aCallback: any): void;
    }[];
    get startupOnlyMigrator(): boolean;
}
