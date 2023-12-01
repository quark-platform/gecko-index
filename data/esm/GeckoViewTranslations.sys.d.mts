/// <reference types="gecko-types" />
export class GeckoViewTranslations extends GeckoViewModule {
    onEvent(aEvent: any, aData: any, aCallback: any): void;
    handleEvent(aEvent: any): void;
}
import { GeckoViewModule } from "resource://gre/modules/GeckoViewModule.sys.mjs";
