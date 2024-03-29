export class NetErrorChild {
    actorCreated(): void;
    getFailedCertChain(docShell: any): any;
    handleEvent(aEvent: any): void;
    RPMGetInnerMostURI(uriString: any): string;
    RPMGetAppBuildID(): string;
    RPMAddToHistogram(histID: any, bin: any): void;
    RPMRecordTelemetryEvent(category: any, event: any, object: any, value: any, extra: any): void;
    RPMCheckAlternateHostAvailable(): void;
    RPMGetHttpResponseHeader(responseHeader: any): any;
    RPMIsTRROnlyFailure(): boolean;
    RPMIsFirefox(): any;
    _getTRRSkipReason(): any;
    RPMIsNativeFallbackFailure(): boolean;
    RPMGetTRRSkipReason(): string;
    RPMGetTRRDomain(): string;
    RPMIsSiteSpecificTRRError(): boolean;
    RPMSetTRRDisabledLoadFlags(): void;
}
