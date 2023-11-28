/**
 * RootTransport is intended to be used from a ROOT MessageHandler to communicate
 * with WINDOW_GLOBAL MessageHandlers via the MessageHandlerFrame JSWindow
 * actors.
 */
export class RootTransport {
    /**
     * @param {MessageHandler} messageHandler
     *     The MessageHandler instance which owns this RootTransport instance.
     */
    constructor(messageHandler: MessageHandler);
    _messageHandler: MessageHandler;
    /**
     * Forward the provided command to WINDOW_GLOBAL MessageHandlers via the
     * MessageHandlerFrame actors.
     *
     * @param {Command} command
     *     The command to forward. See type definition in MessageHandler.js
     * @returns {Promise}
     *     Returns a promise that resolves with the result of the command after
     *     being processed by WINDOW_GLOBAL MessageHandlers.
     */
    forwardCommand(command: Command): Promise<any>;
    _broadcastCommand(command: any): Promise<any[]>;
    _sendCommandToBrowsingContext(command: any, browsingContext: any): Promise<any>;
    toString(): string;
    _getBrowsingContextsForDescriptor(contextDescriptor: any): BrowsingContext[];
    /**
     * Get all browsing contexts, optionally matching the provided options.
     *
     * @param {object} options
     * @param {string=} options.browserId
     *    The id of the browser to filter the browsing contexts by (optional).
     * @returns {Array<BrowsingContext>}
     *    The browsing contexts matching the provided options or all browsing contexts
     *    if no options are provided.
     */
    _getBrowsingContexts(options?: {
        browserId?: string | undefined;
    }): Array<BrowsingContext>;
}
