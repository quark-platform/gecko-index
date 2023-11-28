export const eventemitter: typeof EventEmitterModule;
declare class EventEmitterModule {
    constructor(messageHandler: any);
    destroy(): void;
    /**
     * Commands
     */
    emitTestEvent(): void;
    isSubscribed(): boolean;
    _applySessionData(params: any): void;
    #private;
}
export {};
