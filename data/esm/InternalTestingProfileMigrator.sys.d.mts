/**
 * A stub of a migrator used for automated testing only.
 */
export class InternalTestingProfileMigrator {
    static get key(): string;
    static get displayNameL10nID(): string;
    static get sourceID(): number;
    static get testProfile(): {
        id: string;
        name: string;
    };
    getSourceProfiles(): Promise<{
        id: string;
        name: string;
    }[]>;
    getResources(aProfile: any): {
        type: any;
        migrate: (callback: any) => void;
    }[];
    /**
     * Clears the MigratorResources that are normally cached by the
     * MigratorBase parent class after a call to getResources. This
     * allows our automated tests to try different resource availability
     * scenarios between tests.
     */
    flushResourceCache(): void;
    _resourcesByProfile: any;
}
