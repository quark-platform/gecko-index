export class GeckoViewActorChild extends JSWindowActorChild {
    static initLogging(aModuleName: any): any;
    actorCreated(): void;
    eventDispatcher: {
        _actor: any;
        registerListener(aListener: any, aEvents: any): void;
        unregisterListener(aListener: any, aEvents: any): void;
        sendRequest(aMsg: any): void;
        sendRequestForResult(aMsg: any): any;
    };
}
