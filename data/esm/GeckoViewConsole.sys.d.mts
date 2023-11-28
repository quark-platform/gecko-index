export namespace GeckoViewConsole {
    let _isEnabled: boolean;
    let enabled: boolean;
    function observe(aSubject: any, aTopic: any, aData: any): void;
    function _handleConsoleMessage(aMessage: any): void;
    function getResultType(aResult: any): string;
    function formatResult(aResult: any): string;
    function abbreviateSourceURL(aSourceURL: any): any;
}
