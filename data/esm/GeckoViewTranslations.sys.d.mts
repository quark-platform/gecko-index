/// <reference types="gecko-types" />
export class GeckoViewTranslations extends GeckoViewModule {
    onEvent(aEvent: any, aData: any, aCallback: any): void;
    handleEvent(aEvent: any): void;
}
export namespace GeckoViewTranslationsSettings {
    function _getLanguageSettingName(langTag: any): string;
    function _checkValidLanguageTagAndMinimize(langTag: any): string;
    function onEvent(aEvent: any, aData: any, aCallback: any): Promise<void>;
}
import { GeckoViewModule } from "resource://gre/modules/GeckoViewModule.sys.mjs";
