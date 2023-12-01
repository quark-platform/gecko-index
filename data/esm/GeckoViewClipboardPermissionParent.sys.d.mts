/// <reference types="gecko-types" />
export class GeckoViewClipboardPermissionParent extends GeckoViewActorParent {
    getLastOverWindowPointerLocation(): {
        x: any;
        y: any;
    };
    receiveMessage(aMessage: any): any;
}
import { GeckoViewActorParent } from "resource://gre/modules/GeckoViewActorParent.sys.mjs";
