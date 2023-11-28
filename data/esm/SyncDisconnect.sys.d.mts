export namespace SyncDisconnectInternal {
    let lockRetryInterval: number;
    let lockRetryCount: number;
    let promiseDisconnectFinished: any;
    function getWeave(): any;
    function promiseNotSyncing(abortController: any): Promise<any>;
    function doSanitizeSyncData(): Promise<void>;
    function doSanitizeBrowserData(): Promise<void>;
    function doSyncAndAccountDisconnect(shouldUnlock: any): Promise<void>;
    function _startDisconnect(abortController: any, sanitizeData?: boolean): Promise<void>;
    function disconnect(sanitizeData: any): Promise<void>;
}
export namespace SyncDisconnect {
    const promiseDisconnectFinished_1: any;
    export { promiseDisconnectFinished_1 as promiseDisconnectFinished };
    export function disconnect(sanitizeData: any): Promise<void>;
}
