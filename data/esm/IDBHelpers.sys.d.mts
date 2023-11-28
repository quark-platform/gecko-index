export namespace IDBHelpers {
    export { bulkOperationHelper };
    export { executeIDB };
    export { openIDB };
    export { destroyIDB };
    export { IndexedDBError };
    export { ShutdownError };
}
declare function bulkOperationHelper(store: any, { reject, completion }: {
    reject: any;
    completion: any;
}, operation: any, list: any, listIndex?: number): void;
/**
 * Helper to wrap some IDBObjectStore operations into a promise.
 *
 * @param {IDBDatabase} db
 * @param {String|String[]} storeNames - either a string or an array of strings.
 * @param {String} mode
 * @param {function} callback
 * @param {String} description of the operation for error handling purposes.
 */
declare function executeIDB(db: IDBDatabase, storeNames: string | string[], mode: string, callback: Function, desc: any): {
    promise: Promise<any>;
    transaction: IDBTransaction;
};
/**
 * Helper to wrap indexedDB.open() into a promise.
 */
declare function openIDB(allowUpgrades?: boolean): Promise<any>;
declare function destroyIDB(): Promise<any>;
/**
 * Wrap IndexedDB errors to catch them more easily.
 */
declare class IndexedDBError extends Error {
    constructor(error: any, method?: string, identifier?: string);
    name: any;
    stack: any;
}
declare class ShutdownError extends IndexedDBError {
}
export {};
