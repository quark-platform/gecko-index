export class DownloadLastDir {
    constructor(aWindow: any, aForcePrivate: any);
    fakeContext: any;
    isPrivate(): any;
    set file(val: any);
    get file(): any;
    cleanupPrivateFile(): void;
    getFileAsync(aURI: any): Promise<any>;
    setFile(aURI: any, aFile: any): void;
    #private;
}
