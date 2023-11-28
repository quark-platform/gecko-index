export function MockFxaStorageManager(): void;
export class MockFxaStorageManager {
    promiseInitialized: Promise<void>;
    initialize(accountData: any): void;
    accountData: any;
    finalize(): Promise<void>;
    getAccountData(fields?: any): Promise<{}>;
    updateAccountData(updatedFields: any): Promise<void>;
    deleteAccountData(): Promise<void>;
}
/**
 * First wait >100ms (nsITimers can take up to that much time to fire, so
 * we can account for the timer in delayedAutoconnect) and then two event
 * loop ticks (to account for the CommonUtils.nextTick() in autoConnect).
 */
export function waitForZeroTimer(callback: any): void;
export function syncTestLogging(level?: string): any;
/**
 * Turn WBO cleartext into fake "encrypted" payload as it goes over the wire.
 */
export function encryptPayload(cleartext: any): {
    ciphertext: any;
    IV: string;
    hmac: any;
};
export function promiseZeroTimer(): Promise<any>;
export function promiseNamedTimer(wait: any, thisObj: any, name: any): Promise<any>;
export function makeIdentityConfig(overrides: any): {
    username: string;
    fxaccount: {
        user: {
            email: string;
            scopedKeys: {
                [x: number]: {
                    kid: string;
                    k: string;
                    kty: string;
                };
            };
            sessionToken: string;
            uid: string;
            verified: boolean;
        };
        token: {
            endpoint: any;
            duration: number;
            id: string;
            key: string;
            hashed_fxa_uid: string;
        };
    };
};
export function makeFxAccountsInternalMock(config: any): {
    newAccountState(credentials: any): any;
    getOAuthToken: () => Promise<string>;
    _destroyOAuthToken: () => Promise<void>;
    keys: {
        getScopedKeys: () => Promise<{
            "https://identity.mozilla.com/apps/oldsync": {
                identifier: string;
                keyRotationSecret: string;
                keyRotationTimestamp: number;
            };
        }>;
    };
    profile: {
        getProfile(): any;
    };
};
export function configureFxAccountIdentity(authService: any, config?: {
    username: string;
    fxaccount: {
        user: {
            email: string;
            scopedKeys: {
                [x: number]: {
                    kid: string;
                    k: string;
                    kty: string;
                };
            };
            sessionToken: string;
            uid: string;
            verified: boolean;
        };
        token: {
            endpoint: any;
            duration: number;
            id: string;
            key: string;
            hashed_fxa_uid: string;
        };
    };
}, fxaInternal?: {
    newAccountState(credentials: any): any;
    getOAuthToken: () => Promise<string>;
    _destroyOAuthToken: () => Promise<void>;
    keys: {
        getScopedKeys: () => Promise<{
            "https://identity.mozilla.com/apps/oldsync": {
                identifier: string;
                keyRotationSecret: string;
                keyRotationTimestamp: number;
            };
        }>;
    };
    profile: {
        getProfile(): any;
    };
}): void;
export function configureIdentity(identityOverrides: any, server: any): Promise<void>;
export function SyncTestingInfrastructure(server: any, username: any): Promise<{
    logStats: any;
    fakeFilesystem: any;
    fakeGUIDService: any;
    fakeCryptoService: any;
}>;
export function sumHistogram(name: any, options?: {}): number;
d only be defined for testing as this
     *             function will generate a cryptographically secure random one
     *             if not defined.
     *           ext - Extra string to be included in MAC. Per the HTTP MAC spec,
     *             the format is undefined and thus application specific.
     * @returns
     *         (object) Contains results of operation and input arguments (for
     *           symmetry). The object has the following keys:
     *
     *           identifier - (string) MAC Key Identifier (from arguments).
     *           key - (string) MAC Key (from arguments).
     *           method - (string) HTTP request method (from arguments).
     *           hostname - (string) HTTP hostname used (derived from arguments).
     *           port - (string) HTTP port number used (derived from arguments).
     *           mac - (string) Raw HMAC digest bytes.
     *           getHeader - (function) Call to obtain the string Authorization
     *             header value for this invocation.
     *           nonce - (string) Nonce value used.
     *           ts - (number) Integer seconds since Unix epoch that was used.
     */
    function computeHTTPMACSHA1(identifier: any, key: any, method: any, uri: any, extra: any): Promise<{
        identifier: any;
        key: any;
        method: any;
        hostname: any;
        port: any;
        mac: any;
        nonce: any;
        ts: any;
        ext: any;
        getHeader: () => string;
    }>;
    function getHTTPMACSHA1Header(identifier: any, ts: any, nonce: any, mac: any, ext: any): string;
    /**
     * Given an HTTP header value, strip out any attributes.
     */
    function stripHeaderAttributes(value: any): any;
    /**
     * Compute the HAWK client values (mostly the header) for an HTTP request.
     *
     * @param  URI
     *         (nsIURI) HTTP request URI.
     * @param  method
     *         (string) HTTP request method.
     * @param  options
     *         (object) extra parameters (all but "credentials" are optional):
     *           credentials - (object, mandatory) HAWK credentials object.
     *             All three keys are required:
     *             id - (string) key identifier
     *             key - (string) raw key bytes
     *           ext - (string) application-specific data, included in MAC
     *           localtimeOffsetMsec - (number) local clock offset (vs server)
     *           payload - (string) payload to include in hash, containing the
     *                     HTTP request body. If not provided, the HAWK hash
     *                     will not cover the request body, and the server
     *                     should not check it either. This will be UTF-8
     *                     encoded into bytes before hashing. This function
     *                     cannot handle arbitrary binary data, sorry (the
     *                     UTF-8 encoding process will corrupt any codepoints
     *                     between U+0080 and U+00FF). Callers must be careful
     *                     to use an HTTP client function which encodes the
     *                     payload exactly the same way, otherwise the hash
     *                     will not match.
     *           contentType - (string) payload Content-Type. This is included
     *                         (without any attributes like "charset=") in the
     *                         HAWK hash. It does *not* affect interpretation
     *                         of the "payload" property.
     *           hash - (base64 string) pre-calculated payload hash. If
     *                  provided, "payload" is ignored.
     *           ts - (number) pre-calculated timestamp, secs since epoch
     *           now - (number) current time, ms-since-epoch, for tests
     *           nonce - (string) pre-calculated nonce. Should only be defined
     *                   for testing as this function will generate a
     *                   cryptographically secure random one if not defined.
     * @returns
     *         Promise<Object> Contains results of operation. The object has the
     *         following keys:
     *           field - (string) HAWK header, to use in Authorization: header
     *           artifacts - (object) other generated values:
     *             ts - (number) timestamp, in seconds since epoch
     *             nonce - (string)
     *             method - (string)
     *             resource - (string) path plus querystring
     *             host - (string)
     *             port - (number)
     *             hash - (string) payload hash (base64)
     *             ext - (string) app-specific data
     *             MAC - (string) request MAC (base64)
     */
    function computeHAWK(uri: any, method: any, options: any): Promise<{
        artifacts: {
            ts: any;
            nonce: any;
            method: any;
            resource: any;
            host: any;
            port: any;
            hash: any;
            ext: any;
        };
        field: string;
    }>;
}
