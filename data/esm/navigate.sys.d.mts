export namespace navigate {
    /**
     * Determines if we expect to get a DOM load event (DOMContentLoaded)
     * on navigating to the <code>future</code> URL.
     *
     * @param {URL} current
     *     URL the browser is currently visiting.
     * @param {object} options
     * @param {BrowsingContext=} options.browsingContext
     *     The current browsing context. Needed for targets of _parent and _top.
     * @param {URL=} options.future
     *     Destination URL, if known.
     * @param {target=} options.target
     *     Link target, if known.
     *
     * @returns {boolean}
     *     Full page load would be expected if future is followed.
     *
     * @throws TypeError
     *     If <code>current</code> is not defined, or any of
     *     <code>current</code> or <code>future</code>  are invalid URLs.
     */
    function isLoadEventExpected(current: URL, options?: {
        browsingContext?: BrowsingContext;
        future?: URL;
        target?: any;
    }): boolean;
    /**
     * Load the given URL in the specified browsing context.
     *
     * @param {CanonicalBrowsingContext} browsingContext
     *     Browsing context to load the URL into.
     * @param {string} url
     *     URL to navigate to.
     */
    function navigateTo(browsingContext: CanonicalBrowsingContext, url: string): Promise<void>;
    /**
     * Reload the page.
     *
     * @param {CanonicalBrowsingContext} browsingContext
     *     Browsing context to refresh.
     */
    function refresh(browsingContext: CanonicalBrowsingContext): Promise<void>;
    /**
     * Execute a callback and wait for a possible navigation to complete
     *
     * @param {GeckoDriver} driver
     *     Reference to driver instance.
     * @param {Function} callback
     *     Callback to execute that might trigger a navigation.
     * @param {object} options
     * @param {BrowsingContext=} options.browsingContext
     *     Browsing context to observe. Defaults to the current browsing context.
     * @param {boolean=} options.loadEventExpected
     *     If false, return immediately and don't wait for
     *     the navigation to be completed. Defaults to true.
     * @param {boolean=} options.requireBeforeUnload
     *     If false and no beforeunload event is fired, abort waiting
     *     for the navigation. Defaults to true.
     */
    function waitForNavigationCompleted(driver: GeckoDriver, callback: Function, options?: {
        browsingContext?: BrowsingContext;
        loadEventExpected?: boolean;
        requireBeforeUnload?: boolean;
    }): Promise<any>;
}
