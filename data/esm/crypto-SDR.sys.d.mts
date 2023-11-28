export function LoginManagerCrypto_SDR(): void;
export class LoginManagerCrypto_SDR {
    classID: any;
    QueryInterface: any;
    __decoderRing: null;
    get _decoderRing(): any;
    __utfConverter: null;
    get _utfConverter(): any;
    _utfConverterReset(): void;
    _uiBusy: boolean;
    init(): void;
    encrypt(plainText: any): any;
    encryptMany(plaintexts: any): Promise<any>;
    decrypt(cipherText: any): any;
    /**
     * Decrypts the specified strings, using the SecretDecoderRing.
     *
     * @resolve {string[]} The decrypted strings. If a string cannot
     * be decrypted, the empty string is returned for that instance.
     * Callers will need to use decrypt() to determine if the encrypted
     * string is invalid or intentionally empty. Throws/reject with
     * an error if there was a problem.
     */
    decryptMany(cipherTexts: any): Promise<any>;
    get uiBusy(): boolean;
    get isLoggedIn(): any;
    get defaultEncType(): any;
    _notifyObservers(topic: any): void;
}
