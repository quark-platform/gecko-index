export class IndexedDB {
    /**
     * Opens the database with the given name, and returns a Promise which
     * resolves to an IndexedDB instance when the operation completes.
     *
     * @param {string} dbName
     *        The name of the database to open.
     * @param {object} options
     *        The options with which to open the database.
     * @param {integer} options.version
     *        The schema version with which the database needs to be opened. If
     *        the database does not exist, or its current schema version does
     *        not match, the `onupgradeneeded` function will be called.
     * @param {function} [onupgradeneeded]
     *        A function which will be called with an IndexedDB object as its
     *        first parameter when the database needs to be created, or its
     *        schema needs to be upgraded. If this function is not provided, the
     *        {@link #onupgradeneeded} method will be called instead.
     *
     * @returns {Promise<IndexedDB>}
     */
    static open(dbName: string, options: {
        version: integer;
    }, onupgradeneeded?: Function): Promise<IndexedDB>;
    /**
     * Opens the database for a given principal and with the given name, returns
     * a Promise which resolves to an IndexedDB instance when the operation completes.
     *
     * @param {nsIPrincipal} principal
     *        The principal to open the database for.
     * @param {string} dbName
     *        The name of the database to open.
     * @param {object} options
     *        The options with which to open the database.
     * @param {integer} options.version
     *        The schema version with which the database needs to be opened. If
     *        the database does not exist, or its current schema version does
     *        not match, the `onupgradeneeded` function will be called.
     * @param {function} [onupgradeneeded]
     *        A function which will be called with an IndexedDB object as its
     *        first parameter when the database needs to be created, or its
     *        schema needs to be upgraded. If this function is not provided, the
     *        {@link #onupgradeneeded} method will be called instead.
     *
     * @returns {Promise<IndexedDB>}
     */
    static openForPrincipal(principal: nsIPrincipal, dbName: string, options: {
        version: integer;
    }, onupgradeneeded?: Function): Promise<IndexedDB>;
    static _wrapOpenRequest(request: any, onupgradeneeded?: any): Promise<IndexedDB>;
    constructor(db: any);
    db: any;
    onupgradeneeded(): void;
    /**
     * Opens a transaction for the given object stores.
     *
     * @param {Array<string>} storeNames
     *        The names of the object stores for which to open a transaction.
     * @param {string} [mode = "readonly"]
     *        The mode in which to open the transaction.
     * @param {function} [callback]
     *        An optional callback function. If provided, the function will be
     *        called with the Transaction, and a Promise will be returned, which
     *        will resolve to the callback's return value when the transaction
     *        completes.
     * @returns {Transaction|Promise}
     */
    transaction(storeNames: Array<string>, mode?: string, callback?: Function): Transaction | Promise<any>;
    /**
     * Opens a transaction for a single object store, and returns that object
     * store.
     *
     * @param {string} storeName
     *        The name of the object store to open.
     * @param {string} [mode = "readonly"]
     *        The mode in which to open the transaction.
     * @param {function} [callback]
     *        An optional callback function. If provided, the function will be
     *        called with the ObjectStore, and a Promise will be returned, which
     *        will resolve to the callback's return value when the transaction
     *        completes.
     * @returns {ObjectStore|Promise}
     */
    objectStore(storeName: string, mode?: string, callback?: Function): ObjectStore | Promise<any>;
    createObjectStore(...args: any[]): ObjectStore;
}
declare class Transaction {
    constructor(transaction: any);
    transaction: any;
    _completionPromise: Promise<any>;
    objectStore(name: any): ObjectStore;
    /**
     * Returns a Promise which resolves when the transaction completes, or
     * rejects when a transaction error or abort occurs.
     *
     * @returns {Promise}
     */
    promiseComplete(): Promise<any>;
}
declare class ObjectStore extends Cursed {
    store: any;
    createIndex(...args: any[]): Index;
    index(...args: any[]): Index;
}
declare class Cursed {
    constructor(cursed: any);
    cursed: any;
    openCursor(...args: any[]): Promise<CursorWithValue>;
    openKeyCursor(...args: any[]): Promise<Cursor>;
}
declare class Index extends Cursed {
    constructor(index: any, objectStore: any);
    objectStore: any;
    index: any;
}
declare class CursorWithValue extends Cursor {
}
declare class Cursor {
    constructor(cursorRequest: any, source: any);
    cursorRequest: any;
    source: any;
    cursor: any;
    get done(): boolean;
    awaitRequest(): Promise<this>;
}
export {};
