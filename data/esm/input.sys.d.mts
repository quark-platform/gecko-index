export const input: typeof InputModule;
declare class InputModule {
    constructor(messageHandler: any);
    destroy(): void;
    performActions(options: any): Promise<void>;
    releaseActions(): Promise<void>;
    #private;
}
export {};
