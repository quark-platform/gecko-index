export const jwcrypto: JWCrypto;
declare class JWCrypto {
    /**
     * Encrypts the given data into a JWE using AES-256-GCM content encryption.
     *
     * This function implements a very small subset of the JWE encryption standard
     * from https://tools.ietf.org/html/rfc7516. The only supported content encryption
     * algorithm is enc="A256GCM" [1] and the only supported key encryption algorithm
     * is alg="ECDH-ES" [2].
     *
     * @param {Object} key Peer Public JWK.
     * @param {ArrayBuffer} data
     *
     * [1] https://tools.ietf.org/html/rfc7518#section-5.3
     * [2] https://tools.ietf.org/html/rfc7518#section-4.6
     *
     * @returns {Promise<String>}
     */
    generateJWE(key: any, data: ArrayBuffer): Promise<string>;
    /**
     * Decrypts the given JWE using AES-256-GCM content encryption into a byte array.
     * This function does the opposite of `JWCrypto.generateJWE`.
     * The only supported content encryption algorithm is enc="A256GCM" [1]
     * and the only supported key encryption algorithm is alg="ECDH-ES" [2].
     *
     * @param {"ECDH-ES"} algorithm
     * @param {CryptoKey} key Local private key
     *
     * [1] https://tools.ietf.org/html/rfc7518#section-5.3
     * [2] https://tools.ietf.org/html/rfc7518#section-4.6
     *
     * @returns {Promise<Uint8Array>}
     */
    decryptJWE(jwe: any, key: CryptoKey): Promise<Uint8Array>;
}
export {};
