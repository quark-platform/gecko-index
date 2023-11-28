export function SyncedTabsDeckComponent({ window, SyncedTabs, deckStore, listStore, listComponent, DeckView, getChromeWindowMock, }: {
    window: any;
    SyncedTabs: any;
    deckStore: any;
    listStore: any;
    listComponent: any;
    DeckView: any;
    getChromeWindowMock: any;
}): void;
export class SyncedTabsDeckComponent {
    constructor({ window, SyncedTabs, deckStore, listStore, listComponent, DeckView, getChromeWindowMock, }: {
        window: any;
        SyncedTabs: any;
        deckStore: any;
        listStore: any;
        listComponent: any;
        DeckView: any;
        getChromeWindowMock: any;
    });
    _window: any;
    _SyncedTabs: any;
    _DeckView: any;
    _getChromeWindow: any;
    _deckStore: any;
    _syncedTabsListStore: any;
    tabListComponent: any;
    PANELS: {
        TABS_CONTAINER: string;
        TABS_FETCHING: string;
        LOGIN_FAILED: string;
        NOT_AUTHED_INFO: string;
        SYNC_DISABLED: string;
        SINGLE_DEVICE_INFO: string;
        TABS_DISABLED: string;
        UNVERIFIED: string;
    };
    get container(): any;
    init(): void;
    _deckView: any;
    uninit(): void;
    observe(subject: any, topic: any, data: any): void;
    getPanelStatus(): Promise<string>;
    updateDir(): void;
    updatePanel(): Promise<any>;
    openSyncPrefs(): void;
    openConnectDevice(): void;
}
