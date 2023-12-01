/**
 * An XPCOM service for the WebExtension `storage.sync` API. The service manages
 * a storage area for storing and syncing extension data.
 *
 * The service configures its storage area with the database path, and hands
 * out references to the configured area via `getInterface`. It also registers
 * a shutdown blocker to automatically tear down the area.
 *
 * ## What's the difference between `storage/internal/storage-sync-area;1` and
 *    `storage/sync;1`?
 *
 * `components.conf` has two classes:
 * `@mozilla.org/extensions/storage/internal/sync-area;1` and
 * `@mozilla.org/extensions/storage/sync;1`.
 *
 * The `storage/internal/sync-area;1` class is implemented in Rust, and can be
 * instantiated using `createInstance` and `Components.Constructor`. It's not
 * a singleton, so creating a new instance will create a new `storage.sync`
 * area, with its own database connection. It's useful for testing, but not
 * meant to be used outside of this module.
 *
 * The `storage/sync;1` class is implemented in this file. It's a singleton,
 * ensuring there's only one `storage.sync` area, with one database connection.
 * The service implements `nsIInterfaceRequestor`, so callers can access the
 * storage interface like this:
 *
 *     let storageSyncArea = Cc["@mozilla.org/extensions/storage/sync;1"]
 *        .getService(Ci.nsIInterfaceRequestor)
 *        .getInterface(Ci.mozIExtensionStorageArea);
 *
 * ...And the Sync interface like this:
 *
 *    let extensionStorageEngine = Cc["@mozilla.org/extensions/storage/sync;1"]
 *       .getService(Ci.nsIInterfaceRequestor)
 *       .getInterface(Ci.mozIBridgedSyncEngine);
 *
 * @class
 */
export function StorageSyncService(): any;
export class StorageSyncService {
    _storageArea: unknown;
    _shutdownBound: () => Promise<void>;
    QueryInterface: MozQueryInterface;
    getInterface(iid: any): any;
    _shutdown(): Promise<void>;
}
export namespace StorageSyncService {
    let _singleton: any;
}
