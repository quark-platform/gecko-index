export function InstallTrigger(): void;
export class InstallTrigger {
    init(window: any): void;
    _window: any;
    _principal: any;
    _url: any;
    _mediator: RemoteMediator;
    enabled(): any;
    updateEnabled(): any;
    install(installs: any, callback: any): any;
    startSoftwareUpdate(url: any, flags: any): any;
    installChrome(type: any, url: any, skin: any): any;
    _resolveURL(url: any): any;
    _checkLoadURIFromScript(uri: any): boolean;
    classID: any;
    contractID: string;
    QueryInterface: any;
}
declare function RemoteMediator(window: any): void;
declare class RemoteMediator {
    constructor(window: any);
    _windowID: any;
    mm: any;
    _lastCallbackID: number;
    _callbacks: Map<any, any>;
    receiveMessage(message: any): void;
    enabled(url: any): any;
    install(install: any, principal: any, callback: any, window: any): any;
    _addCallback(callback: any): string | -1;
    QueryInterface: any;
}
export {};
