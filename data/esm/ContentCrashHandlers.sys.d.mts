export namespace TabCrashHandler {
    let _crashedTabCount: number;
    let childMap: Map<any, any>;
    let browserMap: BrowserWeakMap;
    let notificationsMap: Map<any, any>;
    let unseenCrashedChildIDs: any[];
    let pendingSubFrameCrashes: Map<any, any>;
    let pendingSubFrameCrashesIDs: any[];
    let crashedBrowserQueues: Map<any, any>;
    let restartRequiredBrowsers: WeakSet<object>;
    let testBuildIDMismatch: boolean;
    const prefs: any;
    function init(): void;
    function observe(aSubject: any, aTopic: any, aData: any): void;
    /**
     * This should be called once a content process has finished
     * shutting down abnormally. Any tabbrowser browsers that were
     * selected at the time of the crash will then be sent to
     * the crashed tab page.
     *
     * @param childID (int)
     *        The childID of the content process that just crashed.
     * @returns boolean
     *        True if one or more browsers were sent to the tab crashed
     *        page.
     */
    function flushCrashedBrowserQueue(childID: any): boolean;
    /**
     * Called by a tabbrowser when it notices that its selected browser
     * has crashed. This will queue the browser to show the tab crash
     * page once the content process has finished tearing down.
     *
     * @param browser (<xul:browser>)
     *        The selected browser that just crashed.
     * @param restartRequired (bool)
     *        Whether or not a browser restart is required to recover.
     */
    function onSelectedBrowserCrash(browser: any, restartRequired: any): void;
    /**
     * Called by a tabbrowser when it notices that a background browser
     * has crashed. This will flip its remoteness to non-remote, and attempt
     * to revive the crashed tab so that upon selection the tab either shows
     * an error page, or automatically restores.
     *
     * @param browser (<xul:browser>)
     *        The background browser that just crashed.
     * @param restartRequired (bool)
     *        Whether or not a browser restart is required to recover.
     */
    function onBackgroundBrowserCrash(browser: any, restartRequired: any): void;
    /**
     * Called when a subframe crashes. If the dump is available, shows a subframe
     * crashed notification, otherwise waits for one to be available.
     *
     * @param browser (<xul:browser>)
     *        The browser containing the frame that just crashed.
     * @param childId
     *        The id of the process that just crashed.
     */
    function onSubFrameCrash(browser: any, childID: any): Promise<void>;
    /**
     * Given a childID, retrieve the subframe crash info for it
     * from the pendingSubFrameCrashes map. The data is removed
     * from the map and returned.
     *
     * @param childID number
     *        childID of the content that crashed.
     * @returns subframe crash info added by previous call to onSubFrameCrash.
     */
    function getAndRemoveSubframeCrash(childID: any): any;
    /**
     * Called to indicate that a subframe within a browser has crashed. A notification
     * bar will be shown.
     *
     * @param browser (<xul:browser>)
     *        The browser containing the frame that just crashed.
     * @param childId
     *        The id of the process that just crashed.
     * @param dumpID
     *        Minidump id of the crash.
     */
    function showSubFrameNotification(browser: any, childID: any, dumpID: any): void;
    /**
     * This method is exposed for SessionStore to call if the user selects
     * a tab which will restore on demand. It's possible that the tab
     * is in this state because it recently crashed. If that's the case, then
     * it's also possible that the user has not seen the tab crash page for
     * that particular crash, in which case, we might show it to them instead
     * of restoring the tab.
     *
     * @param browser (<xul:browser>)
     *        A browser from a browser tab that the user has just selected
     *        to restore on demand.
     * @returns (boolean)
     *        True if TabCrashHandler will send the user to the tab crash
     *        page instead.
     */
    function willShowCrashedTab(browser: any): boolean;
    function sendToRestartRequiredPage(browser: any): void;
    /**
     * We show a special page to users when a normal browser tab has crashed.
     * This method should be called to send a browser to that page once the
     * process has completely closed.
     *
     * @param browser (<xul:browser>)
     *        The browser that has recently crashed.
     */
    function sendToTabCrashedPage(browser: any): void;
    /**
     * Submits a crash report from about:tabcrashed, if the crash
     * reporter is enabled and a crash report can be found.
     *
     * @param browser
     *        The <xul:browser> that the report was sent from.
     * @param message
     *        Message data with the following properties:
     *
     *        includeURL (bool):
     *          Whether to include the URL that the user was on
     *          in the crashed tab before the crash occurred.
     *        URL (String)
     *          The URL that the user was on in the crashed tab
     *          before the crash occurred.
     *        comments (String):
     *          Any additional comments from the user.
     *
     *        Note that it is expected that all properties are set,
     *        even if they are empty.
     */
    function maybeSendCrashReport(browser: any, message: any): void;
    function removeSubmitCheckboxesForSameCrash(childID: any): void;
    /**
     * Process a crashed tab loaded into a browser.
     *
     * @param browser
     *        The <xul:browser> containing the page that crashed.
     * @returns crash data
     *        Message data containing information about the crash.
     */
    function onAboutTabCrashedLoad(browser: any): {
        hasReport: boolean;
        sendReport: any;
        includeURL: any;
        requestAutoSubmit: boolean;
    } | {
        hasReport: boolean;
    };
    function onAboutTabCrashedUnload(browser: any): void;
    /**
     * For some <xul:browser>, return a crash report dump ID for that browser
     * if we have been informed of one. Otherwise, return null.
     *
     * @param browser (<xul:browser)
     *        The browser to try to get the dump ID for
     * @returns dumpID (String)
     */
    function getDumpID(browser: any): any;
    const queuedCrashedBrowsers: number;
}
export namespace UnsubmittedCrashHandler {
    const prefs_1: any;
    export { prefs_1 as prefs };
    export const enabled: any;
    export let showingNotification: boolean;
    export let suppressed: boolean;
    export let _checkTimeout: any;
    export function init(): void;
    export function uninit(): void;
    export function observe(subject: any, topic: any, data: any): void;
    export function scheduleCheckForUnsubmittedCrashReports(): void;
    /**
     * Scans the profile directory for unsubmitted crash reports
     * within the past PENDING_CRASH_REPORT_DAYS days. If it
     * finds any, it will, if necessary, attempt to open a notification
     * bar to prompt the user to submit them.
     *
     * @returns Promise
     *          Resolves with the <xul:notification> after it tries to
     *          show a notification on the most recent browser window.
     *          If a notification cannot be shown, will resolve with null.
     */
    export function checkForUnsubmittedCrashReports(): Promise<any>;
    /**
     * Returns true if the notification should be shown.
     * shouldShowPendingSubmissionsNotification makes this decision
     * by looking at whether or not the user has seen the notification
     * over several days without ever interacting with it. If this occurs
     * too many times, we suppress the notification for DAYS_TO_SUPPRESS
     * days.
     *
     * @returns bool
     */
    export function shouldShowPendingSubmissionsNotification(): boolean;
    /**
     * Given an array of unsubmitted crash report IDs, try to open
     * up a notification asking the user to submit them.
     *
     * @param reportIDs (Array<string>)
     *        The Array of report IDs to offer the user to send.
     * @returns The <xul:notification> if one is shown. null otherwise.
     */
    export function showPendingSubmissionsNotification(reportIDs: any): any;
    /**
     * Returns a string representation of a Date in the format
     * YYYYMMDD.
     *
     * @param someDate (Date, optional)
     *        The Date to convert to the string. If not provided,
     *        defaults to today's date.
     * @returns String
     */
    export function dateString(someDate?: Date): string;
    /**
     * Attempts to show a notification bar to the user in the most
     * recent browser window asking them to submit some crash report
     * IDs. If a notification cannot be shown (for example, there
     * is no browser window), this method exits silently.
     *
     * The notification will allow the user to submit their crash
     * reports. If the user dismissed the notification, the crash
     * reports will be marked to be ignored (though they can
     * still be manually submitted via about:crashes).
     *
     * @param JS Object
     *        An Object with the following properties:
     *
     *        notificationID (string)
     *          The ID for the notification to be opened.
     *
     *        reportIDs (Array<string>)
     *          The array of report IDs to offer to the user.
     *
     *        onAction (function, optional)
     *          A callback to fire once the user performs an
     *          action on the notification bar (this includes
     *          dismissing the notification).
     *
     * @returns The <xul:notification> if one is shown. null otherwise.
     */
    export function show({ notificationID, reportIDs, onAction }: {
        notificationID: any;
        reportIDs: any;
        onAction: any;
    }): any;
    export let autoSubmit: any;
    /**
     * Attempt to submit reports to the crash report server.
     *
     * @param reportIDs (Array<string>)
     *        The array of reportIDs to submit.
     * @param submittedFrom (string)
     *        One of the CrashSubmit.SUBMITTED_FROM_* constants representing
     *        how this crash was submitted.
     */
    export function submitReports(reportIDs: any, submittedFrom: any): void;
}
/**
 * BrowserWeakMap is exactly like a WeakMap, but expects <xul:browser>
 * objects only.
 *
 * Under the hood, BrowserWeakMap keys the map off of the <xul:browser>
 * permanentKey. If, however, the browser has never gotten a permanentKey,
 * it falls back to keying on the <xul:browser> element itself.
 */
declare class BrowserWeakMap extends WeakMap<object, any> {
    constructor(entries?: readonly (readonly [object, any])[]);
    constructor(iterable: Iterable<readonly [any, any]>);
    get(browser: any): any;
    set(browser: any, value: any): this;
    delete(browser: any): boolean;
}
export {};
