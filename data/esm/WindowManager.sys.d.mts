export const windowManager: WindowManager;
/**
 * Provides helpers to interact with Window objects.
 *
 * @class WindowManager
 */
declare class WindowManager {
    _chromeWindowHandles: WeakMap<WeakKey, any>;
    get chromeWindowHandles(): string[];
    get windows(): nsISimpleEnumeratorType;
    /**
     * Find a specific window matching the provided window handle.
     *
     * @param {string} handle
     *     The unique handle of either a chrome window or a content browser, as
     *     returned by :js:func:`#getIdForBrowser` or :js:func:`#getIdForWindow`.
     *
     * @returns {object} A window properties object,
     *     @see :js:func:`GeckoDriver#getWindowProperties`
     */
    findWindowByHandle(handle: string): object;
    /**
     * A set of properties describing a window and that should allow to uniquely
     * identify it. The described window can either be a Chrome Window or a
     * Content Window.
     *
     * @typedef {object} WindowProperties
     * @property {Window} win - The Chrome Window containing the window.
     *     When describing a Chrome Window, this is the window itself.
     * @property {string} id - The unique id of the containing Chrome Window.
     * @property {boolean} hasTabBrowser - `true` if the Chrome Window has a
     *     tabBrowser.
     * @property {number} tabIndex - Optional, the index of the specific tab
     *     within the window.
     */
    /**
     * Returns a WindowProperties object, that can be used with :js:func:`GeckoDriver#setWindowHandle`.
     *
     * @param {Window} win
     *     The Chrome Window for which we want to create a properties object.
     * @param {object} options
     * @param {number} options.tabIndex
     *     Tab index of a specific Content Window in the specified Chrome Window.
     * @returns {WindowProperties} A window properties object.
     */
    getWindowProperties(win: Window, options?: {
        tabIndex: number;
    }): {
        /**
         * - The Chrome Window containing the window.
         * When describing a Chrome Window, this is the window itself.
         */
        win: Window;
        /**
         * - The unique id of the containing Chrome Window.
         */
        id: string;
        /**
         * - `true` if the Chrome Window has a
         * tabBrowser.
         */
        hasTabBrowser: boolean;
        /**
         * - Optional, the index of the specific tab
         * within the window.
         */
        tabIndex: number;
    };
    /**
     * Retrieves an id for the given chrome window. The id is a dynamically
     * generated uuid associated with the window object.
     *
     * @param {window} win
     *     The window object for which we want to retrieve the id.
     * @returns {string} The unique id for this chrome window.
     */
    getIdForWindow(win: Window & typeof globalThis): string;
    /**
     * Close the specified window.
     *
     * @param {window} win
     *     The window to close.
     * @returns {Promise}
     *     A promise which is resolved when the current window has been closed.
     */
    closeWindow(win: Window & typeof globalThis): Promise<any>;
    /**
     * Focus the specified window.
     *
     * @param {window} win
     *     The window to focus.
     * @returns {Promise}
     *     A promise which is resolved when the window has been focused.
     */
    focusWindow(win: Window & typeof globalThis): Promise<any>;
    /**
     * Open a new browser window.
     *
     * @param {object=} options
     * @param {boolean=} options.focus
     *     If true, the opened window will receive the focus. Defaults to false.
     * @param {boolean=} options.isPrivate
     *     If true, the opened window will be a private window. Defaults to false.
     * @param {ChromeWindow=} options.openerWindow
     *     Use this window as the opener of the new window. Defaults to the
     *     topmost window.
     * @returns {Promise}
     *     A promise resolving to the newly created chrome window.
     */
    openBrowserWindow(options?: object | undefined): Promise<any>;
    /**
     * Wait until the initial application window has been opened and loaded.
     *
     * @returns {Promise<WindowProxy>}
     *     A promise that resolved to the application window.
     */
    waitForInitialApplicationWindowLoaded(): Promise<WindowProxy>;
}
export {};
