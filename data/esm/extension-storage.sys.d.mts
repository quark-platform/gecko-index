export function ExtensionStorageEngineBridge(service: any): void;
export class ExtensionStorageEngineBridge {
    constructor(service: any);
    component: any;
    _bridge: any;
    syncPriority: number;
    overrideTelemetryName: string;
    _notifyPendingChanges(): Promise<any>;
    _takeMigrationInfo(): Promise<any>;
    _syncStartup(): Promise<any>;
    _processIncoming(): Promise<void>;
    set enabled(enabled: any);
    get enabled(): any;
}
/**
 *****************************************************************************
 *
 * Deprecated support for Kinto
 *
 *****************************************************************************
 */
/**
 * The Engine that manages syncing for the web extension "storage"
 * API, and in particular ext.storage.sync.
 *
 * ext.storage.sync is implemented using Kinto, so it has mechanisms
 * for syncing that we do not need to integrate in the Firefox Sync
 * framework, so this is something of a stub.
 */
export function ExtensionStorageEngineKinto(service: any): void;
export class ExtensionStorageEngineKinto {
    /**
     *****************************************************************************
     *
     * Deprecated support for Kinto
     *
     *****************************************************************************
     */
    /**
     * The Engine that manages syncing for the web extension "storage"
     * API, and in particular ext.storage.sync.
     *
     * ext.storage.sync is implemented using Kinto, so it has mechanisms
     * for syncing that we do not need to integrate in the Firefox Sync
     * framework, so this is something of a stub.
     */
    constructor(service: any);
    _trackerObj: typeof ExtensionStorageTracker;
    _storeObj: undefined;
    _recordObj: undefined;
    syncPriority: number;
    allowSkippedRecord: boolean;
    _sync(): Promise<any>;
    set enabled(enabled: any);
    get enabled(): any;
    _wipeClient(): any;
    shouldSkipSync(syncReason: any): boolean;
}
declare function ExtensionStorageTracker(name: any, engine: any): void;
declare class ExtensionStorageTracker {
    constructor(name: any, engine: any);
    _ignoreAll: boolean;
    set ignoreAll(value: any);
    get ignoreAll(): any;
    onStart(): void;
    onStop(): void;
    observe(subject: any, topic: any, data: any): Promise<void>;
}
export {};
