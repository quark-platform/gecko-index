export class NetworkObserver {
    _browserSessionCount: Map<any, any>;
    _redirectMap: Map<any, any>;
    _browserSuspendedChannels: Map<any, any>;
    _extraHTTPHeaders: Map<any, any>;
    _browserResponseStorages: Map<any, any>;
    _onRequest(channel: any, topic: any): void;
    _onExamineResponse: any;
    _onCachedResponse: any;
    dispose(): void;
    setExtraHTTPHeaders(browser: any, headers: any): void;
    enableRequestInterception(browser: any): void;
    disableRequestInterception(browser: any): void;
    resumeSuspendedRequest(browser: any, requestId: any, headers: any): void;
    getResponseBody(browser: any, requestId: any): any;
    abortSuspendedRequest(browser: any, aRequestId: any): void;
    _onChannelRedirect(oldChannel: any, newChannel: any): void;
    _onResponse(fromCache: any, httpChannel: any, topic: any): void;
    _onResponseFinished(browser: any, httpChannel: any, body: any): void;
    isActive(browser: any): boolean;
    startTrackingBrowserNetwork(browser: any): () => void;
    stopTrackingBrowserNetwork(browser: any): void;
    /**
     * Returns the frameId of the current httpChannel.
     */
    frameId(httpChannel: any): any;
}
e: any): void;
    getThrottleData(): any;
    setThrottleData(value: any): void;
    getActivityTypeString(activityType: any, activitySubtype: any): string;
    /**
     * Begin observing HTTP traffic that originates inside the current tab.
     *
     * @see https://developer.mozilla.org/en/XPCOM_Interface_Reference/nsIHttpActivityObserver
     *
     * @param nsIHttpChannel channel
     * @param number activityType
     * @param number activitySubtype
     * @param number timestamp
     * @param number extraSizeData
     * @param string extraStringData
     */
    observeActivity: any;
    /**
     * Block a request based on certain filtering options.
     *
     * Currently, exact URL match or URL patterns are supported.
     */
    blockRequest(filter: any): void;
    /**
     * Unblock a request based on certain filtering options.
     *
     * Currently, exact URL match or URL patterns are supported.
     */
    unblockRequest(filter: any): void;
    /**
     * Updates the list of blocked request strings
     *
     * This match will be a (String).includes match, not an exact URL match
     */
    setBlockedUrls(urls: any): void;
    /**
     * Returns a list of blocked requests
     * Useful as blockedURLs is mutated by both console & netmonitor
     */
    getBlockedUrls(): IterableIterator<any>;
    override(url: any, path: any): void;
    removeOverride(url: any): void;
    clear(): void;
    /**
     * Suspend observer activity. This is called when the Network monitor actor stops
     * listening.
     */
    destroy(): void;
    #private;
}
