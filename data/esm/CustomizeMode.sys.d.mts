export function CustomizeMode(aWindow: any): void;
export class CustomizeMode {
    constructor(aWindow: any);
    window: null;
    document: null;
    browser: any;
    areas: null;
    _translationObserver: any;
    visiblePalette: any;
    pongArena: any;
    _changed: boolean;
    _transitioning: boolean;
    _stowedPalette: null;
    _dragOverItem: null;
    _customizing: boolean;
    _skipSourceNodeCheck: null;
    _mainViewContext: null;
    _enabledCommands: Set<string>;
    get _handler(): any;
    uninit(): void;
    $(id: any): any;
    toggle(): void;
    _wantToBeInCustomizeMode: any;
    setTab(aTab: any): void;
    enter(): void;
    _previousPanelContextMenuParent: any;
    exit(): void;
    /**
     * The overflow panel in customize mode should have its arrow pointing
     * at the overflow button. In order to do this correctly, we pass the
     * distance between the inside of window and the middle of the button
     * to the customize mode markup in which the arrow and panel are placed.
     */
    _updateOverflowPanelArrowOffset(): Promise<void>;
    _getCustomizableChildForNode(aNode: any): any;
    _promiseWidgetAnimationOut(aNode: any): Promise<any>;
    addToToolbar(aNode: any, aReason: any): Promise<void>;
    addToPanel(aNode: any, aReason: any): Promise<void>;
    removeFromArea(aNode: any, aReason: any): Promise<void>;
    populatePalette(): void;
    makePaletteItem(aWidget: any, aPlace: any): any;
    _depopulatePalette(): void;
    _updateCommandsDisabledState(shouldBeDisabled: any): void;
    isCustomizableItem(aNode: any): boolean;
    isWrappedToolbarItem(aNode: any): boolean;
    deferredWrapToolbarItem(aNode: any, aPlace: any): Promise<any>;
    wrapToolbarItem(aNode: any, aPlace: any): any;
    /**
     * Helper to set the label, either directly or to set up the translation
     * observer so we can set the label once it's available.
     */
    _updateWrapperLabel(aNode: any, aIsUpdate: any, aWrapper?: any): void;
    /**
     * Called when a node without a label or title is updated.
     */
    _onTranslations(aMutations: any): void;
    createOrUpdateWrapper(aNode: any, aPlace: any, aIsUpdate: any): any;
    deferredUnwrapToolbarItem(aWrapper: any): Promise<any>;
    unwrapToolbarItem(aWrapper: any): any;
    _wrapToolbarItem(aArea: any): Promise<any>;
    _wrapToolbarItemSync(aArea: any): any;
    _wrapToolbarItems(): Promise<void>;
    _addDragHandlers(aTarget: any): void;
    _wrapItemsInArea(target: any): void;
    _removeDragHandlers(aTarget: any): void;
    _unwrapItemsInArea(target: any): void;
    _unwrapToolbarItems(): Promise<void>;
    reset(): Promise<void>;
    resetting: boolean;
    _moveDownloadsButtonToNavBar: boolean;
    undoReset(): Promise<void>;
    _onToolbarVisibilityChange(aEvent: any): void;
    onWidgetMoved(aWidgetId: any, aArea: any, aOldPosition: any, aNewPosition: any): void;
    onWidgetAdded(aWidgetId: any, aArea: any, aPosition: any): void;
    onWidgetRemoved(aWidgetId: any, aArea: any): void;
    onWidgetBeforeDOMChange(aNodeToChange: any, aSecondaryNode: any, aContainer: any): void;
    onWidgetAfterDOMChange(aNodeToChange: any, aSecondaryNode: any, aContainer: any): void;
    onWidgetDestroyed(aWidgetId: any): void;
    onWidgetAfterCreation(aWidgetId: any, aArea: any): void;
    onAreaNodeRegistered(aArea: any, aContainer: any): void;
    onAreaNodeUnregistered(aArea: any, aContainer: any, aReason: any): void;
    openAddonsManagerThemes(): void;
    getMoreThemes(aEvent: any): void;
    updateUIDensity(mode: any): void;
    setUIDensity(mode: any): void;
    resetUIDensity(): void;
    onUIDensityMenuShowing(): void;
    updateAutoTouchMode(checked: any): void;
    _onUIChange(): void;
    _updateEmptyPaletteNotice(): void;
    _updateResetButton(): void;
    _updateUndoResetButton(): void;
    _updateTouchBarButton(): void;
    _updateDensityMenu(): void;
    handleEvent(aEvent: any): void;
    /**
     * We handle dragover/drop on the outer palette separately
     * to avoid overlap with other drag/drop handlers.
     */
    _setupPaletteDragging(): void;
    paletteDragHandler: (aEvent: any) => void;
    _teardownPaletteDragging(): void;
    observe(aSubject: any, aTopic: any, aData: any): void;
    onInstalled(addon: any): Promise<void>;
    onEnabled(addon: any): Promise<void>;
    _nextThemeChangeUserTriggered: boolean;
    _canDrawInTitlebar(): any;
    _ensureCustomizationPanels(): void;
    _updateTitlebarCheckbox(): void;
    toggleTitlebar(aShouldShowTitlebar: any): void;
    _getBoundsWithoutFlushing(element: any): any;
    _onDragStart(aEvent: any): void;
    _dragOffset: {
        x: number;
        y: number;
    };
    _initializeDragAfterMove: any;
    _dragInitializeTimeout: any;
    _onDragOver(aEvent: any, aOverrideTarget: any): void;
    _onDragDrop(aEvent: any, aOverrideTarget: any): void;
    _dragSizeMap: WeakMap<WeakKey, any>;
    _applyDrop(aEvent: any, aTargetArea: any, aOriginArea: any, aDraggedItemId: any, aTargetNode: any): void;
    _onDragLeave(aEvent: any): void;
    /**
     * To workaround bug 460801 we manually forward the drop event here when dragend wouldn't be fired.
     *
     * Note that that means that this function may be called multiple times by a single drag operation.
     */
    _onDragEnd(aEvent: any): void;
    _isUnwantedDragDrop(aEvent: any): boolean;
    _setDragActive(aItem: any, aValue: any, aDraggedItemId: any, aAreaType: any): void;
    _cancelDragActive(aItem: any, aNextItem: any, aNoTransition: any): void;
    _setGridDragActive(aDragOverNode: any, aDraggedItem: any, aValue: any): void;
    _getDragItemSize(aDragOverNode: any, aDraggedItem: any): any;
    _getCustomizableParent(aElement: any): any;
    _getDragOverNode(aEvent: any, aAreaElement: any, aAreaType: any, aDraggedItemId: any): any;
    _onMouseDown(aEvent: any): void;
    _onMouseUp(aEvent: any): void;
    _getWrapper(aElement: any): any;
    _findVisiblePreviousSiblingNode(aReferenceNode: any): any;
    onPaletteContextMenuShowing(event: any): void;
    onPanelContextMenuShowing(event: any): void;
    _checkForDownloadsClick(event: any): void;
    _setupDownloadAutoHideToggle(): void;
    _teardownDownloadAutoHideToggle(): void;
    _maybeMoveDownloadsButtonToNavBar(): void;
    _showDownloadsAutoHidePanel(): Promise<void>;
    onDownloadsAutoHideChange(event: any): void;
    customizeTouchBar(): void;
    togglePong(enabled: any): void;
    uninitWhimsy: any;
    whimsypong(): any;
}
