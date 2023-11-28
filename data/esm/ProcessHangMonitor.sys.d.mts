export namespace ProcessHangMonitor {
    const WAIT_EXPIRATION_TIME: any;
    let _shuttingDown: boolean;
    let _activeReports: Map<any, any>;
    let _pausedReports: Map<any, any>;
    /**
     * Initialize hang reporting. Called once in the parent process.
     */
    function init(): void;
    /**
     * Terminate JavaScript associated with the hang being reported for
     * the selected browser in |win|.
     */
    function terminateScript(win: any): void;
    /**
     * Start devtools debugger for JavaScript associated with the hang
     * being reported for the selected browser in |win|.
     */
    function debugScript(win: any): void;
    /**
     * Dismiss the browser notification and invoke an appropriate action based on
     * the hang type.
     */
    function stopIt(win: any): void;
    /**
     * Terminate the script causing this report. This is done without
     * updating any report notifications.
     */
    function stopHang(report: any, endReason: any, backupInfo: any): void;
    /**
     * Dismiss the notification, clear the report from the active list and set up
     * a new timer to track a wait period during which we won't notify.
     */
    function waitLonger(win: any): void;
    /**
     * If there is a hang report associated with the selected browser in
     * |win|, invoke |func| on that report and stop notifying the user
     * about it.
     */
    function handleUserInput(win: any, func: any): any;
    function observe(subject: any, topic: any, data: any): void;
    /**
     * Called early on in the shutdown sequence. We take this opportunity to
     * take any pre-existing hang reports, and terminate them. We also put
     * ourselves in a state so that if any more hang reports show up while
     * we're shutting down, we terminate them immediately.
     */
    function onQuitApplicationGranted(): void;
    function onWindowClosed(win: any): void;
    function stopAllHangs(endReason: any): void;
    /**
     * Find a active hang report for the given <browser> element.
     */
    function findActiveReport(browser: any): any;
    /**
     * Find a paused hang report for the given <browser> element.
     */
    function findPausedReport(browser: any): any;
    /**
     * Tell telemetry about the report.
     */
    function _recordTelemetryForReport(report: any, endReason: any, backupInfo: any): void;
    /**
     * Remove an active hang report from the active list and cancel the timer
     * associated with it.
     */
    function removeActiveReport(report: any): void;
    /**
     * Remove a paused hang report from the paused list and cancel the timer
     * associated with it.
     */
    function removePausedReport(report: any): void;
    /**
     * Iterate over all XUL windows and ensure that the proper hang
     * reports are shown for each one. Also install event handlers in
     * each window to watch for events that would cause a different hang
     * report to be displayed.
     */
    function updateWindows(): void;
    /**
     * If there is a hang report for the current tab in |win|, display it.
     */
    function updateWindow(win: any): void;
    /**
     * Show the notification for a hang.
     */
    function showNotification(win: any, report: any): void;
    /**
     * Ensure that no hang notifications are visible in |win|.
     */
    function hideNotification(win: any): void;
    /**
     * Install event handlers on |win| to watch for events that would
     * cause a different hang report to be displayed.
     */
    function trackWindow(win: any): void;
    function untrackWindow(win: any): void;
    function handleEvent(event: any): void;
    /**
     * Handle a potentially new hang report. If it hasn't been seen
     * before, show a notification for it in all open XUL windows.
     */
    function reportHang(report: any): void;
    function clearHang(report: any): void;
}
