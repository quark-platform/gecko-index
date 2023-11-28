/**
 * Entry class for the Chrome DevTools Protocol support.
 *
 * It holds the list of available targets (tabs, main browser), and also
 * sets up the necessary handlers for the HTTP server.
 *
 * @see https://chromedevtools.github.io/devtools-protocol
 */
export class CDP {
    /**
     * Creates a new instance of the CDP class.
     *
     * @param {RemoteAgent} agent
     *     Reference to the Remote Agent instance.
     */
    constructor(agent: RemoteAgent);
    agent: RemoteAgent;
    targetList: any;
    _running: boolean;
    get address(): any;
    get mainTargetPath(): any;
    /**
     * Starts the CDP support.
     */
    start(): Promise<void>;
    _activePortPath: any;
    /**
     * Stops the CDP support.
     */
    stop(): Promise<void>;
}
