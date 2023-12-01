export const FirefoxViewNotificationManager: {
    "__#225824@#currentlyShowing": boolean;
    handleTabSync(): Promise<void>;
    syncedTabs: any;
    showNotificationDot(): void;
    observe(sub: any, topic: any, data: any): void;
    tabsListChanged(newTabs: any): boolean;
    shouldNotificationDotBeShowing(): boolean;
};
