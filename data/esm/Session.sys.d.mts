/**
 * Get a WebDriver session corresponding to the session id.
 * Get the list of seen nodes for the given browsing context.
 *
 * @param {string} sessionId
 *     The id of the WebDriver session to use.
 * @param {BrowsingContext} browsingContext
 *     Browsing context the node is part of.
 *
 * @returns {Set}
 *     The list of seen nodes.
 */
export function getSeenNodesForBrowsingContext(sessionId: string, browsingContext: BrowsingContext): Set<any>;
/**
 *
 * @param {string} sessionId
 *     The ID of the WebDriver session to retrieve.
 *
 * @returns {WebDriverSession|undefined}
 *     The WebDriver session or undefined if the id is not known.
 */
export function getWebDriverSessionById(sessionId: string): WebDriverSession | undefined;
/**
 * Representation of WebDriver session.
 */
export class WebDriverSession {
    /**
     * Construct a new WebDriver session.
     *
     * It is expected that the caller performs the necessary checks on
     * the requested capabilities to be WebDriver conforming.  The WebDriver
     * service offered by Marionette does not match or negotiate capabilities
     * beyond type- and bounds checks.
     *
     * <h3>Capabilities</h3>
     *
     * <dl>
     *  <dt><code>acceptInsecureCerts</code> (boolean)
     *  <dd>Indicates whether untrusted and self-signed TLS certificates
     *   are implicitly trusted on navigation for the duration of the session.
     *
     *  <dt><code>pageLoadStrategy</code> (string)
     *  <dd>The page load strategy to use for the current session.  Must be
     *   one of "<tt>none</tt>", "<tt>eager</tt>", and "<tt>normal</tt>".
     *
     *  <dt><code>proxy</code> (Proxy object)
     *  <dd>Defines the proxy configuration.
     *
     *  <dt><code>setWindowRect</code> (boolean)
     *  <dd>Indicates whether the remote end supports all of the resizing
     *   and repositioning commands.
     *
     *  <dt><code>timeouts</code> (Timeouts object)
     *  <dd>Describes the timeouts imposed on certian session operations.
     *
     *  <dt><code>strictFileInteractability</code> (boolean)
     *  <dd>Defines the current session’s strict file interactability.
     *
     *  <dt><code>unhandledPromptBehavior</code> (string)
     *  <dd>Describes the current session’s user prompt handler.  Must be one of
     *   "<tt>accept</tt>", "<tt>accept and notify</tt>", "<tt>dismiss</tt>",
     *   "<tt>dismiss and notify</tt>", and "<tt>ignore</tt>".  Defaults to the
     *   "<tt>dismiss and notify</tt>" state.
     *
     *  <dt><code>moz:accessibilityChecks</code> (boolean)
     *  <dd>Run a11y checks when clicking elements.
     *
     *  <dt><code>moz:debuggerAddress</code> (boolean)
     *  <dd>Indicate that the Chrome DevTools Protocol (CDP) has to be enabled.
     *
     *  <dt><code>moz:webdriverClick</code> (boolean)
     *  <dd>Use a WebDriver conforming <i>WebDriver::ElementClick</i>.
     * </dl>
     *
     * <h4>WebAuthn</h4>
     *
     * <dl>
     *  <dt><code>webauthn:virtualAuthenticators</code> (boolean)
     *  <dd>Indicates whether the endpoint node supports all Virtual
     *   Authenticators commands.
     *
     *  <dt><code>webauthn:extension:uvm</code> (boolean)
     *  <dd>Indicates whether the endpoint node WebAuthn WebDriver
     *   implementation supports the User Verification Method extension.
     *
     *  <dt><code>webauthn:extension:prf</code> (boolean)
     *  <dd>Indicates whether the endpoint node WebAuthn WebDriver
     *   implementation supports the prf extension.
     *
     *  <dt><code>webauthn:extension:largeBlob</code> (boolean)
     *  <dd>Indicates whether the endpoint node WebAuthn WebDriver implementation
     *   supports the largeBlob extension.
     *
     *  <dt><code>webauthn:extension:credBlob</code> (boolean)
     *  <dd>Indicates whether the endpoint node WebAuthn WebDriver implementation
     *   supports the credBlob extension.
     * </dl>
     *
     * <h4>Timeouts object</h4>
     *
     * <dl>
     *  <dt><code>script</code> (number)
     *  <dd>Determines when to interrupt a script that is being evaluates.
     *
     *  <dt><code>pageLoad</code> (number)
     *  <dd>Provides the timeout limit used to interrupt navigation of the
     *   browsing context.
     *
     *  <dt><code>implicit</code> (number)
     *  <dd>Gives the timeout of when to abort when locating an element.
     * </dl>
     *
     * <h4>Proxy object</h4>
     *
     * <dl>
     *  <dt><code>proxyType</code> (string)
     *  <dd>Indicates the type of proxy configuration.  Must be one
     *   of "<tt>pac</tt>", "<tt>direct</tt>", "<tt>autodetect</tt>",
     *   "<tt>system</tt>", or "<tt>manual</tt>".
     *
     *  <dt><code>proxyAutoconfigUrl</code> (string)
     *  <dd>Defines the URL for a proxy auto-config file if
     *   <code>proxyType</code> is equal to "<tt>pac</tt>".
     *
     *  <dt><code>httpProxy</code> (string)
     *  <dd>Defines the proxy host for HTTP traffic when the
     *   <code>proxyType</code> is "<tt>manual</tt>".
     *
     *  <dt><code>noProxy</code> (string)
     *  <dd>Lists the adress for which the proxy should be bypassed when
     *   the <code>proxyType</code> is "<tt>manual</tt>".  Must be a JSON
     *   List containing any number of any of domains, IPv4 addresses, or IPv6
     *   addresses.
     *
     *  <dt><code>sslProxy</code> (string)
     *  <dd>Defines the proxy host for encrypted TLS traffic when the
     *   <code>proxyType</code> is "<tt>manual</tt>".
     *
     *  <dt><code>socksProxy</code> (string)
     *  <dd>Defines the proxy host for a SOCKS proxy traffic when the
     *   <code>proxyType</code> is "<tt>manual</tt>".
     *
     *  <dt><code>socksVersion</code> (string)
     *  <dd>Defines the SOCKS proxy version when the <code>proxyType</code> is
     *   "<tt>manual</tt>".  It must be any integer between 0 and 255
     *   inclusive.
     * </dl>
     *
     * <h3>Example</h3>
     *
     * Input:
     *
     * <pre><code>
     *     {"capabilities": {"acceptInsecureCerts": true}}
     * </code></pre>
     *
     * @param {Object<string, *>=} capabilities
     *     JSON Object containing any of the recognised capabilities listed
     *     above.
     *
     * @param {WebDriverBiDiConnection=} connection
     *     An optional existing WebDriver BiDi connection to associate with the
     *     new session.
     *
     * @throws {SessionNotCreatedError}
     *     If, for whatever reason, a session could not be created.
     */
    constructor(capabilities?: {
        [x: string]: any;
    } | undefined, connection?: WebDriverBiDiConnection);
    _connections: Set<any>;
    id: any;
    path: string;
    capabilities: any;
    navigableSeenNodes: WeakMap<object, any>;
    destroy(): void;
    execute(module: any, command: any, params: any): Promise<any>;
    get a11yChecks(): any;
    get messageHandler(): any;
    _messageHandler: any;
    _onMessageHandlerProtocolEvent(eventName: any, messageHandlerEvent: any): void;
    get pageLoadStrategy(): any;
    get proxy(): any;
    get strictFileInteractability(): any;
    set timeouts(timeouts: any);
    get timeouts(): any;
    get unhandledPromptBehavior(): any;
    /**
     * Remove the specified WebDriver BiDi connection.
     *
     * @param {WebDriverBiDiConnection} connection
     */
    removeConnection(connection: WebDriverBiDiConnection): void;
    toString(): string;
    /**
     * Handle new WebSocket connection requests.
     *
     * WebSocket clients will attempt to connect to this session at
     * `/session/:id`.  Hereby a WebSocket upgrade will automatically
     * be performed.
     *
     * @param {Request} request
     *     HTTP request (httpd.js)
     * @param {Response} response
     *     Response to an HTTP request (httpd.js)
     */
    handle(request: Request, response: Response): Promise<void>;
    get QueryInterface(): MozQueryInterface;
}
