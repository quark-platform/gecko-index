/// <reference types="gecko-types" />
export class GeckoViewPdfjsChild extends GeckoViewActorChild {
    init(aSupportsFind: any): void;
    dispatchEvent(aType: any, aDetail: any): void;
    receiveMessage(aMsg: any): void;
}
import { GeckoViewActorChild } from "resource://gre/modules/GeckoViewActorChild.sys.mjs";
