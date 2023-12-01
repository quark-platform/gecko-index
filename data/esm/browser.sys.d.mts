export namespace browser {
    export { Context };
}
/**
 * Variations of Marionette contexts.
 *
 * Choosing a context through the <tt>Marionette:SetContext</tt>
 * command directs all subsequent browsing context scoped commands
 * to that context.
 *
 * @class Marionette.Context
 */
export class Context {
    /**
     * Gets the correct context from a string.
     *
     * @param {string} s
     *     Context string serialisation.
     *
     * @returns {Context}
     *     Context.
     *
     * @throws {TypeError}
     *     If <var>s</var> is not a context.
     */
    static fromString(s: string): Context;
}
export namespace Context {
    let Chrome: string;
    let Content: string;
}
/**
 * Marionette representation of the {@link ChromeWindow } window state.
 */
export type WindowState = string;
export namespace WindowState {
    let Maximized: string;
    let Minimized: string;
    let Normal: string;
    let Fullscreen: string;
    /**
     * Converts {@link Window.windowState} to WindowState.
     *
     * @param {number} windowState
     *     Attribute from {@link Window.windowState}.
     *
     * @returns {WindowState}
     *     JSON representation.
     *
     * @throws {TypeError}
     *     If <var>windowState</var> was unknown.
     */
    function from(windowState: number): string;
}
declare class Context {
    /**
     * @param {ChromeWindow} window
     *     ChromeWindow that contains the top-level browsing context.
     * @param {GeckoDriver} driver
     *     Reference to driver instance.
     */
    constructor(window: ChromeWindow, driver: GeckoDriver);
    window: ChromeWindow;
    driver: GeckoDriver;
    tabBrowser: any;
    newSession: boolean;
    tab: any;
    /**
     * Returns the content browser for the currently selected tab.
     * If there is no tab selected, null will be returned.
     */
    get contentBrowser(): any;
    get messageManager(): any;
    /**
     * Checks if the browsing context has been discarded.
     *
     * The browsing context will have been discarded if the content
     * browser, represented by the <code>&lt;xul:browser&gt;</code>,
     * has been detached.
     *
     * @returns {boolean}
     *     True if browsing context has been discarded, false otherwise.
     */
    get closed(): boolean;
    /**
     * Gets the position and dimensions of the top-level browsing context.
     *
     * @returns {Map.<string, number>}
     *     Object with |x|, |y|, |width|, and |height| properties.
     */
    get rect(): Map<string, number>;
    /**
     * Retrieves the current tabmodal UI object.  According to the browser
     * associated with the currently selected tab.
     */
    getTabModal(): any;
    /**
     * Close the current window.
     *
     * @returns {Promise}
     *     A promise which is resolved when the current window has been closed.
     */
    closeWindow(): Promise<any>;
    /**
     * Focus the current window.
     *
     * @returns {Promise}
     *     A promise which is resolved when the current window has been focused.
     */
    focusWindow(): Promise<any>;
    /**
     * Open a new browser window.
     *
     * @returns {Promise}
     *     A promise resolving to the newly created chrome window.
     */
    openBrowserWindow(focus?: boolean, isPrivate?: boolean): Promise<any>;
    /**
     * Close the current tab.
     *
     * @returns {Promise}
     *     A promise which is resolved when the current tab has been closed.
     *
     * @throws UnsupportedOperationError
     *     If tab handling for the current application isn't supported.
     */
    closeTab(): Promise<any>;
    /**
     * Open a new tab in the currently selected chrome window.
     */
    openTab(focus?: boolean): Promise<any>;
    /**
     * Set the current tab.
     *
     * @param {number=} index
     *     Tab index to switch to. If the parameter is undefined,
     *     the currently selected tab will be used.
     * @param {ChromeWindow=} window
     *     Switch to this window before selecting the tab.
     * @param {boolean=} focus
     *      A boolean value which determins whether to focus
     *      the window. Defaults to true.
     *
     * @returns {Tab}
     *     The selected tab.
     *
     * @throws UnsupportedOperationError
     *     If tab handling for the current application isn't supported.
     */
    switchToTab(index?: number | undefined, window?: ChromeWindow, focus?: boolean | undefined): Tab;
    /**
     * Registers a new frame, and sets its current frame id to this frame
     * if it is not already assigned, and if a) we already have a session
     * or b) we're starting a new session and it is the right start frame.
     *
     * @param {XULBrowser} target
     *     The <xul:browser> that was the target of the originating message.
     */
    register(target: XULBrowser): void;
}
export {};
