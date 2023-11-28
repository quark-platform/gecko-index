export class GeckoViewContentChild {
    lastOrientation: number;
    actorCreated(): void;
    pageShow: Promise<any>;
    receivedPageShow: (value: any) => void;
    toPixels(aLength: any, aType: any): any;
    toScrollBehavior(aBehavior: any): any;
    collectSessionState(): {
        history: any;
        formdata: any;
        scrolldata: any;
    };
    orientation(): 0 | 1;
    receiveMessage(message: any): Promise<boolean> | {
        history: any;
        formdata: any;
        scrolldata: any;
    };
    containsFormData(): Promise<boolean>;
    restoreSessionState(message: any): Promise<void>;
    handleEvent(aEvent: any): void;
}
