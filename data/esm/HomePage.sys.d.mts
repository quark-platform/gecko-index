export namespace HomePage {
    let _ignoreList: any[];
    let _initializationPromise: any;
    /**
     * Used to initialise the ignore lists. This may be called later than
     * the first call to get or set, which may cause a used to get an ignored
     * homepage, but this is deemed acceptable, as we'll correct it once
     * initialised.
     */
    function delayedStartup(): Promise<void>;
    /**
     * Gets the homepage for the given window.
     *
     * @param {DOMWindow} [aWindow]
     *   The window associated with the get, used to check for private browsing
     *   mode. If not supplied, normal mode is assumed.
     * @returns {string}
     *   Returns the home page value, this could be a single url, or a `|`
     *   separated list of URLs.
     */
    function get(aWindow?: DOMWindow): string;
    /**
     * @returns {string}
     *   Returns the application default homepage.
     */
    function getDefault(): string;
    /**
     * @returns {string}
     *   Returns the original application homepage URL (not from prefs).
     */
    function getOriginalDefault(): string;
    const overridden: boolean;
    const locked: boolean;
    const isDefault: boolean;
    /**
     * Sets the homepage preference to a new page.
     *
     * @param {string} value
     *   The new value to set the preference to. This could be a single url, or a
     *   `|` separated list of URLs.
     */
    function set(value: string): Promise<boolean>;
    /**
     * Sets the homepage preference to a new page. This is an synchronous version
     * that should only be used when we know the source is safe as it bypasses the
     * ignore list, e.g. when setting directly to about:blank or a value not
     * supplied externally.
     *
     * @param {string} value
     *   The new value to set the preference to. This could be a single url, or a
     *   `|` separated list of URLs.
     */
    function safeSet(value: string): void;
    /**
     * Clears the homepage preference if it is not the default. Note that for
     * policy/locking use, the default homepage might not be about:home after this.
     */
    function clear(): void;
    /**
     * Resets the homepage preference to be about:home.
     */
    function reset(): void;
    /**
     * Determines if a url should be ignored according to the ignore list.
     *
     * @param {string} url
     *   A string that is the url or urls to be ignored.
     * @returns {boolean}
     *   True if the url should be ignored.
     */
    function shouldIgnore(url: string): boolean;
    /**
     * Handles updates of the ignore list, checking the existing preference and
     * correcting it as necessary.
     *
     * @param {Object} eventData
     *   The event data as received from RemoteSettings.
     */
    function _handleIgnoreListUpdated({ data: { current } }: any): Promise<void>;
    function onWidgetRemoved(widgetId: any, area: any): void;
    /**
     * Add the home button to the toolbar if the user just set a custom homepage.
     *
     * This should only be done once, so we check HOME_BUTTON_REMOVED_PREF which
     * gets set to true when the home button is removed from the toolbar.
     *
     * If the home button is already on the toolbar it won't be moved.
     */
    function _maybeAddHomeButtonToToolbar(homePage: any): void;
    function _addCustomizableUiListener(): void;
}
