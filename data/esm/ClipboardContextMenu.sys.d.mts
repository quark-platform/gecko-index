export namespace ClipboardContextMenu {
    let MENU_POPUP_ID: string;
    function handleEvent(aEvent: any): void;
    let _pasteMenuItemClicked: boolean;
    function onCommand(): void;
    function onPopupHiding(): void;
    let _lastBeepTime: number;
    function onKeyDown(aEvent: any): void;
    let _menupopup: any;
    let _menuitem: any;
    let _pendingRequest: any;
    function confirmUserPaste(aWindowContext: any): Promise<any>;
    function _addMenupopupEventListeners(): void;
    function _removeMenupopupEventListeners(): void;
    function _createMenupopup(aChromeDoc: any): any;
    function _getMenupopup(aChromeDoc: any): any;
    function _startWatchingForSpammyActivation(): void;
    function _stopWatchingForSpammyActivation(): void;
    let _delayTimer: any;
    function _clearDelayTimer(): void;
    function _refreshDelayTimer(): void;
}
