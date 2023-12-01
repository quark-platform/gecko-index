export class TalosTabSwitchParent extends JSWindowActorParent {
    receiveMessage(message: any): Promise<{
        times: number[];
        urls: any[];
    }>;
    /**
     * Returns a Promise that resolves when browser-delayed-startup-finished
     * fires for a given window
     *
     * @param win
     *        The window that we're waiting for the notification for.
     * @returns Promise
     */
    waitForDelayedStartup(win: any): Promise<any>;
    /**
     * For some <xul:tabbrowser>, loads a collection of URLs as new tabs
     * in that browser.
     *
     * @param gBrowser (<xul:tabbrowser>)
     *        The <xul:tabbrowser> in which to load the new tabs.
     * @param urls (Array)
     *        An array of URL strings to be loaded as new tabs.
     * @returns Promise
     *        Resolves once all tabs have finished loading.
     */
    loadTabs(gBrowser: any, urls: any): Promise<any>;
    /**
     * For some <xul:tab> in a browser window, have that window switch
     * to that tab. Returns a Promise that resolves ones the tab content
     * has been presented to the user.
     */
    switchToTab(tab: any): Promise<number>;
    /**
     * For some <xul:browser>, find the <xul:tabbrowser> associated with it,
     * and wait until that tabbrowser has finished a tab switch. This function
     * assumes a tab switch has started, or is about to start.
     *
     * @param browser (<xul:browser>)
     *        The browser whose tabbrowser we expect to be involved in a tab
     *        switch.
     * @returns Promise
     *        Resolves once the TabSwitchDone event is fired.
     */
    waitForTabSwitchDone(browser: any): Promise<any>;
    /**
     * For some <xul:browser>, returns a Promise that resolves once its
     * content has been presented to the user.
     *
     * @param browser (<xul:browser>)
     *        The browser we expect to be presented.
     *
     * @returns Promise
     *        Resolves once the content has been presented. Resolves to
     *        the system time that the presentation occurred at, in
     *        milliseconds since midnight 01 January, 1970 UTC.
     */
    waitForContentPresented(browser: any): Promise<any>;
    /**
     * Do a garbage collect in the parent, and then a garbage
     * collection in the content process that the actor is
     * running in.
     *
     * @returns Promise
     *        Resolves once garbage collection has been completed in the
     *        parent, and the content process for the actor.
     */
    forceGC(win: any): Promise<any>;
    /**
     * Given some host window, open a new window, browser its initial tab to
     * about:blank, then load up our set of testing URLs. Once they've all finished
     * loading, switch through each tab, recording their tab switch times. Finally,
     * report the results.
     *
     * @param window
     *        A host window. Primarily, we just use this for the OpenBrowserWindow
     *        function defined in that window.
     * @returns Promise
     */
    test(window: any): Promise<{
        times: number[];
        urls: any[];
    }>;
}
