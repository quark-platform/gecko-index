/// <reference types="gecko-types" />
export class GeckoViewAutoFillParent extends GeckoViewActorParent {
    sessionId: any;
    get rootActor(): any;
    get autofill(): any;
    add(node: any): any;
    focus(node: any): void;
    commit(node: any): void;
    update(node: any): void;
    clear(): void;
    receiveMessage(aMessage: any): Promise<any>;
}
import { GeckoViewActorParent } from "resource://gre/modules/GeckoViewActorParent.sys.mjs";
