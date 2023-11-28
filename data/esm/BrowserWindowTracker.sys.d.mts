export namespace BrowserWindowTracker {
    let pendingWindows: Map<any, any>;
    /**
     * Get the most recent browser window.
     *
     * @param options an object accepting the arguments for the search.
     *        * private: true to restrict the search to private windows
     *            only, false to restrict the search to non-private only.
     *            Omit the property to search in both groups.
     *        * allowPopups: true if popup windows are permissable.
     */
    function getTopWindow(options?: {}): any;
    /**
     * Get a window that is in the process of loading. Only supports windows
     * opened via the `openWindow` function in this module or that have been
     * registered with the `registerOpeningWindow` function.
     *
     * @param {Object} options
     *   Options for the search.
     * @param {boolean} [options.private]
     *   true to restrict the search to private windows only, false to restrict
     *   the search to non-private only. Omit the property to search in both
     *   groups.
     *
     * @returns {Promise<Window> | null}
     */
    function getPendingWindow(options?: {
        private?: boolean;
    }): Promise<Window>;
    /**
     * Registers a browser window that is in the process of opening. Normally it
     * would be preferable to use the standard method for opening the window from
     * this module.
     *
     * @param {Window} window
     *   The opening window.
     * @param {boolean} isPrivate
     *   Whether the opening window is a private browsing window.
     */
    function registerOpeningWindow(window: Window, isPrivate: boolean): void;
    /**
     * A standard function for opening a new browser window.
     *
     * @param {Object} [options]
     *   Options for the new window.
     * @param {Window} [options.openerWindow]
     *   An existing browser window to open the new one from.
     * @param {boolean} [options.private]
     *   True to make the window a private browsing window.
     * @param {String} [options.features]
     *   Additional window features to give the new window.
     * @param {nsIArray | nsISupportsString} [options.args]
     *   Arguments to pass to the new window.
     * @param {boolean} [options.remote]
     *   A boolean indicating if the window should run remote browser tabs or
     *   not. If omitted, the window  will choose the profile default state.
     * @param {boolean} [options.fission]
     *   A boolean indicating if the window should run with fission enabled or
     *   not. If omitted, the window will choose the profile default state.
     *
     * @returns {Window}
     */
    function openWindow({ openerWindow, private: isPrivate, features, args, remote, fission, }?: {
        openerWindow?: Window;
        private?: boolean;
        features?: string;
        args?: any;
        remote?: boolean;
        fission?: boolean;
    }): Window;
    /**
     * Async version of `openWindow` waiting for delayed startup of the new
     * window before returning.
     *
     * @param {Object} [options]
     *   Options for the new window. See `openWindow` for details.
     *
     * @returns {Window}
     */
    function promiseOpenWindow(options?: any): Window;
    const windowCount: number;
    const orderedWindows: any[];
    function getAllVisibleTabs(): {
        contentTitle: any;
        browserId: any;
    }[];
    function track(window: any): void;
    function getBrowserById(browserId: any): any;
    function untrackForTestsOnly(window: any): void;
}
