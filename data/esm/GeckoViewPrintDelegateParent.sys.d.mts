export class GeckoViewPrintDelegateParent {
    _browserStaticClone: any;
    set browserStaticClone(staticClone: any);
    get browserStaticClone(): any;
    clearStaticClone(): void;
    telemetryDotPrintRequested(): void;
    telemetryDotPrintPdfCompleted(status: any): void;
    printRequest(): void;
}
