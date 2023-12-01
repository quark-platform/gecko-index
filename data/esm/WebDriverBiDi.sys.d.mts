/**
 * Entry class for the WebDriver BiDi support.
 *
 * @see https://w3c.github.io/webdriver-bidi
 */
export class WebDriverBiDi {
    /**
     * Creates a new instance of the WebDriverBiDi class.
     *
     * @param {RemoteAgent} agent
     *     Reference to the Remote Agent instance.
     */
    constructor(agent: RemoteAgent);
    agent: RemoteAgent;
    _running: boolean;
    _session: any;
    _sessionlessConnections: Set<any>;
    get address(): string;
    get session(): any;
    /**
     * Add a new connection that is not yet attached to a WebDriver session.
     *
     * @param {WebDriverBiDiConnection} connection
     *     The connection without an accociated WebDriver session.
     */
    addSessionlessConnection(connection: WebDriverBiDiConnection): void;
    /**
     * Create a new WebDriver session.
     *
     * @param {Object<string, *>=} capabilities
     *     JSON Object containing any of the recognised capabilities as listed
     *     on the `WebDriverSession` class.
     *
     * @param {WebDriverBiDiConnection=} sessionlessConnection
     *     Optional connection that is not yet accociated with a WebDriver
     *     session, and has to be associated with the new WebDriver session.
     *
     * @returns {Object<string, Capabilities>}
     *     Object containing the current session ID, and all its capabilities.
     *
     * @throws {SessionNotCreatedError}
     *     If, for whatever reason, a session could not be created.
     */
    createSession(capabilities?: {
        [x: string]: any;
    } | undefined, sessionlessConnection?: WebDriverBiDiConnection): {
        [x: string]: Capabilities;
    };
    /**
     * Delete the current WebDriver session.
     */
    deleteSession(): void;
    /**
     * Retrieve the readiness state of the remote end, regarding the creation of
     * new WebDriverBiDi sessions.
     *
     * See https://w3c.github.io/webdriver-bidi/#command-session-status
     *
     * @returns {object}
     *     The readiness state.
     */
    getSessionReadinessStatus(): object;
    /**
     * Starts the WebDriver BiDi support.
     */
    start(): Promise<void>;
    _bidiServerPath: string;
    /**
     * Stops the WebDriver BiDi support.
     */
    stop(): Promise<void>;
}
