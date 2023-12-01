/// <reference types="gecko-types" />
export class GeckoViewContentChild extends GeckoViewActorChild {
    lastOrientation: number;
    pageShow: Promise<any>;
    receivedPageShow: (value: any) => void;
    toPixels(aLength: any, aType: any): any;
    toScrollBehavior(aBehavior: any): any;
    collectSessionState(): {
        history: any;
        formdata: CollectedData;
        scrolldata: CollectedData;
    };
    orientation(): 0 | 1;
    receiveMessage(message: any): Promise<boolean> | {
        history: any;
        formdata: CollectedData;
        scrolldata: CollectedData;
    };
    containsFormData(): Promise<boolean>;
    restoreSessionState(message: any): Promise<void>;
    handleEvent(aEvent: any): void;
}
import { GeckoViewActorChild } from "resource://gre/modules/GeckoViewActorChild.sys.mjs";
