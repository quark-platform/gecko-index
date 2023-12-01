export const FirefoxViewNotificationManager: {
    "__#567534@#currentlyShowing": boolean;
    handleTabSync(): Promise<void>;
    syncedTabs: any;
    showNotificationDot(): void;
    observe(sub: any, topic: any, data: any): void;
    tabsListChanged(newTabs: any): boolean;
    shouldNotificationDotBeShowing(): boolean;
};
