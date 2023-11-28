/**
 * A RootMessageHandler is the root node of a MessageHandler network. It lives
 * in the parent process. It can forward commands to MessageHandlers in other
 * layers (at the moment WindowGlobalMessageHandlers in content processes).
 */
export class RootMessageHandler {
    /**
     * Returns the RootMessageHandler module path.
     *
     * @returns {string}
     */
    static get modulePath(): string;
    /**
     * Returns the RootMessageHandler type.
     *
     * @returns {string}
     */
    static get type(): string;
    /**
     * The ROOT MessageHandler is unique for a given MessageHandler network
     * (ie for a given sessionId). Reuse the type as context id here.
     */
    static getIdFromContext(context: any): string;
    /**
     * Create a new RootMessageHandler instance.
     *
     * @param {string} sessionId
     *     ID of the session the handler is used for.
     */
    constructor(sessionId: string);
    get navigationManager(): any;
    get realms(): Map<any, any>;
    get sessionData(): any;
    destroy(): void;
    /**
     * Add new session data items of a given module, category and
     * contextDescriptor.
     *
     * Forwards the call to the SessionData instance owned by this
     * RootMessageHandler and propagates the information via a command to existing
     * MessageHandlers.
     */
    addSessionDataItem(sessionData?: {}): Promise<void>;
    emitEvent(name: any, eventPayload: any, contextInfo: any): void;
    /**
     * Emit a public protocol event. This event will be sent over to the client.
     *
     * @param {string} name
     *     Name of the event. Protocol level events should be of the
     *     form [module name].[event name].
     * @param {object} data
     *     The event's data.
     */
    emitProtocolEvent(name: string, data: object): void;
    /**
     * Forward the provided command to WINDOW_GLOBAL MessageHandlers via the
     * RootTransport.
     *
     * @param {Command} command
     *     The command to forward. See type definition in MessageHandler.js
     * @returns {Promise}
     *     Returns a promise that resolves with the result of the command.
     */
    forwardCommand(command: Command): Promise<any>;
    matchesContext(): boolean;
    observe(subject: any, topic: any): void;
    /**
     * Remove session data items of a given module, category and
     * contextDescriptor.
     *
     * Forwards the call to the SessionData instance owned by this
     * RootMessageHandler and propagates the information via a command to existing
     * MessageHandlers.
     */
    removeSessionDataItem(sessionData?: {}): Promise<void>;
    /**
     * Update session data items of a given module, category and
     * contextDescriptor.
     *
     * Forwards the call to the SessionData instance owned by this
     * RootMessageHandler.
     */
    updateSessionData(sessionData?: any[]): Promise<void>;
    #private;
}
