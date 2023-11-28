export const windowglobaltoroot: typeof WindowGlobalToRootModule;
declare class WindowGlobalToRootModule {
    constructor(messageHandler: any);
    destroy(): void;
    /**
     * Commands
     */
    testHandleCommandToRoot(params: any, destination: any): any;
    testSendRootCommand(params: any, destination: any): any;
    #private;
}
export {};
