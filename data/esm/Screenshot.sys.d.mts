export namespace Screenshot {
    let _extensionPath: any;
    let _path: any;
    let _imagePrefix: string;
    let _imageExtension: string;
    let _screenshotFunction: any;
    function init(path: any, extensionPath: any, imagePrefix?: string): void;
    function _buildImagePath(baseName: any): string;
    function captureExternal(filename: any): Promise<string>;
    function _screenshotWindows(filename: any): Promise<any>;
    function _screenshotOSX(filename: any): Promise<void>;
    function _screenshotLinux(filename: any): Promise<any>;
    function _processObserver(resolve: any, reject: any): {
        observe(subject: any, topic: any, data: any): void;
    };
}
