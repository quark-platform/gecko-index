export class BrowserTestUtilsChild extends JSWindowActorChild {
    actorCreated(): void;
    _EventUtils: {
        readonly KeyboardEvent: any;
        readonly navigator: Navigator;
    };
    get EventUtils(): {
        readonly KeyboardEvent: any;
        readonly navigator: Navigator;
    };
    receiveMessage(aMessage: any): any;
    observer: BrowserTestUtilsChildObserver;
    handleEvent(aEvent: any): void;
    synthesizeMouse(data: any, window: any): undefined;
    synthesizeTouch(data: any, window: any): any;
}
declare class BrowserTestUtilsChildObserver {
    currentObserverStatus: string;
    observerItems: any[];
    startObservingTopics(aTopics: any): void;
    stopObservingTopics(aTopics: any): void;
    observeTopic(topic: any, count: any, filterFn: any, callbackResolver: any): void;
    observe(aSubject: any, aTopic: any, aData: any): void;
    QueryInterface: MozQueryInterface;
}
export {};
