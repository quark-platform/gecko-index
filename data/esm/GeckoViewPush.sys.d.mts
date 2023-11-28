export class PushService {
    wrappedJSObject: this;
    pushTopic: string;
    subscriptionChangeTopic: string;
    subscriptionModifiedTopic: string;
    observe(subject: any, topic: any, data: any): void;
    subscribe(scope: any, principal: any, callback: any): void;
    subscribeWithKey(scope: any, principal: any, appServerKey: any, callback: any): Promise<void>;
    unsubscribe(scope: any, principal: any, callback: any): Promise<void>;
    getSubscription(scope: any, principal: any, callback: any): Promise<void>;
    clearForDomain(domain: any, callback: any): void;
    notificationForOriginShown(origin: any): void;
    notificationForOriginClosed(origin: any): void;
    reportDeliveryError(messageId: any, reason: any): void;
    classID: any;
    contractID: string;
    QueryInterface: any;
}
