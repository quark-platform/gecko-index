export class FxAccountsPairingFlow {
    static get(channelId: any): any;
    static finalizeAll(): void;
    static start(options: any): Promise<string>;
    constructor(options: any);
    _channelId: any;
    _pairingChannel: any;
    _emitter: any;
    _fxa: any;
    _fxai: any;
    _fxaConfig: any;
    _weave: any;
    _stateMachine: PairingStateMachine;
    _flowTimeoutId: any;
    _onFlowTimeout(): void;
    _closeChannel(): void;
    _closed: boolean;
    finalize(): void;
    _setupListeners(): void;
    _onAbort(): void;
    _onError(error: any): void;
    _onPairingChannelError(error: any): void;
    onWebChannelMessage(command: any): Promise<{
        ua: any;
        city: any;
        region: any;
        country: any;
        ipAddress: any;
        err?: undefined;
        suppAuthorized?: undefined;
    } | {
        err: any;
        ua?: undefined;
        city?: undefined;
        region?: undefined;
        country?: undefined;
        ipAddress?: undefined;
        suppAuthorized?: undefined;
    } | {
        suppAuthorized: boolean;
        ua?: undefined;
        city?: undefined;
        region?: undefined;
        country?: undefined;
        ipAddress?: undefined;
        err?: undefined;
    } | {
        ua?: undefined;
        city?: undefined;
        region?: undefined;
        country?: undefined;
        ipAddress?: undefined;
        err?: undefined;
        suppAuthorized?: undefined;
    }>;
    onPairingChannelMessage(sender: any, payload: any): Promise<void>;
    onPrefViewClosed(): void;
    /**
     * Grant an OAuth authorization code for the connecting client.
     *
     * @param {Object} options
     * @param options.client_id
     * @param options.state
     * @param options.scope
     * @param options.access_type
     * @param options.code_challenge_method
     * @param options.code_challenge
     * @param [options.keys_jwe]
     * @returns {Promise<Object>} Object containing "code" and "state" properties.
     */
    _authorizeOAuthCode(options: {
        client_id: any;
        state: any;
        scope: any;
        access_type: any;
        code_challenge_method: any;
        code_challenge: any;
        keys_jwe?: any;
    }): Promise<any>;
    /**
     * Create a JWE to deliver keys to another client via the OAuth scoped-keys flow.
     *
     * This method is used to transfer key material to another client, by providing
     * an appropriately-encrypted value for the `keys_jwe` OAuth response parameter.
     * Since we're transferring keys from one client to another, two things must be
     * true:
     *
     *   * This client must actually have the key.
     *   * The other client must be allowed to request that key.
     *
     * @param {String} sessionToken the sessionToken to use when fetching key metadata
     * @param {String} clientId the client requesting access to our keys
     * @param {String} scopes Space separated requested scopes being requested
     * @param {Object} jwk Ephemeral JWK provided by the client for secure key transfer
     */
    _createKeysJWE(sessionToken: string, clientId: string, scopes: string, jwk: any): Promise<any>;
}
declare class PairingStateMachine {
    constructor(emitter: any);
    _emitter: any;
    get currentState(): any;
    _transition(StateCtor: any, ...args: any[]): void;
    _currentState: any;
    assertState(RequiredStates: any, messagePrefix?: any): void;
}
export {};
