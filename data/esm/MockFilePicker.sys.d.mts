export namespace MockFilePicker {
    let returnOK: any;
    let returnCancel: any;
    let returnReplace: any;
    let filterAll: any;
    let filterHTML: any;
    let filterText: any;
    let filterImages: any;
    let filterXML: any;
    let filterXUL: any;
    let filterApps: any;
    let filterAllowURLs: any;
    let filterAudio: any;
    let filterVideo: any;
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
