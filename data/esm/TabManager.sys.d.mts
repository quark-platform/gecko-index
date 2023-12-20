export const TabManager: TabManagerClass;
declare class TabManagerClass {
    /**
     * Retrieve all the browser elements from tabs as contained in open windows.
     *
     * @returns {Array<XULBrowser>}
     *     All the found <xul:browser>s. Will return an empty array if
     *     no windows and tabs can be found.
     */
    get browsers(): XULBrowser[];
    get windows(): nsISimpleEnumeratorType;
    /**
     * Array of unique browser ids (UUIDs) for all content browsers of all
     * windows.
     *
     * TODO: Similarly to getBrowserById, we should improve the performance of
     * this getter in Bug 1750065.
     *
     * @returns {Array<string>}
     *     Array of UUIDs for all content browsers.
     */
    get allBrowserUniqueIds(): string[];
    /**
     * Get the <code>&lt;xul:browser&gt;</code> for the specified tab.
     *
     * @param {Tab} tab
     *     The tab whose browser needs to be returned.
     *
     * @returns {XULBrowser}
     *     The linked browser for the tab or null if no browser can be found.
     */
    getBrowserForTab(tab: Tab): XULBrowser;
    /**
     * Return the tab browser for the specified chrome window.
     *
     * @param {ChromeWindow} win
     *     Window whose <code>tabbrowser</code> needs to be accessed.
     *
     * @returns {Tab}
     *     Tab browser or null if it's not a browser window.
     */
    getTabBrowser(win: ChromeWindow): Tab;
    /**
     * Create a new tab.
     *
     * @param {object} options
     * @param {boolean=} options.focus
     *     Set to true if the new tab should be focused (selected). Defaults to
     *     false. `false` value is not properly supported on Android, additional
     *     focus of previously selected tab is required after initial navigation.
     * @param {Tab=} options.referenceTab
     *     The reference tab after which the new tab will be added. If no
     *     reference tab is provided, the new tab will be added after all the
     *     other tabs.
     * @param {number} options.userContextId
     *     The user context (container) id.
     * @param {window=} options.window
     *     The window where the new tab will open. Defaults to Services.wm.getMostRecentWindow
     *     if no window is provided. Will be ignored if referenceTab is provided.
     */
    addTab(options?: {
        focus?: boolean | undefined;
        referenceTab?: Tab | undefined;
        userContextId: number;
        window?: any;
    }): Promise<any>;
    /**
     * Retrieve the browser element corresponding to the provided unique id,
     * previously generated via getIdForBrowser.
     *
     * TODO: To avoid creating strong references on browser elements and
     * potentially leaking those elements, this method loops over all windows and
     * all tabs. It should be replaced by a faster implementation in Bug 1750065.
     *
     * @param {string} id
     *     A browser unique id created by getIdForBrowser.
     * @returns {XULBrowser}
     *     The <xul:browser> corresponding to the provided id. Will return null if
     *     no matching browser element is found.
     */
    getBrowserById(id: string): XULBrowser;
    /**
     * Retrieve the browsing context corresponding to the provided unique id.
     *
     * @param {string} id
     *     A browsing context unique id (created by getIdForBrowsingContext).
     * @returns {BrowsingContext=}
     *     The browsing context found for this id, null if none was found.
     */
    getBrowsingContextById(id: string): BrowsingContext;
    /**
     * Retrieve the unique id for the given xul browser element. The id is a
     * dynamically generated uuid associated with the permanentKey property of the
     * given browser element. This method is preferable over getIdForBrowsingContext
     * in case of working with browser element of a tab, since we can not guarantee
     * that browsing context is attached to it.
     *
     * @param {XULBrowser} browserElement
     *     The <xul:browser> for which we want to retrieve the id.
     * @returns {string} The unique id for this browser.
     */
    getIdForBrowser(browserElement: XULBrowser): string;
    /**
     * Retrieve the id of a Browsing Context.
     *
     * For a top-level browsing context a custom unique id will be returned.
     *
     * @param {BrowsingContext=} browsingContext
     *     The browsing context to get the id from.
     *
     * @returns {string}
     *     The id of the browsing context.
     */
    getIdForBrowsingContext(browsingContext?: BrowsingContext): string;
    /**
     * Get the navigable for the given browsing context.
     *
     * Because Gecko doesn't support the Navigable concept in content
     * scope the content browser could be used to uniquely identify
     * top-level browsing contexts.
     *
     * @param {BrowsingContext} browsingContext
     *
     * @returns {BrowsingContext|XULBrowser} The navigable
     *
     * @throws {TypeError}
     *     If `browsingContext` is not a CanonicalBrowsingContext instance.
     */
    getNavigableForBrowsingContext(browsingContext: BrowsingContext): BrowsingContext | XULBrowser;
    getTabCount(): number;
    /**
     * Retrieve the tab owning a Browsing Context.
     *
     * @param {BrowsingContext=} browsingContext
     *     The browsing context to get the tab from.
     *
     * @returns {Tab|null}
     *     The tab owning the Browsing Context.
     */
    getTabForBrowsingContext(browsingContext?: BrowsingContext): Tab | null;
    /**
     * Retrieve the list of tabs for a given window.
     *
     * @param {ChromeWindow} win
     *     Window whose <code>tabs</code> need to be returned.
     *
     * @returns {Array<Tab>}
     *     The list of tabs. Will return an empty list if tab browser is not available
     *     or tabs are undefined.
     */
    getTabsForWindow(win: ChromeWindow): Array<Tab>;
    getWindowForTab(tab: any): any;
    /**
     * Check if the given argument is a valid canonical browsing context and was not
     * discarded.
     *
     * @param {BrowsingContext} browsingContext
     *     The browsing context to check.
     *
     * @returns {boolean}
     *     True if the browsing context is valid, false otherwise.
     */
    isValidCanonicalBrowsingContext(browsingContext: BrowsingContext): boolean;
    /**
     * Remove the given tab.
     *
     * @param {Tab} tab
     *     Tab to remove.
     */
    removeTab(tab: Tab): Promise<void>;
    /**
     * Select the given tab.
     *
     * @param {Tab} tab
     *     Tab to select.
     *
     * @returns {Promise}
     *     Promise that resolves when the given tab has been selected.
     */
    selectTab(tab: Tab): Promise<any>;
    supportsTabs(): any;
    #private;
}
export {};
