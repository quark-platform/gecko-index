export const eventonprefchange: typeof EventOnPrefChangeModule;
declare class EventOnPrefChangeModule {
    constructor(messageHandler: any);
    destroy(): void;
    /**
     * Commands
     */
    ping(): number;
    #private;
}
export {};
