export class Target {
    constructor(session: any);
    _onTargetCreated(eventName: any, target: any): void;
    _onTargetDestroyed(eventName: any, target: any): void;
    getBrowserContexts(): {
        browserContextIds: any;
    };
    createBrowserContext(): {
        browserContextId: any;
    };
    disposeBrowserContext(options?: {}): void;
    getTargets(options?: {}): {
        targetInfos: {
            targetId: any;
            type: any;
            title: any;
            url: any;
            attached: boolean;
            browserContextId: any;
        }[];
    };
    setDiscoverTargets(options?: {}): void;
    createTarget(options?: {}): Promise<{
        targetId: any;
    }>;
    closeTarget(options?: {}): Promise<void>;
    activateTarget(options?: {}): Promise<void>;
    attachToTarget(options?: {}): {
        sessionId: any;
    };
    setAutoAttach(): void;
    sendMessageToTarget(options?: {}): void;
    /**
     * Internal methods: the following methods are not part of CDP;
     * note the _ prefix.
     */
    _emitAttachedToTarget(target: any, tabSession: any): void;
    _getTargetInfo(target: any): {
        targetId: any;
        type: any;
        title: any;
        url: any;
        attached: boolean;
        browserContextId: any;
    };
    _filterIncludesTarget(target: any, filter: any): boolean;
    _validateTargetFilter(filter: any): void;
    #private;
}
