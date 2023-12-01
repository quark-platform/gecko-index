/// <reference types="gecko-types" />
export class GeckoViewPdfjsParent extends GeckoViewActorParent {
    receiveMessage(aMsg: any): void | Promise<void>;
    didDestroy(): void;
    #private;
}
import { GeckoViewActorParent } from "resource://gre/modules/GeckoViewActorParent.sys.mjs";
