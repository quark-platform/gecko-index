export class ASRouterTabs {
    constructor({ asRouterNewTabHook }: {
        asRouterNewTabHook: any;
    });
    actors: Set<any>;
    destroy: () => void;
    loadingMessageHandler: any;
    get size(): number;
    messageAll(message: any, data: any): Promise<any[]>;
    registerActor(actor: any): void;
    unregisterActor(actor: any): void;
}
export class ASRouterParent {
    static tabs: any;
    static nextTabId: number;
    constructor({ tabsFactory }?: {
        tabsFactory: () => ASRouterTabs;
    });
    tabsFactory: () => ASRouterTabs;
    actorCreated(): void;
    tabId: number;
    didDestroy(): void;
    getTab(): {
        id: number;
        browser: any;
    };
    receiveMessage({ name, data }: {
        name: any;
        data: any;
    }): any;
}
