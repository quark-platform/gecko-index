/**
 * Internet Explorer profile migrator
 */
export class IEProfileMigrator {
    static get key(): string;
    static get displayNameL10nID(): string;
    static get brandImage(): string;
    getResources(): any[];
    getLastUsedDate(): Promise<Date>;
}
