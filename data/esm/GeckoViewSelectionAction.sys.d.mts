/// <reference types="gecko-types" />
export class GeckoViewSelectionAction extends GeckoViewModule {
    get actor(): any;
    onEvent(aEvent: any, aData: any, aCallback: any): void;
}
import { GeckoViewModule } from "resource://gre/modules/GeckoViewModule.sys.mjs";
