/// <reference types="gecko-types" />
export class ProgressDelegateChild extends GeckoViewActorChild {
    handleEvent(aEvent: any): void;
}
import { GeckoViewActorChild } from "resource://gre/modules/GeckoViewActorChild.sys.mjs";
