export const sessiondataupdate: typeof SessionDataUpdateModule;
declare class SessionDataUpdateModule {
    constructor(messageHandler: any);
    destroy(): void;
    /**
     * Commands
     */
    _applySessionData(params: any): void;
    getSessionDataUpdates(): any[];
    #private;
}
export {};
