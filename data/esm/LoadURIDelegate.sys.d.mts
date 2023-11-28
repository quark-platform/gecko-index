export namespace LoadURIDelegate {
    function load(aWindow: any, aEventDispatcher: any, aUri: any, aWhere: any, aFlags: any, aTriggeringPrincipal: any): boolean;
    function handleLoadError(aWindow: any, aEventDispatcher: any, aUri: any, aError: any, aErrorModule: any): any;
    function isSafeBrowsingError(aError: any): boolean;
}
