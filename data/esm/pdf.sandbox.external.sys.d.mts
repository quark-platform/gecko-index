export class SandboxSupportBase {
    constructor(win: any);
    win: any;
    timeoutIds: Map<any, any>;
    commFun: any;
    destroy(): void;
    exportValueToSandbox(val: any): void;
    importValueFromSandbox(val: any): void;
    createErrorForSandbox(errorMessage: any): void;
    callSandboxFunction(name: any, args: any): void;
    createSandboxExternals(): (name: any, args: any) => void;
}
