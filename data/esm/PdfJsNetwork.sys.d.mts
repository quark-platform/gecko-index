export class NetworkManager {
    constructor(url: any, args?: {});
    url: any;
    isHttp: boolean;
    httpHeaders: any;
    withCredentials: any;
    getXhr: any;
    currXhrId: number;
    pendingRequests: any;
    requestRange(begin: any, end: any, listeners: any): number;
    request(args: any): number;
    onProgress(xhrId: any, evt: any): void;
    onStateChange(xhrId: any, evt: any): void;
    abortAllRequests(): void;
    abortRequest(xhrId: any): void;
}
