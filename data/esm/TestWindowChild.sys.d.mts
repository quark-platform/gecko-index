export class TestWindowChild {
    sawActorCreated: boolean;
    uninitializedGetterError: any;
    actorCreated(): void;
    receiveMessage(aMessage: any): any;
    handleEvent(aEvent: any): void;
    observe(subject: any, topic: any, data: any): void;
    lastObserved: {
        subject: any;
        topic: any;
        data: any;
    };
    show(): string;
    didDestroy(): void;
}
