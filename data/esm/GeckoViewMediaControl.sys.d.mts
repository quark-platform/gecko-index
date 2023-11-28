export class GeckoViewMediaControl {
    onInit(): void;
    onInitBrowser(): void;
    onDestroyBrowser(): void;
    onEnable(): void;
    onDisable(): void;
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
