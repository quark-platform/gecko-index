export namespace SpecialMessageActions {
    function blockMessageById(): never;
    /**
     * loadAddonIconInURLBar - load addons-notification icon by displaying
     * box containing addons icon in urlbar. See Bug 1513882
     *
     * @param  {Browser} browser browser element for showing addons icon
     */
    function loadAddonIconInURLBar(browser: Browser): void;
    /**
     *
     * @param {Browser} browser The revelant Browser
     * @param {string} url URL to look up install location
     * @param {string} telemetrySource Telemetry information to pass to getInstallForURL
     */
    function installAddonFromURL(browser: Browser, url: string, telemetrySource?: string): Promise<void>;
    /**
     * Pin Firefox to taskbar.
     *
     * @param {Window} window Reference to a window object
     * @param {boolean} pin Private Browsing Mode if true
     */
    function pinFirefoxToTaskbar(window: Window, privateBrowsing?: boolean): any;
    /**
     *  Set browser as the operating system default browser.
     *
     *  @param {Window} window Reference to a window object
     */
    function setDefaultBrowser(window: Window): void;
    /**
     * Set browser as the default PDF handler.
     *
     * @param {Window} window Reference to a window object
     */
    function setDefaultPDFHandler(window: Window, onlyIfKnownBrowser?: boolean): void;
    /**
     * Reset browser homepage and newtab to default with a certain section configuration
     *
     * @param {"default"|null} home Value to set for browser homepage
     * @param {"default"|null} newtab Value to set for browser newtab
     * @param {obj} layout Configuration options for newtab sections
     * @returns {undefined}
     */
    function configureHomepage({ homePage, newtab, layout }: "default"): undefined;
    /**
     * Set prefs with special message actions
     *
     * @param {Object} pref - A pref to be updated.
     * @param {string} pref.name - The name of the pref to be updated
     * @param {string} [pref.value] - The value of the pref to be updated. If not included, the pref will be reset.
     */
    function setPref(pref: {
        name: string;
        value?: string;
    }): void;
    /**
     * Open an FxA sign-in page and automatically close it once sign-in
     * completes.
     *
     * @param {any=} data
     * @param {Browser} browser the xul:browser rendering the page
     * @returns {Promise<boolean>} true if the user signed in, false otherwise
     */
    function fxaSignInFlow(data?: any, browser: Browser): Promise<boolean>;
    /**
     * Processes "Special Message Actions", which are definitions of behaviors such as opening tabs
     * installing add-ons, or focusing the awesome bar that are allowed to can be triggered from
     * Messaging System interactions.
     *
     * @param {{type: string, data?: any}} action User action defined in message JSON.
     * @param browser {Browser} The browser most relevant to the message.
     * @returns {Promise<unknown>} Type depends on action type. See cases below.
     */
    function handleAction(action: {
        type: string;
        data?: any;
    }, browser: Browser): Promise<unknown>;
}
