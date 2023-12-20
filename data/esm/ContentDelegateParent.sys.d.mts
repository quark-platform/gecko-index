/// <reference types="gecko-types" />
export class ContentDelegateParent extends GeckoViewActorParent {
    didDestroy(): void;
    _didDestroy: boolean;
    receiveMessage(aMsg: any): Promise<any>;
    #private;
}
import { GeckoViewActorParent } from "resource://gre/modules/GeckoViewActorParent.sys.mjs";
