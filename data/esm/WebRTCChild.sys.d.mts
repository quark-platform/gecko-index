export class WebRTCChild {
    static handleEvent(aEvent: any): void;
    static observe(aSubject: any, aTopic: any, aData: any): void;
    actorCreated(): void;
    suppressNotifications: boolean;
    receiveMessage(aMessage: any): void;
}
