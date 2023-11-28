/**
 * Single use HTTP requests to RESTish resources.
 *
 * @param uri
 *        URI for the request. This can be an nsIURI object or a string
 *        that can be used to create one. An exception will be thrown if
 *        the string is not a valid URI.
 *
 * Examples:
 *
 * (1) Quick GET request:
 *
 *   let response = await new RESTRequest("http://server/rest/resource").get();
 *   if (!response.success) {
 *     // Bail out if we're not getting an HTTP 2xx code.
 *     processHTTPError(response.status);
 *     return;
 *   }
 *   processData(response.body);
 *
 * (2) Quick PUT request (non-string data is automatically JSONified)
 *
 *   let response = await new RESTRequest("http://server/rest/resource").put(data);
 */
export function RESTRequest(uri: any): void;
export class RESTRequest {
    /**
     * Single use HTTP requests to RESTish resources.
     *
     * @param uri
     *        URI for the request. This can be an nsIURI object or a string
     *        that can be used to create one. An exception will be thrown if
     *        the string is not a valid URI.
     *
     * Examples:
     *
     * (1) Quick GET request:
     *
     *   let response = await new RESTRequest("http://server/rest/resource").get();
     *   if (!response.success) {
     *     // Bail out if we're not getting an HTTP 2xx code.
     *     processHTTPError(response.status);
     *     return;
     *   }
     *   processData(response.body);
     *
     * (2) Quick PUT request (non-string data is automatically JSONified)
     *
     *   let response = await new RESTRequest("http://server/rest/resource").put(data);
     */
    constructor(uri: any);
    status: null;
    uri: null;
    _headers: {};
    _deferred: any;
    _log: any;
    _logName: string;
    QueryInterface: any;
    method: null;
    response: null;
    loadFlags: number;
    channel: null;
    NOT_SENT: number;
    SENT: number;
    IN_PROGRESS: number;
    COMPLETED: number;
    ABORTED: number;
    statusText: null;
    timeout: number;
    charset: string;
    /**
     * Set a request header.
     */
    setHeader(name: any, value: any): void;
    /**
     * Perform an HTTP GET.
     *
     * @return Promise<RESTResponse>
     */
    get(): Promise<any>;
    /**
     * Perform an HTTP PATCH.
     *
     * @param data
     *        Data to be used as the request body. If this isn't a string
     *        it will be JSONified automatically.
     *
     * @return Promise<RESTResponse>
     */
    patch(data: any): Promise<any>;
    /**
     * Perform an HTTP PUT.
     *
     * @param data
     *        Data to be used as the request body. If this isn't a string
     *        it will be JSONified automatically.
     *
     * @return Promise<RESTResponse>
     */
    put(data: any): Promise<any>;
    /**
     * Perform an HTTP POST.
     *
     * @param data
     *        Data to be used as the request body. If this isn't a string
     *        it will be JSONified automatically.
     *
     * @return Promise<RESTResponse>
     */
    post(data: any): Promise<any>;
    /**
     * Perform an HTTP DELETE.
     *
     * @return Promise<RESTResponse>
     */
    delete(): Promise<any>;
    /**
     * Abort an active request.
     */
    abort(rejectWithError?: any): void;
    /** Implementation stuff **/
    dispatch(method: any, data: any): Promise<any>;
    /**
     * Create or push back the abort timer that kills this request.
     */
    delayTimeout(): void;
    /**
     * Abort the request based on a timeout.
     */
    abortTimeout(): void;
    /** nsIStreamListener **/
    onStartRequest(channel: any): void;
    onStopRequest(channel: any, statusCode: any): void;
    onDataAvailable(channel: any, stream: any, off: any, count: any): void;
    _inputStream: any;
    /** nsIInterfaceRequestor **/
    getInterface(aIID: any): any;
    /**
     * Returns true if headers from the old channel should be
     * copied to the new channel. Invoked when a channel redirect
     * is in progress.
     */
    shouldCopyOnRedirect(oldChannel: any, newChannel: any, flags: any): any;
    /** nsIChannelEventSink **/
    asyncOnChannelRedirect(oldChannel: any, newChannel: any, flags: any, callback: any): void;
}
/**
 * Response object for a RESTRequest. This will be created automatically by
 * the RESTRequest.
 */
export function RESTResponse(request?: any): void;
export class RESTResponse {
    /**
     * Response object for a RESTRequest. This will be created automatically by
     * the RESTRequest.
     */
    constructor(request?: any);
    body: null;
    _rawBody: string;
    request: null;
    _log: any;
    _logName: string;
    /**
     * HTTP status code
     */
    get status(): any;
    /**
     * HTTP status text
     */
    get statusText(): any;
    /**
     * Boolean flag that indicates whether the HTTP status code is 2xx or not.
     */
    get success(): any;
    /**
     * Object containing HTTP headers (keyed as lower case)
     */
    get headers(): {};
}
/**
 * Single use MAC authenticated HTTP requests to RESTish resources.
 *
 * @param uri
 *        URI going to the RESTRequest constructor.
 * @param authToken
 *        (Object) An auth token of the form {id: (string), key: (string)}
 *        from which the MAC Authentication header for this request will be
 *        derived. A token as obtained from
 *        TokenServerClient.getTokenUsingOAuth is accepted.
 * @param extra
 *        (Object) Optional extra parameters. Valid keys are: nonce_bytes, ts,
 *        nonce, and ext. See CrytoUtils.computeHTTPMACSHA1 for information on
 *        the purpose of these values.
 */
export function TokenAuthenticatedRESTRequest(uri: any, authToken: any, extra: any): void;
export class TokenAuthenticatedRESTRequest {
    /**
     * Single use MAC authenticated HTTP requests to RESTish resources.
     *
     * @param uri
     *        URI going to the RESTRequest constructor.
     * @param authToken
     *        (Object) An auth token of the form {id: (string), key: (string)}
     *        from which the MAC Authentication header for this request will be
     *        derived. A token as obtained from
     *        TokenServerClient.getTokenUsingOAuth is accepted.
     * @param extra
     *        (Object) Optional extra parameters. Valid keys are: nonce_bytes, ts,
     *        nonce, and ext. See CrytoUtils.computeHTTPMACSHA1 for information on
     *        the purpose of these values.
     */
    constructor(uri: any, authToken: any, extra: any);
    authToken: any;
    extra: any;
    dispatch(method: any, data: any): Promise<any>;
}
