export namespace DownloadsTaskbar {
    let _summary: any;
    let _taskbarProgress: any;
    /**
     * This method is called after a new browser window is opened, and ensures
     * that the download progress indicator is displayed in the taskbar.
     *
     * On Windows, the indicator is attached to the first browser window that
     * calls this method.  When the window is closed, the indicator is moved to
     * another browser window, if available, in no particular order.  When there
     * are no browser windows visible, the indicator is hidden.
     *
     * On Mac OS X, the indicator is initialized globally when this method is
     * called for the first time.  Subsequent calls have no effect.
     *
     * @param aBrowserWindow
     *        nsIDOMWindow object of the newly opened browser window to which the
     *        indicator may be attached.
     */
    function registerIndicator(aBrowserWindow: any): void;
    /**
     * On Windows, attaches the taskbar indicator to the specified browser window.
     */
    function _attachIndicator(aWindow: any): void;
    /**
     * In gtk3, the window itself implements the progress interface.
     */
    function _attachGtkTaskbarProgress(aWindow: any): void;
    function onSummaryChanged(): void;
}
