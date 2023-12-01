export function NotificationStorage(): void;
export class NotificationStorage {
    _requests: {};
    _requestCount: number;
    registerListeners(): void;
    unregisterListeners(): void;
    observe(aSubject: any, aTopic: any, aData: any): void;
    put(origin: any, id: any, title: any, dir: any, lang: any, body: any, tag: any, icon: any, alertName: any, data: any, behavior: any, serviceWorkerRegistrationScope: any): void;
    get(origin: any, tag: any, callback: any): void;
    delete(origin: any, id: any): void;
    receiveMessage(message: any): void;
    _fetchFromDB(origin: any, tag: any, callback: any): void;
    _returnNotifications(notifications: any, origin: any, tag: any, callback: any): void;
    QueryInterface: MozQueryInterface;
}
