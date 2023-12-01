export namespace Policy {
    function now(): Date;
    function setShowInfobarTimeout(callback: any, delayMs: any): number;
    function clearShowInfobarTimeout(id: any): void;
    function fakeSessionRestoreNotification(): void;
}
export namespace TelemetryReportingPolicy {
    let DEFAULT_DATAREPORTING_POLICY_VERSION: number;
    /**
     * Setup the policy.
     */
    function setup(): void;
    /**
     * Shutdown and clear the policy.
     */
    function shutdown(): void;
    /**
     * Check if we are allowed to upload data. In order to submit data both these conditions
     * should be true:
     * - The data submission preference should be true.
     * - The datachoices infobar should have been displayed.
     *
     * @return {Boolean} True if we are allowed to upload data, false otherwise.
     */
    function canUpload(): boolean;
    /**
     * Check if this is the first time the browser ran.
     */
    function isFirstRun(): any;
    /**
     * Test only method, restarts the policy.
     */
    function reset(): void;
    /**
     * Test only method, used to check if user is notified of the policy in tests.
     */
    function testIsUserNotified(): Bool;
    /**
     * Test only method, used to simulate the infobar being shown in xpcshell tests.
     */
    function testInfobarShown(): void;
    /**
     * Test only method, used to trigger an update of the "first run" state.
     */
    function testUpdateFirstRun(): void;
}
