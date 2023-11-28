/**
 * TabListComponent
 *
 * The purpose of this component is to compose the view, state, and actions.
 * It defines high level actions that act on the state and passes them to the
 * view for it to trigger during user interaction. It also subscribes the view
 * to state changes so it can rerender.
 */
export function TabListComponent({ window, store, View, SyncedTabs, clipboardHelper, getChromeWindow, }: {
    window: any;
    store: any;
    View: any;
    SyncedTabs: any;
    clipboardHelper: any;
    getChromeWindow: any;
}): void;
export class TabListComponent {
    /**
     * TabListComponent
     *
     * The purpose of this component is to compose the view, state, and actions.
     * It defines high level actions that act on the state and passes them to the
     * view for it to trigger during user interaction. It also subscribes the view
     * to state changes so it can rerender.
     */
    constructor({ window, store, View, SyncedTabs, clipboardHelper, getChromeWindow, }: {
        window: any;
        store: any;
        View: any;
        SyncedTabs: any;
        clipboardHelper: any;
        getChromeWindow: any;
    });
    _window: any;
    _store: any;
    _View: any;
    _clipboardHelper: any;
    _getChromeWindow: any;
    _SyncedTabs: any;
    get container(): any;
    init(): void;
    _view: any;
    uninit(): void;
    onFilter(query: any): void;
    onClearFilter(): void;
    onFilterFocus(): void;
    onFilterBlur(): void;
    onSelectRow(position: any): void;
    onMoveSelectionDown(): void;
    onMoveSelectionUp(): void;
    onToggleBranch(id: any): void;
    onBookmarkTab(uri: any, title: any): void;
    onOpenTab(url: any, where: any, params: any): void;
    onOpenTabs(urls: any, where: any): void;
    onCopyTabLocation(url: any): void;
    onSyncRefresh(): void;
}
