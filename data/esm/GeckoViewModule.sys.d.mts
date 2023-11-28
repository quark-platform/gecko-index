export class GeckoViewModule {
    static initLogging(aModuleName: any): any;
    constructor(aModuleInfo: any);
    _info: any;
    _isContentLoaded: boolean;
    _eventProxy: EventProxy;
    get name(): any;
    get enabled(): any;
    get window(): any;
    getActor(aActorName: any): any;
    get browser(): any;
    get messageManager(): any;
    get eventDispatcher(): any;
    get settings(): any;
    get moduleManager(): any;
    onInitBrowser(): void;
    onDestroyBrowser(): void;
    onInit(): void;
    onDestroy(): void;
    onSettingsUpdate(): void;
    onEnable(): void;
    onDisable(): void;
    onLoadContentModule(): void;
    onContentModuleLoaded(): void;
    registerListener(aEventList: any): void;
    unregisterListener(aEventList: any): void;
}
declare class EventProxy {
    constructor(aListener: any, aEventDispatcher: any);
    listener: any;
    eventDispatcher: any;
    _eventQueue: any[];
    _registeredEvents: any[];
    _enableQueuing: boolean;
    registerListener(aEventList: any): void;
    unregisterListener(aEventList: any): void;
    onEvent(aEvent: any, aData: any, aCallback: any, ...args: any[]): void;
    enableQueuing(aEnable: any): void;
    _dispatch(aEvent: any, aData: any, aCallback: any, ...args: any[]): void;
    dispatchQueuedEvents(): void;
}
export {};
