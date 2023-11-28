export class TabsPanel extends TabsListBase {
    constructor(opts: any);
    view: any;
    panelMultiView: any;
    _createRow(tab: any): any;
    _setRowAttributes(row: any, tab: any): void;
    _setImageAttributes(row: any, tab: any): void;
    _onDragStart(event: any): void;
    _getTargetRowFromEvent(event: any): any;
    _isMovingTabs(event: any): boolean;
    _onDragOver(event: any): void;
    _getRowIndex(row: any): any;
    _onDrop(event: any): void;
    _onDragLeave(event: any): void;
    _onDragEnd(event: any): void;
    _updateDropTarget(event: any): boolean;
    _setDropTarget(row: any, direction: any): void;
    _clearDropTarget(): void;
    _onClick(event: any): void;
}
declare class TabsListBase {
    constructor({ className, filterFn, insertBefore, containerNode, dropIndicator, }: {
        className: any;
        filterFn: any;
        insertBefore: any;
        containerNode: any;
        dropIndicator?: any;
    });
    className: any;
    filterFn: any;
    insertBefore: any;
    containerNode: any;
    dropIndicator: any;
    dropTargetRow: any;
    dropTargetDirection: number;
    doc: any;
    gBrowser: any;
    tabToElement: Map<any, any>;
    listenersRegistered: boolean;
    get rows(): IterableIterator<any>;
    handleEvent(event: any): void;
    _selectTab(tab: any): void;
    _populate(event: any): void;
    _addElement(elementOrFragment: any): void;
    _cleanup(): void;
    _setupListeners(): void;
    _cleanupListeners(): void;
    _tabAttrModified(tab: any): void;
    _moveTab(tab: any): void;
    _addTab(newTab: any): void;
    _tabClose(tab: any): void;
    _removeItem(item: any, tab: any): void;
}
export {};
