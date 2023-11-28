/**
 * Database is a tiny wrapper with the objective
 * of providing major kinto-offline-client collection API.
 * (with the objective of getting rid of kinto-offline-client)
 */
export class Database {
    static destroy(): Promise<any>;
    constructor(identifier: any);
    identifier: any;
    list(options?: {}): Promise<any>;
    importChanges(metadata: any, timestamp: any, records?: any[], options?: {}): Promise<void>;
    getLastModified(): Promise<any>;
    getMetadata(): Promise<any>;
    getAttachment(attachmentId: any): Promise<any>;
    saveAttachment(attachmentId: any, attachment: any): Promise<void>;
    /**
     * Delete all attachments which don't match any record.
     *
     * Attachments are linked to records, except when a fixed `attachmentId` is used.
     * A record can be updated or deleted, potentially by deleting a record and restoring an updated version
     * of the record with the same ID. Potentially leaving orphaned attachments in the database.
     * Since we run the pruning logic after syncing, any attachment without a
     * matching record can be discarded as they will be unreachable forever.
     *
     * @param {Array<String>} excludeIds List of attachments IDs to exclude from pruning.
     */
    pruneAttachments(excludeIds: Array<string>): Promise<number>;
    clear(): Promise<void>;
    create(record: any): Promise<any>;
    update(record: any): Promise<void>;
    delete(recordId: any): Promise<void>;
}
export namespace Database {
    export { executeIDB as _executeIDB };
    export function _cancelShutdown(): void;
    export function _shutdownHandler(): Promise<PromiseSettledResult<any>[]>;
}
/**
 * Helper to wrap some IDBObjectStore operations into a promise.
 *
 * @param {IDBDatabase} db
 * @param {String|String[]} storeNames - either a string or an array of strings.
 * @param {function} callback
 * @param {Object} options
 * @param {String} options.mode
 * @param {String} options.desc   for shutdown tracking.
 */
declare function executeIDB(storeNames: string | string[], callback: Function, options?: {
    mode: string;
    desc: string;
}): Promise<any>;
export {};
