export function getUniqueDomainsVisitedInPast24Hours(): number;
export const MINIMUM_TAB_COUNT_INTERVAL_MS: number;
export namespace URICountListener {
    let _domainSet: Set<any>;
    let _domain24hrSet: Set<any>;
    let _restoredURIsMap: WeakMap<object, any>;
    let _timeouts: Set<any>;
    function isHttpURI(uri: any): any;
    function addRestoredURI(browser: any, uri: any): void;
    function onLocationChange(browser: any, webProgress: any, request: any, uri: any, flags: any): void;
    /**
     * Reset the counts. This should be called when breaking a session in Telemetry.
     */
    function reset(): void;
    const uniqueDomainsVisitedInPast24Hours: number;
    /**
     * Resets the number of unique domains visited in this session.
     */
    function resetUniqueDomainsVisitedInPast24Hours(): void;
    let QueryInterface: any;
}
export namespace BrowserUsageTelemetry {
    export namespace Policy {
        function getTelemetryClientId(): Promise<any>;
        function getUpdateDirectory(): any;
        function readProfileCountFile(path: any): Promise<any>;
        function writeProfileCountFile(path: any, data: any): Promise<any>;
    }
    export let _inited: boolean;
    export function init(): void;
    /**
     * Resets the masked add-on identifiers. Only for use in tests.
     */
    export function _resetAddonIds(): void;
    /**
     * Handle subsession splits in the parent process.
     */
    export function afterSubsessionSplit(): void;
    let QueryInterface_1: any;
    export { QueryInterface_1 as QueryInterface };
    export function uninit(): void;
    export function observe(subject: any, topic: any, data: any): void;
    export function handleEvent(event: any): void;
    /**
     * This gets called shortly after the SessionStore has finished restoring
     * windows and tabs. It counts the open tabs and adds listeners to all the
     * windows.
     */
    export function _setupAfterRestore(): void;
    export function _buildWidgetPositions(): Map<any, any>;
    export function _getWidgetID(node: any): any;
    export function _getBrowserWidgetContainer(node: any): any;
    export function _getWidgetContainer(node: any): any;
    export let lastClickTarget: any;
    export function ignoreEvent(event: any): void;
    export function _recordCommand(event: any): void;
    /**
     * Listens for UI interactions in the window.
     */
    export function _addUsageListeners(win: any): void;
    /**
     * A public version of the private method to take care of the `nav-bar-start`,
     * `nav-bar-end` thing that callers shouldn't have to care about. It also
     * accepts the DOM ids for the areas rather than the cleaner ones we report
     * to telemetry.
     */
    export function recordWidgetChange(widgetId: any, newPos: any, reason: any): void;
    export function recordToolbarVisibility(toolbarId: any, newState: any, reason: any): void;
    export function _recordWidgetChange(widgetId: any, newPos: any, reason: any): void;
    export function _recordUITelemetry(): void;
    /**
     * Adds listeners to a single chrome window.
     */
    export function _registerWindow(win: any): void;
    /**
     * Removes listeners from a single chrome window.
     */
    export function _unregisterWindow(win: any): void;
    /**
     * Updates the tab counts.
     */
    export function _onTabOpen(): void;
    /**
     * Update tab counts after opening multiple tabs.
     */
    export function _onTabsOpened(): void;
    export function _onTabPinned(target: any): void;
    /**
     * Tracks the window count and registers the listeners for the tab count.
     * @param{Object} win The window object.
     */
    export function _onWindowOpen(win: any): void;
    /**
     * Record telemetry about the given tab counts.
     *
     * Telemetry for each count will only be recorded if the value isn't
     * `undefined`.
     *
     * @param {object} [counts] The tab counts to register with telemetry.
     * @param {number} [counts.tabCount] The number of tabs in all browsers.
     * @param {number} [counts.loadedTabCount] The number of loaded (i.e., not
     *                                         pending) tabs in all browsers.
     */
    export function _recordTabCounts({ tabCount, loadedTabCount }?: {
        tabCount?: number;
        loadedTabCount?: number;
    }): void;
    export function _checkProfileCountFileSchema(fileData: any): void;
    export function reportProfileCount(): Promise<void>;
    /**
     * Check if this is the first run of this profile since installation,
     * if so then send installation telemetry.
     *
     * @param {nsIFile} [dataPathOverride] Optional, full data file path, for tests.
     * @param {Array<string>} [msixPackagePrefixes] Optional, list of prefixes to
              consider "existing" installs when looking at installed MSIX packages.
              Defaults to prefixes for builds produced in Firefox automation.
     * @return {Promise}
     * @resolves When the event has been recorded, or if the data file was not found.
     * @rejects JavaScript exception on any failure.
     */
    export function reportInstallationTelemetry(dataPathOverride?: nsIFile, msixPackagePrefixes?: string[]): Promise<any>;
}
