export const log: typeof LogModule;
declare class LogModule {
    destroy(): void;
    interceptEvent(name: any, payload: any): any;
}
export {};
