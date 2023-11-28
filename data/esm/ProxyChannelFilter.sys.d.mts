export class ProxyChannelFilter {
    constructor(context: any, extension: any, listener: any, filter: any, extraInfoSpec: any);
    context: any;
    extension: any;
    filter: {
        urls: any;
        types: any;
        tabId: any;
        windowId: any;
        incognito: any;
    };
    listener: any;
    extraInfoSpec: any;
    getRequestData(channel: any, extraData: any): any;
    /**
     * This method (which is required by the nsIProtocolProxyService interface)
     * is called to apply proxy filter rules for the given URI and proxy object
     * (or list of proxy objects).
     *
     * @param {nsIChannel} channel The channel for which these proxy settings apply.
     * @param {nsIProxyInfo} defaultProxyInfo The proxy (or list of proxies) that
     *     would be used by default for the given URI. This may be null.
     * @param {nsIProxyProtocolFilterResult} proxyFilter
     */
    applyFilter(channel: nsIChannel, defaultProxyInfo: nsIProxyInfo, proxyFilter: nsIProxyProtocolFilterResult): Promise<void>;
    destroy(): void;
}
