export class GeckoViewProgress {
    onEnable(): void;
    _initialAboutBlank: boolean;
    _progressTracker: ProgressTracker;
    _securityTracker: SecurityTracker;
    _stateTracker: StateTracker;
    progressFilter: any;
    onDisable(): void;
    receiveMessage(aMsg: any): void;
    onEvent(aEvent: any, aData: any, aCallback: any): void;
    onStateChange(...args: any[]): void;
    onSecurityChange(...args: any[]): void;
    onLocationChange(...args: any[]): void;
    _fireInitialLoad(): void;
    observe(aSubject: any, aTopic: any, aData: any): void;
}
declare class ProgressTracker extends Tracker {
    pageLoadProbe: any;
    pageReloadProbe: any;
    pageLoadProgressProbe: any;
    _eventReceived: Set<any>;
    start(aUri: any): void;
    changeLocation(aUri: any): void;
    stop(aIsSuccess: any): void;
    onStateChange(aWebProgress: any, aRequest: any, aStateFlags: any, aStatus: any): void;
    onLocationChange(aWebProgress: any, aRequest: any, aLocationURI: any, aFlags: any): void;
    handleEvent(aEvent: any): void;
    clear(): void;
    _data: {
        prev: number;
        uri: any;
        locationChange: boolean;
        pageStart: boolean;
        pageStop: boolean;
        firstPaint: boolean;
        pageShow: boolean;
        parsed: boolean;
    };
    _debugData(): {
        prev: number;
        uri: any;
        locationChange: boolean;
        pageStart: boolean;
        pageStop: boolean;
        firstPaint: boolean;
        pageShow: boolean;
        parsed: boolean;
    };
    updateProgress(): void;
}
declare class SecurityTracker extends Tracker {
    _hostChanged: boolean;
    onLocationChange(aWebProgress: any, aRequest: any, aLocationURI: any, aFlags: any): void;
    onSecurityChange(aWebProgress: any, aRequest: any, aState: any): void;
    _state: any;
}
declare class StateTracker extends Tracker {
    _inProgress: boolean;
    _uri: any;
    start(aUri: any): void;
    stop(aIsSuccess: any): void;
    onStateChange(aWebProgress: any, aRequest: any, aStateFlags: any, aStatus: any): void;
}
declare class Tracker {
    constructor(aModule: any);
    _module: any;
    get eventDispatcher(): any;
    get browser(): any;
    QueryInterface: any;
}
export {};
