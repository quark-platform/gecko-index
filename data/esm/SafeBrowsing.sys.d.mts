export namespace SafeBrowsing {
    function init(): void;
    function registerTableWithURLs(listname: any): void;
    function registerTables(): void;
    function unregisterTables(obsoleteLists: any): void;
    let initialized: boolean;
    let features: any[];
    let updateURL: any;
    let gethashURL: any;
    let reportURL: any;
    function getReportURL(kind: any, info: any): string;
    function observe(aSubject: any, aTopic: any, aData: any): void;
    function readPrefs(): void;
    function updateProviderURLs(): void;
    function controlUpdateChecking(): void;
}
