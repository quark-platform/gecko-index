/**
 * @typedef {object} MigratorResource
 *   A resource returned by a subclass of MigratorBase that can migrate
 *   data to this browser.
 * @property {number} type
 *   A bitfield with bits from MigrationUtils.resourceTypes flipped to indicate
 *   what this resource represents. A resource can represent one or more types
 *   of data, for example HISTORY and FORMDATA.
 * @property {Function} migrate
 *   A function that will actually perform the migration of this resource's
 *   data into this browser.
 */
/**
 * Shared prototype for migrators.
 *
 * To implement a migrator:
 * 1. Import this module.
 * 2. Create a subclass of MigratorBase for your new migrator.
 * 3. Override the `key` static getter with a unique identifier for the browser
 *    that this migrator migrates from.
 * 4. If the migrator supports multiple profiles, override the sourceProfiles
 *    Here we default for single-profile migrator.
 * 5. Implement getResources(aProfile) (see below).
 * 6. For startup-only migrators, override |startupOnlyMigrator|.
 * 7. Add the migrator to the MIGRATOR_MODULES structure in MigrationUtils.sys.mjs.
 */
export class MigratorBase {
    /**
     * This must be overridden to return a simple string identifier for the
     * migrator, for example "firefox", "chrome", "opera-gx". This key is what
     * is used as an identifier when calling MigrationUtils.getMigrator.
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
     * This method should get overridden to return an icon url of the browser
     * to be imported from. By default, this will just use the default Favicon
     * image.
     *
     * @type {string}
     */
    static get brandImage(): string;
    /**
     * OVERRIDE IF AND ONLY IF the source supports multiple profiles.
     *
     * Returns array of profile objects from which data may be imported. The object
     * should have the following keys:
     *   id - a unique string identifier for the profile
     *   name - a pretty name to display to the user in the UI
     *
     * Only profiles from which data can be imported should be listed.  Otherwise
     * the behavior of the migration wizard isn't well-defined.
     *
     * For a single-profile source (e.g. safari, ie), this returns null,
     * and not an empty array.  That is the default implementation.
     *
     * @abstract
     * @returns {object[]|null}
     */
    getSourceProfiles(): object[] | null;
    /**
     * MUST BE OVERRIDDEN.
     *
     * Returns an array of "migration resources" objects for the given profile,
     * or for the "default" profile, if the migrator does not support multiple
     * profiles.
     *
     * Each migration resource should provide:
     * - a |type| getter, returning any of the migration resource types (see
     *   MigrationUtils.resourceTypes).
     *
     * - a |migrate| method, taking two arguments,
     *   aCallback(bool success, object details), for migrating the data for
     *   this resource.  It may do its job synchronously or asynchronously.
     *   Either way, it must call aCallback(bool aSuccess, object details)
     *   when it's done.  In the case of an exception thrown from |migrate|,
     *   it's taken as if aCallback(false, {}) is called. The details
     *   argument is sometimes optional, but conditional on how the
     *   migration wizard wants to display the migration state for the
     *   resource.
     *
     *   Note: In the case of a simple asynchronous implementation, you may find
     *   MigrationUtils.wrapMigrateFunction handy for handling aCallback easily.
     *
     * For each migration type listed in MigrationUtils.resourceTypes, multiple
     * migration resources may be provided.  This practice is useful when the
     * data for a certain migration type is independently stored in few
     * locations.  For example, the mac version of Safari stores its "reading list"
     * bookmarks in a separate property list.
     *
     * Note that the importation of a particular migration type is reported as
     * successful if _any_ of its resources succeeded to import (that is, called,
     * |aCallback(true, {})|).  However, completion-status for a particular migration
     * type is reported to the UI only once all of its migrators have called
     * aCallback.
     *
     * NOTE: The returned array should only include resources from which data
     * can be imported.  So, for example, before adding a resource for the
     * BOOKMARKS migration type, you should check if you should check that the
     * bookmarks file exists.
     *
     * @abstract
     * @param {object|string} aProfile
     *  The profile from which data may be imported, or an empty string
     *  in the case of a single-profile migrator.
     *  In the case of multiple-profiles migrator, it is guaranteed that
     *  aProfile is a value returned by the sourceProfiles getter (see
     *  above).
     * @returns {Promise<MigratorResource[]>|MigratorResource[]}
     */
    getResources(aProfile: object | string): Promise<MigratorResource[]> | MigratorResource[];
    /**
     * OVERRIDE in order to provide an estimate of when the last time was
     * that somebody used the browser. It is OK that this is somewhat fuzzy -
     * history may not be available (or be wiped or not present due to e.g.
     * incognito mode).
     *
     * If not overridden, the promise will resolve to the Unix epoch.
     *
     * @returns {Promise<Date>}
     *   A Promise that resolves to the last used date.
     */
    getLastUsedDate(): Promise<Date>;
    /**
     * OVERRIDE IF AND ONLY IF the migrator is a startup-only migrator (For now,
     * that is just the Firefox migrator, see bug 737381).  Default: false.
     *
     * Startup-only migrators are different in two ways:
     * - they may only be used during startup.
     * - the user-profile is half baked during migration.  The folder exists,
     *   but it's only accessible through MigrationUtils.profileStartup.
     *   The migrator can call MigrationUtils.profileStartup.doStartup
     *   at any point in order to initialize the profile.
     *
     * @returns {boolean}
     *   true if the migrator is start-up only.
     */
    get startupOnlyMigrator(): boolean;
    /**
     * Returns true if the migrator is configured to be enabled. This is
     * controlled by the `browser.migrate.<BROWSER_KEY>.enabled` boolean
     * preference.
     *
     * @returns {boolean}
     *   true if the migrator should be shown in the migration wizard.
     */
    get enabled(): boolean;
    /**
     * Subclasses should implement this if special checks need to be made to determine
     * if certain permissions need to be requested before data can be imported.
     * The returned Promise resolves to true if the required permissions have
     * been granted and a migration could proceed.
     *
     * @returns {Promise<boolean>}
     */
    hasPermissions(): Promise<boolean>;
    /**
     * Subclasses should implement this if special permissions need to be
     * requested from the user or the operating system in order to perform
     * a migration with this MigratorBase. This will be called only if
     * hasPermissions resolves to false.
     *
     * The returned Promise will resolve to true if permissions were successfully
     * obtained, and false otherwise. Implementors should ensure that if a call
     * to getPermissions resolves to true, that the MigratorBase will be able to
     * get read access to all of the resources it needs to do a migration.
     *
     * @param {DOMWindow} win
     *   The top-level DOM window hosting the UI that is requesting the permission.
     *   This can be used to, for example, anchor a file picker window to the
     *   same window that is hosting the migration UI.
     * @returns {Promise<boolean>}
     */
    getPermissions(win: DOMWindow): Promise<boolean>;
    /**
     * @returns {Promise<boolean|string>}
     */
    canGetPermissions(): Promise<boolean | string>;
    /**
     * This method returns a number that is the bitwise OR of all resource
     * types that are available in aProfile. See MigrationUtils.resourceTypes
     * for each resource type.
     *
     * @param {object|string} aProfile
     *   The profile from which data may be imported, or an empty string
     *   in the case of a single-profile migrator.
     * @returns {number}
     */
    getMigrateData(aProfile: object | string): number;
    /**
     * @see MigrationUtils
     *
     * @param {number} aItems
     *   A bitfield with bits from MigrationUtils.resourceTypes flipped to indicate
     *   what types of resources should be migrated.
     * @param {boolean} aStartup
     *   True if this migration is occurring during startup.
     * @param {object|string} aProfile
     *   The other browser profile that is being migrated from.
     * @param {Function|null} aProgressCallback
     *   An optional callback that will be fired once a resourceType has finished
     *   migrating. The callback will be passed the numeric representation of the
     *   resource type followed by a boolean indicating whether or not the resource
     *   was migrated successfully and optionally an object containing additional
     *   details.
     */
    migrate(aItems: number, aStartup: boolean, aProfile: object | string, aProgressCallback?: Function | null): Promise<void>;
    /**
     * Checks to see if one or more profiles exist for the browser that this
     * migrator migrates from.
     *
     * @returns {Promise<boolean>}
     *   True if one or more profiles exists that this migrator can migrate
     *   resources from.
     */
    isSourceAvailable(): Promise<boolean>;
    _resourcesByProfile: {};
    #private;
}
/**
 * A resource returned by a subclass of MigratorBase that can migrate
 * data to this browser.
 */
export type MigratorResource = {
    /**
     *   A bitfield with bits from MigrationUtils.resourceTypes flipped to indicate
     *   what this resource represents. A resource can represent one or more types
     *   of data, for example HISTORY and FORMDATA.
     */
    type: number;
    /**
     *   A function that will actually perform the migration of this resource's
     *   data into this browser.
     */
    migrate: Function;
};
