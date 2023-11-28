export class DNSLookup {
    constructor(domain: any, trrServer: any, callback: any);
    _domain: any;
    trrServer: any;
    callback: any;
    retryCount: number;
    doLookup(): void;
    usedDomain: any;
    onLookupComplete(request: any, record: any, status: any): void;
    QueryInterface: any;
}
export class LookupAggregator {
    constructor(onCompleteCallback: any, trrList: any);
    onCompleteCallback: any;
    trrList: any;
    aborted: boolean;
    networkUnstable: boolean;
    captivePortal: boolean;
    domains: any[];
    totalLookups: number;
    completedLookups: number;
    results: any[];
    run(): void;
    _ran: boolean;
    abort(): void;
    markUnstableNetwork(): void;
    markCaptivePortal(): void;
    recordResults(): void;
}
export class TRRRacer {
    constructor(onCompleteCallback: any, trrList: any);
    _aggregator: LookupAggregator;
    _retryCount: number;
    _complete: boolean;
    _onCompleteCallback: any;
    _trrList: any;
    run(): void;
    onComplete(): void;
    getFastestTRR(returnRandomDefault?: boolean): any;
    _getFastestTRRFromResults(results: any, returnRandomDefault?: boolean): any;
    _runNewAggregator(): void;
    observe(subject: any, topic: any, data: any): void;
}
