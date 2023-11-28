export const NetworkManager: {
    new (url: any, args: any): {
        url: any;
        isHttp: boolean;
        httpHeaders: any;
        withCredentials: any;
        getXhr: any;
        currXhrId: number;
        pendingRequests: any;
        requestRange(begin: any, end: any, listeners: any): number;
        requestFull(listeners: any): number;
        request(args: any): number;
        onProgress(xhrId: any, evt: any): void;
        onStateChange(xhrId: any, evt: any): void;
        hasPendingRequests(): boolean;
        abortAllRequests(): void;
        abortRequest(xhrId: any): void;
    };
};
