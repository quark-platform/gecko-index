export const command: typeof CommandModule;
declare class CommandModule {
    destroy(): void;
    /**
     * Commands
     */
    testInterceptModule(): string;
    testInterceptAndForwardModule(params: any, destination: any): Promise<string>;
}
export {};
SessionData(params: any): void;
    testWindowGlobalModule(): string;
    testSetValue(params: any): void;
    _testValue: any;
    testGetValue(): any;
    testForwardToWindowGlobal(): string;
    testIsCreatedByMessageHandlerConstructor(): boolean;
    _isCreatedByMessageHandlerConstructor(): boolean;
}
export {};
