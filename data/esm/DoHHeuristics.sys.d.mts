export function parentalControls(): Promise<"disable_doh" | "enable_doh">;
export namespace Heuristics {
    let ENABLE_DOH: string;
    let DISABLE_DOH: string;
    function run(): Promise<{
        google: any;
        youtube: any;
        zscalerCanary: "disable_doh" | "enable_doh";
        canary: "disable_doh" | "enable_doh";
        browserParent: string;
        thirdPartyRoots: string;
        policy: string;
        vpn: string;
        proxy: string;
        nrpt: string;
        steeredProvider: string;
    }>;
    function checkEnterprisePolicy(): Promise<"no_policy_set" | "policy_without_doh" | "disable_doh" | "enable_doh">;
    function _setMockLinkService(mockLinkService: any): Promise<void>;
    function heuristicNameToSkipReason(heuristicName: any): any;
    namespace Telemetry {
        let incomplete: number;
        let pass: number;
        let optOut: number;
        let manuallyDisabled: number;
        let manuallyEnabled: number;
        let enterpriseDisabled: number;
        let enterprisePresent: number;
        let enterpriseEnabled: number;
        let vpn: number;
        let proxy: number;
        let nrpt: number;
        let browserParent: number;
        let modifiedRoots: number;
        let thirdPartyRoots: number;
        let google: number;
        let youtube: number;
        let zscalerCanary: number;
        let canary: number;
        let ignored: number;
        function heuristicNames(): string[];
        function fromResults(results: any): any;
    }
}
