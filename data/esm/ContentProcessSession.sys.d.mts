export class ContentProcessSession {
    constructor(messageManager: any, browsingContext: any, content: any, docShell: any);
    messageManager: any;
    browsingContext: any;
    content: any;
    docShell: any;
    domains: any;
    destructor(): void;
    get contextObserver(): any;
    _contextObserver: any;
    onEvent(eventName: any, params: any): void;
    receiveMessage({ name, data }: {
        name: any;
        data: any;
    }): Promise<void>;
}
