/**
 * Base class for a migration that involves reading a single file off of
 * the disk that the user picks using a file picker. The file might be
 * generated by another browser or some other application.
 */
export class FileMigratorBase {
    /**
     * This must be overridden to return a simple string identifier for the
     * migrator, for example "password-csv". This key is what
     * is used as an identifier when calling MigrationUtils.getFileMigrator.
     *
     * @type {string}
     */
    static get key(): string;
    /**
     * This must be overridden to return a Fluent string ID mapping to the display
     * name for this migrator. These strings should be defined in migrationWizard.ftl.
     *
     * @type {string}
     */
    static get displayNameL10nID(): string;
    /**
     * This getter should get overridden to return an icon url to represent the
     * file to be imported from. By default, this will just use the default Favicon
     * image.
     *
     * @type {string}
     */
    static get brandImage(): string;
    /**
     * Returns true if the migrator is configured to be enabled.
     *
     * @type {boolean}
     *   true if the migrator should be shown in the migration wizard.
     */
    get enabled(): boolean;
    /**
     * This getter should be overridden to return a Fluent string ID for what
     * the migration wizard header should be while the file migration is
     * underway.
     *
     * @type {string}
     */
    get progressHeaderL10nID(): string;
    /**
     * This getter should be overridden to return a Fluent string ID for what
     * the migration wizard header should be while the file migration is
     * done.
     *
     * @type {string}
     */
    get successHeaderL10nID(): string;
    /**
     * @typedef {object} FilePickerConfiguration
     * @property {string} title
     *   The title that should be assigned to the native file picker window.
     * @property {FilePickerConfigurationFilter[]} filters
     *   One or more extension filters that should be applied to the native
     *   file picker window to make selection easier.
     */
    /**
     * @typedef {object} FilePickerConfigurationFilter
     * @property {string} title
     *   The title for the filter. Example: "CSV Files"
     * @property {string} extensionPattern
     *   A matching pattern for the filter. Example: "*.csv"
     */
    /**
     * A subclass of FileMigratorBase will eventually open a native file picker
     * for the user to select the file from their file system.
     *
     * Subclasses need to override this method in order to configure the
     * native file picker.
     *
     * @returns {Promise<FilePickerConfiguration>}
     */
    getFilePickerConfig(): Promise<{
        /**
         *   The title that should be assigned to the native file picker window.
         */
        title: string;
        /**
         *   One or more extension filters that should be applied to the native
         *   file picker window to make selection easier.
         */
        filters: {
            /**
             *   The title for the filter. Example: "CSV Files"
             */
            title: string;
            /**
             *   A matching pattern for the filter. Example: "*.csv"
             */
            extensionPattern: string;
        }[];
    }>;
    /**
     * Returns a list of one or more resource types that should appear to be
     * in progress of migrating while the file migration occurs. Notably,
     * this does not need to match the resource types that are returned by
     * `FileMigratorBase.migrate`.
     *
     * @type {string[]}
     *   An array of resource types from the
     *   MigrationWizardConstants.DISPLAYED_RESOURCE_TYPES set.
     */
    get displayedResourceTypes(): string[];
    /**
     * Called to perform the file migration once the user makes a selection
     * from the native file picker. This will not be called if the user
     * chooses to cancel the native file picker.
     *
     * @param {string} filePath
     *   The path that the user selected from the native file picker.
     */
    migrate(filePath: string): Promise<void>;
}
/**
 * A file migrator for importing passwords from CSV or TSV files. CSV
 * files are more common, so this is what we show as the file type for
 * the display name, but this FileMigrator accepts both.
 */
export class PasswordFileMigrator extends FileMigratorBase {
    get enabled(): any;
    get displayedResourceTypes(): any[];
    getFilePickerConfig(): Promise<{
        title: any;
        filters: {
            title: any;
            extensionPattern: string;
        }[];
    }>;
    migrate(filePath: any): Promise<{
        [x: number]: any;
    }>;
}
/**
 * A file migrator for importing bookmarks from a HTML or JSON file.
 *
 * @class BookmarksFileMigrator
 * @augments {FileMigratorBase}
 */
export class BookmarksFileMigrator extends FileMigratorBase {
    get enabled(): any;
    get displayedResourceTypes(): any[];
    getFilePickerConfig(): Promise<{
        title: any;
        filters: {
            title: any;
            extensionPattern: string;
        }[];
    }>;
    migrate(filePath: any): Promise<{
        [x: number]: any;
    }>;
}
