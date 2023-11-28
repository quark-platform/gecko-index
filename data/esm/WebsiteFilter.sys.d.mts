export namespace WebsiteFilter {
    function init(blocklist: any, exceptionlist: any): void;
    function shouldLoad(contentLocation: any, loadInfo: any, mimeTypeGuess: any): any;
    function shouldProcess(contentLocation: any, loadInfo: any, mimeTypeGuess: any): any;
    function observe(subject: any, topic: any, data: any): void;
    let classDescription: string;
    let contractID: string;
    let classID: any;
    let QueryInterface: any;
    function createInstance(iid: any): any;
    function isAllowed(url: any): boolean;
}
