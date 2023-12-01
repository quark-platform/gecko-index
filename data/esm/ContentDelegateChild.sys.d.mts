/// <reference types="gecko-types" />
export class ContentDelegateChild extends GeckoViewActorChild {
    notifyParentOfViewportFit(): void;
    triggerViewportFitChange: any;
    lastViewportFit: any;
    handleEvent(aEvent: any): void;
}
import { GeckoViewActorChild } from "resource://gre/modules/GeckoViewActorChild.sys.mjs";
