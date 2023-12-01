export namespace WebsiteFilter {
    function init(blocklist: any, exceptionlist: any): void;
    function shouldLoad(contentLocation: any, loadInfo: any, mimeTypeGuess: any): any;
    function shouldProcess(contentLocation: any, loadInfo: any, mimeTypeGuess: any): 1;
    function observe(subject: any, topic: any, data: any): void;
    let classDescription: string;
    let contractID: string;
    let classID: unknown;
    let QueryInterface: MozQueryInterface;
    function createInstance(iid: any): any;
    function isAllowed(url: any): boolean;
}
