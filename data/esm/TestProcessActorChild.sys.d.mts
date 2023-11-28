export class TestProcessActorChild {
    sawActorCreated: boolean;
    actorCreated(): void;
    receiveMessage(aMessage: any): Promise<any>;
    observe(subject: any, topic: any, data: any): void;
    lastObserved: {
        subject: any;
        topic: any;
        data: any;
    };
    show(): string;
    didDestroy(): void;
}
