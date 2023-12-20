export { MigrationUtilsSingleton as MigrationUtils };
declare const MigrationUtilsSingleton: MigrationUtils;
/**
 * The singleton MigrationUtils service. This service is the primary mechanism
 * by which migrations from other browsers to this browser occur. The singleton
 * instance of this class is exported from this module as `MigrationUtils`.
 */
declare class MigrationUtils {
    resourceTypes: Readonly<{
        ALL: 0;
        COOKIES: 2;
        HISTORY: 4;
        FORMDATA: 8;
        PASSWORDS: 16;
        BOOKMARKS: 32;
        OTHERDATA: 64;
        SESSION: 128;
        PAYMENT_METHODS: 256;
        EXTENSIONS: 512;
    }>;
    /**
     * Helper for implementing simple asynchronous cases of migration resources'
     * |migrate(aCallback)| (see MigratorBase).  If your |migrate| method
     * just waits for some file to be read, for example, and then migrates
     * everything right away, you can wrap the async-function with this helper
     * and not worry about notifying the callback.
     *
     * @example
     * // For example, instead of writing:
     * setTimeout(function() {
     *   try {
     *     ....
     *     aCallback(true);
     *   }
     *   catch() {
     *     aCallback(false);
     *   }
     * }, 0);
     *
     * // You may write:
     * setTimeout(MigrationUtils.wrapMigrateFunction(function() {
     *   if (importingFromMosaic)
     *     throw Cr.NS_ERROR_UNEXPECTED;
     * }, aCallback), 0);
     *
     * // ... and aCallback will be called with aSuccess=false when importing
     * // from Mosaic, or with aSuccess=true otherwise.
     *
     * @param {Function} aFunction
     *   the function that will be called sometime later.  If aFunction
     *   throws when it's called, aCallback(false) is called, otherwise
     *   aCallback(true) is called.
     * @param {Function} aCallback
     *   the callback function passed to |migrate|.
     * @returns {Function}
     *   the wrapped function.
     */
    wrapMigrateFunction(aFunction: Function, aCallback: Function): Function;
    /**
     * Gets localized string corresponding to l10n-id
     *
     * @param {string} aKey
     *   The key of the id of the localization to retrieve.
     * @param {object} [aArgs=undefined]
     *   An optional map of arguments to the id.
     * @returns {Promise<string>}
     *   A promise that resolves to the retrieved localization.
     */
    getLocalizedString(aKey: string, aArgs?: object): Promise<string>;
    /**
     * Get all the rows corresponding to a select query from a database, without
     * requiring a lock on the database. If fetching data fails (because someone
     * else tried to write to the DB at the same time, for example), we will
     * retry the fetch after a 100ms timeout, up to 10 times.
     *
     * @param {string} path
     *   The file path to the database we want to open.
     * @param {string} description
     *   A developer-readable string identifying what kind of database we're
     *   trying to open.
     * @param {string} selectQuery
     *   The SELECT query to use to fetch the rows.
     * @param {Promise} [testDelayPromise]
     *   An optional promise to await for after the first loop, used in tests.
     *
     * @returns {Promise<object[]|Error>}
     *   A promise that resolves to an array of rows. The promise will be
     *   rejected if the read/fetch failed even after retrying.
     */
    getRowsFromDBWithoutLocks(path: string, description: string, selectQuery: string, testDelayPromise?: Promise<any>): Promise<object[] | Error>;
    forceExitSpinResolve(): void;
    spinResolve(promise: any): any;
    /**
     * Returns the migrator for the given source, if any data is available
     * for this source, or if permissions are required in order to read
     * data from this source. Returns null otherwise.
     *
     * @param {string} aKey
     *   Internal name of the migration source. See `availableMigratorKeys`
     *   for supported values by OS.
     * @returns {Promise<MigratorBase|null>}
     *   A profile migrator implementing nsIBrowserProfileMigrator, if it can
     *   import any data, null otherwise.
     */
    getMigrator(aKey: string): Promise<MigratorBase | null>;
    getFileMigrator(aKey: any): any;
    /**
     * Returns true if a migrator is registered with key aKey. No check is made
     * to determine if a profile exists that the migrator can migrate from.
     *
     * @param {string} aKey
     *   Internal name of the migration source. See `availableMigratorKeys`
     *   for supported values by OS.
     * @returns {boolean}
     */
    migratorExists(aKey: string): boolean;
    /**
     * Figure out what is the default browser, and if there is a migrator
     * for it, return that migrator's internal name.
     *
     * For the time being, the "internal name" of a migrator is its contract-id
     * trailer (e.g. ie for @mozilla.org/profile/migrator;1?app=browser&type=ie),
     * but it will soon be exposed properly.
     *
     * @returns {string}
     */
    getMigratorKeyForDefaultBrowser(): string;
    /**
     * True if we're in the process of a startup migration.
     *
     * @type {boolean}
     */
    get isStartupMigration(): boolean;
    /**
     * In the case of startup migration, this is set to the nsIProfileStartup
     * instance passed to ProfileMigrator's migrate.
     *
     * @see showMigrationWizard
     * @type {nsIProfileStartup|null}
     */
    get profileStartup(): any;
    /**
     * Show the migration wizard in about:preferences, or if there is not an existing
     * browser window open, in a new top-level dialog window.
     *
     * NB: If you add new consumers, please add a migration entry point constant to
     * MIGRATION_ENTRYPOINTS and supply that entrypoint with the entrypoint property
     * in the aOptions argument.
     *
     * @param {Window} [aOpener=null]
     *   optional; the window that asks to open the wizard.
     * @param {object} [aOptions=null]
     *   optional named arguments for the migration wizard.
     * @param {string} [aOptions.entrypoint=undefined]
     *   migration entry point constant. See MIGRATION_ENTRYPOINTS.
     * @param {string} [aOptions.migratorKey=undefined]
     *   The key for which migrator to use automatically. This is the key that is exposed
     *   as a static getter on the migrator class.
     * @param {MigratorBase} [aOptions.migrator=undefined]
     *   A migrator instance to use automatically.
     * @param {boolean} [aOptions.isStartupMigration=undefined]
     *   True if this is a startup migration.
     * @param {boolean} [aOptions.skipSourceSelection=undefined]
     *   True if the source selection page of the wizard should be skipped.
     * @param {string} [aOptions.profileId]
     *   An identifier for the profile to use when migrating.
     * @returns {Promise<undefined>}
     *   If an about:preferences tab can be opened, this will resolve when
     *   that tab has been switched to. Otherwise, this will resolve
     *   just after opening the top-level dialog window.
     */
    showMigrationWizard(aOpener?: Window, aOptions?: {
        entrypoint?: string;
        migratorKey?: string;
        migrator?: MigratorBase;
        isStartupMigration?: boolean;
        skipSourceSelection?: boolean;
        profileId?: string;
    }): Promise<undefined>;
    /**
     * Show the migration wizard for startup-migration.  This should only be
     * called by ProfileMigrator (see ProfileMigrator.js), which implements
     * nsIProfileMigrator. This runs asynchronously if we are running an
     * automigration.
     *
     * @param {nsIProfileStartup} aProfileStartup
     *   the nsIProfileStartup instance provided to ProfileMigrator.migrate.
     * @param {string|null} [aMigratorKey=null]
     *   If set, the migration wizard will import from the corresponding
     *   migrator, bypassing the source-selection page.  Otherwise, the
     *   source-selection page will be displayed, either with the default
     *   browser selected, if it could be detected and if there is a
     *   migrator for it, or with the first option selected as a fallback
     * @param {string|null} [aProfileToMigrate=null]
     *   If set, the migration wizard will import from the profile indicated.
     * @throws
     *   if aMigratorKey is invalid or if it points to a non-existent
     *   source.
     */
    startupMigration(aProfileStartup: nsIProfileStartup, aMigratorKey?: string | null, aProfileToMigrate?: string | null): void;
    asyncStartupMigration(aProfileStartup: any, aMigratorKey: any, aProfileToMigrate: any): Promise<void>;
    /**
     * This is only pseudo-private because some tests and helper functions
     * still expect to be able to directly access it.
     */
    _importQuantities: {
        bookmarks: number;
        logins: number;
        history: number;
        cards: number;
        extensions: number;
    };
    getImportedCount(type: any): any;
    insertBookmarkWrapper(bookmark: any): any;
    insertManyBookmarksWrapper(bookmarks: any, parent: any): any;
    insertVisitsWrapper(pageInfos: any): any;
    insertLoginsWrapper(logins: any): Promise<void>;
    /**
     * Iterates through the favicons, sniffs for a mime type,
     * and uses the mime type to properly import the favicon.
     *
     * @param {object[]} favicons
     *   An array of Objects with these properties:
     *     {Uint8Array} faviconData: The binary data of a favicon
     *     {nsIURI} uri: The URI of the associated page
     */
    insertManyFavicons(favicons: object[]): void;
    insertCreditCardsWrapper(cards: any): Promise<void>;
    /**
     * Responsible for calling the AddonManager API that ultimately installs the
     * matched add-ons.
     *
     * @param {string} migratorKey a migrator key that we pass to
     *                             `AMBrowserExtensionsImport` as the "browser
     *                             identifier" used to match add-ons
     * @param {string[]} extensionIDs a list of extension IDs from another browser
     */
    installExtensionsWrapper(migratorKey: string, extensionIDs: string[]): Promise<any[]>;
    initializeUndoData(): void;
    stopAndRetrieveUndoData(): Promise<any>;
    /**
     * Cleans up references to migrators and nsIProfileInstance instances.
     */
    finishMigration(): void;
    get availableMigratorKeys(): any[];
    get availableFileMigrators(): any[];
    /**
     * Returns an enum that should be used to record the entrypoint for
     * starting a migration.
     *
     * @returns {number}
     */
    get MIGRATION_ENTRYPOINTS(): number;
    getSourceIdForTelemetry(sourceName: any): any;
    get HISTORY_MAX_AGE_IN_MILLISECONDS(): number;
    /**
     * Determines whether or not the underlying platform supports creating
     * native file pickers that can do folder selection, which is a
     * pre-requisite for getting read-access permissions for data from other
     * browsers that we can import from.
     *
     * @returns {Promise<boolean>}
     */
    canGetPermissionsOnPlatform(): Promise<boolean>;
    #private;
}
