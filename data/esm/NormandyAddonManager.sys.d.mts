export namespace NormandyAddonManager {
    function downloadAndInstall({ createError, extensionDetails, applyNormandyChanges, undoNormandyChanges, onInstallStarted, reportError, }: {
        createError: any;
        extensionDetails: any;
        applyNormandyChanges: any;
        undoNormandyChanges: any;
        onInstallStarted: any;
        reportError: any;
    }): Promise<any[]>;
}
