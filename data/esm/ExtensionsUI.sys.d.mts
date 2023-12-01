export namespace ExtensionsUI {
    let sideloaded: Set<any>;
    let updates: Set<any>;
    let sideloadListener: any;
    let pendingNotifications: WeakMap<WeakKey, any>;
    function init(): Promise<void>;
    function _checkForSideloaded(): Promise<void>;
    function _updateNotifications(): void;
    function showAddonsManager(tabbrowser: any, strings: any, icon: any): any;
    function showSideloaded(tabbrowser: any, addon: any): void;
    function showUpdate(browser: any, info: any): void;
    function observe(subject: any, topic: any, data: any): void;
    function _buildStrings(info: any): any;
    function showPermissionsPrompt(target: any, strings: any, icon: any): Promise<any>;
    function showDefaultSearchPrompt(target: any, strings: any, icon: any): Promise<any>;
    function showInstallNotification(target: any, addon: any): Promise<any>;
    function showQuarantineConfirmation(browser: any, policy: any): Promise<void>;
    function originControlsMenu(popup: any, extensionId: any): void;
}
