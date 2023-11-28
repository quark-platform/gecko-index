export class ContextObserver {
    constructor(chromeEventHandler: any);
    chromeEventHandler: any;
    _fissionEnabled: any;
    destructor(): void;
    handleEvent({ type, target, persisted }: {
        type: any;
        target: any;
        persisted: any;
    }): void;
    observe(subject: any, topic: any, data: any): void;
    onDocShellCreated(docShell: any): void;
    onDocShellDestroyed(docShell: any): void;
}
