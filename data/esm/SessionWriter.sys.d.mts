export namespace SessionWriter {
    function init(origin: any, useOldExtension: any, paths: any, prefs?: {}): {
        result: boolean;
    };
    /**
     * Write the contents of the session file.
     * @param state - May get changed on shutdown.
     */
    function write(state: any, options?: {}): Promise<{
        result: {
            upgradeBackup: boolean;
        };
        telemetry: {
            FX_SESSION_RESTORE_WRITE_FILE_MS: number;
            FX_SESSION_RESTORE_FILE_SIZE_BYTES: any;
        };
    }>;
    function wipe(): Promise<{
        result: boolean;
    }>;
}
