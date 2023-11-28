export class FaviconLoader {
    constructor(actor: any);
    actor: any;
    iconInfos: any[];
    beforePageShow: boolean;
    richIconLoader: IconLoader;
    tabIconLoader: IconLoader;
    iconTask: any;
    loadIcons(): void;
    addIconFromLink(aLink: any, aIsRichIcon: any): boolean;
    addDefaultIcon(pageUri: any): void;
    onPageShow(): void;
    onPageHide(): void;
}
declare class IconLoader {
    constructor(actor: any);
    actor: any;
    load(iconInfo: any): Promise<void>;
    _loader: FaviconLoad;
    cancel(): void;
}
declare class FaviconLoad {
    constructor(iconInfo: any);
    icon: any;
    channel: any;
    load(): any;
    _deferred: any;
    dataBuffer: any;
    stream: any;
    cancel(): void;
    onStartRequest(request: any): void;
    onDataAvailable(request: any, inputStream: any, offset: any, count: any): void;
    asyncOnChannelRedirect(oldChannel: any, newChannel: any, flags: any, callback: any): void;
    onStopRequest(request: any, statusCode: any): Promise<void>;
    getInterface(iid: any): this;
}
export {};
