export const ERROR_INVALID_SCOPES: "INVALID_SCOPES";
export const ERROR_INVALID_STATE: "INVALID_STATE";
export const ERROR_SYNC_SCOPE_NOT_GRANTED: "ERROR_SYNC_SCOPE_NOT_GRANTED";
export const ERROR_NO_KEYS_JWE: "ERROR_NO_KEYS_JWE";
export const ERROR_OAUTH_FLOW_ABANDONED: "ERROR_OAUTH_FLOW_ABANDONED";
/**
 * Handles all logic and state related to initializing, and completing OAuth flows
 * with FxA
 * It's possible to start multiple OAuth flow, but only one can be completed, and once one flow is completed
 * all the other in-flight flows will be concluded, and attempting to complete those flows will result in errors.
 */
export class FxAccountsOAuth {
    /**
     * Creates a new FxAccountsOAuth
     *
     * @param { Object } fxaClient: The fxa client used to send http request to the oauth server
     */
    constructor(fxaClient: any);
    /**
     * Stores a flow in-memory
     * @param { string } state: A base-64 URL-safe string represnting a random value created at the start of the flow
     * @param { Object } value: The data needed to complete a flow, once the oauth code is available.
     * in practice, `value` is:
     *  - `verifier`: A base=64 URL-safe string representing the PKCE code verifier
     *  - `key`: The private key need to decrypt the JWE we recieve from the auth server
     *  - `requestedScopes`: The scopes the caller requested, meant to be compared against the scopes the server authorized
     */
    addFlow(state: string, value: any): void;
    /**
     * Clears all started flows
     */
    clearAllFlows(): void;
    getFlow(state: any): any;
    numOfFlows(): number;
    /**
     * Begins an OAuth flow, to be completed with a an OAuth code and state.
     *
     * This function stores needed information to complete the flow. You must call `completeOAuthFlow`
     * on the same instance of `FxAccountsOAuth`, otherwise the completing of the oauth flow will fail.
     *
     * @param { string[] } scopes: The OAuth scopes the client should request from FxA
     *
     * @returns { Object }: Returns an object representing the query parameters that should be
     *     added to the FxA authorization URL to initialize an oAuth flow.
     *     In practice, the query parameters are:
     *       - `client_id`: The OAuth client ID for Firefox Desktop
     *       - `scope`: The scopes given by the caller, space seperated
     *       - `action`: This will always be `email`
     *       - `response_type`: This will always be `code`
     *       - `access_type`: This will always be `offline`
     *       - `state`: A URL-safe base-64 string randomly generated
     *       - `code_challenge`: A URL-safe base-64 string representing the PKCE challenge
     *       - `code_challenge_method`: This will always be `S256`
     *          For more informatio about PKCE, read https://datatracker.ietf.org/doc/html/rfc7636
     *       - `keys_jwk`: A URL-safe base-64 representing a JWK to be used as a public key by the server
     *          to generate a JWE
     */
    beginOAuthFlow(scopes: string[]): any;
    /** Completes an OAuth flow and invalidates any other ongoing flows
     * @param { string } code: OAuth authorization code provided by running an OAuth flow
     * @param { string } state: The state first provided by `beginOAuthFlow`, then roundtripped through the server
     *
     * @returns { Object }: Returns an object representing the result of completing the oauth flow.
     *   The object includes the following:
     *     - 'scopedKeys': The encryption keys provided by the server, already decrypted
     *     - 'refreshToken': The refresh token provided by the server
     *     - 'accessToken': The access token provided by the server
     * */
    completeOAuthFlow(code: string, state: string): any;
    #private;
}
