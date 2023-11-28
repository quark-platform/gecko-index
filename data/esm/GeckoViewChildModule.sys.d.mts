export class GeckoViewChildModule {
    static initLogging(aModuleName: any): any;
    static create(aGlobal: any, aModuleName: any): GeckoViewChildModule;
    constructor(aModuleName: any, aGlobal: any);
    moduleName: any;
    messageManager: any;
    enabled: boolean;
    eventDispatcher: any;
    onInit(): void;
    onEnable(): void;
    onDisable(): void;
}
