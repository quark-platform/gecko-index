export class DocShellHelpersParent {
    static eventListener: any;
    static eventsToListenFor: any;
    static observers: any;
    receiveMessage({ name, data }: {
        name: any;
        data: any;
    }): void;
}
export class DocShellHelpersChild {
    receiveMessage({ name, data }: {
        name: any;
        data: any;
    }): void;
    handleEvent(event: any): void;
    observe(subject: any, topic: any): void;
}
