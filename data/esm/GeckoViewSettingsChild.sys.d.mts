/// <reference types="gecko-types" />
export class GeckoViewSettingsChild extends GeckoViewActorChild {
    receiveMessage(message: any): void;
}
import { GeckoViewActorChild } from "resource://gre/modules/GeckoViewActorChild.sys.mjs";
