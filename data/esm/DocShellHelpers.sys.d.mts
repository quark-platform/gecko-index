export class DocShellHelpersParent extends JSWindowActorParent {
    static eventListener: any;
    static eventsToListenFor: any;
    static observers: any;
    receiveMessage({ name, data }: {
        name: any;
        data: any;
    }): void;
}
export class DocShellHelpersChild extends JSWindowActorChild {
    receiveMessage({ name, data }: {
        name: any;
        data: any;
    }): void;
    handleEvent(event: any): void;
    observe(subject: any, topic: any): void;
}
