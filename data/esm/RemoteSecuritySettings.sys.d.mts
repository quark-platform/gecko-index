export namespace RemoteSecuritySettings {
    let _initialized: boolean;
    let OneCRLBlocklistClient: any;
    let IntermediatePreloadsClient: any;
    let CRLiteFiltersClient: any;
    /**
     * Initialize the clients (cheap instantiation) and setup their sync event.
     * This static method is called from BrowserGlue.sys.mjs soon after startup.
     *
     * @returns {object} instantiated clients for security remote settings.
     */
    function init(): any;
}
