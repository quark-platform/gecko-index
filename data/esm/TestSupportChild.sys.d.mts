/// <reference types="gecko-types" />
export class TestSupportChild extends GeckoViewActorChild {
    receiveMessage(aMsg: any): any;
}
import { GeckoViewActorChild } from "resource://gre/modules/GeckoViewActorChild.sys.mjs";
