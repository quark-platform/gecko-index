export class TestWindowChild extends JSWindowActorChild {
    sawActorCreated: boolean;
    uninitializedGetterError: any;
    actorCreated(): void;
    receiveMessage(aMessage: any): Window | Promise<any> | {
        status: string;
        errorType: any;
        valueIsNull?: undefined;
    } | {
        status: string;
        valueIsNull: boolean;
        errorType?: undefined;
    };
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
