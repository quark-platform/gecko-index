export namespace ASRouterNewTabHook {
    import getInstance_1 = AwaitSingleton.getInstance;
    export { getInstance_1 as getInstance };
    export function createInstance(params: any): Promise<void>;
    export function destroy(): void;
}
declare function getInstance(): Promise<any>;
export {};
