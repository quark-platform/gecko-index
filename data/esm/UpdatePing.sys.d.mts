export namespace UpdatePing {
    let _enabled: boolean;
    function earlyInit(): void;
    /**
     * Get the information about the update we're going to apply/was just applied
     * from the update manager.
     *
     * @return {nsIUpdate} The information about the update, if available, or null.
     */
    function _getActiveUpdate(): nsIUpdate;
    /**
     * Generate an "update" ping with reason "success" and dispatch it
     * to the Telemetry system.
     *
     * @param {String} aPreviousVersion The browser version we updated from.
     * @param {String} aPreviousBuildId The browser build id we updated from.
     */
    function handleUpdateSuccess(aPreviousVersion: string, aPreviousBuildId: string): void;
    /**
     * Generate an "update" ping with reason "ready" and dispatch it
     * to the Telemetry system.
     *
     * @param {String} aUpdateState The state of the downloaded patch. See
     *        nsIUpdateService.idl for a list of possible values.
     */
    function _handleUpdateReady(aUpdateState: string): void;
    /**
     * The notifications handler.
     */
    function observe(aSubject: any, aTopic: any, aData: any): void;
    function shutdown(): void;
}
