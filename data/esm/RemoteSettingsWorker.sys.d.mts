export const RemoteSettingsWorker: Worker;
declare class Worker {
    constructor(source: any);
    source: any;
    worker: any;
    callbacks: Map<any, any>;
    lastCallbackId: number;
    idleTimeoutId: any;
    _execute(method: any, args?: any[], options?: {}): Promise<any>;
    _onWorkerMessage(event: any): void;
    /**
     * Called at shutdown to abort anything the worker is doing that isn't
     * critical.
     */
    _abortCancelableRequests(): void;
    stop(): void;
    canonicalStringify(localRecords: any, remoteRecords: any, timestamp: any): Promise<any>;
    importJSONDump(bucket: any, collection: any): Promise<any>;
    checkFileHash(filepath: any, size: any, hash: any): Promise<any>;
    checkContentHash(buffer: any, size: any, hash: any): Promise<any>;
}
export {};
