/**
 * Represents a TokenServerClient error that occurred on the client.
 *
 * This is the base type for all errors raised by client operations.
 *
 * @param message
 *        (string) Error message.
 */
export function TokenServerClientError(message: any): void;
export class TokenServerClientError {
    /**
     * Represents a TokenServerClient error that occurred on the client.
     *
     * This is the base type for all errors raised by client operations.
     *
     * @param message
     *        (string) Error message.
     */
    constructor(message: any);
    name: string;
    message: any;
    stack: string;
    _toStringFields(): {
        message: any;
    };
    toString(): string;
    toJSON(): {
        message: any;
    };
}
/**
 * Represents a TokenServerClient error that occurred in the network layer.
 *
 * @param error
 *        The underlying error thrown by the network layer.
 */
export function TokenServerClientNetworkError(error: any): void;
export class TokenServerClientNetworkError {
    /**
     * Represents a TokenServerClient error that occurred in the network layer.
     *
     * @param error
     *        The underlying error thrown by the network layer.
     */
    constructor(error: any);
    name: string;
    error: any;
    stack: string;
    _toStringFields(): {
        error: any;
    };
}
/**
 * Represents a TokenServerClient error that occurred on the server.
 *
 * This type will be encountered for all non-200 response codes from the
 * server. The type of error is strongly enumerated and is stored in the
 * `cause` property. This property can have the following string values:
 *
 *   invalid-credentials -- A token could not be obtained because
 *     the credentials presented by the client were invalid.
 *
 *   unknown-service -- The requested service was not found.
 *
 *   malformed-request -- The server rejected the request because it
 *     was invalid. If you see this, code in this file is likely wrong.
 *
 *   malformed-response -- The response from the server was not what was
 *     expected.
 *
 *   general -- A general server error has occurred. Clients should
 *     interpret this as an opaque failure.
 *
 * @param message
 *        (string) Error message.
 */
export function TokenServerClientServerError(message: any, cause?: string): void;
export class TokenServerClientServerError {
    /**
     * Represents a TokenServerClient error that occurred on the server.
     *
     * This type will be encountered for all non-200 response codes from the
     * server. The type of error is strongly enumerated and is stored in the
     * `cause` property. This property can have the following string values:
     *
     *   invalid-credentials -- A token could not be obtained because
     *     the credentials presented by the client were invalid.
     *
     *   unknown-service -- The requested service was not found.
     *
     *   malformed-request -- The server rejected the request because it
     *     was invalid. If you see this, code in this file is likely wrong.
     *
     *   malformed-response -- The response from the server was not what was
     *     expected.
     *
     *   general -- A general server error has occurred. Clients should
     *     interpret this as an opaque failure.
     *
     * @param message
     *        (string) Error message.
     */
    constructor(message: any, cause?: string);
    now: string;
    name: string;
    message: any;
    cause: string;
    stack: string;
    _toStringFields(): {
        now: string;
        message: any;
        cause: string;
    };
}
/**
 * Represents a client to the Token Server.
 *
 * http://docs.services.mozilla.com/token/index.html
 *
 * The Token Server was designed to support obtaining tokens for arbitrary apps by
 * constructing URI paths of the form <app>/<app_version>. In practice this was
 * never used and it only supports an <app> value of `sync`, and the API presented
 * here reflects that.
 *
 * Areas to Improve:
 *
 *  - The server sends a JSON response on error. The client does not currently
 *    parse this. It might be convenient if it did.
 *  - Currently most non-200 status codes are rolled into one error type. It
 *    might be helpful if callers had a richer API that communicated who was
 *    at fault (e.g. differentiating a 503 from a 401).
 */
export function TokenServerClient(): void;
export class TokenServerClient {
    _log: null;
    /**
     * Obtain a token from a provided OAuth token against a specific URL.
     *
     * This asynchronously obtains the token.
     * It returns a Promise that resolves or rejects:
     *
     *  Rejects with:
     *   (TokenServerClientError) If no token could be obtained, this
     *     will be a TokenServerClientError instance describing why. The
     *     type seen defines the type of error encountered. If an HTTP response
     *     was seen, a RESTResponse instance will be stored in the `response`
     *     property of this object. If there was no error and a token is
     *     available, this will be null.
     *
     *  Resolves with:
     *   (map) On success, this will be a map containing the results from
     *     the server. If there was an error, this will be null. The map has the
     *     following properties:
     *
     *       id       (string) HTTP MAC public key identifier.
     *       key      (string) HTTP MAC shared symmetric key.
     *       endpoint (string) URL where service can be connected to.
     *       uid      (string) user ID for requested service.
     *       duration (string) the validity duration of the issued token.
     *
     * Example Usage
     * -------------
     *
     *   let client = new TokenServerClient();
     *   let access_token = getOAuthAccessTokenFromSomewhere();
     *   let url = "https://token.services.mozilla.com/1.0/sync/2.0";
     *
     *   try {
     *     const result = await client.getTokenUsingOAuth(url, access_token);
     *     let {id, key, uid, endpoint, duration} = result;
     *     // Do stuff with data and carry on.
     *   } catch (error) {
     *     // Handle errors.
     *   }
     * Obtain a token from a provided OAuth token against a specific URL.
     *
     * @param  url
     *         (string) URL to fetch token from.
     * @param  oauthToken
     *         (string) FxA OAuth Token to exchange token for.
     * @param  addHeaders
     *         (object) Extra headers for the request.
     */
    getTokenUsingOAuth(url: any, oauthToken: any, addHeaders?: {}): Promise<{
        id: any;
        key: any;
        endpoint: any;
        uid: any;
        duration: any;
        hashed_fxa_uid: any;
        node_type: any;
    }>;
    /**
     * Performs the exchange request to the token server to
     * produce a token based on the authorizationHeader input.
     *
     * @param  url
     *         (string) URL to fetch token from.
     * @param  authorizationHeader
     *         (string) The auth header string that populates the 'Authorization' header.
     * @param  addHeaders
     *         (object) Extra headers for the request.
     */
    _tokenServerExchangeRequest(url: any, authorizationHeader: any, addHeaders?: {}): Promise<{
        id: any;
        key: any;
        endpoint: any;
        uid: any;
        duration: any;
        hashed_fxa_uid: any;
        node_type: any;
    }>;
    /**
     * Handler to process token request responses.
     *
     * @param response
     *        RESTResponse from token HTTP request.
     */
    _processTokenResponse(response: any): {
        id: any;
        key: any;
        endpoint: any;
        uid: any;
        duration: any;
        hashed_fxa_uid: any;
        node_type: any;
    };
    observerPrefix: null;
    _maybeNotifyBackoff(response: any, headerName: any): void;
    newRESTRequest(url: any): any;
}
