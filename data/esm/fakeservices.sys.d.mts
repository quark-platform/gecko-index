export function FakeFilesystemService(contents: any): void;
export class FakeFilesystemService {
    constructor(contents: any);
    fakeContents: any;
}
export function fakeSHA256HMAC(message: any): any;
export function FakeGUIDService(): void;
export function FakeCryptoService(): void;
export class FakeCryptoService {
    counter: number;
    encrypt(clearText: any, symmetricKey: any, iv: any): Promise<any>;
    decrypt(cipherText: any, symmetricKey: any, iv: any): Promise<any>;
    generateRandomKey(): Promise<string>;
    generateRandomIV: () => string;
    expandData: (data: any, len: any) => any;
    generateRandomBytes: (byteCount: any) => string;
}
