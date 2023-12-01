/// <reference types="gecko-types" />
export class LoadURIDelegateChild extends GeckoViewActorChild {
    handleLoadError(aUri: any, aError: any, aErrorModule: any): any;
    QueryInterface: MozQueryInterface;
}
import { GeckoViewActorChild } from "resource://gre/modules/GeckoViewActorChild.sys.mjs";
