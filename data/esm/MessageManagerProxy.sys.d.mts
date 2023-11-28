/**
 * Acts as a proxy for a message manager or message manager owner, and
 * tracks docShell swaps so that messages are always sent to the same
 * receiver, even if it is moved to a different <browser>.
 *
 * @param {nsIMessageSender|Element} target
 *        The target message manager on which to send messages, or the
 *        <browser> element which owns it.
 */
export class MessageManagerProxy {
    /**
     * Returns true if the given target is the same as, or owns, the given
     * message manager.
     *
     * @param {nsIMessageSender|MessageManagerProxy|Element} target
     *        The message manager, MessageManagerProxy, or <browser>
     *        element against which to match.
     * @param {nsIMessageSender} messageManager
     *        The message manager against which to match `target`.
     *
     * @returns {boolean}
     *        True if `messageManager` is the same object as `target`, or
     *        `target` is a MessageManagerProxy or <browser> element that
     *        is tied to it.
     */
    static matches(target: nsIMessageSender | MessageManagerProxy | Element, messageManager: nsIMessageSender): boolean;
    constructor(target: any);
    listeners: any;
    closed: boolean;
    messageManager: any;
    /**
     * Disposes of the proxy object, removes event listeners, and drops
     * all references to the underlying message manager.
     *
     * Must be called before the last reference to the proxy is dropped,
     * unless the underlying message manager or <browser> is also being
     * destroyed.
     */
    dispose(): void;
    eventTarget: Element;
    observe(subject: any, topic: any, data: any): void;
    /**
     * @property {nsIMessageSender|null} messageManager
     *        The message manager that is currently being proxied. This
     *        may change during the life of the proxy object, so should
     *        not be stored elsewhere.
     */
    /**
     * Sends a message on the proxied message manager.
     *
     * @param {Array} args
     *        Arguments to be passed verbatim to the underlying
     *        sendAsyncMessage method.
     * @returns {undefined}
     */
    sendAsyncMessage(...args: any[]): undefined;
    get isDisconnected(): boolean;
    /**
     * Adds a message listener to the current message manager, and
     * transfers it to the new message manager after a docShell swap.
     *
     * @param {string} message
     *        The name of the message to listen for.
     * @param {nsIMessageListener} listener
     *        The listener to add.
     * @param {boolean} [listenWhenClosed = false]
     *        If true, the listener will receive messages which were sent
     *        after the remote side of the listener began closing.
     */
    addMessageListener(message: string, listener: nsIMessageListener, listenWhenClosed?: boolean): void;
    /**
     * Adds a message listener from the current message manager.
     *
     * @param {string} message
     *        The name of the message to stop listening for.
     * @param {nsIMessageListener} listener
     *        The listener to remove.
     */
    removeMessageListener(message: string, listener: nsIMessageListener): void;
    /**
     * Iterates over all of the currently registered message listeners.
     *
     * @private
     */
    private iterListeners;
    /**
     * Adds docShell swap listeners to the message manager owner.
     *
     * @param {Element} target
     *        The target element.
     * @private
     */
    private addListeners;
    /**
     * Removes docShell swap listeners to the message manager owner.
     *
     * @param {Element} target
     *        The target element.
     * @private
     */
    private removeListeners;
    handleEvent(event: any): void;
}
