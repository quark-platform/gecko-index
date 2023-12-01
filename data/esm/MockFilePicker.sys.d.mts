export namespace MockFilePicker {
    let returnOK: any;
    let returnCancel: any;
    let returnReplace: any;
    let filterAll: 1;
    let filterHTML: 2;
    let filterText: 4;
    let filterImages: 8;
    let filterXML: 16;
    let filterXUL: 32;
    let filterApps: 64;
    let filterAllowURLs: 128;
    let filterAudio: 256;
    let filterVideo: 512;
    let window: any;
    let pendingPromises: any[];
    function init(window: any): void;
    function reset(): void;
    function cleanup(): void;
    function internalFileData(obj: any): {
        nsIFile: any;
        domFile: any;
        domDirectory: any;
    };
    function useAnyFile(): any;
    function useBlobFile(): void;
    function useDirectory(aPath: any): void;
    function setFiles(files: any): void;
    function getNsIFile(): any;
}
