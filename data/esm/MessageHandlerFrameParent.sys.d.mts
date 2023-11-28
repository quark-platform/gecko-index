/**
 * Parent actor for the MessageHandlerFrame JSWindowActor. The
 * MessageHandlerFrame actor is used by RootTransport to communicate between
 * ROOT MessageHandlers and WINDOW_GLOBAL MessageHandlers.
 */
export class MessageHandlerFrameParent {
    receiveMessage(message: any): Promise<any>;
    /**
     * Send a command to the corresponding MessageHandlerFrameChild actor via a
     * JSWindowActor query.
     *
     * @param {Command} command
     *     The command to forward. See type definition in MessageHandler.js
     * @param {string} sessionId
     *     ID of the session that sent the command.
     * @returns {Promise}
     *     Promise that will resolve with the result of query sent to the
     *     MessageHandlerFrameChild actor.
     */
    sendCommand(command: Command, sessionId: string): Promise<any>;
    #private;
}
