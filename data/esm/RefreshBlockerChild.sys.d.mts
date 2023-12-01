export class RefreshBlockerChild extends JSWindowActorChild {
    didDestroy(): void;
    enable(): void;
    disable(): void;
    receiveMessage(message: any): void;
}
export class RefreshBlockerObserverChild {
    filtersMap: Map<any, any>;
    observe(subject: any, topic: any, data: any): void;
    enable(docShell: any): void;
    disable(docShell: any): void;
}
