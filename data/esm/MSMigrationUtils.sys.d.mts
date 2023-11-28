export namespace MSMigrationUtils {
    export let MIGRATION_TYPE_IE: number;
    export let MIGRATION_TYPE_EDGE: number;
    export { CtypesKernelHelpers };
    export function getBookmarksMigrator(migrationType?: any): Bookmarks;
    export function getWindowsVaultFormPasswordsMigrator(): WindowsVaultFormPasswords;
    export { getTypedURLs };
    export { getEdgeLocalDataFolder };
}
declare function CtypesKernelHelpers(): void;
declare class CtypesKernelHelpers {
    _structs: {};
    _functions: {};
    _libs: {};
    /**
     * Must be invoked once after last use of any of the provided helpers.
     */
    finalize(): void;
    /**
     * Converts a FILETIME struct (2 DWORDS), to a SYSTEMTIME struct,
     * and then deduces the number of seconds since the epoch (which
     * is the data we want for the cookie expiry date).
     *
     * @param {number} aTimeHi
     *        Least significant DWORD.
     * @param {number} aTimeLo
     *        Most significant DWORD.
     * @returns {number} the number of seconds since the epoch
     */
    fileTimeToSecondsSinceEpoch(aTimeHi: number, aTimeLo: number): number;
}
declare function Bookmarks(migrationType: any): void;
declare class Bookmarks {
    constructor(migrationType: any);
    _migrationType: any;
    type: any;
    get exists(): boolean;
    get importedAppLabel(): "Edge" | "IE";
    __favoritesFolder: null;
    get _favoritesFolder(): any;
    __toolbarFolderName: null;
    get _toolbarFolderName(): any;
    migrate: (aCallback: any) => Promise<any>;
    _migrateFolder(aSourceFolder: any, aDestFolderGuid: any): Promise<void>;
    /**
     * Iterates through a bookmark folder to obtain whatever information from each bookmark is needed elsewhere. This function also recurses into child folders.
     *
     * @param {nsIFile} aSourceFolder the folder to search for bookmarks and subfolders.
     * @returns {Promise<object>} An object with the following properties:
     * {Object[]} bookmarks:
     *   An array of Objects with these properties:
     *     {number} type: A type mapping to one of the types in nsINavBookmarksService
     *     {string} title: The title of the bookmark
     *     {Object[]} children: An array of objects with the same structure as this one.
     *
     * {Object[]} favicons
     *   An array of Objects with these properties:
     *     {Uint8Array} faviconData: The binary data of a favicon
     *     {nsIURI} uri: The URI of the associated bookmark
     */
    _getBookmarksInFolder(aSourceFolder: nsIFile): Promise<object>;
}
declare function WindowsVaultFormPasswords(): void;
declare class WindowsVaultFormPasswords {
    type: any;
    get exists(): boolean;
    /**
     * If aOnlyCheckExists is false, import the form passwords from the vault
     * and then call the aCallback.
     * Otherwise, check if there are passwords in the vault.
     *
     * @param {Function} aCallback - a callback called when the migration is done.
     * @param {boolean} [aOnlyCheckExists=false] - if aOnlyCheckExists is true, just check if there are some
     * passwords to migrate. Import the passwords from the vault and call aCallback otherwise.
     * @returns {boolean} true if there are passwords in the vault and aOnlyCheckExists is set to true,
     * false if there is no password in the vault and aOnlyCheckExists is set to true, undefined if
     * aOnlyCheckExists is set to false.
     */
    migrate(aCallback: Function, aOnlyCheckExists?: boolean): boolean;
}
declare function getTypedURLs(registryKeyPath: any): Map<any, any>;
declare function getEdgeLocalDataFolder(): any;
export {};
