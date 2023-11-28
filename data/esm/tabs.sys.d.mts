export namespace BrowserTabs {
    /**
     * Add
     *
     * Opens a new tab in the current browser window for the
     * given uri. Rejects on error.
     *
     * @param uri The uri to load in the new tab
     * @return Promise
     */
    function Add(uri: any): Promise<void>;
    /**
     * Find
     *
     * Finds the specified uri and title in Weave's list of remote tabs
     * for the specified profile.
     *
     * @param uri The uri of the tab to find
     * @param title The page title of the tab to find
     * @param profile The profile to search for tabs
     * @return true if the specified tab could be found, otherwise false
     */
    function Find(uri: any, title: any, profile: any): Promise<boolean>;
}
nlock(): void;
    quickWrite(): Promise<any>;
    _doQuickWrite(): Promise<boolean>;
    _sync(): Promise<void>;
}
export namespace TabProvider {
    function getWindowEnumerator(): any;
    function shouldSkipWindow(win: any): any;
    function getAllBrowserTabs(): any[];
    function getAllTabsWithEstimatedMax(filter: any, bytesMax: any): Promise<{
        title: any;
        urlHistory: any[];
        icon: string;
        lastUsed: number;
    }[]>;
}
declare function TabTracker(name: any, engine: any): void;
declare class TabTracker {
    constructor(name: any, engine: any);
    onTab: any;
    _unregisterListeners: any;
    QueryInterface: any;
    clearChangedIDs(): void;
    modified: boolean;
    _topics: string[];
    _registerListenersForWindow(window: any): void;
    _unregisterListenersForWindow(window: any): void;
    onStart(): void;
    onStop(): void;
    observe(subject: any, topic: any, data: any): Promise<void>;
    onLocationChange(webProgress: any, request: any, locationURI: any, flags: any): void;
    callScheduleSync(scoreIncrement: any): void;
}
export {};
