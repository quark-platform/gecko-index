export class TestWindowParent {
    wrappedJSObject: this;
    sawActorCreated: boolean;
    actorCreated(): void;
    receiveMessage(aMessage: any): {
        result: number;
    };
    show(): string;
}
