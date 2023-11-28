export const retry: typeof RetryModule;
declare class RetryModule {
    destroy(): void;
    /**
     * Commands
     */
    blockedOnNetDomain(params: any): Promise<any>;
    blockedOneTime(params: any): Promise<any>;
    blockedTenTimes(params: any): Promise<any>;
    blockedElevenTimes(params: any): Promise<any>;
    cleanup(): void;
}
export {};
