/**
 * Utilities for working with key material linked to the user's account.
 *
 * Each Firefox Account has 32 bytes of root key material called `kB` which is
 * linked to the user's password, and which is used to derive purpose-specific
 * subkeys for things like encrypting the user's sync data. This class provides
 * the interface for working with such key material.
 *
 * Most recent FxA clients obtain appropriate key material directly as part of
 * their sign-in flow, using a special extension of the OAuth2.0 protocol to
 * securely deliver the derived keys without revealing `kB`. Keys obtained in
 * in this way are called "scoped keys" since each corresponds to a particular
 * OAuth scope, and this class provides a `getKeyForScope` method that is the
 * preferred method for consumers to work with such keys.
 *
 * However, since the FxA integration in Firefox Desktop pre-dates the use of
 * OAuth2.0, we also have a lot of code for fetching keys via an older flow.
 * This flow uses a special `keyFetchToken` to obtain `kB` and then derive various
 * sub-keys from it. Consumers should consider this an internal implementation
 * detail of the `FxAccountsKeys` class and should prefer `getKeyForScope` where
 * possible.  We intend to remove support for Firefox ever directly handling `kB`
 * at some point in the future.
 */
export class FxAccountsKeys {
    constructor(fxAccountsInternal: any);
    _fxai: any;
    /**
     * Checks if we currently have the key for a given scope, or if we have enough to
     * be able to successfully fetch and unwrap it for the signed-in-user.
     *
     * Unlike `getKeyForScope`, this will not hit the network to fetch wrapped keys if
     * they aren't available locally.
     */
    canGetKeyForScope(scope: any): any;
    /**
     * Get the key for a specified OAuth scope.
     *
     * @param {String} scope The OAuth scope whose key should be returned
     *
     * @return Promise<JWK>
     *        If no key is available the promise resolves to `null`.
     *        If a key is available for the given scope, th promise resolves to a JWK with fields:
     *        {
     *          scope: The requested scope
     *          kid: Key identifier
     *          k: Derived key material
     *          kty: Always "oct" for scoped keys
     *        }
     *
     */
    getKeyForScope(scope: string): Promise<any>;
    /**
     * Format a JWK kid as hex rather than base64.
     *
     * This is a backwards-compatibility helper for code that needs a raw key fingerprint
     * for use as a key identifier, rather than the timestamp+fingerprint format used by
     * FxA scoped keys.
     *
     * @param {Object} jwk The JWK from which to extract the `kid` field as hex.
     */
    kidAsHex(jwk: any): any;
    /**
     * Fetch encryption keys for the signed-in-user from the FxA API server.
     *
     * Not for user consumption.  Exists to cause the keys to be fetched.
     *
     * Returns user data so that it can be chained with other methods.
     *
     * @return Promise
     *        The promise resolves to the credentials object of the signed-in user:
     *        {
     *          email: The user's email address
     *          uid: The user's unique id
     *          sessionToken: Session for the FxA server
     *          scopedKeys: Object mapping OAuth scopes to corresponding derived keys
     *          verified: email verification status
     *        }
     * @throws If there is no user signed in.
     */
    _loadOrFetchKeys(): Promise<any>;
    /**
     * Key storage migration or fetching logic.
     *
     * This method contains the doing-expensive-operations part of the logic of
     * _loadOrFetchKeys(), factored out into a separate method so we can debounce it.
     *
     */
    _migrateOrFetchKeys(currentState: any, userData: any): Promise<any>;
    /**
     * Removes deprecated keys from storage and returns an
     * updated user data object
     */
    _removeDeprecatedKeys(currentState: any, userData: any): Promise<any>;
    /**
     * Fetch keys from the server, unwrap them, and derive required sub-keys.
     *
     * Once the user's email is verified, we can resquest the root key `kB` from the
     * FxA server, unwrap it using the client-side secret `unwrapBKey`, and then
     * derive all the sub-keys required for operation of the browser.
     */
    _fetchAndUnwrapAndDeriveKeys(currentState: any, sessionToken: any, keyFetchToken: any): Promise<any>;
    /**
     * Fetch the wrapped root key `wrapKB` from the FxA server.
     *
     * This consumes the single-use `keyFetchToken`.
     */
    _fetchKeys(keyFetchToken: any): any;
    /**
     * Fetch additional metadata required for deriving scoped keys.
     *
     * This includes timestamps and a server-provided secret to mix in to
     * the derived value in order to support key rotation.
     */
    _fetchScopedKeysMetadata(sessionToken: any): Promise<any>;
    /**
     * Derive purpose-specific keys from the root FxA key `kB`.
     *
     * Everything that uses an encryption key from FxA uses a purpose-specific derived
     * key. For new uses this is derived in a structured way based on OAuth scopes,
     * while for legacy uses (mainly Firefox Sync) it is derived in a more ad-hoc fashion.
     * This method does all the derivations for the uses that we know about.
     *
     */
    _deriveKeys(uid: any, kBbytes: any, scopedKeysMetadata: any): Promise<{
        scopedKeys: {};
    }>;
    /**
     * Derive various scoped keys from the root FxA key `kB`.
     *
     * The `scopedKeysMetadata` object is additional information fetched from the server that
     * that gets mixed in to the key derivation, with each member of the object corresponding
     * to an OAuth scope that keys its own scoped key.
     *
     * As a special case for backwards-compatibility, sync-related scopes get special
     * treatment to use a legacy derivation algorithm.
     *
     */
    _deriveScopedKeys(uid: any, kBbytes: any, scopedKeysMetadata: any): Promise<{}>;
    /**
     * Derive a scoped key for an individual OAuth scope.
     *
     * The derivation here uses HKDF to combine:
     *   - the root key material kB
     *   - a unique identifier for this scoped key
     *   - a server-provided secret that allows for key rotation
     *   - the account uid as an additional salt
     *
     * It produces 32 bytes of (secret) key material along with a (potentially public)
     * key identifier, formatted as a JWK.
     *
     * The full details are in the technical docs at
     * https://docs.google.com/document/d/1IvQJFEBFz0PnL4uVlIvt8fBS_IPwSK-avK0BRIHucxQ/
     */
    _deriveScopedKey(uid: any, kBbytes: any, scope: any, scopedKeyMetadata: any): Promise<{
        kid: string;
        k: string;
        kty: string;
    }>;
    /**
     * Derive the scoped key for the one of our legacy sync-related scopes.
     *
     * These uses a different key-derivation algoritm that incorporates less server-provided
     * data, for backwards-compatibility reasons.
     *
     */
    _deriveLegacyScopedKey(uid: any, kBbytes: any, scope: any, scopedKeyMetadata: any): Promise<any>;
    /**
     * Format key material for a legacy scyne-related scope as a JWK.
     *
     * @param {ArrayBuffer} kid bytes of the key hash to use in the key identifier
     * @param {ArrayBuffer} key bytes of the derived sync key
     * @param {String} scope the scope with which this key is associated
     * @param {Number} keyRotationTimestamp server-provided timestamp of last key rotation
     * @returns {Object} key material formatted as a JWK object
     */
    _formatLegacyScopedKey(kid: ArrayBuffer, key: ArrayBuffer, scope: string, { keyRotationTimestamp }: number): any;
    /**
     * Derive the Sync Key given the byte string kB.
     *
     * @returns Promise<HKDF(kB, undefined, "identity.mozilla.com/picl/v1/oldsync", 64)>
     */
    _deriveSyncKey(kBbytes: any): Promise<any>;
    /**
     * Derive the X-Client-State header given the byte string kB.
     *
     * @returns Promise<SHA256(kB)[:16]>
     */
    _deriveXClientState(kBbytes: any): Promise<any>;
    _sha256(bytes: any): any;
}
