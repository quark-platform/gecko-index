export const commandwindowglobalonly: typeof CommandWindowGlobalOnlyModule;
declare class CommandWindowGlobalOnlyModule {
    destroy(): void;
    /**
     * Commands
     */
    testOnlyInWindowGlobal(): string;
    testBroadcast(): string;
    testBroadcastWithParameter(params: any): string;
    testError(): void;
    testMissingIntermediaryMethod(params: any, destination: any): any;
}
export {};
