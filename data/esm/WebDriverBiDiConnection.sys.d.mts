/**
 * Splits a WebDriver BiDi method into module and command components.
 *
 * @param {string} method
 *     Name of the method to split, e.g. "session.subscribe".
 *
 * @returns {Object<string, string>}
 *     Object with the module ("session") and command ("subscribe")
 *     as properties.
 */
export function splitMethod(method: string): {
    [x: string]: string;
};
export class WebDriverBiDiConnection {
    /**
     * @param {WebSocket} webSocket
     *     The WebSocket server connection to wrap.
     * @param {Connection} httpdConnection
     *     Reference to the httpd.js's connection needed for clean-up.
     */
    constructor(webSocket: WebSocket, httpdConnection: Connection);
    session: any;
    /**
     * Perform required steps to end the session.
     */
    endSession(): void;
    /**
     * Register a new WebDriver Session to forward the messages to.
     *
     * @param {Session} session
     *     The WebDriverSession to register.
     */
    registerSession(session: Session): void;
    /**
     * Unregister the already set WebDriver session.
     */
    unregisterSession(): void;
    /**
     * Send an error back to the WebDriver BiDi client.
     *
     * @param {number} id
     *     Id of the packet which lead to an error.
     * @param {Error} err
     *     Error object with `status`, `message` and `stack` attributes.
     */
    sendError(id: number, err: Error): void;
    /**
     * Send an event coming from a module to the WebDriver BiDi client.
     *
     * @param {string} method
     *     The event name. This is composed by a module name, a dot character
     *     followed by the event name, e.g. `log.entryAdded`.
     * @param {object} params
     *     A JSON-serializable object, which is the payload of this event.
     */
    sendEvent(method: string, params: object): void;
    /**
     * Send the result of a call to a module's method back to the
     * WebDriver BiDi client.
     *
     * @param {number} id
     *     The request id being sent by the client to call the module's method.
     * @param {object} result
     *     A JSON-serializable object, which is the actual result.
     */
    sendResult(id: number, result: object): void;
    observe(subject: any, topic: any): void;
    /**
     * Called by the `transport` when the connection is closed.
     */
    onConnectionClose(): void;
    /**
     * Receive a packet from the WebSocket layer.
     *
     * This packet is sent by a WebDriver BiDi client and is meant to execute
     * a particular method on a given module.
     *
     * @param {object} packet
     *     JSON-serializable object sent by the client
     */
    onPacket(packet: object): Promise<void>;
}
