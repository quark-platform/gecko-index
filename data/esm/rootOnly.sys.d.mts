export const rootOnly: typeof RootOnlyModule;
declare class RootOnlyModule {
    constructor(messageHandler: any);
    destroy(): void;
    /**
     * Commands
     */
    getSessionDataReceived(): any[];
    testCommand(params?: {}): {};
    _applySessionData(params: any): void;
    #private;
}
export {};
