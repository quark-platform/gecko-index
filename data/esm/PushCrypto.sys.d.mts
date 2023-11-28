export function getCryptoParamsFromHeaders(headers: any): {
    salt: any;
    rs: number;
    senderKey: any;
};
export namespace PushCrypto {
    export { concatArray };
    export function generateAuthenticationSecret(): Uint8Array;
    export function validateAppServerKey(key: any): Promise<any>;
    export function generateKeys(): Promise<[ArrayBuffer, JsonWebKey]>;
    /**
     * Decrypts a push message.
     *
     * @throws {CryptoError} if decryption fails.
     * @param {JsonWebKey} privateKey The ECDH private key of the subscription
     *  receiving the message, in JWK form.
     * @param {BufferSource} publicKey The ECDH public key of the subscription
     *  receiving the message, in raw form.
     * @param {BufferSource} authenticationSecret The 16-byte shared
     *  authentication secret of the subscription receiving the message.
     * @param {Object} headers The encryption headers from the push server.
     * @param {BufferSource} payload The encrypted message payload.
     * @returns {Uint8Array} The decrypted message data.
     */
    export function decrypt(privateKey: JsonWebKey, publicKey: BufferSource, authenticationSecret: BufferSource, headers: any, payload: BufferSource): Uint8Array;
    /**
     * Encrypts a payload suitable for using in a push message. The encryption
     * is always done with a record size of 4096 and no padding.
     *
     * @throws {CryptoError} if encryption fails.
     * @param {plaintext} Uint8Array The plaintext to encrypt.
     * @param {receiverPublicKey} Uint8Array The public key of the recipient
     *  of the message as a buffer.
     * @param {receiverAuthSecret} Uint8Array The auth secret of the of the
     *  message recipient as a buffer.
     * @param {options} Object Encryption options, used for tests.
     * @returns {ciphertext, encoding} The encrypted payload and encoding.
     */
    export function encrypt(plaintext: any, receiverPublicKey: any, receiverAuthSecret: any, options?: {}): ciphertext;
}
declare function concatArray(arrays: any): any;
export {};
