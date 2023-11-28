export class GeckoViewProcessHangMonitor {
    constructor(aModuleInfo: any);
    /**
     * Collection of hang reports that haven't expired or been dismissed
     * by the user. These are nsIHangReports.
     */
    _activeReports: Set<any>;
    /**
     * Collection of hang reports that have been suppressed for a short
     * period of time. Keys are nsIHangReports. Values are timeouts for
     * when the wait time expires.
     */
    _pausedReports: Map<any, any>;
    /**
     * Simple index used for report identification
     */
    _nextIndex: number;
    /**
     * Map of report IDs to report objects.
     * Keys are numbers. Values are nsIHangReports.
     */
    _reportIndex: Map<any, any>;
    /**
     * Map of report objects to report IDs.
     * Keys are nsIHangReports. Values are numbers.
     */
    _reportLookupIndex: Map<any, any>;
    onInit(): void;
    onDestroy(): void;
    onEnable(): void;
    onDisable(): void;
    onEvent(aEvent: any, aData: any, aCallback: any): void;
    observe(aSubject: any, aTopic: any, aData: any): void;
    /**
     * This timeout is the wait period applied after a user selects "Wait" in
     * an existing notification.
     */
    get WAIT_EXPIRATION_TIME(): any;
    /**
     * Terminate whatever is causing this report, be it an add-on or page script.
     * This is done without updating any report notifications.
     */
    stopHang(report: any): void;
    /**
     *
     */
    pauseHang(report: any): void;
    /**
     * construct an information bundle
     */
    notifyReport(report: any): void;
    /**
     * Handle a potentially new hang report.
     */
    reportHang(report: any): void;
    clearHang(report: any): void;
}
