export const CleanupManager: CleanupManagerClass;
declare class CleanupManagerClass {
    handlers: Set<any>;
    cleanupPromise: Promise<void>;
    addCleanupHandler(handler: any): void;
    removeCleanupHandler(handler: any): void;
    cleanup(): Promise<void>;
}
export {};
