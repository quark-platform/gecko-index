export class PageActionBase extends PanelActionBase {
    constructor(tabContext: any, extension: any);
    defaults: {
        enabled: boolean;
        showMatches: any;
        hideMatches: any;
        pinned: any;
        title: any;
        popup: any;
    };
    handleLocationChange(eventType: any, tab: any, fromBrowse: any): void;
    isShownForTab(tab: any): any;
    loadIconData(): Promise<void>;
    getPinned(): any;
    getTargetFromDetails({ tabId, windowId }: {
        tabId: any;
        windowId: any;
    }): void;
    api(context: any): {
        show: (...args: any[]) => void;
        hide: (...args: any[]) => void;
        isShown: ({ tabId }: {
            tabId: any;
        }) => any;
        setTitle: (details: any) => void;
        getTitle: (details: any) => string;
        setIcon: (details: any) => void;
        setPopup: (details: any) => Promise<never>;
        getPopup: (details: any) => string;
    };
}
export class BrowserActionBase extends PanelActionBase {
    constructor(tabContext: any, extension: any);
    defaults: {
        badgeText: string;
        badgeBackgroundColor: number[];
        badgeDefaultColor: number[];
        badgeTextColor: any;
        default_area: any;
        enabled: boolean;
        title: any;
        popup: any;
    };
    loadIconData(): Promise<void>;
    handleLocationChange(eventType: any, tab: any, fromBrowse: any): void;
    getTargetFromDetails({ tabId, windowId }: {
        tabId: any;
        windowId: any;
    }): void;
    getDefaultArea(): any;
    /**
     * Determines the text badge color to be used in a tab, window, or globally.
     *
     * @param {object} values
     *        The values associated with the tab or window, or global values.
     * @returns {ColorArray}
     */
    getTextColor(values: object): ColorArray;
    isShownForTab(tab: any): string;
    api(context: any): {
        enable: (...args: any[]) => void;
        disable: (...args: any[]) => void;
        isEnabled: (details: any) => string;
        setBadgeText: (details: any) => void;
        getBadgeText: (details: any) => string;
        setBadgeBackgroundColor: (details: any) => void;
        getBadgeBackgroundColor: (details: any) => string;
        setBadgeTextColor: (details: any) => void;
        getBadgeTextColor: (details: any) => ColorArray;
        setTitle: (details: any) => void;
        getTitle: (details: any) => string;
        setIcon: (details: any) => void;
        setPopup: (details: any) => Promise<never>;
        getPopup: (details: any) => string;
    };
}
/** Common base class for Page and Browser actions. */
declare class PanelActionBase {
    constructor(options: any, tabContext: any, extension: any);
    tabContext: any;
    extension: any;
    defaults: {
        enabled: boolean;
        title: any;
        popup: any;
    };
    globals: any;
    activeTabForPreload: any;
    onShutdown(): void;
    setPropertyFromDetails(details: any, prop: any, value: any): any;
    /**
     * Set a global, window specific or tab specific property.
     *
     * @param {XULElement|ChromeWindow|null} target
     *        A XULElement tab, a ChromeWindow, or null for the global data.
     * @param {string} prop
     *        String property to set. Should should be one of "icon", "title", "badgeText",
     *        "popup", "badgeBackgroundColor", "badgeTextColor" or "enabled".
     * @param {string} value
     *        Value for prop.
     * @returns {object}
     *        The object to which the property has been set.
     */
    setProperty(target: XULElement | ChromeWindow | null, prop: string, value: string): object;
    /**
     * Gets the data associated with a tab, window, or the global one.
     *
     * @param {XULElement|ChromeWindow|null} target
     *        A XULElement tab, a ChromeWindow, or null for the global data.
     * @returns {object}
     *        The icon, title, badge, etc. associated with the target.
     */
    getContextData(target: XULElement | ChromeWindow | null): object;
    /**
     * Retrieve the value of a global, window specific or tab specific property.
     *
     * @param {XULElement|ChromeWindow|null} target
     *        A XULElement tab, a ChromeWindow, or null for the global data.
     * @param {string} prop
     *        String property to retrieve. Should should be one of "icon", "title",
     *        "badgeText", "popup", "badgeBackgroundColor" or "enabled".
     * @returns {string} value
     *          Value of prop.
     */
    getProperty(target: XULElement | ChromeWindow | null, prop: string): string;
    getPropertyFromDetails(details: any, prop: any): string;
    enable(tabId: any): void;
    disable(tabId: any): void;
    getIcon(details?: {}): string;
    normalizeIcon(details: any, extension: any, context: any): any;
    /**
     * Updates the `tabData` for any location change, however it only updates the button
     * when the selected tab has a location change, or the selected tab has changed.
     *
     * @param {string} eventType
     *        The type of the event, should be "location-change".
     * @param {XULElement} tab
     *        The tab whose location changed, or which has become selected.
     * @param {boolean} [fromBrowse]
     *        - `true` if navigation occurred in `tab`.
     *        - `false` if the location changed but no navigation occurred, e.g. due to
                 a hash change or `history.pushState`.
     *        - Omitted if TabSelect has occurred, tabData does not need to be updated.
     */
    handleLocationChange(eventType: string, tab: XULElement, fromBrowse?: boolean): void;
    /**
     * Gets the popup url for a given tab.
     *
     * @param {XULElement} tab
     *        The tab the popup refers to.
     * @param {boolean} strict
     *        If errors should be thrown if a URL is not available.
     * @returns {string}
     *        The popup URL if a popup is present, undefined otherwise.
     */
    getPopupUrl(tab: XULElement, strict?: boolean): string;
    /**
     * Grants activeTab permission for a tab when preloading the popup.
     *
     * Will clear any existing activeTab permissions previously granted for any
     * other tab.
     *
     * @param {XULElement} tab
     *        The tab that should be granted activeTab permission for. Set to
     *        null to clear previously granted activeTab permission.
     */
    setActiveTabForPreload(tab?: XULElement): void;
    /**
     * Triggers this action and sends the appropriate event if needed.
     *
     * @param {XULElement} tab
     *        The tab on which the action was fired.
     * @param {object} clickInfo
     *        Extra data passed to the second parameter to the action API's
     *        onClicked event.
     * @returns {string}
     *        the popup URL if a popup should be open, undefined otherwise.
     */
    triggerClickOrPopup(tab: XULElement, clickInfo?: object): string;
    api(context: any): {
        setTitle: (details: any) => void;
        getTitle: (details: any) => string;
        setIcon: (details: any) => void;
        setPopup: (details: any) => Promise<never>;
        getPopup: (details: any) => string;
    };
    /**
     * Update the toolbar button when the extension changes the icon, title, url, etc.
     * If it only changes a parameter for a single tab, `target` will be that tab.
     * If it only changes a parameter for a single window, `target` will be that window.
     * Otherwise `target` will be null.
     *
     * @param {XULElement|ChromeWindow|null} target
     *        Browser tab or browser chrome window, may be null.
     */
    updateOnChange(target: XULElement | ChromeWindow | null): void;
    /**
     * Get tab object from tabId.
     *
     * @param {string} tabId
     *        Internal id of the tab to get.
     */
    getTab(tabId: string): void;
    /**
     * Get window object from windowId
     *
     * @param {string} windowId
     *        Internal id of the window to get.
     */
    getWindow(windowId: string): void;
    /**
     * Gets the target object corresponding to the `details` parameter of the various
     * get* and set* API methods.
     *
     * @param {object} details
     *        An object with optional `tabId` or `windowId` properties.
     * @param {number} [details.tabId]
     * @param {number} [details.windowId]
     * @throws if both `tabId` and `windowId` are specified, or if they are invalid.
     * @returns {XULElement|ChromeWindow|null}
     *        If a `tabId` was specified, the corresponding XULElement tab.
     *        If a `windowId` was specified, the corresponding ChromeWindow.
     *        Otherwise, `null`.
     */
    getTargetFromDetails({ tabId, windowId }: {
        tabId?: number;
        windowId?: number;
    }): XULElement | ChromeWindow | null;
    /**
     * Triggers a click event.
     *
     * @param {XULElement} tab
     *        The tab where this event should be fired.
     * @param {object} clickInfo
     *        Extra data passed to the second parameter to the action API's
     *        onClicked event.
     */
    dispatchClick(tab: XULElement, clickInfo: object): void;
    /**
     * Checks whether this action is shown.
     *
     * @param {XULElement} tab
     *        The tab to be checked
     * @returns {boolean}
     */
    isShownForTab(tab: XULElement): boolean;
}
export {};
