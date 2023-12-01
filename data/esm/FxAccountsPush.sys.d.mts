/**
 * FxAccountsPushService manages Push notifications for Firefox Accounts in the browser
 *
 * @param [options]
 *        Object, custom options that used for testing
 * @constructor
 */
export function FxAccountsPushService(options?: {}): void;
export class FxAccountsPushService {
    /**
     * FxAccountsPushService manages Push notifications for Firefox Accounts in the browser
     *
     * @param [options]
     *        Object, custom options that used for testing
     * @constructor
     */
    constructor(options?: {});
    log: any;
    wrappedJSObject: this;
    _initialized: boolean;
    pushService: null;
    fxai: null;
    classID: unknown;
    QueryInterface: MozQueryInterface;
    /**
     * Initialize the service and register all the required observers.
     *
     * @param [options]
     */
    initialize(options?: any): boolean;
    asyncObserver: any;
    /**
     * Registers a new endpoint with the Push Server
     *
     * @returns {Promise}
     *          Promise always resolves with a subscription or a null if failed to subscribe.
     */
    registerPushEndpoint(): Promise<any>;
    /**
     * Async observer interface to listen to push messages, changes and logout.
     *
     * @param subject
     * @param topic
     * @param data
     * @returns {Promise}
     */
    observe(subject: any, topic: any, data: any): Promise<any>;
    /**
     * Fired when the Push server sends a notification.
     *
     * @private
     * @returns {Promise}
     */
    _onPushMessage(message: any): Promise<any>;
    /**
     * Check the FxA session status after a password change/reset event.
     * If the session is invalid, reset credentials and notify listeners of
     * ON_ACCOUNT_STATE_CHANGE_NOTIFICATION that the account may have changed
     *
     * @returns {Promise}
     * @private
     */
    _onPasswordChanged(): Promise<any>;
    /**
     * Fired when the Push server drops a subscription, or the subscription identifier changes.
     *
     * https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIPushService#Receiving_Push_Messages
     *
     * @returns {Promise}
     * @private
     */
    _onPushSubscriptionChange(): Promise<any>;
    /**
     * Unsubscribe from the Push server
     *
     * Ref: https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIPushService#unsubscribe()
     *
     * @returns {Promise} - The promise resolves with a bool to indicate if we successfully unsubscribed.
     *                      The promise never rejects.
     * @private
     */
    unsubscribe(): Promise<any>;
    /**
     * Get our Push server subscription.
     *
     * Ref: https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIPushService#getSubscription()
     *
     * @returns {Promise} - resolves with the subscription or null. Never rejects.
     */
    getSubscription(): Promise<any>;
}
