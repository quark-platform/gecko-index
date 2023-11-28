export class LinkHandlerChild {
    seenTabIcon: boolean;
    _iconLoader: any;
    get iconLoader(): any;
    addRootIcon(): void;
    onHeadParsed(event: any): void;
    onPageShow(event: any): void;
    onPageHide(event: any): void;
    onLinkEvent(event: any): void;
    handleEvent(event: any): void;
}
