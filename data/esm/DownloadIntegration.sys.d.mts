export namespace DownloadIntegration {
    let _store: any;
    /**
     * Returns whether data for blocked downloads should be kept on disk.
     * Implementations which support unblocking downloads may return true to
     * keep the blocked download on disk until its fate is decided.
     *
     * If a download is blocked and the partial data is kept the Download's
     * 'hasBlockedData' property will be true. In this state Download.unblock()
     * or Download.confirmBlock() may be used to either unblock the download or
     * remove the downloaded data respectively.
     *
     * Even if shouldKeepBlockedData returns true, if the download did not use a
     * partFile the blocked data will be removed - preventing the complete
     * download from existing on disk with its final filename.
     *
     * @return boolean True if data should be kept.
     */
    function shouldKeepBlockedData(): boolean;
    /**
     * Performs initialization of the list of persistent downloads, before its
     * first use by the host application.  This function may be called only once
     * during the entire lifetime of the application.
     *
     * @param list
     *        DownloadList object to be initialized.
     *
     * @return {Promise}
     * @resolves When the list has been initialized.
     * @rejects JavaScript exception.
     */
    function initializePublicDownloadList(list: any): Promise<any>;
    /**
     * Called by initializePublicDownloadList to load the list of persistent
     * downloads, before its first use by the host application.  This function may
     * be called only once during the entire lifetime of the application.
     *
     * @param list
     *        DownloadList object to be populated with the download objects
     *        serialized from the previous session.  This list will be persisted
     *        to disk during the session lifetime.
     *
     * @return {Promise}
     * @resolves When the list has been populated.
     * @rejects JavaScript exception.
     */
    function loadPublicDownloadListFromStore(list: any): Promise<any>;
    /**
     * Determines if a Download object from the list of persistent downloads
     * should be saved into a file, so that it can be restored across sessions.
     *
     * This function allows filtering out downloads that the host application is
     * not interested in persisting across sessions, for example downloads that
     * finished successfully.
     *
     * @param aDownload
     *        The Download object to be inspected.  This is originally taken from
     *        the global DownloadList object for downloads that were not started
     *        from a private browsing window.  The item may have been removed
     *        from the list since the save operation started, though in this case
     *        the save operation will be repeated later.
     *
     * @return True to save the download, false otherwise.
     */
    function shouldPersistDownload(aDownload: any): any;
    /**
     * Returns the system downloads directory asynchronously.
     *
     * @return {Promise}
     * @resolves The downloads directory string path.
     */
    function getSystemDownloadsDirectory(): Promise<any>;
    let _downloadsDirectory: any;
    /**
     * Returns the user downloads directory asynchronously.
     *
     * @return {Promise}
     * @resolves The downloads directory string path.
     */
    function getPreferredDownloadsDirectory(): Promise<any>;
    /**
     * Returns the temporary downloads directory asynchronously.
     *
     * @return {Promise}
     * @resolves The downloads directory string path.
     */
    function getTemporaryDownloadsDirectory(): Promise<any>;
    /**
     * Checks to determine whether to block downloads for parental controls.
     *
     * aParam aDownload
     *        The download object.
     *
     * @return {Promise}
     * @resolves The boolean indicates to block downloads or not.
     */
    function shouldBlockForParentalControls(aDownload: any): Promise<any>;
    /**
     * Checks to determine whether to block downloads because they might be
     * malware, based on application reputation checks.
     *
     * aParam aDownload
     *        The download object.
     *
     * @return {Promise}
     * @resolves Object with the following properties:
     *           {
     *             shouldBlock: Whether the download should be blocked.
     *             verdict: Detailed reason for the block, according to the
     *                      "Downloads.Error.BLOCK_VERDICT_" constants, or empty
     *                      string if the reason is unknown.
     *           }
     */
    function shouldBlockForReputationCheck(aDownload: any): Promise<any>;
    /**
     * Checks whether downloaded files should be marked as coming from
     * Internet Zone.
     *
     * @return true if files should be marked
     */
    function _shouldSaveZoneInformation(): boolean;
    /**
     * Builds a key and URL value pair for the "Zone.Identifier" Alternate Data
     * Stream.
     *
     * @param aKey
     *        String to write before the "=" sign. This is not validated.
     * @param aUrl
     *        URL string to write after the "=" sign. Only the "http(s)" and
     *        "ftp" schemes are allowed, and usernames and passwords are
     *        stripped.
     * @param [optional] aFallback
     *        Value to place after the "=" sign in case the URL scheme is not
     *        allowed. If unspecified, an empty string is returned when the
     *        scheme is not allowed.
     *
     * @return Line to add to the stream, including the final CRLF, or an empty
     *         string if the validation failed.
     */
    function _zoneIdKey(aKey: any, aUrl: any, aFallback: any): string;
    /**
     * Performs platform-specific operations when a download is done.
     *
     * aParam aDownload
     *        The Download object.
     *
     * @return {Promise}
     * @resolves When all the operations completed successfully.
     * @rejects JavaScript exception if any of the operations failed.
     */
    function downloadDone(aDownload: any): Promise<any>;
    /**
     * Decide whether a download of this type, opened from the downloads
     * list, should open internally.
     *
     * @param aMimeType
     *        The MIME type of the file, as a string
     * @param [optional] aExtension
     *        The file extension, which can match instead of the MIME type.
     */
    function shouldViewDownloadInternally(aMimeType: any, aExtension: any): boolean;
    /**
     * Launches a file represented by the target of a download. This can
     * open the file with the default application for the target MIME type
     * or file extension, or with a custom application if
     * aDownload.launcherPath is set.
     *
     * @param    aDownload
     *           A Download object that contains the necessary information
     *           to launch the file. The relevant properties are: the target
     *           file, the contentType and the custom application chosen
     *           to launch it.
     * @param options.openWhere     Optional string indicating how to open when handling
     *                              download by opening the target file URI.
     *                              One of "window", "tab", "tabshifted"
     * @param options.useSystemDefault
     *                              Optional value indicating how to handle launching this download,
     *                              this time only. Will override the associated mimeInfo.preferredAction
     *
     * @return {Promise}
     * @resolves When the instruction to launch the file has been
     *           successfully given to the operating system. Note that
     *           the OS might still take a while until the file is actually
     *           launched.
     * @rejects  JavaScript exception if there was an error trying to launch
     *           the file.
     */
    function launchDownload(aDownload: any, { openWhere, useSystemDefault }: {
        openWhere: any;
        useSystemDefault?: any;
    }): Promise<any>;
    /**
     * Asks for confirmation for launching the specified executable file. This
     * can be overridden by regression tests to avoid the interactive prompt.
     */
    function confirmLaunchExecutable(path: any): Promise<any>;
    /**
     * Launches the specified file, unless overridden by regression tests.
     * @note Always use launchDownload() from the outside of this module, it is
     *       both more powerful and safer.
     */
    function launchFile(file: any, mimeInfo: any): void;
    /**
     * Shows the containing folder of a file.
     *
     * @param aFilePath
     *        The path to the file.
     *
     * @return {Promise}
     * @resolves When the instruction to open the containing folder has been
     *           successfully given to the operating system. Note that
     *           the OS might still take a while until the folder is actually
     *           opened.
     * @rejects  JavaScript exception if there was an error trying to open
     *           the containing folder.
     */
    function showContainingDirectory(aFilePath: any): Promise<any>;
    /**
     * Calls the directory service, create a downloads directory and returns an
     * nsIFile for the downloads directory.
     *
     * @return {Promise}
     * @resolves The directory string path.
     */
    function _createDownloadsDirectory(aName: any): Promise<any>;
    /**
     * Returns the string path for the given directory service location name. This
     * can be overridden by regression tests to return the path of the system
     * temporary directory in all cases.
     */
    function _getDirectory(name: any): any;
    /**
     * Initializes the DownloadSpamProtection instance.
     * This is used to observe and group multiple automatic downloads.
     */
    function _initializeDownloadSpamProtection(): void;
    /**
     * Register the downloads interruption observers.
     *
     * @param aList
     *        The public or private downloads list.
     * @param aIsPrivate
     *        True if the list is private, false otherwise.
     *
     * @return {Promise}
     * @resolves When the views and observers are added.
     */
    function addListObservers(aList: any, aIsPrivate: any): Promise<any>;
    /**
     * Force a save on _store if it exists. Used to ensure downloads do not
     * persist after being sanitized on Android.
     *
     * @return {Promise}
     * @resolves When _store.save() completes.
     */
    function forceSave(): Promise<any>;
}
