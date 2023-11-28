export namespace CookieXPCShellUtils {
    function init(scope: any): void;
    function createServer(args: any): any;
    function loadContentPage(uri: any, options?: {}): Promise<any>;
    function getCookieStringFromDocument(uri: any, options?: {}): Promise<any>;
    function setCookieToDocument(uri: any, set: any, options?: {}): Promise<void>;
}
