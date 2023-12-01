export const script: typeof ScriptModule;
declare class ScriptModule {
    destroy(): void;
    interceptEvent(name: any, payload: any): any;
}
export {};
