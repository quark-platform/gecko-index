/// <reference types="gecko-types" />
export class ContentDelegateParent extends GeckoViewActorParent {
    receiveMessage(aMsg: any): Promise<any>;
}
import { GeckoViewActorParent } from "resource://gre/modules/GeckoViewActorParent.sys.mjs";
