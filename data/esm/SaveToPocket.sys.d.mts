export namespace SaveToPocket {
    function init(): void;
    function observe(subject: any, topic: any, data: any): void;
    namespace _readerButtonData {
        let id: string;
        let l10nId: string;
        let telemetryId: string;
        let image: string;
    }
    function onPrefChange(pref: any, oldValue: any, newValue: any): void;
    function updateToolbarNodeState(browserWindow: any): void;
    const innerWindowIDsByBrowser: WeakMap<object, any>;
    function onLocationChange(browserWindow: any): void;
    /**
     * Functions related to the Pocket panel UI.
     */
    function onShownInToolbarPanel(panel: any, frame: any): void;
    function itemSaved(): void;
    function itemDeleted(): void;
    function updateElements(enabled: any): void;
    function updateElementsInWindow(win: any, enabled: any): void;
    function receiveMessage(message: any): void;
}
