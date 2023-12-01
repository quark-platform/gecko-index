export function EnterprisePoliciesManager(): void;
export class EnterprisePoliciesManager {
    QueryInterface: MozQueryInterface;
    _initialize(): void;
    set status(val: any);
    get status(): any;
    _parsedPolicies: {};
    _reportEnterpriseTelemetry(policies?: {}): void;
    _chooseProvider(): JSONPoliciesProvider | WindowsGPOPoliciesProvider | macOSPoliciesProvider | CombinedProvider;
    _activatePolicies(unparsedPolicies: any): void;
    _callbacks: {
        onBeforeAddons: undefined[];
        onProfileAfterChange: undefined[];
        onBeforeUIStartup: undefined[];
        onAllWindowsRestored: undefined[];
    };
    _schedulePolicyCallback(timing: any, callback: any): void;
    _runPoliciesCallbacks(timing: any): void;
    _restart(): Promise<void>;
    _status: any;
    observe: (subject: any, topic: any, data: any) => void;
    disallowFeature(feature: any, neededOnContentProcess?: boolean): void;
    isAllowed: (feature: any) => boolean;
    getActivePolicies(): {};
    setSupportMenu(supportMenu: any): void;
    getSupportMenu(): any;
    setExtensionPolicies(extensionPolicies: any): void;
    getExtensionPolicy(extensionID: any): any;
    setExtensionSettings(extensionSettings: any): void;
    getExtensionSettings(extensionID: any): any;
    mayInstallAddon(addon: any): any;
    allowedInstallSource(uri: any): any;
    isExemptExecutableExtension(url: any, extension: any): boolean;
}
declare class JSONPoliciesProvider {
    _policies: any;
    get hasPolicies(): boolean;
    get policies(): any;
    get failed(): boolean;
    _getConfigurationFile(): void | nsISupportsType;
    _readData(): void;
    _failed: boolean;
}
declare class WindowsGPOPoliciesProvider {
    _policies: any;
    get hasPolicies(): boolean;
    get policies(): any;
    get failed(): any;
    _readData(wrk: any, root: any): void;
}
declare class macOSPoliciesProvider {
    _policies: any;
    get hasPolicies(): number;
    get policies(): any;
    get failed(): any;
}
declare class CombinedProvider {
    constructor(primaryProvider: any, secondaryProvider: any);
    _policies: any;
    get hasPolicies(): boolean;
    get policies(): any;
    get failed(): boolean;
}
export {};
