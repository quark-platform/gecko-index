export namespace SyncedTabs {
    export { SyncedTabsInternal as _internal };
    export { TOPIC_TABS_CHANGED };
    export { TABS_FRESH_ENOUGH_INTERVAL_SECONDS };
    export const isConfiguredToSyncTabs: any;
    export const hasSyncedThisSession: any;
    export function getTabClients(query: any): Promise<any[]>;
    export function syncTabs(force: any): Promise<boolean>;
    export function sortTabClientsByLastUsed(clients: any): void;
    export function recordSyncedTabsTelemetry(object: any, tabEvent: any, extraOptions: any): void;
    export function getRecentTabs(maxCount: any, extraParams: any): Promise<any>;
}
declare namespace SyncedTabsInternal {
    export function _makeTab(client: any, tab: any, url: any, showRemoteIcons: any): Promise<{
        type: string;
        title: any;
        url: any;
        icon: any;
        client: any;
        lastUsed: any;
    }>;
    export function _makeClient(client: any): Promise<{
        id: any;
        type: string;
        name: any;
        clientType: any;
        lastModified: number;
        tabs: any[];
    }>;
    export function _tabMatchesFilter(tab: any, filter: any): boolean;
    export function _createRecentTabsList(clients: any, maxCount: any, extraParams?: {
        removeAllDupes: boolean;
        removeDeviceDupes: boolean;
    }): any;
    export function _filterRecentTabsDupes(tabs: any): any;
    export function getTabClients(filter: any): Promise<any[]>;
    export function syncTabs(force: any): Promise<boolean>;
    export function observe(subject: any, topic: any, data: any): void;
    const isConfiguredToSyncTabs_1: any;
    export { isConfiguredToSyncTabs_1 as isConfiguredToSyncTabs };
    const hasSyncedThisSession_1: any;
    export { hasSyncedThisSession_1 as hasSyncedThisSession };
}
declare const TOPIC_TABS_CHANGED: "services.sync.tabs.changed";
declare const TABS_FRESH_ENOUGH_INTERVAL_SECONDS: 30;
export {};
