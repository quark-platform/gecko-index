export function TabListView(window: any, props: any): void;
export class TabListView {
    constructor(window: any, props: any);
    props: any;
    _window: any;
    _doc: any;
    _tabsContainerTemplate: any;
    _clientTemplate: any;
    _emptyClientTemplate: any;
    _tabTemplate: any;
    tabsFilter: any;
    container: any;
    render(state: any): void;
    _create(state: any): void;
    list: any;
    _createList(state: any): void;
    destroy(): void;
    _update(state: any): void;
    _renderFilteredClient(client: any, filter: any): void;
    _updateLastSyncTitle(lastModified: any, itemNode: any): void;
    _renderClient(client: any): any;
    _renderTab(client: any, tab: any, index: any): any;
    _createClient(): any;
    _createEmptyClient(): any;
    _createTab(): any;
    _clearChilden(node: any): void;
    _attachFixedListeners(): void;
    _attachListListeners(): void;
    _updateSearchBox(state: any): void;
    /**
     * Update the element representing an item, ensuring it's in sync with the
     * underlying data.
     *
     * @param {client} item - Item to use as a source.
     * @param {Element} itemNode - Element to update.
     */
    _updateClient(item: client, itemNode: Element): void;
    /**
     * Update the element representing a tab, ensuring it's in sync with the
     * underlying data.
     *
     * @param {tab} item - Item to use as a source.
     * @param {Element} itemNode - Element to update.
     */
    _updateTab(item: tab, itemNode: Element, index: any): void;
    onMouseUp(event: any): void;
    onClick(event: any): void;
    /**
     * Handle a keydown event on the list box.
     *
     * @param {Event} event - Triggering event.
     */
    onKeyDown(event: Event): void;
    onBookmarkTab(): void;
    onCopyTabLocation(): void;
    onOpenSelected(url: any, event: any): void;
    onOpenSelectedFromContextMenu(event: any): void;
    onOpenSelectedInContainerTab(event: any): void;
    onOpenAllInTabs(): void;
    onFilter(event: any): void;
    onFilterFocus(): void;
    onFilterBlur(): void;
    _getSelectedTabNode(): any;
    _getSelectedClientNode(): any;
    _setupContextMenu(): void;
    _teardownContextMenu(): void;
    handleEvent(event: any): void;
    handleTabsFilterContextMenuShown(event: any): void;
    handleContentContextMenuCommand(event: any): void;
    handleTabsFilterContextMenuCommand(event: any): void;
    handleContextMenu(event: any): void;
    adjustContextMenu(menu: any): void;
    /**
     * Find the parent item element, from a given child element.
     *
     * @param {Element} node - Child element.
     * @returns {Element} Element for the item, or null if not found.
     */
    _findParentItemNode(node: Element): Element;
    _findParentBranchNode(node: any): any;
    _getSelectionPosition(itemNode: any): any[];
    _indexOfNode(parent: any, child: any): any;
    _isTab(item: any): any;
    _isClient(item: any): any;
    _openAllClientTabs(clientNode: any, where: any): void;
}
