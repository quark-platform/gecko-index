/**
 * Bootstraps Marionette and handles incoming client connections.
 *
 * Starting the Marionette server will open a TCP socket sporting the
 * debugger transport interface on the provided `port`.  For every
 * new connection, a {@link TCPConnection} is created.
 */
export class TCPListener {
    /**
     * @param {number} port
     *     Port for server to listen to.
     */
    constructor(port: number);
    port: number;
    socket: any;
    conns: Set<any>;
    nextConnID: number;
    alive: boolean;
    /**
     * Function produces a {@link GeckoDriver}.
     *
     * Determines the application to initialise the driver with.
     *
     * @returns {GeckoDriver}
     *     A driver instance.
     */
    driverFactory(): GeckoDriver;
    setAcceptConnections(value: any): Promise<void>;
    /**
     * Bind this listener to {@link #port} and start accepting incoming
     * socket connections on {@link #onSocketAccepted}.
     *
     * The marionette.port preference will be populated with the value
     * of {@link #port}.
     */
    start(): Promise<void>;
    stop(): Promise<void>;
    onSocketAccepted(serverSocket: any, clientSocket: any): void;
    onConnectionClosed(conn: any): void;
}
/**
 * Marionette client connection.
 *
 * Dispatches packets received to their correct service destinations
 * and sends back the service endpoint's return values.
 *
 * @param {number} connID
 *     Unique identifier of the connection this dispatcher should handle.
 * @param {DebuggerTransport} transport
 *     Debugger transport connection to the client.
 * @param {function(): GeckoDriver} driverFactory
 *     Factory function that produces a {@link GeckoDriver}.
 */
export class TCPConnection {
    constructor(connID: any, transport: any, driverFactory: any);
    id: any;
    conn: any;
    onclose: any;
    lastID: number;
    driver: any;
    /**
     * Debugger transport callback that cleans up
     * after a connection is closed.
     */
    onClosed(): void;
    /**
     * Callback that receives data packets from the client.
     *
     * If the message is a Response, we look up the command previously
     * issued to the client and run its callback, if any.  In case of
     * a Command, the corresponding is executed.
     *
     * @param {Array.<number, number, ?, ?>} data
     *     A four element array where the elements, in sequence, signifies
     *     message type, message ID, method name or error, and parameters
     *     or result.
     */
    onPacket(data: Array<number, number, unknown, unknown>): void;
    /**
     * Executes a Marionette command and sends back a response when it
     * has finished executing.
     *
     * If the command implementation sends the response itself by calling
     * <code>resp.send()</code>, the response is guaranteed to not be
     * sent twice.
     *
     * Errors thrown in commands are marshaled and sent back, and if they
     * are not {@link WebDriverError} instances, they are additionally
     * propagated and reported to {@link Components.utils.reportError}.
     *
     * @param {Command} cmd
     *     Command to execute.
     */
    execute(cmd: Command): Promise<void>;
    /**
     * Despatches command to appropriate Marionette service.
     *
     * @param {Command} cmd
     *     Command to run.
     * @param {Response} resp
     *     Mutable response where the command's return value will be
     *     assigned.
     *
     * @throws {Error}
     *     A command's implementation may throw at any time.
     */
    despatch(cmd: Command, resp: Response): Promise<void>;
    /**
     * Fail-safe creation of a new instance of {@link Response}.
     *
     * @param {number} msgID
     *     Message ID to respond to.  If it is not a number, -1 is used.
     *
     * @returns {Response}
     *     Response to the message with `msgID`.
     */
    createResponse(msgID: number): Response;
    sendError(err: any, cmdID: any): void;
    /**
     * When a client connects we send across a JSON Object defining the
     * protocol level.
     *
     * This is the only message sent by Marionette that does not follow
     * the regular message format.
     */
    sayHello(): void;
    /**
     * Delegates message to client based on the provided  {@code cmdID}.
     * The message is sent over the debugger transport socket.
     *
     * The command ID is a unique identifier assigned to the client's request
     * that is used to distinguish the asynchronous responses.
     *
     * Whilst responses to commands are synchronous and must be sent in the
     * correct order.
     *
     * @param {Message} msg
     *     The command or response to send.
     */
    send(msg: Message): void;
    /**
     * Send given response to the client over the debugger transport socket.
     *
     * @param {Response} resp
     *     The response to send back to the client.
     */
    sendToClient(resp: Response): void;
    /**
     * Marshal message to the Marionette message format and send it.
     *
     * @param {Message} msg
     *     The message to send.
     */
    sendMessage(msg: Message): void;
    /**
     * Send the given payload over the debugger transport socket to the
     * connected client.
     *
     * @param {Object<string, ?>} payload
     *     The payload to ship.
     */
    sendRaw(payload: {
        [x: string]: unknown;
    }): void;
    toString(): string;
    #private;
}
