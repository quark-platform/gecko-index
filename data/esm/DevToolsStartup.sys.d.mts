/**
 * Validate the URL that will be used for the WebChannel for the profiler.
 *
 * @param {string} targetUrl
 * @returns {string}
 */
export function validateProfilerWebChannelUrl(targetUrl: string): string;
export function DevToolsStartup(): void;
export class DevToolsStartup {
    onWindowReady: any;
    addDevToolsItemsToSubview: any;
    onMoreToolsViewShowing: any;
    toggleProfilerKeyShortcuts: any;
    initialized: boolean;
    recorded: boolean;
    get telemetry(): any;
    _telemetry: any;
    developerToggleCreated: boolean;
    profilerRecordingButtonCreated: boolean;
    isDisabledByPolicy(): any;
    handle(cmdLine: any): void;
    devtoolsFlag: any;
    commandLine: boolean;
    /**
     * Lookup in all arguments passed to firefox binary to find
     * URLs including a precise location, like this:
     *   https://domain.com/file.js:1:10 (URL ending with `:${line}:${number}`)
     * When such argument exists, try to open this source and precise location
     * in the debugger.
     *
     * @param {nsICommandLine} cmdLine
     */
    checkForDebuggerLink(cmdLine: nsICommandLine): void;
    readCommandLineFlags(cmdLine: any): {
        console: any;
        debugger: any;
        devtools: any;
        devToolsServer: any;
    };
    _firstWindowReadyReceived: boolean;
    onFirstWindowReady(window: any): void;
    /**
     * Register listeners to all possible entry points for Developer Tools.
     * But instead of implementing the actual actions, defer to DevTools codebase.
     * In most cases, it only needs to call this.initDevTools which handles the rest.
     * We do that to prevent loading any DevTools module until the user intent to use them.
     */
    hookWindow(window: any): void;
    /**
     * Dynamically register a wrench icon in the customization menu.
     * You can use this button by right clicking on Firefox toolbar
     * and dragging it from the customization panel to the toolbar.
     * (i.e. this isn't displayed by default to users!)
     *
     * _But_, the "Browser Tools" entry in the hamburger menu (the menu with
     * 3 horizontal lines), is using this "developer-button" view to populate
     * its menu. So we have to register this button for the menu to work.
     *
     * Also, this menu duplicates its own entries from the "Browser Tools"
     * menu in the system menu, under "Tools" main menu item. The system
     * menu is being hooked by "hookBrowserToolsMenu" which ends up calling
     * devtools/client/framework/browser-menus to create the items for real,
     * initDevTools, from onViewShowing is also calling browser-menu.
     */
    hookDeveloperToggle(): void;
    /**
     * Register the profiler recording button. This button will be available
     * in the customization palette for the Firefox toolbar. In addition, it can be
     * enabled from profiler.firefox.com.
     */
    hookProfilerRecordingButton(): void;
    /**
     * Initialize the WebChannel for profiler.firefox.com. This function happens at
     * startup, so care should be taken to minimize its performance impact. The WebChannel
     * is a mechanism that is used to communicate between the browser, and front-end code.
     */
    initializeProfilerWebChannel(): void;
    hookBrowserToolsMenu(window: any): void;
    /**
     * Check if the user is a DevTools user by looking at our selfxss pref.
     * This preference is incremented everytime the console is used (up to 5).
     *
     * @return {Boolean} true if the user can be considered as a devtools user.
     */
    isDevToolsUser(): boolean;
    hookKeyShortcuts(window: any): void;
    /**
     * This method attaches on the key elements to the devtools keyset.
     */
    attachKeys(doc: any, keyShortcuts: any, keyset?: any): void;
    /**
     * This method removes keys from the devtools keyset.
     */
    removeKeys(doc: any, keyShortcuts: any): void;
    onKey(window: any, key: any): Promise<void>;
    getKeyElementId({ id, toolId }: {
        id: any;
        toolId: any;
    }): string;
    createKey(doc: any, key: any, oncommand: any): any;
    initDevTools(reason: any, key?: string): any;
    handleConsoleFlag(cmdLine: any): void;
    handleDevToolsFlag(window: any): Promise<void>;
    _isRemoteDebuggingEnabled(): boolean;
    handleDebuggerFlag(cmdLine: any, binaryPath: any): void;
    /**
     * Handle the --start-debugger-server command line flag. The options are:
     * --start-debugger-server
     *   The portOrPath parameter is boolean true in this case. Reads and uses the defaults
     *   from devtools.debugger.remote-port and devtools.debugger.remote-websocket prefs.
     *   The default values of these prefs are port 6000, WebSocket disabled.
     *
     * --start-debugger-server 6789
     *   Start the non-WebSocket server on port 6789.
     *
     * --start-debugger-server /path/to/filename
     *   Start the server on a Unix domain socket.
     *
     * --start-debugger-server ws:6789
     *   Start the WebSocket server on port 6789.
     *
     * --start-debugger-server ws:
     *   Start the WebSocket server on the default port (taken from d.d.remote-port)
     */
    handleDevToolsServerFlag(cmdLine: any, portOrPath: any): void;
    /**
     * Send entry point telemetry explaining how the devtools were launched. This
     * functionality also lives inside `devtools/client/framework/browser-menus.js`
     * because this codepath is only used the first time a toolbox is opened for a
     * tab.
     *
     * @param {String} reason
     *        One of "KeyShortcut", "SystemMenu", "HamburgerMenu", "ContextMenu",
     *        "CommandLine".
     * @param {String} key
     *        The key used by a key shortcut.
     */
    sendEntryPointTelemetry(reason: string, key?: string): void;
    /**
     * Hook the debugger tool to the "Debug Script" button of the slow script dialog.
     */
    setSlowScriptDebugHandler(): void;
    /**
     * Called by setSlowScriptDebugHandler, when a tab freeze because of a slow running script
     */
    slowScriptDebugHandler(tab: any): Promise<void>;
    get KeyShortcuts(): any;
    get wrappedJSObject(): {
        /**
         * Boolean flag to check if DevTools have been already initialized or not.
         * By initialized, we mean that its main modules are loaded.
         */
        initialized: boolean;
        /**
         * Boolean flag to check if the devtools initialization was already sent to telemetry.
         * We only want to record one devtools entry point per Firefox run, but we are not
         * interested in all the entry points.
         */
        recorded: boolean;
        readonly telemetry: any;
        /**
         * Flag that indicates if the developer toggle was already added to customizableUI.
         */
        developerToggleCreated: boolean;
        /**
         * Flag that indicates if the profiler recording popup was already added to
         * customizableUI.
         */
        profilerRecordingButtonCreated: boolean;
        isDisabledByPolicy(): any;
        handle(cmdLine: any): void;
        /**
         * Lookup in all arguments passed to firefox binary to find
         * URLs including a precise location, like this:
         *   https://domain.com/file.js:1:10 (URL ending with `:${line}:${number}`)
         * When such argument exists, try to open this source and precise location
         * in the debugger.
         *
         * @param {nsICommandLine} cmdLine
         */
        checkForDebuggerLink(cmdLine: nsICommandLine): void;
        readCommandLineFlags(cmdLine: any): {
            console: any;
            debugger: any;
            devtools: any;
            devToolsServer: any;
        };
        onFirstWindowReady(window: any): void;
        /**
         * Register listeners to all possible entry points for Developer Tools.
         * But instead of implementing the actual actions, defer to DevTools codebase.
         * In most cases, it only needs to call this.initDevTools which handles the rest.
         * We do that to prevent loading any DevTools module until the user intent to use them.
         */
        hookWindow(window: any): void;
        /**
         * Dynamically register a wrench icon in the customization menu.
         * You can use this button by right clicking on Firefox toolbar
         * and dragging it from the customization panel to the toolbar.
         * (i.e. this isn't displayed by default to users!)
         *
         * _But_, the "Browser Tools" entry in the hamburger menu (the menu with
         * 3 horizontal lines), is using this "developer-button" view to populate
         * its menu. So we have to register this button for the menu to work.
         *
         * Also, this menu duplicates its own entries from the "Browser Tools"
         * menu in the system menu, under "Tools" main menu item. The system
         * menu is being hooked by "hookBrowserToolsMenu" which ends up calling
         * devtools/client/framework/browser-menus to create the items for real,
         * initDevTools, from onViewShowing is also calling browser-menu.
         */
        hookDeveloperToggle(): void;
        /**
         * Register the profiler recording button. This button will be available
         * in the customization palette for the Firefox toolbar. In addition, it can be
         * enabled from profiler.firefox.com.
         */
        hookProfilerRecordingButton(): void;
        /**
         * Initialize the WebChannel for profiler.firefox.com. This function happens at
         * startup, so care should be taken to minimize its performance impact. The WebChannel
         * is a mechanism that is used to communicate between the browser, and front-end code.
         */
        initializeProfilerWebChannel(): void;
        hookBrowserToolsMenu(window: any): void;
        /**
         * Check if the user is a DevTools user by looking at our selfxss pref.
         * This preference is incremented everytime the console is used (up to 5).
         *
         * @return {Boolean} true if the user can be considered as a devtools user.
         */
        isDevToolsUser(): boolean;
        hookKeyShortcuts(window: any): void;
        /**
         * This method attaches on the key elements to the devtools keyset.
         */
        attachKeys(doc: any, keyShortcuts: any, keyset?: any): void;
        /**
         * This method removes keys from the devtools keyset.
         */
        removeKeys(doc: any, keyShortcuts: any): void;
        onKey(window: any, key: any): Promise<void>;
        getKeyElementId({ id, toolId }: {
            id: any;
            toolId: any;
        }): string;
        createKey(doc: any, key: any, oncommand: any): any;
        initDevTools(reason: any, key?: string): any;
        handleConsoleFlag(cmdLine: any): void;
        handleDevToolsFlag(window: any): Promise<void>;
        _isRemoteDebuggingEnabled(): boolean;
        handleDebuggerFlag(cmdLine: any, binaryPath: any): void;
        /**
         * Handle the --start-debugger-server command line flag. The options are:
         * --start-debugger-server
         *   The portOrPath parameter is boolean true in this case. Reads and uses the defaults
         *   from devtools.debugger.remote-port and devtools.debugger.remote-websocket prefs.
         *   The default values of these prefs are port 6000, WebSocket disabled.
         *
         * --start-debugger-server 6789
         *   Start the non-WebSocket server on port 6789.
         *
         * --start-debugger-server /path/to/filename
         *   Start the server on a Unix domain socket.
         *
         * --start-debugger-server ws:6789
         *   Start the WebSocket server on port 6789.
         *
         * --start-debugger-server ws:
         *   Start the WebSocket server on the default port (taken from d.d.remote-port)
         */
        handleDevToolsServerFlag(cmdLine: any, portOrPath: any): void;
        /**
         * Send entry point telemetry explaining how the devtools were launched. This
         * functionality also lives inside `devtools/client/framework/browser-menus.js`
         * because this codepath is only used the first time a toolbox is opened for a
         * tab.
         *
         * @param {String} reason
         *        One of "KeyShortcut", "SystemMenu", "HamburgerMenu", "ContextMenu",
         *        "CommandLine".
         * @param {String} key
         *        The key used by a key shortcut.
         */
        sendEntryPointTelemetry(reason: string, key?: string): void;
        /**
         * Hook the debugger tool to the "Debug Script" button of the slow script dialog.
         */
        setSlowScriptDebugHandler(): void;
        /**
         * Called by setSlowScriptDebugHandler, when a tab freeze because of a slow running script
         */
        slowScriptDebugHandler(tab: any): Promise<void>;
        readonly KeyShortcuts: any;
        readonly wrappedJSObject: any;
        readonly jsdebuggerHelpInfo: string;
        readonly helpInfo: string;
        classID: any;
        QueryInterface: any;
    };
    get jsdebuggerHelpInfo(): string;
    get helpInfo(): string;
    classID: any;
    QueryInterface: any;
}
