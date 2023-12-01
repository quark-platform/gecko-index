/// <reference types="gecko-types" />
export class MediaControlDelegateChild extends GeckoViewActorChild {
    handleEvent(aEvent: any): void;
    handleFullscreenChanged(retry: any): Promise<void>;
}
import { GeckoViewActorChild } from "resource://gre/modules/GeckoViewActorChild.sys.mjs";
