export namespace PushServiceWebSocket {
    export let QueryInterface: any;
    export let name: string;
    export let _mainPushService: any;
    export let _serverURI: any;
    export let _currentlyRegistering: Set<any>;
    export function newPushDB(): any;
    export function disconnect(): void;
    export function observe(aSubject: any, aTopic: any, aData: any): void;
    /**
     * Handles a UAID change. Unlike reconnects, we cancel all pending requests
     * after disconnecting. Existing subscriptions stored in IndexedDB will be
     * dropped on reconnect.
     */
    export function _onUAIDChanged(): void;
    /** Handles a ping, backoff, or request timeout timer event. */
    export function _onTimerFired(timer: any): void;
    /**
     * Sends a ping to the server. Bypasses the request queue, but starts the
     * request timeout timer. If the socket is already closed, or the server
     * does not respond within the timeout, the client will reconnect.
     */
    export function _sendPing(): void;
    /** Times out any pending requests. */
    export function _timeOutRequests(): void;
    export let _UAID: any;
    export let _ws: any;
    export let _pendingRequests: Map<any, any>;
    export { STATE_SHUT_DOWN as _currentState };
    export let _requestTimeout: number;
    export let _requestTimeoutTimer: any;
    export let _retryFailCount: number;
    export let _skipReconnect: boolean;
    export let _dataEnabled: boolean;
    export let _lastPingTime: number;
    export let _pingTimer: any;
    export let _backoffTimer: any;
    /**
     * Sends a message to the Push Server through an open websocket.
     * typeof(msg) shall be an object
     */
    export function _wsSendMessage(msg: any): void;
    export function init(options: any, mainPushService: any, serverURI: any): Promise<void>;
    export function _reconnect(): void;
    export function _shutdownWS(shouldCancelPending?: boolean): void;
    export function uninit(): void;
    /**
     * How retries work: If the WS is closed due to a socket error,
     * _startBackoffTimer() is called. The retry timer is started and when
     * it times out, beginWSSetup() is called again.
     *
     * If we are in the middle of a timeout (i.e. waiting), but
     * a register/unregister is called, we don't want to wait around anymore.
     * _sendRequest will automatically call beginWSSetup(), which will cancel the
     * timer. In addition since the state will have changed, even if a pending
     * timer event comes in (because the timer fired the event before it was
     * cancelled), so the connection won't be reset.
     */
    export function _startBackoffTimer(): void;
    /** Indicates whether we're waiting for pongs or requests. */
    export function _hasPendingRequests(): boolean;
    /**
     * Starts the request timeout timer unless we're already waiting for a pong
     * or register request.
     */
    export function _startRequestTimeoutTimer(): void;
    /** Starts or resets the ping timer. */
    export function _startPingTimer(): void;
    export function _beginWSSetup(): void;
    export function connect(broadcastListeners: any): void;
    export function isConnected(): boolean;
    /**
     * Protocol handler invoked by server message.
     */
    export function _handleHelloReply(reply: any): void;
    /**
     * Protocol handler invoked by server message.
     */
    export function _handleRegisterReply(reply: any): void;
    export function _handleUnregisterReply(reply: any): void;
    export function _handleDataUpdate(update: any): void;
    /**
     * Protocol handler invoked by server message.
     */
    export function _handleNotificationReply(reply: any): void;
    export function _handleBroadcastReply(reply: any): void;
    export function reportDeliveryError(messageID: any, reason: any): void;
    export function _sendAck(channelID: any, version: any, status: any): void;
    export function _generateID(): any;
    export function register(record: any): Promise<any>;
    export function unregister(record: any, reason: any): Promise<any>;
    export let _queueStart: Promise<void>;
    export let _notifyRequestQueue: any;
    export let _queue: any;
    export function _enqueue(op: any): void;
    /** Sends a request to the server. */
    export function _send(data: any): void;
    /** Indicates whether a request has a corresponding reply from the server. */
    export function _requestHasReply(data: any): boolean;
    /**
     * Sends all pending requests that expect replies. Called after the connection
     * is established and the handshake is complete.
     */
    export function _sendPendingRequests(): void;
    /** Queues an outgoing request, establishing a connection if necessary. */
    export function _queueRequest(data: any): void;
    export function _receivedUpdate(aChannelID: any, aLatestVersion: any): void;
    export function _wsOnStart(context: any): void;
    /**
     * Sends a `hello` handshake to the server.
     *
     * @param {Array<PushRecordWebSocket>} An array of records for existing
     *        subscriptions, used to determine whether to rotate our UAID.
     */
    export function _sendHello(records: any): void;
    /**
     * This statusCode is not the websocket protocol status code, but the TCP
     * connection close status code.
     *
     * If we do not explicitly call ws.close() then statusCode is always
     * NS_BASE_STREAM_CLOSED, even on a successful close.
     */
    export function _wsOnStop(context: any, statusCode: any): void;
    export function _wsOnMessageAvailable(context: any, message: any): void;
    /**
     * The websocket should never be closed. Since we don't call ws.close(),
     * _wsOnStop() receives error code NS_BASE_STREAM_CLOSED (see comment in that
     * function), which calls reconnect and re-establishes the WebSocket
     * connection.
     *
     * If the server requested that we back off, we won't reconnect until the
     * next network state change event, or until we need to send a new register
     * request.
     */
    export function _wsOnServerClose(context: any, aStatusCode: any, aReason: any): void;
    /**
     * Rejects all pending register requests with errors.
     */
    export function _cancelPendingRequests(): void;
    /** Creates a case-insensitive map key for a request that expects a reply. */
    export function _makePendingRequestKey(data: any): string;
    /** Sends a request and waits for a reply from the server. */
    export function _sendRequestForReply(record: any, data: any): Promise<any>;
    /** Removes and returns a pending request for a server reply. */
    export function _takeRequestForReply(reply: any): any;
    export function sendSubscribeBroadcast(serviceId: any, version: any): void;
}
declare const STATE_SHUT_DOWN: 0;
export {};
