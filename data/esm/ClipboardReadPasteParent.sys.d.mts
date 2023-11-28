export class ClipboardReadPasteParent {
    _menupopup: any;
    _menuitem: any;
    _delayTimer: any;
    _pasteMenuItemClicked: boolean;
    _lastBeepTime: number;
    didDestroy(): void;
    handleEvent(aEvent: any): void;
    onCommand(): void;
    onPopupHiding(): void;
    onKeyDown(aEvent: any): void;
    receiveMessage(value: any): void;
    _addMenupopupEventListeners(): void;
    _removeMenupopupEventListeners(): void;
    _createMenupopup(aChromeDoc: any): any;
    _getMenupopup(): any;
    _startWatchingForSpammyActivation(): void;
    _stopWatchingForSpammyActivation(): void;
    _clearDelayTimer(): void;
    _refreshDelayTimer(): void;
}
