/**
 * Splits a CDP method into domain and command components.
 *
 * @param {string} method
 *     Name of the method to split, e.g. "Browser.getVersion".
 *
 * @returns {Object<string, string>}
 *     Object with the domain ("Browser") and command ("getVersion")
 *     as properties.
 */
export function splitMethod(method: string): {
    [x: string]: string;
};
export class CDPConnection {
    /**
     * @param {WebSocket} webSocket
     *     The WebSocket server connection to wrap.
     * @param {Connection} httpdConnection
     *     Reference to the httpd.js's connection needed for clean-up.
     */
    constructor(webSocket: WebSocket, httpdConnection: Connection);
    sessions: Map<any, any>;
    defaultSession: any;
    /**
     * Register a new Session to forward the messages to.
     *
     * A session without any `id` attribute will be considered to be the
     * default one, to which messages without `sessionId` attribute are
     * forwarded to. Only one such session can be registered.
     *
     * @param {Session} session
     *     The session to register.
     */
    registerSession(session: Session): void;
    /**
     * Send an error back to the CDP client.
     *
     * @param {number} id
     *     Id of the packet which lead to an error.
     * @param {Error} err
     *     Error object with `message` and `stack` attributes.
     * @param {string=} sessionId
     *     Id of the session used to send this packet. Falls back to the
     *     default session if not specified.
     */
    sendError(id: number, err: Error, sessionId?: string | undefined): void;
    /**
     * Send an event coming from a Domain to the CDP client.
     *
     * @param {string} method
     *     The event name. This is composed by a domain name, a dot character
     *     followed by the event name, e.g. `Target.targetCreated`.
     * @param {object} params
     *     A JSON-serializable object, which is the payload of this event.
     * @param {string=} sessionId
     *     The sessionId from which this packet is emitted. Falls back to the
     *     default session if not specified.
     */
    sendEvent(method: string, params: object, sessionId?: string | undefined): void;
    /**
     * Interpret a given CDP packet for a given Session.
     *
     * @param {string} sessionId
     *     ID of the session for which we should execute a command.
     * @param {string} message
     *     The stringified JSON payload of the CDP packet, which is about
     *     executing a Domain's function.
     */
    sendMessageToTarget(sessionId: string, message: string): void;
    /**
     * Send the result of a call to a Domain's function back to the CDP client.
     *
     * @param {number} id
     *     The request id being sent by the client to call the domain's method.
     * @param {object} result
     *     A JSON-serializable object, which is the actual result.
     * @param {string=} sessionId
     *     The sessionId from which this packet is emitted. Falls back to the
     *     default session if not specified.
     */
    sendResult(id: number, result: object, sessionId?: string | undefined): void;
    /**
     * Called by the `transport` when the connection is closed.
     */
    onConnectionClose(): void;
    /**
     * Receive a packet from the WebSocket layer.
     *
     * This packet is sent by a CDP client and is meant to execute
     * a particular function on a given Domain.
     *
     * @param {object} packet
     *        JSON-serializable object sent by the client.
     */
    onPacket(packet: object): Promise<void>;
}
