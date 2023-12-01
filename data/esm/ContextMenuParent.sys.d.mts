export class ContextMenuParent extends JSWindowActorParent {
    receiveMessage(message: any): void;
    hiding(): void;
    reloadFrame(targetIdentifier: any, forceReload: any): void;
    getImageText(targetIdentifier: any): Promise<any>;
    toggleRevealPassword(targetIdentifier: any): void;
    useRelayMask(targetIdentifier: any, origin: any): Promise<void>;
    reloadImage(targetIdentifier: any): void;
    getFrameTitle(targetIdentifier: any): Promise<any>;
    mediaCommand(targetIdentifier: any, command: any, data: any): void;
    canvasToBlobURL(targetIdentifier: any): Promise<any>;
    saveVideoFrameAsImage(targetIdentifier: any): Promise<any>;
    setAsDesktopBackground(targetIdentifier: any): Promise<any>;
    getSearchFieldBookmarkData(targetIdentifier: any): Promise<any>;
}
