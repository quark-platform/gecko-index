export const TelemetryModules: Readonly<{
    _log: any;
    start(): void;
    /**
     * Called when the 'telemetry_modules_ping' timer fires.
     */
    notify(): void;
}>;
