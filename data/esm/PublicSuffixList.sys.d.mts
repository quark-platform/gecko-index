export namespace PublicSuffixList {
    let CLIENT: any;
    function init(): void;
    /**
     * This method returns the path to the file based on the file uri received
     * Example:
     * On windows "file://C:/Users/AppData/main/public-suffix-list/dafsa.bin"
     * will be converted to "C:\\Users\\main\\public-suffix-list\\dafsa.bin
     *
     * On macOS/linux "file:///home/main/public-suffix-list/dafsa.bin"
     * will be converted to "/home/main/public-suffix-list/dafsa.bin"
     */
    function getFilePath(fileURI: any): any;
    function notifyUpdate(fileURI: any): void;
    function onUpdate({ data: { created, updated, deleted } }: {
        data: {
            created: any;
            updated: any;
            deleted: any;
        };
    }): Promise<void>;
}
