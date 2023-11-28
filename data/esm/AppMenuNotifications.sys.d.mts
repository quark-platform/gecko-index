export namespace AppMenuNotifications {
    let _notifications: any[];
    let _hasInitialized: boolean;
    const notifications: any[];
    function _lazyInit(): void;
    function uninit(): void;
    function observe(subject: any, topic: any, status: any): void;
    const activeNotification: any;
    function showNotification(id: any, mainAction: any, secondaryAction: any, options?: {}): AppMenuNotification;
    function showBadgeOnlyNotification(id: any): AppMenuNotification;
    function removeNotification(id: any): void;
    function dismissNotification(id: any): void;
    function callMainAction(win: any, notification: any, fromDoorhanger: any): void;
    function callSecondaryAction(win: any, notification: any): void;
    function _callAction(win: any, notification: any, action: any, fromDoorhanger: any): void;
    function _removeNotification(notification: any): void;
    function _updateNotifications(): void;
}
declare function AppMenuNotification(id: any, mainAction: any, secondaryAction: any, options?: {}): void;
declare class AppMenuNotification {
    constructor(id: any, mainAction: any, secondaryAction: any, options?: {});
    id: any;
    mainAction: any;
    secondaryAction: any;
    options: {};
    dismissed: any;
}
export {};
