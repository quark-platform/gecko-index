export namespace Policy {
    function now(): Date;
    let monotonicNow: any;
    function generateSessionUUID(): any;
    function generateSubsessionUUID(): any;
}
export const TelemetrySession: Readonly<{
    /**
     * Send a ping to a test server. Used only for testing.
     */
    testPing(): Promise<any>;
    /**
     * Returns the current telemetry payload.
     * @param reason Optional, the reason to trigger the payload.
     * @param clearSubsession Optional, whether to clear subsession specific data.
     * @returns Object
     */
    getPayload(reason: any, clearSubsession?: boolean): {
        ver: number;
        simpleMeasurements: any;
    };
    /**
     * Save the session state to a pending file.
     * Used only for testing purposes.
     */
    testSavePendingPing(): any;
    /**
     * Collect and store information about startup.
     */
    gatherStartup(): void;
    /**
     * Inform the ping which AddOns are installed.
     *
     * @param aAddOns - The AddOns.
     */
    setAddOns(aAddOns: any): void;
    /**
     * Descriptive metadata
     *
     * @param  reason
     *         The reason for the telemetry ping, this will be included in the
     *         returned metadata,
     * @return The metadata as a JS object
     */
    getMetadata(reason: any): {
        reason: any;
        revision: any;
        timezoneOffset: number;
        previousBuildId: any;
        sessionId: any;
        subsessionId: any;
        previousSessionId: any;
        previousSubsessionId: any;
        subsessionCounter: number;
        profileSubsessionCounter: number;
        sessionStartDate: any;
        subsessionStartDate: any;
        sessionLength: number;
        subsessionLength: number;
    };
    /**
     * Reset the subsession and profile subsession counter.
     * This should only be called when the profile should be considered completely new,
     * e.g. after opting out of sending Telemetry
     */
    resetSubsessionCounter(): void;
    /**
     * Used only for testing purposes.
     */
    testReset(): void;
    /**
     * Triggers shutdown of the module.
     */
    shutdown(): any;
    /**
     * Used only for testing purposes.
     */
    testUninstall(): void;
    /**
     * Lightweight init function, called as soon as Firefox starts.
     */
    earlyInit(aTesting?: boolean): void;
    /**
     * Does the "heavy" Telemetry initialization later on, so we
     * don't impact startup performance.
     * @return {Promise} Resolved when the initialization completes.
     */
    delayedInit(): Promise<any>;
    /**
     * Send a notification.
     */
    observe(aSubject: any, aTopic: any, aData: any): any;
    /**
     * Marks the "new-profile" ping as sent in the telemetry state file.
     * @return {Promise} A promise resolved when the new telemetry state is saved to disk.
     */
    markNewProfilePingSent(): Promise<any>;
    /**
     * Returns if the "new-profile" ping has ever been sent for this profile.
     * Please note that the returned value is trustworthy only after the delayed setup.
     *
     * @return {Boolean} True if the new profile ping was sent on this profile,
     *         false otherwise.
     */
    readonly newProfilePingSent: boolean;
    saveAbortedSessionPing(aProvidedPayload: any): any;
    sendDailyPing(): Promise<any>;
    testOnEnvironmentChange(...args: any[]): void;
}>;
