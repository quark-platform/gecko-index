/**
 * Edge (EdgeHTML) profile migrator
 */
export class EdgeProfileMigrator {
    static get key(): string;
    static get displayNameL10nID(): string;
    static get brandImage(): string;
    getBookmarksMigratorForTesting(dbOverride: any): EdgeBookmarksMigrator;
    getReadingListMigratorForTesting(dbOverride: any): EdgeReadingListMigrator;
    getHistoryDBMigratorForTesting(dbOverride: any): EdgeTypedURLDBMigrator;
    getHistoryRegistryMigratorForTesting(): EdgeTypedURLMigrator;
    getResources(): (EdgeTypedURLMigrator | EdgeTypedURLDBMigrator | EdgeReadingListMigrator | EdgeBookmarksMigrator)[];
    getLastUsedDate(): Promise<Date>;
    /**
     * @returns {Array|null}
     *   Somewhat counterintuitively, this returns
     *   |null| to indicate "There is only 1 (default) profile".
     *   See MigrationUtils.sys.mjs for slightly more info on how sourceProfiles is used.
     */
    getSourceProfiles(): any[] | null;
}
declare function EdgeBookmarksMigrator(dbOverride: any): void;
declare class EdgeBookmarksMigrator {
    constructor(dbOverride: any);
    dbOverride: any;
    type: any;
    get db(): any;
    get TABLE_NAME(): string;
    get exists(): any;
    _exists: boolean;
    migrate(callback: any): void;
    _migrateBookmarks(): Promise<void>;
    _fetchBookmarksFromDB(): {
        toplevelBMs: ({
            dateAdded: any;
            title: any;
            url: any;
            type?: undefined;
            children?: undefined;
        } | {
            title: any;
            type: any;
            dateAdded: any;
            children: any;
            url?: undefined;
        })[];
        toolbarBMs: ({
            dateAdded: any;
            title: any;
            url: any;
            type?: undefined;
            children?: undefined;
        } | {
            title: any;
            type: any;
            dateAdded: any;
            children: any;
            url?: undefined;
        })[];
    };
}
declare function EdgeReadingListMigrator(dbOverride: any): void;
declare class EdgeReadingListMigrator {
    constructor(dbOverride: any);
    dbOverride: any;
    type: any;
    get db(): any;
    get exists(): boolean;
    migrate(callback: any): void;
    _migrateReadingList(parentGuid: any): Promise<void>;
    _ensureReadingListFolder(parentGuid: any): Promise<any>;
    __readingListFolderGuid: any;
}
declare function EdgeTypedURLDBMigrator(dbOverride: any): void;
declare class EdgeTypedURLDBMigrator {
    constructor(dbOverride: any);
    dbOverride: any;
    type: any;
    get db(): any;
    get exists(): boolean;
    migrate(callback: any): void;
    _migrateTypedURLsFromDB(): Promise<void>;
}
declare function EdgeTypedURLMigrator(): void;
declare class EdgeTypedURLMigrator {
    type: any;
    get _typedURLs(): any;
    __typedURLs: any;
    get exists(): boolean;
    migrate(aCallback: any): void;
}
export {};
