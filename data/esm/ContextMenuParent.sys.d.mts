export class ContextMenuParent {
    receiveMessage(message: any): void;
    hiding(): void;
    reloadFrame(targetIdentifier: any, forceReload: any): void;
    getImageText(targetIdentifier: any): any;
    toggleRevealPassword(targetIdentifier: any): void;
    useRelayMask(targetIdentifier: any, origin: any): Promise<void>;
    reloadImage(targetIdentifier: any): void;
    getFrameTitle(targetIdentifier: any): any;
    mediaCommand(targetIdentifier: any, command: any, data: any): void;
    canvasToBlobURL(targetIdentifier: any): any;
    saveVideoFrameAsImage(targetIdentifier: any): any;
    setAsDesktopBackground(targetIdentifier: any): any;
    getSearchFieldBookmarkData(targetIdentifier: any): any;
}
