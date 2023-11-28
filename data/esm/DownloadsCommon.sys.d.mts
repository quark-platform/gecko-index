export namespace DownloadsCommon {
    let DOWNLOAD_NOTSTARTED: number;
    let DOWNLOAD_DOWNLOADING: number;
    let DOWNLOAD_FINISHED: number;
    let DOWNLOAD_FAILED: number;
    let DOWNLOAD_CANCELED: number;
    let DOWNLOAD_PAUSED: number;
    let DOWNLOAD_BLOCKED_PARENTAL: number;
    let DOWNLOAD_DIRTY: number;
    let DOWNLOAD_BLOCKED_POLICY: number;
    let ATTENTION_NONE: string;
    let ATTENTION_SUCCESS: string;
    let ATTENTION_INFO: string;
    let ATTENTION_WARNING: string;
    let ATTENTION_SEVERE: string;
    let SUPPRESS_NONE: number;
    let SUPPRESS_PANEL_OPEN: number;
    let SUPPRESS_ALL_DOWNLOADS_OPEN: number;
    let SUPPRESS_CONTENT_AREA_DOWNLOADS_OPEN: number;
    const strings: {};
    const openInSystemViewerItemEnabled: any;
    const alwaysOpenInSystemViewerItemEnabled: any;
    /**
     * Get access to one of the DownloadsData, PrivateDownloadsData, or
     * HistoryDownloadsData objects, depending on the privacy status of the
     * specified window and on whether history downloads should be included.
     *
     * @param [optional] window
     *        The browser window which owns the download button.
     *        If not given, the privacy status will be assumed as non-private.
     * @param [optional] history
     *        True to include history downloads when the window is public.
     * @param [optional] privateAll
     *        Whether to force the public downloads data to be returned together
     *        with the private downloads data for a private window.
     * @param [optional] limited
     *        True to limit the amount of downloads returned to
     *        `kMaxHistoryResultsForLimitedView`.
     */
    function getData(window: any, history?: boolean, privateAll?: boolean, limited?: boolean): any;
    /**
     * Initializes the Downloads back-end and starts receiving events for both the
     * private and non-private downloads data objects.
     */
    function initializeAllDataLinks(): void;
    /**
     * Get access to one of the DownloadsIndicatorData or
     * PrivateDownloadsIndicatorData objects, depending on the privacy status of
     * the window in question.
     */
    function getIndicatorData(aWindow: any): any;
    /**
     * Returns a reference to the DownloadsSummaryData singleton - creating one
     * in the process if one hasn't been instantiated yet.
     *
     * @param aWindow
     *        The browser window which owns the download button.
     * @param aNumToExclude
     *        The number of items on the top of the downloads list to exclude
     *        from the summary.
     */
    function getSummary(aWindow: any, aNumToExclude: any): any;
    let _summary: any;
    let _privateSummary: any;
    /**
     * Returns the legacy state integer value for the provided Download object.
     */
    function stateOfDownload(download: any): number;
    /**
     * Removes a Download object from both session and history downloads.
     */
    function deleteDownload(download: any): Promise<void>;
    /**
     * Deletes all files associated with a download, with or without removing it
     * from the session downloads list and/or download history.
     *
     * @param download
     *        The download to delete and/or forget.
     * @param clearHistory
     *        Optional. Removes history from session downloads list or history.
     *        0 - Don't remove the download from session list or history.
     *        1 - Remove the download from session list, but not history.
     *        2 - Remove the download from both session list and history.
     */
    function deleteDownloadFiles(download: any, clearHistory?: number): Promise<void>;
    /**
     * Get a nsIMIMEInfo object for a download
     */
    function getMimeInfo(download: any): any;
    /**
     * Confirm if the download exists on the filesystem and is a given mime-type
     */
    function isFileOfType(download: any, mimeType: any): boolean;
    /**
     * Copies the source URI of the given Download object to the clipboard.
     */
    function copyDownloadLink(download: any): void;
    /**
     * Given an iterable collection of Download objects, generates and returns
     * statistics about that collection.
     *
     * @param downloads An iterable collection of Download objects.
     *
     * @return Object whose properties are the generated statistics. Currently,
     *         we return the following properties:
     *
     *         numActive       : The total number of downloads.
     *         numPaused       : The total number of paused downloads.
     *         numDownloading  : The total number of downloads being downloaded.
     *         totalSize       : The total size of all downloads once completed.
     *         totalTransferred: The total amount of transferred data for these
     *                           downloads.
     *         slowestSpeed    : The slowest download rate.
     *         rawTimeLeft     : The estimated time left for the downloads to
     *                           complete.
     *         percentComplete : The percentage of bytes successfully downloaded.
     */
    function summarizeDownloads(downloads: any): {
        numActive: number;
        numPaused: number;
        numDownloading: number;
        totalSize: number;
        totalTransferred: number;
        slowestSpeed: number;
        rawTimeLeft: number;
        percentComplete: number;
    };
    /**
     * If necessary, smooths the estimated number of seconds remaining for one
     * or more downloads to complete.
     *
     * @param aSeconds
     *        Current raw estimate on number of seconds left for one or more
     *        downloads. This is a floating point value to help get sub-second
     *        accuracy for current and future estimates.
     */
    function smoothSeconds(aSeconds: any, aLastSeconds: any): number;
    /**
     * Opens a downloaded file.
     *
     * @param downloadProperties
     *        A Download object or the initial properties of a serialized download
     * @param options.openWhere
     *        Optional string indicating how to handle opening a download target file URI.
     *        One of "window", "tab", "tabshifted".
     * @param options.useSystemDefault
     *        Optional value indicating how to handle launching this download,
     *        this call only. Will override the associated mimeInfo.preferredAction
     * @return {Promise}
     * @resolves When the instruction to launch the file has been
     *           successfully given to the operating system or handled internally
     * @rejects  JavaScript exception if there was an error trying to launch
     *           the file.
     */
    function openDownload(download: any, options: any): Promise<any>;
    /**
     * Show a downloaded file in the system file manager.
     *
     * @param aFile
     *        a downloaded file.
     */
    function showDownloadedFile(aFile: any): void;
    /**
     * Show the specified folder in the system file manager.
     *
     * @param aDirectory
     *        a directory to be opened with system file manager.
     */
    function showDirectory(aDirectory: any): void;
    /**
     * Displays an alert message box which asks the user if they want to
     * unblock the downloaded file or not.
     *
     * @param options
     *        An object with the following properties:
     *        {
     *          verdict:
     *            The detailed reason why the download was blocked, according to
     *            the "Downloads.Error.BLOCK_VERDICT_" constants. If an unknown
     *            reason is specified, "Downloads.Error.BLOCK_VERDICT_MALWARE" is
     *            assumed.
     *          window:
     *            The window with which this action is associated.
     *          dialogType:
     *            String that determines which actions are available:
     *             - "unblock" to offer just "unblock".
     *             - "chooseUnblock" to offer "unblock" and "confirmBlock".
     *             - "chooseOpen" to offer "open" and "confirmBlock".
     *        }
     *
     * @return {Promise}
     * @resolves String representing the action that should be executed:
     *            - "open" to allow the download and open the file.
     *            - "unblock" to allow the download without opening the file.
     *            - "confirmBlock" to delete the blocked data permanently.
     *            - "cancel" to do nothing and cancel the operation.
     */
    function confirmUnblockDownload({ verdict, window, dialogType }: {
        verdict: any;
        window: any;
        dialogType: any;
    }): Promise<any>;
}
