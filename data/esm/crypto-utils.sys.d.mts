export function computeHashAsString(hashType: any, input: any): string;
/**
 * Returns the string representation (hex) of the SHA256 hash of `input`.
 *
 * @param {string} input
 *        The value to hash.
 * @returns {string}
 *          The hex representation of a SHA256 hash.
 */
export function computeSha256HashAsString(input: string): string;
/**
 * Returns the string representation (hex) of the SHA1 hash of `input`.
 *
 * @param {string} input
 *        The value to hash.
 * @returns {string}
 *          The hex representation of a SHA1 hash.
 */
export function computeSha1HashAsString(input: string): string;
/**
 * Returns the string representation (hex) of a given CryptoHashInstance.
 *
 * @param {CryptoHash} aCrypto
 * @returns {string}
 *          The hex representation of a SHA256 hash.
 */
export function getHashStringForCrypto(aCrypto: any): string;
