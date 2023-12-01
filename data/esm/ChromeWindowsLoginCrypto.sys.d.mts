/// <reference types="gecko-types" />
/**
 * Instances of this class have a shape similar to OSCrypto so it can be dropped
 * into code which uses that. The algorithms here are
 * specific to what is needed for Chrome login storage on Windows.
 */
export class ChromeWindowsLoginCrypto {
    /**
     * @param {string} userDataPathSuffix The unique identifier for the variant of
     *   Chrome that is having its logins imported. These are the keys in the
     *   SUB_DIRECTORIES object in ChromeMigrationUtils.getDataPath.
     */
    constructor(userDataPathSuffix: string);
    osCrypto: OSCrypto;
    /**
     * Must be invoked once after last use of any of the provided helpers.
     */
    finalize(): void;
    /**
     * Convert an array containing only two bytes unsigned numbers to a string.
     *
     * @param {number[]} arr - the array that needs to be converted.
     * @returns {string} the string representation of the array.
     */
    arrayToString(arr: number[]): string;
    stringToArray(binary_string: any): Uint8Array;
    /**
     * @param {string} ciphertext ciphertext optionally prefixed by the encryption version
     *                            (see ENCRYPTION_VERSION_PREFIX).
     * @returns {string} plaintext password
     */
    decryptData(ciphertext: string): string;
    _decryptUnversioned(ciphertext: any): Promise<string | Uint8Array>;
    _decryptV10(ciphertext: any): Promise<string>;
    /**
     * @param {USVString} plaintext to encrypt
     * @param {?string} version to encrypt default unversioned
     * @returns {string} encrypted string consisting of UTF-16 code units prefixed
     *                   by the ENCRYPTION_VERSION_PREFIX.
     */
    encryptData(plaintext: USVString, version?: string | null): string;
    _encryptUnversioned(plaintext: any): Promise<string>;
    _encryptV10(plaintext: any): Promise<string>;
}
import { OSCrypto } from "resource://gre/modules/OSCrypto_win.sys.mjs";
