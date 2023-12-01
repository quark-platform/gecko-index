export class ASRouterChild extends JSWindowActorChild {
    observers: Set<any>;
    didDestroy(): void;
    actorCreated(): void;
    handleEvent(event: any): void;
    addParentListener(listener: any): void;
    removeParentListener(listener: any): void;
    receiveMessage({ name, data }: {
        name: any;
        data: any;
    }): void;
    wrapPromise(promise: any): any;
    sendQuery(aName: any, aData?: any): any;
    asRouterMessage({ type, data }: {
        type: any;
        data: any;
    }): any;
}
