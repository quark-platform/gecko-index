/**
 * httpd.js JSON handler for direct BiDi connections.
 */
export class WebDriverNewSessionHandler {
    /**
     * Construct a new JSON handler.
     *
     * @param {WebDriverBiDi} webDriverBiDi
     *     Reference to the WebDriver BiDi protocol implementation.
     */
    constructor(webDriverBiDi: WebDriverBiDi);
    webDriverBiDi: WebDriverBiDi;
    /**
     * Handle new direct WebSocket connection requests.
     *
     * WebSocket clients not using the WebDriver BiDi opt-in mechanism via the
     * WebDriver HTTP implementation will attempt to directly connect at
     * `/session`.  Hereby a WebSocket upgrade will automatically be performed.
     *
     * @param {Request} request
     *     HTTP request (httpd.js)
     * @param {Response} response
     *     Response to an HTTP request (httpd.js)
     */
    handle(request: Request, response: Response): Promise<void>;
    get QueryInterface(): MozQueryInterface;
}
