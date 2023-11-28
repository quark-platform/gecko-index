export namespace EveryWindow {
    function registerCallback(id: string, init: Function, uninit: Function): boolean;
    function unregisterCallback(id: string, callUninit?: boolean): void;
}
