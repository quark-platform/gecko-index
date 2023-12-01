/// <reference types="gecko-types" />
export class GeckoViewPrintDelegateParent extends GeckoViewActorParent {
    _browserStaticClone: any;
    set browserStaticClone(staticClone: any);
    get browserStaticClone(): any;
    clearStaticClone(): void;
    telemetryDotPrintRequested(): void;
    telemetryDotPrintPdfCompleted(status: any): void;
    printRequest(): void;
}
import { GeckoViewActorParent } from "resource://gre/modules/GeckoViewActorParent.sys.mjs";
