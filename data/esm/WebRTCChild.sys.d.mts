export class WebRTCChild extends JSWindowActorChild {
    static handleEvent(aEvent: any): void;
    static observe(aSubject: any, aTopic: any, aData: any): void;
    actorCreated(): void;
    suppressNotifications: boolean;
    receiveMessage(aMessage: any): void;
}
