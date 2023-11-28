export namespace Sqlite {
    export let TRANSACTIONS_TIMEOUT_MS: number;
    export { openConnection };
    export { cloneStorageConnection };
    export { wrapStorageConnection };
    export const shutdown: any;
    export function failTestsOnAutoClose(enabled: any): void;
}
/**
 * Opens a connection to a SQLite database.
 *
 * The following parameters can control the connection:
 *
 *   path -- (string) The filesystem path of the database file to open. If the
 *       file does not exist, a new database will be created.
 *
 *   sharedMemoryCache -- (bool) Whether multiple connections to the database
 *       share the same memory cache. Sharing the memory cache likely results
 *       in less memory utilization. However, sharing also requires connections
 *       to obtain a lock, possibly making database access slower. Defaults to
 *       true.
 *
 *   shrinkMemoryOnConnectionIdleMS -- (integer) If defined, the connection
 *       will attempt to minimize its memory usage after this many
 *       milliseconds of connection idle. The connection is idle when no
 *       statements are executing. There is no default value which means no
 *       automatic memory minimization will occur. Please note that this is
 *       *not* a timer on the idle service and this could fire while the
 *       application is active.
 *
 *   readOnly -- (bool) Whether to open the database with SQLITE_OPEN_READONLY
 *       set. If used, writing to the database will fail. Defaults to false.
 *
 *   ignoreLockingMode -- (bool) Whether to ignore locks on the database held
 *       by other connections. If used, implies readOnly. Defaults to false.
 *       USE WITH EXTREME CAUTION. This mode WILL produce incorrect results or
 *       return "false positive" corruption errors if other connections write
 *       to the DB at the same time.
 *
 *   vacuumOnIdle -- (bool) Whether to register this connection to be vacuumed
 *       on idle by the VacuumManager component.
 *       If you're vacuum-ing an incremental vacuum database, ensure to also
 *       set incrementalVacuum to true, otherwise this will try to change it
 *       to full vacuum mode.
 *
 *   incrementalVacuum -- (bool) if set to true auto_vacuum = INCREMENTAL will
 *       be enabled for the database.
 *       Changing auto vacuum of an already populated database requires a full
 *       VACUUM. You can evaluate to enable vacuumOnIdle for that.
 *
 *   pageSize -- (integer) This allows to set a custom page size for the
 *       database. It is usually not necessary to set it, since the default
 *       value should be good for most consumers.
 *       Changing the page size of an already populated database requires a full
 *       VACUUM. You can evaluate to enable vacuumOnIdle for that.
 *
 *   testDelayedOpenPromise -- (promise) Used by tests to delay the open
 *       callback handling and execute code between asyncOpen and its callback.
 *
 * FUTURE options to control:
 *
 *   special named databases
 *   pragma TEMP STORE = MEMORY
 *   TRUNCATE JOURNAL
 *   SYNCHRONOUS = full
 *
 * @param options
 *        (Object) Parameters to control connection and open options.
 *
 * @return Promise<OpenedConnection>
 */
declare function openConnection(options: any): Promise<any>;
/**
 * Creates a clone of an existing and open Storage connection.  The clone has
 * the same underlying characteristics of the original connection and is
 * returned in form of an OpenedConnection handle.
 *
 * The following parameters can control the cloned connection:
 *
 *   connection -- (mozIStorageAsyncConnection) The original Storage connection
 *       to clone.  It's not possible to clone connections to memory databases.
 *
 *   readOnly -- (boolean) - If true the clone will be read-only.  If the
 *       original connection is already read-only, the clone will be, regardless
 *       of this option.  If the original connection is using the shared cache,
 *       this parameter will be ignored and the clone will be as privileged as
 *       the original connection.
 *   shrinkMemoryOnConnectionIdleMS -- (integer) If defined, the connection
 *       will attempt to minimize its memory usage after this many
 *       milliseconds of connection idle. The connection is idle when no
 *       statements are executing. There is no default value which means no
 *       automatic memory minimization will occur. Please note that this is
 *       *not* a timer on the idle service and this could fire while the
 *       application is active.
 *
 *
 * @param options
 *        (Object) Parameters to control connection and clone options.
 *
 * @return Promise<OpenedConnection>
 */
declare function cloneStorageConnection(options: any): Promise<any>;
/**
 * Wraps an existing and open Storage connection with Sqlite.sys.mjs API.  The
 * wrapped connection clone has the same underlying characteristics of the
 * original connection and is returned in form of an OpenedConnection handle.
 *
 * Clients are responsible for closing both the Sqlite.sys.mjs wrapper and the
 * underlying mozStorage connection.
 *
 * The following parameters can control the wrapped connection:
 *
 *   connection -- (mozIStorageAsyncConnection) The original Storage connection
 *       to wrap.
 *
 * @param options
 *        (Object) Parameters to control connection and wrap options.
 *
 * @return Promise<OpenedConnection>
 */
declare function wrapStorageConnection(options: any): Promise<any>;
export {};
