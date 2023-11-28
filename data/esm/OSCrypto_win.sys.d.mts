export function OSCrypto(): void;
export class OSCrypto {
    _structs: {};
    _functions: Map<any, any>;
    _libs: Map<any, any>;
    /**
     * Convert an array containing only two bytes unsigned numbers to a string.
     * @param {number[]} arr - the array that needs to be converted.
     * @returns {string} the string representation of the array.
     */
    arrayToString(arr: number[]): string;
    /**
     * Convert a string to an array.
     * @param {string} str - the string that needs to be converted.
     * @returns {number[]} the array representation of the string.
     */
    stringToArray(str: string): number[];
    /**
     * Calculate the hash value used by IE as the name of the registry value where login details are
     * stored.
     * @param {string} data - the string value that needs to be hashed.
     * @returns {string} the hash value of the string.
     */
    getIELoginHash(data: string): string;
    _getEntropyParam(entropy: any): any;
    _convertWinArrayToJSArray(dataBlob: any): any;
    /**
     * Decrypt a string using the windows CryptUnprotectData API.
     * @param {string} data - the encrypted string that needs to be decrypted.
     * @param {?string} entropy - the entropy value of the decryption (could be null). Its value must
     * be the same as the one used when the data was encrypted.
     * @param {?string} output - how to return the decrypted data default string
     * @returns {string|Uint8Array} the decryption of the string.
     */
    decryptData(data: string, entropy?: string | null, output?: string | null): string | Uint8Array;
    /**
     * Encrypt a string using the windows CryptProtectData API.
     * @param {string} data - the string that is going to be encrypted.
     * @param {?string} entropy - the entropy value of the encryption (could be null). Its value must
     * be the same as the one that is going to be used for the decryption.
     * @returns {string} the encrypted string.
     */
    encryptData(data: string, entropy?: string | null): string;
    /**
     * Must be invoked once after last use of any of the provided helpers.
     */
    finalize(): void;
}
