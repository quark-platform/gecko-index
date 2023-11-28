export namespace NewTabPagePreloading {
    let MAX_COUNT: number;
    namespace browserCounts {
        export let normal: number;
        let _private: number;
        export { _private as private };
    }
    const enabled: boolean;
    /**
     * Create a browser in the right process type.
     */
    function _createBrowser(win: any): any;
    /**
     * Move the contents of a preload browser across to a different window.
     */
    function _adoptBrowserFromOtherWindow(window: any): any;
    function maybeCreatePreloadedBrowser(window: any): void;
    function getPreloadedBrowser(window: any): any;
    function removePreloadedBrowser(window: any): void;
}
