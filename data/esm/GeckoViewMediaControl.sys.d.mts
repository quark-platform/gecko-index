/// <reference types="gecko-types" />
export class GeckoViewMediaControl extends GeckoViewModule {
    get controller(): any;
    onEvent(aEvent: any, aData: any, aCallback: any): void;
    handleEvent(aEvent: any): void;
    handleActivated(): void;
    handleDeactivated(): void;
    handlePositionStateChanged(aEvent: any): void;
    handleSupportedKeysChanged(): void;
    handleMetadataChanged(): void;
    handlePlaybackStateChanged(): void;
}
import { GeckoViewModule } from "resource://gre/modules/GeckoViewModule.sys.mjs";
