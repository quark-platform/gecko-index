export const PushServiceWebSocket: any;
export const PushServiceHttp2: any;
export namespace PushService {
    export let _service: any;
    export { PUSH_SERVICE_UNINIT as _state };
    export let _db: any;
    export let _options: any;
    export let _visibleNotifications: Map<any, any>;
    export let _updateQuotaTestCallback: any;
    export let _updateQuotaTimeouts: Set<any>;
    export let _stateChangeProcessQueue: any;
    export function _stateChangeProcessEnqueue(op: any): any;
    export let _pendingRegisterRequest: {};
    export let _notifyActivated: any;
    export let _activated: any;
    export function _checkActivated(): any;
    export function _makePendingKey(aPageRecord: any): string;
    export function _lookupOrPutPendingRequest(aPageRecord: any): any;
    export function _deletePendingRequest(aPageRecord: any): void;
    export function _setState(aNewState: any): void;
    export function _changeStateOfflineEvent(offline: any, calledFromConnEnabledEvent: any): Promise<void>;
    export function _changeStateConnectionEnabledEvent(enabled: any): Promise<void>;
    export function changeTestServer(url: any, options?: {}): any;
    export function observe(aSubject: any, aTopic: any, aData: any): void;
    export function _clearOriginData(data: any): Promise<any>;
    /**
     * Sends an unregister request to the server in the background. If the
     * service is not connected, this function is a no-op.
     *
     * @param {PushRecord} record The record to unregister.
     * @param {Number} reason An `nsIPushErrorReporter` unsubscribe reason,
     *  indicating why this record was removed.
     */
    export function _backgroundUnregister(record: PushRecord, reason: number): void;
    export function _findService(serverURL: any): any[];
    export function _changeServerURL(serverURI: any, event: any, options?: {}): any;
    /**
     * PushService initialization is divided into 4 parts:
     * init() - start listening for quit-application and serverURL changes.
     *          state is change to PUSH_SERVICE_INIT
     * startService() - if serverURL is present this function is called. It starts
     *                  listening for broadcasted messages, starts db and
     *                  PushService connection (WebSocket).
     *                  state is change to PUSH_SERVICE_ACTIVATING.
     * startObservers() - start other observers.
     * changeStateConnectionEnabledEvent  - checks prefs and offline state.
     *                                      It changes state to:
     *                                        PUSH_SERVICE_RUNNING,
     *                                        PUSH_SERVICE_ACTIVE_OFFLINE or
     *                                        PUSH_SERVICE_CONNECTION_DISABLE.
     */
    export function init(options?: {}): Promise<void>;
    export function _startObservers(): void;
    export function _startService(service: any, serverURI: any, options: any): any;
    /**
     * PushService uninitialization is divided into 3 parts:
     * stopObservers() - stot observers started in startObservers.
     * stopService() - It stops listening for broadcasted messages, stops db and
     *                 PushService connection (WebSocket).
     *                 state is changed to PUSH_SERVICE_INIT.
     * uninit() - stop listening for quit-application and serverURL changes.
     *            state is change to PUSH_SERVICE_UNINIT
     */
    export function _stopService(event: any): any;
    export function _stopObservers(): void;
    export function _shutdownService(): any;
    export function uninit(): Promise<void>;
    /**
     * Drops all active registrations and notifies the associated service
     * workers. This function is called when the user switches Push servers,
     * or when the server invalidates all existing registrations.
     *
     * We ignore expired registrations because they're already handled in other
     * code paths. Registrations that expired after exceeding their quotas are
     * evicted at startup, or on the next `idle-daily` event. Registrations that
     * expired because the user revoked the notification permission are evicted
     * once the permission is reinstated.
     */
    export function dropUnexpiredRegistrations(): any;
    export function _notifySubscriptionChangeObservers(record: any): void;
    /**
     * Drops a registration and notifies the associated service worker. If the
     * registration does not exist, this function is a no-op.
     *
     * @param {String} keyID The registration ID to remove.
     * @returns {Promise} Resolves once the worker has been notified.
     */
    export function dropRegistrationAndNotifyApp(aKeyID: any): Promise<any>;
    /**
     * Replaces an existing registration and notifies the associated service
     * worker.
     *
     * @param {String} aOldKey The registration ID to replace.
     * @param {PushRecord} aNewRecord The new record.
     * @returns {Promise} Resolves once the worker has been notified.
     */
    export function updateRegistrationAndNotifyApp(aOldKey: string, aNewRecord: PushRecord): Promise<any>;
    /**
     * Updates a registration and notifies the associated service worker.
     *
     * @param {String} keyID The registration ID to update.
     * @param {Function} updateFunc Returns the updated record.
     * @returns {Promise} Resolves with the updated record once the worker
     *  has been notified.
     */
    export function updateRecordAndNotifyApp(aKeyID: any, aUpdateFunc: any): Promise<any>;
    export function ensureCrypto(record: any): Promise<any>;
    /**
     * Dispatches an incoming message to a service worker, recalculating the
     * quota for the associated push registration. If the quota is exceeded,
     * the registration and message will be dropped, and the worker will not
     * be notified.
     *
     * @param {String} keyID The push registration ID.
     * @param {String} messageID The message ID, used to report service worker
     *  delivery failures. For Web Push messages, this is the version. If empty,
     *  failures will not be reported.
     * @param {Object} headers The encryption headers.
     * @param {ArrayBuffer|Uint8Array} data The encrypted message data.
     * @param {Function} updateFunc A function that receives the existing
     *  registration record as its argument, and returns a new record. If the
     *  function returns `null` or `undefined`, the record will not be updated.
     *  `PushServiceWebSocket` uses this to drop incoming updates with older
     *  versions.
     * @returns {Promise} Resolves with an `nsIPushErrorReporter` ack status
     *  code, indicating whether the message was delivered successfully.
     */
    export function receivedPushMessage(keyID: string, messageID: string, headers: any, data: ArrayBuffer | Uint8Array, updateFunc: Function): Promise<any>;
    /**
     * Dispatches a broadcast notification to the BroadcastService.
     *
     * @param {Object} message The reply received by PushServiceWebSocket
     * @param {Object} context Additional information about the context in which the
     *  notification was received.
     */
    export function receivedBroadcastMessage(message: any, context: any): void;
    /**
     * Updates a registration record after receiving a push message.
     *
     * @param {String} keyID The push registration ID.
     * @param {Function} updateFunc The function passed to `receivedPushMessage`.
     * @returns {Promise} Resolves with the updated record, or rejects if the
     *  record was not updated.
     */
    export function _updateRecordAfterPush(keyID: string, updateFunc: Function): Promise<any>;
    /**
     * Decrypts an incoming message and notifies the associated service worker.
     *
     * @param {PushRecord} record The receiving registration.
     * @param {String} messageID The message ID.
     * @param {Object} headers The encryption headers.
     * @param {ArrayBuffer|Uint8Array} data The encrypted message data.
     * @returns {Promise} Resolves with an ack status code.
     */
    export function _decryptAndNotifyApp(record: PushRecord, messageID: string, headers: any, data: ArrayBuffer | Uint8Array): Promise<any>;
    export function _updateQuota(keyID: any): void;
    export function notificationForOriginShown(origin: any): void;
    export function notificationForOriginClosed(origin: any): void;
    export function reportDeliveryError(messageID: any, reason: any): void;
    export function _notifyApp(aPushRecord: any, messageID: any, message: any): 0 | 2;
    export function getByKeyID(aKeyID: any): any;
    export function getAllUnexpired(): any;
    export function _sendRequest(action: any, ...params: any[]): any;
    /**
     * Called on message from the child process. aPageRecord is an object sent by
     * the push manager, identifying the sending page and other fields.
     */
    export function _registerWithServer(aPageRecord: any): any;
    export function _sendUnregister(aRecord: any, aReason: any): any;
    /**
     * Exceptions thrown in _onRegisterSuccess are caught by the promise obtained
     * from _service.request, causing the promise to be rejected instead.
     */
    export function _onRegisterSuccess(aRecord: any): any;
    /**
     * Exceptions thrown in _onRegisterError are caught by the promise obtained
     * from _service.request, causing the promise to be rejected instead.
     */
    export function _onRegisterError(reply: any): never;
    export function notificationsCleared(): void;
    export function _getByPageRecord(pageRecord: any): any;
    export function register(aPageRecord: any): Promise<any>;
    export function subscribeBroadcast(broadcastId: any, version: any): Promise<void>;
    /**
     * Called on message from the child process.
     *
     * Why is the record being deleted from the local database before the server
     * is told?
     *
     * Unregistration is for the benefit of the app and the AppServer
     * so that the AppServer does not keep pinging a channel the UserAgent isn't
     * watching The important part of the transaction in this case is left to the
     * app, to tell its server of the unregistration.  Even if the request to the
     * PushServer were to fail, it would not affect correctness of the protocol,
     * and the server GC would just clean up the channelID/subscription
     * eventually.  Since the appserver doesn't ping it, no data is lost.
     *
     * If rather we were to unregister at the server and update the database only
     * on success: If the server receives the unregister, and deletes the
     * channelID/subscription, but the response is lost because of network
     * failure, the application is never informed. In addition the application may
     * retry the unregister when it fails due to timeout (websocket) or any other
     * reason at which point the server will say it does not know of this
     * unregistration.  We'll have to make the registration/unregistration phases
     * have retries and attempts to resend messages from the server, and have the
     * client acknowledge. On a server, data is cheap, reliable notification is
     * not.
     */
    export function unregister(aPageRecord: any): any;
    export function clear(info: any): any;
    export function registration(aPageRecord: any): any;
    export function _dropExpiredRegistrations(): any;
    export function _onPermissionChange(subject: any, data: any): any;
    export function _clearPermissions(): any;
    export function _updatePermission(permission: any, type: any): any;
    export function _forEachPrincipal(principal: any, callback: any): any;
    /**
     * The update function called for each registration record if the push
     * permission is revoked. We only expire the record so we can notify the
     * service worker as soon as the permission is reinstated. If we just
     * deleted the record, the worker wouldn't be notified until the next visit
     * to the site.
     *
     * @param {PushRecord} record The record to expire.
     * @param {IDBCursor} cursor The IndexedDB cursor.
     */
    export function _permissionDenied(record: PushRecord, cursor: IDBCursor): void;
    /**
     * The update function called for each registration record if the push
     * permission is granted. If the record has expired, it will be dropped;
     * otherwise, its quota will be reset to the default value.
     *
     * @param {PushRecord} record The record to update.
     * @param {IDBCursor} cursor The IndexedDB cursor.
     */
    export function _permissionAllowed(record: PushRecord, cursor: IDBCursor): void;
    /**
     * Drops all matching registrations from the database. Notifies the
     * associated service workers if permission is granted, and removes
     * unexpired registrations from the server.
     *
     * @param {Function} predicate A function called for each record.
     * @returns {Promise} Resolves once the registrations have been dropped.
     */
    export function _dropRegistrationsIf(predicate: Function): Promise<any>;
}
declare const PUSH_SERVICE_UNINIT: 0;
export {};
