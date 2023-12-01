/// <reference types="gecko-types" />
export class GeckoViewClipboardPermissionChild extends GeckoViewActorChild {
    _pendingPromise: any;
    promptPermissionForClipboardRead(): Promise<void>;
    handleEvent(aEvent: any): void;
}
import { GeckoViewActorChild } from "resource://gre/modules/GeckoViewActorChild.sys.mjs";
