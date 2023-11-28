export class WebSocketConnection {
    /**
     * @param {WebSocket} webSocket
     *     The WebSocket server connection to wrap.
     * @param {Connection} httpdConnection
     *     Reference to the httpd.js's connection needed for clean-up.
     */
    constructor(webSocket: WebSocket, httpdConnection: Connection);
    id: any;
    httpdConnection: Connection;
    transport: any;
    _log(direction: any, data: any): void;
    /**
     * Close the WebSocket connection.
     */
    close(): void;
    /**
     * Register a new Session to forward the messages to.
     *
     * Needs to be implemented in the sub class.
     *
     * @param {Session} session
     *     The session to register.
     */
    registerSession(session: Session): void;
    /**
     * Send the JSON-serializable object to the client.
     *
     * @param {object} data
     *     The object to be sent.
     */
    send(data: object): void;
    /**
     * Send an error back to the client.
     *
     * Needs to be implemented in the sub class.
     */
    sendError(): void;
    /**
     * Send an event back to the client.
     *
     * Needs to be implemented in the sub class.
     */
    sendEvent(): void;
    /**
     * Send the result of a call to a method back to the client.
     *
     * Needs to be implemented in the sub class.
     */
    sendResult(): void;
    toString(): string;
    /**
     * Called by the `transport` when the connection is closed.
     */
    onConnectionClose(status: any): void;
    /**
     * Called when the socket is closed.
     */
    onSocketClose(): void;
    /**
     * Receive a packet from the WebSocket layer.
     *
     * This packet is sent by a WebSocket client and is meant to execute
     * a particular method.
     *
     * Needs to be implemented in the sub class.
     *
     * @param {object} packet
     *     JSON-serializable object sent by the client.
     */
    onPacket(packet: object): Promise<void>;
}
