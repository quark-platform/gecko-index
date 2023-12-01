export const browsingContext: typeof BrowsingContextModule;
declare class BrowsingContextModule {
    destroy(): void;
    interceptEvent(name: any, payload: any): any;
}
export {};
