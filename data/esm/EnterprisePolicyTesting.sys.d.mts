export namespace EnterprisePolicyTesting {
    function setupPolicyEngineWithJson(json: any, customSchema: any): Promise<any>;
    function checkPolicyPref(prefName: any, expectedValue: any, expectedLockedness: any): void;
    function resetRunOnceState(): void;
}
export namespace PoliciesPrefTracker {
    let _originalFunc: any;
    let _originalValues: Map<any, any>;
    function start(): void;
    function stop(): void;
    function hoistedSetDefaultPref(prefName: any, prefValue: any, locked?: boolean): void;
    function restoreDefaultValues(): void;
}
