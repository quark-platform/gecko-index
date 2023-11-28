/**
 * SyncedTabsListStore
 *
 * Instances of this store encapsulate all of the state associated with a synced tabs list view.
 * The state includes the clients, their tabs, the row that is currently selected,
 * and the filtered query.
 */
export function SyncedTabsListStore(SyncedTabs: any): void;
export class SyncedTabsListStore {
    /**
     * SyncedTabsListStore
     *
     * Instances of this store encapsulate all of the state associated with a synced tabs list view.
     * The state includes the clients, their tabs, the row that is currently selected,
     * and the filtered query.
     */
    constructor(SyncedTabs: any);
    _SyncedTabs: any;
    data: any[];
    _closedClients: {};
    _selectedRow: number[];
    filter: string;
    inputFocused: boolean;
}
