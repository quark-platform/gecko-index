export namespace DoHController {
    let _heuristicsAreEnabled: boolean;
    function init(): Promise<void>;
    function _uninit(): Promise<void>;
    let resetPromise: Promise<void>;
    function reset(): Promise<void>;
    function maybeEnableHeuristics(): Promise<void>;
    let _runsWhileThrottling: number;
    let _wasThrottleExtended: boolean;
    function _throttleHeuristics(): boolean;
    function _handleThrottleTimeout(): void;
    function runHeuristicsThrottled(evaluateReason: any): void;
    function runHeuristics(evaluateReason: any): Promise<void>;
    function setState(state: any): Promise<void>;
    function disableHeuristics(state: any): Promise<void>;
    function rollback(): Promise<void>;
    function runTRRSelection(): Promise<void>;
    function runTRRSelectionDryRun(): Promise<void>;
    function observe(subject: any, topic: any, data: any): void;
    function setHeuristicResult(skipReason: any): void;
    function onPrefChanged(pref: any): Promise<void>;
    let _debounceTimer: any;
    function _cancelDebounce(): void;
    let _lastDebounceTimestamp: number;
    function onConnectionChanged(): void;
    function onConnectionChangedDebounced(): void;
    function onConnectivityAvailable(): void;
}
