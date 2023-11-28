/**
 * Instances of this class have a shape similar to OSCrypto so it can be dropped
 * into code which uses that. This isn't implemented as OSCrypto_mac.js since
 * it isn't calling into encryption functions provided by macOS but instead
 * relies on OS encryption key storage in Keychain. The algorithms here are
 * specific to what is needed for Chrome login storage on macOS.
 */
export class ChromeMacOSLoginCrypto {
    /**
     * @param {string} serviceName of the Keychain Item to use to derive a key.
     * @param {string} accountName of the Keychain Item to use to derive a key.
     * @param {string?} [testingPassphrase = null] A string to use as the passphrase
     *                  to derive a key for testing purposes rather than retrieving
     *                  it from the macOS Keychain since we don't yet have a way to
     *                  mock the Keychain auth dialog.
     */
    constructor(serviceName: string, accountName: string, testingPassphrase?: string | null);
    ALGORITHM: string;
    _keyPromise: Promise<void | CryptoKey>;
    /**
     * Convert an array containing only two bytes unsigned numbers to a string.
     *
     * @param {number[]} arr - the array that needs to be converted.
     * @returns {string} the string representation of the array.
     */
    arrayToString(arr: number[]): string;
    stringToArray(binary_string: any): Uint8Array;
    /**
     * @param {Array} ciphertextArray ciphertext prefixed by the encryption version
     *                            (see ENCRYPTION_VERSION_PREFIX).
     * @returns {string} plaintext password
     */
    decryptData(ciphertextArray: any[]): string;
    /**
     * @param {USVString} plaintext to encrypt
     * @returns {string} encrypted string consisting of UTF-16 code units prefixed
     *                   by the ENCRYPTION_VERSION_PREFIX.
     */
    encryptData(plaintext: USVString): string;
}
