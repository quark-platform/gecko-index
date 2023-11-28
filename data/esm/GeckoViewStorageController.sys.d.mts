export namespace GeckoViewStorageController {
    function onEvent(aEvent: any, aData: any, aCallback: any): void;
    function clearData(aFlags: any, aCallback: any): Promise<void>;
    function clearHostData(aHost: any, aFlags: any, aCallback: any): void;
    function clearBaseDomainData(aBaseDomain: any, aFlags: any, aCallback: any): void;
    function clearSessionContextData(aContextId: any): void;
}
