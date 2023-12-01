export function TabEngine(service: any): void;
export class TabEngine {
    constructor(service: any);
    _trackerObj: typeof TabTracker;
    syncPriority: number;
    prepareTheBridge(isQuickWrite: any): Promise<void>;
    _syncStartup(): Promise<void>;
    initialize(): Promise<void>;
    _rustStore: any;
    _bridge: any;
    getChangedIDs(): Promise<{}>;
    getAllClients(): Promise<any[]>;
    removeClientData(): Promise<void>;
    trackRemainingChanges(): Promise<void>;
    getTabsWithinPayloadSize(): Promise<{
        title: any;
        urlHistory: any[];
        icon: string;
        lastUsed: number;
    }[]>;
    _engineLock: any;
    _engineLocked: boolean;
    get locked(): boolean;
    lock(): boolean;
    unlock(): void;
    quickWrite(): Promise<any>;
    _doQuickWrite(): Promise<boolean>;
    _sync(): Promise<void>;
}
export namespace TabProvider {
    function getWindowEnumerator(): nsISimpleEnumeratorType;
    function shouldSkipWindow(win: any): any;
    function getAllBrowserTabs(): any[];
    function getAllTabsWithEstimatedMax(filter: any, bytesMax: any): Promise<{
        title: any;
        urlHistory: any[];
        icon: string;
        lastUsed: number;
    }[]>;
}
declare function TabTracker(name: any, engine: any): void;
declare class TabTracker {
    constructor(name: any, engine: any);
    onTab: any;
    _unregisterListeners: any;
    QueryInterface: MozQueryInterface;
    clearChangedIDs(): void;
    modified: boolean;
    _topics: string[];
    _registerListenersForWindow(window: any): void;
    _unregisterListenersForWindow(window: any): void;
    onStart(): void;
    onStop(): void;
    observe(subject: any, topic: any, data: any): Promise<void>;
    onLocationChange(webProgress: any, request: any, locationURI: any, flags: any): void;
    callScheduleSync(scoreIncrement: any): void;
}
export {};
