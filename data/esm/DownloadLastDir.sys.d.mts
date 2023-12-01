export class DownloadLastDir {
    constructor(aWindow: any, aForcePrivate: any);
    fakeContext: any;
    isPrivate(): any;
    set file(val: void);
    get file(): void;
    cleanupPrivateFile(): void;
    getFileAsync(aURI: any): Promise<any>;
    setFile(aURI: any, aFile: any): void;
    #private;
}
