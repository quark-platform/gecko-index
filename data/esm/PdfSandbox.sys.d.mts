export class PdfSandbox {
    constructor(window: any, data: any);
    window: any;
    sandbox: any;
    support: SandboxSupport;
    dispatchEvent(event: any): void;
    destroy(): void;
}
declare class SandboxSupport {
    constructor(win: any, sandbox: any);
    sandbox: any;
    exportValueToSandbox(val: any): any;
    importValueFromSandbox(val: any): any;
    createErrorForSandbox(errorMessage: any): any;
}
export {};
