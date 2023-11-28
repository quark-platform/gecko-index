/**
 * Helper to listen to events which rely on SessionData.
 * In order to support the EventsDispatcher, a module emitting events should
 * subscribe and unsubscribe to those events based on SessionData updates
 * and should use the "event" SessionData category.
 */
export class EventsDispatcher {
    /**
     * Create a new EventsDispatcher instance.
     *
     * @param {MessageHandler} messageHandler
     *     The MessageHandler owning this EventsDispatcher.
     */
    constructor(messageHandler: MessageHandler);
    destroy(): void;
    /**
     * Check for existing listeners for a given event name and a given context.
     *
     * @param {string} name
     *     Name of the event to check.
     * @param {ContextInfo} contextInfo
     *     ContextInfo identifying the context to check.
     *
     * @returns {boolean}
     *     True if there is a registered listener matching the provided arguments.
     */
    hasListener(name: string, contextInfo: ContextInfo): boolean;
    /**
     * Stop listening for an event relying on SessionData and relayed by the
     * message handler.
     *
     * @param {string} event
     *     Name of the event to unsubscribe from.
     * @param {ContextDescriptor} contextDescriptor
     *     Context descriptor for this event.
     * @param {Function} callback
     *     Event listener callback.
     * @returns {Promise}
     *     Promise which resolves when the event fully unsubscribed, including
     *     propagating the necessary session data.
     */
    off(event: string, contextDescriptor: ContextDescriptor, callback: Function): Promise<any>;
    /**
     * Listen for an event relying on SessionData and relayed by the message
     * handler.
     *
     * @param {string} event
     *     Name of the event to subscribe to.
     * @param {ContextDescriptor} contextDescriptor
     *     Context descriptor for this event.
     * @param {Function} callback
     *     Event listener callback.
     * @returns {Promise}
     *     Promise which resolves when the event fully subscribed to, including
     *     propagating the necessary session data.
     */
    on(event: string, contextDescriptor: ContextDescriptor, callback: Function): Promise<any>;
    /**
     * An object that holds information about subscription/unsubscription
     * of an event.
     *
     * @typedef Subscription
     *
     * @param {string} event
     *     Name of the event to subscribe/unsubscribe to.
     * @param {ContextDescriptor} contextDescriptor
     *     Context descriptor for this event.
     * @param {Function} callback
     *     Event listener callback.
     * @param {boolean} enable
     *     True, if we need to subscribe to an event.
     *     Otherwise false.
     */
    /**
     * Start or stop listening to a list of events relying on SessionData
     * and relayed by the message handler.
     *
     * @param {Array<Subscription>} subscriptions
     *     The list of information to subscribe/unsubscribe to.
     *
     * @returns {Promise}
     *     Promise which resolves when the events fully subscribed/unsubscribed to,
     *     including propagating the necessary session data.
     */
    update(subscriptions: any[]): Promise<any>;
    #private;
}
