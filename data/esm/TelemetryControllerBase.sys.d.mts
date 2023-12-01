export const TelemetryControllerBase: Readonly<{
    IS_UNIFIED_TELEMETRY: boolean;
    Preferences: Readonly<{
        OverridePreRelease: "toolkit.telemetry.testing.overridePreRelease";
        Unified: "toolkit.telemetry.unified";
    }>;
    /**
     * Returns the state of the Telemetry enabled preference, making sure
     * it correctly evaluates to a boolean type.
     */
    readonly isTelemetryEnabled: boolean;
    readonly log: any;
    configureLogging(): void;
    /**
     * Set the Telemetry core recording flag for Unified Telemetry.
     */
    setTelemetryRecordingFlags(): void;
    /**
     * Perform telemetry initialization for either chrome or content process.
     * @return {Boolean} True if Telemetry is allowed to record at least base (FHR) data,
     *                   false otherwise.
     */
    enableTelemetryRecording: () => boolean;
}>;
