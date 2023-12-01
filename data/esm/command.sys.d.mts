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
