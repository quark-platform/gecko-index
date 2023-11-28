export function AuthenticationError(details: any, source: any): void;
export class AuthenticationError {
    constructor(details: any, source: any);
    details: any;
    source: any;
    toString(): string;
}
export function SyncAuthManager(): void;
export class SyncAuthManager {
    _fxaService: null;
    _tokenServerClient: null;
    _log: any;
    asyncObserver: any;
    _token: null;
    _userUid: null;
    hashedUID(): any;
    hashedDeviceID(deviceID: any): any;
    get telemetryNodeType(): any;
    finalize(): void;
    getSignedInUser(): Promise<any>;
    logout(): void;
    observe(subject: any, topic: any, data: any): Promise<void>;
    /**
     * Provide override point for testing token expiration.
     */
    _now(): any;
    get _localtimeOffsetMsec(): any;
    get syncKeyBundle(): any;
    /**
     * Set the username value.
     *
     * Changing the username has the side-effect of wiping credentials.
     */
    set username(value: any);
    get username(): any;
    /**
     * Resets all calculated credentials we hold for the current user. This will
     * *not* force the user to reauthenticate, but instead will force us to
     * calculate a new key bundle, fetch a new token, etc.
     */
    resetCredentials(): void;
    _syncKeyBundle: any;
    /**
     * Pre-fetches any information that might help with migration away from this
     * identity.  Called after every sync and is really just an optimization that
     * allows us to avoid a network request for when we actually need the
     * migration info.
     */
    prefetchMigrationSentinel(service: any): void;
    /**
     * Verify the current auth state, unlocking the master-password if necessary.
     *
     * Returns a promise that resolves with the current auth state after
     * attempting to unlock.
     */
    unlockAndVerifyAuthState(): Promise<any>;
    /**
     * Do we have a non-null, not yet expired token for the user currently
     * signed in?
     */
    _hasValidToken(): boolean;
    get _tokenServerUrl(): any;
    _fetchTokenForUser(): Promise<any>;
    /**
     * Generates an OAuth access_token using the OLD_SYNC scope and exchanges it
     * for a TokenServer token.
     *
     * @returns {Promise}
     * @private
     */
    _fetchTokenUsingOAuth(key: any): Promise<any>;
    _ensureValidToken(forceNewToken?: boolean): Promise<any>;
    _ensureValidTokenPromise: any;
    __ensureValidToken(): Promise<any>;
    getResourceAuthenticator(): any;
    /**
     * @return a Hawk HTTP Authorization Header, lightly wrapped, for the .uri
     * of a RESTRequest or AsyncResponse object.
     */
    _getAuthenticationHeader(httpObject: any, method: any): Promise<{
        headers: {
            authorization: any;
        };
    }>;
    /**
     * Determine the cluster for the current user and update state.
     * Returns true if a new cluster URL was found and it is different from
     * the existing cluster URL, false otherwise.
     */
    setCluster(): Promise<boolean>;
    _findCluster(): Promise<any>;
}
