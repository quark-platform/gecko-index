/**
 * The NetworkEventRecord implements the interface expected from network event
 * owners for consumers of the DevTools NetworkObserver.
 *
 * The NetworkEventRecord emits the before-request-sent event on behalf of the
 * NetworkListener instance which created it.
 */
export class NetworkEventRecord {
    /**
     *
     * @param {object} networkEvent
     *     The initial network event information (see createNetworkEvent() in
     *     NetworkUtils.sys.mjs).
     * @param {nsIChannel} channel
     *     The nsIChannel behind this network event.
     * @param {NetworkListener} networkListener
     *     The NetworkListener which created this NetworkEventRecord.
     */
    constructor(networkEvent: object, channel: nsIChannel, networkListener: NetworkListener);
    /**
     * Add network request POST data.
     *
     * Required API for a NetworkObserver event owner.
     *
     * @param {object} postData
     *     The request POST data.
     */
    addRequestPostData(postData: object): void;
    /**
     * Add the initial network response information.
     *
     * Required API for a NetworkObserver event owner.
     *
     *
     * @param {object} options
     * @param {nsIChannel} options.channel
     *     The channel.
     * @param {boolean} options.fromCache
     * @param {string} options.rawHeaders
     */
    addResponseStart(options: {
        channel: nsIChannel;
        fromCache: boolean;
        rawHeaders: string;
    }): void;
    /**
     * Add connection security information.
     *
     * Required API for a NetworkObserver event owner.
     *
     * Not used for RemoteAgent.
     *
     * @param {object} info
     *     The object containing security information.
     * @param {boolean} isRacing
     *     True if the corresponding channel raced the cache and network requests.
     */
    addSecurityInfo(info: object, isRacing: boolean): void;
    /**
     * Add network event timings.
     *
     * Required API for a NetworkObserver event owner.
     *
     * Not used for RemoteAgent.
     *
     * @param {number} total
     *     The total time for the request.
     * @param {object} timings
     *     The har-like timings.
     * @param {object} offsets
     *     The har-like timings, but as offset from the request start.
     * @param {Array} serverTimings
     *     The server timings.
     */
    addEventTimings(total: number, timings: object, offsets: object, serverTimings: any[]): void;
    /**
     * Add response cache entry.
     *
     * Required API for a NetworkObserver event owner.
     *
     * Not used for RemoteAgent.
     *
     * @param {object} options
     *     An object which contains a single responseCache property.
     */
    addResponseCache(options: object): void;
    /**
     * Add response content.
     *
     * Required API for a NetworkObserver event owner.
     *
     * @param {object} response
     *     An object which represents the response content.
     * @param {object} responseInfo
     *     Additional meta data about the response.
     */
    addResponseContent(response: object, responseInfo: object): void;
    /**
     * Add server timings.
     *
     * Required API for a NetworkObserver event owner.
     *
     * Not used for RemoteAgent.
     *
     * @param {Array} serverTimings
     *     The server timings.
     */
    addServerTimings(serverTimings: any[]): void;
    onAuthPrompt(authDetails: any, authCallbacks: any): void;
    #private;
}
