export class SharedDataMap {
    constructor(sharedDataKey: any, options?: {
        isParent: boolean;
    });
    _sharedDataKey: any;
    _isParent: boolean;
    _isReady: boolean;
    _readyDeferred: any;
    _data: any;
    init(): Promise<void>;
    get sharedDataKey(): any;
    get isParent(): boolean;
    ready(): any;
    get(key: any): any;
    set(key: any, value: any): void;
    /**
     * Replace the stored data with an updated filtered dataset for cleanup
     * purposes. We don't notify of update because we're only filtering out
     * old unused entries.
     *
     * @param {string[]} keysToRemove - list of keys to remove from the persistent store
     */
    _removeEntriesByKeys(keysToRemove: string[]): void;
    _deleteForTests(key: any): void;
    has(key: any): boolean;
    /**
     * Notify store listeners of updates
     * Called both from Main and Content process
     */
    _notifyUpdate(process?: string): void;
    _syncToChildren({ flush }?: {
        flush?: boolean;
    }): void;
    _syncFromParent(): void;
    _checkIfReady(): void;
    handleEvent(event: any): void;
}
