/**
 * The network monitor uses the nsIHttpActivityDistributor to monitor network
 * requests. The nsIObserverService is also used for monitoring
 * http-on-examine-response notifications. All network request information is
 * routed to the remote Web Console.
 *
 * @constructor
 * @param {Object} options
 * @param {Function(nsIChannel): boolean} options.ignoreChannelFunction
 *        This function will be called for every detected channel to decide if it
 *        should be monitored or not.
 * @param {Function(NetworkEvent): owner} options.onNetworkEvent
 *        This method is invoked once for every new network request with two
 *        arguments:
 *        - {Object} networkEvent: object created by NetworkUtils:createNetworkEvent,
 *          containing initial network request information as an argument.
 *        - {nsIChannel} channel: the channel for which the request was detected
 *
 *        `onNetworkEvent()` must return an "owner" object which holds several add*()
 *        methods which are used to add further network request/response information.
 */
export class NetworkObserver {
    constructor(options?: {});
    setSaveRequestAndResponseBodies(save: any): void;
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
