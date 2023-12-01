export namespace SessionStore {
    const promiseInitialized: Promise<any>;
    const promiseAllWindowsRestored: Promise<any>;
    let canRestoreLastSession: boolean;
    const lastClosedObjectType: string;
    const lastClosedActions: {
        /**
         *   What the close action acted upon. One of either _LAST_ACTION_CLOSED_TAB or
         *   _LAST_ACTION_CLOSED_WINDOW
         */
        type: string;
        /**
         *   The unique ID of the item that closed.
         */
        closedId: number;
    }[];
    const LAST_ACTION_CLOSED_TAB: string;
    const LAST_ACTION_CLOSED_WINDOW: string;
    const willAutoRestore: boolean;
    function init(): void;
    /**
     * Get the collection of all matching windows tracked by SessionStore
     * @param {Window|Object} [aWindowOrOptions] Optionally an options object or a window to used to determine if we're filtering for private or non-private windows
     * @param {boolean} [aWindowOrOptions.private] Determine if we should filter for private or non-private windows
     */
    function getWindows(aWindowOrOptions?: any): any[];
    /**
     * Get window a given closed tab belongs to
     * @param {integer} aClosedId The closedId of the tab whose window we want to find
     * @param {boolean} [aIncludePrivate] Optionally include private windows when searching for the closed tab
     */
    function getWindowForTabClosedId(aClosedId: integer, aIncludePrivate?: boolean): any;
    function getBrowserState(): string;
    function setBrowserState(aState: any): void;
    function getWindowState(aWindow: any): any;
    function setWindowState(aWindow: any, aState: any, aOverwrite: any): void;
    function getTabState(aTab: any): string;
    function setTabState(aTab: any, aState: any): void;
    function isTabRestoring(aTab: any): boolean;
    function getInternalObjectState(obj: any): any;
    function duplicateTab(aWindow: any, aTab: any, aDelta?: number, aRestoreImmediately?: boolean, aOptions?: {}): any;
    /**
     * How many tabs were last closed. If multiple tabs were selected and closed together,
     * we'll return that number. Normally the count is 1, or 0 if no tabs have been
     * recently closed in this window.
     * @returns the number of tabs that were last closed.
     */
    function getLastClosedTabCount(aWindow: any): number;
    function resetLastClosedTabCount(aWindow: any): void;
    function getClosedTabCountForWindow(aWindow: Window): any;
    function getClosedTabCount(aOptions?: any): number;
    function getClosedTabCountFromClosedWindows(): any;
    function getClosedTabDataForWindow(aWindow: Window): any;
    function getClosedTabData(aOptions?: any): any[];
    function getClosedTabDataFromClosedWindows(): any[];
    function undoCloseTab(aSource: any, aIndex?: Integer, aTargetWindow?: Window): any;
    function undoClosedTabFromClosedWindow(aSource: any, aClosedId: integer, aTargetWindow?: Window): any;
    function forgetClosedTab(aSource: any, aIndex?: Integer): void;
    function forgetClosedTabById(aClosedId: integer, aSourceOptions: any): void;
    function forgetClosedWindowById(aClosedId: integer): void;
    /**
     * Look up the object type ("tab" or "window") for a given closedId
     * @param {integer} aClosedId
     */
    function getObjectTypeForClosedId(aClosedId: integer): string;
    function getWindowById(aSessionStoreId: string): any;
    function getClosedWindowCount(): number;
    function popLastClosedAction(): {
        /**
         *   What the close action acted upon. One of either _LAST_ACTION_CLOSED_TAB or
         *   _LAST_ACTION_CLOSED_WINDOW
         */
        type: string;
        /**
         *   The unique ID of the item that closed.
         */
        closedId: number;
    };
    function resetLastClosedActions(): void;
    function getClosedWindowData(): any;
    function maybeDontRestoreTabs(aWindow: any): void;
    function undoCloseWindow(aIndex: any): mozIDOMWindowProxyType;
    function forgetClosedWindow(aIndex: any): void;
    function getCustomWindowValue(aWindow: any, aKey: any): any;
    function setCustomWindowValue(aWindow: any, aKey: any, aStringValue: any): void;
    function deleteCustomWindowValue(aWindow: any, aKey: any): void;
    function getCustomTabValue(aTab: any, aKey: any): any;
    function setCustomTabValue(aTab: any, aKey: any, aStringValue: any): void;
    function deleteCustomTabValue(aTab: any, aKey: any): void;
    function getLazyTabValue(aTab: any, aKey: any): any;
    function getCustomGlobalValue(aKey: any): any;
    function setCustomGlobalValue(aKey: any, aStringValue: any): void;
    function deleteCustomGlobalValue(aKey: any): void;
    function persistTabAttribute(aName: any): void;
    function restoreLastSession(): void;
    function speculativeConnectOnTabHover(tab: any): void;
    function getCurrentState(aUpdateAll: any): {
        version: (string | number)[];
        windows: any[];
        selectedWindow: number;
        _closedWindows: any[];
        session: {
            lastUpdate: number;
            startTime: number;
            recentCrashes: number;
        };
        global: any;
    };
    function reviveCrashedTab(aTab: any): void;
    function reviveAllCrashedTabs(): void;
    function updateSessionStoreFromTablistener(aBrowser: any, aBrowsingContext: any, aPermanentKey: any, aData: any, aForStorage: any): void;
    function getSessionHistory(tab: any, updatedCallback: any): {
        index: number;
        entries: any;
    };
    /**
     * Re-open a tab or window which corresponds to the closedId
     *
     * @param {integer} aClosedId
     *        The closedId of the tab or window
     * @param {boolean} [aIncludePrivate = true]
     *        Whether to match the aClosedId to only closed private tabs/windows or non-private
     * @param {Window} [aTargetWindow]
     *        When aClosedId is for a closed tab, which window to re-open the tab into.
     *        Defaults to current (topWindow).
     *
     * @returns a tab or window object
     */
    function undoCloseById(aClosedId: integer, aIncludePrivate?: boolean, aTargetWindow?: Window): any;
    function resetBrowserToLazyState(tab: any): void;
    function maybeExitCrashedState(browser: any): void;
    function isBrowserInCrashedSet(browser: any): boolean;
    function resetNextClosedId(): void;
    /**
     * Ensures that session store has registered and started tracking a given window.
     * @param window
     *        Window reference
     */
    function ensureInitialized(window: any): void;
    function getCurrentEpoch(browser: any): any;
    /**
     * Determines whether the passed version number is compatible with
     * the current version number of the SessionStore.
     *
     * @param version The format and version of the file, as an array, e.g.
     * ["sessionrestore", 1]
     */
    function isFormatVersionCompatible(version: any): boolean;
    /**
     * Filters out not worth-saving tabs from a given browser state object.
     *
     * @param aState (object)
     *        The browser state for which we remove worth-saving tabs.
     *        The given object will be modified.
     */
    function keepOnlyWorthSavingTabs(aState: any): void;
    /**
     * Prepares to change the remoteness of the given browser, by ensuring that
     * the local instance of session history is up-to-date.
     */
    function prepareToChangeRemoteness(aTab: any): Promise<void>;
    function finishTabRemotenessChange(aTab: any, aSwitchId: any): void;
    /**
     * Clear session store data for a given private browsing window.
     * @param {ChromeWindow} win - Open private browsing window to clear data for.
     */
    function purgeDataForPrivateWindow(win: ChromeWindow): void;
}
export namespace _LastSession {
    let _state: any;
    const canRestore: boolean;
    function getState(): any;
    function setState(state: any): void;
    function clear(silent?: boolean): void;
}
