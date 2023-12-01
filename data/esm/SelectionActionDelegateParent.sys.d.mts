/// <reference types="gecko-types" />
export class SelectionActionDelegateParent extends GeckoViewActorParent {
    respondTo: any;
    actionId: any;
    get rootActor(): any;
    receiveMessage(aMessage: any): void;
    hideSelectionAction(aRespondTo: any, reason: any): void;
    showSelectionAction(aRespondTo: any, aData: any): void;
    executeSelectionAction(aData: any): void;
}
import { GeckoViewActorParent } from "resource://gre/modules/GeckoViewActorParent.sys.mjs";
