export namespace WebRequest {
    export function setDNRHandlingEnabled(dnrActive: any): void;
    export function getTabIdForChannelWrapper(channel: any): any;
    export { onBeforeRequest };
    export { onBeforeSendHeaders };
    export { onSendHeaders };
    export { onHeadersReceived };
    export { onAuthRequired };
    export { onBeforeRedirect };
    export { onResponseStarted };
    export { onCompleted };
    export { onErrorOccurred };
    export function getSecurityInfo(details: any): any;
}
declare var onBeforeRequest: HttpEvent;
declare var onBeforeSendHeaders: HttpEvent;
declare var onSendHeaders: HttpEvent;
declare var onHeadersReceived: HttpEvent;
declare var onAuthRequired: HttpEvent;
declare var onBeforeRedirect: HttpEvent;
declare var onResponseStarted: HttpEvent;
declare var onCompleted: HttpEvent;
declare var onErrorOccurred: HttpEvent;
declare function HttpEvent(internalEvent: any, options: any): void;
declare class HttpEvent {
    constructor(internalEvent: any, options: any);
    internalEvent: any;
    options: any;
    addListener(callback: any, filter?: any, options?: any, optionsObject?: any): void;
    removeListener(callback: any): void;
}
export {};
