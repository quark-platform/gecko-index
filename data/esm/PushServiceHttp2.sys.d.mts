export namespace PushServiceHttp2 {
    let _mainPushService: any;
    let _serverURI: any;
    let _conns: {};
    let _started: boolean;
    let _listenersPendingRetry: Set<any>;
    function newPushDB(): any;
    function hasmainPushService(): boolean;
    function connect(broadcastListeners: any): Promise<void>;
    function sendSubscribeBroadcast(serviceId: any, version: any): Promise<void>;
    function isConnected(): boolean;
    function disconnect(): void;
    function _makeChannel(aUri: any): any;
    /**
     * Subscribe new resource.
     */
    function register(aRecord: any): any;
    function _subscribeResourceInternal(aSubInfo: any): any;
    function _deleteResource(aUri: any): Promise<any>;
    /**
     * Unsubscribe the resource with a subscription uri aSubscriptionUri.
     * We can't do anything about it if it fails, so we don't listen for response.
     */
    function _unsubscribeResource(aSubscriptionUri: any): Promise<any>;
    /**
     * Start listening for messages.
     */
    function _listenForMsgs(aSubscriptionUri: any): void;
    function _ackMsgRecv(aAckUri: any): Promise<any>;
    function init(aOptions: any, aMainPushService: any, aServerURL: any): Promise<void>;
    function _retryAfterBackoff(aSubscriptionUri: any, retryAfter: any): void;
    function _shutdownConnections(deleteInfo: any): void;
    function startConnections(aSubscriptions: any): void;
    function _startSingleConnection(record: any): void;
    function _shutdownSubscription(aSubscriptionUri: any): void;
    function uninit(): void;
    function _abortPendingSubscriptionRetries(): void;
    function unregister(aRecord: any): Promise<any>;
    function reportDeliveryError(messageID: any, reason: any): void;
    /** Push server has deleted subscription.
     *  Re-subscribe - if it succeeds send update db record and send
     *                 pushsubscriptionchange,
     *               - on error delete record and send pushsubscriptionchange
     *  TODO: maybe pushsubscriptionerror will be included.
     */
    function _resubscribe(aSubscriptionUri: any): void;
    function connOnStop(aRequest: any, aSuccess: any, aSubscriptionUri: any): void;
    function addListenerPendingRetry(aListener: any): void;
    function removeListenerPendingRetry(aListener: any): void;
    function _pushChannelOnStop(aUri: any, aAckUri: any, aHeaders: any, aMessage: any): void;
}
