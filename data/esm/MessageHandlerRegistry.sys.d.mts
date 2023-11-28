/**
 * Get the MessageHandler subclass corresponding to the provided type.

 * @param {string} type
 *     MessageHandler type, one of MessageHandler.type.
 * @returns {Class}
 *     A MessageHandler subclass
 * @throws {Error}
 *      Throws if no MessageHandler subclass is found for the provided type.
 */
export function getMessageHandlerClass(type: string): Class;
/**
 * The MessageHandlerRegistry allows to create and retrieve MessageHandler
 * instances for different session ids.
 *
 * A MessageHandlerRegistry instance is bound to a specific MessageHandler type
 * and context. All MessageHandler instances created by the same registry will
 * use the type and context of the registry, but each will be associated to a
 * different session id.
 *
 * The registry is useful to retrieve the appropriate MessageHandler instance
 * after crossing a technical boundary (eg process, thread...).
 */
export class MessageHandlerRegistry {
    constructor(type: any, context: any);
    _messageHandlerClass: Class;
    _context: any;
    _type: any;
    /**
     * Map of session id to MessageHandler instance
     */
    _messageHandlersMap: Map<any, any>;
    _onMessageHandlerDestroyed(eventName: any, messageHandler: any): void;
    _onMessageHandlerEvent(eventName: any, messageHandlerEvent: any): void;
    /**
     * Create all message handlers for the current context, based on the content
     * of the session data.
     * This should typically be called when the context is ready to be used and
     * to receive/send commands.
     */
    createAllMessageHandlers(): void;
    destroy(): void;
    /**
     * Retrieve all MessageHandler instances held in this registry, for all
     * session IDs.
     *
     * @returns {Iterable.<MessageHandler>}
     *     Iterator of MessageHandler instances
     */
    getAllMessageHandlers(): Iterable<MessageHandler>;
    /**
     * Retrieve an existing MessageHandler instance matching the provided session
     * id. Returns null if no MessageHandler was found.
     *
     * @param {string} sessionId
     *     ID of the session the handler is used for.
     * @returns {MessageHandler=}
     *     A MessageHandler instance, null if not found.
     */
    getExistingMessageHandler(sessionId: string): MessageHandler;
    /**
     * Retrieve the MessageHandler instance registered for the provided session
     * id. Will create and register a MessageHander if no instance was found.
     *
     * @param {string} sessionId
     *     ID of the session the handler is used for.
     * @returns {MessageHandler}
     *     A MessageHandler instance.
     */
    getOrCreateMessageHandler(sessionId: string): MessageHandler;
    /**
     * Retrieve an already registered RootMessageHandler instance matching the
     * provided sessionId.
     *
     * @param {string} sessionId
     *     ID of the session the handler is used for.
     * @returns {RootMessageHandler}
     *     A RootMessageHandler instance.
     * @throws {Error}
     *     If no root MessageHandler can be found for the provided session id.
     */
    getRootMessageHandler(sessionId: string): RootMessageHandler;
    toString(): string;
    /**
     * Create a new MessageHandler instance.
     *
     * @param {string} sessionId
     *     ID of the session the handler will be used for.
     * @param {Array<SessionDataItem>=} sessionDataItems
     *     Optional array of session data items to be applied automatically to the
     *     MessageHandler.
     * @returns {MessageHandler}
     *     A new MessageHandler instance.
     */
    _createMessageHandler(sessionId: string, sessionDataItems?: Array<SessionDataItem> | undefined): MessageHandler;
}
