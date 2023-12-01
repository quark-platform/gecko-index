export function WeaveCrypto(): void;
export class WeaveCrypto {
    prefBranch: null;
    debug: boolean;
    observer: {
        _self: null;
        QueryInterface: MozQueryInterface;
        observe(subject: any, topic: any, data: any): void;
    };
    init(): void;
    log(message: any): void;
    _getCrypto(): Crypto;
    encrypt(clearTextUCS2: any, symmetricKey: any, iv: any): Promise<string>;
    decrypt(cipherText: any, symmetricKey: any, iv: any): Promise<any>;
    /**
     * _commonCrypt
     *
     * @args
     * data: data to encrypt/decrypt (ArrayBuffer)
     * symKeyStr: symmetric key (Base64 String)
     * ivStr: initialization vector (Base64 String)
     * operation: operation to apply (either OPERATIONS.ENCRYPT or OPERATIONS.DECRYPT)
     * @returns
     * the encrypted/decrypted data (ArrayBuffer)
     */
    _commonCrypt(data: any, symKeyStr: any, ivStr: any, operation: any): Promise<Uint8Array>;
    generateRandomKey(): Promise<string>;
    generateRandomIV(): string;
    generateRandomBytes(byteCount: any): string;
    _encryptionSymKeyMemo: {};
    _decryptionSymKeyMemo: {};
    importSymKey(encodedKeyString: any, operation: any): Promise<any>;
    /**
     * Returns an Uint8Array filled with a JS string,
     * which means we only keep utf-16 characters from 0x00 to 0xFF.
     */
    byteCompressInts(str: any): Uint8Array;
    expandData(data: any): string;
    encodeBase64(data: any): string;
    makeUint8Array(input: any, isEncoded: any): Uint8Array;
}
