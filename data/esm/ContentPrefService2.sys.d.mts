export function ContentPrefService2(): any;
export class ContentPrefService2 {
    classID: any;
    _destroy(): void;
    _cache: any;
    _pbStore: any;
    _connPromise: null;
    get conn(): any;
    getByName: (name: any, context: any, callback: any) => void;
    getByDomainAndName: (group: any, name: any, context: any, callback: any) => void;
    getBySubdomainAndName: (group: any, name: any, context: any, callback: any) => void;
    getGlobal: (name: any, context: any, callback: any) => void;
    _get: (group: any, name: any, includeSubdomains: any, context: any, callback: any) => void;
    _commonGetStmt: (group: any, name: any, includeSubdomains: any) => {
        sql: any;
        cachable: boolean;
        params: {};
    };
    _stmtWithGroupClause: (group: any, includeSubdomains: any, sql: any) => {
        sql: any;
        cachable: boolean;
        params: {};
    };
    getCachedByDomainAndName: (group: any, name: any, context: any) => any;
    getCachedBySubdomainAndName: (group: any, name: any, context: any) => any[];
    getCachedGlobal: (name: any, context: any) => any;
    _getCached: (group: any, name: any, includeSubdomains: any, context: any) => any[];
    set: (group: any, name: any, value: any, context: any, callback: any) => void;
    setGlobal: (name: any, value: any, context: any, callback: any) => void;
    _set: (group: any, name: any, value: any, context: any, callback: any) => void;
    removeByDomainAndName: (group: any, name: any, context: any, callback: any) => void;
    removeBySubdomainAndName: (group: any, name: any, context: any, callback: any) => void;
    removeGlobal: (name: any, context: any, callback: any) => void;
    _remove: (group: any, name: any, includeSubdomains: any, context: any, callback: any) => void;
    _settingsAndGroupsCleanupStmts(): {
        sql: any;
        cachable: boolean;
        params: {};
    }[];
    removeByDomain: (group: any, context: any, callback: any) => void;
    removeBySubdomain: (group: any, context: any, callback: any) => void;
    removeAllGlobals: (context: any, callback: any) => void;
    _removeByDomain: (group: any, includeSubdomains: any, context: any, callback: any) => void;
    _removeAllDomainsSince: (since: any, context: any, callback: any) => void;
    removeAllDomainsSince: (since: any, context: any, callback: any) => void;
    removeAllDomains: (context: any, callback: any) => void;
    removeByName: (name: any, context: any, callback: any) => void;
    _stmt: (sql: any, cachable?: boolean) => {
        sql: any;
        cachable: boolean;
        params: {};
    };
    _execStmts: (stmts: any, callbacks: any) => Promise<void>;
    _parseGroup: (groupStr: any) => any;
    _schedule: (fn: any) => void;
    _observers: Map<any, any>;
    _genericObservers: Set<any>;
    addObserverForName(aName: any, aObserver: any): void;
    removeObserverForName(aName: any, aObserver: any): void;
    /**
     * Construct a list of observers to notify about a change to some setting,
     * putting setting-specific observers before before generic ones, so observers
     * that initialize individual settings (like the page style controller)
     * execute before observers that display multiple settings and depend on them
     * being initialized first (like the content prefs sidebar).
     */
    _getObservers(aName: any): any[];
    _notifyPrefRemoved: (aGroup: any, aName: any, aIsPrivate: any) => void;
    _notifyPrefSet: (aGroup: any, aName: any, aValue: any, aIsPrivate: any) => void;
    extractDomain: (str: any) => any;
    observe: (subj: any, topic: any, data: any) => void;
    /**
     * Removes all state from the service.  Used by tests.
     *
     * @param callback  A function that will be called when done.
     */
    _reset(callback: any): Promise<void>;
    QueryInterface: any;
    _dbVersion: number;
    _dbSchema: {
        tables: {
            groups: string;
            settings: string;
            prefs: string;
        };
        indices: {
            groups_idx: {
                table: string;
                columns: string[];
            };
            settings_idx: {
                table: string;
                columns: string[];
            };
            prefs_idx: {
                table: string;
                columns: string[];
            };
        };
    };
    _debugLog: boolean;
    log: (aMessage: any) => void;
    _getConnection(aAttemptNum?: number): any;
    _failover(aConn: any, aPath: any): Promise<void>;
    _dbMaybeInit: (aConn: any) => Promise<void>;
    _createTable: (aConn: any, aName: any) => Promise<void>;
    _createIndex: (aConn: any, aName: any) => Promise<void>;
    _dbCreateSchema: (aConn: any) => Promise<void>;
    _dbMigrate: (aConn: any, aOldVersion: any, aNewVersion: any) => Promise<void>;
    _dbMigrate1To2: (aConn: any) => Promise<void>;
    _dbMigrate2To3: (aConn: any) => Promise<void>;
    _dbMigrate3To4: (aConn: any) => Promise<void>;
    _dbMigrate4To5(conn: any): Promise<void>;
}
